# where

A segunda das [Cláusulas Linguísticas](https://developers.google.com/chart/interactive/docs/querylanguage?sjid=1226402367079700006-SA&hl=pt-br#language-clauses) e a mais complexa delas, basicamente estamos falando de um filtro. Nesse caso, uma das maneiras de dividir como essa função funciona é sobre o que está sendo filtrado, e sobre os operadores:

## Operadores de Comparação Simples

Existem 7 operadores simples:

1. `<=`
2. `<`
3. `>`
4. `>=`
5. `=`
6. `!=`
7. `<>`

> `!=` é equivalente a `<>`.

### Filtrando nulos

Quando falamos da filtragem de valores nulos, deixamos de usar a igualdade em si, como em:

```sheets
=QUERY(Dados;"select * where A = ''")
```

> O exemplo de cima seria uma comparação com um string vazio

E passamos a utilizar os operadores `is null` ou `is not null`

```sheets
=QUERY(Dados;"select * where A is not null")
```

## Operadores de Comparação Complexos

Exitem 5 operadores complexos:

1. `contains`
2. `starts with`
3. `ends with`
4. `matches`
5. `like`

> **Por que utilizar operadores complexos ?**  
> Como o próprio nome leva a crer esses operadores vem com grandes responsabilidades, porém, junto com elas, vem seus grandes poderes. Apesar de exigirem um pouco mais de conhecimento do problema e da linguagem, esses operadores podem permitir a filtragem correta de dados que não estão padronizados e normalizados como deveriam.

## Filtrando números estáticos

Basicamente o tipo de filtro mais básico

```sheets
=QUERY(Dados;"select * where A = 100")
```

## Filtrando textos estáticos

**Por que um tópico novo para textos estáticos ?**  
Quando tratamos de [strings](../../../DBConcepts.md#string) dentro da busca da função QUERY, por ser uma busca de dados estruturados, em que há diferença entre os tipos, necessitamos especificar se o que irá ser comparado é um texto ou se se enquadra em outros tipos.

Portanto, na comparação com [strings](../../../DBConcepts.md#string) colocamos o texto entre `'`, famosas aspas simples.

```sheets
=QUERY(Dados;"select * where A = 'hello world'")
```

## Filtrando conteúdos dinâmicos ou referenciados

## Filtrando datas

## Filtrando intervalos

## Juntando Filtros com Operadores Lógicos

```sheets
=QUERY(dados;"select A, B")
```
