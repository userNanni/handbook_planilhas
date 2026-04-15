# Guia de Contribuição

Obrigado pelo interesse em contribuir com o **Handbook de Planilhas**! Este documento descreve tudo o que você precisa saber para contribuir de forma eficaz, seja com conteúdo ou código.

---

## Índice

- [Tipos de contribuição](#tipos-de-contribuição)
- [Configurando o ambiente](#configurando-o-ambiente)
- [Fluxo de trabalho](#fluxo-de-trabalho)
- [Convenções de branch e commit](#convenções-de-branch-e-commit)
- [Padrões de conteúdo](#padrões-de-conteúdo)
- [Padrões de código](#padrões-de-código)
- [Abrindo um Pull Request](#abrindo-um-pull-request)
- [Reportando problemas](#reportando-problemas)

---

## Tipos de contribuição

| Tipo | Exemplos |
|---|---|
| 📝 **Correções** | Typos, exemplos incorretos, explicações confusas |
| ➕ **Novos exemplos** | Casos de uso adicionais para funções existentes |
| 📄 **Nova documentação** | Novas funções, tópicos ou casos de estudo |
| 🐛 **Bugs na plataforma** | Erros de renderização, falhas na exportação, etc. |
| 💡 **Sugestões** | Via [Issues](https://github.com/userNanni/handbook_planilhas/issues) |

---

## Configurando o ambiente

### Pré-requisitos

- [Bun](https://bun.sh) `>= 1.0`
- Git

### Passos

```bash
# 1. Fork o repositório no GitHub e clone o seu fork
git clone https://github.com/SEU_USUARIO/handbook_planilhas.git
cd handbook_planilhas

# 2. Instale as dependências
bun install

# 3. Inicie o servidor de desenvolvimento
bun dev
# Acesse http://localhost:3000
```

---

## Fluxo de trabalho

1. Crie uma branch descritiva a partir de `main`
2. Faça suas alterações seguindo os padrões abaixo
3. Execute os checks de qualidade
4. Abra um Pull Request

```bash
# Criar branch
git checkout -b feat/nova-funcao-importrange

# Checar qualidade antes do commit
bun run lint && bun run typecheck

# Commit e push
git commit -m "docs: adicionar documentação da função IMPORTRANGE"
git push origin feat/nova-funcao-importrange
```

---

## Convenções de branch e commit

### Nomenclatura de branches

Use prefixos semânticos:

| Prefixo | Uso |
|---|---|
| `feat/` | Nova funcionalidade ou página de documentação |
| `fix/` | Correção de bug ou erro de conteúdo |
| `docs/` | Atualização de README ou guias |
| `refactor/` | Refatoração de código sem mudança de comportamento |
| `chore/` | Tarefas de manutenção (deps, config) |

**Exemplos:**
- `feat/funcao-importrange`
- `fix/exemplo-query-where`
- `refactor/componente-page-actions`

### Mensagens de commit

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
<tipo>: <descrição curta em português>
```

**Exemplos:**
```bash
docs: adicionar exemplos avançados de XLOOKUP
fix: corrigir fórmula incorreta no caso de estudo
feat: adicionar exportação para Markdown
refactor: extrair lógica de EPUB para utilitário separado
chore: atualizar dependências do Fumadocs
```

---

## Padrões de conteúdo

### Idioma e tom

- Escreva em **português brasileiro**
- Use linguagem técnica, mas acessível — evite jargões sem explicação
- Prefira a segunda pessoa do singular ("você pode usar...") para proximidade

### Estrutura dos arquivos MDX

Todo arquivo em `content/docs/` deve ter frontmatter completo:

```mdx
---
title: Nome da Função
description: Breve descrição do que a função faz e quando usá-la.
---

## Introdução

...

## Sintaxe

...

## Exemplos

...
```

### Boas práticas para o conteúdo

- Inclua **exemplos práticos** em todos os tópicos — teoria sem exemplo não fica
- Use **tabelas** para comparar comportamentos ou parâmetros
- Prefira exemplos aplicados ao contexto de gestão/administração (contexto CCAer)
- Ao criar um novo tópico, adicione a entrada no `meta.json` da pasta correspondente
- Siga a estrutura de diretórios existente em `content/docs/`

---

## Padrões de código

### Formatação

O projeto usa [Biome](https://biomejs.dev) para lint e formatação. **Sempre rode antes do commit:**

```bash
bun run fmt     # Formata automaticamente
bun run lint    # Verifica problemas restantes
```

### Regras gerais

| Regra | Detalhe |
|---|---|
| Sem `console.log` em produção | Use apenas em desenvolvimento local |
| Componentes React | **PascalCase** (ex: `PageActions`) |
| Arquivos | **kebab-case** (ex: `page-actions.tsx`) |
| Tipagem | Estrita — evite `any`; prefira `unknown` quando necessário |
| Imports | Absolutos via alias `@/` quando disponível |

### Verificação completa antes do PR

```bash
bun run lint && bun run fmt && bun run typecheck
```

---

## Abrindo um Pull Request

1. Certifique-se de que todos os checks passam localmente
2. Abra o PR com base na branch `main`
3. Preencha o título seguindo o mesmo padrão de commits (`tipo: descrição`)
4. Na descrição, explique:
   - **O quê** foi alterado
   - **Por quê** a alteração é necessária
   - **Como testar** (se aplicável)
5. Para documentação de conteúdo, descreva a página adicionada/modificada

> PRs com apenas código sem descrição podem ser fechados sem revisão.

---

## Reportando problemas

Use as [Issues do GitHub](https://github.com/userNanni/handbook_planilhas/issues) para:

- 🐛 Reportar bugs (erro na plataforma, fórmula incorreta, link quebrado)
- 💡 Sugerir novos tópicos ou funções a documentar
- ❓ Tirar dúvidas sobre como contribuir

**Ao abrir uma issue de bug**, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. observado
- Navegador/ambiente (se relevante para bugs de plataforma)

---

<p align="center">
  Obrigado por contribuir com o Handbook de Planilhas! ☕
</p>
