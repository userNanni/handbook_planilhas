# Estrutura Mista

> Esse nome não é canônico, apenas foi utilizado para simplificar uma das propriedades e modo de escrita da consulta

Como foi visto na estrutura básica e no capítulo de [Clausúlas Linguísticas](./baseStructure.md#estrutura-da-consulta), a consulta dentro da função query deve ser uma [string](../../DBConcepts.md#string), a qual será passada entre aspas duplas ("consulta"). Essa característica não impede que a consulta seja o resultado de uma função, desde que esse resulta siga as características que toda consulta deve ter, como em:

``` sheets
=QUERY(dados;IF(A1 = "valor de A1";"select A, B where C = 'opção 1'";"select A,B where C = 'Opção 2'"); [cabecalhos])
```

Ainda pode ser utilizado da mesma lógica para juntar duas ou mais [string](../../DBConcepts.md#string) para gerar uma consulta, como em:

``` sheets
=QUERY(dados;"select A, B " & " where C = 'Opção 2'"; [cabecalhos])
```

O método **mais útil** e que representa quase 100% dos usos desse tipo de estrutura é uma combinação das duas últimas formas, como em:

``` sheets
=QUERY('Banco de Dados'!A:EJ;"select A,B" & if(H2=true;",C,F";) & IF(H3=true;",D,E,EJ,W";) & IF(H4=true;",K,L";) & IF(H5=true;",G,H,I,M,N,O,P,Q,R";) & IF(H6;",X,Y,Z";) & IF(H7=true;",CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ,DA,DB,DC,DD,DE,DF,DG,DH,DI";) & IF(H8=true;",AR,AS,AT,AU,AV,AW,AX,AZ,BA";) & IF(D6="";;" where B = '"&D6&"'");1)
```

> Caso real utilizado do sistema de Comando e Controle de um Esquadrão do CCAER, para a consulta dinâmica de dados de componentes desse Esquadrão;
