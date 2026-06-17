import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.feature.boards.title">Wide Board Support</Translate>
    ),
    description: (
      <Translate id="homepage.feature.boards.desc">
        30+ ESP32-D0 / S3 / C3 / C5 boards out of the box. From cheap DEVKitC kits to color touch displays and AMOLEDs.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.perf.title">Optimised Performance</Translate>
    ),
    description: (
      <Translate id="homepage.feature.perf.desc">
        Up to 1,035 KH/s on ESP32-D0, 400 KH/s on S3 and 402 KH/s on C3 — among the fastest ESP32 miner firmware available.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.mon.title">Zero-install Monitoring</Translate>
    ),
    description: (
      <Translate id="homepage.feature.mon.desc">
        Open any browser to manage one miner or see the whole LAN swarm. Documented HTTP API for your own dashboards.
      </Translate>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx('nm-grid', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}