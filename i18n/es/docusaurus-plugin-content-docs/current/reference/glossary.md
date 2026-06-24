---
sidebar_position: 5
title: Glosario
---

# Glosario

| Término                  | Definición                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| **Modo AP**              | Portal cautivo Soft-AP al que NMMiner recurre cuando no puede alcanzar el WiFi.             |
| **CYD**                  | "Cheap Yellow Display" — una familia de placas ESP32 + TFT de bajo coste.                   |
| **DGB / DigiByte**       | Una altcoin SHA-256d. NMMiner soporta DGB de fábrica — mismo firmware, pool diferente.       |
| **Tasa de hash**         | Hashes por segundo. Se muestra en KH/s en NMMiner.                                          |
| **Trabajo (Job)**        | Una unidad de trabajo entregada por el pool (`mining.notify`).                               |
| **Ladder**               | La tabla de clasificación global top-10 de dificultad opt-in, publicada en [ladder.nmminer.com](https://ladder.nmminer.com/) y reflejada en la pantalla del dispositivo. Consulte [Ladder](../user-guide/ladder.md). |
| **Licencia**             | Cadena de activación por dispositivo que vincula una placa a una imagen de firmware.         |
| **NM Monitor**           | La interfaz de usuario basada en navegador servida desde cada minero en el puerto 80.        |
| **Nonce**                | El campo de 32 bits que un minero itera mientras busca una share.                            |
| **Diff del pool**        | Dificultad de share mínima que el pool acepta.                                               |
| **Probe**                | El endpoint ligero `/probe` usado para identificación en LAN.                                |
| **Share**                | Un hash que cumple la diff del pool pero no la diff de red.                                  |
| **SoloBTC**              | El pool de minería oficial de NMMiner: [solobtc.nmminer.com](https://solobtc.nmminer.com). El pool predeterminado en cada dispositivo enviado. |
| **Stratum**              | El protocolo de pool que habla NMMiner. Solo v1.                                              |
| **Swarm**                | El menú Swarm en NM Monitor — agregación de mineros en toda la LAN, sin instalación. Hasta 255 dispositivos por subred /24. |