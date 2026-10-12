---
sidebar_position: 2
title: Páginas de pantalla
---

# Páginas de pantalla

Las placas con pantalla recorren un pequeño conjunto de páginas. Cambie con el gesto definido en [Botones y táctil](./buttons.md) — toque, doble clic o deslizamiento según el hardware.

NMMiner incluye diseños para los siguientes tamaños nativos:

```
128x64    128x128    160x80     240x135
240x240   320x170    320x172    320x240
480x320   536x240
```

## Páginas

| Orden | Página       | Propósito                                                                |
| ----- | ---------- | ---------------------------------------------------------------------- |
| 1     | **Loading**| Splash + estado de arranque, versión de firmware, handshake de red.             |
| 2     | **Config** | Se muestra en modo AP — QR / IP / SSID para alcanzar el portal cautivo.    |
| 3     | **Miner**  | Tasa de hash en vivo, dificultad **mejor de sesión** y **mejor de todos los tiempos**, shares aceptadas / rechazadas, URL del pool, tiempo de actividad. La página "de trabajo" principal. |
| 4     | **Clock**  | Reloj grande + fecha, con ticker de precio BTC que se pone verde en ganancias y rojo en pérdidas. Formato de hora seleccionable 12 / 24 h, formato de fecha configurable. |
| 5     | **Price**  | Dos modos:<br/>• **K-line** — gráfico de velas de su moneda principal, intervalo configurable (`15m`, `1h`, `4h`, `1d`, …).<br/>• **Wall** — vista de lista de seguimiento multi-moneda (hasta 20 pares). |
| 6     | **Weather**| Condiciones actuales + AQI + pronóstico de 3 días + amanecer / atardecer. Unidades seleccionables de temperatura (°C / °F), velocidad del viento (km/h / mph / m/s) y altímetro (presión / humedad). |
| 7     | **Ladder** | **Opt-in** tabla de clasificación global top-10 ordenada por la mejor dificultad de share de todos los tiempos. Las billeteras se muestran como `primeras4…últimas4` por privacidad. Desactivado por defecto. Los mismos datos también se publican en la web en [ladder.nmminer.com](https://ladder.nmminer.com/) — véase [Ladder](./ladder.md). |

:::info
El orden de las páginas es idéntico en todas las placas; las pantallas pequeñas / OLED omiten las páginas que no caben. NMMiner recuerda la página en la que estaba y reanuda allí tras un ciclo de energía (desde v1.8.20).
:::

## Protector de pantalla

Si deja el minero inactivo el tiempo suficiente, entra en un protector de pantalla:

- **Modo imagen** — diapositivas de imágenes personalizadas subidas a través de NM Monitor.
- **Modo negro** — apaga la luz de fondo (o el contraste OLED al mínimo) para el menor consumo de energía y **la tasa de hash pico absoluta**.

Gestos de despertar: clic simple en `BOOT` (o `USER`), o toque una pantalla táctil. Detalles: [Protector de pantalla](./screen-saver.md).
