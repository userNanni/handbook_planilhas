import type { ReactNode, JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function Hero(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline ??
            "Handbook de Planilhas focado em Google Sheets — do básico ao avançado."}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introducao-planilhas"
          >
            Começar agora
          </Link>
          <Link
            className="button button--outline button--lg margin-left--sm"
            to="/docs/funcoes"
          >
            Ver Funções
          </Link>
          <Link
            className="button button--outline button--lg margin-left--sm"
            to="/docs/estudos-de-caso"
          >
            Estudos de Caso
          </Link>
        </div>

        <div className={styles.heroCallout}>
          <span className={styles.badge}>Google Sheets</span>
          <span className={styles.badge}>BD aplicado</span>
          <span className={styles.badge}>Exemplos práticos</span>
        </div>
      </div>
    </header>
  );
}

type FeatureProps = {
  title: string;
  description: ReactNode;
  to: string;
  icon?: ReactNode;
};

function FeatureCard({
  title,
  description,
  to,
  icon,
}: FeatureProps): JSX.Element {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx("card", styles.featureCard)}>
        <div className="card__header">
          <Heading as="h3" className={styles.featureTitle}>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            {title}
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--sm" to={to}>
            Acessar
          </Link>
        </div>
      </div>
    </div>
  );
}

function QuickStart(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className="margin-bottom--sm">
          Por onde começar
        </Heading>
        <p className="margin-bottom--lg">
          Siga este roteiro para aprender rápido, com base sólida e exemplos
          práticos.
        </p>
        <div className="row">
          <FeatureCard
            title="1) Introdução"
            to="/docs/introducao-planilhas"
            icon={<span>📘</span>}
            description={
              <>
                Conceitos fundamentais, motivação e links oficiais de
                documentação.
              </>
            }
          />
          <FeatureCard
            title="2) Conceitos de BD"
            to="/docs/conceitos-bd"
            icon={<span>🗃️</span>}
            description={
              <>
                Tipos de dados, arrays, chaves e relacionamentos aplicados a
                planilhas.
              </>
            }
          />
          <FeatureCard
            title="3) Funções"
            to="/docs/funcoes"
            icon={<span>🧮</span>}
            description={
              <>
                SOMA, SE, FILTRO, QUERY, XLOOKUP, MAP, entre outras, com
                exemplos comentados.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function HighlightCase(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.altSection)}>
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <Heading as="h2" className="margin-bottom--sm">
              Caso em destaque
            </Heading>
            <Heading
              as="h3"
              className={clsx("margin-bottom--md", styles.caseTitle)}
            >
              O Problema mais difícil de Planilhas que já resolvi
            </Heading>
            <p className="margin-bottom--md">
              Normalizando registros individuais, coletivos e de grupo em uma
              tabela única, contornando limites do JOIN e aplicando SPLIT,
              TRANSPOSE, MAP, LAMBDA e XLOOKUP.
            </p>
            <div className="margin-bottom--md">
              <pre className={styles.codeSample}>
                <code>
                  {`=TRANSPOSE(
  SPLIT(
    JOIN(","; Observados:Observados);
    ",";
    FALSE;
    TRUE
  )
)`}
                </code>
              </pre>
            </div>
            <Link
              className="button button--primary"
              to="/docs/problema-mais-dificil"
            >
              Ler o estudo de caso
            </Link>
          </div>
          <div className="col col--5">
            <div className={clsx("card", styles.tipCard)}>
              <div className="card__header">
                <strong>Dica rápida</strong>
              </div>
              <div className="card__body">
                <p className="margin-bottom--sm">
                  Em PT-BR, funções podem exigir “;” como separador. Ajuste
                  conforme a região:
                </p>
                <pre className={styles.codeSample}>
                  <code>
                    {`=SPLIT(A1; ",")    // PT-BR
=SPLIT(A1, ",")     // EN-US`}
                  </code>
                </pre>
                <p className="margin-top--sm">
                  Consulte a documentação oficial para detalhes de
                  regionalização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreResources(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className="margin-bottom--sm">
          Mais recursos
        </Heading>
        <p className="margin-bottom--lg">
          Explore conteúdos complementares, contexto do projeto e contribua.
        </p>
        <div className="row">
          <FeatureCard
            title="Sobre o projeto"
            to="/docs/sobre"
            icon={<span>ℹ️</span>}
            description="Entenda o propósito do Handbook e como ele integra Sheets com conceitos de BD."
          />
          <FeatureCard
            title="NEGE²C"
            to="/docs/nucleo"
            icon={<span>🎯</span>}
            description="Conheça o Núcleo de Estudos e suas finalidades no âmbito da SCAER."
          />
          <FeatureCard
            title="Estudos de Caso"
            to="/docs/estudos-de-caso"
            icon={<span>🧩</span>}
            description="Casos reais, com diferentes autores e abordagens."
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTA(): JSX.Element {
  return (
    <section className={clsx(styles.section, styles.altSection)}>
      <div className="container">
        <div className={clsx("text--center")}>
          <Heading as="h2" className="margin-bottom--sm">
            Pronto para acelerar com planilhas?
          </Heading>
          <p className="margin-bottom--lg">
            Comece pela Introdução, depois avance para Funções e Estudos de
            Caso.
          </p>
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introducao-planilhas"
            >
              Começar pela Introdução
            </Link>
            <Link
              className="button button--primary button--lg margin-left--sm"
              to="/docs/funcoes"
            >
              Ir para Funções
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Handbook de Planilhas focado em Google Sheets — do básico ao avançado, com fundamentos de BD."
    >
      <Hero />
      <main>
        <QuickStart />
        <HighlightCase />
        <MoreResources />
        <FinalCTA />
      </main>
    </Layout>
  );
}
