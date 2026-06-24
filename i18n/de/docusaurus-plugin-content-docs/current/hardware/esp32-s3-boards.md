---
sidebar_position: 3
title: ESP32-S3 Boards
---

# ESP32-S3 Boards

Der ESP32-S3 bietet eine gute Balance aus Rechenleistung (~400 KH/s), mehreren GPIOs und nativer USB-Unterstützung — ideal für farbige Touchscreens.

## Unterstützte Boards

| Board                     | Display              | Hashrate (Standard) | Hashrate (Lizenz) | Hinweise                          |
| ------------------------- | -------------------- | ------------------- | ----------------- | --------------------------------- |
| ESP32-S3-DevKitC          | Keines               | ~280 KH/s           | ~400 KH/s         | Einfaches Entwicklungsboard       |
| CYD (Cheap Yellow Display)| 320×240 TFT + Touch  | ~280 KH/s           | ~400 KH/s         | Beliebteste Budget-Touchscreen-Option |
| CYD2USB                   | 320×240 TFT + Touch  | ~280 KH/s           | ~400 KH/s         | CYD mit USB-C und besserem Layout |
| Elecrow ESP32-S3          | 480×272 TFT + Touch  | ~280 KH/s           | ~400 KH/s         | Größeres Display                  |
| Waveshare ESP32-S3-LCD    | 240×240 TFT          | ~280 KH/s           | ~400 KH/s         | Kompakt, rundes Display           |
| M5Stack CoreS3            | 320×240 TFT + Touch  | ~280 KH/s           | ~400 KH/s         | Premium-Gehäuse                   |

## Einkaufstipps

- **CYD** („Cheap Yellow Display") ist das beliebteste NMMiner-Board — suchen Sie auf AliExpress nach „ESP32-S3 TFT 2.8inch".
- CYD2USB hat eine bessere Stromversorgung und USB-C — empfohlen, wenn verfügbar.
- Erwarten Sie $7-15 für CYD, $15-25 für CYD2USB.

## Bekannte Probleme

- Einige CYD-Boards haben ein **verkehrt herum eingebautes Display** — verwenden Sie `RotateScreen: 180` in den Einstellungen.
- Die USB-C-Anschlüsse des CYD2USB können wackelig sein — verwenden Sie ein hochwertiges Kabel.
