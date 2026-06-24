---
sidebar_position: 6
title: Настройки времени
---

# Настройки времени (Time)

Часовой пояс, формат времени и формат даты.

---

## `GET /api/setting/time`

### Ответ

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| Поле          | Тип              | Значение                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| Смещение от UTC в часах. Поддерживает дробные значения (например, `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` или `24`.                                          |
| `DateFormat` | string           | Одно из `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"`. |

---

## `POST /api/setting/time`

Частичное обновление.

### Запрос

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### Ответ

`200 OK` с телом `OK`. Изменения времени вступают в силу **немедленно** (часы устройства повторно применяют новую строку POSIX TZ без повторной синхронизации NTP).

### Пример

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```
