---
sidebar_position: 8
title: 行情设置
---

# 行情设置

设备 UI 的 **Price 页** 显示什么。

---

## `GET /api/setting/market`

### 响应

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL,DOGE",
  "KlineRotate":   "on",
  "KlineInterval": "1h",
  "PricePageMode": "kline"
}
```

| 字段            | 类型   | 含义                                                              |
| --------------- | ------ | ----------------------------------------------------------------- |
| `MainCoin`      | string | 主币（大块价格卡片）。                                            |
| `WatchCoins`    | string | 逗号分隔的 watch list。最多 **20 个币**。                          |
| `KlineRotate`   | string | `"on"` 时自动轮换 watch list。                                   |
| `KlineInterval` | string | K 线粒度，如 `"15m"`、`"1h"`、`"4h"`、`"1d"`。                   |
| `PricePageMode` | string | `"kline"`（图表）或 `"list"`（纯价目表）。                       |

---

## `POST /api/setting/market`

部分更新。下次行情周期会立即刷新。

### 请求

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### 响应

`200 OK` 体为 `OK`。超过 20 个的币会被静默丢弃。

---

## `GET /api/market/pairs`

返回设备 **当前缓存的所有 USDT 交易对**。常用于在你自己的 UI 中做币种自动补全。

### 响应

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

平铺数组，币符号不带 `USDT` 后缀（服务端已剥除）。

### 示例

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```