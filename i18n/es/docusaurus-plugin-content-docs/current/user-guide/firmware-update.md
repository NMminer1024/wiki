---
sidebar_position: 5
title: Actualización de firmware
---

# Actualización de firmware

Actualizar es igual que el primer flasheo: vuelva a abrir la herramienta de flasheo del navegador, elija su placa, instale.

## Pasos

1. Abra [flash.nmminer.com](https://flash.nmminer.com) en Chrome o Edge.
2. Elija el perfil de placa.
3. Haga clic en **Install**, elija el puerto serie, espere a que termine.

Después de actualizar **no necesita reactivar la licencia**. Los ajustes (SSID / pool / billetera) sobreviven a la actualización.

## Seguimiento de la versión de firmware de forma remota

La versión actual del firmware es reportada por cada minero a través de [`GET /api/system/info`](../api/system.md). Combine eso con el descubrimiento de [Swarm](./swarm.md) y podrá ver de un vistazo qué mineros en la LAN aún necesitan una actualización.

## Qué cambia entre versiones

Consulte el [registro de lanzamientos de GitHub](https://github.com/NMminer1024/NMMiner#release-log) para el registro de cambios completo. Los saltos de versión mayor (p. ej. **v1.x → v2.0**) introdujeron mejoras disruptivas en NM Monitor y Swarm — las versiones antiguas no son interoperables con los protocolos Swarm más nuevos, por lo que es mejor mantener toda su flota en la misma serie menor.