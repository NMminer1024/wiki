---
sidebar_position: 9
title: Weather Settings
---

# Weather Settings

**Weather 페이지**의 위치 및 단위.

---

## `GET /api/setting/weather`

### 응답

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

| 필드              | 유형   | 의미                                                          |
| ------------------ | ------ | ---------------------------------------------------------------- |
| `WeatherCity`      | string | 사람이 읽을 수 있는 도시 라벨(화면 표시용).                       |
| `WeatherLat`       | string | 위도(십진 도).                                       |
| `WeatherLon`       | string | 경도(십진 도).                                      |
| `WeatherTempUnit`  | string | `"celsius"` 또는 `"fahrenheit"`.                                   |
| `WeatherSpeedUnit` | string | `"kmh"`, `"mph"` 또는 `"ms"`.                                      |
| `WeatherAltMode`   | string | `"pressure"`, `"humidity"` 등.                                 |

---

## `POST /api/setting/weather`

부분 업데이트. 일회성 갱신을 트리거합니다.

### 요청

```json
{
  "WeatherCity": "Berlin, Berlin, Germany",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### 응답

본문 `OK`와 함께 `200 OK`.

---

## `POST /api/weather/refresh`

즉시 날씨 + AQI 가져오기를 강제합니다.

### 요청

본문 없음.

### 응답

```
200 OK   — 갱신 트리거됨
429      — 속도 제한. 지난 60초 내에 갱신을 보냈습니다
```

`429` 본문은 다음과 같습니다:

```
Rate limited, please wait 42s before refreshing again.
```

### 예시

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
이 엔드포인트는 **수동** "방금 도시를 바꿨으니 지금 갱신"용입니다. 주기적 폴링은 기기가 자체 백그라운드 갱신을 하도록 두세요 — cron 작업에서 호출하면 `429`를 받게 됩니다.
:::

### 응답
