---
sidebar_position: 1
title: Hardware Overview
---

# Hardware Overview

NMMiner는 4가지 칩 제품군을 대상으로 합니다. 각 제품군은 고유한 최대 해시레이트와 엄선된 지원 보드 목록을 가지고 있습니다.

| 칩 제품군    | 일반적 최대 해시레이트 | 참고 사항 |
| ------------ | ---------------------- | --------- |
| **ESP32-D0** | 최대 **1,035 KH/s**    | 최고의 원시 성능. 오리지널 ESP32 제품군. |
| **ESP32-S3** | 최대 **400 KH/s**      | Vector ISA, 듀얼 코어, 일반적으로 TFT / AMOLED 디스플레이와 페어링됨. |
| **ESP32-C3** | 최대 **402 KH/s**      | 단일 RISC-V 코어, 가장 저렴한 계층. |
| **ESP32-C5** | 최대 **150 KH/s**      | 최신 듀얼 밴드 RISC-V 부품. |

보유한 정확한 보드를 찾으려면 하위 페이지를 사용하십시오:

- [ESP32-D0 boards](./esp32-d0-boards.md)
- [ESP32-S3 boards](./esp32-s3-boards.md)
- [ESP32-C3 boards](./esp32-c3-boards.md)
- [ESP32-C5 boards](./esp32-c5-boards.md)

:::tip
해시레이트 열은 **실제 하드웨어에서 측정**되었으며, 가장 높은 안정적 UI 새로고침 설정과 화면 보호기가 **Black** 모드일 때의 값입니다. 화면 새로고침 간격을 낮추면 모든 보드에서 몇 KH/s를 추가로 얻을 수 있습니다.
:::