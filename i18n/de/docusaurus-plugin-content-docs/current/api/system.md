---
sidebar_position: 3
title: System
---

# System-Endpunkte

---

## `GET /api/system/info`

Vollständiger System-Schnappschuss. Dies liest das NM-Monitor-Dashboard bei jeder Aktualisierung.

### Response

```json
{
  "identity": {
    "hwModel":   "NMMiner",
    "hostName":  "nm-cyd-c5-ab12cd",
    "fwVersion": "v2.0.04",
    "rssi":      -52
  },
  "miner": {
    "hashRate":         0.000956432,
    "sAccepted":        128,
    "sRejected":        2,
    "uptimeSeconds":    4321,
    "uptimeEver":       58732,
    "networkDiff":      "112392546849.9999",
    "poolDiff":         "0.00050",
    "lastDiff":         "0.00073",
    "bestDiffSession":  "0.04215",
    "bestDiffEver":     "1.78330",
    "blkhits":          0,
    "freeHeap":         118432,
    "minFreeHeap":      94312
  },
  "stratum": {
    "url":  "solobtc.nmminer.com:3333",
    "user": "bc1q....worker1"
  },
  "temps": {
    "vcore": 51.3,
    "asic":  null
  },
  "storage": {
    "fsTotal": 1048576,
    "fsUsed":  262144
  }
}
```

### Feldreferenz

| Pfad                       | Typ     | Bedeutung                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | Immer `"NMMiner"`.                                      |
| `identity.hostName`        | string   | Geräte-Hostname.                                         |
| `identity.fwVersion`       | string   | Firmware-Version.                                        |
| `identity.rssi`            | integer  | WiFi-Signalstärke (dBm).                                 |
| `miner.hashRate`           | number   | Aktuelle Hashrate in **Giga-Hashes pro Sekunde** (mit 1e9 multiplizieren für H/s). |
| `miner.sAccepted`          | integer  | Vom Pool akzeptierte Shares.                             |
| `miner.sRejected`          | integer  | Vom Pool abgelehnte Shares.                              |
| `miner.uptimeSeconds`      | integer  | Sekunden seit dem aktuellen Boot.                        |
| `miner.uptimeEver`         | integer  | Kumulierte Betriebszeit über alle Boots, in Sekunden.    |
| `miner.networkDiff`        | string   | Aktuelle Bitcoin-Netzwerk-Schwierigkeit (dezimal).       |
| `miner.poolDiff`           | string   | Aktuelle, vom Pool gesetzte Share-Schwierigkeit.         |
| `miner.lastDiff`           | string   | Schwierigkeit der zuletzt eingereichten Share.           |
| `miner.bestDiffSession`    | string   | Beste Share-Schwierigkeit dieses Boots.                  |
| `miner.bestDiffEver`       | string   | Beste Share-Schwierigkeit aller Zeiten.                  |
| `miner.blkhits`            | integer  | Lebenslange Anzahl von Treffern auf Netzwerk-Schwierigkeit (Block-Glück). |
| `miner.freeHeap`           | integer  | Aktueller freier Heap in Bytes.                          |
| `miner.minFreeHeap`        | integer  | Niedrigster beobachteter freier Heap dieses Boots.       |
| `stratum.url`              | string   | Aktiver Pool `host:port`.                                |
| `stratum.user`             | string   | Authentifizierter Worker-Name (wallet.worker).           |
| `temps.vcore`              | number / null | Kerntemperatur in °C, oder `null` auf Boards ohne On-Chip-Sensor. |
| `temps.asic`               | null     | Für zukünftige Hardware reserviert. Auf ESP32 immer `null`. |
| `storage.fsTotal`          | integer  | Größe des geräteinternen Dateisystems in Bytes.          |
| `storage.fsUsed`           | integer  | Nutzung des geräteinternen Dateisystems in Bytes.        |

### Beispiel

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (d. h. 956,4 KH/s)
```

---

## `POST /api/system/restart`

Startet den Miner sofort neu.

### Request

Kein Body.

### Response

```json
{ "status": "ok" }
```

Der Neustart erfolgt **~600 ms nach dem Senden der Antwort**, damit die Verbindung sauber geschlossen wird.

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
Ein Neustart beendet die Stratum-Sitzung und alle nicht eingereichten Shares. Vermeiden Sie geplante, regelmäßige Neustarts, sofern nicht wirklich nötig.
:::
