import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/index.mdx?collection=docs
var funcoes_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Funções",
	"description": "Funções do Google Sheets com exemplos práticos — QUERY, XLOOKUP, MAP, ARRAYFORMULA e GOOGLEFINANCE."
};
var structuredData = {
	"contents": [
		{
			"heading": "funções",
			"content": "Referência das principais funções do Google Sheets abordadas neste handbook."
		},
		{
			"heading": "funções-disponíveis",
			"content": "**QUERY** — a mais importante; usa uma linguagem semelhante a SQL"
		},
		{
			"heading": "funções-disponíveis",
			"content": "**XLOOKUP** — busca avançada, substituto do VLOOKUP"
		},
		{
			"heading": "funções-disponíveis",
			"content": "**MAP** — aplica uma lambda a cada elemento de um array"
		},
		{
			"heading": "funções-disponíveis",
			"content": "**ARRAYFORMULA** — expande fórmulas para um intervalo inteiro"
		},
		{
			"heading": "funções-disponíveis",
			"content": "**GOOGLEFINANCE** — dados financeiros em tempo real"
		}
	],
	"headings": [{
		"id": "funções",
		"content": "Funções"
	}, {
		"id": "funções-disponíveis",
		"content": "Funções disponíveis"
	}]
};
var toc = [{
	depth: 1,
	url: "#funções",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Funções" })
}, {
	depth: 2,
	url: "#funções-disponíveis",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Funções disponíveis" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		h1: "h1",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "funções",
			children: "Funções"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Referência das principais funções do Google Sheets abordadas neste handbook." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "funções-disponíveis",
			children: "Funções disponíveis"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/funcoes/query",
				children: "QUERY"
			}) }), " — a mais importante; usa uma linguagem semelhante a SQL"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/funcoes/xlookup",
				children: "XLOOKUP"
			}) }), " — busca avançada, substituto do VLOOKUP"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/funcoes/map",
				children: "MAP"
			}) }), " — aplica uma lambda a cada elemento de um array"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/funcoes/arrayformula",
				children: "ARRAYFORMULA"
			}) }), " — expande fórmulas para um intervalo inteiro"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "/docs/funcoes/googlefinance",
				children: "GOOGLEFINANCE"
			}) }), " — dados financeiros em tempo real"] }),
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
export { toc as a, structuredData as i, frontmatter as n, funcoes_exports as r, MDXContent as t };
