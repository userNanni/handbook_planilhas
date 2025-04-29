# MAP

> Como aplicar uma função a cada elemento de um intervalo de forma eficiente?

Quando precisamos transformar ou processar cada valor de uma coluna, linha ou matriz, as fórmulas tradicionais podem ficar complexas. A função `MAP` simplifica isso: ela **aplica uma LAMBDA** a cada elemento de um ou mais intervalos de entrada e retorna um novo intervalo com os resultados.

---

## 🔍 Sintaxe da função `MAP`

```excel
=MAP(range1, [range2, …], LAMBDA(currentValue1, [currentValue2, …], formula))
```

- `range1`: o primeiro intervalo de entrada.
- `[range2, …]`: intervalos adicionais de entrada (opcional, para funções que combinam mais de um valor).
- `LAMBDA`: define parâmetros nomeados para cada elemento de entrada e a fórmula a ser aplicada.

---

## 🎯 Exemplos práticos

### 1️⃣ Dobrar cada valor de uma coluna

Suponha os valores em A2:A5:

| A  |
|----|
| 1  |
| 2  |
| 3  |
| 4  |

```excel
=MAP(A2:A5, LAMBDA(x, x * 2))
```

**Resultado:** `{2; 4; 6; 8}`

---

### 2️⃣ Concatenar elementos de duas colunas

Suponha:

| A      | B    |
|--------|------|
| João   | Silva|
| Maria  | Oliveira|
| Pedro  | Souza|

```excel
=MAP(A2:A4, B2:B4, LAMBDA(nome, sobrenome, nome & " " & sobrenome))
```

**Resultado:** `{"João Silva"; "Maria Oliveira"; "Pedro Souza"}`

---

## ✅ Vantagens do `MAP`

- 🚀 **Clareza**: evita construções longas de `ARRAYFORMULA` + `IF` + `ROW()`.
- 🔄 **Flexibilidade**: permite múltiplos intervalos de entrada e lógica personalizada.
- 🛠️ **Reutilização**: LAMBDA interno pode ser substituído ou reutilizado.
- 🔍 **Depuração**: mais fácil de entender e editar cada etapa.

---

## ⚠️ Desvantagens do `MAP`

- 🐢 **Performance**: em intervalos muito grandes, LAMBDA repetida pode ser mais lenta que funções vetorizadas nativas.
- 📚 **Curva de aprendizado**: quem não conhece LAMBDA pode achar a sintaxe inicialmente confusa.

---

## 🚀 Quando usar `MAP`?

- Para aplicar **transformações complexas** a cada elemento de um intervalo.
- Quando precisa **combinar** valores de múltiplos intervalos de forma simples.
- Em **dashboards** que exigem cálculos personalizados sem multiplicar colunas auxiliares.
- Ao criar **soluções modulares** com `LAMBDA`, facilitando a manutenção da planilha.

---

📌 **Dica**: Combine `MAP` com `REDUCE` e `SCAN` para processamentos ainda mais avançados de listas e matrizes!
