---
sidebar_position: 7
title: Configuración de preferencias
---

# Configuración de preferencias

Pantalla, LED, protector de pantalla y el Ladder global opcional.

---

## `GET /api/setting/preference`

### Respuesta

```json
{
  "Brightness":      80,
  "RotateScreen":    270,
  "LedEnable":       1,
  "ScreenSaver":     "5m",
  "ScreenSaverMode": "image",
  "LadderEnable":    false
}
```

| Campo             | Tipo    | Significado                                                           |
| ----------------- | ------- | ----------------------------------------------------------------- |
| `Brightness`      | integer | Brillo de pantalla, **1-100** (se limitará a ≥ 1).           |
| `RotateScreen`    | integer | Rotación de pantalla en grados. Típico: `0`, `90`, `180`, `270`.    |
| `LedEnable`       | integer | `1` para habilitar el LED de estado, `0` para deshabilitar.                     |
| `ScreenSaver`     | string  | Tiempo de inactividad antes de que se active el protector. P. ej. `"off"`, `"1m"`, `"5m"`, `"30m"`. |
| `ScreenSaverMode` | string  | `"image"` (diapositivas) o `"black"` (luz de fondo apagada).              |
| `LadderEnable`    | boolean | Opt-in a la escalera de clasificación global. Desactivado por defecto.                 |

---

## `POST /api/setting/preference`

Actualización parcial — aplicada **en vivo** sin reinicio.

### Solicitud

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### Respuesta

`200 OK` con cuerpo `OK`.

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` es la configuración recomendada para los usuarios que desean **máxima tasa de hash** — sin costo de refresco de pantalla.
:::
