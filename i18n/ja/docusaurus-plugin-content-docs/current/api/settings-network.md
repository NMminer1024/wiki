---
sidebar_position: 4
title: Network Settings
---

# ネットワーク設定

ホスト名と WiFi 認証情報。

---

## `GET /api/setting/network`

### レスポンス

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| フィールド      | 型   | 意味                                       |
| ---------- | ------ | --------------------------------------------- |
| `Hostname` | string | マイナーがアナウンスする mDNS / NetBIOS ホスト名。  |
| `WiFiSSID` | string | 設定済み WiFi SSID。                         |

現在の WiFi パスワードは **決して返されません**。

---

## `POST /api/setting/network`

部分更新 — 変更したいキーだけを含めます。

### リクエスト

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| フィールド      | 型   | 必須 | 意味                                                    |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `Hostname` | string | いいえ       | 新しいホスト名（英数字と `-` を推奨）。           |
| `WiFiSSID` | string | いいえ       | 新しい WiFi SSID。                                             |
| `WiFiPWD`  | string | いいえ       | 新しい WiFi パスワード。書き込み専用。                             |

### レスポンス

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

ボディが有効な JSON でない場合は 400。

### 例

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
WiFi 認証情報の変更は **すぐにはネットワークを再起動しません**。次の起動で新しい設定が使用されます。
:::
