---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Encontrarme

Activa una indicación visual y de LED en el minero objetivo para que pueda localizarlo físicamente. Esta es la API detrás del botón **Find** en el menú [Swarm](../user-guide/swarm.md).

---

## `POST /api/swarm/find`

### Solicitud

Sin cuerpo.

### Respuesta

```json
{ "status": "ok" }
```

El minero objetivo:

- Parpadeará su pantalla durante unos segundos.
- Parpadeará su LED (si está habilitado).

### Ejemplo — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### Ejemplo — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
Combínelo con [`GET /alive`](./discovery.md#get-alive) para obtener cada IP, luego itere sobre ellas — perfecto para un botón "encontrar todos mis mineros" en su panel de inicio.
:::
