---
sidebar_position: 9
title: Wettereinstellungen
---

# Wettereinstellungen

Standort und Einheiten für die **Wetterseite**.

---

## `GET /api/setting/weather`

### Response

```json
{
  "WeatherCity":      "Beijing, Beijing, China",
  "WeatherLat":       "39.9075",
  "WeatherLon":       "116.3972",
  "WeatherTempUnit":  "celsius",
  "WeatherSpeedUnit": "kmh",
  "WeatherAltMode":   "pressure"
}
```

| Feld               | Typ    | Bedeutung                                                          |
| ------------------ | ------ | ------------------------------------------------------------------ |
| `WeatherCity`      | string | Menschenlesbare Stadtbezeichnung (wird auf dem Bildschirm verwendet). |
| `WeatherLat`       | string | Breitengrad, Dezimalgrad.                                          |
| `WeatherLon`       | string | Längengrad, Dezimalgrad.                                           |
| `WeatherTempUnit`  | string | `"celsius"` oder `"fahrenheit"`.                                   |
| `WeatherSpeedUnit` | string | `"kmh"`, `"mph"` oder `"ms"`.                                      |
| `WeatherAltMode`   | string | `"pressure"`, `"humidity"`, etc.                                   |

---

## `POST /api/setting/weather`

Partielles Update. Löst eine einmalige Aktualisierung aus.

### Request

```json
{
  "WeatherCity": "Berlin, Berlin, Deutschland",
  "WeatherLat":  "52.5200",
  "WeatherLon":  "13.4050"
}
```

### Response

`200 OK` mit Body `OK`.

---

## `POST /api/weather/refresh`

Erzwingt einen sofortigen Wetter- + AQI-Abruf.

### Request

Kein Body.

### Response

```
200 OK   — Aktualisierung ausgelöst
429      — Rate-limited; Sie haben in den letzten 60 s eine Aktualisierung gesendet
```

`429` Body sieht so aus:

```
Rate limited, please wait 42s before refreshing again.
```

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/weather/refresh
```

:::tip
Dieser Endpunkt ist für **manuelle** "Ich habe gerade die Stadt geändert, jetzt aktualisieren" gedacht. Für periodisches Polling lassen Sie das Gerät einfach seine eigene Hintergrundaktualisierung durchführen — das Aufrufen über einen Cron-Job führt zu `429`ern.
:::
