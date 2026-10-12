---
sidebar_position: 8
title: Configurações de Mercado
---

# Configurações de Mercado

O que a **página Preço** da interface do dispositivo exibe.

---

## `GET /api/setting/market`

### Resposta

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
| `MainCoin`      | string | A moeda principal exibida no grande bloco de preço.                    |
| `WatchCoins`    | string | Lista de observação separada por vírgulas. Limitada a **20 moedas**.              |
| `KlineRotate`   | string | `"on"` para alternar automaticamente pela lista de observação.           |
| `KlineInterval` | string | Intervalo da vela K-line, ex.: `"15m"`, `"1h"`, `"4h"`, `"1d"`.    |
| `PricePageMode` | string | `"kline"` para gráfico, `"list"` para lista de preços simples.              |

---

## `POST /api/setting/market`

Atualização parcial. Dispara uma atualização de mercado imediata no próximo tick.

### Requisição

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### Resposta

`200 OK` com corpo `OK`. Moedas além do limite de 20 são descartadas silenciosamente.

---

## `GET /api/market/pairs`

Retorna a **lista completa de pares USDT** que o dispositivo tem atualmente em cache do upstream — útil para preencher um autocomplete em sua própria interface.

### Resposta

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

Um array JSON simples de símbolos de moeda base (o sufixo `USDT` é removido no servidor).

### Exemplo

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```

### Resposta
