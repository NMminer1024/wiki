---
sidebar_position: 5
title: Firmware Update
---

# Firmware Update

업그레이드는 최초 플래시와 동일합니다: 브라우저 플래시 도구를 다시 열고, 보드를 선택하고, 설치합니다.

## 단계

1. Chrome 또는 Edge에서 [flash.nmminer.com](https://flash.nmminer.com)을 엽니다.
2. 보드 프로필을 선택합니다.
3. **Install**을 클릭하고, 직렬 포트를 선택한 다음, 완료될 때까지 기다립니다.

업데이트 후 **라이선스를 다시 활성화할 필요가 없습니다**. 설정(SSID / 풀 / 지갑)은 업그레이드 후에도 유지됩니다.

## 원격으로 펌웨어 버전 추적하기

현재 펌웨어 버전은 모든 마이너가 [`GET /api/system/info`](../api/system.md)를 통해 보고합니다. 이를 [Swarm](./swarm.md) 검색과 결합하면 LAN에서 업데이트가 필요한 마이너를 한눈에 확인할 수 있습니다.

## 버전 간 변경 사항

전체 변경 로그는 [GitHub 릴리스 로그](https://github.com/NMminer1024/NMMiner#release-log)를 참조하십시오. 주요 버전 업그레이드(예: **v1.x → v2.0**)는 NM Monitor 및 Swarm에 주요 개선 사항을 도입했습니다 — 이전 릴리스는 새로운 Swarm 프로토콜과 상호 운용되지 않으므로, 전체 fleet을 동일한 마이너 시리즈로 유지하는 것이 가장 좋습니다.