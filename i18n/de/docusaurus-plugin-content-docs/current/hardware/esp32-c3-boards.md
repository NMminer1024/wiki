---
sidebar_position: 4
title: ESP32-C3 Boards
---

# ESP32-C3 Boards

Der ESP32-C3 ist der **stromsparendste** unterstützte Chip und erreicht dennoch respektable ~402 KH/s mit einem einzigen RISC-V-Kern.

## Unterstützte Boards

| Board                     | Display              | Hashrate (Standard) | Hashrate (Lizenz) | Hinweise                          |
| ------------------------- | -------------------- | ------------------- | ----------------- | --------------------------------- |
| ESP32-C3-DevKitM          | Keines               | ~280 KH/s           | ~402 KH/s         | Günstigstes RISC-V-Board          |
| ESP32-C3-DevKitC-02       | Keines               | ~280 KH/s           | ~402 KH/s         | Anderes Pin-Layout               |
| ESP32-C3-Zero             | Keines               | ~280 KH/s           | ~402 KH/s         | Sehr kleiner Formfaktor           |
| LILYGO T-Display C3       | 240×135 TFT          | ~280 KH/s           | ~402 KH/s         | Kompakt + Display                 |
| M5Stamp C3                | Keines               | ~280 KH/s           | ~402 KH/s         | Winziges Board (~25×35 mm)        |
| Waveshare C3-LCD          | 160×80 TFT           | ~280 KH/s           | ~402 KH/s         | Kleines eingebautes Display       |

## Einkaufstipps

- ESP32-C3-DevKitM kostet etwa $3-4 auf AliExpress.
- Boards mit **eingebauter PCB-Antenne** funktionieren besser als solche mit externem Antennenanschluss (außer Sie fügen eine Antenne hinzu).
- M5Stamp C3 ist sehr günstig ($2-3), benötigt aber einen separaten USB-Adapter.

## Bekannte Probleme

- Das eingebaute USB-JTAG des C3 kann beim ersten Mal Treiberinstallationen erfordern. Verwenden Sie das [Web Flash Tool](../getting-started/flash-firmware.md), um Komplikationen zu vermeiden.
- Einige C3-Boards haben nur 2 MB Flash — stellen Sie sicher, dass Sie 4 MB+ kaufen.
