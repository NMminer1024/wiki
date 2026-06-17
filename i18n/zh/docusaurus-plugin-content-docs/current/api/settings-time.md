---
sidebar_position: 6
title: 时间设置
---

# 时间设置

时区、时间格式、日期格式。

---

## `GET /api/setting/time`

### 响应

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| 字段         | 类型             | 含义                                                          |
| ------------ | ---------------- | ------------------------------------------------------------- |
| `Timezone`   | string（支持小数）| 与 UTC 的偏移（小时），支持 `5.5`、`-3.5` 这类。              |
| `TimeFormat` | integer          | `12` 或 `24`。                                                |
| `DateFormat` | string           | `"DD-MM-YYYY"` / `"MM-DD-YYYY"` / `"YYYY-MM-DD"` 之一。      |

---

## `POST /api/setting/time`

部分更新。

### 请求

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### 响应

`200 OK` 体为 `OK`。时间相关变更**立即生效**（设备时钟会刷新 POSIX TZ 字符串，无需重新 NTP）。

### 示例

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```