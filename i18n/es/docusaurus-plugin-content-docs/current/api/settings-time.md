---
sidebar_position: 6
title: Configuración de hora
---

# Configuración de hora

Zona horaria, formato de hora y formato de fecha.

---

## `GET /api/setting/time`

### Respuesta

```json
{
  "Timezone":   "8",
  "TimeFormat": 24,
  "DateFormat": "DD-MM-YYYY"
}
```

| Campo        | Tipo             | Significado                                                 |
| ------------ | ---------------- | ------------------------------------------------------- |
| `Timezone`   | string (float OK)| Desplazamiento desde UTC en horas. Admite decimales (p. ej. `5.5`, `-3.5`). |
| `TimeFormat` | integer          | `12` o `24`.                                           |
| `DateFormat` | string           | Uno de `"DD-MM-YYYY"`, `"MM-DD-YYYY"`, `"YYYY-MM-DD"`.  |

---

## `POST /api/setting/time`

Actualización parcial.

### Solicitud

```json
{
  "Timezone":   "5.5",
  "TimeFormat": 12,
  "DateFormat": "YYYY-MM-DD"
}
```

### Respuesta

`200 OK` con cuerpo `OK`. Los cambios de hora surten efecto **inmediatamente** (el reloj del dispositivo vuelve a aplicar la nueva cadena TZ POSIX sin volver a sincronizar NTP).

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/setting/time \
  -H "Content-Type: application/json" \
  -d '{"Timezone":"-3.5","TimeFormat":24}'
```
