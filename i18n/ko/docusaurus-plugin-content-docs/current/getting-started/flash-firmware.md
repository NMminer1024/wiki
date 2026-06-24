---
sidebar_position: 2
title: Flash Firmware
---

# Flash Firmware

NMMiner는 단일 브라우저 플래시 가능 이미지로 제공됩니다. `esptool`이나 `idf.py`가 필요하지 않습니다.

## 브라우저 플래싱 (권장)

1. **Chrome 또는 Edge**에서 [flash.nmminer.com](https://flash.nmminer.com)을 엽니다. Firefox / Safari는 WebSerial을 구현하지 않습니다.
2. USB를 통해 보드를 연결합니다.
3. 목록에서 보드를 선택합니다. 도구가 공식 GitHub 릴리스에서 일치하는 펌웨어를 가져옵니다.
4. **Install**을 클릭하고 직렬 포트를 선택한 다음 "Flash complete"를 기다립니다.
5. 도구가 **라이선스 구매**를 안내합니다. 구매가 완료되면 라이선스 문자열이 표시됩니다 — 복사해 두십시오. 활성화 페이지에서 한 번 필요합니다.

:::warning
보드가 자동으로 다운로드 모드로 진입하지 않으면 `BOOT`을 누른 상태에서 `RESET`을 눌렀다 놓습니다.
:::