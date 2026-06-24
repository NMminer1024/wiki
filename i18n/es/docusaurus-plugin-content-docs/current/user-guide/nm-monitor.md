---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

**NM Monitor** es una aplicación web que vive **dentro de cada dispositivo NMMiner**. No hay nada que instalar en su teléfono o PC — abra la IP del minero en cualquier navegador y ya está dentro. Toda la monitorización y gestión de flota se realiza a través de NM Monitor y su menú [Swarm](./swarm.md).

## Abrir NM Monitor

1. Conecte su teléfono o PC al **mismo WiFi** que el minero.
2. Encuentre la IP del minero — la forma más fácil es consultar la **página Miner** en la pantalla del dispositivo (la IP se muestra en la barra de estado). Alternativamente, búsquela en la tabla DHCP de su enrutador.
3. Abra `http://<ip-del-minero>/` en **Chrome, Edge, Safari o Firefox**. No hay puerto que recordar — puerto 80.
4. La página de inicio se carga automáticamente.

:::tip
Marque `http://<nombre-de-host-del-minero>/` (p. ej. `http://nm-cyd-c5-ab12cd/`) — la mayoría de enrutadores domésticos le permitirán acceder al minero también por nombre de host.
:::

## Lo que puede hacer en NM Monitor

| Sección               | Propósito                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| **Dashboard**         | Tasa de hash en vivo, shares aceptadas / rechazadas, diff del pool, tiempo de actividad, RSSI, heap libre, temperatura (donde se soporte). |
| **Swarm**             | Agregación en toda la LAN: vea cada NMMiner en el mismo WiFi, sume la tasa de hash, haga ping a un minero específico para que parpadee. Consulte [Swarm](./swarm.md). |
| **Network**           | Cambiar nombre de host, SSID WiFi, contraseña WiFi.                                               |
| **Mining**            | URL del pool principal / de respaldo, dirección de billetera, contraseña del pool.                 |
| **Time**              | Zona horaria, formato de hora (12 / 24 h), formato de fecha.                                      |
| **Preferences**       | Brillo de pantalla, rotación, habilitar LED, tiempo de protector de pantalla, modo de protector de pantalla (image / black), opt-in de [Ladder](./ladder.md). |
| **Market**            | Elegir la moneda principal y la lista de observación mostradas en la página Price.                 |
| **Weather**           | Establecer la ciudad / lat / lon y las unidades usadas por la página Weather.                      |
| **Screensaver**       | Subir PNGs personalizados que se convierten en el navegador y se envían al minero.                 |
| **System**            | Versión de firmware, placa, heap libre, botón **Restart**.                                         |
| **API Doc**           | Referencia de API HTTP en vivo (también publicada en `/api-doc`).                                  |

## Léalo desde cualquier lugar de su LAN

NM Monitor establece `Access-Control-Allow-Origin: *` en cada endpoint de la API. Eso significa que una página de navegador servida desde cualquier origen puede leer el estado del minero — útil para construir sus propios paneles de control. El conjunto completo de endpoints está documentado en [Referencia de API](../api/overview.md).