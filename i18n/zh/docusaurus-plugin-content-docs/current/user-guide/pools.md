---
sidebar_position: 4
title: 矿池
---

# 矿池

ESP32 算力小（几百 KH/s 级别），NMMiner 连的是 **低难度** 矿池 — 接受远低于网络难度的 share。

NMMiner 出厂已经预配好了自家矿池 — **绝大多数情况下你不需要改任何东西**。

## 出厂默认

| 角色       | URL                                              | 区域       |
| ---------- | ------------------------------------------------ | ---------- |
| 主矿池     | `stratum+tcp://solobtc.nmminer.com:3333`         | 全球       |
| 备用矿池   | `stratum+tcp://au.solobtc.nmminer.com:3333`      | 亚太       |

两个都是 NMMiner 官方 [SoloBTC](https://solobtc.nmminer.com) 矿池，专为几百 KH/s 小矿工优化。控制台：[solobtc.nmminer.com](https://solobtc.nmminer.com)。

主矿池不可达时自动切到备用。主矿池恢复后约 10 秒内自动切回（v1.7.05 起）。

## 支持的 URL scheme

| Scheme               | 含义                                                        |
| -------------------- | ----------------------------------------------------------- |
| `stratum+tcp://`     | 明文 TCP 的 Stratum v1。                                    |
| `stratum+ssl://`     | TLS 包裹的 Stratum（矿池要求 SSL 时用）。                   |

## 支持的币种

NMMiner 目前支持 **Bitcoin (BTC)** 和 **DigiByte (DGB)**。两者都用 SHA-256d，所以同一份固件不用改动就能挖。已知可用端点见 [矿池列表](../reference/pool-list.md)。

## 为什么不用大型商业矿池

NMMiner 算力是几百 KH/s 级别。商业大池要求 share 最低难度很高 — 会拒掉你所有的提交。请坚持 NMMiner 官方 [SoloBTC](https://solobtc.nmminer.com) 矿池或社区 solo 类矿池 — 任何接受极小 share 难度的端点都行。