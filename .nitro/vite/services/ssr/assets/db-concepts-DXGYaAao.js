import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/db-concepts.mdx?collection=docs
var db_concepts_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Conceitos Relevantes de Banco de Dados para Planilhas",
	"description": "Tipos de dados (estruturados, semi e não estruturados), tipagem, estruturas de dados e noções relacionais aplicadas a planilhas (com foco em Google Sheets)."
};
var structuredData = {
	"contents": [
		{
			"heading": "tipos-de-dados-em-bancos-de-dados",
			"content": "Quando falamos dos **tipos de dados** que podem estar em um **banco de dados**, há várias maneiras de **classificá-los**. Uma delas é pela forma e rigidez de estruturação. Essa classificação consiste em 3 tipos:"
		},
		{
			"heading": "tipos-de-dados-em-bancos-de-dados",
			"content": "Estruturados"
		},
		{
			"heading": "tipos-de-dados-em-bancos-de-dados",
			"content": "Não Estruturados"
		},
		{
			"heading": "tipos-de-dados-em-bancos-de-dados",
			"content": "Semi-Estruturados"
		},
		{
			"heading": "tipos-de-dados-em-bancos-de-dados",
			"content": "> Mas no que isso vai me auxiliar nas planilhas?\\\n> O Google Sheets força/infere automaticamente os tipos de cada coluna (atributo), o que influencia validação, filtros, ordenação e funções disponíveis."
		},
		{
			"heading": "estruturados",
			"content": "Dados **estruturados** possuem **esquema pré-definido e rígido** ao longo da aplicação (ex.: tabelas relacionais). Isso traz **segurança** e **clareza** sobre que tipo de dado é esperado em cada **atributo**, permitindo agregações como soma, média, contagens, etc., com confiabilidade."
		},
		{
			"heading": "sql",
			"content": "Um dos maiores pontos relacionados a dados estruturados é a **Linguagem de Consulta Estruturada** — &#x2A;*SQL (Structured Query Language)** —, amplamente utilizada para consultas em bancos relacionais. No contexto do Google Sheets, há semelhança com a linguagem de consultas da Google Visualization API, que inspira a famosa função QUERY."
		},
		{
			"heading": "sql",
			"content": "> Embora exista o padrão (ex.: SQL ANSI), cada SGBD (MySQL, PostgreSQL, Oracle etc.) pode ter dialetos próprios com funções e sintaxes específicas. Ao migrar consultas entre sistemas, revise funções e tipos."
		},
		{
			"heading": "não-estruturados",
			"content": "Dados **não estruturados** são aqueles que, ao contrário dos estruturados, **não** seguem um **esquema rígido pré-definido**. Exemplos comuns: fotos, vídeos, áudios, documentos. Estima-se que **grande parte** dos dados gerados na **internet** esteja nessa forma."
		},
		{
			"heading": "semi-estruturados",
			"content": "Dados **semi-estruturados** ficam entre estruturados e não estruturados, apresentando **características de ambos**. São organizados (possuem marcadores/pares-chave), porém sem a **rigidez** de um banco relacional. Exemplos: JSON, XML, CSV com variações."
		},
		{
			"heading": "string",
			"content": "Uma **cadeia de caracteres** (letras, símbolos, textos). Em planilhas é o que você vê como “Texto”."
		},
		{
			"heading": "boolean",
			"content": "Valor lógico que assume **verdadeiro/falso** (em planilhas, muitas vezes exibido como TRUE/FALSE ou 0/1 conforme o caso)."
		},
		{
			"heading": "boolean",
			"content": ":::note\n“Booleano” ou “lógico” homenageia George Boole, matemático que formalizou a álgebra booleana.\n:::"
		},
		{
			"heading": "int",
			"content": "**Número inteiro** (sem parte decimal)."
		},
		{
			"heading": "float",
			"content": "Número em **ponto flutuante** (com parte decimal). Em planilhas, cuidados com configurações regionais (vírgula “,” vs ponto “.”) são essenciais."
		},
		{
			"heading": "array",
			"content": "Uma das estruturas mais versáteis: uma **sequência de elementos** acessados por índice."
		},
		{
			"heading": "array",
			"content": "> Em português, também chamado de “arranjo”.\\\n> Tipos básicos:\n>\n> 1. **Vetor**: array unidimensional.\n> 2. **Matriz**: array bidimensional (um conjunto de vetores)."
		},
		{
			"heading": "métodos-de-array-visão-rápida",
			"content": "`map`: transforma cada elemento e retorna um novo array."
		},
		{
			"heading": "métodos-de-array-visão-rápida",
			"content": "`filter`: mantém apenas os elementos que satisfazem uma condição."
		},
		{
			"heading": "métodos-de-array-visão-rápida",
			"content": "`reduce`: acumula valores em um único resultado (soma, produto, agregações)."
		},
		{
			"heading": "métodos-de-array-visão-rápida",
			"content": "`push/pop`: adiciona/remove do fim (pilha)."
		},
		{
			"heading": "métodos-de-array-visão-rápida",
			"content": "`shift/unshift`: remove/adiciona no início (fila/deque)."
		},
		{
			"heading": "pilha-stack--lifoueps",
			"content": "Estrutura que obedece a regra `LIFO` (**L**ast **I**n, **F**irst **O**ut) — em português, **UEPS** (**Ú**ltimo que **E**ntra, **P**rimeiro que **S**ai)."
		},
		{
			"heading": "pilha-stack--lifoueps",
			"content": ":::tip Exemplo prático (Ctrl+Z)\nAo desfazer ações, a primeira ação desfeita é a última que foi executada — exatamente o comportamento de uma pilha.\n:::"
		},
		{
			"heading": "fila-queue--fifopeps",
			"content": "Estrutura que segue `FIFO` (**F**irst **I**n, **F**irst **O**ut) — em português, **PEPS** (**P**rimeiro que **E**ntra, **P**rimeiro que **S**ai)."
		},
		{
			"heading": "fila-queue--fifopeps",
			"content": ":::info Exemplo prático (Mensagens)\nMensageiros como o WhatsApp tendem a manter a ordem de chegada das mensagens; a primeira enviada é a primeira entregue/consumida, tipicamente modelada com filas.\n:::"
		},
		{
			"heading": "deque-double-ended-queue",
			"content": "Uma fila que permite inserções e remoções no início e no fim. Útil quando é preciso flexibilidade de ambos os lados."
		},
		{
			"heading": "tabelas",
			"content": "Conjuntos tabulares (linhas e colunas) que armazenam dados de um mesmo tipo de entidade (ex.: Pessoas, Produtos)."
		},
		{
			"heading": "registros",
			"content": "**Registros** são as linhas da tabela. Cada linha segue o esquema definido pelos atributos."
		},
		{
			"heading": "atributos",
			"content": "Colunas que definem o **tipo de informação** armazenada em cada registro (ex.: `nome`, `telefone`, `preco`). Em planilhas, correspondem aos nomes de cabeçalhos."
		},
		{
			"heading": "chaves-primárias-primary-keys",
			"content": "Um tipo especial de atributo usado para **identificar univocamente** um registro. A chave pode ser:"
		},
		{
			"heading": "chaves-primárias-primary-keys",
			"content": "**Simples**: composta por um único atributo (ex.: `id`)."
		},
		{
			"heading": "chaves-primárias-primary-keys",
			"content": "**Composta**: união de vários atributos (ex.: `ano` + `matricula`)."
		},
		{
			"heading": "chaves-primárias-primary-keys",
			"content": "> Em bancos relacionais, chaves primárias devem ser únicas para permitir referência confiável a cada registro."
		},
		{
			"heading": "entidades",
			"content": "No modelo relacional, as tabelas representam **entidades**. Cada entidade possui atributos e registros que a descrevem."
		},
		{
			"heading": "relacionamentos",
			"content": "Ligam entidades por meio de **chaves primárias** e **chaves estrangeiras**:"
		},
		{
			"heading": "relacionamentos",
			"content": "`1 : 1` (um para um)"
		},
		{
			"heading": "relacionamentos",
			"content": "`1 : N` (um para muitos)"
		},
		{
			"heading": "relacionamentos",
			"content": "`N : N` (muitos para muitos)"
		},
		{
			"heading": "relacionamentos",
			"content": "Permitem conectar dados e evitar redundância (normalização)."
		},
		{
			"heading": "exemplo",
			"content": "**Tabela 1 (Pessoas)**"
		},
		{
			"heading": "exemplo",
			"content": "Nome"
		},
		{
			"heading": "exemplo",
			"content": "Telefone"
		},
		{
			"heading": "exemplo",
			"content": "João"
		},
		{
			"heading": "exemplo",
			"content": "1015"
		},
		{
			"heading": "exemplo",
			"content": "Pedro"
		},
		{
			"heading": "exemplo",
			"content": "1016"
		},
		{
			"heading": "exemplo",
			"content": "**Tabela 2 (Planos)**"
		},
		{
			"heading": "exemplo",
			"content": "Telefone"
		},
		{
			"heading": "exemplo",
			"content": "Preço"
		},
		{
			"heading": "exemplo",
			"content": "1015"
		},
		{
			"heading": "exemplo",
			"content": "80"
		},
		{
			"heading": "exemplo",
			"content": "1016"
		},
		{
			"heading": "exemplo",
			"content": "90"
		},
		{
			"heading": "exemplo",
			"content": "Relacionando pelo telefone (chave comum), obtemos:"
		},
		{
			"heading": "exemplo",
			"content": "Nome"
		},
		{
			"heading": "exemplo",
			"content": "Telefone"
		},
		{
			"heading": "exemplo",
			"content": "Preço"
		},
		{
			"heading": "exemplo",
			"content": "João"
		},
		{
			"heading": "exemplo",
			"content": "1015"
		},
		{
			"heading": "exemplo",
			"content": "80"
		},
		{
			"heading": "exemplo",
			"content": "Pedro"
		},
		{
			"heading": "exemplo",
			"content": "1016"
		},
		{
			"heading": "exemplo",
			"content": "90"
		},
		{
			"heading": "der-diagrama-entidade-relacionamento",
			"content": "O DER é uma forma de **visualizar** um banco de dados: entidades (tabelas), atributos e relacionamentos. Nele, representamos cardinalidades como `1:1`, `1:N` e `N:N`, e identificamos chaves primárias e estrangeiras que materializam os vínculos."
		}
	],
	"headings": [
		{
			"id": "conceitos-relevantes-de-banco-de-dados-para-planilhas",
			"content": "Conceitos Relevantes de Banco de Dados para Planilhas"
		},
		{
			"id": "tipos-de-dados-em-bancos-de-dados",
			"content": "Tipos de Dados em Bancos de Dados"
		},
		{
			"id": "estruturados",
			"content": "Estruturados"
		},
		{
			"id": "sql",
			"content": "SQL"
		},
		{
			"id": "não-estruturados",
			"content": "Não Estruturados"
		},
		{
			"id": "semi-estruturados",
			"content": "Semi-Estruturados"
		},
		{
			"id": "tipagem-dos-dados",
			"content": "Tipagem dos Dados"
		},
		{
			"id": "string",
			"content": "String"
		},
		{
			"id": "boolean",
			"content": "Boolean"
		},
		{
			"id": "int",
			"content": "Int"
		},
		{
			"id": "float",
			"content": "Float"
		},
		{
			"id": "estruturas-de-dados",
			"content": "Estruturas de Dados"
		},
		{
			"id": "array",
			"content": "Array"
		},
		{
			"id": "métodos-de-array-visão-rápida",
			"content": "Métodos de Array (visão rápida)"
		},
		{
			"id": "pilha-stack--lifoueps",
			"content": "Pilha (Stack — LIFO/UEPS)"
		},
		{
			"id": "fila-queue--fifopeps",
			"content": "Fila (Queue — FIFO/PEPS)"
		},
		{
			"id": "deque-double-ended-queue",
			"content": "Deque (Double-Ended Queue)"
		},
		{
			"id": "a-estrutura-propriamente-dita-de-um-banco-de-dados-relacional",
			"content": "A estrutura (propriamente dita) de um banco de dados relacional"
		},
		{
			"id": "tabelas",
			"content": "Tabelas"
		},
		{
			"id": "registros",
			"content": "Registros"
		},
		{
			"id": "atributos",
			"content": "Atributos"
		},
		{
			"id": "chaves-primárias-primary-keys",
			"content": "Chaves Primárias (Primary Keys)"
		},
		{
			"id": "entidades",
			"content": "Entidades"
		},
		{
			"id": "relacionamentos",
			"content": "Relacionamentos"
		},
		{
			"id": "exemplo",
			"content": "Exemplo"
		},
		{
			"id": "der-diagrama-entidade-relacionamento",
			"content": "D.E.R. (Diagrama Entidade-Relacionamento)"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#conceitos-relevantes-de-banco-de-dados-para-planilhas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Conceitos Relevantes de Banco de Dados para Planilhas" })
	},
	{
		depth: 2,
		url: "#tipos-de-dados-em-bancos-de-dados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tipos de Dados em Bancos de Dados" })
	},
	{
		depth: 3,
		url: "#estruturados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estruturados" })
	},
	{
		depth: 3,
		url: "#sql",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "SQL" })
	},
	{
		depth: 3,
		url: "#não-estruturados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Não Estruturados" })
	},
	{
		depth: 3,
		url: "#semi-estruturados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Semi-Estruturados" })
	},
	{
		depth: 2,
		url: "#tipagem-dos-dados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tipagem dos Dados" })
	},
	{
		depth: 3,
		url: "#string",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "String" })
	},
	{
		depth: 3,
		url: "#boolean",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Boolean" })
	},
	{
		depth: 3,
		url: "#int",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Int" })
	},
	{
		depth: 3,
		url: "#float",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Float" })
	},
	{
		depth: 2,
		url: "#estruturas-de-dados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Estruturas de Dados" })
	},
	{
		depth: 3,
		url: "#array",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Array" })
	},
	{
		depth: 3,
		url: "#métodos-de-array-visão-rápida",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Métodos de Array (visão rápida)" })
	},
	{
		depth: 3,
		url: "#pilha-stack--lifoueps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Pilha (Stack — LIFO/UEPS)" })
	},
	{
		depth: 3,
		url: "#fila-queue--fifopeps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Fila (Queue — FIFO/PEPS)" })
	},
	{
		depth: 3,
		url: "#deque-double-ended-queue",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deque (Double-Ended Queue)" })
	},
	{
		depth: 2,
		url: "#a-estrutura-propriamente-dita-de-um-banco-de-dados-relacional",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "A estrutura (propriamente dita) de um banco de dados relacional" })
	},
	{
		depth: 3,
		url: "#tabelas",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Tabelas" })
	},
	{
		depth: 3,
		url: "#registros",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Registros" })
	},
	{
		depth: 3,
		url: "#atributos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Atributos" })
	},
	{
		depth: 3,
		url: "#chaves-primárias-primary-keys",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Chaves Primárias (Primary Keys)" })
	},
	{
		depth: 3,
		url: "#entidades",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Entidades" })
	},
	{
		depth: 3,
		url: "#relacionamentos",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Relacionamentos" })
	},
	{
		depth: 3,
		url: "#exemplo",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Exemplo" })
	},
	{
		depth: 3,
		url: "#der-diagrama-entidade-relacionamento",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "D.E.R. (Diagrama Entidade-Relacionamento)" })
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
		hr: "hr",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
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
			id: "conceitos-relevantes-de-banco-de-dados-para-planilhas",
			children: "Conceitos Relevantes de Banco de Dados para Planilhas"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tipos-de-dados-em-bancos-de-dados",
			children: "Tipos de Dados em Bancos de Dados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Quando falamos dos ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "tipos de dados" }),
			" que podem estar em um ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "banco de dados" }),
			", há várias maneiras de ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "classificá-los" }),
			". Uma delas é pela forma e rigidez de estruturação. Essa classificação consiste em 3 tipos:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#estruturados",
				children: "Estruturados"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#nao-estruturados",
				children: "Não Estruturados"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "#semi-estruturados",
				children: "Semi-Estruturados"
			}) }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Mas no que isso vai me auxiliar nas planilhas?",
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"O Google Sheets força/infere automaticamente os tipos de cada coluna (atributo), o que influencia validação, filtros, ordenação e funções disponíveis."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "estruturados",
			children: "Estruturados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Dados ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "estruturados" }),
			" possuem ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "esquema pré-definido e rígido" }),
			" ao longo da aplicação (ex.: tabelas relacionais). Isso traz ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "segurança" }),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "clareza" }),
			" sobre que tipo de dado é esperado em cada ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#atributos",
				children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "atributo" })
			}),
			", permitindo agregações como soma, média, contagens, etc., com confiabilidade."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "sql",
			children: "SQL"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Um dos maiores pontos relacionados a dados estruturados é a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Linguagem de Consulta Estruturada" }),
			" — ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "SQL (Structured Query Language)" }),
			" —, amplamente utilizada para consultas em bancos relacionais. No contexto do Google Sheets, há semelhança com a ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.google.com/chart/interactive/docs/querylanguage?hl=pt-br",
				children: "linguagem de consultas da Google Visualization API"
			}),
			", que inspira a famosa função QUERY."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Embora exista o padrão (ex.: SQL ANSI), cada SGBD (MySQL, PostgreSQL, Oracle etc.) pode ter dialetos próprios com funções e sintaxes específicas. Ao migrar consultas entre sistemas, revise funções e tipos." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "não-estruturados",
			children: "Não Estruturados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Dados ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "não estruturados" }),
			" são aqueles que, ao contrário dos ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#estruturados",
				children: "estruturados"
			}),
			", ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "não" }),
			" seguem um ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "esquema rígido pré-definido" }),
			". Exemplos comuns: fotos, vídeos, áudios, documentos. Estima-se que ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "grande parte" }),
			" dos dados gerados na ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "internet" }),
			" esteja nessa forma."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "semi-estruturados",
			children: "Semi-Estruturados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Dados ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "semi-estruturados" }),
			" ficam entre estruturados e não estruturados, apresentando ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "características de ambos" }),
			". São organizados (possuem marcadores/pares-chave), porém sem a ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "rigidez" }),
			" de um banco relacional. Exemplos: JSON, XML, CSV com variações."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "tipagem-dos-dados",
			children: "Tipagem dos Dados"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "string",
			children: "String"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Uma ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "cadeia de caracteres" }),
			" (letras, símbolos, textos). Em planilhas é o que você vê como “Texto”."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "boolean",
			children: "Boolean"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Valor lógico que assume ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "verdadeiro/falso" }),
			" (em planilhas, muitas vezes exibido como TRUE/FALSE ou 0/1 conforme o caso)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::note\n“Booleano” ou “lógico” homenageia George Boole, matemático que formalizou a álgebra booleana.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "int",
			children: "Int"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Número inteiro" }), " (sem parte decimal)."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "float",
			children: "Float"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Número em ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "ponto flutuante" }),
			" (com parte decimal). Em planilhas, cuidados com configurações regionais (vírgula “,” vs ponto “.”) são essenciais."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "estruturas-de-dados",
			children: "Estruturas de Dados"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "array",
			children: "Array"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Uma das estruturas mais versáteis: uma ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "sequência de elementos" }),
			" acessados por índice."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Em português, também chamado de “arranjo”.",
				(0, import_jsx_runtime.jsx)(_components.br, {}),
				"\n",
				"Tipos básicos:"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Vetor" }), ": array unidimensional."] }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Matriz" }), ": array bidimensional (um conjunto de vetores)."] }),
				"\n"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "const"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: " numerosPrimos"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: " ="
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ["
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "2"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "3"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "5"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "7"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "11"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "13"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ", "
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "17"
					}),
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "];"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "métodos-de-array-visão-rápida",
			children: "Métodos de Array (visão rápida)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "map" }), ": transforma cada elemento e retorna um novo array."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "filter" }), ": mantém apenas os elementos que satisfazem uma condição."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "reduce" }), ": acumula valores em um único resultado (soma, produto, agregações)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "push/pop" }), ": adiciona/remove do fim (pilha)."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "shift/unshift" }), ": remove/adiciona no início (fila/deque)."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "pilha-stack--lifoueps",
			children: "Pilha (Stack — LIFO/UEPS)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Estrutura que obedece a regra ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "LIFO" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "L" }),
			"ast ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "I" }),
			"n, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "F" }),
			"irst ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "O" }),
			"ut) — em português, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "UEPS" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Ú" }),
			"ltimo que ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "E" }),
			"ntra, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "P" }),
			"rimeiro que ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "S" }),
			"ai)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::tip Exemplo prático (Ctrl+Z)\nAo desfazer ações, a primeira ação desfeita é a última que foi executada — exatamente o comportamento de uma pilha.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "fila-queue--fifopeps",
			children: "Fila (Queue — FIFO/PEPS)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Estrutura que segue ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "FIFO" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "F" }),
			"irst ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "I" }),
			"n, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "F" }),
			"irst ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "O" }),
			"ut) — em português, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "PEPS" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "P" }),
			"rimeiro que ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "E" }),
			"ntra, ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "P" }),
			"rimeiro que ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "S" }),
			"ai)."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: ":::info Exemplo prático (Mensagens)\nMensageiros como o WhatsApp tendem a manter a ordem de chegada das mensagens; a primeira enviada é a primeira entregue/consumida, tipicamente modelada com filas.\n:::" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "deque-double-ended-queue",
			children: "Deque (Double-Ended Queue)"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Uma fila que permite inserções e remoções no início e no fim. Útil quando é preciso flexibilidade de ambos os lados." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "a-estrutura-propriamente-dita-de-um-banco-de-dados-relacional",
			children: "A estrutura (propriamente dita) de um banco de dados relacional"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "tabelas",
			children: "Tabelas"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Conjuntos tabulares (linhas e colunas) que armazenam dados de um mesmo tipo de entidade (ex.: Pessoas, Produtos)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "registros",
			children: "Registros"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Registros" }), " são as linhas da tabela. Cada linha segue o esquema definido pelos atributos."] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "atributos",
			children: "Atributos"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Colunas que definem o ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "tipo de informação" }),
			" armazenada em cada registro (ex.: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "nome" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "telefone" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "preco" }),
			"). Em planilhas, correspondem aos nomes de cabeçalhos."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "chaves-primárias-primary-keys",
			children: "Chaves Primárias (Primary Keys)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Um tipo especial de ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#atributos",
				children: "atributo"
			}),
			" usado para ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "identificar univocamente" }),
			" um registro. A chave pode ser:"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Simples" }),
				": composta por um único atributo (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "id" }),
				")."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Composta" }),
				": união de vários atributos (ex.: ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "ano" }),
				" + ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "matricula" }),
				")."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Em bancos relacionais, chaves primárias devem ser únicas para permitir referência confiável a cada registro." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "entidades",
			children: "Entidades"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"No modelo relacional, as tabelas representam ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "entidades" }),
			". Cada entidade possui ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#atributos",
				children: "atributos"
			}),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "#registros",
				children: "registros"
			}),
			" que a descrevem."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "relacionamentos",
			children: "Relacionamentos"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Ligam entidades por meio de ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "chaves primárias" }),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "chaves estrangeiras" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "1 : 1" }), " (um para um)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "1 : N" }), " (um para muitos)"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "N : N" }), " (muitos para muitos)"] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Permitem conectar dados e evitar redundância (normalização)." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "exemplo",
			children: "Exemplo"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Tabela 1 (Pessoas)" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Nome" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Telefone" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "João" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "1015" })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "Pedro" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "1016" })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Tabela 2 (Planos)" }) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "Telefone" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Preço" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "1015" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "80" })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "1016" }), (0, import_jsx_runtime.jsx)(_components.td, { children: "90" })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Relacionando pelo telefone (chave comum), obtemos:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Nome" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Telefone" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Preço" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: "João" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "1015" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "80" })
		] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.td, { children: "Pedro" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "1016" }),
			(0, import_jsx_runtime.jsx)(_components.td, { children: "90" })
		] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "der-diagrama-entidade-relacionamento",
			children: "D.E.R. (Diagrama Entidade-Relacionamento)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"O DER é uma forma de ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "visualizar" }),
			" um banco de dados: entidades (tabelas), atributos e relacionamentos. Nele, representamos cardinalidades como ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "1:1" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "1:N" }),
			" e ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "N:N" }),
			", e identificamos chaves primárias e estrangeiras que materializam os vínculos."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {})
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
export { toc as a, structuredData as i, db_concepts_exports as n, frontmatter as r, MDXContent as t };
