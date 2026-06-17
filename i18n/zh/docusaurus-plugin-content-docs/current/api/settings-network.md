---
sidebar_position: 4
title: 网络设置
---

# 网络设置

Hostname 和 WiFi 凭据。

---

## `GET /api/setting/network`

### 响应

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| 字段       | 类型   | 含义                                              |
| ---------- | ------ | ------------------------------------------------- |
| `Hostname` | string | 设备播报的 mDNS / NetBIOS hostname。              |
| `WiFiSSID` | string | 已配置的 WiFi SSID。                              |

**永远不会**返回当前 WiFi 密码。

---

## `POST /api/setting/network`

部分更新 — 只传你想改的字段。

### 请求

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| 字段       | 类型   | 必填 | 含义                                                       |
| ---------- | ------ | ---- | ---------------------------------------------------------- |
| `Hostname` | string | 否   | 新 hostname（建议只用字母数字 + `-`）。                    |
| `WiFiSSID` | string | 否   | 新 SSID。                                                  |
| `WiFiPWD`  | string | 否   | 新密码。只写不读。                                         |

### 响应

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

JSON 非法时返回 400。

### 示例

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
改 WiFi 凭据**不会立即重新连网** — 下次开机才生效。
:::