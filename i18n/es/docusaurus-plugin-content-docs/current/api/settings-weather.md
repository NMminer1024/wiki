---
sidebar_position: 9
title: Configuración de clima
---

# Configuración de clima

Ubicación y unidades para la **página Weather**.

---

## `GET /api/setting/weather`

### Respuesta

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

| Campo              | Tipo   | Significado                                                          |
| ------------------ | ------ | ---------------------------------------------------------------- |
| `WeatherCity`      | string | Etiqueta de ciudad legible por humanos (usada en pantalla).                       |
| `WeatherLat`       | string | Latitud, grados decimales.                                       |
| `WeatherLon`       | string | Longitud, grados decimales.                                      |
| `WeatherTempUnit`  | string | `"celsius"` o `"fahrenheit"`.                                   |
| `WeatherSpeedUnit` | string | `"kmh"`, `"mph"` o `"ms"`.                                      |
| `WeatherAltMode`   | string | `"pressure"`, `"humidity"`, etc.                                 |

---

## `POST /api/setting/weather`

Actualización parcial. Dispara una actualización única.

### Solicitud

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### Respuesta

`200 OK` con cuerpo `OK`.

---

## `POST /api/weather/refresh`

Fuerza una obtención inmediata de clima + AQI.

### Solicitud

Sin cuerpo.

### Respuesta

```
200 OK   — actualización activada
429      — limitado por tasa; envió una actualización en los últimos 60 s
```

El cuerpo de `429` luce como:

```
Rate limited, please wait 42s before refreshing again.
```

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
Este endpoint está pensado para uso **manual** — "acabo de cambiar la ciudad, actualice ahora". Para sondeo periódico, deje que el dispositivo haga su propia actualización en segundo plano — llamar a esto desde un cron job le dará `429`s.
:::
