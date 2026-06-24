---
sidebar_position: 1
title: Bitcoin Mining Grundlagen
---

# Bitcoin Mining Grundlagen

Was passiert eigentlich, wenn ein Miner „einen Block findet"?

## Proof of Work in Kürze

Bitcoin-Mining ist ein wettbewerbsorientiertes Ratespiel:

1. **Das Netzwerk schlägt einen Block vor** — eine Liste von Transaktionen plus einen Block-Header.
2. **Miner hashen den Header** immer und immer wieder mit verschiedenen Nonce-Werten (und Extranonce).
3. **Das Ziel** ist es, einen Hash zu finden, der **kleiner** als das aktuelle Schwierigkeitsziel ist.
4. **Der Gewinner** sendet seinen Block und erhält die **Blocksubvention + Gebühren**.

Jeder Hash ist ein unabhängiger Münzwurf — es gibt keinen Fortschritt und kein Gedächtnis.

## Blocksubvention

Stand 2026:

- **Bitcoin**: 3,125 BTC pro Block (nach der Halbierung 2024)
- **DigiByte**: variiert je nach Algorithmus; NMMiner nutzt den SHA256-Algorithmus von DigiByte

## Schwierigkeit (Difficulty)

Das Netzwerk passt die Schwierigkeit **alle 2016 Blöcke** (~2 Wochen) an, um eine 10-Minuten-Blockzeit beizubehalten.

- Die aktuelle Bitcoin-Schwierigkeit liegt bei **~110 Billionen** (110T).
- Ein einzelner ESP32-Miner bei 1 MH/s hat eine Chance von etwa **1 zu 110 Trillionen** pro Hash.
- Aus diesem Grund gibt es **Mining-Pools** — sie bündeln Hashrate und teilen die Belohnungen.

## Pool-Mining

Anstatt allein zu minen, treten die meisten Miner einem **Pool** bei:

1. Der Pool gibt jedem Miner ein **Share-Schwierigkeitsziel** — viel einfacher als das Netzwerkziel.
2. Miner reichen **Shares** (Beinahe-Treffer) ein, die dieses einfachere Ziel erreichen.
3. Wenn ein Miner einen **echten** Block findet, verteilt der Pool die Belohnung anteilig basierend auf den eingereichten Shares.

NMMiner verwendet standardmäßig den **SoloBTC-Pool** — eine Solo-Mining-Variante, bei der der Pool die Infrastruktur bereitstellt, aber der Blockfinder die volle Belohnung erhält.

## Weiterführende Lektüre

- [Solo vs. Pool-Mining](./solo-vs-pool-mining.md) — Detaillierter Vergleich
- [Stratum-Protokoll](./stratum-protocol.md) — Wie Miner mit Pools kommunizieren
- [NMMiner in der Pipeline](./nmminer-in-the-pipeline.md) — Wie NMMiner in die Mining-Landschaft passt
