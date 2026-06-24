---
sidebar_position: 2
title: Protocolo Stratum
---

# Protocolo Stratum

**Stratum v1** es el protocolo de facto que los pools de minería de Bitcoin usan para comunicarse con los mineros. NMMiner es un cliente Stratum v1.

> Esta página solo documenta los mensajes Stratum **públicos y bien conocidos** que todo pool entiende. Las extensiones específicas del pool y los detalles de implementación interna están fuera del alcance.

## Conexión

- **Transporte**: TCP, o TCP envuelto en TLS para pools SSL.
- **Esquema de dirección**:
  - `stratum+tcp://host:port` — TCP simple.
  - `stratum+ssl://host:port` — TLS.
- **Identidad del trabajador**: la dirección de billetera seguida opcionalmente de `.nombreDeTrabajador`, p. ej. `bc1q....nombreDeTrabajador`.

El minero mantiene el socket abierto durante toda la sesión. Si el pool lo cierra, NMMiner se reconecta automáticamente.

## Flujo de mensajes
