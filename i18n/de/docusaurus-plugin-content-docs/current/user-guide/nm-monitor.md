---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

**NM Monitor** ist eine Web-App, die **in jedem NMMiner-Gerät steckt**. Es gibt nichts auf Ihrem Telefon oder PC zu installieren — öffnen Sie die IP des Miners in einem beliebigen Browser und Sie sind drin. Alle Überwachung und Flottenverwaltung läuft über NM Monitor und sein [Swarm](./swarm.md)-Menü.

## NM Monitor öffnen

1. Verbinden Sie Ihr Telefon oder Ihren PC mit dem **selben WiFi** wie der Miner.
2. Finden Sie die IP des Miners — am einfachsten über die **Miner-Seite** auf dem Gerätebildschirm (die IP wird in der Statusleiste angezeigt). Alternativ schlagen Sie sie in der DHCP-Tabelle Ihres Routers nach.
3. Öffnen Sie `http://<miner-ip>/` in **Chrome, Edge, Safari oder Firefox**. Kein Port zu merken — Port 80.
4. Die Startseite lädt automatisch.

:::tip
Setzen Sie ein Lesezeichen auf `http://<miner-hostname>/` (z. B. `http://nm-cyd-c5-ab12cd/`) — die meisten Heimrouter lassen Sie den Miner auch über den Hostnamen erreichen.
:::

## Was Sie in NM Monitor tun können

| Bereich              | Zweck                                                          |
| -------------------- | ---------------------------------------------------------------- |
| **Dashboard**        | Live-Hashrate, akzeptierte / abgelehnte Shares, Pool-Diff, Betriebszeit, RSSI, freier Heap, Temperatur (wo unterstützt). |
| **Swarm**            | LAN-weite Aggregation: jeden NMMiner im selben WiFi sehen, Hashrate summieren, einen bestimmten Miner anpingen, um ihn blinken zu lassen. Siehe [Swarm](./swarm.md). |
| **Network**          | Hostname, WiFi-SSID, WiFi-Passwort ändern.                       |
| **Mining**           | Primäre / Fallback-Pool-URL, Wallet-Adresse, Pool-Passwort.      |
| **Time**             | Zeitzone, Zeitformat (12 / 24 h), Datumsformat.                  |
| **Preferences**      | Bildschirmhelligkeit, Rotation, LED aktivieren, Bildschirmschoner-Timeout, Bildschirmschoner-Modus (Bild / Schwarz), [Ladder](./ladder.md)-Opt-in. |
| **Market**           | Hauptcoin und die auf der Preis-Seite angezeigte Watchlist auswählen.   |
| **Weather**          | Stadt / Breite / Länge und die von der Wetter-Seite verwendeten Einheiten festlegen. |
| **Screensaver**      | Benutzerdefinierte PNGs hochladen, die im Browser konvertiert und an den Miner übertragen werden. |
| **System**           | Firmware-Version, Board, freier Heap, **Restart**-Schaltfläche.          |
| **API Doc**          | Live-HTTP-API-Referenz (auch unter `/api-doc` veröffentlicht).          |

## Überall in Ihrem LAN lesen

NM Monitor setzt `Access-Control-Allow-Origin: *` auf jeden API-Endpunkt. Das bedeutet, eine von einem beliebigen Origin bereitgestellte Browserseite kann den Status des Miners lesen — nützlich für den Bau eigener Dashboards. Die vollständige Endpunktmenge ist in [API-Referenz](../api/overview.md) dokumentiert.
