---
sidebar_position: 4
title: Erste Konfiguration
---

# Erste Konfiguration

Auf einem frisch geflashten Board wechselt NMMiner in den **AP-/Konfigurationsmodus** und stellt eine Webseite bereit, auf der Sie WiFi, Pool, Wallet und Anzeigeoptionen festlegen.

## Felder

| Feld           | Standard                                                | Zweck                                                              |
| --------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| **WiFi SSID**   | `NMTech-2.4G`                                          | Name Ihres 2,4-GHz-Netzwerks.                                       |
| **WiFi-Passwort** | `NMMiner2048`                                        | WPA-/WPA2-Passwort.                                                 |
| **Pool-URL (primär)** | `stratum+tcp://solobtc.nmminer.com:3333`        | NMMiners eigener SoloBTC-Pool. Nur überschreiben, wenn wirklich nötig. |
| **Pool-URL (Fallback)** | `stratum+tcp://au.solobtc.nmminer.com:3333`    | NMMiners Asien-Pazifik-Fallback. Wird genutzt, wenn der primäre nicht erreichbar ist. |
| **Wallet-/Worker-Name** | Demo-Wallet vorausgefüllt                        | Ihre BTC-Auszahlungsadresse, optional gefolgt von `.workerName`. **Ändern Sie diese!** |
| **UI-Aktualisierung** | Board-spezifisch                                         | Niedriger = schnellere Bildschirmaktualisierung, etwas weniger Hashrate. Höher = maximale Hashrate, langsamere UI. |
| **Bildschirmhelligkeit** | 100 %                                           | 0–100 %.                                                              |
| **Zeitzone**  | `+8`                                                   | Float unterstützt (z. B. `8`, `5.5`, `-3.5`). Bereich: -13,5 ~ +13,5. |
| **Zeitformat**| 24 h                                                   | 12 / 24 Stunden.                                                     |
| **LED**        | Board-spezifisch                                         | On-Board-Status-LED aktivieren / deaktivieren.                       |

Wenn Sie **Speichern** drücken, benötigt der Miner 10–15 s, um in den Flash zu schreiben. **Setzen Sie nicht manuell zurück.** Er startet von selbst neu.

:::tip Legen Sie Ihre eigene Wallet fest
NMMiner ist vorkonfiguriert, um auf eine Demo-Adresse zu minen, damit das Board sofort „einfach funktioniert". Ersetzen Sie die Wallet durch Ihre eigene BTC-Adresse, bevor Sie ernsthaft loslegen — diese Demo-Adresse wird von jedem frischen Gerät geteilt.
:::

## Erneute Konfiguration erzwingen

Wenn Sie Einstellungen ändern müssen, nachdem der Miner bereits online ist:

- **Board mit einer Taste** → halten Sie `BOOT` lange gedrückt.
- **Board mit zwei Tasten** → halten Sie `USER` lange gedrückt.
- **Board mit Touchscreen** → halten Sie den Bildschirm 10 Sekunden lang gedrückt.

Der Miner startet in den AP-Modus neu und stellt das Captive-Portal erneut bereit. Detailliertes Verhalten: [Tasten](../user-guide/buttons.md).

## Live-Aktualisierungen ohne Neustart

Einige Einstellungen wirken **sofort** — kein erneutes Speichern und kein Neustart nötig:

- Bildschirmhelligkeit
- Bildschirmrotation
- LED an / aus
- Zeitzone
- Bildschirmschoner-Modus (Bild / Schwarz)

Sie können diese über [NM Monitor](../user-guide/nm-monitor.md) ändern und die Wirkung sofort sehen.
