---
sidebar_position: 3
title: FAQ
---

# FAQ

### NMMiner 真的有可能自己挖出一个区块吗？

数学上可能 — 概率约等于买彩票。实际上几乎不可能。意义在于 **玩**（顺便支持网络），不是收益。

### 耗多少电？

大多数支持的板子功耗不到 1 W。即便按 0.30 美元/kWh 算，一个月也远不到 30 美分。

### NMMiner 默认连哪个矿池？

NMMiner 出厂预配的是自家 SoloBTC：

- 主: `stratum+tcp://solobtc.nmminer.com:3333`
- 备用: `stratum+tcp://au.solobtc.nmminer.com:3333`

**只需要把钱包改成你自己的 BTC 地址**。矿池 URL 一般保持默认就行。

### 能不能用别的矿池？

可以 — 任何说 Stratum v1 的都行。已知好用的矿池见 [矿池列表](./pool-list.md)（含社区 SoloBTC 和 DGB 端点）。注意：要求高 share 难度的大型商业矿池会拒掉所有 share — 请坚持 public-pool / solo 风格端点。

### NMMiner 能挖 BTC 之外的币吗？

可以 — **DigiByte (DGB)** 也支持。DGB 同样用 SHA-256d，固件不用换。只需要换矿池 URL 和 DGB 钱包地址。

### 设备上需要装钱包吗？

不需要。你只需要一个 **收款地址**。矿池会直接把收益打到你配的 BTC / DGB 地址。

### 屏幕老是自己亮一下。

那是后台刷新触发了重绘 — 完全正常。想让屏幕彻底不动用 **Black** 屏保模式（顺便最大化 hashrate）。

### 同一个 WiFi 下能跑多台矿机吗？

可以。NM Monitor 的 **Swarm** 菜单自动发现所有同一局域网内的 NMMiner — 单 /24 子网最多 255 台。详见 [Swarm](../user-guide/swarm.md)。

### 矿机卡在 Loading 界面 / 一直连不上矿池

按这个顺序排查：

1. **WiFi 必须是 2.4 GHz。** 大多数 ESP32 不支持 5 GHz。如果你家 WiFi 把 2.4 / 5 GHz 用同一个 SSID，临时分开广播或显式连 2.4 GHz 的那个。
2. **核对钱包地址。** 钱包打错矿池会拒绝你的 worker。合法的比特币地址开头必须是：
   - `bc1q...` — Native SegWit（今天最常见）
   - `bc1p...` — Taproot
   - `1...`    — Legacy P2PKH
   - `3...`    — P2SH（多签 / 包装 SegWit）

   其他开头**都不是**合法 BTC 地址 — 仔细检查你是不是完整复制了。
3. **核对矿池 URL。** 出厂 NMMiner 预配的是 `stratum+tcp://solobtc.nmminer.com:3333`，不改就能用。如果你换了矿池，URL 必须长成 `stratum+tcp://host:port`（或 `stratum+ssl://host:port` 走 TLS）。好用的端点见 [矿池列表](./pool-list.md)。
4. **矿池难度。** 要求高 share 难度的大型商业矿池会拒掉每一个 share。请坚持 SoloBTC / public-pool 风格端点。
5. **电源。** USB 口供电不稳会让矿机看起来像卡住。换根线 + 5 V/1 A 电源试试。

以上都试过还不行 — 等 ~15 秒矿机会自动落回 AP 模式，重连 `nmap-2.4g` 重新核对配置。

### 有公开 API 吗？

有 — 每台设备的 80 端口都暴露完整 HTTP API。见 [API 参考](../api/overview.md)。

### 源码开源吗？

NMMiner 固件是闭源的。集成请通过设备的 HTTP API（这是稳定、长期支持的接口）。配套的烧录工具和 SoloBTC 矿池前端都是公开的。

### Ladder 页是什么？

**可选** 的全球 top-10 排行榜，按历史最佳 share 难度排序。钱包按 `first4…last4` 格式显示保护隐私。默认关闭 — 想加入可以在 NM Monitor 的 **Preferences** 板块启用。公开网页在 [ladder.nmminer.com](https://ladder.nmminer.com/)，详见 [天梯榜](../user-guide/ladder.md)。