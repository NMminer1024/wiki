---
sidebar_position: 2
title: Konfigurationsportal
---

# Konfigurationsportal

Die webbasierte Einrichtungsseite, die erscheint, wenn Sie sich mit dem WLAN-Hotspot des Miners verbinden.

## Zugriff auf das Portal

### Erstmalige Einrichtung
1. Nach dem Flashen erstellt der Miner einen WLAN-Hotspot: **`NMMiner-Setup`**
2. Verbinden Sie Ihr Gerät mit diesem WLAN
3. Ein Captive-Portal öffnet sich automatisch, oder navigieren Sie zu `http://192.168.4.1`

### Nach der ersten Konfiguration
1. Stellen Sie sicher, dass Ihr Gerät im **selben WLAN-Netzwerk** wie der Miner ist
2. Öffnen Sie einen Browser und gehen Sie zu `http://<miner-ip>`
3. Alternativ verwenden Sie den Hostnamen: `http://<hostname>.local`

## Portal-Seiten

### WLAN-Konfiguration
- Scannt nach verfügbaren 2,4 GHz WLAN-Netzwerken
- Speichert SSID und Passwort
- Optional: Legen Sie einen benutzerdefinierten Hostnamen fest

### Wallet-Konfiguration
- Legen Sie Ihre Bitcoin-Wallet-Adresse fest
- Format: `bc1q...` (SegWit) oder `1...` (Legacy) oder `3...` (SegWit wrapped)
- Optional: Fügen Sie einen Worker-Namen mit `.workername` hinzu

### Pool-Konfiguration
- Legen Sie primäre und sekundäre Stratum-Pool-URLs fest
- Der Miner versucht zuerst den primären Pool, Fallback auf den sekundären
- Format: `stratum+tcp://pool-url:port`

### Display-Einstellungen
- Helligkeit (1-100)
- Bildschirmrotation (0, 90, 180, 270)
- Bildschirmschoner-Timeout und -Modus

### Erweiterte Einstellungen
- Zeitzonen-Offset
- Zeitformat (12h/24h)
- Datumsformat
- Marktpräferenzen (Hauptcoin, Watchlist)

:::tip
Das Portal funktioniert auf jedem Gerät mit einem Browser — Telefon, Tablet, Laptop. Keine App-Installation erforderlich.
:::
