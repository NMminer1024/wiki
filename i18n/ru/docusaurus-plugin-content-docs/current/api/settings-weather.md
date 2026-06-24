---
sidebar_position: 9
title: Настройки погоды
---

# Настройки погоды (Weather)

Местоположение и единицы измерения для **страницы Weather**.

---

## `GET /api/setting/weather`

### Ответ

```json
{
  "WeatherCity":      "Beijing, Beijing, China",
  "WeatherLat":       "39.9075",
  "WeatherLon":       "116.3972",
  "WeatherTempUnit":  "celsius",
  "WeatherSpeedUnit": "kmh",
  "WeatherAltMode":   "pressure"
}
```

| Поле                | Тип    | Значение                                                          |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `WeatherCity`       | string | Человекочитаемая метка города (отображается на экране).           |
| `WeatherLat`        | string | Широта, десятичные градусы.                                       |
| `WeatherLon`        | string | Долгота, десятичные градусы.                                      |
| `WeatherTempUnit`   | string | `"celsius"` или `"fahrenheit"`.                                   |
| `WeatherSpeedUnit`  | string | `"kmh"`, `"mph"` или `"ms"`.                                      |
| `WeatherAltMode`    | string | `"pressure"`, `"humidity"` и т.д.                                 |

---

## `POST /api/setting/weather`

Частичное обновление. Вызывает однократное обновление.

### Запрос

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### Ответ

`200 OK` с телом `OK`.

---

## `POST /api/weather/refresh`

Принудительно запускает немедленную загрузку погоды + AQI.

### Запрос

Без тела.

### Ответ

```
200 OK   — обновление запущено
429      — ограничение частоты; вы отправили обновление в последние 60 с
```

Тело `429` выглядит так:

```
Rate limited, please wait 42s before refreshing again.
```

### Пример

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
Эта конечная точка предназначена для **ручного** использования: «Я только что изменил город, обнови сейчас». Для периодического опроса просто позвольте устройству выполнять собственное фоновое обновление — вызов этого из cron-задачи приведёт к `429`.
:::
