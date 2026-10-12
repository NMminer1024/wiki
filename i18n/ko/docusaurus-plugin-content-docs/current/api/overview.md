---
sidebar_position: 1
title: API Overview
---

# API Overview

모든 NMMiner 기기는 **포트 80**에서 HTTP 서버를 실행하며, 완전한 REST 스타일 API를 노출합니다. 동일한 API가 다음에서 사용됩니다:

- 내장 [NM Monitor](../user-guide/nm-monitor.md) 브라우저 UI.
- [Swarm](../user-guide/swarm.md) 애그리게이터.
- 상태를 읽거나 설정을 적용하려는 모든 사용자 — 여러분, 대시보드, Grafana 플러그인, Python 스크립트 등.

> ✅ 이 페이지는 **공개 계약**을 문서화합니다: 경로, 메서드, 요청 본문, 응답 본문, 상태 코드.
> ❌ 구현을 문서화하지 **않습니다**. 기기를 HTTP를 통해 접근 가능한 블랙박스로 취급하십시오.

## 기본 URL

```
http://<miner-ip>/
```

또는 호스트명(대부분의 홈 라우터가 해석):

```
http://<miner-hostname>/
```

IP / 호스트명은 기기 화면의 **Miner 페이지** 또는 NM Monitor의 **System** 섹션에서 확인할 수 있습니다.

## CORS

모든 엔드포인트는 다음과 같이 응답합니다:

```
Access-Control-Allow-Origin: *
```

프록시 없이 어떤 브라우저 페이지에서든 API를 호출할 수 있습니다.

## 인증

현재 **인증이 없습니다**. API는 신뢰할 수 있는 LAN 내에서 사용하도록 설계되었습니다. **자체 게이트웨이 없이 공용 인터넷에 노출하지 마십시오.**

## 콘텐츠 유형

- 요청 본문은 `application/json`을 사용합니다.
- 응답 본문은 `application/json` 또는 `text/plain`입니다.
- 모든 엔드포인트는 CORS 사전 비행 `OPTIONS` 요청을 수락하고 응답합니다.

## 카테고리

| 카테고리                | 엔드포인트                                                          |
| ----------------------- | ------------------------------------------------------------------ |
| [Discovery](./discovery.md) | `GET /probe`, `GET /alive`                                     |
| [System](./system.md)       | `GET /api/system/info`, `POST /api/system/restart`             |
| [Network settings](./settings-network.md) | `GET/POST /api/setting/network`                  |
| [Mining settings](./settings-mining.md)   | `GET/POST /api/setting/mining`                   |
| [Time settings](./settings-time.md)       | `GET/POST /api/setting/time`                     |
| [Preference settings](./settings-preference.md) | `GET/POST /api/setting/preference`         |
| [Market settings](./settings-market.md)   | `GET/POST /api/setting/market`, `GET /api/market/pairs` |
| [Weather settings](./settings-weather.md) | `GET/POST /api/setting/weather`, `POST /api/weather/refresh` |
| [Swarm find](./swarm-find.md)             | `POST /api/swarm/find`                           |
| [Screensaver upload](./screensaver-upload.md) | `GET /api/update/screensaver/preflight`, `POST /api/update/screensaver` |
| [Examples](./examples.md)                 | cURL / Python / JavaScript                       |

## 버전 관리

계약은 **마이너 펌웨어 버전 간에 안정적**입니다(예: `v2.0.x`). 파괴적 변경은 [GitHub 릴리스 로그](https://github.com/NMminer1024/NMMiner#release-log)에 명시됩니다.

## 상태 코드

| 코드 | 의미                                                          |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — 응답 본문이 문서화된 스키마와 일치.                |
| 204  | OK — CORS 사전 비행에 사용.                                    |
| 400  | 잘못된 요청 — 일반적으로 유효하지 않은 JSON 또는 범위 밖 값.       |
| 404  | 해당 엔드포인트 없음.                                                |
| 413  | 페이로드가 너무 큼(화면 보호기 업로드 전용).                     |
| 429  | 속도 제한 — 현재 `/api/weather/refresh`에서 사용.         |
| 500  | 기기 오류(예: 업로드 중 파일 시스템 쓰기 실패).     |

## 검색 가능성

`http://<miner-ip>/api-doc`을 방문하면 마이너 자체가 제공하는 라이브 HTML 참조를 볼 수 있습니다. 실제 API가 이 위키와 다르다면, 기기의 라이브 `/api-doc`이 항상 우선합니다.
