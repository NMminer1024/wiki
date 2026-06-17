# NMMiner Wiki

The official documentation site for **NMMiner** — the high-performance ESP32 Bitcoin Stratum miner firmware.

🌐 **Live site**: https://wiki.nmminer.com
🔧 **Firmware repo**: https://github.com/NMminer1024/NMMiner
⚡ **Flash tool**: https://flash.nmminer.com

---

## What this repo is

This is the source for the [Docusaurus](https://docusaurus.io/) static site that powers `wiki.nmminer.com`. It hosts:

- Getting Started guides (flash, activate, configure)
- Hardware compatibility lists (D0 / S3 / C3 / C5)
- User Guide (buttons, screens, pools, monitoring)
- High-level architecture documentation
- Release notes, FAQ, troubleshooting

## What this repo is NOT

NMMiner is **closed source**. This wiki documents only:

- Public user-facing behaviour
- High-level module structure (names + responsibilities)
- Self-drawn architecture diagrams

It does **not** contain firmware source code, performance optimisation recipes, protocol details, or any other proprietary information.

📖 Before contributing, **read [`WIKI_RULES.md`](./WIKI_RULES.md)** carefully — it defines the OPSEC red lines.

---

## Local development

```bash
npm install
npm start             # English
npm run start:zh      # Chinese
npm run build         # production build
npm run serve         # preview the production build
```

Requirements: Node.js >= 20.

## Deploy

Pushes to `main` automatically build and deploy via `.github/workflows/deploy.yml`. The custom domain `wiki.nmminer.com` is wired via `static/CNAME`.

## i18n

- Default locale: `en`
- Secondary locale: `zh`

Add new translations under `i18n/zh/docusaurus-plugin-content-docs/current/<same-path>.md`.

## License & Contributing

Wiki text & illustrations: contributions welcome via Pull Request.
NMMiner firmware: proprietary, all rights reserved by NMTech.