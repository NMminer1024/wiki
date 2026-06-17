import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'generated-index', slug: '/getting-started'},
      items: [
        'getting-started/quick-start',
        'getting-started/flash-firmware',
        'getting-started/activate-licence',
        'getting-started/first-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
      link: {type: 'generated-index', slug: '/hardware'},
      items: [
        'hardware/overview',
        'hardware/esp32-d0-boards',
        'hardware/esp32-s3-boards',
        'hardware/esp32-c3-boards',
        'hardware/esp32-c5-boards',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      link: {type: 'generated-index', slug: '/user-guide'},
      items: [
        'user-guide/buttons',
        'user-guide/screens',
        'user-guide/configuration-portal',
        'user-guide/pools',
        'user-guide/firmware-update',
        'user-guide/screen-saver',
        'user-guide/led',
        'user-guide/nm-monitor',
        'user-guide/swarm',
        'user-guide/ladder',
      ],
    },
    {
      type: 'category',
      label: 'How Mining Works',
      link: {type: 'generated-index', slug: '/how-mining-works'},
      items: [
        'how-mining-works/bitcoin-mining-basics',
        'how-mining-works/stratum-protocol',
        'how-mining-works/nmminer-in-the-pipeline',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {type: 'generated-index', slug: '/api'},
      items: [
        'api/overview',
        'api/discovery',
        'api/system',
        'api/settings-network',
        'api/settings-mining',
        'api/settings-time',
        'api/settings-preference',
        'api/settings-market',
        'api/settings-weather',
        'api/swarm-find',
        'api/screensaver-upload',
        'api/examples',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'generated-index', slug: '/reference'},
      items: [
        'reference/pool-list',
        'reference/faq',
        'reference/troubleshooting',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;