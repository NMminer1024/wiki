---
sidebar_position: 1
title: Fundamentos de minería Bitcoin
---

# Fundamentos de minería Bitcoin

Antes de profundizar en cómo participa NMMiner, aquí está el **modelo mental en una pantalla** de la minería de Bitcoin.

## El trabajo

Los mineros de Bitcoin compiten por encontrar un número — un **nonce** — que, al combinarse con el resto de la cabecera del bloque y pasarse por la función hash SHA-256 **dos veces** (también conocido como **SHA-256d**), produce una salida que es *menor* que un valor objetivo establecido por la red.

Eso es todo. Toda la industria es un problema de búsqueda:

> *Encontrar un valor de 32 bits tal que `sha256(sha256(cabecera_con_ese_valor))` sea menor que el objetivo de la red.*

## Dificultad, en lenguaje sencillo

- **Dificultad de red** — cuán difícil hace la *red* que cualquiera gane el siguiente bloque. Hoy en día, esto es astronómicamente alto; necesitaría un almacén entero de ASIC para conseguir un bloque en un tiempo razonable.
- **Dificultad del pool** — cuán difícil le pide el *pool* que busque. Los pools la establecen mucho más baja para que los mineros pequeños produzcan **shares** (prueba de que realmente está buscando).
- **Share** — un resultado hash que cumple la dificultad del pool (pero no necesariamente la dificultad de red). Los pools le acreditan por las shares.

La tasa de hash de NMMiner está en el rango de **cientos de KH/s**, por lo que se comunica con pools que establecen una dificultad de share muy baja — a menudo una fracción de 1.

## Pago de minería, en lenguaje sencillo

Cuando un pool encuentra un hash ganador (entre todos sus mineros conectados), reclama la recompensa del bloque y la distribuye según el recuento de shares de cada participante. Los mineros pequeños reciben pagos pequeños, pero los reciben *directamente en su billetera* en el tipo de pool al que NMMiner se conecta.

## DigiByte (DGB) funciona de la misma manera

DGB también usa SHA-256d, así que las matemáticas son idénticas — solo difieren los parámetros de red y los pools. NMMiner soporta tanto BTC como DGB sin cambiar el firmware.

## Lo que hace NMMiner

NMMiner:

1. Se conecta a un pool Stratum que usted configure (por defecto, el pool SoloBTC propio de NMMiner).
2. Recibe un flujo de **trabajos** del pool.
3. Busca en el espacio de nonce tan rápido como el chip lo permite.
4. Envía shares válidas de vuelta al pool.
5. Le muestra la tasa, la última share y su mejor de sesión/de todos los tiempos.

Las dos páginas siguientes explican el protocolo y el flujo de datos dentro del minero.