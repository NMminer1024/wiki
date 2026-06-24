---
sidebar_position: 2
title: Protocolo Stratum
---

# Protocolo Stratum

O **Stratum v1** é o protocolo de fato que as pools de mineração de Bitcoin usam para se comunicar com os mineradores. O NMMiner é um cliente Stratum v1.

> Esta página documenta apenas as mensagens Stratum **públicas e bem conhecidas** que toda pool entende. Extensões específicas de pool e detalhes internos de implementação estão fora do escopo.

## Conexão

- **Transporte**: TCP, ou TCP encapsulado em TLS para pools SSL.
- **Esquema de endereço**:
  - `stratum+tcp://host:port` — TCP simples.
  - `stratum+ssl://host:port` — TLS.
- **Identidade do worker**: o endereço da carteira opcionalmente seguido de `.nomeDoWorker`, ex.: `bc1q....nomeDoWorker`.

O minerador mantém o socket aberto durante toda a sessão. Se a pool derrubar a conexão, o NMMiner se reconecta automaticamente.

## Fluxo de mensagens
