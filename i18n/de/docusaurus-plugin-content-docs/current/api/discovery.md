---
sidebar_position: 2
title: Discovery
---

# Discovery-Endpunkte

Diese Endpunkte existieren, damit **jeder Client** — NM Monitor, ein benutzerdefiniertes Dashboard, ein anderer Miner — NMMiner-Geräte im LAN entdecken kann.

---

## `GET /probe`

Eine leichtgewichtige Identitätssonde. Verwenden Sie dies, um zu bestätigen, dass ein Host ein NMMiner ist.

### Response

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

| Feld       | Typ     | Bedeutung                                                     |
| ---------- | ------- | ------------------------------------------------------------- |
| `model`    | string  | Immer `"NMMiner"`. Zur Weiterleitung von Überwachungsverkehr. |
| `hostname` | string  | Konfigurierbarer Hostname.                                    |
| `ver`      | string  | Firmware-Version.                                             |
| `sw`       | integer | Bildschirmbreite in Pixel.                                    |
| `sh`       | integer | Bildschirmhöhe in Pixel.                                      |
| `hr`       | number  | Aktuelle Hashrate in H/s.                                     |
| `sbd`      | number  | Beste Share-Difficulty dieser Sitzung.                        |
| `ebd`      | number  | Beste Share-Difficulty aller Zeiten.                          |
| `ut`       | integer | Betriebszeit in Sekunden seit dem Start.                      |

### Beispiel

```bash
curl http://192.168.1.42/probe
```

---

## `GET /alive`

LAN-Discovery-Liste. Gibt die eigene IP des Geräts plus jede andere NMMiner zurück, die es im lokalen Subnetz gesehen hat.

### Query-Parameter

| Name     | Optional | Effekt                                                          |
| -------- | -------- | --------------------------------------------------------------- |
| `rescan` | ja       | Falls vorhanden, wird ein sofortiger Re-Scan angefordert (debounced 10 s). |
| `src`    | ja       | Übergeben Sie `src=swarm`, wenn der Aufrufer ein anderer Miner ist — hält den eigenen Discovery-Thread des Geräts schlafend. |

### Response

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

| Feld           | Typ              | Bedeutung                                                  |
| -------------- | ---------------- | ---------------------------------------------------------- |
| `self`         | string           | Die eigene IP des Geräts (auch der erste Eintrag in `ips`). |
| `ips`          | string[]         | Jede derzeit im LAN bekannte NMMiner-IP, einschließlich self. |
| `scanning`     | boolean          | `true`, während ein Sweep läuft.                           |
| `progress`     | integer (0-254)  | Letztes Oktett, das geprüft wird (0 im Leerlauf).          |
| `total`        | integer          | Immer `254` — die Größe eines /24-Subnetzes.               |
| `next_scan_in` | integer          | Sekunden bis zum nächsten geplanten Sweep (`0`, wenn einer läuft). |

### Beispiel — alle Miner im LAN auflisten

```bash
curl http://192.168.1.42/alive | jq '.ips'
```

### Hinweise

- Der Discovery-Thread läuft nur, während das Gerät auf der Miner-Seite ist oder das Swarm-Menü von NM Monitor geöffnet ist. Der Aufruf von `/alive` weckt ihn auf.
- Die Antwort wird inkrementell aufgebaut — rufen Sie sie wiederholt auf, um `scanning` von `true` → `false` zu verfolgen.
