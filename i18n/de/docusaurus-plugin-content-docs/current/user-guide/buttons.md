---
sidebar_position: 1
title: Tasten & Touch
---

# Tasten & Touch

Verschiedene Boards haben eine Taste (`BOOT`), zwei (`BOOT` + `USER`) oder einen Touchscreen. NMMiner bietet konsistente Gesten für alle drei.

## Boards mit einer Taste

| Geste       | Aktion                                            |
| ------------- | ------------------------------------------------- |
| Einfacher Klick  | Bildschirm aufwecken (auf Boards mit Display).       |
| Doppelklick  | Zur nächsten Bildschirmseite wechseln.                   |
| Langes Drücken    | Miner-Konfiguration aufrufen (AP-Modus erzwingen).        |

## Boards mit zwei Tasten

| Taste   | Geste       | Aktion                                                  |
| -------- | ------------- | ------------------------------------------------------- |
| `BOOT`   | Einfacher Klick  | Bildschirm aufwecken.                                        |
| `BOOT`   | Doppelklick  | Bildschirm aufwecken.                                        |
| `BOOT`   | Langes Drücken    | Alle gespeicherten Zustände aus NVS löschen (falls im Build aktiviert).  |
| `USER`   | Einfacher Klick  | Bildschirm aufwecken.                                        |
| `USER`   | Doppelklick  | Zur nächsten Bildschirmseite wechseln.                         |
| `USER`   | Langes Drücken    | Miner-Konfiguration aufrufen (AP-Modus erzwingen).              |

## Boards mit Touchscreen

Seit v2.0.01 unterstützen Touch-Boards (NM-TV-154, CYD 2.4 / 2.8 / 3.5, Waveshare 3.5 Touch usw.) Gesten **direkt auf dem Bildschirm**:

| Geste                       | Aktion                                            |
| ----------------------------- | ------------------------------------------------- |
| Tippen                           | Zur nächsten Bildschirmseite wechseln (weckt den Bildschirm auch, falls er schläft). |
| **10 Sekunden lang drücken**     | Miner-Konfiguration aufrufen (AP-Modus erzwingen).        |

Siehe [Bildschirmseiten](./screens.md) für die Seitenreihenfolge und [Konfigurationsportal](./configuration-portal.md) dafür, was nach einem langen Druck passiert.
