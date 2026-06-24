---
sidebar_position: 7
title: Настройки предпочтений
---

# Настройки предпочтений (Preference)

Дисплей, LED, заставка и опциональная глобальная таблица Ladder.

---

## `GET /api/setting/preference`

### Ответ

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

| Поле               | Тип     | Значение                                                           |
| ----------------- | ------- | ------------------------------------------------------------------ |
| `Brightness`      | integer | Яркость дисплея, **1-100** (будет ограничена ≥ 1).                 |
| `RotateScreen`    | integer | Поворот дисплея в градусах. Типичные: `0`, `90`, `180`, `270`.     |
| `LedEnable`       | integer | `1` для включения статусного LED, `0` для отключения.              |
| `ScreenSaver`     | string  | Таймаут бездействия до включения заставки. Например, `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"` (слайд-шоу) или `"black"` (подсветка выключена).         |
| `LadderEnable`    | boolean | Согласие на участие в глобальной таблице лидеров. По умолчанию выключено. |

---

## `POST /api/setting/preference`

Частичное обновление — применяется **на лету** без перезагрузки.

### Запрос

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### Ответ

`200 OK` с телом `OK`.

### Пример

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` — рекомендуемая настройка для пользователей, которым нужен **максимальный хэшрейт** — отсутствие затрат на обновление дисплея.
:::
