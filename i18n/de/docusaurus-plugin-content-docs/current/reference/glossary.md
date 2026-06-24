---
sidebar_position: 2
title: Glossar
---

# Glossar

Häufig verwendete Begriffe in der NMMiner- und Bitcoin-Mining-Dokumentation.

| Begriff | Definition |
| ------- | ---------- |
| **ASIC** | Application-Specific Integrated Circuit — spezialisierte Mining-Hardware. ESP32 ist **kein** ASIC, verwendet aber ähnliche Prinzipien. |
| **Block** | Eine Gruppe von Transaktionen, die zur Blockchain hinzugefügt werden. Miner konkurrieren darum, den nächsten Block zu finden. |
| **Block-Belohnung** | Die BTC (oder Coin), die für das erfolgreiche Mining eines Blocks vergeben wird. Derzeit 3,125 BTC. |
| **Captive-Portal** | Die webbasierte Einrichtungsseite, die erscheint, wenn Sie sich mit dem WLAN-Hotspot des Miners verbinden. |
| **CYD** | „Cheap Yellow Display" — Ein beliebtes ESP32-S3-Board mit 320×240 Farb-Touchscreen. |
| **Schwierigkeit** | Ein Maß dafür, wie schwer es ist, einen gültigen Block zu finden. Wird alle 2016 Blöcke angepasst. |
| **ESP32** | Eine Familie von Low-Cost-Mikrocontrollern von Espressif. In mehreren Varianten erhältlich: D0, S3, C3, C5. |
| **Extranonce** | Zusätzliche Nonce-Bytes, die vom Pool bereitgestellt werden, um den Suchraum über die 32-Bit-Nonce hinaus zu erweitern. |
| **Hashrate** | Hashes pro Sekunde, die der Miner berechnet. Gemessen in H/s, KH/s, MH/s, GH/s, TH/s. |
| **Ladder** | Die globale Bestenliste, die auf einer zentralen Website die Leistung aller NMMiner-Benutzer verfolgt. |
| **Merkle-Wurzel** | Ein kryptografischer Hash aller Transaktionen in einem Block. Teil des Block-Headers, den Miner hashen. |
| **NMMiner** | Der Name dieser Firmware. Auch der Name des Ökosystems (Pool, Wiki, Monitor). |
| **Nonce** | Ein 32-Bit-Wert, den Miner ändern, um verschiedene Block-Header-Hashes zu erhalten. |
| **NM Monitor** | Die webbasierte Verwaltungsoberfläche, die vom Miner selbst bereitgestellt wird. Öffnen im Browser unter `http://<miner-ip>`. |
| **PPLNS** | Pay Per Last N Shares — eine Pool-Belohnungsmethode, bei der die Auszahlung auf den kürzlich eingereichten Shares basiert. |
| **FPPS** | Full Pay Per Share — eine Pool-Belohnungsmethode, bei der pro Share bezahlt wird, unabhängig davon, ob ein Block gefunden wird. |
| **Pool** | Ein Server, der die Hashrate mehrerer Miner bündelt und die Belohnungen teilt. |
| **Share** | Ein Hash, der das (einfachere) Schwierigkeitsziel des Pools erreicht, aber nicht das Netzwerkziel. Zum Nachweis der Arbeit verwendet. |
| **Solo-Mining** | Mining ohne Aufteilung der Belohnung. Wenn Sie den Block finden, erhalten Sie die volle Belohnung. |
| **SoloBTC-Pool** | NMMiners eigener Solo-Mining-Pool unter solobtc.nmminer.com. |
| **Stratum** | Das Protokoll, das Miner verwenden, um mit Mining-Pools zu kommunizieren. NMMiner implementiert Stratum v1. |
| **Swarm** | Eine Funktion, die alle NMMiner-Geräte in Ihrem lokalen Netzwerk erkennt und aggregierte Statistiken anzeigt. |
| **Worker** | Ein einzelner Miner innerhalb eines Pools. Identifiziert durch `wallet_address.worker_name`. |
