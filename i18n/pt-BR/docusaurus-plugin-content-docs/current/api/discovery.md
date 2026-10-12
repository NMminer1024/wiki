---
sidebar_position: 2
title: Descoberta
---

# Endpoints de Descoberta

Estes endpoints existem para que **qualquer cliente** — NM Monitor, um dashboard personalizado, outro minerador — possa descobrir dispositivos NMMiner na rede local.

---

## `GET /probe`

Uma sonda de identidade leve. Use para confirmar que um host é um NMMiner.

### Resposta

```json
{
  "model":    "NMMiner",
  "hostname": "nm-cyd-c5-ab12cd",
  "ver":      "v2.0.04",
  "sw":       320,
  "sh":       240,
  "hr":       956432,
  "sbd":      0.0421,
  "ebd":      1.7833,
  "ut":       4321
}
```

| Campo      | Tipo     | Significado                                                       |
| ---------- | -------- | ------------------------------------------------------------- |
| `model`    | string   | Sempre `"NMMiner"`. Use para rotear o tráfego de monitoramento.     |
| `hostname` | string   | Nome de host configurável.                                        |
| `ver`      | string   | Versão do firmware.                                             |
| `sw`       | integer  | Largura da tela em pixels.                                       |
| `sh`       | integer  | Altura da tela em pixels.                                      |
| `hr`       | number   | Taxa de hash atual em H/s.                                      |
| `sbd`      | number   | Melhor dificuldade de share desta sessão.                           |
| `ebd`      | number   | Melhor dificuldade de share de todos os tempos.                   |
| `ut`       | integer  | Tempo de atividade em segundos desde a inicialização.                 |

### Exemplo

```bash
curl http://192.168.1.42/probe
```

---

## `GET /alive`

Lista de descoberta na rede local. Retorna o IP do próprio dispositivo mais todos os outros NMMiner que ele viu na sub-rede local.

### Parâmetros de consulta

| Nome      | Opcional | Efeito                                                          |
| --------- | -------- | --------------------------------------------------------------- |
| `rescan`  | sim      | Se presente, solicita uma nova varredura imediata (com debounce de 10 s).     |
| `src`     | sim      | Passe `src=swarm` quando o chamador for outro minerador — mantém o próprio thread de descoberta do dispositivo adormecido. |

### Resposta

```json
{
  "self":         "192.168.1.42",
  "ips":          ["192.168.1.42", "192.168.1.43", "192.168.1.44"],
  "scanning":     true,
  "progress":     128,
  "total":        254,
  "next_scan_in": 0
}
```

| Campo          | Tipo             | Significado                                                  |
| -------------- | ---------------- | -------------------------------------------------------- |
| `self`         | string           | O IP do próprio dispositivo (também a primeira entrada em `ips`).      |
| `ips`          | string[]         | Todo IP de NMMiner atualmente conhecido na LAN, incluindo o próprio. |
| `scanning`     | boolean          | `true` enquanto uma varredura está em andamento.                     |
| `progress`     | integer (0-254)  | Último octeto sendo sondado (0 quando ocioso).                   |
| `total`        | integer          | Sempre `254` — o tamanho de uma sub-rede /24.               |
| `next_scan_in` | integer          | Segundos até a próxima varredura agendada começar (`0` enquanto uma está em andamento). |

### Exemplo — listar todos os mineradores na LAN

```bash
curl http://192.168.1.42/alive | jq '.ips'
```

### Observações

- O thread de descoberta só é executado enquanto o dispositivo está na página Minerador ou enquanto o menu Swarm do NM Monitor está aberto. Chamar `/alive` o desperta.
- A resposta é construída incrementalmente — chame-a repetidamente para acompanhar `scanning` de `true` → `false`.

### Resposta
