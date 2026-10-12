---
sidebar_position: 2
title: Discovery
---

# Endpoints de descubrimiento

Estos endpoints existen para que **cualquier cliente** — NM Monitor, un panel personalizado, otro minero — pueda descubrir dispositivos NMMiner en la LAN.

---

## `GET /probe`

Una sonda de identidad ligera. Úsela para confirmar que un host es un NMMiner.

### Respuesta

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
| `model`    | string   | Siempre `"NMMiner"`. Úselo para enrutar el tráfico de monitoreo.     |
| `hostname` | string   | Nombre de host configurable.                                        |
| `ver`      | string   | Versión de firmware.                                             |
| `sw`       | integer  | Ancho de pantalla en píxeles.                                       |
| `sh`       | integer  | Alto de pantalla en píxeles.                                      |
| `hr`       | number   | Tasa de hash actual en H/s.                                      |
| `sbd`      | number   | Mejor dificultad de share de esta sesión.                           |
| `ebd`      | number   | Mejor dificultad de share de todos los tiempos.                   |
| `ut`       | integer  | Tiempo de actividad en segundos desde el arranque.                 |

### Ejemplo

```bash
curl http://192.168.1.42/probe
```

---

## `GET /alive`

Lista de descubrimiento LAN. Devuelve la IP del propio dispositivo más cualquier otro NMMiner que haya visto en la subred local.

### Parámetros de consulta

| Nombre      | Opcional | Efecto                                                          |
| --------- | -------- | --------------------------------------------------------------- |
| `rescan`  | sí      | Si está presente, solicita un reescaneo inmediato (con debounce de 10 s).     |
| `src`     | sí      | Pase `src=swarm` cuando el llamador sea otro minero — mantiene dormido el hilo de descubrimiento del propio dispositivo. |

### Respuesta

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
| `self`         | string           | La IP del propio dispositivo (también la primera entrada en `ips`).      |
| `ips`          | string[]         | Cada IP de NMMiner conocida actualmente en la LAN, incluida la propia. |
| `scanning`     | boolean          | `true` mientras un barrido está en curso.                     |
| `progress`     | integer (0-254)  | Último octeto siendo sondeado (0 cuando está inactivo).                   |
| `total`        | integer          | Siempre `254` — el tamaño de una subred /24.               |
| `next_scan_in` | integer          | Segundos hasta que comience el próximo barrido programado (`0` mientras uno está en curso). |

### Ejemplo — listar cada minero en la LAN

```bash
curl http://192.168.1.42/alive | jq '.ips'
```

### Notas

- El hilo de descubrimiento solo se ejecuta mientras el dispositivo está en la página Miner o mientras el menú Swarm de NM Monitor está abierto. Llamar a `/alive` lo despierta.
- La respuesta se construye de forma incremental — llámela repetidamente para seguir `scanning` de `true` → `false`.
