---
sidebar_position: 3
title: Pool-Liste
---

# Pool-Liste

Stratum-Pools, von denen bekannt ist, dass sie mit NMMiner funktionieren.

## Solo-Pools

Dies sind Solo-Pools — Sie erhalten die volle Belohnung, wenn Sie einen Block finden:

| Pool                  | URL                                        | Port | SSL  |
| --------------------- | ------------------------------------------ | ---- | ---- |
| **NMMiner SoloBTC**   | `stratum+tcp://solobtc.nmminer.com`        | 3333 | ✅   |
| NMMiner SoloBTC (AU)  | `stratum+tcp://au.solobtc.nmminer.com`     | 3333 | ✅   |
| CK Solo Pool          | `stratum+tcp://solo.ckpool.org`            | 3333 | ✅   |

## Geteilte Pools (PPLNS/FPPS)

Diese teilen die Belohnungen unter allen Workern — stetige kleine Auszahlungen:

| Pool         | URL                                        | Port | SSL  |
| ------------ | ------------------------------------------ | ---- | ---- |
| Braiins      | `stratum+tcp://stratum.braiins.com`        | 3333 | ✅   |
| F2Pool       | `stratum+tcp://btc.f2pool.com`             | 3333 | ✅   |
| Antpool      | `stratum+tcp://stratum.antpool.com`        | 3333 | ✅   |
| ViaBTC       | `stratum+tcp://stratum.viabtc.com`         | 3333 | ✅   |
| Poolin       | `stratum+tcp://btc-bj.poolin.com`          | 3333 | ✅   |
| SlushPool    | `stratum+tcp://stratum.slushpool.com`      | 3333 | ✅   |

## DigiByte Pools

| Pool         | URL                                        | Port | SSL  |
| ------------ | ------------------------------------------ | ---- | ---- |
| DGB Solo     | `stratum+tcp://dgb-solo.nmminer.com`       | 3333 | ✅   |

## Konfiguration

Um den Pool zu ändern:
1. Verwenden Sie das Captive-Portal unter `http://<miner-ip>`
2. Oder den NM Monitor unter **Einstellungen → Mining**
3. Oder die API: `POST /api/setting/mining`

:::warning
Stellen Sie sicher, dass Sie die **richtige Wallet-Adresse** für jeden Pool angeben. Einige Pools erfordern, dass Sie sich zuerst auf deren Website registrieren.
:::

## Eigene Pools hinzufügen

Jeder Stratum-v1-kompatible Pool sollte funktionieren. Die URL muss mit `stratum+tcp://` oder `stratum+ssl://` beginnen und den Port enthalten.

Beispiel: `stratum+tcp://mein-pool.example.com:3333`
