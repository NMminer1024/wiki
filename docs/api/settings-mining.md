---
sidebar_position: 5
title: Mining Settings
---

# Mining Settings

Primary & fallback pool URLs, wallets and worker passwords.

---

## `GET /api/setting/mining`

### Response

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| Field               | Type   | Meaning                                                           |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `PrimaryPool`       | string | Primary Stratum URL (`stratum+tcp://...` or `stratum+ssl://...`). |
| `PrimaryAddress`    | string | Worker name — typically `<wallet>.<worker>`.                      |
| `PrimaryPassword`   | string | Worker password. Most pools accept `x`.                           |
| `SecondaryPool`     | string | Fallback pool URL. Used when the primary is unreachable.          |
| `SecondaryAddress`  | string | Fallback worker name.                                             |
| `SecondaryPassword` | string | Fallback worker password.                                         |

---

## `POST /api/setting/mining`

Partial update.

### Request

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### Response

`200 OK` with body `OK`. `400` on invalid JSON.

### Example

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
Changes take effect the next time the miner reconnects to a pool — usually within a few seconds.
:::