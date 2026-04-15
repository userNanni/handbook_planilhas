import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

export const docs = defineDocs({
	dir: "content/docs",
})

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [remarkMath],

		// rehypeKatex ANTES do rehypeCode (Shiki) — evita que remark-rehype
		// converta blocos $$...$$ em <code class="language-math"> antes do KaTeX processar.
		// A forma função recebe os plugins do preset já montados e insere rehypeKatex no início.
		rehypePlugins: (v) => [rehypeKatex, ...v],

		rehypeCodeOptions: {
			// Fallback + alias para linguagens não suportadas pelo Shiki
			defaultLanguage: "text",
			langAlias: {
				math: "text",
				excel: "text",
				sheets: "text",
				formula: "text",
				gsheets: "text",
			},
		},
	},
})
