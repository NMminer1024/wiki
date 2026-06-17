---
sidebar_position: 6
title: Screen Saver
---

# Screen Saver

After a configurable idle period the display enters screen-saver mode.

## Modes

| Mode    | Effect                                                                                  |
| ------- | --------------------------------------------------------------------------------------- |
| `IMAGE` | Slideshow of custom images uploaded via NM Monitor. Smooth fade-in / fade-out.          |
| `BLACK` | Turns the backlight off (OLEDs go to minimum contrast). Saves power and **gives you the absolute peak hashrate**. |

Switch modes live from the **Preferences** section of [NM Monitor](./nm-monitor.md) — no reboot.

## Custom images

NM Monitor's **Screensaver** page lets you upload regular PNG / JPG files straight from your browser. The browser converts each image to NMMiner's compact `.ss` format (RGB565 + RLE) and pushes it to the device's `/ss/` folder.

- Images are matched to the **current screen resolution** automatically.
- Each `.ss` file is at most **200 KB**.
- The device manages disk space — if the FS fills up, the oldest screensaver is overwritten.

Want to script the upload? See [API › Screensaver Upload](../api/screensaver-upload.md).

:::tip
For the absolute highest hashrate, choose **Black** mode — the display refresh costs CPU cycles that can otherwise be spent hashing.
:::

## Waking up

| Board type      | Wake gesture                       |
| --------------- | ---------------------------------- |
| Button-only     | Single-click any button.           |
| Touch display   | Tap the screen anywhere.           |