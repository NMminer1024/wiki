---
sidebar_position: 9
title: Bildschirmseiten
---

# Bildschirmseiten

Detaillierte Beschreibung jeder Seite, die auf dem Gerätedisplay angezeigt wird.

## Miner-Seite

Die Standardseite — zeigt Live-Mining-Statistiken.

| Element                | Beschreibung                                                  |
| ---------------------- | ------------------------------------------------------------- |
| Hashrate               | Aktuelle Hashrate in KH/s, MH/s oder GH/s (automatische Skalierung) |
| Akzeptierte Shares     | Vom Pool akzeptierte Gesamtshares                             |
| Abgelehnte Shares      | Vom Pool abgelehnte Gesamtshares (Ziel >5 %)                  |
| Pool-URL               | Aktuelle Stratum-Verbindung (primär oder sekundär)            |
| Beste Share-Diff       | Höchste Share-Difficulty dieser Sitzung                      |
| Beste Diff aller Zeiten| Höchste jemals aufgezeichnete Share-Difficulty                |
| Betriebszeit           | Zeit seit dem letzten Neustart                                |

## Preis-Seite

Kryptowährungspreise und Diagramme.

| Modus    | Beschreibung                                                    |
| -------- | --------------------------------------------------------------- |
| **K-Line** | Candlestick-Diagramm für die Hauptcoin. Intervall: 15m/1h/4h/1d |
| **Liste**  | Einfache Preisliste der Watchlist-Coins mit 24h-Änderung      |

Konfigurieren Sie den Modus in **Einstellungen → Markt**.

## Wetterseite

Aktuelle Wetterbedingungen (erfordert Internetzugang).

| Element           | Beschreibung                                |
| ----------------- | ------------------------------------------- |
| Temperatur        | Aktuelle Temperatur (Celsius/Fahrenheit)    |
| Bedingungen       | Sonnig, bewölkt, Regen usw.                 |
| Luftqualität      | AQI-Wert (falls verfügbar)                  |
| Wind              | Windgeschwindigkeit und -richtung           |
| Alternative Anzeige| Luftdruck oder Luftfeuchtigkeit             |

Konfigurieren Sie den Standort in **Einstellungen → Wetter**.

## System-Seite

Geräteinformationen.

| Element        | Beschreibung                            |
| -------------- | --------------------------------------- |
| Firmware       | Aktuelle Firmware-Version               |
| IP-Adresse     | LAN-IP-Adresse des Geräts               |
| Hostname       | mDNS-Hostname                           |
| MAC-Adresse    | Hardware-MAC-Adresse                    |
| Chip           | ESP32-Chip-Modell (D0, S3, C3, C5)      |
| Speicher       | Belegter / freier Flash-Speicher        |
| Lizenz         | Lizenzstatus (aktiviert / nicht lizenziert) |

## Anpassung

Sie können steuern, welche Seiten erscheinen und in welcher Reihenfolge:

- Deaktivieren Sie Seiten, die Sie nicht benötigen (über API — zukünftige UI-Funktion).
- Legen Sie die Seitendreh-Timeout fest.
- Tasten konfigurieren Seitenwechsel.

Siehe [Tasten](./buttons.md) für Navigationssteuerung.
