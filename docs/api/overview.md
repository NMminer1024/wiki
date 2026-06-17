---
sidebar_position: 1
title: API Overview
---

# API Overview

Every NMMiner device runs an HTTP server on **port 80** that exposes a complete REST-style API. The same API is used by:

- The built-in [NM Monitor](../user-guide/nm-monitor.md) browser UI.
- The [Swarm](../user-guide/swarm.md) aggregator.
- Anyone — you, your dashboard, a Grafana plugin, a Python script — who wants to read status or push settings.

> ✅ This page documents the **public contract**: paths, methods, request bodies, response bodies, status codes.
> ❌ It does **not** document implementation. Treat the device as a black box reachable over HTTP.

## Base URL

```
http://<miner-ip>/
```

or by hostname (most home routers resolve it):

```
http://<miner-hostname>/
```

You can find the IP / hostname on the **Miner page** of the device s screen, or in the **System** section of NM Monitor.

## CORS

Every endpoint responds with:

```
Access-Control-Allow-Origin: *
```

so you can call the API from any browser page without proxying.

## Authentication

There is **no authentication** today. The API is meant to be used from within your trusted LAN. **Do not expose it to the public internet without your own gateway.**

## Content type

- Request bodies use `application/json`.
- Response bodies are either `application/json` or `text/plain`.
- All endpoints accept and respond to a CORS pre-flight `OPTIONS` request.

## Categories

| Category                | Endpoints                                                          |
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

## Versioning

The contract is **stable across minor firmware versions** (e.g. `v2.0.x`). Breaking changes are called out in the [GitHub release log](https://github.com/NMminer1024/NMMiner#release-log).

## Status codes

| Code | Meaning                                                          |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — response body matches the documented schema.                |
| 204  | OK — used for CORS preflight.                                    |
| 400  | Bad request — usually invalid JSON or out-of-range values.       |
| 404  | No such endpoint.                                                |
| 413  | Payload too large (screensaver upload only).                     |
| 429  | Rate limited — currently used by `/api/weather/refresh`.         |
| 500  | Device error (e.g. file system write failure during upload).     |

## Discoverability

Visit `http://<miner-ip>/api-doc` for a live HTML reference served by the miner itself. The Markdown reference you are reading is generated from the same contract.