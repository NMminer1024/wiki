---
sidebar_position: 5
title: 术语表
---

# 术语表

| 术语                    | 解释                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| **AP 模式**             | NMMiner 连不上 WiFi 时落回的开放热点 + captive portal。                          |
| **CYD**                 | "Cheap Yellow Display" — 廉价 ESP32 + TFT 板系列。                              |
| **DGB / DigiByte**      | 一种 SHA-256d 山寨币。NMMiner 开箱支持 — 同一份固件，换矿池即可。                |
| **Hashrate**            | 每秒 hash 数。NMMiner 上单位是 KH/s。                                            |
| **Job**                 | 矿池下发的一个工作单元（`mining.notify`）。                                       |
| **Ladder**              | **可选**的全球 top-10 难度排行榜，公开网页 [ladder.nmminer.com](https://ladder.nmminer.com/)，同时在设备屏幕上镜像显示。详见 [天梯榜](../user-guide/ladder.md)。 |
| **Licence**             | 把固件镜像锁到某块板子的激活字符串。                                              |
| **NM Monitor**          | 每台矿机 80 端口上自带的浏览器 UI。                                              |
| **Nonce**               | 矿工要遍历的 32 位字段，用来寻找有效 share。                                     |
| **Pool diff**           | 矿池接受的 share 最低难度。                                                       |
| **Probe**               | LAN 识别用的轻量端点 `/probe`。                                                  |
| **Share**               | 达到矿池难度但不一定达到网络难度的一次 hash 结果。                               |
| **SoloBTC**             | NMMiner 官方矿池：[solobtc.nmminer.com](https://solobtc.nmminer.com)。所有出厂设备的默认矿池。  |
| **Stratum**             | NMMiner 说的矿池协议。仅 v1。                                                     |
| **Swarm**               | NM Monitor 的 Swarm 菜单 — 局域网级零安装的矿机聚合视图。单 /24 子网最多 255 台。 |