---
sidebar_position: 3
title: Activate Licence
---

# Activate Licence

NMMiner requires a **paid licence** per device. The licence ties your board to the firmware and unlocks mining functionality.

## How to get a licence

1. After flashing, follow the on-screen prompts in the [flash tool](https://flash.nmminer.com) to **purchase a licence** — the tool guides you through the process.
2. Once purchased, the tool displays your licence string. You can activate it directly in the flash tool or on the device itself.

## Activation methods

There are two ways to activate your licence:

### Method 1 — Activate in the flash tool (recommended)

1. In the [flash tool](https://flash.nmminer.com), paste your licence string into the **Licence** input box.
2. Click the **Activate** button. The tool writes the licence directly to your device.
3. On success, you will see a confirmation — no further steps needed.

### Method 2 — Activate via the device's config portal

1. Power-cycle the board if it has not rebooted automatically.
2. Connect to the open hotspot `nmap-2.4g` and let the captive portal open (or visit `http://192.168.4.1`).
3. Paste the licence string into the **Licence** box and press the button.
4. On success, the page displays a confirmation and the miner reboots into normal mode.

:::tip Licence is tied to your board
Your licence is linked to your specific board. Firmware updates preserve the licence — you only need to activate once per device.
:::