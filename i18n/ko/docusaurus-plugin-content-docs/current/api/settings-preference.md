---
sidebar_position: 7
title: Preference Settings
---

# Preference Settings

디스플레이, LED, 화면 보호기 및 선택적 글로벌 래더.

---

## `GET /api/setting/preference`

### 응답

```json
{
  "Brightness":      80,
  "RotateScreen":    270,
  "LedEnable":       1,
  "ScreenSaver":     "5m",
  "ScreenSaverMode": "image",
  "LadderEnable":    false
}
```

| 필드             | 유형    | 의미                                                           |
| ----------------- | ------- | ----------------------------------------------------------------- |
| `Brightness`      | integer | 화면 밝기, **1-100**(≥ 1로 클램프됨).           |
| `RotateScreen`    | integer | 화면 회전(도). 일반적: `0`, `90`, `180`, `270`.    |
| `LedEnable`       | integer | 상태 LED 활성화 `1`, 비활성화 `0`.                     |
| `ScreenSaver`     | string  | 화면 보호기 시작 전 유휴 시간 초과. 예: `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"`(슬라이드쇼) 또는 `"black"`(백라이트 끔).              |
| `LadderEnable`    | boolean | 글로벌 래더 옵트인. 기본 꺼짐.                 |

---

## `POST /api/setting/preference`

부분 업데이트 — 재부팅 없이 **라이브로** 적용됩니다.

### 요청

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### 응답

본문 `OK`와 함께 `200 OK`.

### 예시

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"`은 **최대 해시레이트**를 원하는 사용자에게 권장되는 설정입니다 — 화면 새로고침 비용이 없습니다.
:::

### 응답
