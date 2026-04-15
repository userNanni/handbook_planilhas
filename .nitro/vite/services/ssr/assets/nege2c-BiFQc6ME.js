import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/nege2c.mdx?collection=docs
var nege2c_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "O NEGE²C",
	"description": "O NEGE²C como parte da trajetória do autor — um ambiente que moldou experiências e aprendizados presentes neste handbook."
};
var structuredData = {
	"contents": [
		{
			"heading": "o-negec",
			"content": "O Núcleo de Estudos sobre Guerra Eletrônica, Espaço e Cibernética — o **NEGE²C** — foi um dos ambientes mais importantes da minha formação técnica. Passei por ele como cadete e foi lá que muito do meu repertório prático em computação, análise de dados e resolução de problemas tomou forma."
		},
		{
			"heading": "o-negec",
			"content": "Este handbook **não é sobre o NEGE²C**, nem é um material institucional do Núcleo. Mas seria desonesto não reconhecer que grande parte do que aprendi e que trago aqui foi desenvolvido, testado e refinado naquele ambiente."
		},
		{
			"heading": "o-negec",
			"content": "Para quem quiser conhecer mais: o NEGE²C é um órgão subordinado à Associação de Cadetes da Aeronáutica (SCAER), com finalidade de promover a capacitação nos setores de Guerra Eletrônica, Espaço, Cibernética e Computação — integrando cadetes com unidades das FFAA como o DCTA e o ComDCiber, e fomentando pesquisa, artigos e competições na área."
		}
	],
	"headings": [{
		"id": "o-negec",
		"content": "O NEGE²C"
	}]
};
var toc = [{
	depth: 1,
	url: "#o-negec",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "O NEGE²C" })
}];
function _createMdxContent(props) {
	const _components = {
		h1: "h1",
		hr: "hr",
		p: "p",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "o-negec",
			children: "O NEGE²C"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: "/img/Bolacha%20NEGEC.svg",
			alt: "Logo do NEGE²C",
			style: {
				width: "200px",
				maxWidth: "100%",
				display: "block",
				margin: "0 0 1rem 0"
			}
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"O Núcleo de Estudos sobre Guerra Eletrônica, Espaço e Cibernética — o ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "NEGE²C" }),
			" — foi um dos ambientes mais importantes da minha formação técnica. Passei por ele como cadete e foi lá que muito do meu repertório prático em computação, análise de dados e resolução de problemas tomou forma."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Este handbook ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "não é sobre o NEGE²C" }),
			", nem é um material institucional do Núcleo. Mas seria desonesto não reconhecer que grande parte do que aprendi e que trago aqui foi desenvolvido, testado e refinado naquele ambiente."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Para quem quiser conhecer mais: o NEGE²C é um órgão subordinado à Associação de Cadetes da Aeronáutica (SCAER), com finalidade de promover a capacitação nos setores de Guerra Eletrônica, Espaço, Cibernética e Computação — integrando cadetes com unidades das FFAA como o DCTA e o ComDCiber, e fomentando pesquisa, artigos e competições na área." })
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
export { toc as a, structuredData as i, frontmatter as n, nege2c_exports as r, MDXContent as t };
