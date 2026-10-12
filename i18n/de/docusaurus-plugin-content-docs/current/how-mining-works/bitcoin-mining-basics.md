---
sidebar_position: 1
title: Bitcoin Mining Grundlagen
---

# Bitcoin Mining Grundlagen

Bevor wir uns ansehen, wie NMMiner teilnimmt, hier das **Ein-Bildschirm-Denkmodell** des Bitcoin-Minings.

## Die Aufgabe

Bitcoin-Miner wetteifern darum, eine Zahl zu finden — einen **Nonce** — die, kombiniert mit dem Rest des Block-Headers und **zweimal** durch die SHA-256-Hashfunktion geschickt (auch **SHA-256d** genannt), eine Ausgabe erzeugt, die *kleiner* ist als ein vom Netzwerk gesetzter Zielwert.

Das ist alles. Die gesamte Branche ist ein einziges Suchproblem:

> *Finden Sie einen 32-Bit-Wert, sodass `sha256(sha256(header_mit_diesem_wert))` kleiner ist als das Netzwerkziel.*

## Schwierigkeit, einfach erklärt

- **Netzwerk-Schwierigkeit** — wie schwer es das *Netzwerk* jedem macht, den nächsten Block zu gewinnen. Heute ist dies astronomisch hoch; Sie bräuchten ein ganzes Lager voller ASICs, um in vernünftiger Zeit einen Block zu landen.
- **Pool-Schwierigkeit** — wie schwer der *Pool* Sie suchen lässt. Pools setzen dies viel niedriger, damit kleine Miner **Shares** produzieren (Beweis, dass Sie wirklich suchen).
- **Share** — ein Hash-Ergebnis, das die Pool-Schwierigkeit erreicht (aber nicht unbedingt die Netzwerk-Schwierigkeit). Pools schreiben Ihnen Shares gut.

Die NMMiner-Hashrate liegt im Bereich von **Hunderten von KH/s**, daher spricht es mit Pools, die die Share-Schwierigkeit sehr niedrig setzen — oft ein Bruchteil von 1.

## Mining-Auszahlung, einfach erklärt

Wenn ein Pool einen gewinnenden Hash findet (über alle seine verbundenen Miner), beansprucht er die Block-Belohnung und verteilt sie gemäß der Share-Zahlen jedes Teilnehmers. Kleine Miner erhalten kleine Auszahlungen, aber sie erhalten sie *direkt auf ihre Wallet* bei der Art von Pool, mit der NMMiner sich verbindet.

## DigiByte (DGB) funktioniert genauso

DGB verwendet ebenfalls SHA-256d, daher ist die Mathematik identisch — nur die Netzwerkparameter und Pools unterscheiden sich. NMMiner unterstützt sowohl BTC als auch DGB, ohne die Firmware zu ändern.

## Was NMMiner tut

NMMiner:

1. Verbindet sich mit einem von Ihnen konfigurierten Stratum-Pool (standardmäßig NMMiners eigener SoloBTC-Pool).
2. Erhält einen Strom von **Jobs** vom Pool.
3. Durchsucht den Nonce-Raum so schnell, wie der Chip es erlaubt.
4. Sendet gültige Shares an den Pool zurück.
5. Zeigt Ihnen die Rate, die letzte Share und Ihr Sitzungs-/Allzeit-Bestes.

Die nächsten beiden Seiten erklären das Protokoll und den Datenfluss im Miner.
