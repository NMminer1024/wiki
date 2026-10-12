---
sidebar_position: 8
title: Market Settings
---

# Market Settings

기기 UI의 **Price 페이지**에 표시되는 내용입니다.

---

## `GET /api/setting/market`

### 응답

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL,DOGE",
  "KlineRotate":   "on",
  "KlineInterval": "1h",
  "PricePageMode": "kline"
}
```

| 필드           | 유형   | 의미                                                          |
| --------------- | ------ | ---------------------------------------------------------------- |
| `MainCoin`      | string | 큰 가격 타일에 표시되는 메인 코인.                    |
| `WatchCoins`    | string | 쉼표로 구분된 관심 목록. 최대 **20개 코인**.              |
| `KlineRotate`   | string | `"on"`이면 관심 목록을 자동 순환.           |
| `KlineInterval` | string | K-라인 캔들 간격, 예: `"15m"`, `"1h"`, `"4h"`, `"1d"`.    |
| `PricePageMode` | string | 차트면 `"kline"`, 단순 가격 목록이면 `"list"`.              |

---

## `POST /api/setting/market`

부분 업데이트. 다음 틱에서 즉시 시장 갱신을 트리거합니다.

### 요청

```json
{
  "MainCoin":      "BTC",
  "WatchCoins":    "BTC,ETH,SOL",
  "KlineInterval": "1d"
}
```

### 응답

본문 `OK`와 함께 `200 OK`. 20개 코인 제한을 초과한 코인은 조용히 폐기됩니다.

---

## `GET /api/market/pairs`

기기가 현재 업스트림에서 캐시한 **USDT 페어의 전체 목록**을 반환합니다 — 자체 UI에서 자동 완성을 채우는 데 유용합니다.

### 응답

```json
["BTC","ETH","SOL","DOGE","XRP","ADA","..."]
```

베이스 코인 심볼의 단순 JSON 배열(`USDT` 접미사는 서버 측에서 제거됨).

### 예시

```bash
curl http://192.168.1.42/api/market/pairs | jq length
```

### 응답
