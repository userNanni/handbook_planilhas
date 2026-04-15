import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import * as React from "react"
import appCss from "@/styles/app.css?url"
import printCss from "@/styles/print.css?url"
import { RootProvider } from "fumadocs-ui/provider/tanstack"

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Handbook de Planilhas" },
			{ name: "description", content: "Tudo o que você precisa saber sobre planilhas" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "stylesheet", href: printCss },
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "apple-touch-icon", href: "/img/icon.svg" },
			{ rel: "manifest", href: "/site.webmanifest" },
			{
				rel: "stylesheet",
				href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
				integrity: "sha384-nB0miv6/jRmo5UMMR/qG7gRJZKFU5Gf0YbW+3oLjYBMBMc5dHq1F3Y2p5gXqJFl",
				crossOrigin: "anonymous",
			},
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="flex flex-col min-h-screen">
				<RootProvider>
					<Outlet />
				</RootProvider>
				<Scripts />
			</body>
		</html>
	)
}
