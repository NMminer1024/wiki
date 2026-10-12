---
sidebar_position: 3
title: System
---

# System エンドポイント

---

## `GET /api/system/info`

完全なシステムスナップショット。NM Monitor の Dashboard が毎回のリフレッシュで読み取るものです。

### レスポンス

```json
{
  "identity": {
    "hwModel":   "NMMiner",
    "hostName":  "nm-cyd-c5-ab12cd",
    "fwVersion": "v2.0.04",
    "rssi":      -52
  },
  "miner": {
    "hashRate":         0.000956432,
    "sAccepted":        128,
    "sRejected":        2,
    "uptimeSeconds":    4321,
    "uptimeEver":       58732,
    "networkDiff":      "112392546849.9999",
    "poolDiff":         "0.00050",
    "lastDiff":         "0.00073",
    "bestDiffSession":  "0.04215",
    "bestDiffEver":     "1.78330",
    "blkhits":          0,
    "freeHeap":         118432,
    "minFreeHeap":      94312
  },
  "stratum": {
    "url":  "solobtc.nmminer.com:3333",
    "user": "bc1q....worker1"
  },
  "temps": {
    "vcore": 51.3,
    "asic":  null
  },
  "storage": {
    "fsTotal": 1048576,
    "fsUsed":  262144
  }
}
```

### フィールド参照

| パス                       | 型     | 意味                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | 常に `"NMMiner"`。                                      |
| `identity.hostName`        | string   | デバイスホスト名。                                         |
| `identity.fwVersion`       | string   | ファームウェアバージョン。                                        |
| `identity.rssi`            | integer  | WiFi 信号強度（dBm）。                              |
| `miner.hashRate`           | number   | 現在のハッシュレート（**ギガハッシュ/秒**、H/s にするには 1e9 を乗算）。 |
| `miner.sAccepted`          | integer  | プールが承認したシェア。                             |
| `miner.sRejected`          | integer  | プールが拒否したシェア。                            |
| `miner.uptimeSeconds`      | integer  | 現在の起動からの秒数。                          |
| `miner.uptimeEver`         | integer  | 起動をまたぐ累積稼働時間（秒）。              |
| `miner.networkDiff`        | string   | 現在の Bitcoin ネットワーク難易度（十進数）。            |
| `miner.poolDiff`           | string   | プールが設定した現在のシェア難易度。                |
| `miner.lastDiff`           | string   | 直近に送信されたシェアの難易度。           |
| `miner.bestDiffSession`    | string   | この起動での最高シェア難易度。                         |
| `miner.bestDiffEver`       | string   | 過去最高のシェア難易度。              |
| `miner.blkhits`            | integer  | ネットワーク難易度ヒットの生涯カウント（ブロック運）。  |
| `miner.freeHeap`           | integer  | 現在の空きヒープ（バイト）。                              |
| `miner.minFreeHeap`        | integer  | この起動で観測された最低空きヒープ。                     |
| `stratum.url`              | string   | アクティブなプール `host:port`。                                 |
| `stratum.user`             | string   | 認証済みワーカー名（wallet.worker）。               |
| `temps.vcore`              | number / null | コア温度（°C）、オンチップセンサーがないボードでは `null`。 |
| `temps.asic`               | null     | 将来のハードウェア用に予約。ESP32 では常に `null`。    |
| `storage.fsTotal`          | integer  | デバイス内ファイルシステムのサイズ（バイト）。                     |
| `storage.fsUsed`           | integer  | デバイス内ファイルシステムの使用量（バイト）。                    |

### 例

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (つまり 956.4 KH/s)
```

---

## `POST /api/system/restart`

マイナーを即座に再起動します。

### リクエスト

ボディなし。

### レスポンス

```json
{ "status": "ok" }
```

再起動は **レスポンス送信の約 600 ms 後** に発生するため、接続がきれいに閉じられます。

### 例

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
再起動すると Stratum セッションと未送信のシェアが破棄されます。本当に必要な場合を除き、定期的な再起動のスクリプト化は避けてください。
:::
