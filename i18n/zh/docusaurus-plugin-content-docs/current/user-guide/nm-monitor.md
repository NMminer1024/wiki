---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

**NM Monitor** 是一个 web 应用，它**内置在每一台 NMMiner 设备里**。手机和 PC 上都不用装任何东西 — 浏览器打开矿机 IP 就能用。所有监控和集群管理都通过 NM Monitor 和它的 [Swarm](./swarm.md) 菜单完成。

## 打开 NM Monitor

1. 手机或 PC 连上 **跟矿机相同的 WiFi**。
2. 查矿机 IP — 最简单的方式是看设备 **Miner 页** 上的状态栏，或在路由器 DHCP 表里找。
3. 浏览器打开 `http://<miner-ip>/`，**Chrome / Edge / Safari / Firefox 都行**。无需记端口（80）。
4. 主页自动加载。

:::tip
推荐书签存 `http://<miner-hostname>/`（例如 `http://nm-cyd-c5-ab12cd/`）— 大多数家用路由器支持按 hostname 访问。
:::

## NM Monitor 里可以做什么

| 板块                 | 用途                                                                |
| -------------------- | ------------------------------------------------------------------- |
| **Dashboard**        | 实时 hashrate、accepted / rejected share、矿池 diff、运行时长、RSSI、剩余堆、温度（支持的板）。 |
| **Swarm**            | 局域网聚合视图：看到所有 NMMiner、总算力、定位指定机器。详见 [Swarm](./swarm.md)。 |
| **Network**          | 修改 hostname、WiFi SSID、WiFi 密码。                              |
| **Mining**           | 主 / 备用矿池 URL、钱包地址、矿池密码。                            |
| **Time**             | 时区、时间格式（12 / 24 小时）、日期格式。                          |
| **Preferences**      | 屏幕亮度、旋转、LED 开关、屏保超时、屏保模式（image / black）、[天梯榜](./ladder.md) 启用。 |
| **Market**           | 选 Price 页要显示的主币和 watch list。                              |
| **Weather**          | Weather 页用的城市 / 经纬度 / 单位。                                |
| **Screensaver**      | 上传自定义 PNG，浏览器端转换后推送给矿机。                          |
| **System**           | 固件版本、板型、剩余堆、**重启** 按钮。                            |
| **API Doc**          | 实时 HTTP API 参考（同步发布在 `/api-doc`）。                       |

## 从局域网任何位置读

NM Monitor 在每个 API 端点都设置了 `Access-Control-Allow-Origin: *`，所以任何来源的浏览器页面都能读到矿机状态 — 方便你做自己的 dashboard。完整端点见 [API 参考](../api/overview.md)。