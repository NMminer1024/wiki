---
sidebar_position: 1
title: Visão Geral do Hardware
---

# Visão Geral do Hardware

O NMMiner é compatível com quatro famílias de chips. Cada família tem sua própria taxa de hash de pico e uma lista selecionada de placas suportadas.

| Família do chip | Taxa de hash de pico típica | Observações |
| --------------- | --------------------------- | ----------- |
| **ESP32-D0**    | até **1.035 KH/s**          | Melhor desempenho bruto. Família ESP32 original. |
| **ESP32-S3**    | até **400 KH/s**            | ISA vetorial, dual core, geralmente emparelhado com displays TFT / AMOLED. |
| **ESP32-C3**    | até **402 KH/s**            | Núcleo RISC-V único, categoria mais econômica. |
| **ESP32-C5**    | até **150 KH/s**            | Parte RISC-V dual-band mais recente. |

Use as subpáginas para encontrar a placa exata que você possui:

- [Placas ESP32-D0](./esp32-d0-boards.md)
- [Placas ESP32-S3](./esp32-s3-boards.md)
- [Placas ESP32-C3](./esp32-c3-boards.md)
- [Placas ESP32-C5](./esp32-c5-boards.md)

:::tip
A coluna de taxa de hash é **medida em hardware real** na configuração de atualização de interface mais alta e estável, com o protetor de tela no modo **Black**. Reduzir o intervalo de atualização da tela proporciona alguns KH/s extras em todas as placas.
:::