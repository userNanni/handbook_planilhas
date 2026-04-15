import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/base-structure.mdx?collection=docs
var base_structure_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = { "title": "Estrutura Básica" };
var structuredData = {
	"contents": [
		{
			"heading": "estrutura-básica",
			"content": ":::info\nEssa parte deveria ser óbvia na documentação, porém não é. Então, *here we go again*.\n:::"
		},
		{
			"heading": "estrutura-básica",
			"content": "Quando falamos da estrutura da função QUERY, precisamos separar em duas partes:"
		},
		{
			"heading": "estrutura-básica",
			"content": "Estrutura da função em si"
		},
		{
			"heading": "estrutura-básica",
			"content": "Estrutura da consulta interna"
		},
		{
			"heading": "estrutura-da-função",
			"content": "É tudo tão óbvio quanto descrito na documentação oficial do QUERY."
		},
		{
			"heading": "sintaxe",
			"content": "A sintaxe é simples, com 3 parâmetros:"
		},
		{
			"heading": "sintaxe",
			"content": "dados (obrigatório):\\\nAqui estará o banco de dados que será usado pela função. Basicamente, selecione todo o intervalo que tiver dados."
		},
		{
			"heading": "sintaxe",
			"content": ":::tip\nComo o referencial são as letras/posições das colunas, recomenda-se adicionar novas colunas ao final da tabela. Depois, na consulta, podemos ordenar na forma desejada.\n:::"
		},
		{
			"heading": "sintaxe",
			"content": "consulta (meio que obrigatório):\\\nA parte mais desafiadora — é aqui que a mágica ocorre. Por isso, dedicamos a seção de Estrutura da Consulta."
		},
		{
			"heading": "sintaxe",
			"content": ":::note\nOK, mas por que “meio que obrigatório”?"
		},
		{
			"heading": "sintaxe",
			"content": "Se nada for escrito na consulta, o Google Sheets considera `select *`, retornando todos os dados."
		},
		{
			"heading": "sintaxe",
			"content": "A consulta deve estar entre aspas, mas pode ser o resultado de uma concatenação de fórmulas do Sheets com trechos da consulta. Veja mais em Estruturas Mistas.\n:::"
		},
		{
			"heading": "sintaxe",
			"content": "cabeçalhos (opcional):\\\nIndica quantas linhas devem ser ignoradas como cabeçalho. É simples, mas vale testar para entender como a contagem se comporta no seu caso."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "A função QUERY é composta por diversas cláusulas da linguagem. Cada uma tem uma responsabilidade e, conforme a documentação, elas:"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "aparecem no máximo uma vez; e"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "devem seguir a ordem abaixo."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Cláusula"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Uso"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "select"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Seleciona quais colunas serão retornadas e em que ordem. Se omitido, retorna todas."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "where"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Retorna apenas as linhas que atendem a uma condição."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`group by`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Agrega valores em linhas (agrupamento)."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`pivot`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Transforma valores distintos de uma coluna em novas colunas."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`order by`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Classifica linhas por valores de colunas."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`limit`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Limita o número de linhas retornadas."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`offset`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Ignora um número de linhas iniciais."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`label`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Define rótulos (nomes) de colunas no resultado."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`format`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Formata valores de determinadas colunas segundo padrões."
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "`options`"
		},
		{
			"heading": "estrutura-da-consulta",
			"content": "Define opções adicionais de consulta."
		}
	],
	"headings": [
		{
			"id": "estrutura-básica",
			"content": "Estrutura Básica"
		},
		{
			"id": "estrutura-da-função",
			"content": "Estrutura da Função"
		},
		{
			"id": "sintaxe",
			"content": "Sintaxe"
		},
		{
			"id": "estrutura-da-consulta",
			"content": "Estrutura da Consulta"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#estrutura-básica",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estrutura Básica" })
	},
	{
		depth: 2,
		url: "#estrutura-da-função",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estrutura da Função" })
	},
	{
		depth: 3,
		url: "#sintaxe",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Sintaxe" })
	},
	{
		depth: 2,
		url: "#estrutura-da-consulta",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estrutura da Consulta" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		br: "br",
		code: "code",
		em: "em",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
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
			id: "estrutura-básica",
			children: "Estrutura Básica"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			":::info\nEssa parte deveria ser óbvia na documentação, porém não é. Então, ",
			(0, import_jsx_runtime.jsx)(_components.em, { children: "here we go again" }),
			".\n:::"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Quando falamos da estrutura da função QUERY, precisamos separar em duas partes:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./baseStructure#estrutura-da-funcao",
				children: "Estrutura da função em si"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./baseStructure#estrutura-da-consulta",
				children: "Estrutura da consulta interna"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "estrutura-da-função",
			children: "Estrutura da Função"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"É tudo tão óbvio quanto descrito na ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://support.google.com/docs/answer/3093343?hl=pt-BR",
				children: "documentação oficial do QUERY"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "sintaxe",
			children: "Sintaxe"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A sintaxe é simples, com 3 parâmetros:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados; consulta; [cabeçalhos])" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"dados (obrigatório):",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Aqui estará o banco de dados que será usado pela função. Basicamente, selecione todo o intervalo que tiver dados."
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: ":::tip\nComo o referencial são as letras/posições das colunas, recomenda-se adicionar novas colunas ao final da tabela. Depois, na consulta, podemos ordenar na forma desejada.\n:::" }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"consulta (meio que obrigatório):",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"A parte mais desafiadora — é aqui que a mágica ocorre. Por isso, dedicamos a seção de ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "./baseStructure#estrutura-da-consulta",
						children: "Estrutura da Consulta"
					}),
					"."
				] }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.p, { children: ":::note\nOK, mas por que “meio que obrigatório”?" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"Se nada for escrito na consulta, o Google Sheets considera ",
						(0, import_jsx_runtime.jsx)(_components.code, { children: "select *" }),
						", retornando todos os dados."
					] }),
					"\n",
					(0, import_jsx_runtime.jsxs)(_components.li, { children: [
						"A consulta deve estar entre aspas, mas pode ser o resultado de uma concatenação de fórmulas do Sheets com trechos da consulta. Veja mais em ",
						(0, import_jsx_runtime.jsx)(_components.a, {
							href: "./mixedStructure",
							children: "Estruturas Mistas"
						}),
						".\n:::"
					] }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"cabeçalhos (opcional):",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Indica quantas linhas devem ser ignoradas como cabeçalho. É simples, mas vale testar para entender como a contagem se comporta no seu caso."
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "estrutura-da-consulta",
			children: "Estrutura da Consulta"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A função QUERY é composta por diversas ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/chart/interactive/docs/querylanguage?hl=pt-br#language-clauses",
				children: "cláusulas da linguagem"
			}),
			". Cada uma tem uma responsabilidade e, conforme a documentação, elas:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "aparecem no máximo uma vez; e" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "devem seguir a ordem abaixo." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Cláusula" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Uso" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./clauses/select",
				children: "select"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Seleciona quais colunas serão retornadas e em que ordem. Se omitido, retorna todas." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./clauses/where",
				children: "where"
			}) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Retorna apenas as linhas que atendem a uma condição." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "group by" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Agrega valores em linhas (agrupamento)." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "pivot" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Transforma valores distintos de uma coluna em novas colunas." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "order by" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Classifica linhas por valores de colunas." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "limit" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Limita o número de linhas retornadas." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "offset" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Ignora um número de linhas iniciais." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "label" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Define rótulos (nomes) de colunas no resultado." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "format" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Formata valores de determinadas colunas segundo padrões." })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "options" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Define opções adicionais de consulta." })] })
		] })] })
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
export { toc as a, structuredData as i, base_structure_exports as n, frontmatter as r, MDXContent as t };
