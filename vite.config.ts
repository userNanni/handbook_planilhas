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
			prerender: { enabled: process.env.SKIP_PRERENDER !== "true" },
		}),
		react(),
		nitro({ config: { preset: "bun", moduleSideEffects: ["#nitro-vite-setup", ".nitro/vite/services/"] } }),
	],
	resolve: {
		// Lê @/* e collections/* diretamente do tsconfig.json (Vite 8+)
		tsconfigPaths: true,
		// Força tslib a usar o ESM nativo — evita o CJS UMD que seta __esModule:true
		// e quebra o __toESM do Rolldown no bundle SSR
		alias: {
			tslib: "tslib/tslib.es6.mjs",
		},
	},
})
