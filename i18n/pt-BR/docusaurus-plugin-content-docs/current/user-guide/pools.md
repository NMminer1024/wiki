---
sidebar_position: 4
title: Pools
---

# Pools

Como a taxa de hash do ESP32 é pequena (algumas centenas de KH/s), o NMMiner se conecta a pools de **baixa dificuldade** que aceitam shares bem abaixo da dificuldade da rede.

O NMMiner é pré-configurado para nossa própria pool — **você geralmente não precisa alterar nada**.

## Padrões integrados

| Slot         | URL                                               | Região         |
| ------------ | ------------------------------------------------- | -------------- |
| Principal    | `stratum+tcp://solobtc.nmminer.com:3333`          | Global         |
| Contingência | `stratum+tcp://au.solobtc.nmminer.com:3333`       | Ásia-Pacífico  |

Ambas são as pools oficiais [SoloBTC](https://solobtc.nmminer.com) do NMMiner, projetadas para mineradores de centenas de KH/s. Dashboard: [solobtc.nmminer.com](https://solobtc.nmminer.com).

Quando a principal fica inacessível, o minerador muda automaticamente para a contingência. Quando a principal se recupera, o minerador retorna em ~10 segundos (desde a v1.7.05).

## Esquemas de URL de pool suportados

| Esquema             | Significado                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| `stratum+tcp://`    | Stratum v1 via TCP simples.                                              |
| `stratum+ssl://`    | Stratum encapsulado em TLS (defina se sua pool exigir SSL).              |

## Moedas suportadas

O NMMiner atualmente suporta **Bitcoin (BTC)** e **DigiByte (DGB)**. Ambos usam SHA-256d, então o mesmo pipeline de hashing serve para ambos. Veja a [Lista de Pools](../reference/pool-list.md) para endpoints confiáveis para cada um.

## Por que não grandes pools comerciais?

A taxa de hash do NMMiner é da ordem de centenas de KH/s. Pools que exigem uma dificuldade mínima de share alta rejeitarão todas as shares do NMMiner. Mantenha-se nas pools oficiais [SoloBTC](https://solobtc.nmminer.com) do NMMiner ou pools comunitárias no estilo solo — qualquer coisa que aceite dificuldade de share muito baixa.