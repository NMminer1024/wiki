---
sidebar_position: 8
title: Markteinstellungen
---

# Markteinstellungen

Was die **Preisseite** der Geräte-UI anzeigt.

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

| Feld            | Typ    | Bedeutung                                                          |
| --------------- | ------ | ------------------------------------------------------------------ |
| `MainCoin`      | string | Die primäre Coin, die in der großen Preiskachel angezeigt wird.    |
| `WatchCoins`    | string | Kommagetrennte Watchlist. Begrenzt auf **20 Coins**.               |
| `KlineRotate`   | string | `"on"`, um automatisch durch die Watchlist zu rotieren.            |
| `KlineInterval` | string | K-Line-Kerzenintervall, z.B. `"15m"`, `"1h"`, `"4h"`, `"1d"`.     |
| `PricePageMode` | string | `"kline"` für Diagramm, `"list"` für einfache Preisliste.          |

---

## `POST /api/setting/market`

Partielles Update. Löst eine sofortige Marktaktualisierung beim nächsten Tick aus.

### Request

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### Response

`200 OK` mit Body `OK`. Coins über das 20-Coin-Limit hinaus werden stillschweigend verworfen.

---

## `GET /api/market/pairs`

Gibt die **vollständige Liste der USDT-Paare** zurück, die das Gerät derzeit vom Upstream gecacht hat — nützlich zum Befüllen einer Autovervollständigung in Ihrer eigenen UI.

### Response

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

Ein einfaches JSON-Array von Basis-Coin-Symbolen (das `USDT`-Suffix wird serverseitig entfernt).

### Beispiel

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```
