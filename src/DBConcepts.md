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

não requer estruturas bem definidas, ou padronizadas e podem ser compostos por elementos diversos, comuns ao cotidiano das pessoas.

### Semi-Estruturados

há uma combinação de características de dados estruturados e dados não estruturados. É como se falássemos que o dado semiestruturado tem menos controle do que o estruturado e mais rigidez (menos confusão) do que os não estruturados.
