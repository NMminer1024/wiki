---
sidebar_position: 3
title: Sistema
---

# Endpoints do Sistema

---

## `GET /api/system/info`

Instantâneo completo do sistema. É isso que o Dashboard do NM Monitor lê a cada atualização.

### Resposta

```json
{
  "identity": {
    "hwModel":   "NMMiner",
    "hostName":  "nm-cyd-c5-ab12cd",
    "fwVersion": "v2.0.04",
    "rssi":      -52
  },
  "miner": {
    "hashRate":         0.000956432,
    "sAccepted":        128,
    "sRejected":        2,
    "uptimeSeconds":    4321,
    "uptimeEver":       58732,
    "networkDiff":      "112392546849.9999",
    "poolDiff":         "0.00050",
    "lastDiff":         "0.00073",
    "bestDiffSession":  "0.04215",
    "bestDiffEver":     "1.78330",
    "blkhits":          0,
    "freeHeap":         118432,
    "minFreeHeap":      94312
  },
  "stratum": {
    "url":  "solobtc.nmminer.com:3333",
    "user": "bc1q....worker1"
  },
  "temps": {
    "vcore": 51.3,
    "asic":  null
  },
  "storage": {
    "fsTotal": 1048576,
    "fsUsed":  262144
  }
}
```

### Referência de campos

| Caminho                       | Tipo     | Significado                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | Sempre `"NMMiner"`.                                      |
| `identity.hostName`        | string   | Nome de host do dispositivo.                                         |
| `identity.fwVersion`       | string   | Versão do firmware.                                        |
| `identity.rssi`            | integer  | Intensidade do sinal WiFi (dBm).                              |
| `miner.hashRate`           | number   | Taxa de hash atual, em **giga-hashes por segundo** (multiplique por 1e9 para obter H/s). |
| `miner.sAccepted`          | integer  | Shares aceitas pela pool.                             |
| `miner.sRejected`          | integer  | Shares rejeitadas pela pool.                            |
| `miner.uptimeSeconds`      | integer  | Segundos desde a inicialização atual.                          |
| `miner.uptimeEver`         | integer  | Tempo de atividade acumulado entre inicializações, em segundos.              |
| `miner.networkDiff`        | string   | Dificuldade atual da rede Bitcoin (decimal).            |
| `miner.poolDiff`           | string   | Dificuldade de share atual definida pela pool.                |
| `miner.lastDiff`           | string   | Dificuldade da share enviada mais recentemente.           |
| `miner.bestDiffSession`    | string   | Melhor dificuldade de share desta inicialização.                         |
| `miner.bestDiffEver`       | string   | Melhor dificuldade de share de todos os tempos.              |
| `miner.blkhits`            | integer  | Contagem vitalícia de acertos na dificuldade da rede (sorte de bloco).  |
| `miner.freeHeap`           | integer  | Heap livre atual em bytes.                              |
| `miner.minFreeHeap`        | integer  | Menor heap livre observado nesta inicialização.                     |
| `stratum.url`              | string   | Pool ativa `host:port`.                                 |
| `stratum.user`             | string   | Nome do worker autenticado (carteira.worker).               |
| `temps.vcore`              | number / null | Temperatura do núcleo em °C, ou `null` em placas sem sensor no chip. |
| `temps.asic`               | null     | Reservado para hardware futuro. Sempre `null` no ESP32.    |
| `storage.fsTotal`          | integer  | Tamanho do sistema de arquivos do dispositivo em bytes.                     |
| `storage.fsUsed`           | integer  | Uso do sistema de arquivos do dispositivo em bytes.                    |

### Exemplo

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (ou seja, 956,4 KH/s)
```

---

## `POST /api/system/restart`

Reinicia o minerador imediatamente.

### Requisição

Sem corpo.

### Resposta

```json
{ "status": "ok" }
```

A reinicialização ocorre **~600 ms após o envio da resposta** para que a conexão feche de forma limpa.

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
Uma reinicialização descarta a sessão Stratum e qualquer share não enviada. Evite programar reinicializações periódicas, a menos que realmente precise.
:::

### Resposta
