import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/casos-de-estudo/estudo.md?collection=docs
var estudo_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Estudos de Caso",
	"description": "Casos práticos de planilhas eletrônicas (Google Sheets), com diferentes autores e abordagens."
};
var structuredData = {
	"contents": [
		{
			"heading": "estudos-de-caso",
			"content": "Este capítulo explica como foram resolvidas e trabalhadas experiências relevantes de Planilhas Eletrônicas, com foco em Google Sheets."
		},
		{
			"heading": "estudos-de-caso",
			"content": ":::info Autores\nAqui podem aparecer diferentes autores, com diferentes linhas de pensamento e soluções. Quando houver múltiplos autores, use uma seção para cada um.\n:::"
		},
		{
			"heading": "nanni",
			"content": "O caso mais difícil"
		}
	],
	"headings": [
		{
			"id": "estudos-de-caso",
			"content": "Estudos de Caso"
		},
		{
			"id": "sumário-de-casos",
			"content": "Sumário de Casos"
		},
		{
			"id": "nanni",
			"content": "Nanni"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#estudos-de-caso",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estudos de Caso" })
	},
	{
		depth: 2,
		url: "#sumário-de-casos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Sumário de Casos" })
	},
	{
		depth: 3,
		url: "#nanni",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Nanni" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "estudos-de-caso",
			children: "Estudos de Caso"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Este capítulo explica como foram resolvidas e trabalhadas experiências relevantes de Planilhas Eletrônicas, com foco em Google Sheets." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::info Autores\nAqui podem aparecer diferentes autores, com diferentes linhas de pensamento e soluções. Quando houver múltiplos autores, use uma seção para cada um.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "sumário-de-casos",
			children: "Sumário de Casos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "nanni",
			children: "Nanni"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "./mostDifficultProblem.mdx",
				children: "O caso mais difícil"
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
export { toc as a, structuredData as i, estudo_exports as n, frontmatter as r, MDXContent as t };
