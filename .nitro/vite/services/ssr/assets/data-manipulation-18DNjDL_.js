import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/data-manipulation.mdx?collection=docs
var data_manipulation_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Funções de Manipulação de Dados",
	"description": "Funções de agregação e transformação disponíveis na linguagem da função QUERY."
};
var structuredData = {
	"contents": [
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "A linguagem da função QUERY suporta diversas funções para agregar e transformar dados diretamente na consulta."
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Função"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Descrição"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "`count()`"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Conta os registros não-nulos"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "`sum()`"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Soma os valores numéricos"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "`avg()`"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Calcula a média"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "`min()`"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Retorna o menor valor"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "`max()`"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "Retorna o maior valor"
		},
		{
			"heading": "funções-de-manipulação-de-dados",
			"content": "> Estas funções são usadas em conjunto com a cláusula `group by`."
		}
	],
	"headings": [{
		"id": "funções-de-manipulação-de-dados",
		"content": "Funções de Manipulação de Dados"
	}]
};
var toc = [{
	depth: 1,
	url: "#funções-de-manipulação-de-dados",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Funções de Manipulação de Dados" })
}];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
		code: "code",
		h1: "h1",
		p: "p",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "funções-de-manipulação-de-dados",
			children: "Funções de Manipulação de Dados"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A linguagem da função QUERY suporta diversas funções para agregar e transformar dados diretamente na consulta." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Função" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Descrição" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "count()" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Conta os registros não-nulos" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "sum()" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Soma os valores numéricos" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "avg()" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Calcula a média" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "min()" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Retorna o menor valor" })] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "max()" }) }), (0, import_jsx_runtime.jsx)(_components.td, { children: "Retorna o maior valor" })] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Estas funções são usadas em conjunto com a cláusula ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "group by" }),
				"."
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
export { toc as a, structuredData as i, data_manipulation_exports as n, frontmatter as r, MDXContent as t };
