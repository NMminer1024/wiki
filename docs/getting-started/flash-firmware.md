---
sidebar_position: 2
title: Flash Firmware
---

# Flash Firmware

NMMiner ships as a single browser-flashable image. No `esptool` or `idf.py` required.

## Browser flashing (recommended)

1. Open [flash.nmminer.com](https://flash.nmminer.com) in **Chrome or Edge**. Firefox / Safari do not implement WebSerial.
2. Plug your board in via USB.
3. Pick your board from the list. The tool will fetch the matching firmware from the official GitHub release.
4. Click **Install**, choose the serial port, and wait for "Flash complete".
5. The tool will prompt you to **purchase a licence**. Once purchased, it displays your licence string — copy it. You will need it once on the activation page.

:::warning
If your board does not auto-enter download mode, hold `BOOT` while pressing `RESET`, then release.
:::