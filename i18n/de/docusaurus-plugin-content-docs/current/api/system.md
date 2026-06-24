---
sidebar_position: 3
title: System
---

# System-Endpunkte

Geräteinformationen und Neustart.

---

## `GET /api/system/info`

Vollständiger Gerätezustand — Identität, Mining-Statistiken, Speicherung, Uptime.

### Response

```json
{
  "identity": {
    "hostName":  "nm-cyd-c5-ab12cd",
    "fwVersion": "v2.0.04",
    "chipModel": "ESP32-C5",
    "mac":       "AA:BB:CC:DD:EE:FF"
  },
  "miner": {
    "hashRate":      0.956432,
    "bestDiff":      0.0421,
    "bestDiffEver":  1.7833,
    "sAccepted":     1234,
    "sRejected":     5,
    "pool":          "stratum+tcp://solobtc.nmminer.com:3333",
    "uptimeSeconds": 4321
  },
  "storage": {
    "totalKB": 4096,
    "usedKB":  1204,
    "freeKB":  2892
  }
}
```

| Feld                          | Typ     | Bedeutung                                          |
| ----------------------------- | ------- | -------------------------------------------------- |
| `identity.hostName`           | string  | Geräte-Hostname.                                   |
| `identity.fwVersion`          | string  | Firmware-Version.                                  |
| `identity.chipModel`          | string  | ESP32-Chip-Modell.                                 |
| `identity.mac`                | string  | MAC-Adresse.                                       |
| `miner.hashRate`              | number  | Hashrate in **GH/s**. Mit `1e9` für H/s multiplizieren. |
| `miner.bestDiff`              | number  | Beste Share-Difficulty dieser Sitzung.             |
| `miner.bestDiffEver`          | number  | Beste Share-Difficulty aller Zeiten.               |
| `miner.sAccepted`             | integer | Akzeptierte Shares.                                |
| `miner.sRejected`             | integer | Abgelehnte Shares.                                 |
| `miner.pool`                  | string  | Aktuelle Stratum-Pool-URL.                         |
| `miner.uptimeSeconds`         | integer | Betriebszeit in Sekunden.                          |
| `storage.totalKB`             | integer | Gesamter Flash-Speicher in KB.                     |
| `storage.usedKB`              | integer | Belegter Speicher in KB.                           |
| `storage.freeKB`              | integer | Freier Speicher in KB.                             |

### Beispiel

```bash
curl -s http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
```

---

## `POST /api/system/restart`

Startet das Gerät neu. Kein Request-Body.

### Response

```
HTTP/1.1 200 OK
Content-Type: text/plain

Restarting...
```

Das Gerät startet innerhalb von ~3 Sekunden neu. Die Stratum-Sitzung und alle ausstehenden Shares gehen verloren.

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/system/restart
```
