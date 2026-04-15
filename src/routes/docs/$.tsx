import { createFileRoute, notFound } from "@tanstack/react-router"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { createServerFn } from "@tanstack/react-start"
import { source } from "@/lib/source"
import browserCollections from "collections/browser"
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/layouts/docs/page"
import { baseOptions } from "@/lib/layout.shared"
import { useFumadocsLoader } from "fumadocs-core/source/client"
import { Suspense } from "react"
import { useMDXComponents } from "@/components/mdx"
import { PageActions } from "@/components/page-actions"

export const Route = createFileRoute("/docs/$")({
	component: Page,
	loader: async ({ params }) => {
		const slugs = params._splat?.split("/").filter(Boolean) ?? []
		return serverLoader({ data: slugs })
	},
})

const serverLoader = createServerFn({ method: "GET" })
	.inputValidator((slugs: string[]) => slugs)
	.handler(async ({ data: slugs }) => {
		const page = source.getPage(slugs)
		if (!page) throw notFound()

		return {
			path: page.path,
			slug: slugs.join("/"),
			title: (page.data as { title?: string }).title ?? "",
			pageTree: await source.serializePageTree(source.getPageTree()),
		}
	})

const clientLoader = browserCollections.docs.createClientLoader({
	component({ toc, frontmatter, default: MDX }) {
		return (
			<DocsPage toc={toc}>
				<DocsTitle>{frontmatter.title as string}</DocsTitle>
				<DocsDescription>{frontmatter.description as string}</DocsDescription>
				<DocsBody>
					<MDX components={useMDXComponents()} />
				</DocsBody>
			</DocsPage>
		)
	},
})

function Page() {
	const { path, pageTree, slug, title } = useFumadocsLoader(Route.useLoaderData())

	return (
		<DocsLayout
			{...baseOptions()}
			tree={pageTree}
			sidebar={{
				footer: <PageActions slug={slug} title={title} />,
			}}
		>
			<Suspense>{clientLoader.useContent(path, undefined)}</Suspense>
		</DocsLayout>
	)
}
