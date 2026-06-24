---
sidebar_position: 5
title: Mining-Einstellungen
---

# Mining-Einstellungen

Primäre & Fallback-Pool-URLs, Wallets und Worker-Passwörter.

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

| Feld                | Typ    | Bedeutung                                                           |
| ------------------- | ------ | ------------------------------------------------------------------- |
| `PrimaryPool`       | string | Primäre Stratum-URL (`stratum+tcp://...` oder `stratum+ssl://...`). |
| `PrimaryAddress`    | string | Worker-Name — typischerweise `<wallet>.<worker>`.                   |
| `PrimaryPassword`   | string | Worker-Passwort. Die meisten Pools akzeptieren `x`.                 |
| `SecondaryPool`     | string | Fallback-Pool-URL. Wird verwendet, wenn der primäre nicht erreichbar ist. |
| `SecondaryAddress`  | string | Fallback-Worker-Name.                                               |
| `SecondaryPassword` | string | Fallback-Worker-Passwort.                                           |

---

## `POST /api/setting/mining`

Partielles Update.

### Request

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### Response

`200 OK` mit Body `OK`. `400` bei ungültigem JSON.

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
Änderungen werden wirksam, wenn der Miner das nächste Mal eine Verbindung zu einem Pool herstellt — normalerweise innerhalb weniger Sekunden.
:::
