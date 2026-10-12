---
sidebar_position: 1
title: Schnellstart
---

# Schnellstart

Bringen Sie ein frisches ESP32-Board in **etwa 10 Minuten** zum Hashing.

## Was Sie benötigen

- Ein [offiziell unterstütztes Board](../hardware/overview.md) (ESP32-D0 / S3 / C3 / C5).
- Ein USB-Kabel und einen PC mit **Chrome** oder **Edge** (für das browserbasierte Flash-Tool).
- Ein 2,4-GHz-WiFi-Netzwerk.

Sie **benötigen keine Wallet**, um loszulegen — NMMiner wird mit unserem eigenen SoloBTC-Pool ([solobtc.nmminer.com](https://solobtc.nmminer.com)) und einer temporären Demo-Wallet vorkonfiguriert ausgeliefert. Ersetzen Sie die Wallet durch Ihre eigene BTC-Adresse, wann immer Sie bereit sind.

## Die fünf Schritte

1. **Firmware flashen** — öffnen Sie [flash.nmminer.com](https://flash.nmminer.com), wählen Sie Ihr Board und klicken Sie auf *Install*. Siehe [Firmware flashen](./flash-firmware.md).
2. **Lizenz erwerben & aktivieren** — das Flash-Tool führt Sie durch den Lizenzkauf; fügen Sie die Lizenz-Zeichenfolge anschließend in das Aktivierungsfeld ein. Siehe [Lizenz aktivieren](./activate-licence.md).
3. **Verbinden Sie sich mit dem AP `nmap-2.4g`** mit Ihrem Telefon. Das Captive-Portal öffnet sich automatisch. PCs: Besuchen Sie `http://192.168.4.1` manuell.
4. **Konfigurieren** Sie WiFi (obligatorisch) und Wallet (empfohlen) auf der Webseite und drücken Sie dann **Speichern**. Der Miner startet in ~15 Sekunden neu. Siehe [Erste Konfiguration](./first-configuration.md).
5. **Beobachten Sie das Mining** — die Miner-Seite auf dem Bildschirm zeigt Live-Hashrate, akzeptierte Shares und Pool-Diff. Besuchen Sie [solobtc.nmminer.com](https://solobtc.nmminer.com), um Ihren Worker im Pool-Dashboard erscheinen zu sehen.

:::tip
Beim ersten Einschalten versucht der Miner 15 Sekunden lang, sich erneut mit dem zuletzt bekannten WiFi zu verbinden. Schlägt dies fehl, wechselt er automatisch in den AP-/Konfigurationsmodus zurück.
:::
