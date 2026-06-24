---
sidebar_position: 2
title: Lista de Pools
---

# Lista de Pools

Pools conhecidas por funcionar bem com a taxa de hash de ~150–1000 KH/s do NMMiner. Todas elas ajustam dinamicamente a dificuldade de share para mineradores pequenos.

## Bitcoin (BTC) — **padrão**

| Pool                               | URL Stratum                                        | Dashboard                                                |
| ---------------------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| **NMMiner SoloBTC** (padrão)       | `stratum+tcp://solobtc.nmminer.com:3333`           | [solobtc.nmminer.com](https://solobtc.nmminer.com)       |
| **NMMiner SoloBTC AU** (contingência) | `stratum+tcp://au.solobtc.nmminer.com:3333`     | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

As pools SoloBTC são operadas pelo NMMiner. Elas são pré-configuradas em todos os dispositivos — de fábrica, você só precisa inserir seu próprio endereço de carteira.

## DigiByte (DGB)

| Pool                | URL Stratum                                        | Dashboard                                            |
| ------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`     | [digibyte.solominer.net](https://digibyte.solominer.net) |

O DGB compartilha o algoritmo de hash SHA-256d com o BTC, então o mesmo firmware do NMMiner funciona sem nenhuma alteração de build — apenas a URL da pool e o endereço da carteira diferem.

## Observações

:::tip
Se uma pool suportar TLS, altere o esquema para `stratum+ssl://` — mesmo host e porta.
:::

:::warning
Grandes pools comerciais que exigem uma dificuldade mínima de share alta (ex.: `0x100000000`) rejeitarão todas as shares do NMMiner. Mantenha-se nos endpoints no estilo SoloBTC que reduzem a dificuldade de share para valores muito baixos para mineradores pequenos.
:::