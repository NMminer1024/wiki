---
sidebar_position: 4
title: Pools
---

# Pools

Because the ESP32 hashrate is small (a few hundred KH/s), NMMiner connects to **low-difficulty** pools that accept shares well below the network diff.

NMMiner ships pre-configured to our own pool — **you usually don't need to change anything**.

## Built-in defaults

| Slot       | URL                                              | Region   |
| ---------- | ------------------------------------------------ | -------- |
| Primary    | `stratum+tcp://solobtc.nmminer.com:3333`         | Global   |
| Fallback   | `stratum+tcp://au.solobtc.nmminer.com:3333`      | Asia-Pacific |

Both are NMMiner's official [SoloBTC](https://solobtc.nmminer.com) pools, designed for hundred-KH/s miners. Dashboard: [solobtc.nmminer.com](https://solobtc.nmminer.com).

When the primary becomes unreachable the miner automatically switches to the fallback. When the primary recovers, the miner switches back within ~10 seconds (since v1.7.05).

## Supported pool URL schemes

| Scheme               | Meaning                                               |
| -------------------- | ----------------------------------------------------- |
| `stratum+tcp://`     | Plain TCP Stratum v1.                                 |
| `stratum+ssl://`     | TLS-wrapped Stratum (set this if your pool requires SSL). |

## Supported coins

NMMiner currently supports **Bitcoin (BTC)** and **DigiByte (DGB)**. Both use SHA-256d so the same hashing pipeline serves both. See the [Pool List](../reference/pool-list.md) for known-good endpoints for each.

## Why not big commercial pools?

NMMiner's hashrate is on the order of hundreds of KH/s. Pools that mandate a high minimum share difficulty will reject every NMMiner share. Stick to NMMiner's official [SoloBTC](https://solobtc.nmminer.com) pools or community solo-style pools — anything that accepts very low share diff.