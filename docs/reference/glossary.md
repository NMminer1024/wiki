---
sidebar_position: 5
title: Glossary
---

# Glossary

| Term                    | Definition                                                                       |
| ----------------------- | -------------------------------------------------------------------------------- |
| **AP mode**             | Soft-AP captive portal that NMMiner falls back to when it cannot reach the WiFi. |
| **CYD**                 | "Cheap Yellow Display" — a family of low-cost ESP32 + TFT boards.                |
| **DGB / DigiByte**      | A SHA-256d altcoin. NMMiner supports DGB out of the box — same firmware, different pool. |
| **Hashrate**            | Hashes per second. Reported in KH/s on NMMiner.                                  |
| **Job**                 | A unit of work delivered by the pool (`mining.notify`).                          |
| **Ladder**              | The opt-in global top-10 difficulty leaderboard, published at [ladder.nmminer.com](https://ladder.nmminer.com/) and mirrored on the device screen. See [Ladder](../user-guide/ladder.md). |
| **Licence**             | Per-device activation string tying a board to a firmware image.                  |
| **NM Monitor**          | The browser-based UI served from every miner on port 80.                          |
| **Nonce**               | The 32-bit field a miner iterates over while searching for a share.              |
| **Pool diff**           | Minimum share difficulty the pool accepts.                                       |
| **Probe**               | The lightweight `/probe` endpoint used for LAN identification.                   |
| **Share**               | A hash that meets the pool diff but not the network diff.                        |
| **SoloBTC**             | NMMiner s own public-pool fork: `solobtc.nmminer.com`. The default pool on every shipped device. |
| **Stratum**             | The pool protocol NMMiner speaks. v1 only.                                       |
| **Swarm**               | The Swarm menu in NM Monitor — LAN-wide miner aggregation, zero-install. Up to 255 devices per /24 subnet. |