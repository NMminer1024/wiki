---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Find Me

대상 마이너에서 시각적 및 LED 표시를 트리거하여 물리적으로 찾을 수 있게 합니다. 이는 [Swarm](../user-guide/swarm.md) 메뉴의 **Find** 버튼 뒤에 있는 API입니다.

---

## `POST /api/swarm/find`

### 요청

본문 없음.

### 응답

```json
{ "status": "ok" }
```

대상 마이너는:

- 몇 초 동안 화면을 깜빡입니다.
- LED를 깜빡입니다(활성화된 경우).

### 예시 — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### 예시 — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
[`GET /alive`](./discovery.md#get-alive)와 결합하여 모든 IP를 가져온 후 순회하세요 — 홈 대시보드의 "모든 마이너 찾기" 버튼에 완벽합니다.
:::
