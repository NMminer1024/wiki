---
sidebar_position: 1
title: FAQ
---

# Häufig gestellte Fragen

## Allgemein

### Was ist NMMiner?
NMMiner ist eine Hochleistungs-Firmware, die ESP32-Entwicklungsboards in Bitcoin-Stratum-Miner verwandelt.

### Ist NMMiner kostenlos?
Ja — die gesamte Kern-Mining-Funktionalität ist kostenlos. Eine optionale Lizenz schaltet höhere Taktraten und erweiterte Funktionen frei.

### Welche Coins kann ich minen?
Bitcoin (BTC) über SHA256. DigiByte (DGB) wird ebenfalls unterstützt, mit demselben SHA256-Algorithmus.

## Hardware

### Welches Board sollte ich kaufen?
ESP32-D0 DevKitC für die höchste Hashrate zum niedrigsten Preis (~$3-5). Siehe [Hardware-Übersicht](../hardware/overview.md).

### Wie viel Strom verbraucht es?
Etwa 2,5 W für ein ESP32-D0-Board bei Volllast. Das sind ~1,8 kWh pro Monat — in den meisten Regionen nur ein paar Cent.

### Kann ich mehrere Boards betreiben?
Ja! Viele Benutzer betreiben 10-50+ Boards. Verwenden Sie [Swarm](../user-guide/swarm.md), um sie alle zu verwalten.

## Mining

### Wie viel BTC werde ich verdienen?
Bei 1 MH/s und einer Netzwerkschwierigkeit von 110T beträgt die erwartete Zeit, um einen Block (3,125 BTC) zu finden, **~12.700 Jahre**. Behandeln Sie dies als Lotterie, nicht als Einkommensquelle.

### Kann ich mich einem normalen (geteilten) Pool anschließen?
Ja — Sie können die Pool-URL in den Einstellungen auf jeden Stratum-Pool ändern. Siehe [Pools-Konfiguration](../user-guide/pools.md) und [Pool-Liste](./pool-list.md).

### Was ist der Unterschied zwischen Solo- und Pool-Mining?
Siehe [Solo vs. Pool-Mining](../how-mining-works/solo-vs-pool-mining.md) für einen detaillierten Vergleich.

### Meine Hashrate scheint niedrig
Häufige Ursachen:
1. **Keine Lizenz** — die Standardtaktung ist auf ~650 KH/s (D0) begrenzt
2. **Schwaches WLAN-Signal** — Stratum benötigt stabiles WiFi
3. **Stromprobleme** — versuchen Sie einen anderen USB-Anschluss oder ein anderes Kabel
4. **Überhitzung** — ESP32-D0-Boards können unter Last heiß werden

## Software

### Wie aktualisiere ich die Firmware?
Verwenden Sie das [Web Flash Tool](../getting-started/flash-firmware.md) oder über die API. Siehe [Firmware-Update](../user-guide/firmware-update.md).

### Kann ich eigene Screensaver verwenden?
Ja — laden Sie benutzerdefinierte Bilder über den [NM Monitor](../user-guide/nm-monitor.md) oder die [Screensaver-API](../api/screensaver-upload.md) hoch.

### Gibt es eine API?
Ja — eine vollständige HTTP-API ist dokumentiert unter [API-Übersicht](../api/overview.md).

## Community

### Wie erhalte ich Hilfe?
- 📧 **E-Mail**: nmminer1024@gmail.com
- 💬 **Telegram**: [t.me/NMMiner](https://t.me/NMMiner)
- 🌐 **Website**: [www.nmminer.com](https://www.nmminer.com)
