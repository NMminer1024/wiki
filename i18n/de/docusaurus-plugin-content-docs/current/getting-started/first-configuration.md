---
sidebar_position: 3
title: Erste Konfiguration
---

# Erste Konfiguration

Einrichten von WLAN, Wallet und anfänglichen Einstellungen über das Captive-Portal.

## Auf das Portal zugreifen

Nach dem ersten Flashen erstellt NMMiner einen WLAN-Hotspot:

- **SSID**: `NMMiner-Setup`
- **Passwort**: keines (offenes Netzwerk)

1. Verbinden Sie Ihr Telefon, Tablet oder Ihren PC mit `NMMiner-Setup`.
2. Ein Captive-Portal sollte automatisch erscheinen.
3. Falls nicht, öffnen Sie einen Browser und gehen Sie zu `http://192.168.4.1`.

## Konfigurationsschritte

### WLAN

- Wählen Sie Ihr Heim-WLAN aus der gescannten Liste.
- Geben Sie das Passwort ein.
- Das Gerät stellt eine Verbindung her und der Hotspot verschwindet.

:::tip
Wenn Sie mehrere Miner einrichten, verwenden Sie einen aussagekräftigen **Hostnamen**, um sie später leichter zu identifizieren (z.B. `garage-miner-01`, `office-miner-02`).
:::

### Wallet-Adresse

- Fügen Sie Ihre Bitcoin-Wallet-Adresse ein.
- Format: `wallet.address` oder `wallet.address.workername`
- Lassen Sie das Feld leer, um die Standardeinstellung zu verwenden (Mining auf das Entwicklungswallet — keine Auszahlungen).

### Pool

- Die Standardeinstellung ist der **SoloBTC Pool von NMMiner** (`solobtc.nmminer.com:3333`).
- Sie können dies später über [Pools-Konfiguration](../user-guide/pools.md) oder die [API](../api/settings-mining.md) ändern.

## Nach der Konfiguration

1. Das Gerät startet das Mining **sofort**.
2. Finden Sie die IP des Miners auf dem Bildschirm oder in der DHCP-Liste Ihres Routers.
3. Greifen Sie auf die Weboberfläche unter `http://<miner-ip>` zu.

## Nächste Schritte

- [Tasten & Bildschirme](../user-guide/buttons.md) — Navigieren im Gerätemenü
- [NM Monitor](../user-guide/nm-monitor.md) — Webbasierte Verwaltungsoberfläche
- [Pools](../user-guide/pools.md) — Pool-URL ändern
