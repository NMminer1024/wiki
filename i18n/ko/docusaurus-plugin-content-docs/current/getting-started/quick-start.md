---
sidebar_position: 1
title: Quick Start
---

# Quick Start

**약 10분** 만에 새 ESP32 보드에서 해싱을 시작하세요.

## 필요한 것

- [공식 지원 보드](../hardware/overview.md) (ESP32-D0 / S3 / C3 / C5).
- USB 케이블 및 **Chrome** 또는 **Edge**가 설치된 PC (브라우저 기반 플래시 도구용).
- 2.4 GHz WiFi 네트워크.

시작하는 데 **지갑이 필요하지 않습니다** — NMMiner는 자체 SoloBTC 풀([solobtc.nmminer.com](https://solobtc.nmminer.com))과 임시 데모 지갑으로 사전 구성되어 제공됩니다. 준비가 되면 언제든지 지갑을 자신의 BTC 주소로 교체하십시오.

## 다섯 단계

1. **펌웨어 플래시** — [flash.nmminer.com](https://flash.nmminer.com)을 열고 보드를 선택한 다음 *Install*을 클릭합니다. [Flash Firmware](./flash-firmware.md) 참조.
2. **라이선스 구매 및 활성화** — 플래시 도구가 라이선스 구매를 안내하며, 라이선스 문자열을 활성화 상자에 붙여넣습니다. [Activate Licence](./activate-licence.md) 참조.
3. 휴대폰으로 **AP `nmap-2.4g`**에 연결합니다. 캡티브 포털이 자동으로 팝업됩니다. PC: 수동으로 `http://192.168.4.1` 방문.
4. 웹 페이지에서 WiFi(필수) 및 지갑(권장)을 **구성**한 다음 **Save**를 누릅니다. 마이너가 약 15초 후에 재시작됩니다. [First Configuration](./first-configuration.md) 참조.
5. **마이닝 관찰** — 화면의 마이너 페이지에 실시간 해시레이트, 수락된 셰어 및 풀 난이도가 표시됩니다. [solobtc.nmminer.com](https://solobtc.nmminer.com)을 방문하여 풀 대시보드에 워커가 표시되는지 확인하십시오.

:::tip
최초 전원 인가 시 마이너는 15초 동안 마지막으로 알려진 WiFi에 재연결을 시도합니다. 실패하면 자동으로 AP / 구성 모드로 전환됩니다.
:::