---
sidebar_position: 7
title: Preference Settings
---

# Preference Settings

Display, LED, screen-saver and the optional global Ladder.

---

## `GET /api/setting/preference`

### Response

```json
{
  "Brightness":      80,
  "RotateScreen":    270,
  "LedEnable":       1,
  "ScreenSaver":     "5m",
  "ScreenSaverMode": "image",
  "LadderEnable":    false
}
```

| Field             | Type    | Meaning                                                           |
| ----------------- | ------- | ----------------------------------------------------------------- |
| `Brightness`      | integer | Display brightness, **1-100** (will be clamped to ≥ 1).           |
| `RotateScreen`    | integer | Display rotation in degrees. Typical: `0`, `90`, `180`, `270`.    |
| `LedEnable`       | integer | `1` to enable the status LED, `0` to disable.                     |
| `ScreenSaver`     | string  | Idle timeout before the screen-saver kicks in. e.g. `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"` (slideshow) or `"black"` (back-light off).              |
| `LadderEnable`    | boolean | Opt-in to the global rank ladder. Off by default.                 |

---

## `POST /api/setting/preference`

Partial update — applied **live** without reboot.

### Request

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### Response

`200 OK` with body `OK`.

### Example

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` is the recommended setting for users who want **maximum hashrate** — no display refresh cost.
:::