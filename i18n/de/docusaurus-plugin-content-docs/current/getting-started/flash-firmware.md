---
sidebar_position: 2
title: Firmware flashen
---

# Firmware flashen

NMMiner wird als einzelnes, im Browser flashbares Image ausgeliefert. Kein `esptool` oder `idf.py` erforderlich.

## Flashen im Browser (empfohlen)

1. Öffnen Sie [flash.nmminer.com](https://flash.nmminer.com) in **Chrome oder Edge**. Firefox / Safari implementieren WebSerial nicht.
2. Schließen Sie Ihr Board per USB an.
3. Wählen Sie Ihr Board aus der Liste. Das Tool holt die passende Firmware aus dem offiziellen GitHub-Release.
4. Klicken Sie auf **Install**, wählen Sie den seriellen Port und warten Sie auf „Flash complete".
5. Das Tool fordert Sie auf, **eine Lizenz zu erwerben**. Nach dem Kauf zeigt es Ihre Lizenz-Zeichenfolge an — kopieren Sie sie. Sie benötigen sie einmal auf der Aktivierungsseite.

:::warning
Wenn Ihr Board nicht automatisch in den Download-Modus wechselt, halten Sie `BOOT` gedrückt, während Sie `RESET` drücken, und lassen Sie dann los.
:::
