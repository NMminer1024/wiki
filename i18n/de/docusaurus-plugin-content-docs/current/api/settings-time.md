---
sidebar_position: 6
title: Zeiteinstellungen
---

# Zeiteinstellungen

Zeitzone, Zeitformat und Datumsformat.

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

| Feld         | Typ              | Bedeutung                                                 |
| ------------ | ---------------- | --------------------------------------------------------- |
| `Timezone`   | string (float OK)| Offset von UTC in Stunden. Unterstützt Dezimalstellen (z.B. `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` oder `24`.                                           |
| `DateFormat` | string           | Einer von `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"`. |

---

## `POST /api/setting/time`

Partielles Update.

### Request

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### Response

`200 OK` mit Body `OK`. Zeitänderungen werden **sofort** wirksam (die Geräteuhr wendet den neuen POSIX-TZ-String ohne NTP-Neusynchronisation an).

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```
