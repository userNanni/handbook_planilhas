import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/funcoes/query/mixed-structure.mdx?collection=docs
var mixed_structure_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Estrutura Mista",
	"description": "Uso combinado de colunas por letra e por índice na função QUERY."
};
var structuredData = {
	"contents": [
		{
			"heading": "estrutura-mista",
			"content": "> Esse nome não é canônico, apenas foi utilizado para simplificar uma das propriedades e modo de escrita da consulta"
		},
		{
			"heading": "estrutura-mista",
			"content": "Como foi visto na estrutura básica e no capítulo de Cláusulas Linguísticas, a consulta dentro da função query deve ser uma string, a qual será passada entre aspas duplas (\"consulta\"). Essa característica não impede que a consulta seja o resultado de uma função, desde que esse resultado siga as características que toda consulta deve ter, como em:"
		},
		{
			"heading": "estrutura-mista",
			"content": "Ainda pode ser utilizado da mesma lógica para juntar duas ou mais strings para gerar uma consulta, como em:"
		},
		{
			"heading": "estrutura-mista",
			"content": "O método **mais útil** e que representa quase 100% dos usos desse tipo de estrutura é uma combinação das duas últimas formas, como em:"
		},
		{
			"heading": "estrutura-mista",
			"content": "> Caso real utilizado do sistema de Comando e Controle de um Esquadrão do CCAER, para a consulta dinâmica de dados de componentes desse Esquadrão."
		}
	],
	"headings": [{
		"id": "estrutura-mista",
		"content": "Estrutura Mista"
	}]
};
var toc = [{
	depth: 1,
	url: "#estrutura-mista",
	title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estrutura Mista" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		blockquote: "blockquote",
		code: "code",
		h1: "h1",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "estrutura-mista",
			children: "Estrutura Mista"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Esse nome não é canônico, apenas foi utilizado para simplificar uma das propriedades e modo de escrita da consulta" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Como foi visto na estrutura básica e no capítulo de ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "./base-structure.mdx",
				children: "Cláusulas Linguísticas"
			}),
			", a consulta dentro da função query deve ser uma string, a qual será passada entre aspas duplas (\"consulta\"). Essa característica não impede que a consulta seja o resultado de uma função, desde que esse resultado siga as características que toda consulta deve ter, como em:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados;IF(A1 = \"valor de A1\";\"select A, B where C = 'opção 1'\";\"select A,B where C = 'Opção 2'\"); [cabeçalhos])" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Ainda pode ser utilizado da mesma lógica para juntar duas ou mais strings para gerar uma consulta, como em:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY(dados;\"select A, B \" & \" where C = 'Opção 2'\"; [cabeçalhos])" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"O método ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "mais útil" }),
			" e que representa quase 100% dos usos desse tipo de estrutura é uma combinação das duas últimas formas, como em:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=QUERY('Banco de Dados'!A:EJ;\"select A,B\" & if(H2=true;\",C,F\";) & IF(H3=true;\",D,E,EJ,W\";) & IF(H4=true;\",K,L\";) & IF(H5=true;\",G,H,I,M,N,O,P,Q,R\";) & IF(H6;\",X,Y,Z\";) & IF(H7=true;\",CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,DA,DB,DC,DD,DE,DF,DG,DH,DI\";) & IF(H8=true;\",AR,AS,AT,AU,AV,AW,AX,AZ,BA\";) & IF(D6=\"\";;\" where B = '\"&D6&\"'\");1)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Caso real utilizado do sistema de Comando e Controle de um Esquadrão do CCAER, para a consulta dinâmica de dados de componentes desse Esquadrão." }),
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
export { toc as a, structuredData as i, frontmatter as n, mixed_structure_exports as r, MDXContent as t };
