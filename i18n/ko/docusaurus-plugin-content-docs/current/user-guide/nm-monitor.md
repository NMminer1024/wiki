---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

**NM Monitor**는 **모든 NMMiner 기기 내부에 존재하는** 웹 앱입니다. 휴대폰이나 PC에 설치할 것이 없습니다 — 브라우저에서 마이너 IP를 열기만 하면 됩니다. 모든 모니터링 및 fleet 관리는 NM Monitor와 그 [Swarm](./swarm.md) 메뉴를 통해 이루어집니다.

## NM Monitor 열기

1. 휴대폰이나 PC를 마이너와 **동일한 WiFi**에 연결합니다.
2. 마이너 IP 찾기 — 가장 쉬운 방법은 기기 화면의 **Miner 페이지**를 확인하는 것입니다 (IP가 상태 표시줄에 표시됨). 또는 라우터의 DHCP 테이블에서 조회할 수 있습니다.
3. **Chrome, Edge, Safari 또는 Firefox**에서 `http://<miner-ip>/`를 엽니다. 기억할 포트가 없습니다 — 포트 80.
4. 홈 페이지가 자동으로 로드됩니다.

:::tip
`http://<miner-hostname>/`(예: `http://nm-cyd-c5-ab12cd/`)을 북마크하십시오 — 대부분의 가정용 라우터는 호스트명으로도 마이너에 접근할 수 있게 합니다.
:::

## NM Monitor에서 할 수 있는 것

| 섹션                | 목적                                                              |
| ------------------- | ----------------------------------------------------------------- |
| **Dashboard**       | 실시간 해시레이트, 수락/거부된 셰어, 풀 난이도, 가동 시간, RSSI, 여유 힙, 온도 (지원되는 경우). |
| **Swarm**           | LAN 전체 집계: 동일 WiFi의 모든 NMMiner 보기, 해시레이트 합계, 특정 마이너에 ping하여 깜박이게 하기. [Swarm](./swarm.md) 참조. |
| **Network**         | 호스트명, WiFi SSID, WiFi 비밀번호 변경.                          |
| **Mining**          | 기본 / 대체 풀 URL, 지갑 주소, 풀 비밀번호.                      |
| **Time**            | 시간대, 시간 형식 (12 / 24시간), 날짜 형식.                       |
| **Preferences**     | 화면 밝기, 회전, LED 활성화, 화면 보호기 타임아웃, 화면 보호기 모드 (이미지 / 블랙), [Ladder](./ladder.md) 옵트인. |
| **Market**          | Price 페이지에 표시될 주요 코인 및 관심 목록 선택.                |
| **Weather**         | Weather 페이지에서 사용할 도시 / 위도 / 경도 및 단위 설정.        |
| **Screensaver**     | 브라우저 내에서 변환되어 마이너로 푸시되는 사용자 정의 PNG 업로드. |
| **System**          | 펌웨어 버전, 보드, 여유 힙, **Restart** 버튼.                     |
| **API Doc**         | 실시간 HTTP API 레퍼런스 (`/api-doc`에도 게시됨).                 |

## LAN 어디서나 읽기

NM Monitor는 모든 API 엔드포인트에 `Access-Control-Allow-Origin: *`을 설정합니다. 즉, 어떤 출처에서 제공된 브라우저 페이지도 마이너 상태를 읽을 수 있습니다 — 자체 대시보드 구축에 유용합니다. 전체 엔드포인트 세트는 [API Reference](../api/overview.md)에 문서화되어 있습니다.