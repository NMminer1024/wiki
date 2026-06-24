---
sidebar_position: 5
title: Настройки майнинга
---

# Настройки майнинга (Mining)

URL основного и резервного пулов, кошельки и пароли воркеров.

---

## `GET /api/setting/mining`

### Ответ

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

| Поле                 | Тип    | Значение                                                           |
| -------------------- | ------ | ------------------------------------------------------------------ |
| `PrimaryPool`        | string | Основной Stratum URL (`stratum+tcp://...` или `stratum+ssl://...`). |
| `PrimaryAddress`     | string | Имя воркера — обычно `<кошелёк>.<воркер>`.                         |
| `PrimaryPassword`    | string | Пароль воркера. Большинство пулов принимают `x`.                   |
| `SecondaryPool`      | string | URL резервного пула. Используется, когда основной недоступен.      |
| `SecondaryAddress`   | string | Имя резервного воркера.                                            |
| `SecondaryPassword`  | string | Пароль резервного воркера.                                         |

---

## `POST /api/setting/mining`

Частичное обновление.

### Запрос

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### Ответ

`200 OK` с телом `OK`. `400` при некорректном JSON.

### Пример

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
Изменения вступают в силу при следующем переподключении майнера к пулу — обычно в течение нескольких секунд.
:::
