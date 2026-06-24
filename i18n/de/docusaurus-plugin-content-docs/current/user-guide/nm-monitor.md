---
sidebar_position: 6
title: NM Monitor
---

# NM Monitor

Die webbasierte Verwaltungsoberfläche — läuft direkt auf Ihrem Miner.

## Zugriff auf NM Monitor

1. Stellen Sie sicher, dass sich Ihr Gerät im **selben Netzwerk** wie der Miner befindet
2. Öffnen Sie einen Browser und gehen Sie zu `http://<miner-ip>`
3. Alternativ verwenden Sie den Hostnamen: `http://nm-xxxxxx.local`

:::tip
Sie finden die IP-Adresse des Miners auf der **System**-Seite des Gerätedisplays.
:::

## Funktionen

### Dashboard
- Live-Hashrate-Diagramm (Aktualisierung alle 2 s)
- Akzeptierte/abgelehnte Share-Zähler
- Beste Share-Difficulty (Sitzung & aller Zeiten)
- Pool-Verbindungsstatus
- Betriebszeit

### Einstellungen
- **Netzwerk**: Hostname, WLAN-SSID/-Passwort
- **Mining**: Pool-URLs, Wallet-Adressen, Worker-Passwörter
- **Anzeige**: Helligkeit, Rotation, Bildschirmschoner, LED
- **Zeit**: Zeitzone, Zeit-/Datumsformat
- **Markt**: Hauptcoin, Watchlist, Diagrammoptionen
- **Wetter**: Stadt, Temperatur-/Geschwindigkeitseinheiten
- **Lizenz**: Lizenzschlüssel aktivieren

### Swarm
Das **Swarm-Menü** (linke Seitenleiste) zeigt alle NMMiner-Geräte in Ihrem lokalen Netzwerk:

- Gesamte LAN-Hashrate
- Individuelle Miner-Statistiken
- Schnelles Umschalten zwischen Minern
- Massenoperationen (Einstellungen übertragen, Neustart aller)

Weitere Details finden Sie unter [Swarm](./swarm.md).

### Bildschirmschoner
- Laden Sie benutzerdefinierte Bilder hoch (PNG, JPG)
- Konvertiert automatisch in das `.ss`-Format des Geräts
- Verwalten Sie vorhandene Bildschirmschoner (löschen, neu anordnen)
- Vorschau vor dem Hochladen

Weitere Details finden Sie unter [Bildschirmschoner](./screen-saver.md).

## Funktionsweise

NM Monitor ist eine **Single-Page-Anwendung** (SPA), die direkt vom ESP32 bereitgestellt wird. Wenn Sie `http://<miner-ip>` öffnen:

1. Der ESP32 sendet die SPA-HTML/JS/CSS-Dateien
2. Die SPA läuft in Ihrem Browser
3. Alle API-Aufrufe gehen zurück zum ESP32 auf Port 80

Dies bedeutet:
- ✅ Keine Cloud-Abhängigkeit — funktioniert auch ohne Internet
- ✅ Keine Installation — nur ein Browser erforderlich
- ✅ Sicher — alles bleibt in Ihrem LAN
- ❌ Sie müssen sich im selben Netzwerk wie der Miner befinden
