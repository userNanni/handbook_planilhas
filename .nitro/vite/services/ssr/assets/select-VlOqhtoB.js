import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/clausulas/select.md?collection=docs
var select_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "SELECT",
	"description": "A cláusula SELECT da função QUERY — selecionar colunas específicas ou todas."
};
var structuredData = {
	"contents": [
		{
			"heading": "select",
			"content": "A primeira das Cláusulas Linguísticas e a mais importante delas, sem ela o resto literalmente não existe. Felizmente, não há mistérios nessa cláusula, basicamente após chamá-la exitem 3 possibilidade:"
		},
		{
			"heading": "select",
			"content": "Selecionar todas os dados com `*`, Portanto \"select \\*\""
		},
		{
			"heading": "select",
			"content": "Selecionar apenas as colunas desejadas, com a letra **MAIÚSCULA** da respectivas colunas, e cada letra separada por **vírgula** como em:"
		},
		{
			"heading": "select",
			"content": "Selecionar apenas as colunas desejadas, se a primeira coluna não for **A:A**, com **Col**+(Número da Coluna em relação a primeira dos dados; 1, 2, 3 ...), e cada letra separada por **vírgula** como em:"
		}
	],
	"headings": [{
		"id": "select",
		"content": "SELECT"
	}]
};
var toc = [{
	depth: 1,
	url: "#select",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "SELECT" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "select",
			children: "SELECT"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A primeira das ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/chart/interactive/docs/querylanguage?sjid=1226402367079700006-SA&hl=pt-br#language-clauses",
				children: "Cláusulas Linguísticas"
			}),
			" e a mais importante delas, sem ela o resto literalmente não existe. Felizmente, não há mistérios nessa cláusula, basicamente após chamá-la exitem 3 possibilidade:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Selecionar todas os dados com ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "*" }),
				", Portanto \"select *\""
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Selecionar apenas as colunas desejadas, com a letra ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "MAIÚSCULA" }),
				" da respectivas colunas, e cada letra separada por ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "vírgula" }),
				" como em:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados;\"select A, B\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, {
			start: "3",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [
					"Selecionar apenas as colunas desejadas, se a primeira coluna não for ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "A:A" }),
					", com ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "Col" }),
					"+(Número da Coluna em relação a primeira dos dados; 1, 2, 3 ...), e cada letra separada por ",
					(0, import_jsx_runtime.jsx)(_components.strong, { children: "vírgula" }),
					" como em:"
				] }),
				"\n"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados;\"select Col1, Col2\")" })
			}) })
		}) })
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
export { toc as a, structuredData as i, frontmatter as n, select_exports as r, MDXContent as t };
