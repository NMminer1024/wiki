---
sidebar_position: 4
title: Network Settings
---

# Network Settings

Hostname and WiFi credentials.

---

## `GET /api/setting/network`

### Response

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| Field      | Type   | Meaning                                       |
| ---------- | ------ | --------------------------------------------- |
| `Hostname` | string | mDNS / NetBIOS hostname the miner announces.  |
| `WiFiSSID` | string | Configured WiFi SSID.                         |

The current WiFi password is **never** returned.

---

## `POST /api/setting/network`

Partial update — include only the keys you want to change.

### Request

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| Field      | Type   | Required | Meaning                                                    |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `Hostname` | string | no       | New hostname (alphanumeric and `-` recommended).           |
| `WiFiSSID` | string | no       | New WiFi SSID.                                             |
| `WiFiPWD`  | string | no       | New WiFi password. Write-only.                             |

### Response

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

400 if the body is not valid JSON.

### Example

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
Changing WiFi credentials does **not** restart networking immediately. The next boot uses the new settings.
:::