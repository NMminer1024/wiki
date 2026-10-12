---
sidebar_position: 4
title: Configurações de Rede
---

# Configurações de Rede

Nome de host e credenciais WiFi.

---

## `GET /api/setting/network`

### Resposta

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| Campo      | Tipo   | Significado                                       |
| ---------- | ------ | --------------------------------------------- |
| `Hostname` | string | Nome de host mDNS / NetBIOS que o minerador anuncia.  |
| `WiFiSSID` | string | SSID WiFi configurado.                         |

A senha WiFi atual **nunca** é retornada.

---

## `POST /api/setting/network`

Atualização parcial — inclua apenas as chaves que deseja alterar.

### Requisição

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| Campo      | Tipo   | Obrigatório | Significado                                                    |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `Hostname` | string | não       | Novo nome de host (recomenda-se alfanumérico e `-`).           |
| `WiFiSSID` | string | não       | Novo SSID WiFi.                                             |
| `WiFiPWD`  | string | não       | Nova senha WiFi. Somente gravação.                             |

### Resposta

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

400 se o corpo não for JSON válido.

### Exemplo

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
Alterar as credenciais WiFi **não** reinicia a rede imediatamente. A próxima inicialização usa as novas configurações.
:::

### Resposta
