---
sidebar_position: 10
title: Swarm Find
---

# Swarm — Localizar

Aciona uma indicação visual e por LED no minerador alvo para que você possa localizá-lo fisicamente. Esta é a API por trás do botão **Find** no menu [Swarm](../user-guide/swarm.md).

---

## `POST /api/swarm/find`

### Requisição

Sem corpo.

### Resposta

```json
{ "status": "ok" }
```

O minerador alvo irá:

- Piscar a tela por alguns segundos.
- Piscar o LED (se habilitado).

### Exemplo — bash

```bash
curl -X POST http://192.168.1.43/api/swarm/find
```

### Exemplo — Python

```python
import requests

for ip in ["192.168.1.43", "192.168.1.44", "192.168.1.45"]:
    requests.post(f"http://{ip}/api/swarm/find")
    print(f"pinged {ip}")
```

:::tip
Combine com [`GET /alive`](./discovery.md#get-alive) para obter todos os IPs e, em seguida, percorra-os — perfeito para um botão "encontrar todos os meus mineradores" no seu dashboard doméstico.
:::

Sem corpo.

### Resposta
