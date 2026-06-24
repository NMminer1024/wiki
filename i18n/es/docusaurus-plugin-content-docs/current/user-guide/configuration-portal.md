---
sidebar_position: 3
title: Portal de configuración
---

# Portal de configuración

El portal de configuración es una pequeña página web estilo portal cautivo servida desde el propio minero mientras está en modo AP.

## Cuándo se muestra el portal

- **Primer arranque** después de flashear.
- **Fallo de reconexión** — si el minero no puede alcanzar el WiFi guardado en ~15 segundos, vuelve al modo AP automáticamente.
- **Forzado manual** — pulsación larga del botón de configuración (consulte [Botones](./buttons.md)).

## Cómo acceder

1. Abra la configuración de WiFi en su teléfono o portátil.
2. Conéctese al punto de acceso abierto **`nmap-2.4g`**.
3. En un teléfono, un navegador de portal cautivo aparece automáticamente. En un PC, abra `http://192.168.4.1`.

Verá el formulario de configuración descrito en [Primera configuración](../getting-started/first-configuration.md).

## Comportamiento al guardar

Al presionar **Save** se escriben los nuevos ajustes, se espera a que el almacenamiento del dispositivo se vacíe (10-15 s) y luego se reinicia. **No apague ni encienda durante esta ventana** — deje que se reinicie por sí solo.