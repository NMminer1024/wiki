---
sidebar_position: 6
title: Bildschirmschoner
---

# Bildschirmschoner

Nach einer konfigurierbaren Leerlaufzeit wechselt das Display in den Bildschirmschoner-Modus.

## Modi

| Modus    | Wirkung                                                                                  |
| ------- | --------------------------------------------------------------------------------------- |
| `IMAGE` | Diashow benutzerdefinierter, über NM Monitor hochgeladener Bilder. Sanftes Ein-/Ausblenden.          |
| `BLACK` | Schaltet die Hintergrundbeleuchtung aus (OLEDs gehen auf minimalen Kontrast). Spart Strom und **gibt Ihnen die absolute Spitzenhashrate**. |

Wechseln Sie die Modi live im **Preferences**-Bereich von [NM Monitor](./nm-monitor.md) — kein Neustart.

## Benutzerdefinierte Bilder

Die **Screensaver**-Seite von NM Monitor lässt Sie reguläre PNG-/JPG-Dateien direkt aus Ihrem Browser hochladen. Der Browser konvertiert jedes Bild in NMMiners kompaktes `.ss`-Format (RGB565 + RLE) und schiebt es in den `/ss/`-Ordner des Geräts.

- Bilder werden automatisch an die **aktuelle Bildschirmauflösung** angepasst.
- Jede `.ss`-Datei ist höchstens **200 KB** groß.
- Das Gerät verwaltet den Speicherplatz — wenn das Dateisystem voll ist, wird der älteste Bildschirmschoner überschrieben.

Möchten Sie den Upload skripten? Siehe [API › Screensaver Upload](../api/screensaver-upload.md).

:::tip
Für die absolut höchste Hashrate wählen Sie den **Black**-Modus — die Display-Aktualisierung kostet CPU-Zyklen, die sonst für das Hashing genutzt werden könnten.
:::

## Aufwecken

| Board-Typ      | Weck-Geste                       |
| --------------- | ---------------------------------- |
| Nur Tasten     | Einfacher Klick auf eine beliebige Taste.           |
| Touch-Display   | Irgendwo auf den Bildschirm tippen.           |
