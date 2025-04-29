# XLOOKUP

> Como encontrar qualquer coisa de forma prática nas suas planilhas?

A **busca por dados** em planilhas é uma das tarefas mais comuns — e importantes — para organizar e analisar informações. Até pouco tempo, o `VLOOKUP` era o mais usado, mas ele tem várias **limitações**: só busca **da esquerda para a direita**, exige **ajustes manuais** quando a estrutura muda, e pode causar **erros difíceis de identificar**.

É aí que entra a função `XLOOKUP`, que veio para **substituir** o `VLOOKUP`, `HLOOKUP`, `INDEX` + `MATCH` e outras fórmulas mais complexas.

## 🔍 O que é o `XLOOKUP`?

A função `XLOOKUP` é uma forma moderna e poderosa de **buscar valores** em uma planilha. Ela funciona como um **GPS de dados**, que consegue encontrar o que você quiser em qualquer direção — **para frente ou para trás**, **vertical ou horizontal**.

## ✅ Sintaxe da função `XLOOKUP`

```excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
```

### Argumentos principais:

- `lookup_value`: o valor que você quer encontrar.
- `lookup_array`: onde o valor será procurado.
- `return_array`: o que você quer receber de volta, ao encontrar.
- `if_not_found`: o que mostrar caso o valor não seja encontrado (opcional).
- `match_mode`: tipo de correspondência (exata, próxima, coringa etc).
- `search_mode`: direção da busca (primeiro ao último, ou do último ao primeiro).

---

## 🎯 Exemplo prático

Suponha a seguinte tabela:

| Produto   | Preço |
|-----------|-------|
| Arroz     | 5.00  |
| Feijão    | 6.50  |
| Macarrão  | 4.25  |

### Usando `XLOOKUP`:

```excel
=XLOOKUP("Feijão", A2:A4, B2:B4)
```

**Resultado:** `6.5`

---

## 📊 Comparando com outras formas

### Usando `INDEX` + `MATCH`:

```excel
=INDEX(B2:B4, MATCH("Feijão", A2:A4, 0))
```

### Usando `VLOOKUP`:

```excel
=VLOOKUP("Feijão", A2:B4, 2, FALSE)
```

---

## ✅ Vantagens do `XLOOKUP` sobre `VLOOKUP`

- ✅ Pode buscar valores **à esquerda**.
- ✅ Não depende da **posição da coluna**.
- ✅ Permite tratamento direto com `if_not_found`.
- ✅ Pode retornar **múltiplas colunas** ao mesmo tempo.
- ✅ Sintaxe mais **clara e legível**.
- ✅ Suporte a **busca reversa** (último para o primeiro).
- ✅ Pode usar **caracteres coringa** para buscas aproximadas.

---

## ⚠️ Desvantagens do `XLOOKUP` frente ao `VLOOKUP`

- ❌ Pode ser **mais lento** em conjuntos muito grandes de dados, dependendo da complexidade da fórmula.
- ❌ Como é mais recente, **pode gerar confusão** em times que já estão acostumados ao `VLOOKUP`.
- ❌ Nem todos os tutoriais ou macros antigas são compatíveis com `XLOOKUP`.

---

## 🧠 Quando usar `XLOOKUP`?

- Ao montar **dashboards dinâmicos**.
- Para **relatórios de vendas, estoque ou RH**.
- Sempre que quiser **substituir `VLOOKUP` com mais controle e segurança**.
- Em **ambientes colaborativos modernos**, como Excel 365 ou Google Sheets com add-ons/simulações.

---

### 🔄 Quer simular o `XLOOKUP` no Google Sheets?

Como o Google Sheets ainda não oferece suporte direto ao `XLOOKUP`, você pode **simular** com a combinação de `INDEX` + `MATCH`:

```excel
=INDEX(coluna_resultado, MATCH(valor_procurado, coluna_busca, 0))
```

Por exemplo:

```excel
=INDEX(B2:B4, MATCH("Feijão", A2:A4, 0))
```

Esse é o jeito mais próximo de usar o `XLOOKUP` no Sheets até que ele seja lançado oficialmente.

---

📌 **Dica final**: sempre que possível, migre suas fórmulas de `VLOOKUP` para `XLOOKUP` ou `INDEX` + `MATCH` — você ganha em clareza, flexibilidade e robustez.
