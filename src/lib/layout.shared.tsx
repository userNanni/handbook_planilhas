import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { appName, gitConfig } from "./shared"

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<span className="font-semibold tracking-[-0.02em] text-fd-foreground">
					{appName}
				</span>
			),
		},
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
		links: [
			{
				text: "Docs",
				url: "/docs/intro",
				active: "nested-url",
			},
		],
	}
}
