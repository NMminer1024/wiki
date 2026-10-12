---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Find Me

Löst eine visuelle und LED-Anzeige auf dem Ziel-Miner aus, damit Sie ihn physisch lokalisieren können. Dies ist die API hinter der **Find**-Schaltfläche im [Swarm](../user-guide/swarm.md)-Menü.

---

## `POST /api/swarm/find`

### Request

Kein Body.

### Response

```json
{ "status": "ok" }
```

Der Ziel-Miner wird:

- seinen Bildschirm einige Sekunden lang aufblitzen lassen.
- seine LED blinken lassen (falls aktiviert).

### Beispiel — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### Beispiel — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
Kombinieren Sie dies mit [`GET /alive`](./discovery.md#get-alive), um jede IP zu erhalten, und iterieren Sie dann darüber — perfekt für eine „Alle meine Miner finden"-Schaltfläche auf Ihrem Home-Dashboard.
:::
