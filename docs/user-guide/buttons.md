---
sidebar_position: 1
title: Buttons & Touch
---

# Buttons & Touch

Different boards have one button (`BOOT`), two (`BOOT` + `USER`) or a touch screen. NMMiner exposes consistent gestures across all three.

## One-button boards

| Gesture       | Action                                            |
| ------------- | ------------------------------------------------- |
| Single click  | Wake the screen (on boards with a display).       |
| Double click  | Switch to the next screen page.                   |
| Long press    | Enter miner configuration (force AP mode).        |

## Two-button boards

| Button   | Gesture       | Action                                                  |
| -------- | ------------- | ------------------------------------------------------- |
| `BOOT`   | Single click  | Wake the screen.                                        |
| `BOOT`   | Double click  | Wake the screen.                                        |
| `BOOT`   | Long press    | Clear all stored state from NVS (if enabled in build).  |
| `USER`   | Single click  | Wake the screen.                                        |
| `USER`   | Double click  | Switch to the next screen page.                         |
| `USER`   | Long press    | Enter miner configuration (force AP mode).              |

## Touch screen boards

Since v2.0.01, touch boards (NM-TV-154, CYD 2.4 / 2.8 / 3.5, Waveshare 3.5 touch, etc.) support gestures **directly on the screen**:

| Gesture                       | Action                                            |
| ----------------------------- | ------------------------------------------------- |
| Tap                           | Switch to the next screen page (also wakes the screen if asleep). |
| **Long-press 10 seconds**     | Enter miner configuration (force AP mode).        |

See [Screens](./screens.md) for the page order, and [Configuration Portal](./configuration-portal.md) for what happens after a long press.