---
sidebar_position: 8
title: Market Settings
---

# Market Settings

What the **Price page** of the on-device UI shows.

---

## `GET /api/setting/market`

### Response

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL,DOGE",
  "KlineRotate":   "on",
  "KlineInterval": "1h",
  "PricePageMode": "kline"
}
```

| Field           | Type   | Meaning                                                          |
| --------------- | ------ | ---------------------------------------------------------------- |
| `MainCoin`      | string | The primary coin shown in the big price tile.                    |
| `WatchCoins`    | string | Comma-separated watch list. Capped at **20 coins**.              |
| `KlineRotate`   | string | `"on"` to rotate through the watch list automatically.           |
| `KlineInterval` | string | K-line candle interval, e.g. `"15m"`, `"1h"`, `"4h"`, `"1d"`.    |
| `PricePageMode` | string | `"kline"` for chart, `"list"` for plain price list.              |

---

## `POST /api/setting/market`

Partial update. Triggers an immediate market refresh on the next tick.

### Request

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### Response

`200 OK` with body `OK`. Coins beyond the 20-coin limit are silently dropped.

---

## `GET /api/market/pairs`

Returns the **complete list of USDT pairs** the device currently has cached from upstream — useful for populating an autocomplete in your own UI.

### Response

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

A plain JSON array of base-coin symbols (the `USDT` suffix is stripped server-side).

### Example

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```