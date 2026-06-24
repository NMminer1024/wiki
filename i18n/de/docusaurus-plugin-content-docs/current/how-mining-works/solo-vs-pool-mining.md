---
sidebar_position: 4
title: Solo vs. Pool-Mining
---

# Solo vs. Pool-Mining

Das Verständnis des Unterschieds zwischen Solo- und Pool-Mining ist entscheidend, um realistische Erwartungen zu setzen.

## Die Lotterie-Analogie

Bitcoin-Mining ähnelt einer **Lotterie** — jeder Hash ist ein Los:

- **Netzwerk-Schwierigkeit** = die Gewinnzahlen (extrem enges Ziel)
- **Share-Schwierigkeit** = „Beinahe-gewinne" (viel einfacheres Ziel)
- **Block-Belohnung** = der Jackpot (3,125 BTC)

| Mining-Art                     | Was passiert mit der Belohnung?                                 |
| ------------------------------ | --------------------------------------------------------------- |
| **Solo-Mining (echtes solo)**   | Sie erhalten 100 %, wenn Sie einen Block finden.                 |
| **Pool-Mining (geteilter Pool)**| Wird unter allen anteilig geteilt.                              |
| **Solo-Pool-Mining**            | Die Belohnung wird **nicht geteilt**. Der Pool stellt nur die Infrastruktur. |

## Drei Setups im Vergleich

| Setup              | Pool-Typ           | Belohnungsteilung | Wer betreibt den Stratum-Server? |
| ------------------ | ------------------ | ----------------- | -------------------------------- |
| Wahres Solo        | Keiner (direkt zum Netzwerk) | 100 % an Finder   | Sie müssten einen Full Node betreiben |
| Solo-Pool          | Solo-Pool          | 100 % an Finder   | Pool-Betreiber                   |
| Geteilter Pool     | PPLNS / FPPS usw.  | Unter allen geteilt| Pool-Betreiber                  |

## Die eigentliche Frage

Wenn Leute fragen: „Soll ich solo oder im Pool minen?", stellen sie eigentlich zwei verschiedene Fragen gleichzeitig:

1. **Belohnungsfrage**: Soll die Belohnung geteilt werden oder nicht?
   - **Solo** = Belohnung nicht geteilt (100 % an den Blockfinder)
   - **Pool** = Belohnung proportional geteilt (stetiges Einkommen)

2. **Infrastrukturfrage**: Wer betreibt den Stratum-Server?
   - **Eigenbetrieben** = Sie betreiben einen Full Node + Stratum-Server
   - **Gehostet** = Ein Drittanbieter-Pool betreibt die Server

Die NMMiner-Standardeinstellung verwendet einen **gehosteten Solo-Pool** — Sie erhalten die volle Belohnung, wenn Sie einen Block finden, **ohne** eigene Infrastruktur betreiben zu müssen.

## Warum sich überhaupt mit einem Pool verbinden, wenn man solo ist?

Ein Mining-Pool bietet drei Dinge:

| Dienst              | Warum Sie ihn brauchen                                           |
| ------------------- | ---------------------------------------------------------------- |
| **Block-Vorlagen**  | Das Zusammenstellen eines gültigen Blocks erfordert einen Full Node |
| **Stratum-Endpunkt**| Der ESP32 spricht Stratum — er kann sich nicht direkt mit dem Bitcoin-P2P-Netzwerk verbinden |
| **Share-Verfolgung**| Damit Sie sehen können, was Ihr Miner tatsächlich tut            |

„Solo-Pool" bedeutet: Sie erhalten **Dienste 1-3**, aber wenn ein Block gefunden wird, geht die Belohnung an **Sie allein** — es gibt keine Aufteilung.

## Für Sie immer noch eine Lotterie

Selbst mit einem Solo-Pool ist die Wahrscheinlichkeit, einen Block zu finden, dieselbe wie beim echten Solo-Mining:

- 1 MH/s Miner bei 110T Schwierigkeit = **~12.700 Jahre** erwartete Zeit bis zum Finden eines Blocks.
- Sie könnten morgen Glück haben — oder nie.
- Aus diesem Grund behandeln die meisten NMMiner-Benutzer es als **Hobby-Lotterie**, nicht als Einkommensquelle.

## NMMiner-Standardeinstellung

Ausgeliefert verbindet sich NMMiner mit **`solobtc.nmminer.com:3333`** — einem Solo-Pool. Sie erhalten 100 % der Belohnung.

Um zu einem geteilten Pool zu wechseln:
1. Suchen Sie eine geteilte Pool-URL (siehe [Pool-Liste](../reference/pool-list.md))
2. Aktualisieren Sie Ihre Pool-Einstellungen im Captive-Portal oder [NM Monitor](../user-guide/nm-monitor.md)

## Entscheidungstabelle

| Sie möchten…                              | Setup                                                         |
| ----------------------------------------- | ------------------------------------------------------------- |
| Volle Belohnung, keine Infrastruktur      | Solo-Pool (NMMiner-Standard)                                  |
| Volle Belohnung, volle Kontrolle          | Wahres Solo (eigenen Node betreiben — nicht für ESP32 praktikabel) |
| Vorhersehbares Einkommen (klein aber stetig) | Geteilter Pool                                             |
| Beides ausprobieren                       | Primärpool = Solo, Sekundärpool = Geteilt (automatisches Failover) |
