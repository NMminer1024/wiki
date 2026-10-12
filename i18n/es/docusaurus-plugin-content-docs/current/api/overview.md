---
sidebar_position: 1
title: Descripción general de la API
---

# Descripción general de la API

Cada dispositivo NMMiner ejecuta un servidor HTTP en el **puerto 80** que expone una API completa de estilo REST. La misma API es utilizada por:

- La interfaz de navegador integrada de [NM Monitor](../user-guide/nm-monitor.md).
- El agregador [Swarm](../user-guide/swarm.md).
- Cualquiera — usted, su panel de control, un plugin de Grafana, un script de Python — que desee leer el estado o enviar configuraciones.

> ✅ Esta página documenta el **contrato público**: rutas, métodos, cuerpos de solicitud, cuerpos de respuesta, códigos de estado.
> ❌ **No** documenta la implementación. Trate el dispositivo como una caja negra accesible por HTTP.

## URL base

```
http://<miner-ip>/
```

o por nombre de host (la mayoría de los enrutadores domésticos lo resuelven):

```
http://<miner-hostname>/
```

Puede encontrar la IP / nombre de host en la **página Miner** de la pantalla del dispositivo, o en la sección **System** de NM Monitor.

## CORS

Cada endpoint responde con:

```
Access-Control-Allow-Origin: *
```

para que pueda llamar a la API desde cualquier página de navegador sin proxying.

## Autenticación

Hoy **no hay autenticación**. La API está pensada para usarse desde dentro de su LAN de confianza. **No la exponga a la internet pública sin su propia puerta de enlace.**

## Tipo de contenido

- Los cuerpos de solicitud usan `application/json`.
- Los cuerpos de respuesta son `application/json` o `text/plain`.
- Todos los endpoints aceptan y responden a una solicitud CORS pre-flight `OPTIONS`.

## Categorías

| Categoría                | Endpoints                                                          |
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

## Versionado

El contrato es **estable entre versiones menores de firmware** (p. ej. `v2.0.x`). Los cambios de ruptura se señalan en el [registro de lanzamientos de GitHub](https://github.com/NMminer1024/NMMiner#release-log).

## Códigos de estado

| Código | Significado                                                          |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — el cuerpo de respuesta coincide con el esquema documentado.                |
| 204  | OK — usado para CORS preflight.                                    |
| 400  | Solicitud incorrecta — normalmente JSON inválido o valores fuera de rango.       |
| 404  | No existe tal endpoint.                                                |
| 413  | Carga demasiado grande (solo carga de protector de pantalla).                     |
| 429  | Limitado por tasa — actualmente usado por `/api/weather/refresh`.         |
| 500  | Error del dispositivo (p. ej. fallo de escritura del sistema de archivos durante la carga).     |

## Descubribilidad

Visite `http://<miner-ip>/api-doc` para una referencia HTML en vivo servida por el propio minero. Si la API real difiere de esta wiki, el `/api-doc` en vivo del dispositivo siempre tiene prioridad.
