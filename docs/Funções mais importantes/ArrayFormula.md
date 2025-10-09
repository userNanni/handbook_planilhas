# ARRAYFORMULA

As vezes, durante suas aventuras pelo Google Sheets, pode **surgir** uma **dúvida**:

> **Como não** precisar de **puxar** as **funções** para cada célula da sua coluna ?

Muitas vezes, ao **trabalhar** com planilhas, precisamos **aplicar** uma **fórmula** a **todas** as células de uma coluna.  
Embora isso seja **simples**, pode se tornar **tedioso** e **consumir tempo**, especialmente quando novas linhas são adicionadas e é necessário repetir o processo manualmente.

Para **simplificar** essa tarefa, podemos utilizar a função **ARRAYFORMULA**. Ela permite **aplicar** uma fórmula a um **intervalo de células** que normalmente exigiria **referência individual**.

## Por exemplo:

### Sem **ARRAYFORMULA**

Ao **fazer** uma soma

```Google Sheets
=(A2+B2)
```

Assim, são **somadas** as duas células e pode ser **replicada** a fórmula para as **linhas subsequentes**.

| Valor 1 | Valor 2 | Fórmula  | Soma |
| ------- | ------- | -------- | ---- |
| 1       | 2       | =(A2+B2) | 3    |
| 2       | 3       | =(A3+B3) | 5    |
| 3       | 4       | =(A4+B4) | 7    |
| 4       | 5       | =(A5+B5) | 9    |

### Com a **ARRAYFORMULA**

Substituí-se as **referências individuais** por **intervalos**

```Google Sheets
=ARRAYFORMULA(A2:A+B2:B)
```

Isso faz com que a **fórmula** seja **automaticamente** **estendida** a todo o **intervalo** especificado.
**Economizando**, assim, não apenas tempo, mas também reduz a chance de erros ao lidar com grandes volumes de dados.

| Valor 1 | Valor 2 | Fórmula                  | Soma |
| ------- | ------- | ------------------------ | ---- |
| 1       | 2       | =ARRAYFORMULA(A2:A+B2:B) | 3    |
| 2       | 3       |                          | 5    |
| 3       | 4       |                          | 7    |
| 4       | 5       |                          | 9    |
