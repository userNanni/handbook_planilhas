import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/index.mdx?collection=docs
var query_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = { "title": "Função Query" };
var structuredData = {
	"contents": [
		{
			"heading": "query",
			"content": "Uma das, se não a **Mais Importante** das Funções do Sheets, e aqui vai o porquê: A função query permite passar qualquer intervalo como se fosse um banco de dados utilizando da linguagem de consultas da API de visualização do Google para fazer consultas, assim como é utilizado o SQL em outros tipos de Bancos de Dados Estruturados Relacionais."
		},
		{
			"heading": "query",
			"content": "> Você programador que já utilizou SQL. Lembra de todo poder que aquela linguagem te dava ? Lembra do delete sem where na production que quase te mandou embora ? Sim, quase tudo aquilo pode ser chamado aqui, deixe para traz o terror de utilizar funções, poderá finalmente fazer uma linha de código, porém ainda dentro dessa função."
		},
		{
			"heading": "query",
			"content": "> Essa é uma das poucas funções do Google Sheets que a Documentação é um pouco falha, há pouquíssimos exemplos e pouca explicação sobre seu uso, por isso foi dedicado um capítulo só para ela, além de sua versatilidade. Outra fonte de estudo aos English Speakers ou melhor Readers, é o site Ben Collins."
		},
		{
			"heading": "query",
			"content": "Mas primeiro vamos conhecer alguns conceitos dessa linguagem:"
		},
		{
			"heading": "query",
			"content": "Estrutura Básica"
		},
		{
			"heading": "query",
			"content": "Cláusulas Linguísticas"
		},
		{
			"heading": "query",
			"content": "select"
		},
		{
			"heading": "query",
			"content": "where"
		},
		{
			"heading": "query",
			"content": "Estrutura Mista"
		}
	],
	"headings": [{
		"id": "query",
		"content": "Query"
	}]
};
var toc = [{
	depth: 1,
	url: "#query",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Query" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		h1: "h1",
		hr: "hr",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "query",
			children: "Query"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Uma das, se não a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Mais Importante" }),
			" das Funções do Sheets, e aqui vai o porquê: A função query permite passar qualquer intervalo como se fosse um banco de dados utilizando da ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/chart/interactive/docs/querylanguage?hl=pt-br",
				children: "linguagem de consultas da API de visualização do Google"
			}),
			" para fazer consultas, assim como é utilizado o SQL em outros tipos de Bancos de Dados Estruturados Relacionais."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Você programador que já utilizou SQL. Lembra de todo poder que aquela linguagem te dava ? Lembra do delete sem where na production que quase te mandou embora ? Sim, quase tudo aquilo pode ser chamado aqui, deixe para traz o terror de utilizar funções, poderá finalmente fazer uma linha de código, porém ainda dentro dessa função." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Essa é uma das poucas funções do Google Sheets que a Documentação é um pouco falha, há pouquíssimos exemplos e pouca explicação sobre seu uso, por isso foi dedicado um capítulo só para ela, além de sua versatilidade. Outra fonte de estudo aos English Speakers ou melhor Readers, é o site ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.benlcollins.com/",
					children: "Ben Collins"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Mas primeiro vamos conhecer alguns conceitos dessa linguagem:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./baseStructure.md",
				children: "Estrutura Básica"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "./clauses/_category_.json",
					children: "Cláusulas Linguísticas"
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "./clauses/select.md",
						children: "select"
					}) }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
						href: "./clauses/where.md",
						children: "where"
					}) }),
					"\n"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./mixedStructure.md",
				children: "Estrutura Mista"
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
export { toc as a, structuredData as i, frontmatter as n, query_exports as r, MDXContent as t };
