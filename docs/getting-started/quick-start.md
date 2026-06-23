---
sidebar_position: 1
title: Quick Start
---

# Quick Start

Get a fresh ESP32 board hashing in **about 10 minutes**.

## What you need

- An [officially supported board](../hardware/overview.md) (ESP32-D0 / S3 / C3 / C5).
- A USB cable and a PC with **Chrome** or **Edge** (for the browser-based flash tool).
- A 2.4 GHz WiFi network.

You **do not need a wallet** to get started — NMMiner ships pre-configured with our own SoloBTC pool ([solobtc.nmminer.com](https://solobtc.nmminer.com)) and a temporary demo wallet. Replace the wallet with your own BTC address whenever you're ready.

## The five steps

1. **Flash firmware** — open [flash.nmminer.com](https://flash.nmminer.com), pick your board, click *Install*. See [Flash Firmware](./flash-firmware.md).
2. **Purchase & activate licence** — the flash tool will guide you through purchasing a licence, then paste the licence string into the activation box. See [Activate Licence](./activate-licence.md).
3. **Join the AP `nmap-2.4g`** with your phone. The captive portal will pop up automatically. PCs: visit `http://192.168.4.1` manually.
4. **Configure** WiFi (mandatory) and wallet (recommended) on the web page, then press **Save**. The miner restarts in ~15 seconds. See [First Configuration](./first-configuration.md).
5. **Watch it mine** — the miner page on the screen shows live hashrate, accepted shares and pool diff. Visit [solobtc.nmminer.com](https://solobtc.nmminer.com) to see your worker show up on the pool dashboard.

:::tip
On first power-up the miner will try to reconnect to the last known WiFi for 15 seconds. If it fails it falls back into AP / configuration mode automatically.
:::