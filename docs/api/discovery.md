---
sidebar_position: 2
title: Discovery
---

# Discovery Endpoints

These endpoints exist so that **any client** — NM Monitor, a custom dashboard, another miner — can discover NMMiner devices on the LAN.

---

## `GET /probe`

A lightweight identity probe. Use this to confirm a host is an NMMiner.

### Response

```json
{
  "model":    "NMMiner",
  "hostname": "nm-cyd-c5-ab12cd",
  "ver":      "v2.0.04",
  "sw":       320,
  "sh":       240,
  "hr":       956432,
  "sbd":      0.0421,
  "ebd":      1.7833,
  "ut":       4321
}
```

| Field      | Type     | Meaning                                                       |
| ---------- | -------- | ------------------------------------------------------------- |
| `model`    | string   | Always `"NMMiner"`. Use this to route monitoring traffic.     |
| `hostname` | string   | Configurable hostname.                                        |
| `ver`      | string   | Firmware version.                                             |
| `sw`       | integer  | Screen width in pixels.                                       |
| `sh`       | integer  | Screen height in pixels.                                      |
| `hr`       | number   | Current hashrate in H/s.                                      |
| `sbd`      | number   | Best share difficulty this session.                           |
| `ebd`      | number   | Best share difficulty ever.                                   |
| `ut`       | integer  | Uptime in seconds since boot.                                 |

### Example

```bash
curl http://192.168.1.42/probe
```

---

## `GET /alive`

LAN discovery list. Returns the device s own IP plus every other NMMiner it has seen on the local subnet.

### Query parameters

| Name      | Optional | Effect                                                          |
| --------- | -------- | --------------------------------------------------------------- |
| `rescan`  | yes      | If present, requests an immediate re-scan (debounced 10 s).     |
| `src`     | yes      | Pass `src=swarm` when the caller is another miner — keeps the device s own discovery thread asleep. |

### Response

```json
{
  "self":         "192.168.1.42",
  "ips":          ["192.168.1.42", "192.168.1.43", "192.168.1.44"],
  "scanning":     true,
  "progress":     128,
  "total":        254,
  "next_scan_in": 0
}
```

| Field          | Type             | Meaning                                                  |
| -------------- | ---------------- | -------------------------------------------------------- |
| `self`         | string           | The device s own IP (also the first entry in `ips`).      |
| `ips`          | string[]         | Every NMMiner IP currently known on the LAN, including self. |
| `scanning`     | boolean          | `true` while a sweep is in progress.                     |
| `progress`     | integer (0-254)  | Last octet being probed (0 when idle).                   |
| `total`        | integer          | Always `254` — the size of one /24 subnet.               |
| `next_scan_in` | integer          | Seconds until the next scheduled sweep starts (`0` while one is running). |

### Example — list every miner on the LAN

```bash
curl http://192.168.1.42/alive | jq '.ips'
```

### Notes

- The discovery thread only runs while the device is on the Miner page or while NM Monitor s Swarm menu is open. Calling `/alive` wakes it up.
- The response is built incrementally — call it repeatedly to follow `scanning` from `true` → `false`.