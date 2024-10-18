# Estrutura Básica

> Essa parte devia ser óbvia na documentação porém não é. Então, _Here we go again_.

Quando falamos de estrutura da Função query temos que passar por duas partes:

1. [Estrutura da função em si](./baseStructure.md#estrutura-da-função)
2. [Estrutura da consulta interna](./baseStructure.md#estrutura-da-consulta)

## Estrutura da Função

É tudo tão óbvio quanto descrito na [Documentação](https://support.google.com/docs/answer/3093343?hl=pt-BR)

### Sintaxe

A sintaxe é simples, possuindo 3 parâmetros:

```sheets
=QUERY(dados; consulta; [cabeçalhos])
```

1. dados (obrigatório):  
   Aqui estará o Banco de dados que será usado pela Função. Basicamente, selecione todo o intervalo que tiver dados
   > Como o referencial são as letras ou a posição das colunas no Banco de dados, recomenda-se adicionar novas colunas ao final da sua tabela, depois na consulta podemos ordenar da maneira como quisermos.
2. consulta (meio que obrigatório):  
   A parte mais difícil obviamente de aprender, aqui que a mágica ocorre. Por isso, foi dedicado todo [Estrutura da Consulta](./baseStructure.md#estrutura-da-consulta).
   > **OK, mas porque (meio que obrigatório)?**
   >
   > - Se nada for escrito na consulta o Google Sheets irá considerar o mesmo que `select *`, portanto retornará todos os dados.
   >
   > Além disso, a consulta deve estar entre aspas, porém pode ser resultado de uma concatenação de formulas comuns do Sheets e consultas. Isso é melhor abordado em [Estruturas Mistas](./mixedStructure.md).
3. cabeçalho (como podem ver pelos [] totalmente facultativo):  
   Aqui basicamente vai ser passado para função quantas linhas serão ignoradas como cabeçalho, realmente simples, porém é recomendável testar algumas vezes para compreender como é contado isso.

## Estrutura da Consulta

A função query é composta por diversas [Cláusulas Linguísticas](https://developers.google.com/chart/interactive/docs/querylanguage?sjid=1226402367079700006-SA&hl=pt-br#language-clauses) sendo cada uma responsável por uma ação diferente, como bem dito na documentação, elas **somente** podem aparecer **uma vez** e **devem** estar na seguinte **ordem**:
| Cláusula | Uso |
| ------ | ------------------------------ |
| [select](./clauses/select.md) | Seleciona quais colunas serão retornadas e em que ordem. Se omitido, todas as colunas da tabela serão retornadas na ordem padrão. |
| [where](./clauses/where.md) | Retorna apenas as linhas que correspondem a uma condição. Se omitido, todas as linhas são retornadas. |
| group | by Agrega valores em linhas. |
| pivot | Transforma valores distintos em colunas em novas colunas. |
| order | by Classifica linhas por valores em colunas. |
| limit | Limita o número de linhas retornadas. |
| offset | Ignora um determinado número de primeiras linhas. |
| label | Define os rótulos das colunas. |
| format | Formata os valores em determinadas colunas usando determinados padrões de formatação. |
| options | Define opções adicionais. |
