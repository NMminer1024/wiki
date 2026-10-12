---
sidebar_position: 8
title: Configuración de mercado
---

# Configuración de mercado

Lo que muestra la **página Price** de la interfaz del dispositivo.

---

## `GET /api/setting/market`

### Respuesta

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL,DOGE",
  "KlineRotate":   "on",
  "KlineInterval": "1h",
  "PricePageMode": "kline"
}
```

| Campo           | Tipo   | Significado                                                          |
| --------------- | ------ | ---------------------------------------------------------------- |
| `MainCoin`      | string | La moneda principal mostrada en el mosaico de precio grande.                    |
| `WatchCoins`    | string | Lista de seguimiento separada por comas. Limitada a **20 monedas**.              |
| `KlineRotate`   | string | `"on"` para rotar por la lista de seguimiento automáticamente.           |
| `KlineInterval` | string | Intervalo de vela K-line, p. ej. `"15m"`, `"1h"`, `"4h"`, `"1d"`.    |
| `PricePageMode` | string | `"kline"` para gráfico, `"list"` para lista de precios simple.              |

---

## `POST /api/setting/market`

Actualización parcial. Dispara una actualización de mercado inmediata en el siguiente tick.

### Solicitud

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### Respuesta

`200 OK` con cuerpo `OK`. Las monedas más allá del límite de 20 se descartan silenciosamente.

---

## `GET /api/market/pairs`

Devuelve la **lista completa de pares USDT** que el dispositivo tiene actualmente en caché del upstream — útil para poblar un autocompletado en su propia interfaz.

### Respuesta

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

Un array JSON simple de símbolos de moneda base (el sufijo `USDT` se elimina en el servidor).

### Ejemplo

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```
