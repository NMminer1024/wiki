---
sidebar_position: 9
title: Weather Settings
---

# 天気設定

**Weather ページ** の場所と単位。

---

## `GET /api/setting/weather`

### レスポンス

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

| フィールド              | 型   | 意味                                                          |
| ------------------ | ------ | ---------------------------------------------------------------- |
| `WeatherCity`      | string | 人間が読める都市ラベル（画面表示用）。                       |
| `WeatherLat`       | string | 緯度（十進法度）。                                       |
| `WeatherLon`       | string | 経度（十進法度）。                                      |
| `WeatherTempUnit`  | string | `"celsius"` または `"fahrenheit"`。                                   |
| `WeatherSpeedUnit` | string | `"kmh"`, `"mph"` または `"ms"`。                                      |
| `WeatherAltMode`   | string | `"pressure"`, `"humidity"` など。                                 |

---

## `POST /api/setting/weather`

部分更新。1 回限りの更新をトリガーします。

### リクエスト

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### レスポンス

本文 `OK` を伴う `200 OK`。

---

## `POST /api/weather/refresh`

天気 + AQI の即時取得を強制します。

### リクエスト

ボディなし。

### レスポンス

```
200 OK   — 更新がトリガーされました
429      — レート制限。過去 60 秒以内に更新を送信しました
```

`429` のボディは次のようになります：

```
Rate limited, please wait 42s before refreshing again.
```

### 例

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
このエンドポイントは **手動** の「今、都市を変えたので更新」用です。定期的なポーリングには、デバイス自身のバックグラウンド更新に任せてください — cron ジョブからこれを呼び出すと `429` を受け取ります。
:::
