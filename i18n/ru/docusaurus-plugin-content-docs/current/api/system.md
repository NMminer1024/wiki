---
sidebar_position: 3
title: Система
---

# Системные конечные точки (System)

---

## `GET /api/system/info`

Полный системный снимок. Это то, что читает панель мониторинга NM Monitor при каждом обновлении.

### Ответ

```json
{
  "identity": {
    "hwModel":   "NMMiner",
    "hostName":  "nm-cyd-c5-ab12cd",
    "fwVersion": "v2.0.04",
    "rssi":      -52
  },
  "miner": {
    "hashRate":         0.000956432,
    "sAccepted":        128,
    "sRejected":        2,
    "uptimeSeconds":    4321,
    "uptimeEver":       58732,
    "networkDiff":      "112392546849.9999",
    "poolDiff":         "0.00050",
    "lastDiff":         "0.00073",
    "bestDiffSession":  "0.04215",
    "bestDiffEver":     "1.78330",
    "blkhits":          0,
    "freeHeap":         118432,
    "minFreeHeap":      94312
  },
  "stratum": {
    "url":  "solobtc.nmminer.com:3333",
    "user": "bc1q....worker1"
  },
  "temps": {
    "vcore": 51.3,
    "asic":  null
  },
  "storage": {
    "fsTotal": 1048576,
    "fsUsed":  262144
  }
}
```

### Справочник полей

| Путь                        | Тип      | Значение                                                  |
| --------------------------- | -------- | -------------------------------------------------------- |
| `identity.hwModel`          | string   | Всегда `"NMMiner"`.                                      |
| `identity.hostName`         | string   | Имя хоста устройства.                                    |
| `identity.fwVersion`        | string   | Версия прошивки.                                         |
| `identity.rssi`             | integer  | Уровень сигнала WiFi (dBm).                              |
| `miner.hashRate`            | number   | Текущий хэшрейт, в **гигахешах в секунду** (умножьте на 1e9 для получения H/s). |
| `miner.sAccepted`           | integer  | Шары, принятые пулом.                                    |
| `miner.sRejected`           | integer  | Шары, отклонённые пулом.                                 |
| `miner.uptimeSeconds`       | integer  | Секунд с текущей загрузки.                               |
| `miner.uptimeEver`          | integer  | Совокупное время работы по всем загрузкам, в секундах.   |
| `miner.networkDiff`         | string   | Текущая сложность сети Bitcoin (десятичная).             |
| `miner.poolDiff`            | string   | Текущая сложность шары, установленная пулом.             |
| `miner.lastDiff`            | string   | Сложность последней отправленной шары.                   |
| `miner.bestDiffSession`     | string   | Лучшая сложность шары за эту загрузку.                   |
| `miner.bestDiffEver`        | string   | Лучшая сложность шары за всё время.                      |
| `miner.blkhits`             | integer  | Пожизненный счётчик попаданий сложности сети (блок-удача). |
| `miner.freeHeap`            | integer  | Текущий объём свободной кучи в байтах.                   |
| `miner.minFreeHeap`         | integer  | Минимальный объём свободной кучи, наблюдавшийся за эту загрузку. |
| `stratum.url`               | string   | Активный пул `host:port`.                                |
| `stratum.user`              | string   | Имя аутентифицированного воркера (кошелёк.воркер).       |
| `temps.vcore`               | number / null | Температура ядра в °C, или `null` на платах без встроенного датчика. |
| `temps.asic`                | null     | Зарезервировано для будущего оборудования. Всегда `null` на ESP32. |
| `storage.fsTotal`           | integer  | Размер файловой системы устройства в байтах.             |
| `storage.fsUsed`            | integer  | Использование файловой системы устройства в байтах.      |

### Пример

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (т.е. 956.4 KH/s)
```

---

## `POST /api/system/restart`

Немедленно перезагружает майнер.

### Запрос

Без тела.

### Ответ

```json
{ "status": "ok" }
```

Перезагрузка происходит **~600 мс после отправки ответа**, чтобы соединение закрылось корректно.

### Пример

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
Перезапуск обрывает Stratum-сессию и все неотправленные шары. Избегайте скриптовой периодической перезагрузки без реальной необходимости.
:::
