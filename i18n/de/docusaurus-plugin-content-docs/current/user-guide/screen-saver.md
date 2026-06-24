---
sidebar_position: 8
title: Bildschirmschoner
---

# Bildschirmschoner

Konfigurieren Sie benutzerdefinierte Bildschirmschoner für das Display Ihres NMMiner-Geräts.

## Übersicht

Wenn der Miner für eine bestimmte Zeit im Leerlauf ist (keine Tastendrücke), wechselt der Bildschirm in den Bildschirmschoner-Modus:

- **Bildmodus**: Zeigt benutzerdefinierte Bilder als Diashow an
- **Schwarz-Modus**: Schaltet die Hintergrundbeleuchtung aus (maximale Hashrate, null visuelle Ausgabe)

## Bildschirmschoner hochladen

### Über NM Monitor (empfohlen)

1. Öffnen Sie `http://<miner-ip>` → **Bildschirmschoner**
2. Ziehen Sie PNG/JPG-Bilder per Drag & Drop oder klicken Sie zum Durchsuchen
3. NM Monitor konvertiert sie automatisch in das `.ss`-Format
4. Klicken Sie auf **Hochladen**
5. Das Bild erscheint in der Bildschirmschoner-Rotation

### Über API

Siehe [Bildschirmschoner-Upload API](../api/screensaver-upload.md) für programmatische Up

loads.

## Einstellungen

| Einstellung              | Optionen                        | Beschreibung                                           |
| ------------------------ | ------------------------------- | ------------------------------------------------------ |
| **Bildschirmschoner**    | `off`, `1m`, `5m`, `30m`        | Leerlauf-Timeout, bevor der Bildschirmschoner startet  |
| **Bildschirmschoner-Modus** | `image`, `black`              | Diashow oder Hintergrundbeleuchtung aus                |

### Konfigurieren

Über NM Monitor: **Einstellungen → Präferenzen**

Über API:

```bash
curl -X POST http://<miner-ip>/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"ScreenSaver":"5m","ScreenSaverMode":"image"}'
```

## Speichergrenzen

- Jede Bildschirmschoner-Datei wird basierend auf der Auflösung Ihres Bildschirms in der Größe angepasst
- Maximaler Upload pro Datei: **200 KB**
- Der Gerätespeicher fasst normalerweise **4-10 Bildschirmschoner**, abhängig von der Auflösung
- Wenn der Speicher voll ist, überschreibt das Hochladen eines neuen Bildschirmschoners den ältesten

## Tipps

- **Für maximale Hashrate**: Verwenden Sie den schwarzen Bildschirmschoner-Modus (`ScreenSaverMode: "black"`)
- **Verwenden Sie Bilder mit hohem Kontrast** — günstige TFT-Displays haben eine schlechte Farbwiedergabe
- **Halten Sie die Dateigröße gering** — große Bilder brauchen länger zum Hochladen und belegen mehr Speicher
- **Testen Sie die Anzeige** — was auf Ihrem Telefon gut aussieht, kann auf einem 320×240 TFT anders aussehen
