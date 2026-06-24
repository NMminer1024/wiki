---
sidebar_position: 7
title: Pools
---

# Pool-Konfiguration

So konfigurieren Sie Mining-Pools auf Ihrem NMMiner-Gerät.

## Konfigurationsmethoden

Sie können Pool-Einstellungen auf drei Arten ändern:

| Methode                    | Am besten für                                        |
| -------------------------- | ---------------------------------------------------- |
| Captive-Portal             | Ersteinrichtung                                      |
| NM Monitor                 | Laufende Verwaltung (empfohlen)                      |
| API                        | Automatisierung, Bulk-Änderungen                     |

## Einstellungen

NMMiner unterstützt zwei Pool-Steckplätze:

| Einstellung          | Beschreibung                                                   |
| -------------------- | -------------------------------------------------------------- |
| **Primärer Pool**    | Haupt-Pool-URL. Der Miner wird zuerst hier verbinden.          |
| **Primäres Wallet**  | Wallet-Adresse + Worker-Name (`bc1q...workername`)             |
| **Primäres Passwort**| Worker-Passwort. Die meisten Pools akzeptieren `x`.            |
| **Sekundärer Pool**  | Fallback-Pool. Wird verwendet, wenn der primäre ausfällt.      |
| **Sekundäres Wallet**| Fallback-Wallet + Worker-Name.                                 |
| **Sekundäres Passwort** | Fallback-Worker-Passwort.                                   |

## Pool-URL-Format

```
stratum+tcp://pool-url:port
stratum+ssl://pool-url:port
```

Beispiele:
- `stratum+tcp://solobtc.nmminer.com:3333` (NMMiner SoloBTC)
- `stratum+ssl://solo.ckpool.org:3333` (CK Solo Pool)
- `stratum+tcp://stratum.braiins.com:3333` (Braiins geteilter Pool)

## Workflow ändern

### Über NM Monitor

1. Öffnen Sie `http://<miner-ip>` in Ihrem Browser
2. Gehen Sie zu **Einstellungen → Mining**
3. Füllen Sie die Felder für primären und/oder sekundären Pool aus
4. Klicken Sie auf **Speichern**
5. Der Miner trennt die Verbindung und verbindet sich innerhalb weniger Sekunden mit dem neuen Pool

### Über API

```bash
curl -X POST http://<miner-ip>/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{
    "PrimaryPool": "stratum+tcp://neuer-pool.example.com:3333",
    "PrimaryAddress": "bc1q....worker1",
    "PrimaryPassword": "x"
  }'
```

Siehe [Mining-Einstellungen API](../api/settings-mining.md) für Details.

## Failover-Verhalten

1. Der Miner verbindet sich mit dem **primären Pool**.
2. Wenn die Verbindung zum primären Pool fehlschlägt (Timeout, Ablehnung, DNS-Fehler) → versucht **sekundären Pool**.
3. Wenn die Verbindung zum sekundären Pool wiederhergestellt ist → der Miner **verbindet sich NICHT automatisch wieder** mit dem primären. Er bleibt beim sekundären.
4. Um zum primären zurückzukehren: Starten Sie den Miner neu oder aktualisieren Sie die Einstellungen.

:::tip
Verwenden Sie den sekundären Pool als echten **Failover** — setzen Sie ihn auf einen zuverlässigen geteilten Pool wie Braiins. Wenn der primäre Solo-Pool ausfällt, minen Sie zumindest etwas.
:::

## Empfohlene Setups

| Ziel                             | Primär                                  | Sekundär                        |
| -------------------------------- | --------------------------------------- | ------------------------------- |
| Solo-Lotterie                    | `solobtc.nmminer.com:3333`              | `solo.ckpool.org:3333`          |
| Hybrid (Solo + stetiges Einkommen)| `solobtc.nmminer.com:3333`              | `stratum.braiins.com:3333`      |
| Stetiges Einkommen               | `stratum.braiins.com:3333`              | `btc.f2pool.com:3333`           |
