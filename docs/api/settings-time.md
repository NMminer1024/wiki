---
sidebar_position: 6
title: Time Settings
---

# Time Settings

Time zone, time format and date format.

---

## `GET /api/setting/time`

### Response

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| Field        | Type             | Meaning                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| Offset from UTC in hours. Supports decimals (e.g. `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` or `24`.                                           |
| `DateFormat` | string           | One of `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"`.  |

---

## `POST /api/setting/time`

Partial update.

### Request

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### Response

`200 OK` with body `OK`. Time changes take effect **immediately** (the on-device clock re-applies the new POSIX TZ string without re-syncing NTP).

### Example

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```