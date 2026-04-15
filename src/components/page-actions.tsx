"use client"

import { useState, useCallback } from "react"

interface PageActionsProps {
	slug: string
	title: string
}

export function PageActions({ slug, title }: PageActionsProps) {
	const [epubLoading, setEpubLoading] = useState(false)
	const [epubError, setEpubError] = useState(false)

	const handlePrint = useCallback(() => {
		window.print()
	}, [])

	const handleEpub = useCallback(async () => {
		setEpubLoading(true)
		setEpubError(false)
		try {
			const res = await fetch(`/api/export/epub?slug=${encodeURIComponent(slug)}`)
			if (!res.ok) throw new Error(`HTTP ${res.status}`)

			const blob = await res.blob()
			const url = URL.createObjectURL(blob)
			const a = document.createElement("a")
			a.href = url
			a.download = `${slug.split("/").at(-1) ?? "handbook"}.epub`
			a.click()
			URL.revokeObjectURL(url)
		} catch {
			setEpubError(true)
			setTimeout(() => setEpubError(false), 3000)
		} finally {
			setEpubLoading(false)
		}
	}, [slug])

	return (
		<div className="flex flex-col gap-1 px-2 py-3 border-t border-fd-border" aria-label={`Exportar: ${title}`}>
			<span className="text-[10px] font-medium tracking-[0.08em] uppercase text-fd-muted-foreground px-2 pb-1">
				Exportar
			</span>

			{/* PDF via print */}
			<button
				type="button"
				onClick={handlePrint}
				className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className="shrink-0 text-fd-muted-foreground"
				>
					<polyline points="6 9 6 2 18 2 18 9" />
					<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
					<rect width="12" height="8" x="6" y="14" />
				</svg>
				Salvar como PDF
			</button>

			{/* ePub download */}
			<button
				type="button"
				onClick={handleEpub}
				disabled={epubLoading}
				className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full disabled:opacity-50 disabled:cursor-wait"
			>
				{epubLoading ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
						className="shrink-0 text-fd-muted-foreground animate-spin"
					>
						<path d="M21 12a9 9 0 1 1-6.219-8.56" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
						className="shrink-0 text-fd-muted-foreground"
					>
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
					</svg>
				)}
				{epubError ? "Erro — tente novamente" : epubLoading ? "Gerando…" : "Baixar ePub"}
			</button>

			{/* Copiar link */}
			<CopyLinkButton />
		</div>
	)
}

function CopyLinkButton() {
	const [copied, setCopied] = useState(false)

	const handleCopy = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(window.location.href)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch {
			// fallback silencioso
		}
	}, [])

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-fd-foreground hover:bg-fd-accent transition-colors cursor-pointer text-left w-full"
		>
			{copied ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className="shrink-0 text-fd-muted-foreground"
				>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
					className="shrink-0 text-fd-muted-foreground"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
				</svg>
			)}
			{copied ? "Link copiado!" : "Copiar link"}
		</button>
	)
}
