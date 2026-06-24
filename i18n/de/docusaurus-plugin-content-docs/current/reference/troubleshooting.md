---
sidebar_position: 4
title: Fehlerbehebung
---

# Fehlerbehebung

Häufige Probleme und deren Lösungen.

## Miner startet nicht

| Symptom                        | Mögliche Ursachen & Lösungen                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Keine LED, nichts auf dem Bildschirm | Überprüfen Sie die Stromversorgung — versuchen Sie ein anderes USB-Kabel und einen anderen Anschluss. Einige Boards benötigen Netzteile mit höherer Amperezahl (>1A). |
| Boot-Loop (wiederholte Neustarts) | Neu flashen. Möglicherweise beschädigte Firmware. Verwenden Sie das Web Flash Tool und löschen Sie den Flash zuerst. |
| Board nicht vom Computer erkannt | Treiber installieren: CP210x oder CH340. Überprüfen Sie den Geräte-Manager (Windows) oder `ls /dev/tty*` (macOS/Linux). |

## WLAN-Probleme

| Symptom                        | Mögliche Ursachen & Lösungen                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Captive-Portal erscheint nicht  | Navigieren Sie manuell zu `http://192.168.4.1` im Browser. Stellen Sie sicher, dass Sie mit `NMMiner-Setup` WiFi verbunden sind. |
| Verbindung zum Heim-WLAN schlägt fehl | Überprüfen Sie das Passwort. Stellen Sie sicher, dass es sich um 2,4 GHz WiFi handelt (5 GHz wird nicht unterstützt). Versuchen Sie, den Miner näher am Router zu platzieren. |
| Häufige Verbindungsabbrüche     | Schwaches Signal — bringen Sie den Miner näher an den AP. Fügen Sie einen 100 µF Kondensator zwischen 3,3V und GND hinzu (ESP32-D0-Boards). Reduzieren Sie die Taktfrequenz, falls übertaktet. |

## Mining-Probleme

| Symptom                        | Mögliche Ursachen & Lösungen                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Keine Shares werden eingereicht | Überprüfen Sie, ob die Pool-URL korrekt ist. Bestätigen Sie, dass das Wallet-Adressformat gültig ist. Versuchen Sie den Standard-SoloBTC-Pool, um Netzwerk-/Firewall-Probleme auszuschließen. |
| Hohe Ablehnungsrate (>5 %)     | Hohe Latenz zum Pool — versuchen Sie einen geografisch näheren Server. Überprüfen Sie auf WiFi-Paketverlust. Reduzieren Sie die Taktfrequenz (instabile Overclock). |
| Hashrate deutlich unter den Erwartungen | Keine Lizenz — die Standardtaktung begrenzt die Leistung. Board überhitzt — verbessern Sie die Kühlung. Stromversorgung unzureichend — verwenden Sie ein besseres USB-Kabel/Netzteil. |

## Display-Probleme

| Symptom                        | Mögliche Ursachen & Lösungen                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Weißer/leerer Bildschirm       | Board hat keinen Bildschirm (z.B. DevKitC) — das ist normal. Versuchen Sie, `RotateScreen` in den Einstellungen anzupassen. |
| Bildschirm verkehrt herum      | Setzen Sie `RotateScreen: 180` in den Präferenzeinstellungen.                       |
| Bildschirm flackert            | Versuchen Sie eine niedrigere Helligkeit. Einige Displays haben inhärentes Flackern — normal bei günstigen TFTs. |

## API / Netzwerk

| Symptom                        | Mögliche Ursachen & Lösungen                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Keine Verbindung zu `http://<miner-ip>` | Überprüfen Sie, ob der Miner eingeschaltet und mit WiFi verbunden ist. Überprüfen Sie die IP auf dem Miner-Bildschirm oder in der DHCP-Liste des Routers. Stellen Sie sicher, dass Sie sich im selben LAN befinden. |
| API gibt 404 zurück            | Endpunkt-Pfad überprüfen — URLs unterscheiden zwischen Groß- und Kleinschreibung. Siehe [API-Übersicht](../api/overview.md). |
| Swarm findet keine anderen Miner | Stellen Sie sicher, dass alle Miner im selben Subnetz sind. Halten Sie die Miner-Seite auf mindestens einem Gerät geöffnet. Rufen Sie manuell `/alive?rescan` auf. |

## Immer noch festgefahren?

- 📧 **E-Mail**: nmminer1024@gmail.com
- 💬 **Telegram**: [t.me/NMMiner](https://t.me/NMMiner)
- Geben Sie Details zu Ihrem Board-Modell, der Firmware-Version und den genauen Symptomen an.
