import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/clausulas/where.md?collection=docs
var where_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "WHERE",
	"description": "A cláusula WHERE da função QUERY — filtros simples, complexos e dinâmicos."
};
var structuredData = {
	"contents": [
		{
			"heading": "where",
			"content": "A segunda das Cláusulas Linguísticas e a mais complexa delas, basicamente estamos falando de um filtro. Nesse caso, uma das maneiras de dividir como essa função funciona é sobre o que está sendo filtrado, e sobre os operadores:"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "Existem 7 operadores simples:"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`<=`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`<`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`>`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`>=`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`=`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`!=`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "`<>`"
		},
		{
			"heading": "operadores-de-comparação-simples",
			"content": "> `!=` é equivalente a `<>`."
		},
		{
			"heading": "filtrando-nulos",
			"content": "Quando falamos da filtragem de valores nulos, deixamos de usar a igualdade em si, como em:"
		},
		{
			"heading": "filtrando-nulos",
			"content": "> O exemplo de cima seria uma comparação com um string vazio"
		},
		{
			"heading": "filtrando-nulos",
			"content": "E passamos a utilizar os operadores `is null` ou `is not null`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "Exitem 5 operadores complexos:"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "`contains`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "`starts with`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "`ends with`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "`matches`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "`like`"
		},
		{
			"heading": "operadores-de-comparação-complexos",
			"content": "> **Por que utilizar operadores complexos ?**\\\n> Como o próprio nome leva a crer esses operadores vem com grandes responsabilidades, porém, junto com elas, vem seus grandes poderes. Apesar de exigirem um pouco mais de conhecimento do problema e da linguagem, esses operadores podem permitir a filtragem correta de dados que não estão padronizados e normalizados como deveriam."
		},
		{
			"heading": "filtrando-números-estáticos",
			"content": "Basicamente o tipo de filtro mais básico"
		},
		{
			"heading": "filtrando-textos-estáticos",
			"content": "**Por que um tópico novo para textos estáticos ?**\\\nQuando tratamos de strings dentro da busca da função QUERY, por ser uma busca de dados estruturados, em que há diferença entre os tipos, necessitamos especificar se o que irá ser comparado é um texto ou se se enquadra em outros tipos."
		},
		{
			"heading": "filtrando-textos-estáticos",
			"content": "Portanto, na comparação com strings colocamos o texto entre `'`, famosas aspas simples."
		}
	],
	"headings": [
		{
			"id": "where",
			"content": "WHERE"
		},
		{
			"id": "operadores-de-comparação-simples",
			"content": "Operadores de Comparação Simples"
		},
		{
			"id": "filtrando-nulos",
			"content": "Filtrando nulos"
		},
		{
			"id": "operadores-de-comparação-complexos",
			"content": "Operadores de Comparação Complexos"
		},
		{
			"id": "filtrando-números-estáticos",
			"content": "Filtrando números estáticos"
		},
		{
			"id": "filtrando-textos-estáticos",
			"content": "Filtrando textos estáticos"
		},
		{
			"id": "filtrando-conteúdos-dinâmicos-ou-referenciados",
			"content": "Filtrando conteúdos dinâmicos ou referenciados"
		},
		{
			"id": "filtrando-datas",
			"content": "Filtrando datas"
		},
		{
			"id": "filtrando-intervalos",
			"content": "Filtrando intervalos"
		},
		{
			"id": "juntando-filtros-com-operadores-lógicos",
			"content": "Juntando Filtros com Operadores Lógicos"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#where",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "WHERE" })
	},
	{
		depth: 2,
		url: "#operadores-de-comparação-simples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Operadores de Comparação Simples" })
	},
	{
		depth: 3,
		url: "#filtrando-nulos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando nulos" })
	},
	{
		depth: 2,
		url: "#operadores-de-comparação-complexos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Operadores de Comparação Complexos" })
	},
	{
		depth: 2,
		url: "#filtrando-números-estáticos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando números estáticos" })
	},
	{
		depth: 2,
		url: "#filtrando-textos-estáticos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando textos estáticos" })
	},
	{
		depth: 2,
		url: "#filtrando-conteúdos-dinâmicos-ou-referenciados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando conteúdos dinâmicos ou referenciados" })
	},
	{
		depth: 2,
		url: "#filtrando-datas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando datas" })
	},
	{
		depth: 2,
		url: "#filtrando-intervalos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Filtrando intervalos" })
	},
	{
		depth: 2,
		url: "#juntando-filtros-com-operadores-lógicos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Juntando Filtros com Operadores Lógicos" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		br: "br",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
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
			id: "where",
			children: "WHERE"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A segunda das ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/chart/interactive/docs/querylanguage?sjid=1226402367079700006-SA&hl=pt-br#language-clauses",
				children: "Cláusulas Linguísticas"
			}),
			" e a mais complexa delas, basicamente estamos falando de um filtro. Nesse caso, uma das maneiras de dividir como essa função funciona é sobre o que está sendo filtrado, e sobre os operadores:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "operadores-de-comparação-simples",
			children: "Operadores de Comparação Simples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Existem 7 operadores simples:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<=" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ">" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: ">=" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "=" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "!=" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "<>" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.code, { children: "!=" }),
				" é equivalente a ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "<>" }),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "filtrando-nulos",
			children: "Filtrando nulos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Quando falamos da filtragem de valores nulos, deixamos de usar a igualdade em si, como em:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(Dados;\"select * where A = ''\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "O exemplo de cima seria uma comparação com um string vazio" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"E passamos a utilizar os operadores ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "is null" }),
			" ou ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "is not null" })
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(Dados;\"select * where A is not null\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "operadores-de-comparação-complexos",
			children: "Operadores de Comparação Complexos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Exitem 5 operadores complexos:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "contains" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "starts with" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ends with" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "matches" }) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "like" }) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Por que utilizar operadores complexos ?" }),
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"Como o próprio nome leva a crer esses operadores vem com grandes responsabilidades, porém, junto com elas, vem seus grandes poderes. Apesar de exigirem um pouco mais de conhecimento do problema e da linguagem, esses operadores podem permitir a filtragem correta de dados que não estão padronizados e normalizados como deveriam."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "filtrando-números-estáticos",
			children: "Filtrando números estáticos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Basicamente o tipo de filtro mais básico" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(Dados;\"select * where A = 100\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "filtrando-textos-estáticos",
			children: "Filtrando textos estáticos"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Por que um tópico novo para textos estáticos ?" }),
			(0, import_jsx_runtime.jsx)(_components.br, {}),
			"\n",
			"Quando tratamos de ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "../../../DBConcepts.md#string",
				children: "strings"
			}),
			" dentro da busca da função QUERY, por ser uma busca de dados estruturados, em que há diferença entre os tipos, necessitamos especificar se o que irá ser comparado é um texto ou se se enquadra em outros tipos."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Portanto, na comparação com ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "../../../DBConcepts.md#string",
				children: "strings"
			}),
			" colocamos o texto entre ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "'" }),
			", famosas aspas simples."
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(Dados;\"select * where A = 'hello world'\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "filtrando-conteúdos-dinâmicos-ou-referenciados",
			children: "Filtrando conteúdos dinâmicos ou referenciados"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "filtrando-datas",
			children: "Filtrando datas"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "filtrando-intervalos",
			children: "Filtrando intervalos"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "juntando-filtros-com-operadores-lógicos",
			children: "Juntando Filtros com Operadores Lógicos"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados;\"select A, B\")" })
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
export { where_exports as a, toc as i, frontmatter as n, structuredData as r, MDXContent as t };
