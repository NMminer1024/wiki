---
sidebar_position: 10
title: Swarm 定位
---

# Swarm — 定位

触发目标矿机闪屏 + 闪 LED，方便物理定位。NM Monitor 的 [Swarm](../user-guide/swarm.md) 菜单里 **Find** 按钮就是调它。

---

## `POST /api/swarm/find`

### 请求

无请求体。

### 响应

```json
{ "status": "ok" }
```

目标矿机会：

- 闪屏几秒。
- 闪烁 LED（如果开启）。

### 示例 — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### 示例 — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
配合 [`GET /alive`](./discovery.md#get-alive) 拿到全部 IP，循环一遍 — 一个"找出我家所有矿机"按钮就做好了。
:::