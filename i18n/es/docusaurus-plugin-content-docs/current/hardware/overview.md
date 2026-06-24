---
sidebar_position: 1
title: Resumen de hardware
---

# Resumen de hardware

NMMiner apunta a cuatro familias de chips. Cada familia tiene su propia tasa de hash máxima y una lista seleccionada de placas soportadas.

| Familia de chip | Tasa de hash máxima típica | Notas |
| --------------- | -------------------------- | ----- |
| **ESP32-D0**    | hasta **1.035 KH/s**       | Mejor rendimiento bruto. Familia ESP32 original. |
| **ESP32-S3**    | hasta **400 KH/s**         | ISA vectorial, doble núcleo, normalmente acompañado de pantallas TFT / AMOLED. |
| **ESP32-C3**    | hasta **402 KH/s**         | Núcleo RISC-V único, el nivel más económico. |
| **ESP32-C5**    | hasta **150 KH/s**         | Parte RISC-V de doble banda más reciente. |

Use las subpáginas para encontrar la placa exacta que tiene:

- [Placas ESP32-D0](./esp32-d0-boards.md)
- [Placas ESP32-S3](./esp32-s3-boards.md)
- [Placas ESP32-C3](./esp32-c3-boards.md)
- [Placas ESP32-C5](./esp32-c5-boards.md)

:::tip
La columna de tasa de hash está **medida en hardware real** con la configuración de refresco de interfaz estable más alta, con el protector de pantalla en modo **Black**. Reducir el intervalo de refresco de pantalla gana unos pocos KH/s extra en cada placa.
:::