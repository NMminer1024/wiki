---
sidebar_position: 9
title: Configurações de Clima
---

# Configurações de Clima

Localização e unidades para a **página Clima**.

---

## `GET /api/setting/weather`

### Resposta

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
| `WeatherCity`      | string | Rótulo de cidade legível por humanos (usado na tela).                       |
| `WeatherLat`       | string | Latitude, graus decimais.                                       |
| `WeatherLon`       | string | Longitude, graus decimais.                                      |
| `WeatherTempUnit`  | string | `"celsius"` ou `"fahrenheit"`.                                   |
| `WeatherSpeedUnit` | string | `"kmh"`, `"mph"` ou `"ms"`.                                      |
| `WeatherAltMode`   | string | `"pressure"`, `"humidity"`, etc.                                 |

---

## `POST /api/setting/weather`

Atualização parcial. Dispara uma atualização única.

### Requisição

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### Resposta

`200 OK` com corpo `OK`.

---

## `POST /api/weather/refresh`

Força uma busca imediata de clima + AQI.

### Requisição

Sem corpo.

### Resposta

```
200 OK   — atualização acionada
429      — limitado por taxa; você enviou uma atualização nos últimos 60 s
```

O corpo do `429` se parece com:

```
Rate limited, please wait 42s before refreshing again.
```

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
Este endpoint é para uso **manual** — "acabei de mudar a cidade, atualize agora". Para polling periódico, deixe o dispositivo fazer sua própria atualização em segundo plano — chamar isso de um cron job resultará em `429`s.
:::

### Resposta
