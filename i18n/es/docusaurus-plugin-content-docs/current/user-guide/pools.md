---
sidebar_position: 4
title: Pools
---

# Pools

Dado que la tasa de hash del ESP32 es pequeña (unos pocos cientos de KH/s), NMMiner se conecta a pools de **baja dificultad** que aceptan shares muy por debajo de la diff de red.

NMMiner viene preconfigurado para nuestro propio pool — **normalmente no necesita cambiar nada**.

## Valores predeterminados incorporados

| Ranura     | URL                                               | Región         |
| ---------- | ------------------------------------------------- | -------------- |
| Principal  | `stratum+tcp://solobtc.nmminer.com:3333`          | Global         |
| Respaldo   | `stratum+tcp://au.solobtc.nmminer.com:3333`       | Asia-Pacífico  |

Ambos son pools oficiales [SoloBTC](https://solobtc.nmminer.com) de NMMiner, diseñados para mineros de cientos de KH/s. Panel: [solobtc.nmminer.com](https://solobtc.nmminer.com).

Cuando el principal se vuelve inalcanzable, el minero cambia automáticamente al de respaldo. Cuando el principal se recupera, el minero vuelve a cambiar en ~10 segundos (desde v1.7.05).

## Esquemas de URL de pool soportados

| Esquema               | Significado                                                    |
| --------------------- | -------------------------------------------------------------- |
| `stratum+tcp://`      | Stratum v1 TCP simple.                                         |
| `stratum+ssl://`      | Stratum envuelto en TLS (establezca esto si su pool requiere SSL). |

## Monedas soportadas

NMMiner actualmente soporta **Bitcoin (BTC)** y **DigiByte (DGB)**. Ambos usan SHA-256d, por lo que el mismo pipeline de hash sirve para ambos. Consulte la [Lista de pools](../reference/pool-list.md) para endpoints válidos conocidos para cada uno.

## ¿Por qué no grandes pools comerciales?

La tasa de hash de NMMiner es del orden de cientos de KH/s. Los pools que exigen una dificultad de share mínima alta rechazarán cada share de NMMiner. Quédese con los pools oficiales [SoloBTC](https://solobtc.nmminer.com) de NMMiner o pools comunitarios de estilo solo — cualquiera que acepte una diff de share muy baja.