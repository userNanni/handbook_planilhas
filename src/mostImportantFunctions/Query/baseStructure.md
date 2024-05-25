# Estrutura Básica

> Essa parte devia ser óbvia na documentação porém não é. Então, _Here we go again_.

Quando falamos de estrutura da Função query temos que passar por duas partes:

1. [Estrutura da função em si](./baseStructure.md#estrutura-da-função)
2. [Estrutura da consulta interna](./baseStructure.md#estrutura-da-consulta)

## Estrutura da Função

Aqui não há segredo, e é tudo tão óbvio quanto descrito na [Documentação](https://support.google.com/docs/answer/3093343?hl=pt-BR)

### Sintaxe

A sintaxe aqui é simples basicamente temos esses 3 parâmetros:

```
=QUERY(dados; consulta; [cabecalhos])
```

1. dados (obrigatório):  
   Aqui estará o Banco de dados que será usado pela Função
2. consulta (meio que obrigatório):  
   A parte mais difícil obviamente de aprender, aqui que a mágica ocorre.
   > OK, mas porque meio que obrigatório, se nada for escrito na consulta o Google Sheets irá considerar o mesmo que select \*, portanto retornará todos os dados
3. cabeçalho (como podem ver pelos [] totalmente facultativo):

## Estrutura da Consulta
