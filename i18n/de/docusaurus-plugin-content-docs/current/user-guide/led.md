---
sidebar_position: 5
title: LED-Anzeige
---

# LED-Anzeige

Die Status-LED auf Ihrem ESP32-Board zeigt den Betriebszustand des Miners an.

## LED-Standorte

| Board                    | LED-Position              | Farbe         |
| ------------------------ | ------------------------- | ------------- |
| ESP32-DevKitC            | Neben dem USB-Anschluss   | Rot (Strom)   |
| CYD / CYD2USB            | Board-Rückseite (RGB)     | Mehrfarbig    |
| M5Stack Core             | Seite des Gehäuses (RGB)  | Mehrfarbig    |
| M5Stamp C3               | Auf dem Board             | Einfarbig     |
| TTGO T-Display           | Board-Oberseite           | Blau          |

## LED-Modi

| Modus                  | Muster                                   | Bedeutung                                      |
| ---------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Leerlauf / Boot**    | Langsames Blinken (1 Hz)                 | Verbindung zum WLAN oder Warten auf Pool-Job   |
| **Mining**             | Schnelles Blinken (~4 Hz)                | Aktives Hashing und Einreichen von Shares      |
| **Share akzeptiert**   | Einmaliges langes Aufleuchten (200 ms)   | Der Pool hat eine eingereichte Share akzeptiert|
| **Share abgelehnt**    | Zwei schnelle Blinks                     | Der Pool hat eine Share abgelehnt              |
| **Fehler**             | Sehr schnelles Blinken (10 Hz)           | Keine Verbindung zum Pool oder WiFi weg        |
| **Standortsuche**      | Rhythmischer Impuls                      | `/api/swarm/find` wurde aufgerufen             |

## LED deaktivieren

Wenn Sie die LED stört (besonders in dunklen Räumen):

1. Öffnen Sie NM Monitor
2. Gehen Sie zu **Einstellungen → Präferenzen**
3. Setzen Sie **LED aktivieren** auf **Aus**

Oder über die API:

```bash
curl -X POST http://<miner-ip>/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"LedEnable":0}'
```
