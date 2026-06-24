---
sidebar_position: 2
title: Pool List
---

# Pool List

NMMiner의 ~150–1000 KH/s 해시레이트와 잘 작동하는 것으로 알려진 풀입니다. 이들은 모두 소규모 마이너를 위해 동적으로 셰어 난이도를 조정합니다.

## Bitcoin (BTC) — **기본값**

| Pool                              | Stratum URL                                       | Dashboard                                                |
| --------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **NMMiner SoloBTC** (기본)        | `stratum+tcp://solobtc.nmminer.com:3333`          | [solobtc.nmminer.com](https://solobtc.nmminer.com)       |
| **NMMiner SoloBTC AU** (대체)     | `stratum+tcp://au.solobtc.nmminer.com:3333`       | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

SoloBTC 풀은 NMMiner에서 운영합니다. 모든 기기에 사전 구성되어 있습니다 — 기본적으로 자신의 지갑 주소만 입력하면 됩니다.

## DigiByte (DGB)

| Pool                | Stratum URL                                       | Dashboard                                            |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`    | [digibyte.solominer.net](https://digibyte.solominer.net) |

DGB는 BTC와 SHA-256d 해싱 알고리즘을 공유하므로, 동일한 NMMiner 펌웨어가 빌드 변경 없이 작동합니다 — 풀 URL과 지갑 주소만 다릅니다.

## 참고 사항

:::tip
풀이 TLS를 지원하는 경우, 체계를 `stratum+ssl://`로 전환하십시오 — 동일한 호스트 및 포트입니다.
:::

:::warning
높은 최소 셰어 난이도(예: `0x100000000`)를 요구하는 대형 상업 풀은 모든 NMMiner 셰어를 거부합니다. 소규모 마이너를 위해 셰어 난이도를 매우 낮게 조정하는 SoloBTC 스타일 엔드포인트를 사용하십시오.
:::