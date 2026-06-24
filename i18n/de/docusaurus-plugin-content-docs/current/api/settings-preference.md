---
sidebar_position: 7
title: Präferenzeinstellungen
---

# Präferenzeinstellungen

Display, LED, Bildschirmschoner und die optionale globale Rangliste.

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

| Feld              | Typ     | Bedeutung                                                           |
| ----------------- | ------- | ------------------------------------------------------------------- |
| `Brightness`      | integer | Display-Helligkeit, **1-100** (wird auf ≥ 1 begrenzt).              |
| `RotateScreen`    | integer | Display-Rotation in Grad. Typisch: `0`, `90`, `180`, `270`.         |
| `LedEnable`       | integer | `1`, um die Status-LED zu aktivieren, `0` zum Deaktivieren.         |
| `ScreenSaver`     | string  | Leerlauf-Timeout, bevor der Bildschirmschoner aktiviert wird. Z.B. `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"` (Diashow) oder `"black"` (Hintergrundbeleuchtung aus).    |
| `LadderEnable`    | boolean | Opt-in für die globale Rangliste. Standardmäßig aus.                |

---

## `POST /api/setting/preference`

Partielles Update — wird **live** ohne Neustart angewendet.

### Request

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### Response

`200 OK` mit Body `OK`.

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` ist die empfohlene Einstellung für Benutzer, die **maximale Hashrate** wünschen — keine Display-Aktualisierungskosten.
:::
