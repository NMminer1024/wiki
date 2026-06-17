---
sidebar_position: 4
title: First Configuration
---

# First Configuration

On a freshly-flashed board, NMMiner enters **AP / configuration mode** and exposes a web page where you set WiFi, pool, wallet and display options.

## Fields

| Field           | Default                                                | Purpose                                                              |
| --------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| **WiFi SSID**   | (empty)                                                | Your 2.4 GHz network name.                                           |
| **WiFi Password** | (empty)                                              | WPA / WPA2 password.                                                 |
| **Pool URL (primary)** | `stratum+tcp://solobtc.nmminer.com:3333`        | NMMiner's own SoloBTC pool. Override only if you really need to.     |
| **Pool URL (fallback)** | `stratum+tcp://au.solobtc.nmminer.com:3333`    | NMMiner's Asia-Pacific fallback. Used if the primary is unreachable. |
| **Wallet / Worker name** | Demo wallet pre-filled                        | Your BTC payout address, optionally followed by `.workerName`. **Change this!** |
| **UI refresh** | Board-specific                                         | Lower = faster screen refresh, slightly less hashrate. Higher = max hashrate, slower UI. |
| **Screen brightness** | 100 %                                           | 0–100 %.                                                              |
| **Time zone**  | `+8`                                                   | Float supported (e.g. `8`, `5.5`, `-3.5`). Range: -13.5 ~ +13.5.     |
| **Time format**| 24 h                                                   | 12 / 24 hour.                                                         |
| **LED**        | Board-specific                                         | Enable / disable the on-board status LED.                            |

When you press **Save**, the miner takes 10-15 s to commit to flash. **Do not reset manually.** It will restart on its own.

:::tip Set your own wallet
NMMiner is pre-configured to mine to a demo address so the board "just works" out of the box. Replace the wallet with your own BTC address before doing anything serious — that demo address is shared by every fresh device.
:::

## Force re-configuration

If you need to change settings after the miner is already online:

- **One-button board** → long-press `BOOT`.
- **Two-button board** → long-press `USER`.
- **Touch screen board** → long-press the screen for 10 seconds.

The miner reboots into AP mode and exposes the captive portal again. Detailed behaviour: [Buttons](../user-guide/buttons.md).

## Live updates without reboot

A few settings apply **instantly** — no need to re-save and reboot:

- Screen brightness
- Screen rotation
- LED on / off
- Timezone
- Screen-saver mode (image / black)

You can change these from [NM Monitor](../user-guide/nm-monitor.md) and see the effect immediately.