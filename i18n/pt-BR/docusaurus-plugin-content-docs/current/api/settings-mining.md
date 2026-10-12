---
sidebar_position: 5
title: Configurações de Mineração
---

# Configurações de Mineração

URLs da pool principal e de contingência, carteiras e senhas de worker.

---

## `GET /api/setting/mining`

### Resposta

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| Campo               | Tipo   | Significado                                                           |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `PrimaryPool`       | string | URL Stratum principal (`stratum+tcp://...` ou `stratum+ssl://...`). |
| `PrimaryAddress`    | string | Nome do worker — tipicamente `<carteira>.<worker>`.                      |
| `PrimaryPassword`   | string | Senha do worker. A maioria das pools aceita `x`.                           |
| `SecondaryPool`     | string | URL da pool de contingência. Usada quando a principal está inacessível.          |
| `SecondaryAddress`  | string | Nome do worker de contingência.                                             |
| `SecondaryPassword` | string | Senha do worker de contingência.                                         |

---

## `POST /api/setting/mining`

Atualização parcial.

### Requisição

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### Resposta

`200 OK` com corpo `OK`. `400` em JSON inválido.

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
As mudanças entram em vigor na próxima vez que o minerador se reconectar a uma pool — geralmente em poucos segundos.
:::

### Resposta
