import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/map.mdx?collection=docs
var map_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "MAP",
	"description": "Aplique uma LAMBDA a cada elemento de um ou mais intervalos no Google Sheets. Exemplos práticos, padrões e comparativos com ARRAYFORMULA, BYROW e BYCOL."
};
var structuredData = {
	"contents": [
		{
			"heading": "map",
			"content": "> Como aplicar uma função a cada elemento de um intervalo de forma eficiente?"
		},
		{
			"heading": "map",
			"content": "Quando precisamos transformar cada valor de uma coluna, linha ou matriz, fórmulas tradicionais podem ficar extensas. A função `MAP` simplifica: ela aplica uma **LAMBDA** a cada elemento de um ou mais intervalos de entrada e retorna um novo intervalo com os resultados."
		},
		{
			"heading": "map",
			"content": ":::note Separadores regionais\r\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\r\n:::"
		},
		{
			"heading": "-sintaxe",
			"content": "`intervalo1` (obrigatório): primeiro intervalo de entrada."
		},
		{
			"heading": "-sintaxe",
			"content": "`intervalo2…` (opcional): intervalos adicionais (devem ter o mesmo tamanho do primeiro)."
		},
		{
			"heading": "-sintaxe",
			"content": "`LAMBDA(...)`: parâmetros nomeados (um por intervalo de entrada) e a expressão a aplicar elemento a elemento."
		},
		{
			"heading": "-sintaxe",
			"content": ":::caution Dimensões compatíveis\r\nTodos os intervalos de entrada precisam ter o mesmo número de linhas e colunas. Caso contrário, o Sheets retorna erro.\r\n:::"
		},
		{
			"heading": "1-dobrar-cada-valor-de-uma-coluna",
			"content": "Suponha valores em `A2:A5`:"
		},
		{
			"heading": "1-dobrar-cada-valor-de-uma-coluna",
			"content": "Resultado: `{2; 4; 6; 8}`"
		},
		{
			"heading": "2-concatenar-elementos-de-duas-colunas",
			"content": "Com nomes em `A2:A4` e sobrenomes em `B2:B4`:"
		},
		{
			"heading": "3-aplicar-regra-com-condicionais-aprovadoreprovado",
			"content": "Com notas em `C2:C`:"
		},
		{
			"heading": "4-limpeza-de-texto-por-elemento-trimupper",
			"content": "Normalizar nomes em `A2:A`:"
		},
		{
			"heading": "5-cálculo-por-pares-de-colunas-soma-elemento-a-elemento",
			"content": "Somar `A2:A` com `B2:B`:"
		},
		{
			"heading": "6-buscar-preços-por-ticker-googlefinance-por-linha",
			"content": "Para tickers em `A2:A`:"
		},
		{
			"heading": "6-buscar-preços-por-ticker-googlefinance-por-linha",
			"content": "`INDEX` extrai o valor principal quando `GOOGLEFINANCE` retorna matriz."
		},
		{
			"heading": "6-buscar-preços-por-ticker-googlefinance-por-linha",
			"content": "`IFERROR` evita quebrar a planilha com tickers inválidos/indisponíveis."
		},
		{
			"heading": "cabeçalho--resultado-derramado",
			"content": "Inclua um cabeçalho e o resultado do `MAP` abaixo:"
		},
		{
			"heading": "ignorar-linhas-vazias",
			"content": "Pule linhas sem dados:"
		},
		{
			"heading": "com-let-para-clareza",
			"content": "Nomeie subexpressões dentro da LAMBDA:"
		},
		{
			"heading": "-map-vs-alternativas",
			"content": "`ARRAYFORMULA`: ótima para operações vetorizadas simples; com lógica mais complexa, `MAP` fica mais legível."
		},
		{
			"heading": "-map-vs-alternativas",
			"content": "`BYROW`/`BYCOL`: percorrem linha a linha/coluna a coluna (úteis quando a lógica depende da linha/coluna inteira).\\\nEx.: classificar por linha com `BYROW`:"
		},
		{
			"heading": "️-armadilhas-comuns",
			"content": "Tamanhos diferentes entre os intervalos de entrada causam erro."
		},
		{
			"heading": "️-armadilhas-comuns",
			"content": "`MAP` “derramará” os resultados: garanta espaço livre abaixo/ao lado para evitar `#REF!`."
		},
		{
			"heading": "️-armadilhas-comuns",
			"content": "Evite intervalos gigantes de coluna inteira quando a planilha for grande (performance). Prefira limites razoáveis (ex.: `A2:A10000`)."
		},
		{
			"heading": "️-armadilhas-comuns",
			"content": "Atenção a números formatados como texto — normalize antes (ex.: `VALUE`, `SUBSTITUTE`)."
		},
		{
			"heading": "-receitas-rápidas",
			"content": "Percentual a partir de duas colunas:"
		},
		{
			"heading": "-receitas-rápidas",
			"content": "Formatar telefone (ex.: `(00) 00000-0000`) a partir de números em `A2:A`:"
		},
		{
			"heading": "-receitas-rápidas",
			"content": "Sufixo condicional (ex.: “kg” se B>0):"
		},
		{
			"heading": "veja-também",
			"content": "ARRAYFORMULA"
		}
	],
	"headings": [
		{
			"id": "map",
			"content": "MAP"
		},
		{
			"id": "-sintaxe",
			"content": "🔍 Sintaxe"
		},
		{
			"id": "-exemplos-práticos",
			"content": "🎯 Exemplos práticos"
		},
		{
			"id": "1-dobrar-cada-valor-de-uma-coluna",
			"content": "1\\) Dobrar cada valor de uma coluna"
		},
		{
			"id": "2-concatenar-elementos-de-duas-colunas",
			"content": "2\\) Concatenar elementos de duas colunas"
		},
		{
			"id": "3-aplicar-regra-com-condicionais-aprovadoreprovado",
			"content": "3\\) Aplicar regra com condicionais (Aprovado/Reprovado)"
		},
		{
			"id": "4-limpeza-de-texto-por-elemento-trimupper",
			"content": "4\\) Limpeza de texto por elemento (TRIM/UPPER)"
		},
		{
			"id": "5-cálculo-por-pares-de-colunas-soma-elemento-a-elemento",
			"content": "5\\) Cálculo por pares de colunas (soma elemento a elemento)"
		},
		{
			"id": "6-buscar-preços-por-ticker-googlefinance-por-linha",
			"content": "6\\) Buscar preços por ticker (GOOGLEFINANCE por linha)"
		},
		{
			"id": "-padrões-úteis",
			"content": "🧩 Padrões úteis"
		},
		{
			"id": "cabeçalho--resultado-derramado",
			"content": "Cabeçalho + resultado “derramado”"
		},
		{
			"id": "ignorar-linhas-vazias",
			"content": "Ignorar linhas vazias"
		},
		{
			"id": "com-let-para-clareza",
			"content": "Com LET para clareza"
		},
		{
			"id": "-map-vs-alternativas",
			"content": "🔄 MAP vs alternativas"
		},
		{
			"id": "️-armadilhas-comuns",
			"content": "⚠️ Armadilhas comuns"
		},
		{
			"id": "-receitas-rápidas",
			"content": "📌 Receitas rápidas"
		},
		{
			"id": "veja-também",
			"content": "Veja também"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#map",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "MAP" })
	},
	{
		depth: 2,
		url: "#-sintaxe",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🔍 Sintaxe" })
	},
	{
		depth: 2,
		url: "#-exemplos-práticos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🎯 Exemplos práticos" })
	},
	{
		depth: 3,
		url: "#1-dobrar-cada-valor-de-uma-coluna",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "1) Dobrar cada valor de uma coluna" })
	},
	{
		depth: 3,
		url: "#2-concatenar-elementos-de-duas-colunas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "2) Concatenar elementos de duas colunas" })
	},
	{
		depth: 3,
		url: "#3-aplicar-regra-com-condicionais-aprovadoreprovado",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3) Aplicar regra com condicionais (Aprovado/Reprovado)" })
	},
	{
		depth: 3,
		url: "#4-limpeza-de-texto-por-elemento-trimupper",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "4) Limpeza de texto por elemento (TRIM/UPPER)" })
	},
	{
		depth: 3,
		url: "#5-cálculo-por-pares-de-colunas-soma-elemento-a-elemento",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "5) Cálculo por pares de colunas (soma elemento a elemento)" })
	},
	{
		depth: 3,
		url: "#6-buscar-preços-por-ticker-googlefinance-por-linha",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "6) Buscar preços por ticker (GOOGLEFINANCE por linha)" })
	},
	{
		depth: 2,
		url: "#-padrões-úteis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🧩 Padrões úteis" })
	},
	{
		depth: 3,
		url: "#cabeçalho--resultado-derramado",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Cabeçalho + resultado “derramado”" })
	},
	{
		depth: 3,
		url: "#ignorar-linhas-vazias",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Ignorar linhas vazias" })
	},
	{
		depth: 3,
		url: "#com-let-para-clareza",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Com LET para clareza" })
	},
	{
		depth: 2,
		url: "#-map-vs-alternativas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🔄 MAP vs alternativas" })
	},
	{
		depth: 2,
		url: "#️-armadilhas-comuns",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "⚠️ Armadilhas comuns" })
	},
	{
		depth: 2,
		url: "#-receitas-rápidas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "📌 Receitas rápidas" })
	},
	{
		depth: 2,
		url: "#veja-também",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Veja também" })
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
		hr: "hr",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "map",
			children: "MAP"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Como aplicar uma função a cada elemento de um intervalo de forma eficiente?" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Quando precisamos transformar cada valor de uma coluna, linha ou matriz, fórmulas tradicionais podem ficar extensas. A função ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" simplifica: ela aplica uma ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "LAMBDA" }),
			" a cada elemento de um ou mais intervalos de entrada e retorna um novo intervalo com os resultados."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::note Separadores regionais\r\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\r\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-sintaxe",
			children: "🔍 Sintaxe"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(intervalo1; [intervalo2; …]; LAMBDA(valor1; [valor2; …]; formula))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "intervalo1" }), " (obrigatório): primeiro intervalo de entrada."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "intervalo2…" }), " (opcional): intervalos adicionais (devem ter o mesmo tamanho do primeiro)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "LAMBDA(...)" }), ": parâmetros nomeados (um por intervalo de entrada) e a expressão a aplicar elemento a elemento."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::caution Dimensões compatíveis\r\nTodos os intervalos de entrada precisam ter o mesmo número de linhas e colunas. Caso contrário, o Sheets retorna erro.\r\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-exemplos-práticos",
			children: "🎯 Exemplos práticos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-dobrar-cada-valor-de-uma-coluna",
			children: "1) Dobrar cada valor de uma coluna"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Suponha valores em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A5" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A5; LAMBDA(x; x * 2))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: ["Resultado: ", (0, import_jsx_runtime.jsx)(_components.code, { children: "{2; 4; 6; 8}" })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-concatenar-elementos-de-duas-colunas",
			children: "2) Concatenar elementos de duas colunas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Com nomes em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A4" }),
			" e sobrenomes em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "B2:B4" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A4; B2:B4; LAMBDA(nome; sobrenome; nome & \" \" & sobrenome))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-aplicar-regra-com-condicionais-aprovadoreprovado",
			children: "3) Aplicar regra com condicionais (Aprovado/Reprovado)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Com notas em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "C2:C" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(C2:C; LAMBDA(nota; IF(LEN(nota); IF(nota>=7; \"Aprovado\"; \"Reprovado\"); )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-limpeza-de-texto-por-elemento-trimupper",
			children: "4) Limpeza de texto por elemento (TRIM/UPPER)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Normalizar nomes em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; LAMBDA(t; IF(LEN(t); UPPER(TRIM(t)); )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "5-cálculo-por-pares-de-colunas-soma-elemento-a-elemento",
			children: "5) Cálculo por pares de colunas (soma elemento a elemento)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Somar ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A" }),
			" com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "B2:B" }),
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; B2:B; LAMBDA(a; b; a + b))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "6-buscar-preços-por-ticker-googlefinance-por-linha",
			children: "6) Buscar preços por ticker (GOOGLEFINANCE por linha)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Para tickers em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A" }),
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
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }),
				" extrai o valor principal quando ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "GOOGLEFINANCE" }),
				" retorna matriz."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "IFERROR" }), " evita quebrar a planilha com tickers inválidos/indisponíveis."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-padrões-úteis",
			children: "🧩 Padrões úteis"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "cabeçalho--resultado-derramado",
			children: "Cabeçalho + resultado “derramado”"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Inclua um cabeçalho e o resultado do ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" abaixo:"
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "={" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  \"Nome Completo\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  MAP(A2:A; B2:B; LAMBDA(nome; sobrenome; TRIM(nome & \" \" & sobrenome)))" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "}" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "ignorar-linhas-vazias",
			children: "Ignorar linhas vazias"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Pule linhas sem dados:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; LAMBDA(x; IF(LEN(x); sua_expressao_aqui; )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "com-let-para-clareza",
			children: "Com LET para clareza"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Nomeie subexpressões dentro da LAMBDA:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; B2:B; LAMBDA(a; b;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  LET(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    soma; a + b;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    IF(LEN(a) + LEN(b); soma; )" })
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
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-map-vs-alternativas",
			children: "🔄 MAP vs alternativas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ARRAYFORMULA" }),
				": ótima para operações vetorizadas simples; com lógica mais complexa, ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
				" fica mais legível."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "BYROW" }),
				"/",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "BYCOL" }),
				": percorrem linha a linha/coluna a coluna (úteis quando a lógica depende da linha/coluna inteira).",
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"Ex.: classificar por linha com ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "BYROW" }),
				":",
				"\n",
				(0, import_jsx_runtime.jsx)(_components.pre, { children: (0, import_jsx_runtime.jsx)(_components.code, {
					className: "language-text",
					children: "=BYROW(A2:C; LAMBDA(linha; IF(INDEX(linha; 3)>=7; \"Aprovado\"; \"Reprovado\")))\n"
				}) }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "️-armadilhas-comuns",
			children: "⚠️ Armadilhas comuns"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Tamanhos diferentes entre os intervalos de entrada causam erro." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
				" “derramará” os resultados: garanta espaço livre abaixo/ao lado para evitar ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "#REF!" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Evite intervalos gigantes de coluna inteira quando a planilha for grande (performance). Prefira limites razoáveis (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A10000" }),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Atenção a números formatados como texto — normalize antes (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "VALUE" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "SUBSTITUTE" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-receitas-rápidas",
			children: "📌 Receitas rápidas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Percentual a partir de duas colunas:" }),
			"\n"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; B2:B; LAMBDA(a; b; IF(LEN(a)*LEN(b); a/b; )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Formatar telefone (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "(00) 00000-0000" }),
				") a partir de números em ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A" }),
				":"
			] }),
			"\n"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; LAMBDA(n; IF(LEN(n); TEXT(n; \"(00) 00000-0000\"); )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Sufixo condicional (ex.: “kg” se B>0):" }),
			"\n"
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
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsx)(_components.span, {
				className: "line",
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; B2:B; LAMBDA(a; b; IF(LEN(a); a & IF(b>0; \" kg\"; \"\"); )))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "veja-também",
			children: "Veja também"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/funcoes/arrayformula",
				children: "ARRAYFORMULA"
			}) }),
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
export { toc as a, structuredData as i, frontmatter as n, map_exports as r, MDXContent as t };
