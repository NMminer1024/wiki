---
sidebar_position: 4
title: Fehlerbehebung
---

# Fehlerbehebung

## Board erscheint nicht im Flash-Tool

- **Stecken Sie das USB-Kabel ein paar Mal neu ein** — die WebSerial-Auswahl kann Geräte beim ersten Hot-Plug übersehen, besonders direkt nach der Treiberinstallation.
- Verwenden Sie ein **Daten**-USB-Kabel (nicht nur Strom).
- Versuchen Sie einen anderen USB-Port; einige Hubs leiten CDC nicht durch.
- Installieren Sie unter Windows den **CP210x**- oder **CH340**-Treiber, je nach Bridge-Chip Ihres Boards.
- Halten Sie `BOOT` gedrückt, während Sie `RESET` drücken, um den Download-Modus zu erzwingen.

## Hängt auf „Loading"

- Bestätigen Sie, dass das WiFi **2,4 GHz** ist (die meisten ESP32-Chips unterstützen kein 5 GHz).
- Warten Sie 15 s. Wenn es sich nicht verbinden kann, sollte es automatisch in den AP-Modus zurückfallen.

## AP `nmap-2.4g` nicht sichtbar

- Schalten Sie das Board aus und wieder ein.
- Halten Sie die Konfigurationstaste 5 s lang gedrückt (siehe [Tasten](../user-guide/buttons.md)).

## Captive-Portal wird angezeigt, aber Speichern funktioniert nicht

- Warten Sie das volle 15-s-Fenster ab — das Speicher-Flush ist absichtlich langsam.
- Wenn die Seite nie zurückkehrt, schalten Sie aus und wieder ein und versuchen Sie es erneut.

## Pool hängt auf „Connecting"

- Überprüfen Sie Pool-URL und Port.
- Versuchen Sie `stratum+tcp://` statt `stratum+ssl://` (oder umgekehrt).
- Versuchen Sie den [Fallback-Pool](../user-guide/pools.md).

## Hashrate liegt deutlich unter dem Datenblatt

- Die **UI-Aktualisierung**-Einstellung ist auf kleinen CPUs aufwendig. Versuchen Sie, sie zu senken (höherer Wert im Formular).
- Verwenden Sie den **Black**-Bildschirmschoner, um die Display-Neuzeichnungskosten vollständig zu entfernen.
- Stellen Sie sicher, dass Ihre Stromversorgung 500 mA liefern kann — ein wackeliger USB-Port verursacht Brownouts.

## Alle Shares werden abgelehnt

- Die Pool-Diff ist zu hoch eingestellt. Wechseln Sie zu NMMiners offiziellem [SoloBTC](https://solobtc.nmminer.com)-Pool (oder dem offiziellen Fallback-Pool).
- Überprüfen Sie das Wallet-Feld — viele Pools lehnen falsch formatierte Wallet-Adressen ab. Gültige Bitcoin-Adressformate finden Sie unter [FAQ](./faq).

## NM Monitor nicht erreichbar

- Stellen Sie sicher, dass Sie und der Miner sich im **selben WiFi** befinden.
- Prüfen Sie die Miner-Seite des Miners auf seine IP — versuchen Sie diese direkt.
- Deaktivieren Sie jegliches **VPN** auf Ihrem Telefon/PC; einige VPNs blockieren LAN-Verkehr.
- Wenn Ihr Router **AP-Isolation** verwendet, können Geräte einander nicht erreichen — deaktivieren Sie diesen Modus.

## Das Swarm-Menü zeigt weniger Miner als ich habe

- Klicken Sie auf **Re-scan** (oder laden Sie die Seite neu).
- LAN-Scans umfassen nur ein /24-Subnetz. Miner in einem anderen Subnetz werden nicht angezeigt.
- Stellen Sie sicher, dass der fehlende Miner sich auf der **Miner-Seite** seines Bildschirms befindet — der Discovery-Thread läuft nur auf dieser Seite.
