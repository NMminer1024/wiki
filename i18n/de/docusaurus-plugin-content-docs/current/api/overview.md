---
sidebar_position: 1
title: API-Übersicht
---

# API-Übersicht

Jedes NMMiner-Gerät betreibt einen HTTP-Server auf **Port 80**, der eine vollständige REST-ähnliche API bereitstellt. Dieselbe API wird verwendet von:

- Der integrierten [NM Monitor](../user-guide/nm-monitor.md) Browser-Oberfläche.
- Dem [Swarm](../user-guide/swarm.md) Aggregator.
- Jedem — Ihnen, Ihrem Dashboard, einem Grafana-Plugin, einem Python-Skript — der Status lesen oder Einstellungen senden möchte.

> ✅ Diese Seite dokumentiert den **öffentlichen Vertrag**: Pfade, Methoden, Request-Bodies, Response-Bodies, Statuscodes.
> ❌ Sie dokumentiert **nicht** die Implementierung. Behandeln Sie das Gerät als Blackbox, die über HTTP erreichbar ist.

## Basis-URL

```
http://<miner-ip>/
```

oder per Hostname (die meisten Heimrouter lösen ihn auf):

```
http://<miner-hostname>/
```

Die IP / den Hostnamen finden Sie auf der **Miner-Seite** des Gerätebildschirms oder im **System**-Bereich von NM Monitor.

## CORS

Jeder Endpunkt antwortet mit:

```
Access-Control-Allow-Origin: *
```

Somit können Sie die API von jeder Browserseite ohne Proxy aufrufen.

## Authentifizierung

Es gibt derzeit **keine Authentifizierung**. Die API ist für die Nutzung innerhalb Ihres vertrauenswürdigen LANs vorgesehen. **Stellen Sie sie nicht ohne eigenes Gateway dem öffentlichen Internet aus.**

## Inhaltstyp

- Request-Bodies verwenden `application/json`.
- Response-Bodies sind entweder `application/json` oder `text/plain`.
- Alle Endpunkte akzeptieren und beantworten eine CORS-Preflight-`OPTIONS`-Anfrage.

## Kategorien

| Kategorie                | Endpunkte                                                          |
| ------------------------ | ------------------------------------------------------------------ |
| [Discovery](./discovery.md) | `GET /probe`, `GET /alive`                                     |
| [System](./system.md)       | `GET /api/system/info`, `POST /api/system/restart`             |
| [Netzwerkeinstellungen](./settings-network.md) | `GET/POST /api/setting/network`                  |
| [Mining-Einstellungen](./settings-mining.md)   | `GET/POST /api/setting/mining`                   |
| [Zeiteinstellungen](./settings-time.md)       | `GET/POST /api/setting/time`                     |
| [Präferenzeinstellungen](./settings-preference.md) | `GET/POST /api/setting/preference`         |
| [Markteinstellungen](./settings-market.md)   | `GET/POST /api/setting/market`, `GET /api/market/pairs` |
| [Wettereinstellungen](./settings-weather.md) | `GET/POST /api/setting/weather`, `POST /api/weather/refresh` |
| [Swarm Find](./swarm-find.md)             | `POST /api/swarm/find`                           |
| [Bildschirmschoner-Upload](./screensaver-upload.md) | `GET /api/update/screensaver/preflight`, `POST /api/update/screensaver` |
| [Beispiele](./examples.md)                 | cURL / Python / JavaScript                       |

## Versionierung

Der Vertrag ist **stabil über Minor-Firmware-Versionen** (z.B. `v2.0.x`). Breaking Changes werden im [GitHub Release Log](https://github.com/NMminer1024/NMMiner#release-log) angekündigt.

## Statuscodes

| Code | Bedeutung                                                        |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — Response-Body entspricht dem dokumentierten Schema.         |
| 204  | OK — wird für CORS-Preflight verwendet.                          |
| 400  | Bad Request — normalerweise ungültiges JSON oder Werte außerhalb des Bereichs. |
| 404  | Kein solcher Endpunkt.                                           |
| 413  | Payload zu groß (nur Bildschirmschoner-Upload).                  |
| 429  | Rate-limited — derzeit von `/api/weather/refresh` verwendet.     |
| 500  | Gerätefehler (z.B. Dateisystem-Schreibfehler beim Upload).       |

## Auffindbarkeit

Besuchen Sie `http://<miner-ip>/api-doc` für eine Live-HTML-Referenz, die vom Miner selbst bereitgestellt wird. Wenn die tatsächliche API von diesem Wiki abweicht, hat die Live-`/api-doc` des Geräts immer Vorrang.
