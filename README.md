# 📊 Handbook de Planilhas

> Documentação técnica interativa sobre Google Sheets — funções avançadas, boas práticas e casos de estudo aplicados ao contexto do Corpo de Cadetes da Aeronáutica.

[![Bun](https://img.shields.io/badge/runtime-Bun-f9f1e1?logo=bun)](https://bun.sh)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Fumadocs](https://img.shields.io/badge/docs-Fumadocs-8b5cf6)](https://fumadocs.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-green)](#licença)

---

## 📖 Sobre

O **Handbook de Planilhas** é uma plataforma de documentação técnica criada para ensinar e consolidar o uso de planilhas Google Sheets com profundidade. O conteúdo abrange desde conceitos fundamentais até funções avançadas, passando por modelagem de dados, boas práticas e resolução de problemas reais.

**Público-alvo:** Cadetes e instrutores do Corpo de Cadetes da Aeronáutica (CCAer) que desejam dominar planilhas como ferramenta de gestão e análise de dados.

---

## ✨ Funcionalidades

- 📄 **Documentação em MDX** com suporte a componentes React interativos
- 🔍 **Busca de texto completo** em todo o conteúdo
- 📐 **Renderização de fórmulas matemáticas** com KaTeX
- 📥 **Exportação para EPUB 3.0** gerado dinamicamente no servidor
- 🖨️ **Exportação para PDF** via impressão do navegador
- 🔗 **Compartilhamento de links** com cópia para área de transferência
- ⚡ **SSR + pré-renderização estática** para performance máxima
- 🌐 **Integração com GitHub** — links diretos para cada página no repositório

---

## 📚 Conteúdo

| Seção | Descrição |
|---|---|
| **Introdução** | Conceitos fundamentais de planilhas e Google Sheets |
| **Conceitos de Banco de Dados** | Modelagem relacional aplicada a planilhas |
| **Funções** | QUERY, XLOOKUP, MAP, ARRAYFORMULA, GOOGLEFINANCE |
| **Boas Práticas** | Padrões e convenções para planilhas sustentáveis |
| **Casos de Estudo** | Problemas reais resolvidos passo a passo |

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Runtime & Package Manager | [Bun](https://bun.sh) |
| Framework Frontend | [React 19](https://react.dev) + [TanStack Start](https://tanstack.com/start) |
| Roteamento | [TanStack Router](https://tanstack.com/router) |
| Bundler | [Vite](https://vitejs.dev) |
| Framework de Docs | [Fumadocs](https://fumadocs.vercel.app) |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com) |
| Servidor | [Nitro](https://nitro.build) (preset `bun`) |
| Conteúdo | MDX + remark + rehype |
| Matemática | [KaTeX](https://katex.org) |
| Exportação EPUB | [fflate](https://github.com/101arrowz/fflate) |
| Qualidade de Código | [Biome](https://biomejs.dev) |
| Tipagem | TypeScript 5 |

---

## 🚀 Desenvolvimento

### Pré-requisitos

- [Bun](https://bun.sh) `>= 1.0`

### Instalação

```bash
git clone https://github.com/userNanni/handbook_planilhas.git
cd handbook_planilhas
bun install
```

### Servidor de desenvolvimento

```bash
bun dev
# Acesse http://localhost:3000
```

### Build de produção

```bash
bun run build
```

### Iniciar servidor de produção

```bash
bun start
```

### Outros comandos

```bash
bun run lint        # Verificar problemas com Biome
bun run fmt         # Formatar código automaticamente
bun run typecheck   # Checar tipos TypeScript + Fumadocs MDX
```

---

## 📁 Estrutura do Projeto

```
handbook_planilhas/
├── content/
│   └── docs/                  # Conteúdo em MDX/Markdown
│       ├── funcoes/           # Funções avançadas do Google Sheets
│       ├── praticas/          # Boas práticas
│       └── casos-de-estudo/   # Casos de estudo reais
├── src/
│   ├── components/            # Componentes React reutilizáveis
│   ├── lib/                   # Utilitários (EPUB, source, router)
│   ├── routes/                # Páginas e endpoints da API
│   └── styles/                # CSS global e estilos de impressão
├── public/                    # Assets estáticos
├── source.config.ts           # Configuração do Fumadocs MDX
├── vite.config.ts             # Configuração do Vite
└── biome.json                 # Configuração de lint e formatação
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga as diretrizes abaixo para manter a qualidade e consistência do projeto.

### Como contribuir

1. **Fork** este repositório
2. Crie uma **branch** descritiva: `git checkout -b feat/nova-funcao-xlookup`
3. Faça suas alterações seguindo os padrões do projeto
4. Execute os checks: `bun run lint && bun run typecheck`
5. Faça o **commit** com mensagem clara: `git commit -m "docs: adicionar exemplos avançados de XLOOKUP"`
6. Abra um **Pull Request** detalhando o que foi alterado e por quê

### Tipos de contribuição aceitos

- 📝 Correção de erros (typos, exemplos incorretos, explicações confusas)
- ➕ Adição de novos exemplos ou casos de uso
- 📄 Nova documentação de funções ou tópicos
- 🐛 Correções de bugs no código da plataforma
- 💡 Sugestões de melhoria via [Issues](https://github.com/userNanni/handbook_planilhas/issues)

### Padrões de conteúdo

- Escreva em **português brasileiro**
- Use linguagem técnica, mas acessível
- Inclua exemplos práticos em todos os tópicos
- Arquivos MDX devem ter frontmatter com `title` e `description`
- Siga a estrutura de diretórios existente em `content/docs/`

### Padrões de código

- O código é formatado automaticamente com **Biome** — rode `bun run fmt` antes do commit
- Sem `console.log` em produção
- Componentes React em **PascalCase**, arquivos em **kebab-case**
- Tipagem estrita — evite `any`

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 userNanni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  Feito com ☕ para o Corpo de Cadetes da Aeronáutica
</p>
