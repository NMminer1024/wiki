---
sidebar_position: 1
title: Hardware-Übersicht
---

# Hardware-Übersicht

NMMiner unterstützt über 30 ESP32-Entwicklungsboards in vier Chip-Familien.

## Chip-Familien

| Chip      | Spitzenhashrate | Kerne | Typische Taktung | Stromverbrauch |
| --------- | --------------- | ----- | ---------------- | -------------- |
| ESP32-D0  | ~1.035 KH/s     | 2     | 240 MHz          | ~2,5 W         |
| ESP32-S3  | ~400 KH/s       | 2     | 240 MHz          | ~2,0 W         |
| ESP32-C3  | ~402 KH/s       | 1     | 160 MHz          | ~1,0 W         |
| ESP32-C5  | ~150 KH/s       | 1     | 240 MHz          | ~1,5 W         |

## Auswahl eines Boards

| Wenn Sie…                                  | Wählen Sie                    |
| ------------------------------------------ | ----------------------------- |
| Maximale Hashrate zu niedrigsten Kosten    | ESP32-D0 (DevKitC)            |
| Einen Farb-Touchscreen möchten             | ESP32-S3 (CYD / CYD2USB)      |
| Geringsten Stromverbrauch benötigen        | ESP32-C3 (DevKitM)            |
| Neuesten Chip / Zukunftssicherheit         | ESP32-C5 (DevKitC-1)          |

## Detaillierte Board-Listen

- [ESP32-D0 Boards](./esp32-d0-boards.md) — Klassische Dual-Core, höchste Hashrate
- [ESP32-S3 Boards](./esp32-s3-boards.md) — Moderne Dual-Core, Touchscreen-fähig
- [ESP32-C3 Boards](./esp32-c3-boards.md) — Einzelkern, sehr stromsparend
- [ESP32-C5 Boards](./esp32-c5-boards.md) — Neueste Generation

## Allgemeine Anforderungen

Alle unterstützten Boards müssen mindestens Folgendes haben:
- **4 MB** Flash-Speicher (8 MB oder mehr empfohlen für Bildschirmschoner)
- USB-Anschluss für Strom und Flashen
- 2,4 GHz WiFi (5 GHz wird nicht unterstützt)

:::tip
Die meisten ESP32-DevKit-Boards von AliExpress/Amazon funktionieren einwandfrei. Achten Sie auf Boards mit **4 MB+** Flash.
:::
