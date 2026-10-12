---
sidebar_position: 3
title: FAQ
---

# FAQ

## Wird NMMiner jemals allein einen Bitcoin-Block finden?

Mathematisch ja — mit derselben Wahrscheinlichkeit wie ein Lotterielos. Praktisch nein. Es geht um den **Spaß** (und die Unterstützung des Netzwerks), nicht um die Auszahlung.

## Wie viel Strom verbraucht es?

Die meisten unterstützten Boards verbrauchen unter 1 W. Selbst bei $0,30/kWh sind das deutlich unter 30 Cent pro Monat.

## Welchen Pool verwendet NMMiner standardmäßig?

NMMiner wird vorkonfiguriert mit seinem eigenen SoloBTC-Pool ausgeliefert:

- Primär: `stratum+tcp://solobtc.nmminer.com:3333`
- Fallback: `stratum+tcp://au.solobtc.nmminer.com:3333`

Sie **müssen nur die Wallet-Adresse** auf Ihre eigene BTC-Adresse ändern. Die Pool-URLs sind normalerweise so in Ordnung.

## Kann ich einen anderen Pool verwenden?

Ja — alles, was Stratum v1 spricht, funktioniert. Siehe [Pool-Liste](./pool-list.md) für Community-SoloBTC- und DGB-Optionen. Beachten Sie, dass große kommerzielle Pools mit einer hohen Mindest-Share-Schwierigkeit jede Share ablehnen — bleiben Sie bei NMMiners offiziellen [SoloBTC](https://solobtc.nmminer.com)-Pools oder Solo-artigen Endpunkten.

## Kann NMMiner etwas anderes als Bitcoin minen?

Ja — **DigiByte (DGB)** wird ebenfalls unterstützt. DGB verwendet denselben SHA-256d-Algorithmus, daher funktioniert es mit derselben Firmware. Richten Sie die Pool-URL einfach auf einen DGB-Pool und verwenden Sie eine DGB-Wallet-Adresse.

## Brauche ich eine Wallet auf dem Gerät?

Nein. Sie brauchen nur eine **Auszahlungsadresse**. Der Pool sendet Belohnungen direkt an die von Ihnen konfigurierte BTC-/DGB-Adresse.

## Mein Bildschirm wacht alle paar Sekunden von selbst auf.

Das ist harmlose Hintergrund-Aktualisierung. Verwenden Sie den **Black**-Bildschirmschoner-Modus, wenn Sie null Display-Aktivität (und maximale Hashrate) möchten.

## Kann ich zwei Miner im selben WiFi betreiben?

Ja. Das **Swarm**-Menü von NM Monitor erkennt automatisch jeden NMMiner im selben LAN — bis zu 255 Geräte pro /24-Subnetz. Siehe [Swarm](../user-guide/swarm.md).

## Mein Miner hängt auf der Lade-Seite fest / verbindet sich nie mit dem Pool

Gehen Sie diese Checkliste durch:

1. **WiFi muss 2,4 GHz sein.** Die meisten ESP32-Chips unterstützen kein 5 GHz. Wenn Ihr Heim-WiFi beide Bänder unter derselben SSID hat, trennen Sie sie vorübergehend oder verbinden Sie sich explizit mit dem 2,4-GHz-Band.
2. **Überprüfen Sie die Wallet-Adresse.** Ein Tippfehler hier bedeutet, dass der Pool den Worker ablehnt. Eine gültige Bitcoin-Adresse beginnt mit:
   - `bc1q...` — Native SegWit (heute am häufigsten)
   - `bc1p...` — Taproot
   - `1...`    — Legacy P2PKH
   - `3...`    — P2SH (Multisig / Wrapped SegWit)

   Alles andere ist **keine** gültige BTC-Adresse — prüfen Sie, ob Sie die vollständige Zeichenfolge kopiert haben.
3. **Überprüfen Sie die Pool-URL.** Ab Werk ist NMMiner mit `stratum+tcp://solobtc.nmminer.com:3333` vorkonfiguriert und funktioniert ohne Änderung. Wenn Sie Pools gewechselt haben, muss die URL wie `stratum+tcp://host:port` aussehen (oder `stratum+ssl://host:port` für TLS). Siehe [Pool-Liste](./pool-list.md) für bekannte gute Endpunkte.
4. **Pool-Schwierigkeit.** Große kommerzielle Pools, die eine hohe Mindest-Share-Schwierigkeit vorschreiben, lehnen jede NMMiner-Share ab. Bleiben Sie bei NMMiners offiziellen [SoloBTC](https://solobtc.nmminer.com)-Pools.
5. **Stromversorgung.** Ein wackeliger USB-Port kann Brownouts verursachen, die wie ein Hänger aussehen. Versuchen Sie ein anderes Kabel + eine 5-V/1-A-Stromquelle.

Wenn nichts davon hilft, sollte der Miner nach ~15 s in den AP-Modus zurückfallen — verbinden Sie sich erneut mit `nmap-2.4g` und prüfen Sie die Werte erneut.

## Gibt es eine öffentliche API?

Ja — jedes Gerät stellt eine dokumentierte HTTP-API auf Port 80 bereit. Siehe [API-Referenz](../api/overview.md).

## Ist der Quellcode verfügbar?

Die NMMiner-Firmware ist Closed-Source. Die HTTP-API auf jedem Gerät ist die unterstützte Integrationsfläche. Das begleitende CLI-Flash-Tool und die Web-Frontends des SoloBTC-Pools sind öffentlich.

## Was macht die Ladder-Seite?

Sie ist eine **Opt-in**-globale Top-10-Bestenliste, sortiert nach der besten je erzeugten Share-Schwierigkeit teilnehmender Miner. Wallets werden aus Datenschutzgründen im Format `erste4…letzte4` angezeigt. Standardmäßig deaktiviert — aktivieren Sie sie im **Preferences**-Bereich von NM Monitor. Die öffentliche Web-Ansicht finden Sie unter [ladder.nmminer.com](https://ladder.nmminer.com/) — die ganze Geschichte unter [Ladder](../user-guide/ladder.md).
