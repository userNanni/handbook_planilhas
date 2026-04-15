import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/xlookup.mdx?collection=docs
var xlookup_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "XLOOKUP",
	"description": "Busca avançada no Google Sheets — substituto moderno do VLOOKUP."
};
var structuredData = {
	"contents": [
		{
			"heading": "xlookup",
			"content": "> Como encontrar qualquer coisa de forma prática nas suas planilhas?"
		},
		{
			"heading": "xlookup",
			"content": "A **busca por dados** em planilhas é uma das tarefas mais comuns — e importantes — para organizar e analisar informações. Até pouco tempo, o `VLOOKUP` era o mais usado, mas ele tem várias **limitações**: só busca **da esquerda para a direita**, exige **ajustes manuais** quando a estrutura muda, e pode causar **erros difíceis de identificar**."
		},
		{
			"heading": "xlookup",
			"content": "É aí que entra a função `XLOOKUP`, que veio para **substituir** o `VLOOKUP`, `HLOOKUP`, `INDEX` + `MATCH` e outras fórmulas mais complexas."
		},
		{
			"heading": "-o-que-é-o-xlookup",
			"content": "A função `XLOOKUP` é uma forma moderna e poderosa de **buscar valores** em uma planilha. Ela funciona como um **GPS de dados**, que consegue encontrar o que você quiser em qualquer direção — **para frente ou para trás**, **vertical ou horizontal**."
		},
		{
			"heading": "argumentos-principais",
			"content": "`lookup_value`: o valor que você quer encontrar."
		},
		{
			"heading": "argumentos-principais",
			"content": "`lookup_array`: onde o valor será procurado."
		},
		{
			"heading": "argumentos-principais",
			"content": "`return_array`: o que você quer receber de volta, ao encontrar."
		},
		{
			"heading": "argumentos-principais",
			"content": "`if_not_found`: o que mostrar caso o valor não seja encontrado (opcional)."
		},
		{
			"heading": "argumentos-principais",
			"content": "`match_mode`: tipo de correspondência (exata, próxima, coringa etc)."
		},
		{
			"heading": "argumentos-principais",
			"content": "`search_mode`: direção da busca (primeiro ao último, ou do último ao primeiro)."
		},
		{
			"heading": "-exemplo-prático",
			"content": "Suponha a seguinte tabela:"
		},
		{
			"heading": "-exemplo-prático",
			"content": "Produto"
		},
		{
			"heading": "-exemplo-prático",
			"content": "Preço"
		},
		{
			"heading": "-exemplo-prático",
			"content": "Arroz"
		},
		{
			"heading": "-exemplo-prático",
			"content": "5.00"
		},
		{
			"heading": "-exemplo-prático",
			"content": "Feijão"
		},
		{
			"heading": "-exemplo-prático",
			"content": "6.50"
		},
		{
			"heading": "-exemplo-prático",
			"content": "Macarrão"
		},
		{
			"heading": "-exemplo-prático",
			"content": "4.25"
		},
		{
			"heading": "usando-xlookup",
			"content": "**Resultado:** `6.5`"
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Pode buscar valores **à esquerda**."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Não depende da **posição da coluna**."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Permite tratamento direto com `if_not_found`."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Pode retornar **múltiplas colunas** ao mesmo tempo."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Sintaxe mais **clara e legível**."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Suporte a **busca reversa** (último para o primeiro)."
		},
		{
			"heading": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Pode usar **caracteres coringa** para buscas aproximadas."
		},
		{
			"heading": "️-desvantagens-do-xlookup-frente-ao-vlookup",
			"content": "❌ Pode ser **mais lento** em conjuntos muito grandes de dados, dependendo da complexidade da fórmula."
		},
		{
			"heading": "️-desvantagens-do-xlookup-frente-ao-vlookup",
			"content": "❌ Como é mais recente, **pode gerar confusão** em times que já estão acostumados ao `VLOOKUP`."
		},
		{
			"heading": "️-desvantagens-do-xlookup-frente-ao-vlookup",
			"content": "❌ Nem todos os tutoriais ou macros antigas são compatíveis com `XLOOKUP`."
		},
		{
			"heading": "-quando-usar-xlookup",
			"content": "Ao montar **dashboards dinâmicos**."
		},
		{
			"heading": "-quando-usar-xlookup",
			"content": "Para **relatórios de vendas, estoque ou RH**."
		},
		{
			"heading": "-quando-usar-xlookup",
			"content": "Sempre que quiser **substituir `VLOOKUP` com mais controle e segurança**."
		},
		{
			"heading": "-quando-usar-xlookup",
			"content": "Em **ambientes colaborativos modernos**, como Excel 365 ou Google Sheets com add-ons/simulações."
		},
		{
			"heading": "-quer-simular-o-xlookup-no-google-sheets",
			"content": "Como o Google Sheets ainda não oferece suporte direto ao `XLOOKUP`, você pode **simular** com a combinação de `INDEX` + `MATCH`:"
		},
		{
			"heading": "-quer-simular-o-xlookup-no-google-sheets",
			"content": "Por exemplo:"
		},
		{
			"heading": "-quer-simular-o-xlookup-no-google-sheets",
			"content": "Esse é o jeito mais próximo de usar o `XLOOKUP` no Sheets até que ele seja lançado oficialmente."
		},
		{
			"heading": "-quer-simular-o-xlookup-no-google-sheets",
			"content": "📌 **Dica final**: sempre que possível, migre suas fórmulas de `VLOOKUP` para `XLOOKUP` ou `INDEX` + `MATCH` — você ganha em clareza, flexibilidade e robustez."
		}
	],
	"headings": [
		{
			"id": "xlookup",
			"content": "XLOOKUP"
		},
		{
			"id": "-o-que-é-o-xlookup",
			"content": "🔍 O que é o `XLOOKUP`?"
		},
		{
			"id": "-sintaxe-da-função-xlookup",
			"content": "✅ Sintaxe da função `XLOOKUP`"
		},
		{
			"id": "argumentos-principais",
			"content": "Argumentos principais:"
		},
		{
			"id": "-exemplo-prático",
			"content": "🎯 Exemplo prático"
		},
		{
			"id": "usando-xlookup",
			"content": "Usando `XLOOKUP`:"
		},
		{
			"id": "-comparando-com-outras-formas",
			"content": "📊 Comparando com outras formas"
		},
		{
			"id": "usando-index--match",
			"content": "Usando `INDEX` + `MATCH`:"
		},
		{
			"id": "usando-vlookup",
			"content": "Usando `VLOOKUP`:"
		},
		{
			"id": "-vantagens-do-xlookup-sobre-vlookup",
			"content": "✅ Vantagens do `XLOOKUP` sobre `VLOOKUP`"
		},
		{
			"id": "️-desvantagens-do-xlookup-frente-ao-vlookup",
			"content": "⚠️ Desvantagens do `XLOOKUP` frente ao `VLOOKUP`"
		},
		{
			"id": "-quando-usar-xlookup",
			"content": "🧠 Quando usar `XLOOKUP`?"
		},
		{
			"id": "-quer-simular-o-xlookup-no-google-sheets",
			"content": "🔄 Quer simular o `XLOOKUP` no Google Sheets?"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#xlookup",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "XLOOKUP" })
	},
	{
		depth: 2,
		url: "#-o-que-é-o-xlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"🔍 O que é o ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			"?"
		] })
	},
	{
		depth: 2,
		url: "#-sintaxe-da-função-xlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["✅ Sintaxe da função ", (0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" })] })
	},
	{
		depth: 3,
		url: "#argumentos-principais",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Argumentos principais:" })
	},
	{
		depth: 2,
		url: "#-exemplo-prático",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🎯 Exemplo prático" })
	},
	{
		depth: 3,
		url: "#usando-xlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Usando ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			":"
		] })
	},
	{
		depth: 2,
		url: "#-comparando-com-outras-formas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "📊 Comparando com outras formas" })
	},
	{
		depth: 3,
		url: "#usando-index--match",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Usando ",
			(0, import_jsx_runtime.jsx)("code", { children: "INDEX" }),
			" + ",
			(0, import_jsx_runtime.jsx)("code", { children: "MATCH" }),
			":"
		] })
	},
	{
		depth: 3,
		url: "#usando-vlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Usando ",
			(0, import_jsx_runtime.jsx)("code", { children: "VLOOKUP" }),
			":"
		] })
	},
	{
		depth: 2,
		url: "#-vantagens-do-xlookup-sobre-vlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"✅ Vantagens do ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			" sobre ",
			(0, import_jsx_runtime.jsx)("code", { children: "VLOOKUP" })
		] })
	},
	{
		depth: 2,
		url: "#️-desvantagens-do-xlookup-frente-ao-vlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"⚠️ Desvantagens do ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			" frente ao ",
			(0, import_jsx_runtime.jsx)("code", { children: "VLOOKUP" })
		] })
	},
	{
		depth: 2,
		url: "#-quando-usar-xlookup",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"🧠 Quando usar ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			"?"
		] })
	},
	{
		depth: 3,
		url: "#-quer-simular-o-xlookup-no-google-sheets",
		title: (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"🔄 Quer simular o ",
			(0, import_jsx_runtime.jsx)("code", { children: "XLOOKUP" }),
			" no Google Sheets?"
		] })
	}
];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
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
			id: "xlookup",
			children: "XLOOKUP"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Como encontrar qualquer coisa de forma prática nas suas planilhas?" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "busca por dados" }),
			" em planilhas é uma das tarefas mais comuns — e importantes — para organizar e analisar informações. Até pouco tempo, o ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
			" era o mais usado, mas ele tem várias ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "limitações" }),
			": só busca ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "da esquerda para a direita" }),
			", exige ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "ajustes manuais" }),
			" quando a estrutura muda, e pode causar ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "erros difíceis de identificar" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"É aí que entra a função ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			", que veio para ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "substituir" }),
			" o ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "HLOOKUP" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }),
			" + ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MATCH" }),
			" e outras fórmulas mais complexas."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "-o-que-é-o-xlookup",
			children: [
				"🔍 O que é o ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				"?"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A função ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			" é uma forma moderna e poderosa de ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "buscar valores" }),
			" em uma planilha. Ela funciona como um ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "GPS de dados" }),
			", que consegue encontrar o que você quiser em qualquer direção — ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "para frente ou para trás" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "vertical ou horizontal" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "-sintaxe-da-função-xlookup",
			children: ["✅ Sintaxe da função ", (0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" })]
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "argumentos-principais",
			children: "Argumentos principais:"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "lookup_value" }), ": o valor que você quer encontrar."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "lookup_array" }), ": onde o valor será procurado."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "return_array" }), ": o que você quer receber de volta, ao encontrar."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "if_not_found" }), ": o que mostrar caso o valor não seja encontrado (opcional)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "match_mode" }), ": tipo de correspondência (exata, próxima, coringa etc)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "search_mode" }), ": direção da busca (primeiro ao último, ou do último ao primeiro)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-exemplo-prático",
			children: "🎯 Exemplo prático"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Suponha a seguinte tabela:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Produto" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Preço" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "Arroz" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "5.00" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "Feijão" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "6.50" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "Macarrão" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "4.25" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "usando-xlookup",
			children: [
				"Usando ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				":"
			]
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=XLOOKUP(\"Feijão\", A2:A4, B2:B4)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Resultado:" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "6.5" })
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "-comparando-com-outras-formas",
			children: "📊 Comparando com outras formas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "usando-index--match",
			children: [
				"Usando ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }),
				" + ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "MATCH" }),
				":"
			]
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=INDEX(B2:B4, MATCH(\"Feijão\", A2:A4, 0))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "usando-vlookup",
			children: [
				"Usando ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
				":"
			]
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=VLOOKUP(\"Feijão\", A2:B4, 2, FALSE)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "-vantagens-do-xlookup-sobre-vlookup",
			children: [
				"✅ Vantagens do ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				" sobre ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Pode buscar valores ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "à esquerda" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Não depende da ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "posição da coluna" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Permite tratamento direto com ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "if_not_found" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Pode retornar ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "múltiplas colunas" }),
				" ao mesmo tempo."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Sintaxe mais ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "clara e legível" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Suporte a ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "busca reversa" }),
				" (último para o primeiro)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"✅ Pode usar ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "caracteres coringa" }),
				" para buscas aproximadas."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "️-desvantagens-do-xlookup-frente-ao-vlookup",
			children: [
				"⚠️ Desvantagens do ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				" frente ao ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" })
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"❌ Pode ser ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "mais lento" }),
				" em conjuntos muito grandes de dados, dependendo da complexidade da fórmula."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"❌ Como é mais recente, ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "pode gerar confusão" }),
				" em times que já estão acostumados ao ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"❌ Nem todos os tutoriais ou macros antigas são compatíveis com ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h2, {
			id: "-quando-usar-xlookup",
			children: [
				"🧠 Quando usar ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				"?"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Ao montar ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "dashboards dinâmicos" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Para ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "relatórios de vendas, estoque ou RH" }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Sempre que quiser ",
				(0, import_jsx_runtime.jsxs)(_components.strong, { children: [
					"substituir ",
					(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
					" com mais controle e segurança"
				] }),
				"."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Em ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "ambientes colaborativos modernos" }),
				", como Excel 365 ou Google Sheets com add-ons/simulações."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.h3, {
			id: "-quer-simular-o-xlookup-no-google-sheets",
			children: [
				"🔄 Quer simular o ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
				" no Google Sheets?"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Como o Google Sheets ainda não oferece suporte direto ao ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			", você pode ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "simular" }),
			" com a combinação de ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }),
			" + ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MATCH" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=INDEX(coluna_resultado, MATCH(valor_procurado, coluna_busca, 0))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Por exemplo:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=INDEX(B2:B4, MATCH(\"Feijão\", A2:A4, 0))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Esse é o jeito mais próximo de usar o ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			" no Sheets até que ele seja lançado oficialmente."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"📌 ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Dica final" }),
			": sempre que possível, migre suas fórmulas de ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "VLOOKUP" }),
			" para ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			" ou ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "INDEX" }),
			" + ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MATCH" }),
			" — você ganha em clareza, flexibilidade e robustez."
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
export { xlookup_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
