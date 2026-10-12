---
sidebar_position: 6
title: Time Settings
---

# Time Settings

시간대, 시간 형식 및 날짜 형식.

---

## `GET /api/setting/time`

### 응답

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| 필드        | 유형             | 의미                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| UTC로부터의 오프셋(시간). 소수 지원(예: `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` 또는 `24`.                                           |
| `DateFormat` | string           | `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"` 중 하나.  |

---

## `POST /api/setting/time`

부분 업데이트.

### 요청

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### 응답

본문 `OK`와 함께 `200 OK`. 시간 변경은 **즉시** 적용됩니다(기기 시계는 NTP 재동기화 없이 새 POSIX TZ 문자열을 다시 적용).

### 예시

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```

### 응답
