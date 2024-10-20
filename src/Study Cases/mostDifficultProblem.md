# O Problema mais difícil de Planilhas que já resolvi

> Considero esse o problema mais difícil que já resolvi, por ter enfrentado diversas barreiras e essa situação ter me exigido conhecer e pensar em novas soluções e métodos. Foi necessário aprender algumas formulas novas, formulas que até o segundo semestre de 2022 não existiam. Foram necessárias, aproximadamente, **8 horas** somente pensando na primeira parte do problema, teorizando e desenhando na mão para chegar em alguma solução.

## Apresentação do nosso ambiente

A situação era a seguinte:

Serão lançados registros de situações ocorridas com diversas pessoas. Esses registros serão lançados por meio do Google Forms e integrados diretamente em uma página do Google Planilhas.

> Até aqui temos uma situação muito simples, porém isso complica.

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

### Requisitos funcionais desse componente

1. Todas as situações corridas (individuais, coletivas e de grupo) devem estar em uma única tabela;
2. Os atributos que a tabela deveria possuir eram:
   1. Carimbo de data e hora
   2. Observador
   3. Característica relativa ao fato
   4. Fato observado
   5. Observado (apenas uma string por registro)

Em uma breve análise, é possível observar que os atributos da tabela final, a qual une os 3 tipos de situações, são os mesmos do lançamento de situações individuais. A única diferença entre a tabela final e as de grupo e coletivas, era que na tabela final deveria haver apenas um observado por linha _(uma string por registro)_ e não uma array.

### Subdivisão da resolução

> Como diria uma professora que tive, vamos utilizar o método do Jack, por partes

**Qual a primeira tarefa que deve ser abordada nessa situação ?**

Como minha principal tarefa é transformar uma array de strings em diferentes registros cada um com apenas uma string dessa array, essa então era a primeira tarefa.

Essa simples tarefa traz consigo um problema, se apenas dividir a array, os outros registros que criei dessa divisão, não irão carregar os outros atributos que são comuns a todos indivíduos listados naquela array. Esse problema nos leva a segunda pergunta/tarefa.

**Como fazer cada registro criado pela divisão da array carregar os atributos que eles tem em comum ?**

Agora que **um** registro do coletivo ou do grupo, estava dividido nos atributos corretos com todos requisitos. Deveria ser abordado a terceira pergunta/tarefa.

**Como replicar essas transformações para todos os registros daquela tabela, gerando uma nova tabela contínua ?**

**Por fim, como juntar todas tabelas em uma ?**

#### Recapitulando as partes

1. Separar a Array
2. Repetir os outros dados para bater com a separação
3. fazer isso para toda tabela
4. juntar as 3 tabelas (que agora todos dados estão na mesma forma)

### 1. Como separar arrays

Esse é dos problemas o mais simples. Se a array está disposta como um CSV(comma separated value, valor separado por vírgulas) eu posso simplesmente separa-lo usando como delimitador as vírgulas que já separam o valor. o que resulta na simples fórmula:

```Sheets
=SPLIT(Observados1; ",")
```

Porém isso separa Horizontalmente, então precisamos aplicar o TRANSPOSE, para transpor os dados da matriz resultado.

```Sheets
=TRANSPOSE(SPLIT(Observados1; ","))
```

1. [x] **Primeira Tarefa check**

### 2. Como repetir os outros dados

Se na célula observados1 eu tenho 4 pessoas, quando for usado a função [SPLIT](https://support.google.com/docs/answer/3094136) nela isso gerará **4** células. Portanto, é necessário que o observador, por exemplo, se repita **4** vezes também. então posso usar a fórmula REPT:

```Sheets
=REPT(observador; X)
```

**mas qual será o número de repetições (`X`)?**  
Se quando é utilizado o [SPLIT](https://support.google.com/docs/answer/3094136) são gerados **4** e é necessário repetir as mesmas **4** vezes, pode-se contar quantas células o [SPLIT](https://support.google.com/docs/answer/3094136) gera e atribuir esse valor a `X`.

X = COUNTA(SPLIT(Observados1;","))

Agora, substituo isso na fórmula anterior:

```Sheets
=REPT(observador1; COUNTA(SPLIT(Observados1;",")))
```

Porém, o resultado que se obtém dessa função será apenas algo como:  
`observador1observador1observador1observador1`

que não possui nenhum caractere que possa ser utilizado para separar em várias células. Então foi introduzido esse caractere após o observador. Passando, assim, de:

observador1 ► CONCATENATE(observador1; ";")

> Foi utilizado `;` agora para não confundir com possíveis virgulas no campo fato observado.

Substituindo na fórmula, obtém-se:

```Sheets
=REPT(CONCATENATE(observador1; ";"); COUNTA(SPLIT(Observados1;",")))
```

Então para finalizar essa etapa basta apenas dividir, e verticalizar, o resultado da última fórmula em vários registros, então aplicando a mesma lógica do atributo observados, obtém-se:

```Sheets
=TRANSPOSE(SPLIT(REPT(CONCATENATE(observador1; ";"); COUNTA(SPLIT(Observados1;","))); ";"))
```

2. [x] **Segunda Tarefa check**

### 3. Como fazer isso para todos os registros

> Apertem os cintos que agora fica **_PUNK_**

A próxima etapa e replicar esse método para cada um dos registros.  
Então dividimos nos dois tipos de conversões que estão sendo feitos:

#### 3.1. separação simples

O que se possuía antes era isso:

```Sheets
=TRANSPOSE(SPLIT(Observados1; ","))
```

porém o que é necessário agora é que seja separado todos os dados da coluna, portanto a solução adotado foi juntar todos antes e depois separá-los. Utilizando JOIN para unir todos esses dados:

```Sheets
=TRANSPOSE(SPLIT(JOIN(",";Observados:Observados); ","; FALSE;TRUE))
```

#### 3.2. separação dos outros atributos

Dado que cada coluna pode ser entendida em si como um array, pode-se utilizar [métodos](../DBConcepts.md#array), como o [MAP](../mostImportantFunctions/MAP.md). O [MAP](../mostImportantFunctions/MAP.md) irá executar uma determinada função em todos os registros de um intervalo e retornar o valor naquela Célula.

O que se possuía antes era isso:

```Sheets
=TRANSPOSE(SPLIT(REPT(CONCATENATE(observador1; ";"); COUNTA(SPLIT(Observados1;","))); ";"))
```

agora aplicando o [MAP](../mostImportantFunctions/MAP.md):

```Sheets
TRANSPOSE(SPLIT(JOIN(";";map(Observador:Observador ;Observado:Observado ;LAMBDA(rept_intervalo;split_intervalo;REPT(CONCATENATE(rept_on;";");COUNTA(SPLIT(split_on;", ";FALSE;TRUE))))));";";true;true))
```

#### 3.3 novos problemas encontrados na produção

Durante as primeiras semanas de uso foi visto que a fórmula JOIN tem o limite de 50000 caracteres então foi pensada uma nova abordagem

### 3.(new) Nova Abordagem para separar

Ao invés de separar cada atributo individualmente com a formula que foi passada nos tópicos 3.1 e 3.2, foi percebido algo. O primeiro atributo (Carimbo de Data/Hora) ele é praticamente impossível de se repetir nas respostas do forms, portanto consigo inferir que:

> Se um registro tem o Data e Hora X, ele se refere a um único lançamento
> Se baseando nisso existe uma mudança de paradigma, o que deveria ser feito agora era separa repetindo apenas o carimbo de Data/Hora, separa de forma simples apenas os observados, e todos demais campos estariam vinculados pela função [XLOOKUP](../mostImportantFunctions/xLookup.md) à Data e Hora.

As formulas ficariam assim:

```Sheets
TRANSPOSE(SPLIT(JOIN(";";map(Data/Hora:Data/Hora ;Observado:Observado ;LAMBDA(rept_intervalo;split_intervalo;REPT(CONCATENATE(rept_on;";");COUNTA(SPLIT(split_on;", ";FALSE;TRUE))))));";";true;true))
```

```Sheets
=TRANSPOSE(SPLIT(JOIN(",";Observados:Observados); ","; FALSE;TRUE))
```

E as demais colunas um simples [XLOOKUP](../mostImportantFunctions/xLookup.md):

```Sheets
=XLOOKUP($Carimbo_Data/Hora1;Coletiva!$A:$A;Coletiva!B:B;)
```

Essa abordagem resolveu 95% dos problema relativo ao limite de caracteres da função JOIN. Portanto:

3. [x] **Terceira Tarefa check**

### 4. Juntando tudo

Agora foi usado o simples método de junção de intervalos por {}

```Sheets
={Intervalo1:Intervalo1;Intervalo2:Intervalo2; ...}
```

4. [x] **Quarta Tarefa check**

> Todos requisitos cumpridos, então Tarefa Concluída
