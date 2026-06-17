---
sidebar_position: 3
title: 系统接口
---

# 系统接口

---

## `GET /api/system/info`

完整系统快照。NM Monitor 的 Dashboard 就是循环读这个。

### 响应

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

### 字段说明

| 路径                       | 类型     | 含义                                                       |
| -------------------------- | -------- | ---------------------------------------------------------- |
| `identity.hwModel`         | string   | 恒为 `"NMMiner"`。                                         |
| `identity.hostName`        | string   | 设备 hostname。                                            |
| `identity.fwVersion`       | string   | 固件版本。                                                 |
| `identity.rssi`            | integer  | WiFi 信号强度 (dBm)。                                      |
| `miner.hashRate`           | number   | 当前 hashrate，单位是 **GH/s**（乘 1e9 得 H/s）。           |
| `miner.sAccepted`          | integer  | 矿池接受的 share 数。                                      |
| `miner.sRejected`          | integer  | 矿池拒绝的 share 数。                                      |
| `miner.uptimeSeconds`      | integer  | 本次开机的秒数。                                           |
| `miner.uptimeEver`         | integer  | 累计开机秒数。                                             |
| `miner.networkDiff`        | string   | 当前比特币网络难度（十进制）。                             |
| `miner.poolDiff`           | string   | 矿池设定的 share 难度。                                    |
| `miner.lastDiff`           | string   | 最近一次提交 share 的难度。                                |
| `miner.bestDiffSession`    | string   | 本次开机最佳 share 难度。                                  |
| `miner.bestDiffEver`       | string   | 历史最佳 share 难度。                                      |
| `miner.blkhits`            | integer  | 累计达到网络难度的次数（运气计数）。                       |
| `miner.freeHeap`           | integer  | 当前剩余堆 (bytes)。                                       |
| `miner.minFreeHeap`        | integer  | 本次开机最低剩余堆。                                       |
| `stratum.url`              | string   | 活跃矿池 `host:port`。                                    |
| `stratum.user`             | string   | 已认证的 worker 名（wallet.worker）。                     |
| `temps.vcore`              | number / null | 核心温度 °C，无温度传感器的板返回 `null`。            |
| `temps.asic`               | null     | 预留字段，ESP32 上恒为 `null`。                            |
| `storage.fsTotal`          | integer  | 板载文件系统总容量 (bytes)。                              |
| `storage.fsUsed`           | integer  | 板载文件系统已用 (bytes)。                                |

### 示例

```bash
curl http://192.168.1.42/api/system/info | jq '.miner.hashRate * 1e9'
# → 956432  (≈ 956.4 KH/s)
```

---

## `POST /api/system/restart`

立即重启设备。

### 请求

无请求体。

### 响应

```json
{ "status": "ok" }
```

实际重启在响应发出后约 **600 ms** 触发，保证连接干净关闭。

### 示例

```bash
curl -X POST http://192.168.1.42/api/system/restart
```

:::warning
重启会切断 Stratum 会话、丢掉未提交的 share。除非确有必要，不要把定时重启写进 cron。
:::