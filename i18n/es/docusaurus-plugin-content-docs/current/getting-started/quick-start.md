---
sidebar_position: 1
title: Inicio rápido
---

# Inicio rápido

Ponga una placa ESP32 nueva a minar en **unos 10 minutos**.

## Lo que necesita

- Una [placa oficialmente soportada](../hardware/overview.md) (ESP32-D0 / S3 / C3 / C5).
- Un cable USB y un PC con **Chrome** o **Edge** (para la herramienta de flasheo basada en navegador).
- Una red WiFi de 2.4 GHz.

**No necesita una billetera** para empezar — NMMiner viene preconfigurado con nuestro propio pool SoloBTC ([solobtc.nmminer.com](https://solobtc.nmminer.com)) y una billetera demo temporal. Reemplace la billetera con su propia dirección BTC cuando esté listo.

## Los cinco pasos

1. **Flashear firmware** — abra [flash.nmminer.com](https://flash.nmminer.com), elija su placa, haga clic en *Install*. Consulte [Flashear firmware](./flash-firmware.md).
2. **Comprar y activar licencia** — la herramienta de flasheo le guiará en la compra de una licencia, luego pegue la cadena de licencia en el cuadro de activación. Consulte [Activar licencia](./activate-licence.md).
3. **Conéctese al AP `nmap-2.4g`** con su teléfono. El portal cautivo aparecerá automáticamente. En PC: visite `http://192.168.4.1` manualmente.
4. **Configure** WiFi (obligatorio) y billetera (recomendado) en la página web, luego presione **Save**. El minero se reinicia en ~15 segundos. Consulte [Primera configuración](./first-configuration.md).
5. **Véalo minar** — la página Miner en la pantalla muestra la tasa de hash en vivo, shares aceptadas y diff del pool. Visite [solobtc.nmminer.com](https://solobtc.nmminer.com) para ver a su trabajador aparecer en el panel del pool.

:::tip
En el primer encendido, el minero intentará reconectarse al último WiFi conocido durante 15 segundos. Si falla, vuelve a modo AP / configuración automáticamente.
:::