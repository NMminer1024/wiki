---
sidebar_position: 3
title: Konfigurationsportal
---

# Konfigurationsportal

Das Konfigurationsportal ist eine kleine Webseite im Captive-Portal-Stil, die vom Miner selbst bereitgestellt wird, solange er sich im AP-Modus befindet.

## Wann das Portal angezeigt wird

- **Erster Boot** nach dem Flashen.
- **Wiederverbindungsfehler** — wenn der Miner das gespeicherte WiFi nicht innerhalb von ~15 Sekunden erreichen kann, fällt er automatisch in den AP-Modus zurück.
- **Manuell erzwungen** — halten Sie die Konfigurationstaste lange gedrückt (siehe [Tasten](./buttons.md)).

## Es erreichen

1. Öffnen Sie die WiFi-Einstellungen auf Ihrem Telefon oder Laptop.
2. Verbinden Sie sich mit dem offenen Hotspot **`nmap-2.4g`**.
3. Auf einem Telefon öffnet sich automatisch ein Captive-Portal-Browser. Auf einem PC öffnen Sie `http://192.168.4.1`.

Sie sehen das Konfigurationsformular, das unter [Erste Konfiguration](../getting-started/first-configuration.md) beschrieben ist.

## Speicherverhalten

Ein Druck auf **Speichern** schreibt die neuen Einstellungen, wartet, bis der geräteinterne Speicher geflusht ist (10–15 s), und startet dann neu. **Schalten Sie während dieses Fensters nicht aus** — lassen Sie es von selbst neu starten.
