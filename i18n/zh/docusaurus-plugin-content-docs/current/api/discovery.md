---
sidebar_position: 2
title: 发现接口
---

# 发现接口

这两个端点的目的是让**任意客户端** — NM Monitor、自定义 dashboard、其他矿机 — 都能在局域网内发现 NMMiner 设备。

---

## `GET /probe`

轻量身份探测。用于确认某台主机确实是 NMMiner。

### 响应

```json
{
  "model":    "NMMiner",
  "hostname": "nm-cyd-c5-ab12cd",
  "ver":      "v2.0.04",
  "sw":       320,
  "sh":       240,
  "hr":       956432,
  "sbd":      0.0421,
  "ebd":      1.7833,
  "ut":       4321
}
```

| 字段       | 类型     | 含义                                                            |
| ---------- | -------- | --------------------------------------------------------------- |
| `model`    | string   | 恒为 `"NMMiner"`。用作路由识别。                                |
| `hostname` | string   | 可配置 hostname。                                              |
| `ver`      | string   | 固件版本。                                                      |
| `sw`       | integer  | 屏幕宽（像素）。                                               |
| `sh`       | integer  | 屏幕高（像素）。                                               |
| `hr`       | number   | 当前 hashrate (H/s)。                                          |
| `sbd`      | number   | 本次开机最佳 share 难度。                                      |
| `ebd`      | number   | 历史最佳 share 难度。                                          |
| `ut`       | integer  | 自开机以来的秒数。                                             |

### 示例

```bash
curl http://192.168.1.42/probe
```

---

## `GET /alive`

局域网发现列表。返回设备自身 IP + 已发现的其他 NMMiner IP。

### 查询参数

| 名称      | 可选 | 作用                                                              |
| --------- | ---- | ----------------------------------------------------------------- |
| `rescan`  | 是   | 带上则请求立即重扫（去抖 10 秒）。                                |
| `src`     | 是   | 调用方是另一台矿机时填 `src=swarm`，避免唤醒本机发现线程。        |

### 响应

```json
{
  "self":         "192.168.1.42",
  "ips":          ["192.168.1.42", "192.168.1.43", "192.168.1.44"],
  "scanning":     true,
  "progress":     128,
  "total":        254,
  "next_scan_in": 0
}
```

| 字段           | 类型             | 含义                                                       |
| -------------- | ---------------- | ---------------------------------------------------------- |
| `self`         | string           | 设备自身 IP（也是 `ips` 数组的第一个元素）。               |
| `ips`          | string[]         | 当前 LAN 中已知的全部 NMMiner IP（含自身）。               |
| `scanning`     | boolean          | 正在扫描时为 `true`。                                      |
| `progress`     | integer (0-254)  | 正在探测的最后一个 IP 八位组（idle 时为 0）。              |
| `total`        | integer          | 恒为 `254` — 一个 /24 子网的大小。                         |
| `next_scan_in` | integer          | 下一次扫描开始还剩多少秒（扫描进行中时为 `0`）。           |

### 示例 — 列出全部局域网内矿机

```bash
curl http://192.168.1.42/alive | jq '.ips'
```

### 注意事项

- 发现线程仅在设备处于 Miner 页或 NM Monitor 的 Swarm 菜单打开时运行。调用 `/alive` 会主动唤醒它。
- 响应是逐步构建的 — 反复调用可以观察 `scanning` 从 `true` → `false`。