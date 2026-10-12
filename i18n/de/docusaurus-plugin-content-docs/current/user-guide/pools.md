---
sidebar_position: 4
title: Pools
---

# Pools

Weil die ESP32-Hashrate klein ist (ein paar hundert KH/s), verbindet sich NMMiner mit **niedrigschwelligen** Pools, die Shares weit unter der Netzwerk-Diff akzeptieren.

NMMiner wird vorkonfiguriert mit unserem eigenen Pool ausgeliefert — **normalerweise müssen Sie nichts ändern**.

## Eingebaute Standardwerte

| Steckplatz       | URL                                              | Region   |
| ---------- | ------------------------------------------------ | -------- |
| Primär    | `stratum+tcp://solobtc.nmminer.com:3333`         | Global   |
| Fallback   | `stratum+tcp://au.solobtc.nmminer.com:3333`      | Asien-Pazifik |

Beide sind NMMiners offizielle [SoloBTC](https://solobtc.nmminer.com)-Pools, konzipiert für Miner im Bereich von hundert KH/s. Dashboard: [solobtc.nmminer.com](https://solobtc.nmminer.com).

Wenn der primäre Pool nicht erreichbar wird, wechselt der Miner automatisch zum Fallback. Wenn sich der primäre erholt, wechselt der Miner innerhalb von ~10 Sekunden zurück (seit v1.7.05).

## Unterstützte Pool-URL-Schemata

| Schema               | Bedeutung                                               |
| -------------------- | ----------------------------------------------------- |
| `stratum+tcp://`     | Einfaches TCP Stratum v1.                                 |
| `stratum+ssl://`     | TLS-verpacktes Stratum (setzen Sie dies, wenn Ihr Pool SSL erfordert). |

## Unterstützte Coins

NMMiner unterstützt derzeit **Bitcoin (BTC)** und **DigiByte (DGB)**. Beide verwenden SHA-256d, daher bedient dieselbe Hashing-Pipeline beide. Bekannte gute Endpunkte für jeden finden Sie in der [Pool-Liste](../reference/pool-list.md).

## Warum keine großen kommerziellen Pools?

NMMiners Hashrate liegt in der Größenordnung von Hunderten von KH/s. Pools, die eine hohe Mindest-Share-Schwierigkeit vorschreiben, lehnen jede NMMiner-Share ab. Bleiben Sie bei NMMiners offiziellen [SoloBTC](https://solobtc.nmminer.com)-Pools oder Community-Solo-Pools — allem, was eine sehr niedrige Share-Diff akzeptiert.
