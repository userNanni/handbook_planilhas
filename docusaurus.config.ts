import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Handbook de Planilhas",
  tagline: "Tudo o que você precisa saber sobre planilhas",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  future: {
    v4: true,
  },
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editLocalizedFiles: false,
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Handbook de Planilhas",
      logo: {
        alt: "Handbook de Planilhas Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "handbook",
          position: "left",
          label: "handbook",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/facebook/docusaurus",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Handbook de Planilhas. Built with Docusaurus.`,
    },
    themes: ["@docusaurus/theme-classic"],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
