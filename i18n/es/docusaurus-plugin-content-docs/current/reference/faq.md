---
sidebar_position: 3
title: FAQ
---

# FAQ

## ¿Encontrará NMMiner alguna vez un bloque de Bitcoin por sí solo?

Matemáticamente, sí — con la misma probabilidad que un billete de lotería. En la práctica, no. El objetivo es la **diversión** (y apoyar la red), no el pago.

## ¿Cuánta electricidad consume?

La mayoría de las placas soportadas consumen menos de 1 W. Incluso a $0,30 /kWh, eso es bastante menos de 30 céntimos al mes.

## ¿Qué pool usa NMMiner por defecto?

NMMiner viene preconfigurado para su propio pool SoloBTC:

- Principal: `stratum+tcp://solobtc.nmminer.com:3333`
- Respaldo: `stratum+tcp://au.solobtc.nmminer.com:3333`

**Solo necesita cambiar la dirección de billetera** a su propia dirección BTC. Las URLs del pool normalmente están bien tal cual.

## ¿Puedo usar un pool diferente?

Sí — cualquier cosa que hable Stratum v1 funcionará. Consulte la [Lista de pools](./pool-list.md) para opciones comunitarias de SoloBTC y DGB. Tenga en cuenta que los grandes pools comerciales con una dificultad de share mínima alta rechazarán cada share — quédese con los pools oficiales [SoloBTC](https://solobtc.nmminer.com) de NMMiner o endpoints de estilo solo.

## ¿Puede NMMiner minar algo que no sea Bitcoin?

Sí — **DigiByte (DGB)** también está soportado. DGB usa el mismo algoritmo SHA-256d, así que funciona con el mismo firmware. Solo apunte la URL del pool a un pool DGB y use una dirección de billetera DGB.

## ¿Necesito una billetera en el dispositivo?

No. Solo necesita una **dirección de pago**. El pool envía las recompensas directamente a cualquier dirección BTC / DGB que configure.

## Mi pantalla se despierta sola cada pocos segundos.

Es un refresco de fondo inofensivo. Use el modo de protector de pantalla **Black** si quiere cero actividad de pantalla (y máxima tasa de hash).

## ¿Puedo ejecutar dos mineros en el mismo WiFi?

Sí. El menú **Swarm** de NM Monitor descubre automáticamente cada NMMiner en la misma LAN — hasta 255 dispositivos por subred /24. Consulte [Swarm](../user-guide/swarm.md).

## Mi minero está atascado en la pantalla Loading / nunca se conecta al pool

Revise esta lista:

1. **El WiFi debe ser de 2.4 GHz.** La mayoría de los chips ESP32 no soportan 5 GHz. Si su WiFi doméstico tiene ambas bandas bajo el mismo SSID, sepárelas temporalmente o únase explícitamente a la de 2.4 GHz.
2. **Verifique la dirección de billetera.** Un error tipográfico aquí significa que el pool rechaza al trabajador. Una dirección Bitcoin válida comienza con:
   - `bc1q...` — SegWit nativo (el más común hoy)
   - `bc1p...` — Taproot
   - `1...`    — P2PKH legacy
   - `3...`    — P2SH (multifirma / SegWit envuelto)

   Cualquier otra cosa **no** es una dirección BTC válida — verifique que copió la cadena completa.
3. **Verifique la URL del pool.** De fábrica, NMMiner está preconfigurado con `stratum+tcp://solobtc.nmminer.com:3333` y funciona sin ningún cambio. Si cambió de pool, la URL debe verse como `stratum+tcp://host:port` (o `stratum+ssl://host:port` para TLS). Consulte la [Lista de pools](./pool-list.md) para endpoints válidos conocidos.
4. **Dificultad del pool.** Los grandes pools comerciales que exigen una dificultad de share mínima alta rechazarán cada share de NMMiner. Quédese con los pools oficiales [SoloBTC](https://solobtc.nmminer.com) de NMMiner.
5. **Fuente de alimentación.** Un puerto USB inestable puede causar caídas de tensión que parecen un bloqueo. Pruebe con un cable diferente + fuente de alimentación de 5 V/1 A.

Si nada de lo anterior lo soluciona, el minero debería volver al modo AP después de ~15 s — vuelva a unirse a `nmap-2.4g` y verifique de nuevo los valores.

## ¿Hay una API pública?

Sí — cada dispositivo expone una API HTTP documentada en el puerto 80. Consulte [Referencia de API](../api/overview.md).

## ¿Está disponible el código fuente?

El firmware de NMMiner es de código cerrado. La API HTTP en cada dispositivo es la superficie de integración soportada. La herramienta CLI de flasheo complementaria y los frontends web del pool SoloBTC son públicos.

## ¿Qué hace la página Ladder?

Es una tabla de clasificación global top-10 **opt-in** ordenada por la mejor dificultad de share jamás producida por los mineros participantes. Las billeteras se muestran en formato `primeros4…últimos4` por privacidad. Desactivada por defecto — actívela desde la sección **Preferences** de NM Monitor. La vista web pública está en [ladder.nmminer.com](https://ladder.nmminer.com/) — consulte [Ladder](../user-guide/ladder.md) para la historia completa.