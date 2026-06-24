---
sidebar_position: 10
title: Swarm Find
---

# Swarm Find

Lässt die LED eines Miners blinken, damit Sie ihn physisch in einem Regal oder Rack lokalisieren können.

---

## `POST /api/swarm/find`

### Request

Kein Body.

### Response

```
HTTP/1.1 200 OK
Content-Type: text/plain

Flashing LED for 10 seconds.
```

Die Status-LED (oder Bildschirm, falls keine LED vorhanden) blinkt **10 Sekunden lang** mit einem erkennbaren Muster. Nur ein Miner antwortet — der, dessen IP Sie aufrufen.

### Beispiel

```bash
# Lassen Sie jeden Miner im LAN blinken — gehen Sie herum und finden Sie sie
for ip in $(curl -s http://192.168.1.42/alive | jq -r '.ips[]'); do
  curl -X POST "http://${ip}/api/swarm/find" &
done
```

### Hinweise

- Mehrere gleichzeitige `/api/swarm/find`-Aufrufe sind in Ordnung — jeder Miner blinkt unabhängig.
- Verwenden Sie dies aus dem Swarm-Menü von NM Monitor oder aus Ihrem eigenen Skript.
