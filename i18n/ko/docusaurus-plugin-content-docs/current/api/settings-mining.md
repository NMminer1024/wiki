---
sidebar_position: 5
title: Mining Settings
---

# Mining Settings

기본 및 대체 풀 URL, 지갑 및 워커 비밀번호.

---

## `GET /api/setting/mining`

### 응답

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| 필드               | 유형   | 의미                                                           |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `PrimaryPool`       | string | 기본 Stratum URL(`stratum+tcp://...` 또는 `stratum+ssl://...`). |
| `PrimaryAddress`    | string | 워커 이름 — 일반적으로 `<wallet>.<worker>`.                      |
| `PrimaryPassword`   | string | 워커 비밀번호. 대부분의 풀은 `x`를 허용합니다.                           |
| `SecondaryPool`     | string | 대체 풀 URL. 기본 풀에 연결할 수 없을 때 사용.          |
| `SecondaryAddress`  | string | 대체 워커 이름.                                             |
| `SecondaryPassword` | string | 대체 워커 비밀번호.                                         |

---

## `POST /api/setting/mining`

부분 업데이트.

### 요청

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### 응답

본문 `OK`와 함께 `200 OK`. 유효하지 않은 JSON이면 `400`.

### 예시

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
변경 사항은 마이너가 다음에 풀에 재연결할 때 적용됩니다 — 보통 몇 초 이내입니다.
:::

### 응답
