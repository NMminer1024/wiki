---
sidebar_position: 2
title: Bildschirmseiten
---

# Bildschirmseiten

Boards mit einem Display durchlaufen eine kleine Anzahl von Seiten. Wechseln Sie mit der in [Tasten & Touch](./buttons.md) definierten Geste — Tippen, Doppelklick oder Wischen, je nach Hardware.

NMMiner liefert Layouts für die folgenden nativen Größen aus:

```
128x64    128x128    160x80     240x135
240x240   320x170    320x172    320x240
480x320   536x240
```

## Seiten

| Reihenfolge | Seite       | Zweck                                                                |
| ----- | ---------- | ---------------------------------------------------------------------- |
| 1     | **Loading**| Splash + Boot-Status, Firmware-Version, Netzwerk-Handshake.             |
| 2     | **Config** | Wird im AP-Modus angezeigt — QR / IP / SSID, um das Captive-Portal zu erreichen.    |
| 3     | **Miner**  | Live-Hashrate, **Sitzungs-Beste**- und **Allzeit-Beste**-Schwierigkeit, akzeptierte / abgelehnte Shares, Pool-URL, Betriebszeit. Die primäre „Arbeits"-Seite. |
| 4     | **Clock**  | Große Uhr + Datum, mit BTC-Preis-Ticker, der bei Gewinnen grün und bei Verlusten rot wird. Wählbares 12-/24-h-Zeitformat, konfigurierbares Datumsformat. |
| 5     | **Price**  | Zwei Modi:<br/>• **K-Line** — Candlestick-Diagramm Ihrer Hauptcoin, konfigurierbares Intervall (`15m`, `1h`, `4h`, `1d`, …).<br/>• **Wall** — Multi-Coin-Watchlist-Ansicht (bis zu 20 Paare). |
| 6     | **Weather**| Aktuelle Bedingungen + AQI + 3-Tage-Vorhersage + Sonnenaufgang/-untergang. Wählbare Einheiten für Temperatur (°C / °F), Windgeschwindigkeit (km/h / mph / m/s) und Höhenmesser (Druck / Luftfeuchtigkeit). |
| 7     | **Ladder** | **Opt-in**-globale Top-10-Bestenliste, sortiert nach bester je erzeugter Share-Schwierigkeit. Wallets werden aus Datenschutzgründen als `erste4…letzte4` angezeigt. Standardmäßig deaktiviert. Dieselben Daten werden auch im Web unter [ladder.nmminer.com](https://ladder.nmminer.com/) veröffentlicht — siehe [Ladder](./ladder.md). |

:::info
Die Seitenreihenfolge ist auf allen Boards identisch; kleine / OLED-Bildschirme überspringen Seiten, die nicht passen. NMMiner merkt sich die Seite, auf der Sie waren, und setzt dort nach einem Neustart fort (seit v1.8.20).
:::

## Bildschirmschoner

Wenn Sie den Miner lange genug im Leerlauf lassen, wechselt er in einen Bildschirmschoner:

- **Bildmodus** — Diashow benutzerdefinierter, über NM Monitor hochgeladener Bilder.
- **Black-Modus** — schaltet die Hintergrundbeleuchtung aus (oder OLED-Kontrast auf Minimum) für den niedrigsten Stromverbrauch und **die absolute Spitzenhashrate**.

Weck-Gesten: Einfacher Klick auf `BOOT` (oder `USER`) oder Tippen auf einen Touchscreen. Details: [Bildschirmschoner](./screen-saver.md).
