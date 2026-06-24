---
sidebar_position: 3
title: Firmware-Update
---

# Firmware-Update

So aktualisieren Sie die NMMiner-Firmware Ihres Geräts.

## Methode 1: Web Flash Tool (empfohlen)

1. Besuchen Sie [flash.nmminer.com](https://flash.nmminer.com)
2. Verbinden Sie Ihr Board per USB mit dem Computer
3. Wählen Sie Ihr Board-Modell aus
4. Klicken Sie auf **Flash**
5. Das Tool löscht automatisch den alten Flash und schreibt die neue Firmware

:::warning
Durch das Flashen werden **alle Einstellungen gelöscht** (Pool, WLAN, Wallet, Anzeige). Sie müssen nach dem Update neu konfigurieren.
:::

## Methode 2: OTA-Update (Over-The-Air)

Für Geräte, die bereits in Ihrem Netzwerk eingerichtet sind:

1. Laden Sie das neueste `.bin`-Firmware-Image von der [NMMiner-Website](https://www.nmminer.com) herunter.
2. Öffnen Sie NM Monitor unter `http://<miner-ip>`
3. Gehen Sie zu **Einstellungen → Firmware**
4. Klicken Sie auf **Datei auswählen** und wählen Sie die heruntergeladene `.bin`-Datei
5. Klicken Sie auf **Update**

Das Gerät wird neu gestartet, sobald der Upload abgeschlossen ist.

:::tip
OTA-Updates **bewahren Ihre Einstellungen** — Sie müssen WLAN/Wallet/Pool nach einem OTA-Update nicht neu konfigurieren.
:::

## Methode 3: API

```bash
curl -X POST http://<miner-ip>/api/update/firmware \
  -F "file=@firmware.bin"
```

Siehe [API-Übersicht](../api/overview.md) für Details.

## Versionshinweise

Versionshinweise finden Sie auf der [GitHub Release-Seite](https://github.com/NMminer1024/NMMiner#release-log).

## Nach dem Update

1. Wenn Sie das Web Flash Tool verwendet haben: Richten Sie WLAN/Wallet/Pool über das Captive-Portal neu ein.
2. Wenn Sie OTA verwendet haben: Das Mining wird nach dem Neustart automatisch fortgesetzt.
3. Überprüfen Sie, ob die Firmware-Version auf der **System**-Seite mit der erwarteten Version übereinstimmt.
