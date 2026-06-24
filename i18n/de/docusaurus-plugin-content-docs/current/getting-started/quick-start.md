---
sidebar_position: 1
title: Schnellstart
---

# Schnellstart

Bringen Sie ein ESP32-Board in etwa 5 Minuten zum Mining.

## 1. Wählen Sie ein Board

NMMiner unterstützt über 30 verschiedene ESP32-Boards. Siehe [Hardware-Übersicht](../hardware/overview.md) für die vollständige Liste.

Die beliebtesten Einstiegsboards:
- **ESP32-DevKitC** (ESP32-D0) — ~1.035 KH/s, günstig und weit verbreitet
- **ESP32-S3-DevKitC** (ESP32-S3) — ~400 KH/s, neuerer Chip
- **ESP32-C3-DevKitM** (ESP32-C3) — ~402 KH/s, sehr stromsparend

## 2. Firmware flashen

1. Besuchen Sie das [NMMiner Flash Tool](https://flash.nmminer.com)
2. Verbinden Sie Ihr Board per USB mit dem Computer
3. Wählen Sie Ihr Board-Modell und den seriellen Port aus
4. Klicken Sie auf **Flash**

Detaillierte Anweisungen finden Sie unter [Firmware flashen](./flash-firmware.md).

## 3. Mit dem WLAN-Portal verbinden

Nach dem Flashen startet das Board einen WLAN-Hotspot namens **`NMMiner-Setup`**.

1. Verbinden Sie Ihr Telefon oder Ihren PC mit diesem WLAN
2. Ein Captive-Portal öffnet sich automatisch
3. Wenn nicht, öffnen Sie einen Browser und gehen Sie zu `http://192.168.4.1`

Lesen Sie mehr unter [Erste Konfiguration](./first-configuration.md).

## 4. Mining starten

Das Board ist vorkonfiguriert, um mit dem **SoloBTC Pool von NMMiner** zu minen. Es beginnt sofort zu hashen, sobald:

- WLAN-Zugangsdaten gespeichert sind
- Eine Wallet-Adresse gesetzt ist (Standardeinstellung funktioniert für erste Tests)

## 5. Ihre Miner überwachen

- Auf dem **Gerätedisplay**: Live-Hashrate, Shares, Pool-Status
- Im **Browser**: Öffnen Sie `http://<miner-ip>` für [NM Monitor](../user-guide/nm-monitor.md)
- **Ganze Flotte**: Verwenden Sie das [Swarm-Menü](../user-guide/swarm.md)

## Nächste Schritte

| Sie möchten…                              | Gehen Sie zu                                                        |
| ----------------------------------------- | ------------------------------------------------------------------- |
| Mehrere Boards kaufen                      | [Hardware-Übersicht](../hardware/overview.md)                       |
| Pool wechseln                              | [Pools-Konfiguration](../user-guide/pools.md)                       |
| Globalen Ranglisten-Beitritt verwalten     | [Ladder](../user-guide/ladder.md)                                   |
| Verstehen, wie das alles funktioniert      | [Wie Mining funktioniert](../how-mining-works/bitcoin-mining-basics.md) |
