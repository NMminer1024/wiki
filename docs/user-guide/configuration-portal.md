---
sidebar_position: 3
title: Configuration Portal
---

# Configuration Portal

The configuration portal is a small captive-portal-style web page served from the miner itself while it is in AP mode.

## When the portal is shown

- **First boot** after flashing.
- **Reconnect failure** — if the miner cannot reach the saved WiFi within ~15 seconds it falls back to AP mode automatically.
- **Manual force** — long-press the configure-button (see [Buttons](./buttons.md)).

## Reaching it

1. Open WiFi settings on your phone or laptop.
2. Join the open hotspot **`nmap-2.4g`**.
3. On a phone, a captive-portal browser pops up automatically. On a PC, open `http://192.168.4.1`.

You will see the configuration form described in [First Configuration](../getting-started/first-configuration.md).

## Save behaviour

Pressing **Save** writes the new settings, waits for the on-device storage to flush (10-15 s) and then reboots. **Do not power-cycle during this window** — let it restart on its own.