import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero nm-glow', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">
            ESP32 Bitcoin Stratum Miner — Documentation Hub
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/quick-start">
            <Translate id="homepage.cta.start">Quick Start →</Translate>
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/how-mining-works/bitcoin-mining-basics" style={{marginLeft: '1rem'}}>
            <Translate id="homepage.cta.arch">Articles</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'homepage.description',
        message: 'NMMiner Wiki — Documentation for the high-performance ESP32 Bitcoin Stratum miner firmware.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.versionBadge}>
          <Translate id="homepage.version">Wiki Version</Translate>: {siteConfig.customFields?.wikiVersion as string}
        </div>
      </main>
    </Layout>
  );
}