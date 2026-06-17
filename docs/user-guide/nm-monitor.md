---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

**NM Monitor** is a web app that lives **inside every NMMiner device**. There is nothing to install on your phone or PC — open the miner s IP in any browser and you are in. All monitoring and fleet management goes through NM Monitor and its [Swarm](./swarm.md) menu.

## Opening NM Monitor

1. Connect your phone or PC to the **same WiFi** as the miner.
2. Find the miner s IP — easiest way is to check the **Miner page** on the device s screen (the IP is displayed in the status bar). Alternatively, look it up in your router s DHCP table.
3. Open `http://<miner-ip>/` in **Chrome, Edge, Safari or Firefox**. There is no port to remember — port 80.
4. The home page loads automatically.

:::tip
Bookmark `http://<miner-hostname>/` (e.g. `http://nm-cyd-c5-ab12cd/`) — most home routers will let you reach the miner by hostname too.
:::

## What you can do in NM Monitor

| Section              | Purpose                                                          |
| -------------------- | ---------------------------------------------------------------- |
| **Dashboard**        | Live hashrate, accepted / rejected shares, pool diff, uptime, RSSI, free heap, temperature (where supported). |
| **Swarm**            | LAN-wide aggregation: see every NMMiner on the same WiFi, sum hashrate, ping a specific miner to make it flash. See [Swarm](./swarm.md). |
| **Network**          | Change hostname, WiFi SSID, WiFi password.                       |
| **Mining**           | Primary / fallback pool URL, wallet address, pool password.      |
| **Time**             | Time zone, time format (12 / 24 h), date format.                 |
| **Preferences**      | Screen brightness, rotation, LED enable, screen-saver timeout, screen-saver mode (image / black), [Ladder](./ladder.md) opt-in. |
| **Market**           | Pick the main coin and the watch-list shown on the Price page.   |
| **Weather**          | Set the city / lat / lon and units used by the Weather page.     |
| **Screensaver**      | Upload custom PNGs that get converted in-browser and pushed to the miner. |
| **System**           | Firmware version, board, free heap, **Restart** button.          |
| **API Doc**          | Live HTTP API reference (also published at `/api-doc`).          |

## Read it from anywhere on your LAN

NM Monitor sets `Access-Control-Allow-Origin: *` on every API endpoint. That means a browser page served from any origin can read the miner s status — useful for building your own dashboards. The full set of endpoints is documented in [API Reference](../api/overview.md).