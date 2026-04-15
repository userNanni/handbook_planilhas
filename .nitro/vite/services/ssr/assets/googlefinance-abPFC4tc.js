import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/googlefinance.mdx?collection=docs
var googlefinance_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "GOOGLEFINANCE",
	"description": "Acompanhe ações, índices e moedas no Google Sheets com GOOGLEFINANCE. Exemplos práticos (preço atual, histórico, atributos, câmbio) e limitações."
};
var structuredData = {
	"contents": [
		{
			"heading": "googlefinance",
			"content": "> Como o Google Sheets pode te ajudar a investir?"
		},
		{
			"heading": "googlefinance",
			"content": "Com a **inflação corroendo** o **poder de compra**, **investir** pode ser uma boa **estratégia** para **proteger** e **aumentar** o patrimônio.\\\nMas… meus **investimentos** estão indo bem? Minha **estratégia** está sendo cumprida? **Preciso** mudar algo na **alocação**?"
		},
		{
			"heading": "googlefinance",
			"content": "Para responder a essas perguntas de forma **estruturada**, podemos usar o Google Sheets e a função **GOOGLEFINANCE**."
		},
		{
			"heading": "googlefinance",
			"content": ":::caution Aviso de disponibilidade de dados\nCotações, atrasos, bolsas suportadas e cobertura variam. Consulte a tabela de exoneração de responsabilidade da Google para entender limitações e atrasos por mercado.\n:::"
		},
		{
			"heading": "googlefinance",
			"content": ":::note Separadores regionais\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\n:::"
		},
		{
			"heading": "sintaxe-básica",
			"content": "`ticker` (obrigatório): símbolo com prefixo da bolsa. Ex.: `\"BVMF:BBAS3\"`, `\"NASDAQ:GOOGL\"`."
		},
		{
			"heading": "sintaxe-básica",
			"content": "`atributo` (opcional): o que você quer trazer (ex.: `\"price\"`, `\"name\"`, `\"volume\"`). Se omitido, volta a série padrão."
		},
		{
			"heading": "sintaxe-básica",
			"content": "`data_inicial`, `data_final|n_dias`, `intervalo` (opcionais): para histórico."
		},
		{
			"heading": "sintaxe-básica",
			"content": "Documentação completa: Função GOOGLEFINANCE (oficial)"
		},
		{
			"heading": "1-preço-atual-de-uma-ação",
			"content": "Retorna o preço de **BBAS3** (Banco do Brasil) na **B3**."
		},
		{
			"heading": "1-preço-atual-de-uma-ação",
			"content": "Nome da ação:"
		},
		{
			"heading": "1-preço-atual-de-uma-ação",
			"content": "Moeda da cotação:"
		},
		{
			"heading": "2-vários-atributos-comuns",
			"content": "> Nem todos os atributos estão disponíveis para todos os tickers/bolsas."
		},
		{
			"heading": "3-histórico-fechamento-diário-entre-datas",
			"content": "Retorna uma tabela com datas e preços diários no período."
		},
		{
			"heading": "4-câmbio-moedas",
			"content": "Cotação USD → BRL em tempo real:"
		},
		{
			"heading": "4-câmbio-moedas",
			"content": "Histórico de câmbio (últimos 30 dias):"
		},
		{
			"heading": "aplicando-em-lista-de-tickers",
			"content": "Para uma lista em `A2:A` (ex.: `BVMF:BBAS3`, `BVMF:PETR4`), obtenha o preço atual por linha:"
		},
		{
			"heading": "aplicando-em-lista-de-tickers",
			"content": "Com `MAP` (moderno e legível):"
		},
		{
			"heading": "aplicando-em-lista-de-tickers",
			"content": "`INDEX` pega o valor principal quando a função retorna matriz."
		},
		{
			"heading": "aplicando-em-lista-de-tickers",
			"content": "`IFERROR` evita quebrar a planilha caso o ticker esteja inválido/indisponível."
		},
		{
			"heading": "aplicando-em-lista-de-tickers",
			"content": "Alternativa por linha com `BYROW`:"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Atributo"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Descrição"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Observações"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`price`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Preço atual"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Pode variar em tempo real ou com atraso"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`name`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Nome do ativo"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`symbol`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Símbolo"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`priceopen`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Preço de abertura"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`high`/`low`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Máximo/mínimo do dia"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`volume`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Volume negociado"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`marketcap`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Valor de mercado"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Nem sempre disponível"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`pe`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Preço/Lucro (P/L)"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Nem sempre disponível"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`eps`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Lucro por ação (LPA)"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Nem sempre disponível"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`closeyest`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Fechamento do dia anterior"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`high52`/`low52`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Máximo/mínimo de 52 semanas"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`beta`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Beta"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Nem sempre disponível"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "`currency`"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Moeda da cotação"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Útil para conversões"
		},
		{
			"heading": "tabela-de-atributos-úteis-amostra",
			"content": "Consulte a lista oficial e atualizada em: GOOGLEFINANCE — atributos."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": ":::tip Dicas"
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Padronize o prefixo da bolsa: ex.: `BVMF:`, `NASDAQ:`, `NYSE:`."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Use `IFERROR` para lidar com indisponibilidade temporária."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Para histórico, limite o período necessário (performance)."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Combine com formatação condicional para destacar variações.\n:::"
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": ":::caution Limitações comuns"
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Dados podem ter atraso e cobertura parcial por mercado."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Alguns atributos não existem para certos ativos."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Recalcula com frequência; em planilhas grandes pode pesar."
		},
		{
			"heading": "boas-práticas-e-limitações",
			"content": "Pode retornar `#N/A` durante pregão/fora de horário ou por excesso de requisições.\n:::"
		}
	],
	"headings": [
		{
			"id": "googlefinance",
			"content": "GOOGLEFINANCE"
		},
		{
			"id": "sintaxe-básica",
			"content": "Sintaxe básica"
		},
		{
			"id": "exemplos-rápidos",
			"content": "Exemplos rápidos"
		},
		{
			"id": "1-preço-atual-de-uma-ação",
			"content": "1\\) Preço atual de uma ação"
		},
		{
			"id": "2-vários-atributos-comuns",
			"content": "2\\) Vários atributos comuns"
		},
		{
			"id": "3-histórico-fechamento-diário-entre-datas",
			"content": "3\\) Histórico (fechamento diário entre datas)"
		},
		{
			"id": "4-câmbio-moedas",
			"content": "4\\) Câmbio (moedas)"
		},
		{
			"id": "aplicando-em-lista-de-tickers",
			"content": "Aplicando em lista de tickers"
		},
		{
			"id": "tabela-de-atributos-úteis-amostra",
			"content": "Tabela de atributos úteis (amostra)"
		},
		{
			"id": "boas-práticas-e-limitações",
			"content": "Boas práticas e limitações"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#googlefinance",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "GOOGLEFINANCE" })
	},
	{
		depth: 2,
		url: "#sintaxe-básica",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Sintaxe básica" })
	},
	{
		depth: 2,
		url: "#exemplos-rápidos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Exemplos rápidos" })
	},
	{
		depth: 3,
		url: "#1-preço-atual-de-uma-ação",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "1) Preço atual de uma ação" })
	},
	{
		depth: 3,
		url: "#2-vários-atributos-comuns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "2) Vários atributos comuns" })
	},
	{
		depth: 3,
		url: "#3-histórico-fechamento-diário-entre-datas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3) Histórico (fechamento diário entre datas)" })
	},
	{
		depth: 3,
		url: "#4-câmbio-moedas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "4) Câmbio (moedas)" })
	},
	{
		depth: 2,
		url: "#aplicando-em-lista-de-tickers",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Aplicando em lista de tickers" })
	},
	{
		depth: 2,
		url: "#tabela-de-atributos-úteis-amostra",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tabela de atributos úteis (amostra)" })
	},
	{
		depth: 2,
		url: "#boas-práticas-e-limitações",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Boas práticas e limitações" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		br: "br",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "googlefinance",
			children: "GOOGLEFINANCE"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Como o Google Sheets pode te ajudar a investir?" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Com a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "inflação corroendo" }),
			" o ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "poder de compra" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "investir" }),
			" pode ser uma boa ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "estratégia" }),
			" para ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "proteger" }),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "aumentar" }),
			" o patrimônio.",
			(0, import_jsx_runtime.jsx)(_components.br, {}),
			"\n",
			"Mas… meus ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "investimentos" }),
			" estão indo bem? Minha ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "estratégia" }),
			" está sendo cumprida? ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Preciso" }),
			" mudar algo na ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "alocação" }),
			"?"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Para responder a essas perguntas de forma ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "estruturada" }),
			", podemos usar o Google Sheets e a função ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "GOOGLEFINANCE" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			":::caution Aviso de disponibilidade de dados\nCotações, atrasos, bolsas suportadas e cobertura variam. Consulte a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://www.google.com/intl/pt-BR/googlefinance/disclaimer/",
				children: "tabela de exoneração de responsabilidade"
			}),
			" da Google para entender limitações e atrasos por mercado.\n:::"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::note Separadores regionais\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "sintaxe-básica",
			children: "Sintaxe básica"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(ticker; [atributo]; [data_inicial]; [data_final|n_dias]; [intervalo])" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ticker" }),
				" (obrigatório): símbolo com prefixo da bolsa. Ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"BVMF:BBAS3\"" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"NASDAQ:GOOGL\"" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "atributo" }),
				" (opcional): o que você quer trazer (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"price\"" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"name\"" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"volume\"" }),
				"). Se omitido, volta a série padrão."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "data_inicial" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "data_final|n_dias" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "intervalo" }),
				" (opcionais): para histórico."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Documentação completa: ", (0, import_jsx_runtime.jsx)(_components.a, {
			href: "https://support.google.com/docs/answer/3093281?hl=pt-BR",
			children: "Função GOOGLEFINANCE (oficial)"
		})] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "exemplos-rápidos",
			children: "Exemplos rápidos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-preço-atual-de-uma-ação",
			children: "1) Preço atual de uma ação"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"price\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Retorna o preço de ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "BBAS3" }),
			" (Banco do Brasil) na ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "B3" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Nome da ação:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"name\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Moeda da cotação:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"currency\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-vários-atributos-comuns",
			children: "2) Vários atributos comuns"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"volume\")     // volume" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"marketcap\")  // valor de mercado" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"pe\")         // P/L" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"eps\")        // LPA" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Nem todos os atributos estão disponíveis para todos os tickers/bolsas." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-histórico-fechamento-diário-entre-datas",
			children: "3) Histórico (fechamento diário entre datas)"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"BVMF:BBAS3\"; \"price\"; DATE(2024;1;1); TODAY(); \"DAILY\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Retorna uma tabela com datas e preços diários no período." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-câmbio-moedas",
			children: "4) Câmbio (moedas)"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Cotação USD → BRL em tempo real:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"CURRENCY:USDBRL\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Histórico de câmbio (últimos 30 dias):" }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=GOOGLEFINANCE(\"CURRENCY:USDBRL\"; \"price\"; TODAY()-30; TODAY())" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "aplicando-em-lista-de-tickers",
			children: "Aplicando em lista de tickers"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Para uma lista em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A" }),
			" (ex.: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "BVMF:BBAS3" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "BVMF:PETR4" }),
			"), obtenha o preço atual por linha:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" (moderno e legível):"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; LAMBDA(t;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  IF(LEN(t);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     IFERROR(INDEX(GOOGLEFINANCE(t; \"price\")); );" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "))" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }), " pega o valor principal quando a função retorna matriz."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "IFERROR" }), " evita quebrar a planilha caso o ticker esteja inválido/indisponível."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Alternativa por linha com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "BYROW" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=BYROW(A2:A; LAMBDA(linha;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  LET(t; INDEX(linha; 1);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    IF(LEN(t); IFERROR(INDEX(GOOGLEFINANCE(t; \"price\")); ); )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "))" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tabela-de-atributos-úteis-amostra",
			children: "Tabela de atributos úteis (amostra)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Atributo" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Descrição" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Observações" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "price" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Preço atual" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Pode variar em tempo real ou com atraso" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "name" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Nome do ativo" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "symbol" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Símbolo" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "priceopen" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Preço de abertura" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
					"/",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "low" })
				] }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Máximo/mínimo do dia" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "volume" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Volume negociado" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "marketcap" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Valor de mercado" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Nem sempre disponível" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pe" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Preço/Lucro (P/L)" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Nem sempre disponível" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "eps" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Lucro por ação (LPA)" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Nem sempre disponível" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "closeyest" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Fechamento do dia anterior" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsxs)(_components.td, { children: [
					(0, import_jsx_runtime.jsx)(_components.code, { children: "high52" }),
					"/",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "low52" })
				] }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Máximo/mínimo de 52 semanas" }),
				(0, import_jsx_runtime.jsx)(_components.td, {})
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "beta" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Beta" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Nem sempre disponível" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "currency" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Moeda da cotação" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Útil para conversões" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Consulte a lista oficial e atualizada em: ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://support.google.com/docs/answer/3093281?hl=pt-BR",
				children: "GOOGLEFINANCE — atributos"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "boas-práticas-e-limitações",
			children: "Boas práticas e limitações"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::tip Dicas" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Padronize o prefixo da bolsa: ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "BVMF:" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NASDAQ:" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "NYSE:" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IFERROR" }),
				" para lidar com indisponibilidade temporária."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Para histórico, limite o período necessário (performance)." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Combine com formatação condicional para destacar variações.\n:::" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::caution Limitações comuns" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Dados podem ter atraso e cobertura parcial por mercado." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Alguns atributos não existem para certos ativos." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Recalcula com frequência; em planilhas grandes pode pesar." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Pode retornar ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "#N/A" }),
				" durante pregão/fora de horário ou por excesso de requisições.\n:::"
			] }),
			"\n"
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { toc as a, structuredData as i, frontmatter as n, googlefinance_exports as r, MDXContent as t };
