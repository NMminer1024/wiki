---
sidebar_position: 5
title: Mining Settings
---

# マイニング設定

プライマリ＆フォールバックプール URL、ウォレット、ワーカーパスワード。

---

## `GET /api/setting/mining`

### レスポンス

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| フィールド               | 型   | 意味                                                           |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `PrimaryPool`       | string | プライマリ Stratum URL（`stratum+tcp://...` または `stratum+ssl://...`）。 |
| `PrimaryAddress`    | string | ワーカー名 — 通常は `<wallet>.<worker>`。                      |
| `PrimaryPassword`   | string | ワーカーパスワード。ほとんどのプールは `x` を受け入れます。                           |
| `SecondaryPool`     | string | フォールバックプール URL。プライマリが到達不能の場合に使用。          |
| `SecondaryAddress`  | string | フォールバックワーカー名。                                             |
| `SecondaryPassword` | string | フォールバックワーカーパスワード。                                         |

---

## `POST /api/setting/mining`

部分更新。

### リクエスト

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### レスポンス

本文 `OK` を伴う `200 OK`。無効な JSON の場合は `400`。

### 例

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
変更は次回マイナーがプールに再接続したときに有効になります — 通常数秒以内です。
:::
