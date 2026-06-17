---
sidebar_position: 9
title: 天气设置
---

# 天气设置

**Weather 页** 用的位置和单位。

---

## `GET /api/setting/weather`

### 响应

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

| 字段               | 类型   | 含义                                                            |
| ------------------ | ------ | --------------------------------------------------------------- |
| `WeatherCity`      | string | 城市的可读标签（屏幕上显示用）。                                |
| `WeatherLat`       | string | 纬度（十进制度）。                                              |
| `WeatherLon`       | string | 经度（十进制度）。                                              |
| `WeatherTempUnit`  | string | `"celsius"` 或 `"fahrenheit"`。                                |
| `WeatherSpeedUnit` | string | `"kmh"`、`"mph"` 或 `"ms"`。                                   |
| `WeatherAltMode`   | string | `"pressure"`、`"humidity"` 等。                                |

---

## `POST /api/setting/weather`

部分更新。会触发一次性刷新。

### 请求

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### 响应

`200 OK` 体为 `OK`。

---

## `POST /api/weather/refresh`

立即触发一次天气 + AQI 拉取。

### 请求

无请求体。

### 响应

```
200 OK   — 已触发刷新
429      — 限流；过去 60 秒已经触发过一次
```

`429` 响应体类似：

```
Rate limited, please wait 42s before refreshing again.
```

### 示例

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
这个端点是给"我刚改了城市，立刻刷"用的。定期刷天气**让设备自己后台跑就行**，cron 调用会被 `429`。
:::