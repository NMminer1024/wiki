---
sidebar_position: 8
title: Market Settings
---

# Market 設定

デバイス UI の **Price ページ** に表示する内容です。

---

## `GET /api/setting/market`

### レスポンス

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL,DOGE",
  "KlineRotate":   "on",
  "KlineInterval": "1h",
  "PricePageMode": "kline"
}
```

| フィールド           | 型   | 意味                                                          |
| --------------- | ------ | ---------------------------------------------------------------- |
| `MainCoin`      | string | 大きな価格タイルに表示されるメイン通貨。                    |
| `WatchCoins`    | string | カンマ区切りのウォッチリスト。最大 **20 通貨**。              |
| `KlineRotate`   | string | `"on"` でウォッチリストを自動ローテーション。           |
| `KlineInterval` | string | K ラインローソク足の間隔。例：`"15m"`, `"1h"`, `"4h"`, `"1d"`。    |
| `PricePageMode` | string | チャートなら `"kline"`、単純な価格リストなら `"list"`。              |

---

## `POST /api/setting/market`

部分更新。次のティックで即時のマーケット更新をトリガーします。

### リクエスト

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### レスポンス

本文 `OK` を伴う `200 OK`。20 通貨の上限を超えた通貨は黙って破棄されます。

---

## `GET /api/market/pairs`

デバイスが現在アップストリームからキャッシュしている **USDT ペアの完全なリスト** を返します — 独自 UI のオートコンプリートを埋めるのに便利です。

### レスポンス

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

ベース通貨シンボルの単純な JSON 配列（`USDT` サフィックスはサーバー側で削除されます）。

### 例

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```
