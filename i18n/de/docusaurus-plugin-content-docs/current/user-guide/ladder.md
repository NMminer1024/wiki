---
sidebar_position: 4
title: Ladder (Rangliste)
---

# Ladder (Rangliste)

Die globale NMMiner-Bestenliste — vergleichen Sie Ihre Leistung mit anderen Minern weltweit.

## Was ist die Ladder?

Die Ladder verfolgt die Mining-Leistung über alle NMMiner-Geräte hinweg, die sich registrieren. Sie zeigt:

- **Beste Share-Difficulty aller Zeiten** für jeden Worker
- **Gesamt akzeptierte Shares**
- **Betriebszeit**
- **Hashrate** (aktuell und Durchschnitt)

## Der Ladder beitreten

Die Ladder-Teilnahme ist **Opt-in** und standardmäßig deaktiviert.

### Aktivieren

1. Öffnen Sie [NM Monitor](./nm-monitor.md) in Ihrem Browser
2. Gehen Sie zu **Einstellungen → Präferenzen**
3. Schalten Sie **Ladder aktivieren** auf **Ein**

Oder über die API:

```bash
curl -X POST http://<miner-ip>/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"LadderEnable":true}'
```

### Anzeigen der Ladder

Besuchen Sie die NMMiner-Website, um die Ladder anzuzeigen:
- [www.nmminer.com/ladder](https://www.nmminer.com/ladder)

## Datenschutz

Wenn die Ladder aktiviert ist, sendet Ihr Miner regelmäßig:
- Beste Share-Diff (Sitzung und aller Zeiten)
- Akzeptierte/abgelehnte Shares
- Hashrate
- Betriebszeit
- Geräte-Hostname

**Nicht gesendet**:
- Wallet-Adresse
- Pool-URLs
- WLAN-Zugangsdaten
- Standortdaten
- IP-Adresse (wird vom Server protokolliert, aber nicht öffentlich angezeigt)

## Deaktivieren

Schalten Sie **Ladder aktivieren** in den Einstellungen auf **Aus** oder senden Sie:

```bash
curl -X POST http://<miner-ip>/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"LadderEnable":false}'
```
