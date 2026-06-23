---
sidebar_position: 4
title: 故障排查
---

# 故障排查

## 烧录工具里看不到板子

- **先反复插拔几次 USB 线** — WebSerial 设备选择框在首次热插拔（尤其装完驱动那次）经常漏掉设备。
- 用 **数据线**（不要电源线）。
- 换 USB 口；某些 hub 不透传 CDC。
- Windows 上根据板载桥接芯片装 **CP210x** 或 **CH340** 驱动。
- 按住 `BOOT` 再按 `RESET` 强制进入下载模式。

## 卡在 Loading

- 确认 WiFi 是 **2.4 GHz**（大多数 ESP32 不支持 5 GHz）。
- 等 15 秒，应该会自动落回 AP 模式。

## 看不到 `nmap-2.4g` 热点

- 重新上电。
- 长按配置键 5 秒（见 [按键操作](../user-guide/buttons.md)）。

## Captive portal 出来了但点 Save 没反应

- 完整等够 15 秒 — 存储 flush 故意慢。
- 一直没返回？重新上电再试。

## 矿池一直显示 Connecting

- 检查矿池 URL 和端口。
- 试一下 `stratum+tcp://` 与 `stratum+ssl://` 互换。
- 试一下 [备用矿池](../user-guide/pools.md)。

## Hashrate 比标称值低很多

- **UI refresh** 设置对小 CPU 很吃力。把值调大一点（数值越大刷新越慢）。
- 用 **Black** 屏保模式完全去掉屏幕刷新开销。
- 确认供电稳定 500 mA — 不稳的 USB 口会触发欠压。

## Share 全被拒绝

- 矿池 diff 太高。换成 NMMiner 官方 [SoloBTC](https://solobtc.nmminer.com) 矿池（或官方备用矿池）。
- 检查 wallet 字段 — 很多矿池拒绝格式不正确的钱包地址，合法格式参考 [FAQ](./faq)。

## 打不开 NM Monitor

- 确认你和矿机在 **同一个 WiFi**。
- 看矿机 Miner 页上显示的 IP，直接访问。
- 关掉手机 / PC 上的 **VPN**；有些 VPN 会阻塞局域网。
- 路由器开了 **AP isolation**？关掉。

## Swarm 菜单显示的矿机数比实际少

- 点 **重新扫描**（或刷新页面）。
- 局域网扫描只覆盖一个 /24 子网，跨子网的看不见。
- 确认缺失的那台在 **Miner 页** — 发现线程只在该页运行。
