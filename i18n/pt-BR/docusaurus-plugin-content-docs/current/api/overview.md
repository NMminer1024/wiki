---
sidebar_position: 1
title: Visão Geral da API
---

# Visão Geral da API

Todo dispositivo NMMiner executa um servidor HTTP na **porta 80** que expõe uma API completa no estilo REST. A mesma API é utilizada por:

- A interface do [NM Monitor](../user-guide/nm-monitor.md) no navegador.
- O agregador [Swarm](../user-guide/swarm.md).
- Qualquer pessoa — você, seu dashboard, um plugin do Grafana, um script Python — que queira ler o status ou enviar configurações.

> ✅ Esta página documenta o **contrato público**: caminhos, métodos, corpos de requisição, corpos de resposta, códigos de status.
> ❌ Ela **não** documenta a implementação. Trate o dispositivo como uma caixa preta acessível via HTTP.

## URL Base

```
http://<miner-ip>/
```

ou por nome de host (a maioria dos roteadores domésticos resolve):

```
http://<miner-hostname>/
```

Você pode encontrar o IP / hostname na **página Minerador** da tela do dispositivo, ou na seção **System** do NM Monitor.

## CORS

Cada endpoint responde com:

```
Access-Control-Allow-Origin: *
```

para que você possa chamar a API de qualquer página do navegador sem proxy.

## Autenticação

Hoje **não há autenticação**. A API deve ser usada de dentro da sua LAN confiável. **Não a exponha à internet pública sem o seu próprio gateway.**

## Tipo de conteúdo

- Corpos de requisição usam `application/json`.
- Corpos de resposta são `application/json` ou `text/plain`.
- Todos os endpoints aceitam e respondem a uma requisição CORS pre-flight `OPTIONS`.

## Categorias

| Categoria                | Endpoints                                                          |
| ----------------------- | ------------------------------------------------------------------ |
| [Discovery](./discovery.md) | `GET /probe`, `GET /alive`                                     |
| [System](./system.md)       | `GET /api/system/info`, `POST /api/system/restart`             |
| [Network settings](./settings-network.md) | `GET/POST /api/setting/network`                  |
| [Mining settings](./settings-mining.md)   | `GET/POST /api/setting/mining`                   |
| [Time settings](./settings-time.md)       | `GET/POST /api/setting/time`                     |
| [Preference settings](./settings-preference.md) | `GET/POST /api/setting/preference`         |
| [Market settings](./settings-market.md)   | `GET/POST /api/setting/market`, `GET /api/market/pairs` |
| [Weather settings](./settings-weather.md) | `GET/POST /api/setting/weather`, `POST /api/weather/refresh` |
| [Swarm find](./swarm-find.md)             | `POST /api/swarm/find`                           |
| [Screensaver upload](./screensaver-upload.md) | `GET /api/update/screensaver/preflight`, `POST /api/update/screensaver` |
| [Examples](./examples.md)                 | cURL / Python / JavaScript                       |

## Versionamento

O contrato é **estável entre versões menores do firmware** (ex.: `v2.0.x`). Mudanças de ruptura são destacadas no [registro de lançamentos do GitHub](https://github.com/NMminer1024/NMMiner#release-log).

## Códigos de status

| Código | Significado                                                          |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — o corpo da resposta corresponde ao esquema documentado.                |
| 204  | OK — usado para CORS preflight.                                    |
| 400  | Requisição inválida — normalmente JSON inválido ou valores fora do intervalo.       |
| 404  | Não existe tal endpoint.                                                |
| 413  | Payload muito grande (apenas upload de protetor de tela).                     |
| 429  | Limitado por taxa — atualmente usado por `/api/weather/refresh`.         |
| 500  | Erro do dispositivo (ex.: falha de gravação no sistema de arquivos durante o upload).     |

## Descobribilidade

Visite `http://<miner-ip>/api-doc` para uma referência HTML ao vivo servida pelo próprio minerador. Se a API real diferir desta wiki, o `/api-doc` ao vivo do dispositivo sempre tem precedência.

## URL Base
