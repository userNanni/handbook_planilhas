# GOOGLEFINANCE

> Como o Google Sheets pode te ajudar a investir?

Com a **inflação corroendo** o **poder de compra**, **investir em renda variável** pode ser uma ótima **estratégia** para **aumentar o patrimônio**.  
Mas como acompanhar se os **investimentos** estão indo bem? Minha **estratégia** está sendo cumprida? **Preciso** mudar algo na minha **alocação**?

Para **responder** a essas **perguntas** e tomar **decisões mais estruturadas**, é possível **usar o Google Sheets** para criar uma planilha de acompanhamento.  
Uma das formas mais fáceis de fazer isso é com a função **GOOGLEFINANCE**.

## 🔍 Como usar **GOOGLEFINANCE** no Google Sheets?

### 1️⃣ Escolha a ação que deseja acompanhar

Consulte esta tabela:

👉 [Tabela de exoneração de responsabilidade](https://www.google.com/intl/pt-BR/googlefinance/disclaimer/)

para ver o **código da bolsa**, e insira o **código da ação**.

### 2️⃣ Use a fórmula básica para obter o preço da ação

```excel
=GOOGLEFINANCE("BVMF:BBAS3")
```

Esse exemplo retorna o preço da ação **BBAS3** (Banco do Brasil) na bolsa brasileira **BVMF** (B3).

### 3️⃣ Adicione parâmetros para mais informações

Se quiser saber o **nome da ação**:

```excel
=GOOGLEFINANCE("BVMF:BBAS3"; "name")
```

Outros **atributos** disponíveis incluem: **preço**, **P/L**, **volume**, **Market Cap**, entre **outros**.

A lista **completa de atributos** pode ser encontrada na **documentação oficial**:

🔗 [Documentação da Função GOOGLEFINANCE](https://support.google.com/docs/answer/3093281?hl=pt-BR)
