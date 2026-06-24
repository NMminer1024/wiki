---
sidebar_position: 4
title: Netzwerkeinstellungen
---

# Netzwerkeinstellungen

Hostname und WLAN-Zugangsdaten.

---

## `GET /api/setting/network`

### Response

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| Feld       | Typ    | Bedeutung                                        |
| ---------- | ------ | ------------------------------------------------ |
| `Hostname` | string | mDNS-/NetBIOS-Hostname, den der Miner ankündigt. |
| `WiFiSSID` | string | Konfigurierte WLAN-SSID.                         |

Das aktuelle WLAN-Passwort wird **nie** zurückgegeben.

---

## `POST /api/setting/network`

Partielles Update — geben Sie nur die Schlüssel an, die Sie ändern möchten.

### Request

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| Feld       | Typ    | Erforderlich | Bedeutung                                                    |
| ---------- | ------ | ------------ | ------------------------------------------------------------ |
| `Hostname` | string | nein         | Neuer Hostname (alphanumerisch und `-` empfohlen).           |
| `WiFiSSID` | string | nein         | Neue WLAN-SSID.                                              |
| `WiFiPWD`  | string | nein         | Neues WLAN-Passwort. Write-only.                             |

### Response

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

400, wenn der Body kein gültiges JSON ist.

### Beispiel

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
Das Ändern der WLAN-Zugangsdaten startet das Netzwerk **nicht** sofort neu. Der nächste Boot verwendet die neuen Einstellungen.
:::
