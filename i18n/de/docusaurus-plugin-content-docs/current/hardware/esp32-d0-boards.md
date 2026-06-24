---
sidebar_position: 2
title: ESP32-D0 Boards
---

# ESP32-D0 Boards

Der ESP32-D0 (ursprünglicher ESP32) bietet die **höchste Hashrate** aller unterstützten Chips — bis zu **1.035 KH/s** bei Standardtakt mit Lizenz.

## Unterstützte Boards

| Board                     | Display              | Hashrate (Standard) | Hashrate (Lizenz) | Hinweise                          |
| ------------------------- | -------------------- | ------------------- | ----------------- | --------------------------------- |
| ESP32-DevKitC             | Keines               | ~650 KH/s           | ~1.035 KH/s       | Günstigstes Board, kein Bildschirm|
| ESP32-WROOM               | Keines               | ~650 KH/s           | ~1.035 KH/s       | Wie DevKitC, anderes Formfaktor   |
| M5Stack Core              | 320×240 TFT          | ~650 KH/s           | ~1.035 KH/s       | Integriertes Display & Tasten     |
| M5Stack Fire              | 320×240 TFT          | ~650 KH/s           | ~1.035 KH/s       | Leistungsstärkere M5Stack-Variante|
| TTGO T-Display            | 240×135 TFT          | ~650 KH/s           | ~1.035 KH/s       | Kompakt mit kleinem Display       |
| LILYGO T-Beam             | 128×64 OLED (opt.)   | ~650 KH/s           | ~1.035 KH/s       | Hat LoRa + GPS (ungenutzt)        |

## Einkaufstipps

- Suchen Sie auf AliExpress nach **„ESP32 DevKitC CP2102"** — die gibt es für $3-5.
- Boards mit **CP2102** oder **CH340** USB-Chips werden beide unterstützt.
- Vermeiden Sie Boards mit nur 2 MB Flash — Sie benötigen **4 MB+**.

## Bekannte Probleme

- Einige ESP32-D0-Boards benötigen einen **100 µF Kondensator** am 3,3V-Pin für stabiles WiFi unter Last.
- Die M5Stack Core-Taste C wird von der Firmware für Menü-Langdruck verwendet.
