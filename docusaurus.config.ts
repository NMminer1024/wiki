import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// The wiki is always served at https://wiki.nmminer.com (root path), both
// in production (GitHub Pages with custom CNAME) and locally. Env vars are
// kept as escape hatches in case the domain ever changes.
// `||` (not `??`) because CI may pass empty strings when the optional repo
// variables are unset.
const siteUrl     = process.env.DOCUSAURUS_URL      || 'https://wiki.nmminer.com';
const siteBaseUrl = process.env.DOCUSAURUS_BASE_URL || '/';

// `docusaurus start` only serves a single locale at a time. The locale
// dropdown link in that mode lands on a non-existent route, which some
// browsers / extensions turn into `about:blank#blocked`. So we hide the
// dropdown during `start` and keep it for builds where every locale ships.
const isDevServer = process.env.NODE_ENV !== 'production';

const config: Config = {
  title: 'NMMiner Wiki',
  tagline: 'ESP32 Bitcoin Stratum Miner — Documentation Hub',
  favicon: 'img/favicon.png',

  url: siteUrl,
  baseUrl: siteBaseUrl,

  organizationName: 'NMminer1024',
  projectName: 'wiki',

  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-US' },
      zh: { label: '中文',     htmlLang: 'zh-CN' },
    },
  },

  headTags: [
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
    { tagName: 'link', attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' } },
    { tagName: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap' } },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/NMminer1024/wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/nmminer-theme.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/nmminer-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'NMMiner',
      logo: { alt: 'NMMiner Logo', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'wikiSidebar', position: 'left', label: 'Docs' },
        { to: '/docs/getting-started/quick-start', label: 'Get Started', position: 'left' },
        { to: '/docs/hardware/overview',          label: 'Hardware',    position: 'left' },
        { to: '/docs/how-mining-works/bitcoin-mining-basics', label: 'How Mining Works', position: 'left' },
        { to: '/docs/api/overview',               label: 'API',         position: 'left' },
        { href: 'https://flash.nmminer.com',      label: 'Flash Tool',  position: 'right' },
        { href: 'https://ladder.nmminer.com/',    label: 'Ladder',      position: 'right' },
        ...(isDevServer ? [] : [{ type: 'localeDropdown' as const, position: 'right' as const }]),
        { href: 'https://www.nmminer.com',        label: 'Website',     position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Quick Start', to: '/docs/getting-started/quick-start' },
            { label: 'Hardware',    to: '/docs/hardware/overview' },
            { label: 'User Guide',  to: '/docs/user-guide/buttons' },
            { label: 'How Mining Works', to: '/docs/how-mining-works/bitcoin-mining-basics' },
            { label: 'API',         to: '/docs/api/overview' },
          ],
        },
        {
          title: 'Tools',
          items: [
            { label: 'Flash Tool',     href: 'https://flash.nmminer.com' },
            { label: 'Ladder',         href: 'https://ladder.nmminer.com/' },
            { label: 'NM Monitor',     to: '/docs/user-guide/nm-monitor' },
            { label: 'Swarm Menu',     to: '/docs/user-guide/swarm' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Telegram', href: 'https://t.me/NMMiner' },
            { label: 'Email',    href: 'mailto:nmminer1024@gmail.com' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Website',     href: 'https://www.nmminer.com' },
            { label: 'FAQ',         to: '/docs/reference/faq' },
            { label: 'Glossary',    to: '/docs/reference/glossary' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NMTech. NMMiner Wiki built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'ini', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;