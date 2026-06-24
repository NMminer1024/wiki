---
sidebar_position: 2
title: Firmware flashen
---

# Firmware flashen

So flashen Sie die NMMiner-Firmware auf Ihr ESP32-Board.

## Web Flash Tool (empfohlen)

Der einfachste Weg — kein Treiber oder Terminal erforderlich.

1. **Öffnen** Sie [flash.nmminer.com](https://flash.nmminer.com) in Chrome oder Edge (Firefox und Safari unterstützen WebSerial nicht).
2. **Verbinden** Sie Ihr ESP32-Board per USB-Kabel mit dem Computer.
3. **Wählen** Sie Ihr Board-Modell aus dem Dropdown-Menü.
4. **Klicken** Sie auf „Verbinden" und wählen Sie den seriellen Port Ihres Boards.
5. **Klicken** Sie auf „Flash" und warten Sie, bis der Fortschrittsbalken 100 % erreicht.

:::tip
Wenn Ihr Board nicht erkannt wird, müssen Sie möglicherweise den CP210x- oder CH340-Treiber installieren. Siehe die [Hardware](../hardware/overview.md)-Seite für Ihr spezifisches Board.
:::

## Manuelles Flashen (esptool)

Wenn Sie die Kommandozeile bevorzugen:

```bash
# ESP32-D0
esptool.py --chip esp32 --port COM3 --baud 921600 write_flash 0x0 firmware.bin

# ESP32-S3
esptool.py --chip esp32s3 --port COM3 --baud 921600 write_flash 0x0 firmware.bin

# ESP32-C3
esptool.py --chip esp32c3 --port COM3 --baud 921600 write_flash 0x0 firmware.bin

# ESP32-C5
esptool.py --chip esp32c5 --port COM3 --baud 921600 write_flash 0x0 firmware.bin
```

Laden Sie die neueste Firmware von der [NMMiner Website](https://www.nmminer.com) herunter.

## Nach dem Flashen

1. Das Board startet neu und erstellt einen WLAN-Hotspot namens **`NMMiner-Setup`**.
2. Fahren Sie mit [Erste Konfiguration](./first-configuration.md) fort, um WLAN und Wallet einzurichten.
3. Das Mining beginnt automatisch.
