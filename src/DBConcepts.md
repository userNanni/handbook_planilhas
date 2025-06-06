# Conceitos Relevantes de Banco de Dados para Planilhas

## Tipos de Dados em Bancos de Dados

Quando falamos dos **tipos de dados** que podem estar em um **banco de dados**, há várias maneiras de **classificá-los**. Um desses meios é quanto a sua forma e rigidez de estruturação. Essa classificação consiste em 3 tipos:

1. [Estruturados](./DBConcepts.md#estruturados)
2. [Não Estruturados](./DBConcepts.md#não-estruturados)
3. [Semi-Estruturados](./DBConcepts.md#semi-estruturados)

> Mas no que isso vai me auxiliar nas planilhas?
O Google Sheets força automaticamente os tipos de cada uma das colunas, ou Atributos.
> 

### Estruturados

Dados **Estruturados** são aqueles que possuem uma **estrutura** geralmente **pré-definida** e **rígida** em toda a aplicação. Isso permite **segurança** e **certeza** em saber que tipo de dados são esperados em cada um dos [**Atributos**](./DBConcepts.md#atributos), permitindo a aplicação de métodos de agregação como soma e outros que dependem do tipo de dado.

### SQL

Um dos maiores pontos relacionados ao uso de Dados estruturados é a **Linguagem de Busca Estruturada**, ou **Structured Query Language** (**SQL**), uma das linguagens mais comuns e úteis para fazer consultas e buscas em bancos de dados. No caso do Google Sheets, ela inspira a [linguagem de consultas da API de visualização do Google](https://developers.google.com/chart/interactive/docs/querylanguage?hl=pt-br).

> O SQL é uma das linguagens mais comuns para consulta em bancos de dados relacionais. Embora o SQL seja padronizado (por exemplo, SQL ANSI), cada sistema gerenciador (como MySQL, PostgreSQL, Oracle) pode adicionar dialetos próprios, com funções ou sintaxes específicas que não são necessariamente compatíveis entre os sistemas.
> 

### Não Estruturados

Dados **Não Estruturados** são aqueles que, ao contrário dos [Estruturados](./DBConcepts.md#estruturados), **não** possuem uma **estrutura rígida pré-definida**. Assim podem compor esses bancos de dados diferentes elementos, como fotos, vídeos, áudios e documentos. Estima-se que **80%** dos **dados** gerados atualmente na **internet** encontram-se nessa forma.

### Semi-Estruturados

Dados **semi-estruturados** residem em um meio-termo entre os dados estruturados e não estruturados, apresentando **características** de **ambos**. Imagine-os como dados organizados, mas sem a **rigidez** de um banco de dados relacional.

## Tipagem dos Dados

### String

É uma **cadeia de caracteres**. É utilizado para representar de **letras** a **textos**.

### Boolean

É um valor que somente pode assumir **0** ou **1**, **verdadeiro** ou **falso**, representando, assim, estados lógicos ou condições

> Também pode ser chamado de lógico e tem seu nome atribuído em homenagem a George Boole
> 

### Int

É um **número inteiro**.

### Float

Um ponto flutuante é um número que pode conter parte decimal, ao contrário do inteiro (Int).

## Estruturas de Dados

### Array

Uma das estruturas mais versáteis de dados, consistindo basicamente em uma **sequência de elementos** que podem ser acessados por seu índice.

> Também podem ser chamadas pelo nome em português arranjo, e divididas em alguns tipos básicos como o:
> 
> 1. Vetor: um array unidimensional; e
> 2. Matriz: um array bidimensional, basicamente um conjunto de vetores.

```jsx
const numerosPrimos = [2,3,5,7,11,13,17]
```

### Métodos de Array

### Pilha

Assim como a array é uma estrutura de dados que pode ser simplificada como uma **sequência de elementos**, porém dessa vez ela obedece uma regra de leitura e escrita, a também famosa na logística, `LIFO` (**L**ast **I**n, **F**irst **O**ut) ou `UEPS` (**Ú**ltimo que **E**ntra, **P**rimeiro que **S**ai).

> Também podem ser chamadas pelo nome em inglês stack, funcionam exatamente igual uma pilha de livros ou roupas na realidade, não é possível pegar o último livro ou roupa sem tirar os que estão por cima.
> 

### Exemplo: `Control+Z`:

Quando voltamos alguma ação no computador, a primeira ação que será desfeita, foi a última que fizemos e assim por diante, até que essa pilha acabe.

### Fila

Assim como a array é uma estrutura de dados que pode ser simplificada como uma **sequência de elementos**, porém dessa vez ela obedece uma regra de leitura e escrita, a também famosa na logística, `FIFO` (**F**irst **I**n, **F**irst **O**ut) ou `PEPS` (**P**rimeiro que **E**ntra, **P**rimeiro que **S**ai).

> Também podem ser chamadas pelo nome em inglês queue, funcionam exatamente igual uma fila de pessoas na realidade.
> 

### Exemplo: Consumo de dados do ***WhatsApp***:

Quando estamos usando o WhatsApp, apesar de enviarmos e recebermos diversas mensagens, elas chegam na ordem, um dos métodos de fazer isso em mensageiros é aplicando filas. A primeira mensagem enviada é a primeira que será recebida, mesmo que acumulem muitas mensagens não recebidas por um tempo.

### Deque (Double Ended Queue)

É uma fila que permite inserções e remoções tanto no início quanto no fim da estrutura. É útil em algoritmos que precisam de maior flexibilidade no controle da ordem dos elementos.

## A estrutura (propriamente dita) de um banco de dados relacional

### Tabelas

### Registros

**Registros** são as linhas da tabela, elas possuem os dados que seguem um esquema definido com base nos atributos da tabela.

### Atributos

### Chaves primárias (Primary keys)

As chaves primárias são um dos tipos de [Atributos](./DBConcepts.md#atributos), elas são utilizadas para identificar um certo registro. Essas chaves primárias, podem ser simples (compostas de somente um atributo), ou compostas (resultado da união de vários [Atributos](./DBConcepts.md#atributos)).

> Em bancos de dados relacionais as chaves primárias precisam ser únicas, a fim de possibilitar a identificação dos registros, os quais elas identificam.
> 

### Entidades

Em um banco de dados, as tabelas são chamadas **Entidades**, sendo então compostas pelos mesmos [Atributos](./DBConcepts.md#atributos) e [Registros](./DBConcepts.md#registros) tal como em uma tabela

### Relacionamentos

Em um banco de dados relacional estruturado, os **relacionamentos** são **ligações** entre tabelas baseadas em **chaves** primárias e **chaves** estrangeiras. Eles permitem conectar os dados organizadamente e evitar redundâncias. Ou seja, mostrar o que é um identificador comum em duas tabelas.

### Por Exemplo:

**Tabela 1**

| Nome | telefone |
| --- | --- |
| João | 1015 |
| Pedro | 1016 |

**Tabela 2**

| Telefone | Preço |
| --- | --- |
| 1015 | 80 |
| 1016 | 90 |

Nesse caso, podemos relacionar o telefone das duas tabelas e inferir que:

| Nome | telefone | Preço |
| --- | --- | --- |
| João | 1015 | 80 |
| Pedro | 1016 | 90 |

### D.E.R.

O diagrama entidade relacionamento (DER) é um dos meios possíveis para visualizar um banco de dados. Essa visualização possui as tabelas e seus atributos, bem como a relação que esses atributos possuem entre si.
Então no DER estarão sendo demonstradas as relações de `1 para 1`, `1 para muitos` ou `muitos para muitos` entre as chaves primárias e estrangeiras.
