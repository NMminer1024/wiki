---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Find Me

Triggers a visual & LED indication on the target miner so you can locate it physically. This is the API behind the **Find** button in the [Swarm](../user-guide/swarm.md) menu.

---

## `POST /api/swarm/find`

### Request

No body.

### Response

```json
{ "status": "ok" }
```

The target miner will:

- Flash its screen for a few seconds.
- Blink its LED (if enabled).

### Example — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### Example — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
Combine with [`GET /alive`](./discovery.md#get-alive) to get every IP, then loop through them — perfect for a "find all my miners" button on your home dashboard.
:::