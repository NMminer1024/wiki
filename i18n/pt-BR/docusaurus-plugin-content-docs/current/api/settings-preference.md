---
sidebar_position: 7
title: Configurações de Preferência
---

# Configurações de Preferência

Display, LED, protetor de tela e o Ladder global opcional.

---

## `GET /api/setting/preference`

### Resposta

```json
{
  "Brightness":      80,
  "RotateScreen":    270,
  "LedEnable":       1,
  "ScreenSaver":     "5m",
  "ScreenSaverMode": "image",
  "LadderEnable":    false
}
```

| Campo             | Tipo    | Significado                                                           |
| ----------------- | ------- | ----------------------------------------------------------------- |
| `Brightness`      | integer | Brilho da tela, **1-100** (será limitado a ≥ 1).           |
| `RotateScreen`    | integer | Rotação da tela em graus. Típico: `0`, `90`, `180`, `270`.    |
| `LedEnable`       | integer | `1` para habilitar o LED de status, `0` para desabilitar.                     |
| `ScreenSaver`     | string  | Tempo ocioso antes do protetor de tela entrar. Ex.: `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"` (apresentação de slides) ou `"black"` (luz de fundo desligada).              |
| `LadderEnable`    | boolean | Opt-in para o ranking global. Desligado por padrão.                 |

---

## `POST /api/setting/preference`

Atualização parcial — aplicada **ao vivo** sem reinício.

### Requisição

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### Resposta

`200 OK` com corpo `OK`.

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` é a configuração recomendada para usuários que desejam **taxa de hash máxima** — sem custo de atualização de tela.
:::

### Resposta
