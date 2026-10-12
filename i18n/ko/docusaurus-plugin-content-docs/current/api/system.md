---
sidebar_position: 3
title: System
---

# System Endpoints

---

## `GET /api/system/info`

전체 시스템 스냅샷. NM Monitor의 Dashboard가 매번 새로고침할 때 읽는 데이터입니다.

### 응답

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

### 필드 참조

| 경로                       | 유형     | 의미                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | 항상 `"NMMiner"`.                                      |
| `identity.hostName`        | string   | 기기 호스트명.                                         |
| `identity.fwVersion`       | string   | 펌웨어 버전.                                        |
| `identity.rssi`            | integer  | WiFi 신호 강도(dBm).                              |
| `miner.hashRate`           | number   | 현재 해시레이트, **기가해시/초**(H/s로 변환하려면 1e9 곱함). |
| `miner.sAccepted`          | integer  | 풀이 승인한 셰어.                             |
| `miner.sRejected`          | integer  | 풀이 거부한 셰어.                            |
| `miner.uptimeSeconds`      | integer  | 현재 부팅 이후 초.                          |
| `miner.uptimeEver`         | integer  | 부팅을 아우르는 누적 가동 시간(초).              |
| `miner.networkDiff`        | string   | 현재 Bitcoin 네트워크 난이도(십진수).            |
| `miner.poolDiff`           | string   | 풀이 설정한 현재 셰어 난이도.                |
| `miner.lastDiff`           | string   | 가장 최근에 제출된 셰어의 난이도.           |
| `miner.bestDiffSession`    | string   | 이번 부팅의 최고 셰어 난이도.                         |
| `miner.bestDiffEver`       | string   | 역대 최고 셰어 난이도.              |
| `miner.blkhits`            | integer  | 네트워크 난이도 히트의 평생 카운트(블록 운).  |
| `miner.freeHeap`           | integer  | 현재 여유 힙(바이트).                              |
| `miner.minFreeHeap`        | integer  | 이번 부팅에서 관측된 최저 여유 힙.                     |
| `stratum.url`              | string   | 활성 풀 `host:port`.                                 |
| `stratum.user`             | string   | 인증된 워커 이름(wallet.worker).               |
| `temps.vcore`              | number / null | 코어 온도(°C), 온칩 센서가 없는 보드에서는 `null`. |
| `temps.asic`               | null     | 미래 하드웨어용 예약. ESP32에서는 항상 `null`.    |
| `storage.fsTotal`          | integer  | 기기 내 파일 시스템 크기(바이트).                     |
| `storage.fsUsed`           | integer  | 기기 내 파일 시스템 사용량(바이트).                    |

### 예시

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (즉 956.4 KH/s)
```

---

## `POST /api/system/restart`

마이너를 즉시 재부팅합니다.

### 요청

본문 없음.

### 응답

```json
{ "status": "ok" }
```

재부팅은 **응답 전송 약 600ms 후**에 발생하므로 연결이 깔끔하게 닫힙니다.

### 예시

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
재시작은 Stratum 세션과 미제출 셰어를 폐기합니다. 정말 필요한 경우가 아니라면 주기적 재시작을 스크립트화하지 마세요.
:::
