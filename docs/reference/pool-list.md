---
sidebar_position: 2
title: Pool List
---

# Pool List

Pools known to play nicely with NMMiner's ~150–1000 KH/s hashrate. These all dynamically adjust share difficulty for small miners.

## Bitcoin (BTC) — **default**

| Pool                              | Stratum URL                                       | Dashboard                                                |
| --------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **NMMiner SoloBTC** (default)     | `stratum+tcp://solobtc.nmminer.com:3333`          | [solobtc.nmminer.com](https://solobtc.nmminer.com)       |
| **NMMiner SoloBTC AU** (fallback) | `stratum+tcp://au.solobtc.nmminer.com:3333`       | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

The SoloBTC pools are operated by NMMiner. They are pre-configured on every device — out of the box you only need to plug your own wallet address.

## DigiByte (DGB)

| Pool                | Stratum URL                                       | Dashboard                                            |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`    | [digibyte.solominer.net](https://digibyte.solominer.net) |

DGB shares the SHA-256d hashing algorithm with BTC, so the same NMMiner firmware works without any change of build — only the pool URL and wallet address differ.

## Notes

:::tip
If a pool supports TLS, switch the scheme to `stratum+ssl://` — same host and port.
:::

:::warning
Big commercial pools that mandate a high minimum share difficulty (e.g. `0x100000000`) will reject every NMMiner share. Stick to SoloBTC-style endpoints that scale share difficulty down to very low values for small miners.
:::