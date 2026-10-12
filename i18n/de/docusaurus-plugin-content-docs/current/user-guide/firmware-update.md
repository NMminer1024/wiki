---
sidebar_position: 5
title: Firmware-Update
---

# Firmware-Update

Das Upgrade ist dasselbe wie das erste Flashen: Öffnen Sie das Browser-Flash-Tool erneut, wählen Sie Ihr Board aus und installieren Sie.

## Schritte

1. Öffnen Sie [flash.nmminer.com](https://flash.nmminer.com) in Chrome oder Edge.
2. Wählen Sie das Board-Profil aus.
3. Klicken Sie auf **Install**, wählen Sie den seriellen Port und warten Sie, bis der Vorgang abgeschlossen ist.

Nach dem Update **müssen Sie die Lizenz nicht erneut aktivieren**. Die Einstellungen (SSID / Pool / Wallet) bleiben beim Upgrade erhalten.

## Firmware-Version remote verfolgen

Die aktuelle Firmware-Version wird von jedem Miner über [`GET /api/system/info`](../api/system.md) gemeldet. Kombinieren Sie dies mit der [Swarm](./swarm.md)-Erkennung, und Sie sehen auf einen Blick, welche Miner im LAN noch ein Update benötigen.

## Was sich zwischen den Versionen ändert

Den vollständigen Änderungsverlauf finden Sie im [GitHub-Release-Log](https://github.com/NMminer1024/NMMiner#release-log). Größere Versionssprünge (z. B. **v1.x → v2.0**) brachten tiefgreifende Verbesserungen an NM Monitor und Swarm — ältere Releases sind nicht mit neueren Swarm-Protokollen interoperabel. Daher ist es am besten, die gesamte Flotte auf derselben Minor-Serie zu halten.
