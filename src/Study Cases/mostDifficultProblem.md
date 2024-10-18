# O Problema mais difícil de Planilhas que já resolvi

> Digo que esse foi o problema mais difícil, por ser um dos momentos que mais enfrentei barreiras para resolver, tive que aprender algumas formulas novas que até o segundo semestre de 2022 não existiam e fiquei aproximadamente 8 horas pensando na primeira parte do problema, teorizando e desenhando na mão toda solução.

## Vamos setar nosso ambiente

A situação é a seguinte:

Serão lançados registros de situações ocorridas com diversas pessoas. Esses registros serão lançados por meio do Google Forms e integrados diretamente em uma página do Google Planilhas.

> Até aqui temos uma situação muito simples, calma que complica.

Esses registros podem ser de 3 tipos:

1. Individuais, os atributos dele são:  
    Alteração: [  
    Carimbo de data e hora: [Float](../DBConcepts.md#float),  
    Observador: [String](../DBConcepts.md#string),  
    Característica relativa ao Fato: [String](../DBConcepts.md#string),  
    Fato Observado: [String](../DBConcepts.md#string),  
    Observado: [String](../DBConcepts.md#string),
   ]

2. Coletivas, os atributos dele são:  
    Alteração: [  
    Carimbo de data e hora: [Float](../DBConcepts.md#float),  
    Observador: [String](../DBConcepts.md#string),  
    Característica relativa ao Fato: [String](../DBConcepts.md#string),  
    Fato Observado: [String](../DBConcepts.md#string),  
    Observado: [Array](../DBConcepts.md#array) de [String](../DBConcepts.md#string),  
   ]

3. Grupo, os atributos dele são:  
    Alteração: [  
    Carimbo de data e hora: [Float](../DBConcepts.md#float),  
    Observador: [String](../DBConcepts.md#string),  
    Característica relativa ao Fato: [String](../DBConcepts.md#string),  
    Fato Observado: [String](../DBConcepts.md#string),  
    Observado: [Array](../DBConcepts.md#array) de [String](../DBConcepts.md#string),  
   ]
