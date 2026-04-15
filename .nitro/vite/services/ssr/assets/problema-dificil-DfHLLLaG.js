import { o as __toESM, r as __exportAll } from "./chunk-D3zDcpJC.js";
import { t as require_jsx_runtime } from "./jsx-runtime-GYyARYiI.js";
//#region content/docs/casos-de-estudo/problema-dificil.mdx?collection=docs
var problema_dificil_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "O Problema mais difícil de Planilhas que já resolvi",
	"description": "Relato técnico de como normalizar registros coletivos em uma tabela única no Google Sheets usando SPLIT, TRANSPOSE, JOIN, MAP, LAMBDA e XLOOKUP."
};
var structuredData = {
	"contents": [
		{
			"heading": "o-problema-mais-difícil-de-planilhas-que-já-resolvi",
			"content": "> Considero esse o problema mais difícil que já resolvi, por ter enfrentado diversas barreiras e essa situação ter me exigido conhecer e pensar em novas soluções e métodos. Foi necessário aprender algumas fórmulas novas, fórmulas que até o segundo semestre de 2022 não existiam. Foram necessárias, aproximadamente, **8 horas** somente pensando na primeira parte do problema, teorizando e desenhando na mão para chegar a alguma solução."
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "A situação era a seguinte:"
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "Serão lançados registros de situações ocorridas com diversas pessoas. Esses registros serão lançados por meio do Google Forms e integrados diretamente em uma página do Google Planilhas."
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "> Até aqui temos uma situação muito simples; porém, isso complica."
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "Esses registros podem ser de 3 tipos:"
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "Individuais, os atributos são:\\\nAlteração: \\[\\\nCarimbo de data e hora: Float,\\\nObservador: String,\\\nCaracterística relativa ao Fato: String,\\\nFato Observado: String,\\\nObservado: String,\\\n]"
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "Coletivas, os atributos são:\\\nAlteração: \\[\\\nCarimbo de data e hora: Float,\\\nObservador: String,\\\nCaracterística relativa ao Fato: String,\\\nFato Observado: String,\\\nObservado: Array de String,\\\n]"
		},
		{
			"heading": "apresentação-do-nosso-ambiente",
			"content": "Grupo, os atributos são:\\\nAlteração: \\[\\\nCarimbo de data e hora: Float,\\\nObservador: String,\\\nCaracterística relativa ao Fato: String,\\\nFato Observado: String,\\\nObservado: Array de String,\\\n]"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Todas as situações ocorridas (individuais, coletivas e de grupo) devem estar em uma única tabela."
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Os atributos que a tabela deve possuir são:"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Carimbo de data e hora"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Observador"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Característica relativa ao fato"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Fato observado"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Observado (apenas uma string por registro)"
		},
		{
			"heading": "requisitos-funcionais-desse-componente",
			"content": "Em uma breve análise, é possível observar que os atributos da tabela final, que une os 3 tipos de situações, são os mesmos do lançamento de situações individuais. A única diferença entre a tabela final e as de grupo/coletivas é que, na tabela final, deve haver apenas um “observado” por linha (uma string por registro), e não um array."
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "> Como diria uma professora que tive: vamos utilizar o método do Jack — por partes."
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "**Qual a primeira tarefa que deve ser abordada nessa situação?**"
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "Minha principal tarefa é transformar um array de strings em diferentes registros, cada um com apenas uma string desse array. Essa é a primeira tarefa."
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "Essa simples tarefa traz um problema: se eu apenas dividir o array, os outros registros criados dessa divisão não carregarão os outros atributos comuns a todos os indivíduos listados naquele array. Isso nos leva à segunda pergunta/tarefa."
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "**Como fazer cada registro criado pela divisão do array carregar os atributos que eles têm em comum?**"
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "Agora que um registro do coletivo ou do grupo está dividido nos atributos corretos com todos requisitos, deve ser abordada a terceira pergunta/tarefa."
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "**Como replicar essas transformações para todos os registros daquela tabela, gerando uma nova tabela contínua?**"
		},
		{
			"heading": "subdivisão-da-resolução",
			"content": "**Por fim, como juntar todas as tabelas em uma única?**"
		},
		{
			"heading": "recapitulando-as-partes",
			"content": "Separar o array."
		},
		{
			"heading": "recapitulando-as-partes",
			"content": "Repetir os demais dados para “bater” com a separação."
		},
		{
			"heading": "recapitulando-as-partes",
			"content": "Fazer isso para toda a tabela."
		},
		{
			"heading": "recapitulando-as-partes",
			"content": "Juntar as 3 tabelas (agora com os dados na mesma forma)."
		},
		{
			"heading": "1-como-separar-arrays",
			"content": "Esse é o mais simples. Se o array está em formato CSV (valores separados por vírgula), posso separá-lo usando a vírgula como delimitador:"
		},
		{
			"heading": "1-como-separar-arrays",
			"content": "Porém, isso separa horizontalmente; então aplicamos TRANSPOSE para verticalizar:"
		},
		{
			"heading": "1-como-separar-arrays",
			"content": "Primeira tarefa check."
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "Se na célula `Observados1` há 4 pessoas, ao usar SPLIT teremos **4** células. Logo, o `Observador`, por exemplo, deve se repetir **4** vezes. Podemos usar `REPT`:"
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "Qual será `X`? Basta contar quantas células o `SPLIT` gerou:"
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "Substituindo:"
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "O resultado será algo como `observador1observador1observador1observador1`, sem separador para quebrarmos em múltiplas células. Então, concatenamos um separador após cada repetição (usei `;` para não confundir com vírgulas do “Fato observado”):"
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "E por fim, dividimos e verticalizamos:"
		},
		{
			"heading": "2-como-repetir-os-outros-dados",
			"content": "Segunda tarefa check."
		},
		{
			"heading": "3-como-fazer-isso-para-todos-os-registros",
			"content": "> Apertem os cintos que agora fica PUNK."
		},
		{
			"heading": "3-como-fazer-isso-para-todos-os-registros",
			"content": "A próxima etapa é replicar para cada registro. Dividimos em dois tipos de conversões:"
		},
		{
			"heading": "31-separação-simples-para-a-coluna-observados",
			"content": "Antes:"
		},
		{
			"heading": "31-separação-simples-para-a-coluna-observados",
			"content": "Agora, precisamos separar a coluna inteira. Uma estratégia é unir tudo antes e depois separar:"
		},
		{
			"heading": "32-separação-dos-outros-atributos-com-maplambda",
			"content": "Cada coluna pode ser tratada como um array, então podemos usar funções como MAP. O `MAP` aplica uma função a cada elemento/linha de um intervalo e retorna os resultados."
		},
		{
			"heading": "32-separação-dos-outros-atributos-com-maplambda",
			"content": "Antes (para um único registro):"
		},
		{
			"heading": "32-separação-dos-outros-atributos-com-maplambda",
			"content": "Aplicando `MAP` com `LAMBDA` (exemplo genérico e com nomes consistentes de parâmetros):"
		},
		{
			"heading": "32-separação-dos-outros-atributos-com-maplambda",
			"content": "> Observação: ajuste os separadores “,”/“;” conforme sua configuração regional no Sheets."
		},
		{
			"heading": "33-novos-problemas-encontrados",
			"content": "Na produção, apareceu o limite de \\~50.000 caracteres do `JOIN`. Foi preciso uma nova abordagem."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "O primeiro atributo (Carimbo de Data/Hora) é praticamente único por resposta do Forms. Logo, podemos inferir:"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "> Se um registro tem o Data/Hora X, ele se refere a um único lançamento."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Mudamos o paradigma:"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Repetimos apenas o Carimbo de Data/Hora."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Separamos de forma simples apenas os Observados."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Vinculamos os demais campos pela Data/Hora usando XLOOKUP."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "As fórmulas:"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Para repetir Data/Hora (com `MAP`/`REPT`/`SPLIT`):"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Para separar Observados (coluna inteira):"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "E nas demais colunas, um simples `XLOOKUP` pela chave Data/Hora:"
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Essa abordagem resolveu \\~95% do problema relativo ao limite de caracteres do `JOIN`."
		},
		{
			"heading": "3-nova-nova-abordagem-para-separar",
			"content": "Terceira tarefa check."
		},
		{
			"heading": "4-juntando-tudo",
			"content": "Use a junção de intervalos com `{}` para empilhar:"
		},
		{
			"heading": "4-juntando-tudo",
			"content": "Quarta tarefa check."
		},
		{
			"heading": "4-juntando-tudo",
			"content": "> Todos os requisitos foram cumpridos. Tarefa concluída."
		}
	],
	"headings": [
		{
			"id": "o-problema-mais-difícil-de-planilhas-que-já-resolvi",
			"content": "O Problema mais difícil de Planilhas que já resolvi"
		},
		{
			"id": "apresentação-do-nosso-ambiente",
			"content": "Apresentação do nosso ambiente"
		},
		{
			"id": "requisitos-funcionais-desse-componente",
			"content": "Requisitos funcionais desse componente"
		},
		{
			"id": "subdivisão-da-resolução",
			"content": "Subdivisão da resolução"
		},
		{
			"id": "recapitulando-as-partes",
			"content": "Recapitulando as partes"
		},
		{
			"id": "1-como-separar-arrays",
			"content": "1\\) Como separar arrays"
		},
		{
			"id": "2-como-repetir-os-outros-dados",
			"content": "2\\) Como repetir os outros dados"
		},
		{
			"id": "3-como-fazer-isso-para-todos-os-registros",
			"content": "3\\) Como fazer isso para todos os registros"
		},
		{
			"id": "31-separação-simples-para-a-coluna-observados",
			"content": "3.1) Separação simples (para a coluna Observados)"
		},
		{
			"id": "32-separação-dos-outros-atributos-com-maplambda",
			"content": "3.2) Separação dos outros atributos (com MAP/LAMBDA)"
		},
		{
			"id": "33-novos-problemas-encontrados",
			"content": "3.3) Novos problemas encontrados"
		},
		{
			"id": "3-nova-nova-abordagem-para-separar",
			"content": "3 (nova). Nova abordagem para separar"
		},
		{
			"id": "4-juntando-tudo",
			"content": "4\\) Juntando tudo"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#o-problema-mais-difícil-de-planilhas-que-já-resolvi",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "O Problema mais difícil de Planilhas que já resolvi" })
	},
	{
		depth: 2,
		url: "#apresentação-do-nosso-ambiente",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Apresentação do nosso ambiente" })
	},
	{
		depth: 3,
		url: "#requisitos-funcionais-desse-componente",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Requisitos funcionais desse componente" })
	},
	{
		depth: 3,
		url: "#subdivisão-da-resolução",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Subdivisão da resolução" })
	},
	{
		depth: 4,
		url: "#recapitulando-as-partes",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Recapitulando as partes" })
	},
	{
		depth: 3,
		url: "#1-como-separar-arrays",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "1) Como separar arrays" })
	},
	{
		depth: 3,
		url: "#2-como-repetir-os-outros-dados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "2) Como repetir os outros dados" })
	},
	{
		depth: 3,
		url: "#3-como-fazer-isso-para-todos-os-registros",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3) Como fazer isso para todos os registros" })
	},
	{
		depth: 4,
		url: "#31-separação-simples-para-a-coluna-observados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3.1) Separação simples (para a coluna Observados)" })
	},
	{
		depth: 4,
		url: "#32-separação-dos-outros-atributos-com-maplambda",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3.2) Separação dos outros atributos (com MAP/LAMBDA)" })
	},
	{
		depth: 4,
		url: "#33-novos-problemas-encontrados",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3.3) Novos problemas encontrados" })
	},
	{
		depth: 3,
		url: "#3-nova-nova-abordagem-para-separar",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "3 (nova). Nova abordagem para separar" })
	},
	{
		depth: 3,
		url: "#4-juntando-tudo",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "4) Juntando tudo" })
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
		h4: "h4",
		hr: "hr",
		input: "input",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "o-problema-mais-difícil-de-planilhas-que-já-resolvi",
			children: "O Problema mais difícil de Planilhas que já resolvi"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.p, { children: [
				"Considero esse o problema mais difícil que já resolvi, por ter enfrentado diversas barreiras e essa situação ter me exigido conhecer e pensar em novas soluções e métodos. Foi necessário aprender algumas fórmulas novas, fórmulas que até o segundo semestre de 2022 não existiam. Foram necessárias, aproximadamente, ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "8 horas" }),
				" somente pensando na primeira parte do problema, teorizando e desenhando na mão para chegar a alguma solução."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "apresentação-do-nosso-ambiente",
			children: "Apresentação do nosso ambiente"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A situação era a seguinte:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Serão lançados registros de situações ocorridas com diversas pessoas. Esses registros serão lançados por meio do Google Forms e integrados diretamente em uma página do Google Planilhas." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Até aqui temos uma situação muito simples; porém, isso complica." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Esses registros podem ser de 3 tipos:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Individuais, os atributos são:",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Alteração: [",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Carimbo de data e hora: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#float",
						children: "Float"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observador: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Característica relativa ao Fato: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Fato Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"]"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Coletivas, os atributos são:",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Alteração: [",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Carimbo de data e hora: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#float",
						children: "Float"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observador: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Característica relativa ao Fato: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Fato Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#array",
						children: "Array"
					}),
					" de ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"]"
				] }),
				"\n"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.p, { children: [
					"Grupo, os atributos são:",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Alteração: [",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Carimbo de data e hora: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#float",
						children: "Float"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observador: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Característica relativa ao Fato: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Fato Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"Observado: ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#array",
						children: "Array"
					}),
					" de ",
					(0, import_jsx_runtime.jsx)(_components.a, {
						href: "/conceitos-bd#string",
						children: "String"
					}),
					",",
					(0, import_jsx_runtime.jsx)(_components.br, {}),
					"\n",
					"]"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "requisitos-funcionais-desse-componente",
			children: "Requisitos funcionais desse componente"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Todas as situações ocorridas (individuais, coletivas e de grupo) devem estar em uma única tabela." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Os atributos que a tabela deve possuir são:",
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Carimbo de data e hora" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Observador" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Característica relativa ao fato" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Fato observado" }),
					"\n",
					(0, import_jsx_runtime.jsx)(_components.li, { children: "Observado (apenas uma string por registro)" }),
					"\n"
				] }),
				"\n"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Em uma breve análise, é possível observar que os atributos da tabela final, que une os 3 tipos de situações, são os mesmos do lançamento de situações individuais. A única diferença entre a tabela final e as de grupo/coletivas é que, na tabela final, deve haver apenas um “observado” por linha (uma string por registro), e não um array." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "subdivisão-da-resolução",
			children: "Subdivisão da resolução"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Como diria uma professora que tive: vamos utilizar o método do Jack — por partes." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Qual a primeira tarefa que deve ser abordada nessa situação?" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Minha principal tarefa é transformar um array de strings em diferentes registros, cada um com apenas uma string desse array. Essa é a primeira tarefa." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Essa simples tarefa traz um problema: se eu apenas dividir o array, os outros registros criados dessa divisão não carregarão os outros atributos comuns a todos os indivíduos listados naquele array. Isso nos leva à segunda pergunta/tarefa." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Como fazer cada registro criado pela divisão do array carregar os atributos que eles têm em comum?" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Agora que um registro do coletivo ou do grupo está dividido nos atributos corretos com todos requisitos, deve ser abordada a terceira pergunta/tarefa." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Como replicar essas transformações para todos os registros daquela tabela, gerando uma nova tabela contínua?" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: (0, import_jsx_runtime.jsx)(_components.strong, { children: "Por fim, como juntar todas as tabelas em uma única?" }) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "recapitulando-as-partes",
			children: "Recapitulando as partes"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Separar o array." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Repetir os demais dados para “bater” com a separação." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Fazer isso para toda a tabela." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Juntar as 3 tabelas (agora com os dados na mesma forma)." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "1-como-separar-arrays",
			children: "1) Como separar arrays"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Esse é o mais simples. Se o array está em formato CSV (valores separados por vírgula), posso separá-lo usando a vírgula como delimitador:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=SPLIT(Observados1; \",\")" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Porém, isso separa horizontalmente; então aplicamos TRANSPOSE para verticalizar:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(SPLIT(Observados1; \",\"))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, {
			className: "contains-task-list",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, {
					className: "task-list-item",
					children: [
						(0, import_jsx_runtime.jsx)(_components.input, {
							type: "checkbox",
							checked: true,
							disabled: true
						}),
						" ",
						"Primeira tarefa check."
					]
				}),
				"\n"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "2-como-repetir-os-outros-dados",
			children: "2) Como repetir os outros dados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Se na célula ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Observados1" }),
			" há 4 pessoas, ao usar ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://support.google.com/docs/answer/3094136",
				children: "SPLIT"
			}),
			" teremos ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "4" }),
			" células. Logo, o ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "Observador" }),
			", por exemplo, deve se repetir ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "4" }),
			" vezes. Podemos usar ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "REPT" }),
			":"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=REPT(observador1; X)" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Qual será ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "X" }),
			"? Basta contar quantas células o ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SPLIT" }),
			" gerou:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=COUNTA(SPLIT(Observados1; \",\"))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Substituindo:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=REPT(observador1; COUNTA(SPLIT(Observados1; \",\")))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"O resultado será algo como ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "observador1observador1observador1observador1" }),
			", sem separador para quebrarmos em múltiplas células. Então, concatenamos um separador após cada repetição (usei ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: ";" }),
			" para não confundir com vírgulas do “Fato observado”):"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=REPT(CONCATENATE(observador1; \";\"); COUNTA(SPLIT(Observados1; \",\")))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "E por fim, dividimos e verticalizamos:" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    REPT(CONCATENATE(observador1; \";\"); COUNTA(SPLIT(Observados1; \",\")));" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \";\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, {
			className: "contains-task-list",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, {
					className: "task-list-item",
					children: [
						(0, import_jsx_runtime.jsx)(_components.input, {
							type: "checkbox",
							checked: true,
							disabled: true
						}),
						" ",
						"Segunda tarefa check."
					]
				}),
				"\n"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-como-fazer-isso-para-todos-os-registros",
			children: "3) Como fazer isso para todos os registros"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Apertem os cintos que agora fica PUNK." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A próxima etapa é replicar para cada registro. Dividimos em dois tipos de conversões:" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "31-separação-simples-para-a-coluna-observados",
			children: "3.1) Separação simples (para a coluna Observados)"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Antes:" }),
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(SPLIT(Observados1; \",\"))" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Agora, precisamos separar a coluna inteira. Uma estratégia é unir tudo antes e depois separar:" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    JOIN(\",\"; Observados:Observados);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \",\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    FALSE;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "32-separação-dos-outros-atributos-com-maplambda",
			children: "3.2) Separação dos outros atributos (com MAP/LAMBDA)"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Cada coluna pode ser tratada como um array, então podemos usar funções como ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/funcoes/map",
				children: "MAP"
			}),
			". O ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" aplica uma função a cada elemento/linha de um intervalo e retorna os resultados."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Antes (para um único registro):" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    REPT(CONCATENATE(observador1; \";\"); COUNTA(SPLIT(Observados1; \",\")));" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \";\"" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Aplicando ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			" com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "LAMBDA" }),
			" (exemplo genérico e com nomes consistentes de parâmetros):"
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    JOIN(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      \";\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      MAP(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        Observador:Observador;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        Observado:Observado;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        LAMBDA(rept_on; split_on;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          REPT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            CONCATENATE(rept_on; \";\");" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            COUNTA(SPLIT(split_on; \", \"; FALSE; TRUE))" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    );" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \";\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Observação: ajuste os separadores “,”/“;” conforme sua configuração regional no Sheets." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h4, {
			id: "33-novos-problemas-encontrados",
			children: "3.3) Novos problemas encontrados"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Na produção, apareceu o limite de ~50.000 caracteres do ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "JOIN" }),
			". Foi preciso uma nova abordagem."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "3-nova-nova-abordagem-para-separar",
			children: "3 (nova). Nova abordagem para separar"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "O primeiro atributo (Carimbo de Data/Hora) é praticamente único por resposta do Forms. Logo, podemos inferir:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Se um registro tem o Data/Hora X, ele se refere a um único lançamento." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Mudamos o paradigma:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Repetimos apenas o Carimbo de Data/Hora." }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Separamos de forma simples apenas os Observados." }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Vinculamos os demais campos pela Data/Hora usando ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/funcoes/xlookup",
					children: "XLOOKUP"
				}),
				"."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "As fórmulas:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Para repetir Data/Hora (com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "MAP" }),
			"/",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "REPT" }),
			"/",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "SPLIT" }),
			"):"
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    JOIN(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      \";\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      MAP(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        Data_Hora:Data_Hora;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        Observado:Observado;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        LAMBDA(rept_on; split_on;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          REPT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            CONCATENATE(rept_on; \";\");" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "            COUNTA(SPLIT(split_on; \", \"; FALSE; TRUE))" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "          )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "        )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "      )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    );" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \";\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Para separar Observados (coluna inteira):" }),
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
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=TRANSPOSE(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  SPLIT(" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    JOIN(\",\"; Observados:Observados);" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    \",\";" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    FALSE;" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "    TRUE" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: "  )" })
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, { children: ")" })
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"E nas demais colunas, um simples ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "XLOOKUP" }),
			" pela chave Data/Hora:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "=XLOOKUP($Carimbo_Data_Hora1; Coletiva!$A:$A; Coletiva!B:B; )" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Essa abordagem resolveu ~95% do problema relativo ao limite de caracteres do ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "JOIN" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, {
			className: "contains-task-list",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, {
					className: "task-list-item",
					children: [
						(0, import_jsx_runtime.jsx)(_components.input, {
							type: "checkbox",
							checked: true,
							disabled: true
						}),
						" ",
						"Terceira tarefa check."
					]
				}),
				"\n"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.hr, {}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "4-juntando-tudo",
			children: "4) Juntando tudo"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use a junção de intervalos com ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "{}" }),
			" para empilhar:"
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
				children: (0, import_jsx_runtime.jsx)(_components.span, { children: "={Intervalo1:Intervalo1; Intervalo2:Intervalo2; Intervalo3:Intervalo3}" })
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, {
			className: "contains-task-list",
			children: [
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.li, {
					className: "task-list-item",
					children: [
						(0, import_jsx_runtime.jsx)(_components.input, {
							type: "checkbox",
							checked: true,
							disabled: true
						}),
						" ",
						"Quarta tarefa check."
					]
				}),
				"\n"
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.blockquote, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.p, { children: "Todos os requisitos foram cumpridos. Tarefa concluída." }),
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
export { toc as a, structuredData as i, frontmatter as n, problema_dificil_exports as r, MDXContent as t };
