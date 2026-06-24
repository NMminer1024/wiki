---
sidebar_position: 4
title: Настройки сети
---

# Настройки сети (Network)

Имя хоста и учётные данные WiFi.

---

## `GET /api/setting/network`

### Ответ

```json
{
  "Hostname": "nm-cyd-c5-ab12cd",
  "WiFiSSID": "MyHomeAP"
}
```

| Поле       | Тип    | Значение                                          |
| ---------- | ------ | ------------------------------------------------- |
| `Hostname` | string | Имя хоста mDNS / NetBIOS, которое анонсирует майнер. |
| `WiFiSSID` | string | Настроенный SSID WiFi.                            |

Текущий пароль WiFi **никогда** не возвращается.

---

## `POST /api/setting/network`

Частичное обновление — укажите только те ключи, которые хотите изменить.

### Запрос

```json
{
  "Hostname": "garage-miner-01",
  "WiFiSSID": "MyHomeAP",
  "WiFiPWD":  "supersecret"
}
```

| Поле       | Тип    | Обязательный | Значение                                                    |
| ---------- | ------ | ------------ | ----------------------------------------------------------- |
| `Hostname` | string | нет          | Новое имя хоста (рекомендуются буквенно-цифровые символы и `-`). |
| `WiFiSSID` | string | нет          | Новый SSID WiFi.                                            |
| `WiFiPWD`  | string | нет          | Новый пароль WiFi. Только запись.                           |

### Ответ

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

400, если тело не является корректным JSON.

### Пример

```bash
curl -X POST http://192.168.1.42/api/setting/network \
  -H "Content-Type: application/json" \
  -d '{"Hostname":"garage-miner-01"}'
```

:::warning
Изменение учётных данных WiFi **не** перезапускает сеть немедленно. Новые настройки применяются при следующей загрузке.
:::
