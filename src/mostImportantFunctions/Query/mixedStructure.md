# Estrutura Mista

> Esse nome não é canônico, apenas foi utilizado para simplificar uma das propriedades e modo de escrita da consulta

Como foi visto na estrutura básica e no capítulo de [Clausúlas Linguísticas](./baseStructure.md#estrutura-da-consulta), a consulta dentro da função query deve ser uma [string](../../DBConcepts.md#string), a qual será passada entre aspas duplas ("consulta"). Essa característica não impede que a consulta seja o resultado de uma função, desde que esse resulta siga as características que toda consulta deve ter, como em:

```
=QUERY(dados;IF(A1 = "valor de A1";"select A, B where C = 'opção 1'";"select A,B where C = 'Opção 2'"); [cabecalhos])
```

Ainda pode ser utilizado da mesma lógica para juntar duas ou mais [string](../../DBConcepts.md#string) para gerar uma consulta, como em:

```
=QUERY(dados;"select A, B "&&" where C = 'Opção 2'"; [cabecalhos])
```
