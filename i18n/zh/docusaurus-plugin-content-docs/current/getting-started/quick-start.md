---
sidebar_position: 1
title: 快速上手
---

# 快速上手

把一块全新的 ESP32 板子跑起来开始挖矿，**约 10 分钟**。

## 你需要准备

- 一块 [官方支持的开发板](../hardware/overview.md)（ESP32-D0 / S3 / C3 / C5）。
- 一根 USB 数据线 + 装有 **Chrome 或 Edge** 的电脑（浏览器烧录工具用）。
- 一个 2.4 GHz 的 WiFi 网络。

**不需要提前准备钱包** — NMMiner 出厂已配好我们自家的 SoloBTC 矿池（[solobtc.nmminer.com](https://solobtc.nmminer.com)）和一个临时演示钱包。等想认真挖时再把钱包改成你自己的 BTC 地址即可。

## 五步搞定

1. **烧录固件** — 打开 [flash.nmminer.com](https://flash.nmminer.com)，选板型，点 *Install*。详见 [烧录固件](./flash-firmware.md)。
2. **购买并激活 License** — 烧录工具会引导你购买 License，然后把 License 字符串粘贴到激活框。详见 [激活授权](./activate-licence.md)。
3. 用手机连上 **`nmap-2.4g`** 开放热点，配网页会自动弹出。电脑请手动访问 `http://192.168.4.1`。
4. **配置**：在网页上填 WiFi（必填）和钱包（推荐改），按 **Save**。矿机会在 ~15 秒内重启。详见 [初次配置](./first-configuration.md)。
5. **看它开始挖矿** — 屏幕上的 Miner 页显示实时 hashrate、已接受的 share、矿池 diff。访问 [solobtc.nmminer.com](https://solobtc.nmminer.com) 可以看到你的 worker 出现在矿池 dashboard 上。

:::tip
首次上电时矿机会尝试连接最后一次用过的 WiFi（最长 15 秒）。如果连不上就会自动切到 AP / 配网模式。
:::