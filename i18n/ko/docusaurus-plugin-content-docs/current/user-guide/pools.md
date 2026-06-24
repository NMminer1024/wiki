---
sidebar_position: 4
title: Pools
---

# Pools

ESP32 해시레이트가 작기 때문에(수백 KH/s), NMMiner는 네트워크 난이도보다 훨씬 낮은 셰어를 수락하는 **저난이도** 풀에 연결합니다.

NMMiner는 자체 풀로 사전 구성되어 제공됩니다 — **보통 아무것도 변경할 필요가 없습니다**.

## 내장 기본값

| 슬롯    | URL                                              | 지역         |
| ------- | ------------------------------------------------ | ------------ |
| 기본    | `stratum+tcp://solobtc.nmminer.com:3333`         | 글로벌       |
| 대체    | `stratum+tcp://au.solobtc.nmminer.com:3333`      | 아시아-태평양 |

둘 다 NMMiner의 공식 [SoloBTC](https://solobtc.nmminer.com) 풀로, 수백 KH/s 마이너를 위해 설계되었습니다. 대시보드: [solobtc.nmminer.com](https://solobtc.nmminer.com).

기본 풀에 연결할 수 없게 되면 마이너가 자동으로 대체 풀로 전환합니다. 기본 풀이 복구되면 마이너는 약 10초 이내에 다시 전환합니다 (v1.7.05 이후).

## 지원되는 풀 URL 체계

| 체계                 | 의미                                                    |
| -------------------- | ------------------------------------------------------- |
| `stratum+tcp://`     | 일반 TCP Stratum v1.                                    |
| `stratum+ssl://`     | TLS 래핑 Stratum (풀이 SSL을 요구하는 경우 설정).       |

## 지원되는 코인

NMMiner는 현재 **Bitcoin (BTC)** 및 **DigiByte (DGB)**를 지원합니다. 둘 다 SHA-256d를 사용하므로 동일한 해싱 파이프라인이 둘 다 제공합니다. 각각에 대해 검증된 엔드포인트는 [Pool List](../reference/pool-list.md)를 참조하십시오.

## 왜 대형 상업 풀이 아닌가?

NMMiner의 해시레이트는 수백 KH/s 수준입니다. 높은 최소 셰어 난이도를 요구하는 풀은 모든 NMMiner 셰어를 거부합니다. NMMiner의 공식 [SoloBTC](https://solobtc.nmminer.com) 풀 또는 커뮤니티 솔로 스타일 풀 — 매우 낮은 셰어 난이도를 수락하는 모든 풀을 사용하십시오.