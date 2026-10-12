---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Find Me

対象のマイナーで画面と LED の視覚的インジケーターをトリガーし、物理的に特定できるようにします。これは [Swarm](../user-guide/swarm.md) メニューの **Find** ボタンの背後にある API です。

---

## `POST /api/swarm/find`

### リクエスト

ボディなし。

### レスポンス

```json
{ "status": "ok" }
```

対象のマイナーは：

- 数秒間画面を点滅させます。
- LED を点滅させます（有効な場合）。

### 例 — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### 例 — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
[`GET /alive`](./discovery.md#get-alive) と組み合わせてすべての IP を取得し、それらをループ処理します — ホームダッシュボードの「すべてのマイナーを探す」ボタンに最適です。
:::
