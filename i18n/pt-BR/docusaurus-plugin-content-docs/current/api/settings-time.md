---
sidebar_position: 6
title: Configurações de Hora
---

# Configurações de Hora

Fuso horário, formato de hora e formato de data.

---

## `GET /api/setting/time`

### Resposta

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| Campo        | Tipo             | Significado                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| Deslocamento de UTC em horas. Suporta decimais (ex.: `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` ou `24`.                                           |
| `DateFormat` | string           | Um de `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"`.  |

---

## `POST /api/setting/time`

Atualização parcial.

### Requisição

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### Resposta

`200 OK` com corpo `OK`. As mudanças de hora entram em vigor **imediatamente** (o relógio do dispositivo reaplica a nova string TZ POSIX sem ressincronizar NTP).

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```

### Resposta
