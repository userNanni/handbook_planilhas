import react from "@vitejs/plugin-react"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import mdx from "fumadocs-mdx/vite"
import { nitro } from "nitro/vite"

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		mdx(await import("./source.config")),
		tailwindcss(),
		tanstackStart({
			prerender: { enabled: true },
		}),
		react(),
		// @ts-expect-error — nitro aceita preset como opção de runtime (tipos desatualizados)
		nitro({ preset: "bun" }),
	],
	resolve: {
		// Lê @/* e collections/* diretamente do tsconfig.json (Vite 8+)
		tsconfigPaths: true,
	},
})
