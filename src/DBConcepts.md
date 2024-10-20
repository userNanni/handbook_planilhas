# Conceitos Relevantes de Banco de Dados para Planilhas

## Tipos de Dados em Bancos de Dados

Quando falamos dos tipos de dados que podem estar em um banco de dados, existem várias maneiras de classificá-los. Um desses meios é quanto a sua forma e rigidez de estruturação. Essa classificação consiste em 3 tipos:

1. [Estruturados](./DBConcepts.md#estruturados)
2. [Não Estruturados](./DBConcepts.md#não-estruturados)
3. [Semi-Estruturados](./DBConcepts.md#semi-estruturados)

<!-- **Mas no que isso vai me ajudar nas planilhas?**
O Google Sheets força automaticamente os tipos de cada uma das colunas, ou atributos. -->

### Estruturados

Dados Estruturados são aqueles que tem uma estrutura que é geralmente pré-definida e continua rígida em toda a aplicação. Isso permite segurança e certeza em saber que tipo de dados são esperados em cada um dos atributos, permitindo que sejam aplicados métodos de agregação específicos como Soma ou outras formas que são sensíveis a certas tipagens.

#### SQL

Um dos maiores pontos relacionados ao uso de Dados estruturados é a Linguagem de Busca Estruturada, ou Structure Query Language (SQL), que é uma dos tipos de Linguagem mais comuns e úteis para fazer consultas e buscas em bancos de dados. No caso do Google Sheets, ela inspira a [linguagem de consultas da API de visualização do Google](https://developers.google.com/chart/interactive/docs/querylanguage?hl=pt-br).

> O SQL como foi referido é um tipo de linguagem, basicamente, não uma linguagem única em si, mas por quê ? Ao contrátrio do JavaScript por exemplo, o SQL tem várias sintaxes diferentes dependendo de qual aplicação que está usando, portanto o código que escrevo na Oracle é ligeiramente distinto do encontrado no Access ou no MySQL.

### Não Estruturados

Dados Não Estruturados são aqueles que , ao contrário dos [Estruturados](./DBConcepts.md#estruturados) não possuem uma estrutura rígida pré-definida. Assim podem compor esses bancos de dados diferentes elementos, como fotos, vídeos e imagens. Estima-se que 80% dos dados gerados atualmente na internet encontram-se nessa forma.

### Semi-Estruturados

Os dados semi-estruturados residem em um meio termo entre os dados estruturados e não estruturados, apresentando características de ambos. Imagine-os como dados organizados, mas sem a rigidez de um banco de dados relacional.

## Tipagem dos Dados

### String

É uma cadeia de caracteres. É utilizado para representar de letras a textos.

### Boolean

É um valor que somente pode assumir 0 ou 1, verdadeiro ou falso.

> Também pode ser chamado de lógico e tem seu nome atribuído em homenagem a George Boole

### Int

É um número inteiro.

### Float

É um ponto Flutuante. Basicamente um número não inteiro

## Estruturas de Dados

### Array

Uma das estruturas mais versáteis de dados, consistindo basicamente em uma **sequência de elementos** que podem ser acessados por seu índice.

> Também podem ser chamadas pelo nome em português **arranjo**, e divididas em alguns tipos básicos como o:
>
> 1. Vetor: um array unidimensional; e
> 2. Matriz: um array bidimensional, basicamente um conjunto de vetores.

```JavaScript
const numerosPrimos = [2,3,5,7,11,13,17]
```

#### Métodos de Array

### Pilha

Assim como a array é uma estrutura de dados que pose ser simplificada como uma **sequência de elementos**, porém dessa vez ela obedece uma regra de leitura e escrita, a também famosa na logística, `LIFO` (**L**ast **I**n, **F**irst **O**ut) ou `UEPS` (**U**ltimo que **E**ntra, **P**rimeiro que **S**ai).

> Também podem ser chamadas pelo nome em inglês **stack**, funcionam exatamente igual uma filha de livros ou roupas na vida real, não é possível pegar o ultimo livro ou roupa sem tirar os que estão por cima.

### Fila

### Deque

## A estrutura (propriamente dita) de um banco de dados relacional

### Tabelas

### Registros

### Atributos

#### Chaves

### Entidades

### Relacionamentos

### D.E.R.
