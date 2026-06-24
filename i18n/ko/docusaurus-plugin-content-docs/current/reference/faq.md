---
sidebar_position: 3
title: FAQ
---

# FAQ

## NMMiner가 스스로 Bitcoin 블록을 찾을 수 있을까?

수학적으로는 가능합니다 — 복권 티켓과 동일한 확률로. 실질적으로는 불가능합니다. 요점은 **재미**(와 네트워크 지원)이지, 보상이 아닙니다.

## 전기 사용량은 얼마인가?

대부분의 지원 보드는 1W 미만을 소비합니다. $0.30/kWh 기준으로도 월 30센트 미만입니다.

## NMMiner는 기본적으로 어떤 풀을 사용하나?

NMMiner는 자체 SoloBTC 풀로 사전 구성되어 제공됩니다:

- 기본: `stratum+tcp://solobtc.nmminer.com:3333`
- 대체: `stratum+tcp://au.solobtc.nmminer.com:3333`

**지갑 주소만** 자신의 BTC 주소로 변경하면 됩니다. 풀 URL은 보통 그대로 사용해도 좋습니다.

## 다른 풀을 사용할 수 있나?

예 — Stratum v1을 지원하는 모든 풀이 작동합니다. 커뮤니티 SoloBTC 및 DGB 옵션은 [Pool List](./pool-list.md)를 참조하십시오. 높은 최소 셰어 난이도를 요구하는 대형 상업 풀은 모든 셰어를 거부하므로, NMMiner의 공식 [SoloBTC](https://solobtc.nmminer.com) 풀 또는 솔로 스타일 엔드포인트를 사용하십시오.

## NMMiner로 Bitcoin 외에 다른 것을 마이닝할 수 있나?

예 — **DigiByte (DGB)**도 지원됩니다. DGB는 동일한 SHA-256d 알고리즘을 사용하므로 동일한 펌웨어에서 작동합니다. 풀 URL을 DGB 풀로 지정하고 DGB 지갑 주소를 사용하기만 하면 됩니다.

## 기기에 지갑이 필요한가?

아니요. **지급 주소**만 필요합니다. 풀이 구성된 BTC / DGB 주소로 직접 보상을 보냅니다.

## 화면이 몇 초마다 저절로 깨어납니다.

무해한 백그라운드 새로고침입니다. 디스플레이 활동이 전혀 없고 최대 해시레이트를 원한다면 **Black** 화면 보호기 모드를 사용하십시오.

## 동일한 WiFi에서 두 대의 마이너를 실행할 수 있나?

예. NM Monitor의 **Swarm** 메뉴는 동일 LAN의 모든 NMMiner를 자동 검색합니다 — /24 서브넷당 최대 255대. [Swarm](../user-guide/swarm.md) 참조.

## 마이너가 Loading 화면에서 멈춤 / 풀에 연결되지 않음

이 체크리스트를 실행하십시오:

1. **WiFi는 2.4 GHz여야 합니다.** 대부분의 ESP32 칩은 5 GHz를 지원하지 않습니다. 가정용 WiFi가 동일 SSID 아래 두 밴드를 모두 사용하는 경우, 일시적으로 분리하거나 명시적으로 2.4 GHz에 연결하십시오.
2. **지갑 주소 확인.** 오타가 있으면 풀이 워커를 거부합니다. 유효한 Bitcoin 주소는 다음으로 시작합니다:
   - `bc1q...` — Native SegWit (현재 가장 일반적)
   - `bc1p...` — Taproot
   - `1...`    — Legacy P2PKH
   - `3...`    — P2SH (멀티시그 / 래핑된 SegWit)

   이외의 것은 유효한 BTC 주소가 **아닙니다** — 전체 문자열을 복사했는지 다시 확인하십시오.
3. **풀 URL 확인.** 기본적으로 NMMiner는 `stratum+tcp://solobtc.nmminer.com:3333`으로 사전 구성되어 있으며 변경 없이 작동합니다. 풀을 전환한 경우, URL은 `stratum+tcp://host:port` (또는 TLS의 경우 `stratum+ssl://host:port`) 형식이어야 합니다. 검증된 엔드포인트는 [Pool List](./pool-list.md) 참조.
4. **풀 난이도.** 높은 최소 셰어 난이도를 요구하는 대형 상업 풀은 모든 NMMiner 셰어를 거부합니다. NMMiner의 공식 [SoloBTC](https://solobtc.nmminer.com) 풀을 사용하십시오.
5. **전원 공급.** 불안정한 USB 포트는 멈춤 현상처럼 보이는 전압 강하를 일으킬 수 있습니다. 다른 케이블 + 5V/1A 전원을 사용해 보십시오.

위 사항으로 해결되지 않으면, 마이너는 약 15초 후 AP 모드로 전환됩니다 — `nmap-2.4g`에 다시 연결하고 값을 다시 확인하십시오.

## 공개 API가 있나?

예 — 모든 기기는 포트 80에서 문서화된 HTTP API를 노출합니다. [API Reference](../api/overview.md) 참조.

## 소스 코드가 공개되어 있나?

NMMiner 펌웨어는 클로즈드 소스입니다. 각 기기의 HTTP API가 지원되는 통합 표면입니다. 동반 CLI 플래시 도구 및 SoloBTC 풀 웹 프론트엔드는 공개되어 있습니다.

## Ladder 페이지는 무엇을 하나?

참여 마이너가 생성한 역대 최고 셰어 난이도로 순위가 매겨진 **옵트인** 글로벌 상위 10위 리더보드입니다. 지갑은 개인정보 보호를 위해 `first4…last4` 형식으로 표시됩니다. 기본적으로 비활성화되어 있으며 NM Monitor의 **Preferences** 섹션에서 활성화할 수 있습니다. 공개 웹 보기는 [ladder.nmminer.com](https://ladder.nmminer.com/)에서 확인할 수 있습니다 — 전체 내용은 [Ladder](../user-guide/ladder.md) 참조.