---
sidebar_position: 5
title: Firmware Update
---

# Firmware Update

Upgrading is the same as the first flash: re-open the browser flash tool, pick your board, install.

## Steps

1. Open [flash.nmminer.com](https://flash.nmminer.com) in Chrome or Edge.
2. Pick the board profile.
3. Click **Install**, choose the serial port, wait for it to finish.

After updating you **do not need to re-activate the licence**. Settings (SSID / pool / wallet) survive the upgrade.

:::tip
A "new firmware available" banner is shown on the on-device loading page and miner page whenever a newer release is published.
:::

## Tracking firmware version remotely

The current firmware version is reported by every miner via [`GET /api/system/info`](../api/system.md). Combine that with [Swarm](./swarm.md) discovery and you can see at a glance which miners on the LAN still need an update.

## What changes between versions

See the [GitHub release log](https://github.com/NMminer1024/NMMiner#release-log) for the full change log. Major version bumps (e.g. **v1.x → v2.0**) introduced breaking improvements to NM Monitor and Swarm — older releases are not interoperable with newer Swarm protocols, so it's best to keep your whole fleet on the same minor series.