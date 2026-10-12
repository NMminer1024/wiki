---
sidebar_position: 2
title: Pool-Liste
---

# Pool-Liste

Pools, die bekanntermaßen gut mit NMMiners ~150–1000 KH/s-Hashrate zusammenarbeiten. Diese passen die Share-Schwierigkeit für kleine Miner dynamisch an.

## Bitcoin (BTC) — **Standard**

| Pool                              | Stratum-URL                                       | Dashboard                                                |
| --------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **NMMiner SoloBTC** (Standard)     | `stratum+tcp://solobtc.nmminer.com:3333`          | [solobtc.nmminer.com](https://solobtc.nmminer.com)       |
| **NMMiner SoloBTC AU** (Fallback) | `stratum+tcp://au.solobtc.nmminer.com:3333`       | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

Die SoloBTC-Pools werden von NMMiner betrieben. Sie sind auf jedem Gerät vorkonfiguriert — ab Werk müssen Sie nur Ihre eigene Wallet-Adresse einfügen.

## DigiByte (DGB)

| Pool                | Stratum-URL                                       | Dashboard                                            |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`    | [digibyte.solominer.net](https://digibyte.solominer.net) |

DGB teilt den SHA-256d-Hashalgorithmus mit BTC, daher funktioniert dieselbe NMMiner-Firmware ohne Build-Änderung — nur die Pool-URL und die Wallet-Adresse unterscheiden sich.

## Hinweise

:::tip
Wenn ein Pool TLS unterstützt, wechseln Sie das Schema auf `stratum+ssl://` — derselbe Host und Port.
:::

:::warning
Große kommerzielle Pools, die eine hohe Mindest-Share-Schwierigkeit vorschreiben (z. B. `0x100000000`), lehnen jede NMMiner-Share ab. Bleiben Sie bei SoloBTC-artigen Endpunkten, die die Share-Schwierigkeit für kleine Miner auf sehr niedrige Werte herunterskalieren.
:::
