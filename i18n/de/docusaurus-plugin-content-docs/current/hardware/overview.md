---
sidebar_position: 1
title: Hardware-Übersicht
---

# Hardware-Übersicht

NMMiner zielt auf vier Chip-Familien. Jede Familie hat ihre eigene Spitzenhashrate und eine kuratierte Liste unterstützter Boards.

| Chip-Familie | Typische Spitzenhashrate | Hinweise |
| ----------- | --------------------- | ----- |
| **ESP32-D0**| bis zu **1.035 KH/s**  | Beste Rohleistung. Ursprüngliche ESP32-Familie. |
| **ESP32-S3**| bis zu **400 KH/s**    | Vector-ISA, Dual-Core, meist mit TFT-/AMOLED-Displays kombiniert. |
| **ESP32-C3**| bis zu **402 KH/s**    | Einzelner RISC-V-Kern, günstigste Stufe. |
| **ESP32-C5**| bis zu **150 KH/s**    | Neuerer Dual-Band-RISC-V-Chip. |

Verwenden Sie die Unterseiten, um das genaue Board zu finden, das Sie besitzen:

- [ESP32-D0-Boards](./esp32-d0-boards.md)
- [ESP32-S3-Boards](./esp32-s3-boards.md)
- [ESP32-C3-Boards](./esp32-c3-boards.md)
- [ESP32-C5-Boards](./esp32-c5-boards.md)

:::tip
Die Hashrate-Spalte wurde **auf echter Hardware gemessen** — bei der höchsten stabilen UI-Aktualisierungseinstellung und mit dem Bildschirmschoner im **Black**-Modus. Eine Verringerung des Bildschirm-Aktualisierungsintervalls bringt auf jedem Board ein paar zusätzliche KH/s.
:::
