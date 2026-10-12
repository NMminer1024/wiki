---
sidebar_position: 11
title: Screensaver Upload
---

# Screensaver Upload

사용자 정의 화면 보호기 이미지를 업로드합니다. 브라우저가 PNG / JPG / 이미지를 먼저 기기의 `.ss` 형식으로 변환하며, 이 API는 해당 사전 변환된 파일을 수신합니다.

> 대부분의 사용자는 [NM Monitor](../user-guide/nm-monitor.md)의 **Screensaver** 페이지를 사용해야 합니다 — 변환이 자동으로 처리됩니다. 이 페이지는 프로그래밍 방식으로 자체 에셋을 푸시하려는 통합자를 위한 것입니다.

---

## 2단계 흐름

```mermaid
flowchart LR
    A[GET preflight<br/>파일 크기 포함] --> B{공간 충분?}
    B -- 예 --> C[POST 파일]
    B -- 아니오 --> D[거부 또는 덮어쓸<br/>파일 목록]
    D --> C
    C --> E[/ss/에 저장]
```

---

## `GET /api/update/screensaver/preflight`

`size` 바이트의 파일을 저장할 수 있는지 기기에 묻습니다. 기기는 먼저 공간을 확보해야 하는지 결정합니다(가장 오래된 기존 화면 보호기 덮어쓰기).

### 쿼리 파라미터

| 이름   | 필수 | 의미                                               |
| ------ | -------- | ----------------------------------------------------- |
| `size` | 예      | 업로드할 `.ss` 파일의 바이트 크기. |

### 응답 — 파일이 맞는 경우

```json
{
  "fileSize":       65536,
  "fsFree":         262144,
  "maxUploadable":  327680,
  "action":         "new",
  "overwriteCount": 0,
  "overwriteFiles": [],
  "existingCount":  2,
  "spaceAfter":     196608
}
```

### 응답 — 덮어쓰기가 필요한 경우

```json
{
  "fileSize":       180000,
  "fsFree":         60000,
  "maxUploadable":  400000,
  "action":         "overwrite",
  "overwriteCount": 2,
  "overwriteFiles": [
    {"name": "saver_320_240_001.ss", "size": 65536},
    {"name": "saver_320_240_002.ss", "size": 72104}
  ],
  "existingCount":  4,
  "spaceAfter":     17640
}
```

### 응답 — 너무 큰 경우

```json
{
  "fileSize":       1500000,
  "fsFree":         60000,
  "maxUploadable":  400000,
  "action":         "reject",
  "overwriteCount": 0,
  "overwriteFiles": [],
  "existingCount":  4,
  "spaceAfter":     0
}
```

| 필드              | 유형      | 의미                                                        |
| ------------------ | --------- | -------------------------------------------------------------- |
| `fileSize`         | integer   | 요청된 업로드 크기의 에코.                             |
| `fsFree`           | integer   | 기기 FS의 현재 여유 바이트.                        |
| `maxUploadable`    | integer   | 여유 바이트 **더하기** 기존 화면 보호기 전체 바이트 — 절대 상한. |
| `action`           | string    | `"new"`, `"overwrite"` 또는 `"reject"`.                         |
| `overwriteCount`   | integer   | 공간 확보를 위해 삭제될 기존 화면 보호기 수.    |
| `overwriteFiles`   | object[]  | 곧 제거될 파일 목록(`name` + `size`).        |
| `existingCount`    | integer   | 현재 화면 크기와 일치하는 기존 화면 보호기 파일 수.    |
| `spaceAfter`       | integer   | 업로드 후 예상 여유 바이트.                     |

---

## `POST /api/update/screensaver`

실제 `.ss` 파일을 `multipart/form-data`로 업로드합니다.

### 요청

- 콘텐츠 유형: `multipart/form-data`
- 파일 확장자: **`.ss`로 끝나야 함**.
- 최대 크기: **200 KB**.
- 파일의 첫 2바이트: 매직 `0x4E 0x53`.

### 응답 — 성공

```json
{
  "status": "ok",
  "path":   "/ss/saver_320_240_003.ss"
}
```

### 응답 — 실패

| 상태 | 본문                              | 원인                                 |
| ------ | --------------------------------- | ------------------------------------- |
| 400    | `Only .ss files are accepted.`    | 잘못된 파일 확장자.                 |
| 400    | `Invalid .ss file header.`        | 매직 바이트 불일치.             |
| 413    | `File too large (max 200 KB).`    | 본문이 200 KB 초과.                 |
| 500    | `Failed to open file for writing.`| 파일 시스템 오류.                    |
| 500    | `Write error.`                    | 쓰기 중 파일 시스템 오류.       |

### 예시

```bash
SIZE=$(stat -c%s saver_320_240_003.ss)
curl "http://192.168.1.42/api/update/screensaver/preflight?size=$SIZE"
# "action"을 확인하고 "reject"면 중단
curl -X POST -F "file=@saver_320_240_003.ss" \
     http://192.168.1.42/api/update/screensaver
```

:::warning
화면 보호기를 업로드하면 파일 시스템 플러시 동안 **마이닝이 잠시 일시 중지**됩니다. 해시레이트는 약 1초 내에 정상으로 돌아옵니다.
:::
