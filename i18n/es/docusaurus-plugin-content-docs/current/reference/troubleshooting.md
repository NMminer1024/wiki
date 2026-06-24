---
sidebar_position: 4
title: Solución de problemas
---

# Solución de problemas

## La placa no aparece en la herramienta de flasheo

- **Vuelva a enchufar el cable USB un par de veces** — el selector WebSerial puede no detectar dispositivos en la primera conexión en caliente, especialmente justo después de instalar el controlador.
- Use un cable USB de **datos** (no solo de alimentación).
- Pruebe un puerto USB diferente; algunos hubs no transmiten CDC.
- En Windows, instale el controlador **CP210x** o **CH340** según el chip puente de su placa.
- Mantenga presionado `BOOT` mientras presiona `RESET` para forzar el modo descarga.

## Atascado en Loading

- Confirme que el WiFi es de **2.4 GHz** (la mayoría de chips ESP32 no soportan 5 GHz).
- Espere 15 s. Si no puede conectarse, debería volver al modo AP automáticamente.

## El AP `nmap-2.4g` no es visible

- Apague y encienda la placa.
- Mantenga presionado el botón de configuración durante 5 s (consulte [Botones](../user-guide/buttons.md)).

## El portal cautivo se muestra pero Save no funciona

- Espere la ventana completa de 15 s — el vaciado de almacenamiento es intencionadamente lento.
- Si la página nunca responde, apague y encienda y vuelva a intentar.

## Pool atascado en "Connecting"

- Verifique la URL y el puerto del pool.
- Pruebe `stratum+tcp://` en lugar de `stratum+ssl://` (o viceversa).
- Pruebe el [pool de respaldo](../user-guide/pools.md).

## La tasa de hash es mucho más baja que la ficha técnica

- La configuración de **refresco de interfaz** es pesada en CPUs pequeñas. Intente bajarla (valor más alto en el formulario).
- Use el protector de pantalla **Black** para eliminar completamente el coste de redibujado de pantalla.
- Asegúrese de que su fuente de alimentación pueda sostener 500 mA — un puerto USB inestable causará caídas de tensión.

## Todas las shares son rechazadas

- La diff del pool está demasiado alta. Cambie al pool oficial [SoloBTC](https://solobtc.nmminer.com) de NMMiner (o al pool de respaldo oficial).
- Verifique el campo de billetera — muchos pools rechazan direcciones de billetera con formato incorrecto. Consulte [FAQ](./faq) para formatos válidos de dirección Bitcoin.

## No puedo acceder a NM Monitor

- Asegúrese de que usted y el minero están en el **mismo WiFi**.
- Compruebe la página Miner del minero para ver su IP — pruebe esa directamente.
- Desactive cualquier **VPN** en su teléfono/PC; algunas VPN bloquean el tráfico LAN.
- Si su enrutador usa **aislamiento AP**, los dispositivos no pueden comunicarse entre sí — desactive ese modo.

## El menú Swarm muestra menos mineros de los que tengo

- Haga clic en **Re-scan** (o recargue la página).
- Los escaneos LAN solo abarcan una subred /24. Los mineros en una subred diferente no aparecerán.
- Asegúrese de que el minero faltante está en la **página Miner** de su pantalla — el hilo de descubrimiento solo se ejecuta en esa página.