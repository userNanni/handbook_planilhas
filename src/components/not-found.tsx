import { Link } from "@tanstack/react-router"

export function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
			<span className="text-[11px] font-medium tracking-[0.1em] uppercase text-fd-muted-foreground">404</span>
			<h1 className="text-4xl font-bold tracking-[-0.04em] text-fd-foreground">Página não encontrada</h1>
			<p className="text-sm text-fd-muted-foreground max-w-xs">Essa página não existe ou foi movida.</p>
			<Link
				to="/"
				className="inline-flex items-center gap-2 px-4 py-2 border border-fd-foreground bg-fd-foreground text-fd-background text-sm font-medium hover:bg-transparent hover:text-fd-foreground transition-colors cursor-pointer"
			>
				Voltar ao início
			</Link>
		</div>
	)
}
