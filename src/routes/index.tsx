import { createFileRoute, Link } from "@tanstack/react-router"
import { HomeLayout } from "fumadocs-ui/layouts/home"
import { baseOptions } from "@/lib/layout.shared"

export const Route = createFileRoute("/")({
	component: Home,
})

function Home() {
	return (
		<HomeLayout {...baseOptions()}>
			<main className="flex flex-col w-full">
				{/* ── Hero ─────────────────────────────────────────────── */}
				<section className="min-h-[calc(100dvh-3.5rem)] flex flex-col items-center justify-center px-4 border-b border-fd-border">
					<div className="w-full max-w-3xl flex flex-col gap-8">
						{/* label */}
						<span
							className="text-[11px] font-medium tracking-[0.1em] uppercase text-fd-muted-foreground"
							aria-label="Categoria"
						>
							Google Sheets · Banco de Dados · Aeronáutica
						</span>

						{/* título */}
						<h1 className="text-5xl sm:text-7xl font-bold leading-none tracking-[-0.04em] text-fd-foreground">
							Handbook
							<br />
							de Planilhas
						</h1>

						{/* descrição */}
						<p className="max-w-lg text-base text-fd-muted-foreground leading-relaxed">
							Referência prática sobre Google Sheets, Query, funções avançadas e conceitos de banco de dados — focado no contexto do Corpo de Cadetes da Aeronáutica.
						</p>

						{/* ações */}
						<div className="flex flex-wrap gap-3 pt-2">
							<Link
								to="/docs/$"
								params={{ _splat: "intro" }}
								className="inline-flex items-center gap-2 px-5 py-2.5 border border-fd-foreground bg-fd-foreground text-fd-background font-medium text-sm hover:bg-transparent hover:text-fd-foreground transition-colors cursor-pointer"
							>
								Começar a ler
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</Link>
							<Link
								to="/docs/$"
								params={{ _splat: "funcoes/query" }}
								className="inline-flex items-center gap-2 px-5 py-2.5 border border-fd-border bg-fd-background text-fd-foreground font-medium text-sm hover:border-fd-foreground transition-colors cursor-pointer"
							>
								Função QUERY
							</Link>
						</div>
					</div>
				</section>

				{/* ── Seções ───────────────────────────────────────────── */}
				<section className="py-16 px-4">
					<div className="w-full max-w-3xl mx-auto flex flex-col gap-12">
						<div className="flex flex-col gap-2">
							<span className="text-[11px] font-medium tracking-[0.1em] uppercase text-fd-muted-foreground">Conteúdo</span>
							<h2 className="text-2xl font-semibold tracking-[-0.02em] text-fd-foreground">O que você vai encontrar</h2>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-fd-border">
							{SECTIONS.map(({ slug, title, description, tag }) => (
								<Link
									key={slug}
									to="/docs/$"
									params={{ _splat: slug }}
									className="group flex flex-col gap-3 p-6 bg-fd-background hover:bg-fd-accent transition-colors cursor-pointer border-b border-r border-fd-border last:border-b-0 [&:nth-child(even)]:border-r-0 sm:[&:nth-child(n)]:border-b sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
								>
									<span className="text-[10px] font-medium tracking-[0.08em] uppercase text-fd-muted-foreground">{tag}</span>
									<h3 className="text-base font-semibold tracking-[-0.01em] text-fd-foreground">{title}</h3>
									<p className="text-sm text-fd-muted-foreground leading-relaxed">{description}</p>
									<span className="mt-auto flex items-center gap-1 text-xs font-medium text-fd-foreground opacity-0 group-hover:opacity-100 transition-opacity">
										Ler
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
											<path d="M5 12h14M12 5l7 7-7 7" />
										</svg>
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* ── Rodapé ───────────────────────────────────────────── */}
				<footer className="mt-auto border-t border-fd-border px-4 py-8">
					<div className="max-w-3xl mx-auto flex items-center justify-between text-xs text-fd-muted-foreground">
						<span>Handbook de Planilhas</span>
						<span>Corpo de Cadetes da Aeronáutica · {new Date().getFullYear()}</span>
					</div>
				</footer>
			</main>
		</HomeLayout>
	)
}

const SECTIONS = [
	{
		slug: "intro",
		title: "Introdução a Planilhas",
		description: "Motivação, documentação e primeiros passos com Google Sheets.",
		tag: "Fundamentos",
	},
	{
		slug: "funcoes/query",
		title: "Função QUERY",
		description: "A função mais poderosa do Sheets: estrutura, cláusulas e exemplos reais.",
		tag: "Funções",
	},
	{
		slug: "funcoes/xlookup",
		title: "XLOOKUP",
		description: "Busca avançada — substituto moderno do VLOOKUP com mais poder.",
		tag: "Funções",
	},
	{
		slug: "casos-de-estudo",
		title: "Casos de Estudo",
		description: "Problemas reais resolvidos passo a passo para consolidar o aprendizado.",
		tag: "Prática",
	},
] as const
