# Conceitos Relevantes de Banco de Dados para Planilhas

## Tipos de Dados em Bancos de Dados

Quando falamos dos tipos de dados que podem estar em um banco de dados há várias maneiras de classicá-los, um desses meios é quanto a sua forma e rigidez de estruturação. Nesse tipo de classificação pode assumir 3 tipos:

1. [Estruturados](./DBConcepts.md#estruturados)
2. [Não Estruturados](./DBConcepts.md#não-estruturados)
3. [Semi-Estruturados](./DBConcepts.md#semi-estruturados)

mas no que isso vai me ajudar nas planilhas. O Google Sheets força automaticamente as tipagens de cada uma das Colunas, ou atributos.

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