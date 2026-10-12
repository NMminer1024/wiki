---
sidebar_position: 3
title: Lizenz aktivieren
---

# Lizenz aktivieren

NMMiner erfordert eine **kostenpflichtige Lizenz** pro Gerät. Die Lizenz bindet Ihr Board an die Firmware und schaltet die Mining-Funktionalität frei.

## So erhalten Sie eine Lizenz

1. Folgen Sie nach dem Flashen den Bildschirmanweisungen im [Flash-Tool](https://flash.nmminer.com), um **eine Lizenz zu erwerben** — das Tool führt Sie durch den Vorgang.
2. Nach dem Kauf zeigt das Tool Ihre Lizenz-Zeichenfolge an. Sie können sie direkt im Flash-Tool oder auf dem Gerät selbst aktivieren.

## Aktivierungsmethoden

Es gibt zwei Möglichkeiten, Ihre Lizenz zu aktivieren:

### Methode 1 — Aktivierung im Flash-Tool (empfohlen)

1. Fügen Sie im [Flash-Tool](https://flash.nmminer.com) Ihre Lizenz-Zeichenfolge in das **Licence**-Eingabefeld ein.
2. Klicken Sie auf die Schaltfläche **Activate**. Das Tool schreibt die Lizenz direkt auf Ihr Gerät.
3. Bei Erfolg sehen Sie eine Bestätigung — keine weiteren Schritte nötig.

### Methode 2 — Aktivierung über das Konfigurationsportal des Geräts

1. Schalten Sie das Board aus und wieder ein, falls es nicht automatisch neu gestartet wurde.
2. Verbinden Sie sich mit dem offenen Hotspot `nmap-2.4g` und lassen Sie das Captive-Portal öffnen (oder besuchen Sie `http://192.168.4.1`).
3. Fügen Sie die Lizenz-Zeichenfolge in das **Licence**-Feld ein und drücken Sie die Schaltfläche.
4. Bei Erfolg zeigt die Seite eine Bestätigung und der Miner startet in den Normalmodus neu.

:::tip Die Lizenz ist an Ihr Board gebunden
Ihre Lizenz ist mit Ihrem spezifischen Board verknüpft. Firmware-Updates erhalten die Lizenz — Sie müssen nur einmal pro Gerät aktivieren.
:::
