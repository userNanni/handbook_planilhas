/**
 * epub.ts — Gerador EPUB 3.0 minimalista usando fflate
 *
 * ePub é um ZIP com estrutura específica:
 *   mimetype          (não comprimido, primeiro arquivo)
 *   META-INF/container.xml
 *   OEBPS/content.opf
 *   OEBPS/nav.xhtml
 *   OEBPS/toc.ncx
 *   OEBPS/content.xhtml
 *   OEBPS/style.css
 */
import { readFile } from "node:fs/promises"
import { zipSync, strToU8 } from "fflate"
import matter from "gray-matter"
import { remark } from "remark"
import remarkFrontmatter from "remark-frontmatter"
import remarkMath from "remark-math"
import remarkRehype from "remark-rehype"
import rehypeKatex from "rehype-katex"
import rehypeStringify from "rehype-stringify"

interface EpubOptions {
	filePath: string
	title: string
	description: string
	slug: string
}

const EPUB_CSS = `
body { font-family: Georgia, serif; line-height: 1.7; margin: 1.5em 2em; color: #111; }
h1 { font-size: 1.8em; font-weight: 700; margin-bottom: 0.4em; letter-spacing: -0.02em; }
h2 { font-size: 1.35em; font-weight: 600; margin-top: 2em; margin-bottom: 0.4em; letter-spacing: -0.01em; }
h3 { font-size: 1.1em; font-weight: 600; margin-top: 1.5em; }
p { margin: 0.8em 0; }
code { font-family: "Courier New", monospace; font-size: 0.875em; background: #f4f4f4; padding: 0.15em 0.4em; }
pre { background: #f4f4f4; padding: 1em; overflow-x: auto; border-left: 3px solid #111; }
pre code { background: none; padding: 0; }
blockquote { border-left: 3px solid #ccc; margin: 1em 0; padding-left: 1em; color: #555; }
table { width: 100%; border-collapse: collapse; margin: 1em 0; }
th, td { border: 1px solid #ddd; padding: 0.5em 0.75em; }
th { background: #f0f0f0; font-weight: 600; }
a { color: #111; text-decoration: underline; }
`.trim()

function uuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0
		const v = c === "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

function containerXml() {
	return `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
}

function contentOpf(title: string, description: string, id: string, date: string) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<package version="3.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${escapeXml(title)}</dc:title>
    <dc:description>${escapeXml(description)}</dc:description>
    <dc:language>pt-BR</dc:language>
    <dc:identifier id="uid">${id}</dc:identifier>
    <dc:date>${date}</dc:date>
    <dc:creator>Handbook de Planilhas</dc:creator>
    <meta property="dcterms:modified">${date}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="content" href="content.xhtml" media-type="application/xhtml+xml"/>
    <item id="style" href="style.css" media-type="text/css"/>
  </manifest>
  <spine toc="ncx">
    <itemref idref="content"/>
  </spine>
</package>`
}

function tocNcx(title: string, id: string) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${id}"/>
    <meta name="dtb:depth" content="1"/>
  </head>
  <docTitle><text>${escapeXml(title)}</text></docTitle>
  <navMap>
    <navPoint id="navpoint-1" playOrder="1">
      <navLabel><text>${escapeXml(title)}</text></navLabel>
      <content src="content.xhtml"/>
    </navPoint>
  </navMap>
</ncx>`
}

function navXhtml(title: string) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="pt-BR">
<head><meta charset="UTF-8"/><title>${escapeXml(title)}</title></head>
<body>
  <nav epub:type="toc">
    <ol><li><a href="content.xhtml">${escapeXml(title)}</a></li></ol>
  </nav>
</body>
</html>`
}

function wrapXhtml(title: string, bodyHtml: string) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <title>${escapeXml(title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<h1>${escapeXml(title)}</h1>
${bodyHtml}
</body>
</html>`
}

function escapeXml(str: string) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

async function mdxToHtml(filePath: string): Promise<string> {
	const raw = await readFile(filePath, "utf-8")
	const { content } = matter(raw)

	// Strip MDX import/export statements before processing
	const cleaned = content
		.replace(/^import\s+.*?from\s+['"].*?['"]\s*;?\s*$/gm, "")
		.replace(/^export\s+.*$/gm, "")
		.replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, "")
		.replace(/<[A-Z][^/]*\/>/g, "")
		.trim()

	const file = await remark()
		.use(remarkFrontmatter)
		.use(remarkMath)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeKatex)
		.use(rehypeStringify, { allowDangerousHtml: true })
		.process(cleaned)

	return String(file)
}

export async function buildEpub({ filePath, title, description, slug: _slug }: EpubOptions): Promise<Uint8Array> {
	const bodyHtml = await mdxToHtml(filePath)
	const id = uuid()
	const date = new Date().toISOString().split("T")[0] ?? new Date().toISOString().slice(0, 10)

	// fflate: [data, options] tuple por arquivo para controlar compressão
	const files = {
		// mimetype DEVE ser o primeiro arquivo e sem compressão (nível 0)
		mimetype: [strToU8("application/epub+zip"), { level: 0 as const }],
		"META-INF/container.xml": [strToU8(containerXml()), { level: 6 as const }],
		"OEBPS/content.opf": [strToU8(contentOpf(title, description, id, date)), { level: 6 as const }],
		"OEBPS/toc.ncx": [strToU8(tocNcx(title, id)), { level: 6 as const }],
		"OEBPS/nav.xhtml": [strToU8(navXhtml(title)), { level: 6 as const }],
		"OEBPS/content.xhtml": [strToU8(wrapXhtml(title, bodyHtml)), { level: 6 as const }],
		"OEBPS/style.css": [strToU8(EPUB_CSS), { level: 6 as const }],
	} as const satisfies Parameters<typeof zipSync>[0]

	return zipSync(files)
}
