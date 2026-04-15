import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/praticas/query.mdx?collection=docs
var query_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Prática — QUERY com Titanic",
	"description": "Exercícios com o banco de dados do Titanic para praticar a função QUERY."
};
var structuredData = {
	"contents": [{
		"heading": "banco-de-dados-para-os-exercícios",
		"content": "> Nanni, aqui de novo. Então, em 2017, eu fiz um curso de análise de dados com uma ferramenta chamada Lemonade, e um dos banco de dados que utilizamos foi o de vítimas do Titanic. Acho ele bem interessante, é público e é possível trabalhar nele para diversos objetivos. A melhor parte é ser uma aplicação real, um banco de dados que não é perfeito, que tem dados faltando e outros problemas comuns."
	}, {
		"heading": "banco-de-dados-para-os-exercícios",
		"content": "Titanic dataBase\\\n&#x2A;*Créditos:** datasciencedojo"
	}],
	"headings": [{
		"id": "banco-de-dados-para-os-exercícios",
		"content": "Banco de dados para os exercícios"
	}]
};
var toc = [{
	depth: 1,
	url: "#banco-de-dados-para-os-exercícios",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Banco de dados para os exercícios" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		br: "br",
		h1: "h1",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "banco-de-dados-para-os-exercícios",
			children: "Banco de dados para os exercícios"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Nanni, aqui de novo. Então, em 2017, eu fiz um curso de análise de dados com uma ferramenta chamada ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://www.lemonade.org.br/",
					children: "Lemonade"
				}),
				", e um dos banco de dados que utilizamos foi o de vítimas do Titanic. Acho ele bem interessante, é público e é possível trabalhar nele para diversos objetivos. A melhor parte é ser uma aplicação real, um banco de dados que não é perfeito, que tem dados faltando e outros problemas comuns."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/datasciencedojo/datasets/blob/master/titanic.csv",
				children: "Titanic dataBase"
			}),
			(0, import_jsx_runtime.jsx)(_components.br, {}),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Créditos:" }),
			" ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/datasciencedojo",
				children: "datasciencedojo"
			})
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
