---
sidebar_position: 4
title: Configuración de red
---

# Configuración de red

Nombre de host y credenciales WiFi.

---

## `GET /api/setting/network`

### Respuesta

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| Campo      | Tipo   | Significado                                       |
| ---------- | ------ | --------------------------------------------- |
| `Hostname` | string | Nombre de host mDNS / NetBIOS que anuncia el minero.  |
| `WiFiSSID` | string | SSID WiFi configurada.                         |

La contraseña WiFi actual **nunca** se devuelve.

---

## `POST /api/setting/network`

Actualización parcial — incluya solo las claves que desee cambiar.

### Solicitud

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| Campo      | Tipo   | Requerido | Significado                                                    |
| ---------- | ------ | -------- | ---------------------------------------------------------- |
| `Hostname` | string | no       | Nuevo nombre de host (se recomienda alfanumérico y `-`).           |
| `WiFiSSID` | string | no       | Nueva SSID WiFi.                                             |
| `WiFiPWD`  | string | no       | Nueva contraseña WiFi. Solo escritura.                             |

### Respuesta

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

400 si el cuerpo no es JSON válido.

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
Cambiar las credenciales WiFi **no** reinicia la red inmediatamente. El próximo arranque usa la nueva configuración.
:::
