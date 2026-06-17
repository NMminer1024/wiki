---
sidebar_position: 3
title: System
---

# System Endpoints

---

## `GET /api/system/info`

Full system snapshot. This is what NM Monitor s Dashboard reads on every refresh.

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

### Field reference

| Path                       | Type     | Meaning                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | Always `"NMMiner"`.                                      |
| `identity.hostName`        | string   | Device hostname.                                         |
| `identity.fwVersion`       | string   | Firmware version.                                        |
| `identity.rssi`            | integer  | WiFi signal strength (dBm).                              |
| `miner.hashRate`           | number   | Current hashrate, in **giga-hashes per second** (multiply by 1e9 to get H/s). |
| `miner.sAccepted`          | integer  | Shares accepted by the pool.                             |
| `miner.sRejected`          | integer  | Shares rejected by the pool.                             |
| `miner.uptimeSeconds`      | integer  | Seconds since the current boot.                          |
| `miner.uptimeEver`         | integer  | Cumulative uptime across boots, in seconds.              |
| `miner.networkDiff`        | string   | Current Bitcoin network difficulty (decimal).            |
| `miner.poolDiff`           | string   | Current share difficulty set by the pool.                |
| `miner.lastDiff`           | string   | Difficulty of the most recent submitted share.           |
| `miner.bestDiffSession`    | string   | Best share difficulty this boot.                         |
| `miner.bestDiffEver`       | string   | Best share difficulty ever.                              |
| `miner.blkhits`            | integer  | Lifetime count of network-difficulty hits (block luck).  |
| `miner.freeHeap`           | integer  | Current free heap in bytes.                              |
| `miner.minFreeHeap`        | integer  | Lowest free heap observed this boot.                     |
| `stratum.url`              | string   | Active pool `host:port`.                                 |
| `stratum.user`             | string   | Authenticated worker name (wallet.worker).               |
| `temps.vcore`              | number / null | Core temperature in °C, or `null` on boards without an on-chip sensor. |
| `temps.asic`               | null     | Reserved for future hardware. Always `null` on ESP32.    |
| `storage.fsTotal`          | integer  | On-device file system size in bytes.                     |
| `storage.fsUsed`           | integer  | On-device file system usage in bytes.                    |

### Example

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (i.e. 956.4 KH/s)
```

---

## `POST /api/system/restart`

Reboots the miner immediately.

### Request

No body.

### Response

```json
{ "status": "ok" }
```

The reboot happens **~600 ms after the response is sent** so the connection closes cleanly.

### Example

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
A restart drops the Stratum session and any unsubmitted shares. Avoid scripting periodic restarts unless you really need to.
:::