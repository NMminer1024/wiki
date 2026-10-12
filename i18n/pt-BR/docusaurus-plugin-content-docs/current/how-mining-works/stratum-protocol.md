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

O minerador mantém o socket aberto durante toda a sessão. Se a pool o encerrar, o NMMiner se reconecta automaticamente.

## Fluxo de mensagens

```mermaid
sequenceDiagram
    autonumber
    participant Miner as NMMiner
    participant Pool as Stratum Pool

    Miner->>Pool: mining.subscribe
    Pool-->>Miner: extranonce1, extranonce2_size
    Miner->>Pool: mining.authorize (wallet.worker, password)
    Pool-->>Miner: true / false
    Pool-->>Miner: mining.set_difficulty (share_diff)
    Pool-->>Miner: mining.notify (job_id, prevhash, coinb1, coinb2, merkle, version, nbits, ntime, clean_jobs)
    loop While mining
        Miner->>Miner: search nonce space against job
        alt Found a share
            Miner->>Pool: mining.submit (worker, job_id, extranonce2, ntime, nonce)
            Pool-->>Miner: true (accepted) / false (rejected)
        end
        Pool-->>Miner: mining.set_difficulty (updated diff, occasional)
        Pool-->>Miner: mining.notify (new job, periodically)
    end
```

## O que cada mensagem significa para você

| Mensagem                   | Significado simples                                                       |
| ------------------------- | ------------------------------------------------------------------- |
| `mining.subscribe`        | "Olá, quero trabalho."                                                  |
| `mining.authorize`        | "Eu sou esta carteira."                                                 |
| `mining.set_difficulty`   | A pool define o quão fácil / difícil uma share deve ser. A diff do NMMiner é **minúscula**. |
| `mining.notify`           | "Aqui está um novo modelo de bloco para trabalhar." Trabalhos antigos ficam obsoletos.   |
| `mining.submit`           | "Aqui está um hash que atende a diff."                               |

É tudo o que há no protocolo do lado do minerador.

## O que o NMMiner mostra na tela / no NM Monitor

| Campo            | Vem de                                              |
| ---------------- | ------------------------------------------------------- |
| **Pool**         | A URL configurada (host e porta).                     |
| **Diff**         | Último `mining.set_difficulty`.                         |
| **Accepted**     | Contagem de respostas `true` para `mining.submit`.             |
| **Rejected**     | Contagem de respostas `false` para `mining.submit`.            |
| **Session Best** | A share de maior dificuldade produzida nesta inicialização.        |
| **Ever Best**    | A share de maior dificuldade produzida em todas as inicializações. |
| **Hashrate**     | Média móvel interna de hashes por segundo.           |

Veja também: [Lista de Pools](../reference/pool-list.md) para endpoints compatíveis conhecidos.

O minerador mantém o socket aberto durante toda a sessão. Se a pool derrubar a conexão, o NMMiner se reconecta automaticamente.

## Fluxo de mensagens
