import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/arrayformula.mdx?collection=docs
var arrayformula_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "ARRAYFORMULA",
	"description": "Aplique fórmulas a intervalos inteiros no Google Sheets de forma automática (sem arrastar), com padrões para cabeçalho, evitar linhas vazias e dicas de performance."
};
var structuredData = {
	"contents": [
		{
			"heading": "arrayformula",
			"content": "Às vezes surge a dúvida:"
		},
		{
			"heading": "arrayformula",
			"content": "> Como aplicar uma fórmula na coluna inteira sem precisar arrastar para baixo?"
		},
		{
			"heading": "arrayformula",
			"content": "A função `ARRAYFORMULA` permite que uma única fórmula “se expanda” automaticamente sobre um intervalo de linhas, poupando tempo e reduzindo erros quando novas linhas são adicionadas."
		},
		{
			"heading": "arrayformula",
			"content": ":::tip Quando usar"
		},
		{
			"heading": "arrayformula",
			"content": "Para aplicar a mesma lógica em todas as linhas de uma tabela."
		},
		{
			"heading": "arrayformula",
			"content": "Para “espalhar” transformações de texto, datas, números, buscas, etc."
		},
		{
			"heading": "arrayformula",
			"content": "Para tornar a planilha mais resiliente a inserções de novas linhas.\n:::"
		},
		{
			"heading": "arrayformula",
			"content": ":::caution Separadores regionais\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\n:::"
		},
		{
			"heading": "sem-arrayformula",
			"content": "Somando duas células e arrastando para baixo:"
		},
		{
			"heading": "com-arrayformula",
			"content": "Somando a coluna toda de uma vez:"
		},
		{
			"heading": "com-arrayformula",
			"content": "Pronto: o resultado “desce” para todas as linhas do intervalo."
		},
		{
			"heading": "1-cabeçalho--cálculo-sem-linhas-em-branco",
			"content": "Mantém o título na primeira linha do resultado e calcula apenas onde há dados:"
		},
		{
			"heading": "1-cabeçalho--cálculo-sem-linhas-em-branco",
			"content": "A string `\"Soma\"` vira o cabeçalho."
		},
		{
			"heading": "1-cabeçalho--cálculo-sem-linhas-em-branco",
			"content": "A expressão `IF(LEN(...))` evita gerar resultados em linhas vazias."
		},
		{
			"heading": "1-cabeçalho--cálculo-sem-linhas-em-branco",
			"content": "Alternativa com `FILTER` (sem cabeçalho):"
		},
		{
			"heading": "2-transformações-de-texto-e-data",
			"content": "Maiúsculas na coluna A:"
		},
		{
			"heading": "2-transformações-de-texto-e-data",
			"content": "Formatar datas da coluna A:"
		},
		{
			"heading": "3-condicionais-por-linha",
			"content": "Exemplo: “Aprovado/Reprovado” com base na coluna C:"
		},
		{
			"heading": "4-busca-em-tabela-xlookup-por-linha",
			"content": "Traz o preço da `Tabela!B:B` buscando pelo código em `Tabela!A:A`:"
		},
		{
			"heading": "5-evitar-erros-e-controlar-derramamento",
			"content": "Capture erros por linha:"
		},
		{
			"heading": "5-evitar-erros-e-controlar-derramamento",
			"content": "Se aparecer `#REF!`, há algo ocupando a área onde a fórmula precisa “derramar”. Limpe as células abaixo."
		},
		{
			"heading": "arrayformula-vs-mapbyrow-alternativas-modernas",
			"content": "Funções como `MAP` e `BYROW` às vezes tornam a fórmula mais legível e dispensam `ARRAYFORMULA`:"
		},
		{
			"heading": "arrayformula-vs-mapbyrow-alternativas-modernas",
			"content": "Soma por par de colunas:"
		},
		{
			"heading": "arrayformula-vs-mapbyrow-alternativas-modernas",
			"content": "Regra de negócio por linha:"
		},
		{
			"heading": "arrayformula-vs-mapbyrow-alternativas-modernas",
			"content": "Ambas percorrem intervalos e aplicam a lógica por linha/coluna."
		},
		{
			"heading": "boas-práticas-e-armadilhas",
			"content": "Limite os intervalos (ex.: `A2:A10000`), evitando referências à coluna inteira se o dataset for grande."
		},
		{
			"heading": "boas-práticas-e-armadilhas",
			"content": "Garanta que os intervalos usados em operações tenham tamanhos compatíveis (mesmo número de linhas)."
		},
		{
			"heading": "boas-práticas-e-armadilhas",
			"content": "Formatação (cores, moeda, etc.) não “desce” com a fórmula — aplique ao intervalo-alvo."
		},
		{
			"heading": "boas-práticas-e-armadilhas",
			"content": "Combine com `IF`/`FILTER` para evitar gerar milhares de linhas vazias no resultado."
		},
		{
			"heading": "boas-práticas-e-armadilhas",
			"content": "Evite misturar valores fixos no meio da área que a fórmula precisa ocupar."
		},
		{
			"heading": "exemplos-rápidos-adicionais",
			"content": "Subtrair datas (dias entre A e B):"
		},
		{
			"heading": "exemplos-rápidos-adicionais",
			"content": "Concatenar nome e sobrenome com espaço:"
		},
		{
			"heading": "exemplos-rápidos-adicionais",
			"content": "Marcar linhas com valor ausente:"
		},
		{
			"heading": "exemplos-rápidos-adicionais",
			"content": "Com esses padrões, você cobre 90% dos usos práticos de `ARRAYFORMULA` em planilhas reais."
		}
	],
	"headings": [
		{
			"id": "arrayformula",
			"content": "ARRAYFORMULA"
		},
		{
			"id": "exemplo-básico",
			"content": "Exemplo básico"
		},
		{
			"id": "sem-arrayformula",
			"content": "Sem ARRAYFORMULA"
		},
		{
			"id": "com-arrayformula",
			"content": "Com ARRAYFORMULA"
		},
		{
			"id": "padrões-úteis",
			"content": "Padrões úteis"
		},
		{
			"id": "1-cabeçalho--cálculo-sem-linhas-em-branco",
			"content": "1\\) Cabeçalho + cálculo sem linhas em branco"
		},
		{
			"id": "2-transformações-de-texto-e-data",
			"content": "2\\) Transformações de texto e data"
		},
		{
			"id": "3-condicionais-por-linha",
			"content": "3\\) Condicionais por linha"
		},
		{
			"id": "4-busca-em-tabela-xlookup-por-linha",
			"content": "4\\) Busca em tabela (XLOOKUP por linha)"
		},
		{
			"id": "5-evitar-erros-e-controlar-derramamento",
			"content": "5\\) Evitar erros e controlar derramamento"
		},
		{
			"id": "arrayformula-vs-mapbyrow-alternativas-modernas",
			"content": "ARRAYFORMULA vs MAP/BYROW (alternativas modernas)"
		},
		{
			"id": "boas-práticas-e-armadilhas",
			"content": "Boas práticas e armadilhas"
		},
		{
			"id": "exemplos-rápidos-adicionais",
			"content": "Exemplos rápidos adicionais"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#arrayformula",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "ARRAYFORMULA" })
	},
	{
		depth: 2,
		url: "#exemplo-básico",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Exemplo básico" })
	},
	{
		depth: 3,
		url: "#sem-arrayformula",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Sem ARRAYFORMULA" })
	},
	{
		depth: 3,
		url: "#com-arrayformula",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Com ARRAYFORMULA" })
	},
	{
		depth: 2,
		url: "#padrões-úteis",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Padrões úteis" })
	},
	{
		depth: 3,
		url: "#1-cabeçalho--cálculo-sem-linhas-em-branco",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "1) Cabeçalho + cálculo sem linhas em branco" })
	},
	{
		depth: 3,
		url: "#2-transformações-de-texto-e-data",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "2) Transformações de texto e data" })
	},
	{
		depth: 3,
		url: "#3-condicionais-por-linha",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3) Condicionais por linha" })
	},
	{
		depth: 3,
		url: "#4-busca-em-tabela-xlookup-por-linha",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "4) Busca em tabela (XLOOKUP por linha)" })
	},
	{
		depth: 3,
		url: "#5-evitar-erros-e-controlar-derramamento",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "5) Evitar erros e controlar derramamento" })
	},
	{
		depth: 2,
		url: "#arrayformula-vs-mapbyrow-alternativas-modernas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "ARRAYFORMULA vs MAP/BYROW (alternativas modernas)" })
	},
	{
		depth: 2,
		url: "#boas-práticas-e-armadilhas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Boas práticas e armadilhas" })
	},
	{
		depth: 2,
		url: "#exemplos-rápidos-adicionais",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Exemplos rápidos adicionais" })
	}
];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "arrayformula",
			children: "ARRAYFORMULA"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Às vezes surge a dúvida:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Como aplicar uma fórmula na coluna inteira sem precisar arrastar para baixo?" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A função ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ARRAYFORMULA" }),
			" permite que uma única fórmula “se expanda” automaticamente sobre um intervalo de linhas, poupando tempo e reduzindo erros quando novas linhas são adicionadas."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::tip Quando usar" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Para aplicar a mesma lógica em todas as linhas de uma tabela." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Para “espalhar” transformações de texto, datas, números, buscas, etc." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Para tornar a planilha mais resiliente a inserções de novas linhas.\n:::" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::caution Separadores regionais\nNos exemplos em PT-BR uso “;” como separador. Em EN-US troque por “,”.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "exemplo-básico",
			children: "Exemplo básico"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "sem-arrayformula",
			children: "Sem ARRAYFORMULA"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Somando duas células e arrastando para baixo:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=(A2+B2)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "com-arrayformula",
			children: "Com ARRAYFORMULA"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Somando a coluna toda de uma vez:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(A2:A + B2:B)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Pronto: o resultado “desce” para todas as linhas do intervalo." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "padrões-úteis",
			children: "Padrões úteis"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-cabeçalho--cálculo-sem-linhas-em-branco",
			children: "1) Cabeçalho + cálculo sem linhas em branco"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Mantém o título na primeira linha do resultado e calcula apenas onde há dados:" }),
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
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA({" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  \"Soma\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  IF(LEN(A2:A) + LEN(B2:B);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     A2:A + B2:B;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "     )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "})" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"A string ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "\"Soma\"" }),
				" vira o cabeçalho."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"A expressão ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IF(LEN(...))" }),
				" evita gerar resultados em linhas vazias."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Alternativa com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "FILTER" }),
			" (sem cabeçalho):"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=FILTER(A2:A + B2:B; LEN(A2:A) + LEN(B2:B))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-transformações-de-texto-e-data",
			children: "2) Transformações de texto e data"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Maiúsculas na coluna A:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(UPPER(A2:A))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Formatar datas da coluna A:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(TEXT(A2:A; \"dd/mm/aaaa\"))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-condicionais-por-linha",
			children: "3) Condicionais por linha"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Exemplo: “Aprovado/Reprovado” com base na coluna C:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(IF(LEN(C2:C); IF(C2:C>=7; \"Aprovado\"; \"Reprovado\"); ))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-busca-em-tabela-xlookup-por-linha",
			children: "4) Busca em tabela (XLOOKUP por linha)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Traz o preço da ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabela!B:B" }),
			" buscando pelo código em ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Tabela!A:A" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(XLOOKUP(A2:A; Tabela!A:A; Tabela!B:B))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "5-evitar-erros-e-controlar-derramamento",
			children: "5) Evitar erros e controlar derramamento"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Capture erros por linha:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(IFERROR(A2:A / B2:B; ))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Se aparecer ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "#REF!" }),
				", há algo ocupando a área onde a fórmula precisa “derramar”. Limpe as células abaixo."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "arrayformula-vs-mapbyrow-alternativas-modernas",
			children: "ARRAYFORMULA vs MAP/BYROW (alternativas modernas)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Funções como ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "BYROW" }),
			" às vezes tornam a fórmula mais legível e dispensam ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ARRAYFORMULA" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Soma por par de colunas:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=MAP(A2:A; B2:B; LAMBDA(a; b; a + b))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Regra de negócio por linha:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=BYROW(A2:C; LAMBDA(linha; IF(INDEX(linha; 3) >= 7; \"Aprovado\"; \"Reprovado\")))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Ambas percorrem intervalos e aplicam a lógica por linha/coluna." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "boas-práticas-e-armadilhas",
			children: "Boas práticas e armadilhas"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Limite os intervalos (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "A2:A10000" }),
				"), evitando referências à coluna inteira se o dataset for grande."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Garanta que os intervalos usados em operações tenham tamanhos compatíveis (mesmo número de linhas)." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Formatação (cores, moeda, etc.) não “desce” com a fórmula — aplique ao intervalo-alvo." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Combine com ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "IF" }),
				"/",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "FILTER" }),
				" para evitar gerar milhares de linhas vazias no resultado."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Evite misturar valores fixos no meio da área que a fórmula precisa ocupar." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "exemplos-rápidos-adicionais",
			children: "Exemplos rápidos adicionais"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Subtrair datas (dias entre A e B):" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(IF(LEN(A2:A) * LEN(B2:B); B2:B - A2:A; ))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Concatenar nome e sobrenome com espaço:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(TRIM(A2:A & \" \" & B2:B))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Marcar linhas com valor ausente:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=ARRAYFORMULA(IF(LEN(A2:A); IF(A2:A=\"\"; \"Faltando\"; \"OK\"); ))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Com esses padrões, você cobre 90% dos usos práticos de ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "ARRAYFORMULA" }),
			" em planilhas reais."
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
export { toc as a, structuredData as i, arrayformula_exports as n, frontmatter as r, MDXContent as t };
