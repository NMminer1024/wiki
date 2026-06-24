---
sidebar_position: 4
title: Lizenz aktivieren
---

# Lizenz aktivieren

Einige fortgeschrittene Funktionen von NMMiner erfordern eine Lizenz.

## Welche Funktionen benötigen eine Lizenz?

Die gesamte Kern-Mining-Funktionalität ist **kostenlos** — Sie können ohne Lizenz auf jedem Pool minen.

Eine Lizenz schaltet Folgendes frei:
- Höhere maximal einstellbare Taktfrequenz (höhere Hashrate)
- Benutzerdefinierte Bildschirmschoner (`.ss`-Format-Upload)
- Bestimmte erweiterte API-Endpunkte

## So aktivieren Sie eine Lizenz

1. **Kaufen** Sie eine Lizenz über den [NMMiner-Shop](https://www.nmminer.com).
2. Sie erhalten einen **Lizenzschlüssel** per E-Mail.
3. Öffnen Sie den [NM Monitor](../user-guide/nm-monitor.md) in Ihrem Browser.
4. Gehen Sie zu **Einstellungen → Lizenz**.
5. Fügen Sie Ihren Schlüssel ein und klicken Sie auf **Aktivieren**.

Oder über die API:

```bash
curl -X POST http://<miner-ip>/api/setting/licence \
  -H "Content-Type: application/json" \
  -d '{"LicenceKey":"XXXX-XXXX-XXXX-XXXX"}'
```

## Lizenz übertragen

Lizenzen sind an ein bestimmtes Gerät (MAC-Adresse) gebunden. Um eine Lizenz auf ein anderes Board zu übertragen, kontaktieren Sie den Support.

## Support

- 📧 **E-Mail**: nmminer1024@gmail.com
- 💬 **Telegram**: [t.me/NMMiner](https://t.me/NMMiner)
