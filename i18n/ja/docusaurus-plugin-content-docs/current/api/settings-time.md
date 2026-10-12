---
sidebar_position: 6
title: Time Settings
---

# 時刻設定

タイムゾーン、時刻形式、日付形式。

---

## `GET /api/setting/time`

### レスポンス

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| フィールド        | 型             | 意味                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| UTC からのオフセット（時間）。小数対応（例：`5.5`, `-3.5`）。 |
| `TimeFormat` | integer          | `12` または `24`。                                           |
| `DateFormat` | string           | `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"` のいずれか。  |

---

## `POST /api/setting/time`

部分更新。

### リクエスト

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### レスポンス

本文 `OK` を伴う `200 OK`。時刻変更は **即座に** 有効になります（デバイスクロックは NTP 再同期なしで新しい POSIX TZ 文字列を再適用します）。

### 例

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```
