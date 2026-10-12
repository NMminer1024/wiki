---
sidebar_position: 5
title: Configuración de minería
---

# Configuración de minería

URLs de pool principal y de respaldo, billeteras y contraseñas de trabajador.

---

## `GET /api/setting/mining`

### Respuesta

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| Campo               | Tipo   | Significado                                                           |
| ------------------- | ------ | ----------------------------------------------------------------- |
| `PrimaryPool`       | string | URL Stratum principal (`stratum+tcp://...` o `stratum+ssl://...`). |
| `PrimaryAddress`    | string | Nombre de trabajador — típicamente `<billetera>.<trabajador>`.                      |
| `PrimaryPassword`   | string | Contraseña de trabajador. La mayoría de los pools aceptan `x`.                           |
| `SecondaryPool`     | string | URL del pool de respaldo. Usada cuando el principal es inaccesible.          |
| `SecondaryAddress`  | string | Nombre de trabajador de respaldo.                                             |
| `SecondaryPassword` | string | Contraseña de trabajador de respaldo.                                         |

---

## `POST /api/setting/mining`

Actualización parcial.

### Solicitud

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### Respuesta

`200 OK` con cuerpo `OK`. `400` en JSON inválido.

### Ejemplo

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
Los cambios surten efecto la próxima vez que el minero se reconecte a un pool — normalmente en unos segundos.
:::
