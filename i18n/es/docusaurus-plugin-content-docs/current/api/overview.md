---
sidebar_position: 1
title: Descripción general de la API
---

# Descripción general de la API

Cada dispositivo NMMiner ejecuta un servidor HTTP en el **puerto 80** que expone una API completa de estilo REST. La misma API es utilizada por:

- La interfaz de navegador integrada de [NM Monitor](../user-guide/nm-monitor.md).
- El agregador [Swarm](../user-guide/swarm.md).
- Cualquiera — usted, su panel de control, un plugin de Grafana, un script de Python — que desee leer el estado o enviar configuraciones.

> ✅ Esta página documenta el **contrato público**: rutas, métodos, cuerpos de solicitud, cuerpos de respuesta, códigos de estado.
> ❌ **No** documenta la implementación. Trate el dispositivo como una caja negra accesible por HTTP.

## URL base
