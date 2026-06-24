---
sidebar_position: 1
title: Botones y táctil
---

# Botones y táctil

Diferentes placas tienen un botón (`BOOT`), dos (`BOOT` + `USER`) o una pantalla táctil. NMMiner expone gestos consistentes en los tres tipos.

## Placas de un botón

| Gesto          | Acción                                                       |
| -------------- | ------------------------------------------------------------ |
| Clic simple    | Despertar la pantalla (en placas con pantalla).               |
| Doble clic     | Cambiar a la siguiente página de pantalla.                    |
| Pulsación larga | Entrar en configuración del minero (forzar modo AP).          |

## Placas de dos botones

| Botón    | Gesto          | Acción                                                                |
| -------- | -------------- | --------------------------------------------------------------------- |
| `BOOT`   | Clic simple    | Despertar la pantalla.                                                 |
| `BOOT`   | Doble clic     | Despertar la pantalla.                                                 |
| `BOOT`   | Pulsación larga | Limpiar todo el estado almacenado en NVS (si está habilitado en la compilación). |
| `USER`   | Clic simple    | Despertar la pantalla.                                                 |
| `USER`   | Doble clic     | Cambiar a la siguiente página de pantalla.                              |
| `USER`   | Pulsación larga | Entrar en configuración del minero (forzar modo AP).                    |

## Placas con pantalla táctil

Desde v2.0.01, las placas táctiles (NM-TV-154, CYD 2.4 / 2.8 / 3.5, Waveshare 3.5 táctil, etc.) soportan gestos **directamente en la pantalla**:

| Gesto                              | Acción                                                                     |
| ---------------------------------- | -------------------------------------------------------------------------- |
| Toque                              | Cambiar a la siguiente página de pantalla (también despierta la pantalla si está dormida). |
| **Pulsación larga de 10 segundos** | Entrar en configuración del minero (forzar modo AP).                        |

Consulte [Pantallas](./screens.md) para el orden de páginas, y [Portal de configuración](./configuration-portal.md) para lo que sucede después de una pulsación larga.