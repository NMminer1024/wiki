---
sidebar_position: 4
title: Network Settings
---

# Network Settings

호스트명 및 WiFi 자격 증명.

---

## `GET /api/setting/network`

### 응답

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| 필드      | 유형   | 의미                                       |
| ---------- | ------ | --------------------------------------------- |
| `Hostname` | string | 마이너가 알리는 mDNS / NetBIOS 호스트명.  |
| `WiFiSSID` | string | 구성된 WiFi SSID.                         |

현재 WiFi 비밀번호는 **절대 반환되지 않습니다**.

---

## `POST /api/setting/network`

부분 업데이트 — 변경하려는 키만 포함합니다.

### 요청

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| 필드      | 유형   | 필수 | 의미                                                    |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `Hostname` | string | 아니오       | 새 호스트명(영숫자와 `-` 권장).           |
| `WiFiSSID` | string | 아니오       | 새 WiFi SSID.                                             |
| `WiFiPWD`  | string | 아니오       | 새 WiFi 비밀번호. 쓰기 전용.                             |

### 응답

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

본문이 유효한 JSON이 아니면 400.

### 예시

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
WiFi 자격 증명 변경은 **즉시 네트워킹을 재시작하지 않습니다**. 다음 부팅에서 새 설정이 사용됩니다.
:::

### 응답
