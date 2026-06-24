---
sidebar_position: 2
title: Lista de pools
---

# Lista de pools

Pools que se sabe que funcionan bien con la tasa de hash de ~150–1000 KH/s de NMMiner. Todos estos ajustan dinámicamente la dificultad de share para mineros pequeños.

## Bitcoin (BTC) — **predeterminado**

| Pool                               | URL Stratum                                        | Panel                                                      |
| ---------------------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| **NMMiner SoloBTC** (predeterminado) | `stratum+tcp://solobtc.nmminer.com:3333`           | [solobtc.nmminer.com](https://solobtc.nmminer.com)         |
| **NMMiner SoloBTC AU** (respaldo)    | `stratum+tcp://au.solobtc.nmminer.com:3333`        | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com)   |

Los pools SoloBTC son operados por NMMiner. Vienen preconfigurados en cada dispositivo — de fábrica solo necesita poner su propia dirección de billetera.

## DigiByte (DGB)

| Pool                 | URL Stratum                                        | Panel                                                      |
| -------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| Solo Miner DGB       | `stratum+tcp://dgb-stratum.solominer.net:3333`     | [digibyte.solominer.net](https://digibyte.solominer.net)   |

DGB comparte el algoritmo de hash SHA-256d con BTC, por lo que el mismo firmware de NMMiner funciona sin ningún cambio de compilación — solo difieren la URL del pool y la dirección de billetera.

## Notas

:::tip
Si un pool soporta TLS, cambie el esquema a `stratum+ssl://` — mismo host y puerto.
:::

:::warning
Los grandes pools comerciales que exigen una dificultad de share mínima alta (p. ej. `0x100000000`) rechazarán cada share de NMMiner. Quédese con endpoints de estilo SoloBTC que reduzcan la dificultad de share a valores muy bajos para mineros pequeños.
:::