---
sidebar_position: 3
title: Sistema
---

# Endpoints de sistema

---

## `GET /api/system/info`

Instantánea completa del sistema. Esto es lo que lee el Panel de NM Monitor en cada actualización.

### Respuesta

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

### Referencia de campos

| Ruta                       | Tipo     | Significado                                                  |
| -------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`         | string   | Siempre `"NMMiner"`.                                      |
| `identity.hostName`        | string   | Nombre de host del dispositivo.                                         |
| `identity.fwVersion`       | string   | Versión de firmware.                                        |
| `identity.rssi`            | integer  | Intensidad de señal WiFi (dBm).                              |
| `miner.hashRate`           | number   | Tasa de hash actual, en **giga-hashes por segundo** (multiplique por 1e9 para obtener H/s). |
| `miner.sAccepted`          | integer  | Shares aceptadas por el pool.                             |
| `miner.sRejected`          | integer  | Shares rechazadas por el pool.                            |
| `miner.uptimeSeconds`      | integer  | Segundos desde el arranque actual.                          |
| `miner.uptimeEver`         | integer  | Tiempo de actividad acumulado entre arranques, en segundos.              |
| `miner.networkDiff`        | string   | Dificultad actual de la red Bitcoin (decimal).            |
| `miner.poolDiff`           | string   | Dificultad de share actual establecida por el pool.                |
| `miner.lastDiff`           | string   | Dificultad de la share enviada más reciente.           |
| `miner.bestDiffSession`    | string   | Mejor dificultad de share de este arranque.                         |
| `miner.bestDiffEver`       | string   | Mejor dificultad de share de todos los tiempos.              |
| `miner.blkhits`            | integer  | Recuento de por vida de aciertos a dificultad de red (suerte de bloque).  |
| `miner.freeHeap`           | integer  | Heap libre actual en bytes.                              |
| `miner.minFreeHeap`        | integer  | Heap libre más bajo observado este arranque.                     |
| `stratum.url`              | string   | Pool activo `host:port`.                                 |
| `stratum.user`             | string   | Nombre de trabajador autenticado (billetera.trabajador).               |
| `temps.vcore`              | number / null | Temperatura del núcleo en °C, o `null` en placas sin sensor en chip. |
| `temps.asic`               | null     | Reservado para hardware futuro. Siempre `null` en ESP32.    |
| `storage.fsTotal`          | integer  | Tamaño del sistema de archivos del dispositivo en bytes.                     |
| `storage.fsUsed`           | integer  | Uso del sistema de archivos del dispositivo en bytes.                    |

### Ejemplo

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (es decir, 956,4 KH/s)
```

---

## `POST /api/system/restart`

Reinicia el minero inmediatamente.

### Solicitud

Sin cuerpo.

### Respuesta

```json
{ "status": "ok" }
```

El reinicio ocurre **~600 ms después de enviar la respuesta** para que la conexión se cierre limpiamente.

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
Un reinicio descarta la sesión Stratum y cualquier share no enviada. Evite programar reinicios periódicos a menos que realmente lo necesite.
:::
