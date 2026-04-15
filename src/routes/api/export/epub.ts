import { createFileRoute } from "@tanstack/react-router"
import { source } from "@/lib/source"
import { buildEpub } from "@/lib/epub"

export const Route = createFileRoute("/api/export/epub")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const url = new URL(request.url)
				const slug = url.searchParams.get("slug") ?? ""
				const slugParts = slug.split("/").filter(Boolean)

				const page = source.getPage(slugParts)
				if (!page) {
					return new Response("Página não encontrada", { status: 404 })
				}

				const title = (page.data as { title?: string }).title ?? slug
				const description = (page.data as { description?: string }).description ?? ""

				try {
					const epubBuffer = await buildEpub({ filePath: page.path, title, description, slug })

					const filename = `${slugParts.at(-1) ?? "handbook"}.epub`
					// ArrayBuffer resolve ambiguidade de SharedArrayBuffer no tipo Uint8Array
					const blob = new Blob([epubBuffer.buffer as ArrayBuffer], { type: "application/epub+zip" })
					return new Response(blob, {
						headers: {
							"Content-Type": "application/epub+zip",
							"Content-Disposition": `attachment; filename="${filename}"`,
							"Cache-Control": "no-store",
						},
					})
				} catch (err) {
					console.error("[epub] Erro ao gerar:", err)
					return new Response("Erro ao gerar ePub", { status: 500 })
				}
			},
		},
	},
})
