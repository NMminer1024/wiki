---
sidebar_position: 6
title: Protector de pantalla
---

# Protector de pantalla

Después de un período de inactividad configurable, la pantalla entra en modo protector de pantalla.

## Modos

| Modo     | Efecto                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------- |
| `IMAGE`  | Presentación de diapositivas de imágenes personalizadas subidas a través de NM Monitor. Fundido suave de entrada / salida. |
| `BLACK`  | Apaga la retroiluminación (los OLED van al contraste mínimo). Ahorra energía y **le da la tasa de hash máxima absoluta**. |

Cambie de modo en vivo desde la sección **Preferences** de [NM Monitor](./nm-monitor.md) — sin reinicio.

## Imágenes personalizadas

La página **Screensaver** de NM Monitor le permite subir archivos PNG / JPG normales directamente desde su navegador. El navegador convierte cada imagen al formato compacto `.ss` de NMMiner (RGB565 + RLE) y la envía a la carpeta `/ss/` del dispositivo.

- Las imágenes se adaptan a la **resolución de pantalla actual** automáticamente.
- Cada archivo `.ss` tiene como máximo **200 KB**.
- El dispositivo gestiona el espacio en disco — si el sistema de archivos se llena, se sobrescribe el protector de pantalla más antiguo.

¿Quiere programar la subida? Consulte [API › Carga de protector de pantalla](../api/screensaver-upload.md).

:::tip
Para la tasa de hash más alta absoluta, elija el modo **Black** — el refresco de pantalla cuesta ciclos de CPU que de otro modo podrían dedicarse a minar.
:::

## Despertar

| Tipo de placa       | Gesto para despertar                  |
| ------------------- | ------------------------------------- |
| Solo botones        | Clic simple en cualquier botón.       |
| Pantalla táctil     | Toque en cualquier parte de la pantalla. |