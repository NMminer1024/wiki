---
sidebar_position: 1
title: Hardware Overview
---

# Hardware Overview

NMMiner targets four chip families. Each family has its own peak hashrate and a curated list of supported boards.

| Chip family | Typical peak hashrate | Notes |
| ----------- | --------------------- | ----- |
| **ESP32-D0**| up to **1,035 KH/s**  | Best raw performance. Original ESP32 family. |
| **ESP32-S3**| up to **400 KH/s**    | Vector ISA, dual core, usually paired with TFT / AMOLED displays. |
| **ESP32-C3**| up to **402 KH/s**    | Single RISC-V core, cheapest tier. |
| **ESP32-C5**| up to **150 KH/s**    | Newer dual-band RISC-V part. |

Use the sub-pages to find the exact board you have:

- [ESP32-D0 boards](./esp32-d0-boards.md)
- [ESP32-S3 boards](./esp32-s3-boards.md)
- [ESP32-C3 boards](./esp32-c3-boards.md)
- [ESP32-C5 boards](./esp32-c5-boards.md)

:::tip
The hashrate column is **measured on real hardware** at the highest stable UI refresh setting, with the screen-saver in **Black** mode. Lowering the screen refresh interval buys a few extra KH/s on every board.
:::