---
sidebar_position: 4
title: Primera configuración
---

# Primera configuración

En una placa recién flasheada, NMMiner entra en **modo AP / configuración** y expone una página web donde puede configurar WiFi, pool, billetera y opciones de pantalla.

## Campos

| Campo                      | Predeterminado                                         | Propósito                                                                         |
| -------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **WiFi SSID**              | `NMTech-2.4G`                                          | El nombre de su red de 2.4 GHz.                                                    |
| **WiFi Password**          | `NMMiner2048`                                          | Contraseña WPA / WPA2.                                                             |
| **Pool URL (primary)**     | `stratum+tcp://solobtc.nmminer.com:3333`               | El pool SoloBTC propio de NMMiner. Cámbielo solo si realmente lo necesita.           |
| **Pool URL (fallback)**    | `stratum+tcp://au.solobtc.nmminer.com:3333`            | El respaldo de Asia-Pacífico de NMMiner. Se usa si el principal es inalcanzable.     |
| **Wallet / Worker name**   | Billetera demo pre-rellenada                           | Su dirección de pago BTC, opcionalmente seguida de `.nombreDeTrabajador`. **¡Cámbiela!** |
| **UI refresh**             | Específico de la placa                                 | Más bajo = refresco de pantalla más rápido, ligeramente menos tasa de hash. Más alto = máxima tasa de hash, interfaz más lenta. |
| **Screen brightness**      | 100 %                                                  | 0–100 %.                                                                           |
| **Time zone**              | `+8`                                                   | Se admite decimal (p. ej. `8`, `5.5`, `-3.5`). Rango: -13.5 ~ +13.5.               |
| **Time format**            | 24 h                                                   | 12 / 24 horas.                                                                      |
| **LED**                    | Específico de la placa                                 | Habilitar / deshabilitar el LED de estado en la placa.                               |

Cuando presione **Save**, el minero tarda 10-15 s en guardar en flash. **No lo reinicie manualmente.** Se reiniciará por sí solo.

:::tip Establezca su propia billetera
NMMiner está preconfigurado para minar a una dirección demo para que la placa "simplemente funcione" al sacarla de la caja. Reemplace la billetera con su propia dirección BTC antes de hacer algo serio — esa dirección demo es compartida por cada dispositivo nuevo.
:::

## Forzar reconfiguración

Si necesita cambiar la configuración después de que el minero ya esté en línea:

- **Placa de un botón** → pulsación larga de `BOOT`.
- **Placa de dos botones** → pulsación larga de `USER`.
- **Placa con pantalla táctil** → pulsación larga de la pantalla durante 10 segundos.

El minero se reinicia en modo AP y expone el portal cautivo de nuevo. Comportamiento detallado: [Botones](../user-guide/buttons.md).

## Actualizaciones en vivo sin reinicio

Algunas configuraciones se aplican **instantáneamente** — sin necesidad de volver a guardar y reiniciar:

- Brillo de pantalla
- Rotación de pantalla
- LED encendido / apagado
- Zona horaria
- Modo de protector de pantalla (image / black)

Puede cambiar estas desde [NM Monitor](../user-guide/nm-monitor.md) y ver el efecto inmediatamente.