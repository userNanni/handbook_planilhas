<p align="center">
  <img src="public/favicon.svg" alt="Handbook de Planilhas" width="96" />
</p>

<h1 align="center">Handbook de Planilhas</h1>

<p align="center">
  Documentação técnica interativa sobre Google Sheets — funções avançadas, boas práticas e casos de estudo aplicados ao contexto do Corpo de Cadetes da Aeronáutica.
</p>

<p align="center">
  <a href="https://handbook-planilhas.fly.dev"><strong>🌐 Acessar o Handbook →</strong></a>
</p>

<p align="center">
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/runtime-Bun-f9f1e1?logo=bun" alt="Bun" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://fumadocs.vercel.app"><img src="https://img.shields.io/badge/docs-Fumadocs-8b5cf6" alt="Fumadocs" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-22c55e" alt="MIT License" /></a>
</p>

---

## Índice

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Conteúdo](#-conteúdo)
- [Stack](#-stack)
- [Desenvolvimento](#-desenvolvimento)
- [Deploy](#-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

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

## 🐳 Deploy

O projeto está configurado para deploy no [Fly.io](https://fly.io) com suporte a Docker.

```bash
# Build da imagem Docker
docker build -t handbook-planilhas .

# Deploy no Fly.io (requer flyctl instalado)
fly deploy
```

A aplicação roda na região `gru` (São Paulo) com 512 MB de memória e escala automaticamente para zero quando inativa.

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
├── public/                    # Assets estáticos (favicon, imagens)
├── source.config.ts           # Configuração do Fumadocs MDX
├── vite.config.ts             # Configuração do Vite
├── Dockerfile                 # Imagem para deploy
└── biome.json                 # Configuração de lint e formatação
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Consulte o [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes detalhadas sobre como contribuir com conteúdo ou código.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ☕ para o Corpo de Cadetes da Aeronáutica
</p>
