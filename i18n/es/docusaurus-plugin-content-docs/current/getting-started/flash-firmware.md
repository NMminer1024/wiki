---
sidebar_position: 2
title: Flashear firmware
---

# Flashear firmware

NMMiner se distribuye como una única imagen flasheable desde el navegador. No se requiere `esptool` ni `idf.py`.

## Flasheo por navegador (recomendado)

1. Abra [flash.nmminer.com](https://flash.nmminer.com) en **Chrome o Edge**. Firefox / Safari no implementan WebSerial.
2. Conecte su placa por USB.
3. Elija su placa de la lista. La herramienta obtendrá el firmware correspondiente del lanzamiento oficial de GitHub.
4. Haga clic en **Install**, elija el puerto serie y espere a que aparezca "Flash complete".
5. La herramienta le pedirá que **compre una licencia**. Una vez comprada, muestra su cadena de licencia — cópiela. La necesitará una vez en la página de activación.

:::warning
Si su placa no entra automáticamente en modo descarga, mantenga presionado `BOOT` mientras presiona `RESET`, luego suelte.
:::