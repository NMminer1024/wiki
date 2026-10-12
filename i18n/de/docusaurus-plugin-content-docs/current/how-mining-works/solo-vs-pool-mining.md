---
sidebar_position: 4
title: Solo vs. Pool-Mining
---

# Solo vs. Pool-Mining — Was ist das Richtige für Sie?

Wenn Sie neu im Mining sind, haben Sie wahrscheinlich schon zwei Begriffe gehört: **Solo-Mining** und **Pool-Mining**. Es sind zwei unterschiedliche Strategien, um Block-Belohnungen zu verdienen, und die richtige Wahl macht einen großen Unterschied. Lassen Sie uns sie einfach erklären.

---

## Die Lotterie-Analogie

Stellen Sie sich Bitcoin-Mining als eine riesige globale Lotterie vor, die etwa alle 10 Minuten einen Gewinner zieht.

- Der **Preis**: 3,125 BTC (die aktuelle Block-Belohnung) plus Transaktionsgebühren.
- Das **Los**: ein gültiger Hash, der die Netzwerk-Schwierigkeit erreicht.
- Die **Chancen**: proportional zu Ihrer Hashrate geteilt durch die gesamte Netzwerk-Hashrate.

Mit diesem Bild im Hinterkopf sehen Sie hier, wie sich die beiden Strategien unterscheiden.

---

## Solo-Mining — Lose allein kaufen

Sie minen allein. Ihr Miner spricht direkt mit einem vollständigen Bitcoin-Node (oder einem speziellen Solo-Mining-Pool, der Belohnungen nicht aufteilt). Sie suchen unabhängig nach Blöcken.

Wenn Ihr Miner einen gültigen Block findet, **erhalten Sie 100 % der Belohnung**. Keine Aufteilung, keine Pool-Gebühren.

**Klingt großartig, oder? Hier ist der Haken:**

> Mit einer typischen NMMiner-Hashrate (~Hunderte KH/s) wird die durchschnittliche Zeit, um einen Block im Bitcoin-Netzwerk zu finden, in **Jahrhunderten** gemessen. Sie spielen im Grunde eine Lotterie, bei der Sie vielleicht nie in Ihrem Leben gewinnen.

### Vorteile

- Sie behalten die **gesamte** Block-Belohnung (3,125+ BTC), wenn Sie einen Treffer landen.
- Vollständige Unabhängigkeit — kein Pool-Betreiber, dem Sie vertrauen müssen.
- Keine Pool-Gebühren.

### Nachteile

- **Extreme Varianz**: Sie könnten jahrelang minen und nichts verdienen.
- Keine Rückkopplungsschleife — Sie wissen nicht, ob Ihr Setup funktioniert, bis Sie (vielleicht) einen Block treffen.
- Erfordert massive Hashrate, um in großen Netzwerken praktikabel zu sein.

### Wer sollte solo minen?

- Großbetriebe mit genug Hashrate, um regelmäßig Blöcke zu treffen.
- Hobbyisten, die es als Lotterielos behandeln und nichts dagegen haben, null zu verdienen.

---

## Pool-Mining — einer Lotterie-Syndikat beitreten

Sie treten einer Gruppe von Minern bei. Alle arbeiten zusammen, und wenn **irgendjemand** im Pool einen Block findet, wird die Belohnung unter allen Teilnehmern aufgeteilt, basierend darauf, wie viel Arbeit jeder beigetragen hat (gemessen in **Shares**).

Statt Jahrhunderte auf einen Block zu warten, verdienen Sie kleine, **regelmäßige Auszahlungen** — manchmal täglich, manchmal stündlich.

### Wie Shares funktionieren

Der Pool setzt eine **Pool-Schwierigkeit**, die viel niedriger ist als die Netzwerk-Schwierigkeit. So kann selbst ein kleiner Miner wie NMMiner alle paar Sekunden oder Minuten gültige *Shares* einreichen. Diese Shares beweisen „Ich suche wirklich." Wenn ein Block gefunden wird, zählt der Pool die Shares aller, um die Auszahlungen zu berechnen.

### Vorteile

- **Vorhersehbares, regelmäßiges Einkommen** — Sie sehen sofort Ergebnisse.
- Funktioniert mit **jeder Hashrate**, egal wie klein.
- Sie erhalten Rückmeldung, dass Ihre Hardware korrekt funktioniert.
- Geringeres Risiko — Ihre Einnahmen glätten sich mit der Zeit.

### Nachteile

- Pool-Gebühren (normalerweise 0,5 %–3 % Ihrer Einnahmen).
- Sie müssen dem Pool-Betreiber vertrauen, fair zu zahlen.
- Ihre Einnahmen pro Block sind winzig (aber sie summieren sich).

### Wer sollte in einem Pool minen?

- **Jeder mit kleiner bis mittlerer Hashrate** — das schließt alle NMMiner-Benutzer ein.
- Jeder, der konstante, vorhersehbare Einnahmen möchte.
- Anfänger, die Ergebnisse sehen und lernen möchten.

---

## Direkter Vergleich

| | Solo-Mining | Pool-Mining |
|---|---|---|
| **Gefühl** | Lotterielos | Regelmäßiger Gehaltsscheck |
| **Auszahlungshäufigkeit** | Extrem selten (vielleicht nie) | Häufig (täglich/stündlich) |
| **Auszahlungsgröße pro Treffer** | Riesig (volle Block-Belohnung) | Winzig (Ihr Anteil am Block) |
| **Varianz** | Extrem hoch | Niedrig |
| **Geeignete Hashrate** | TH/s oder mehr | Funktioniert bei jeder Hashrate |
| **Gebühren** | Keine | 0,5 %–3 % Pool-Gebühr |
| **NMMiner-kompatibel?** | Ja (SoloBTC-Pool) | Ja (Standard-Pools) |

---

## Die eigentliche Frage: „Warum mit einem Pool verbinden, wenn ich solo mine?"

Hier sind die meisten Neulinge verwirrt. Das Wort „Pool" klingt wie das Gegenteil von „solo". Lassen Sie uns das Schicht für Schicht aufdröseln.

### Drei Arten zu minen — nur zwei ändern die Belohnung

Jeder Miner braucht irgendwo in der Pipeline einen **Bitcoin-Node** — Software, die mit dem Bitcoin-Netzwerk spricht, die Blockchain verfolgt und Arbeit ausgibt. Die Frage ist: Wer betreibt diesen Node, und welche Art von Arbeit gibt er Ihnen?

Hier sind die drei Setups, vom DIY-lastigsten bis zum wartungsärmsten:

| Setup | Wer betreibt den Node? | Job-Schwierigkeit | Belohnung bei Blocktreffer |
|---|---|---|---|
| **Wahres Solo** (eigener Node) | Sie | Volle Netzwerk-Schwierigkeit | 100 % Ihnen |
| **Solo-Pool** (z. B. SoloBTC) | Der Pool-Betreiber | Volle Netzwerk-Schwierigkeit | ~98–100 % Ihnen (kleine Gebühr) |
| **Regulärer Pool** | Der Pool-Betreiber | Niedrig (Share-Schwierigkeit) | Unter allen Teilnehmern aufgeteilt |

:::info

Beachten Sie das Muster: **„Solo" beschreibt das Belohnungsmodell, nicht, wer die Infrastruktur betreibt.** Sowohl beim wahren Solo- als auch beim Solo-Pool-Mining erhalten Sie (fast) den gesamten Block, wenn Sie einen treffen. In einem regulären Pool wird die Belohnung immer aufgeteilt.

:::

### Wahres Solo-Mining — die „reine" Version

Im strengsten Sinne bedeutet Solo-Mining, dass Ihr Miner direkt mit einem **Bitcoin-Full-Node spricht, der auf Ihrer eigenen Maschine läuft**. Sie laden die gesamte Blockchain (~600 GB) herunter, halten sie rund um die Uhr synchron und Ihr Miner sucht dagegen. Block getroffen? Sie übertragen ihn selbst. Kein Mittelsmann, keine Gebühren, niemand, dem Sie vertrauen müssen.

Der Haken ist der Infrastruktur-Overhead. Sie brauchen einen Computer mit Hunderten von GB freiem Speicherplatz, eine zuverlässige, ständig aktive Internetverbindung und genug technisches Geschick, um den Node gesund zu halten. Für die meisten Hobbyisten — insbesondere jeden, der einen winzigen ESP32-Miner betreibt — ist das die Mühe einfach nicht wert.

### Solo-Pools — Solo-Belohnungen, ohne den Node-Kopfschmerz

Hier kommen Pools wie SoloBTC ins Spiel. Sie betreiben den Full-Node und erledigen die gesamte Blockchain-Plumbing **für Sie**. Aber im Gegensatz zu einem regulären Pool senken sie die Job-Schwierigkeit **nicht** und teilen Block-Belohnungen **nicht** unter den Teilnehmern auf.

Stattdessen erhält jeder verbundene Miner Jobs mit **voller Bitcoin-Netzwerk-Schwierigkeit**. Wenn Ihr Miner zufällig einen gültigen Block findet, überträgt der Pool ihn, kassiert die Belohnung und sendet praktisch alles davon an Ihre Wallet (er behält nur eine kleine Gebühr, typischerweise 1–2 %).

Die Kern-Erkenntnis: **Aus Belohnungssicht ist dies Solo-Mining.** Aus Infrastruktursicht ist es pool-unterstützt. Sie erhalten das Solo-Lotterielos, ohne einen 600-GB-Server betreiben zu müssen.

### Warum ist Solo also immer noch „eine Lotterie"?

Weil die Schwierigkeit, einen Block zu finden, **nichts mit dem Pool zu tun hat** — sie wird vom Bitcoin-Netzwerk gesetzt. Ob Sie Ihren eigenen Node betreiben oder sich mit SoloBTC verbinden, Ihre KH/s-Hashrate steht vor denselben astronomischen Chancen: im Durchschnitt Jahrhunderte zwischen Treffern.

Der Pool erspart Ihnen den Infrastruktur-Kopfschmerz. Er kann die Mathematik nicht ändern.

### Was ist NMMiners Standard?

NMMiner wird mit **SoloBTC** als Standard-Pool ausgeliefert — also Solo-Pool-Modus ab Werk. Es ist eine spaßige, konfigurationsfreie Art, „die Lotterie zu spielen", sobald Sie einstecken. Wenn Sie aber stetige, vorhersehbare Einnahmen möchten, wechseln Sie zu einem regulären Pool.

:::tip

**Für NMMiner-Benutzer**: Gehen Sie zum Konfigurationsportal → Tab Pools und ersetzen Sie die Standard-SoloBTC-URL durch die URL eines traditionellen Mining-Pools. Schritt-für-Schritt-Anleitung finden Sie auf der Seite [Pools](../user-guide/pools.md).

:::

---

## Was sollten Sie wählen?

| Ihr Ziel | Empfohlen |
|---|---|
| „Ich möchte regelmäßige, vorhersehbare Einnahmen sehen" | Regulärer Pool |
| „Ich möchte den Nervenkitzel, vielleicht eines Tages einen vollen Block zu treffen" | Solo-Pool (z. B. SoloBTC) |
| „Ich betreibe eine große Mining-Farm und treffe regelmäßig Blöcke" | Wahres Solo (eigener Node) oder Solo-Pool |
| „Ich lerne, wie Mining funktioniert" | Regulärer Pool (sofortiges Share-Feedback) |

**Fazit**: Die Verwirrung läuft normalerweise so ab — *„Moment, wenn es Solo-Mining ist, warum verbinde ich mich dann mit einem ‚Pool'?"* Hier die Antwort:

- **„Solo" bedeutet, dass die Belohnung nicht geteilt wird.** Wenn Sie einen Block finden, gehört er Ihnen — ob über Ihren eigenen Node oder über einen Solo-Pool, der den Node für Sie betreibt.
- **„Pool" (in „Solo-Pool") bedeutet nur die Infrastrukturebene.** Der Pool betreibt den Bitcoin-Node, damit Sie keine 600-GB-Festplatte und keinen 24/7-Server brauchen.

Für NMMiner-Benutzer lautet die praktische Erkenntnis: **regulärer Pool = stetige kleine Einnahmen, die Sie tatsächlich sehen können; Solo-Pool = ein Lotterielos mit fast keinem Infrastruktur-Aufwand.** Solo ist nicht „falsch" — es dient nur einem anderen Ziel.

---

## Siehe auch

- [Bitcoin Mining Grundlagen](./bitcoin-mining-basics.md) — die Kernkonzepte hinter allem auf dieser Seite.
- [Pools](../user-guide/pools.md) — wie man Pool-Einstellungen in NMMiner konfiguriert.
- [Glossar](../reference/glossary.md) — Definitionen von Hashrate, Share, Schwierigkeit und mehr.
