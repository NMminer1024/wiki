---
sidebar_position: 2
title: Screen Pages
---

# Screen Pages

Boards with a display cycle through a small set of pages. Switch with the gesture defined in [Buttons & Touch](./buttons.md) — tap, double-click, or swipe depending on hardware.

NMMiner ships layouts for the following native sizes:

```
128x64    128x128    160x80     240x135
240x240   320x170    320x172    320x240
480x320   536x240
```

## Pages

| Order | Page       | Purpose                                                                |
| ----- | ---------- | ---------------------------------------------------------------------- |
| 1     | **Loading**| Splash + boot status, firmware version, network handshake.             |
| 2     | **Config** | Shown when in AP mode — QR / IP / SSID to reach the captive portal.    |
| 3     | **Miner**  | Live hashrate, **session-best** and **all-time best** difficulty, accepted / rejected shares, pool URL, uptime. The primary "working" page. |
| 4     | **Clock**  | Big clock + date, with BTC price ticker that turns green on gains and red on losses. Selectable 12 / 24 h time format, configurable date format. |
| 5     | **Price**  | Two modes:<br/>• **K-line** — candlestick chart of your main coin, configurable interval (`15m`, `1h`, `4h`, `1d`, …).<br/>• **Wall** — multi-coin watch-list view (up to 20 pairs). |
| 6     | **Weather**| Current conditions + AQI + 3-day forecast + sunrise / sunset. Selectable temperature (°C / °F), wind-speed (km/h / mph / m/s) and altimeter (pressure / humidity) units. |
| 7     | **Ladder** | **Opt-in** global top-10 leaderboard ranked by best-ever share difficulty. Wallets are displayed as `first4…last4` for privacy. Off by default. The same data is also published on the web at [ladder.nmminer.com](https://ladder.nmminer.com/) — see [Ladder](./ladder.md). |

:::info
Page order is identical across boards; small / OLED screens skip pages that cannot fit. NMMiner remembers the page you were on and resumes there after a power cycle (since v1.8.20).
:::

## Screen saver

If you idle the miner for long enough it enters a screen-saver:

- **Image mode** — slideshow of custom images uploaded via NM Monitor.
- **Black mode** — turns the backlight off (or OLED contrast to minimum) for the lowest power draw and **the absolute peak hashrate**.

Wake gestures: single-click `BOOT` (or `USER`), or tap a touch screen. Details: [Screen Saver](./screen-saver.md).