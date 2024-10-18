# select

A primeira das [Cláusulas Linguísticas](https://developers.google.com/chart/interactive/docs/querylanguage?sjid=1226402367079700006-SA&hl=pt-br#language-clauses) e a mais importante delas, sem ela o resto literalmente não existe. Felizmente, não há mistérios nessa cláusula, basicamente após chamá-la exitem 3 possibilidade:

1. Selecionar todas os dados com `*`, Portanto "select \*"
2. Selecionar apenas as colunas desejadas, com a letra **MAIÚSCULA** da respectivas colunas, e cada letra separada por **vírgula** como em:

```sheets
=QUERY(dados;"select A, B")
```

3. Selecionar apenas as colunas desejadas, se a primeira coluna não for **A:A**, com **Col**+(Número da Coluna em relação a primeira dos dados; 1, 2, 3 ...), e cada letra separada por **vírgula** como em:

```sheets
=QUERY(dados;"select Col1, Col2")
```
