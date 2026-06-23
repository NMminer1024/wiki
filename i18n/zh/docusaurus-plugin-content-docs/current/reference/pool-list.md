---
sidebar_position: 2
title: 矿池列表
---

# 矿池列表

适合 NMMiner ~150–1000 KH/s 算力档位的矿池。这些矿池会按小矿工的算力动态调整 share 难度。

## Bitcoin (BTC) — **默认**

| 矿池                                | Stratum URL                                       | 控制台                                                  |
| ----------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| **NMMiner SoloBTC**（默认）         | `stratum+tcp://solobtc.nmminer.com:3333`          | [solobtc.nmminer.com](https://solobtc.nmminer.com)      |
| **NMMiner SoloBTC AU**（备用）      | `stratum+tcp://au.solobtc.nmminer.com:3333`       | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

SoloBTC 是 NMMiner 官方运营的矿池。每台设备出厂都已预配 — 只需要把钱包地址换成你自己的。

## DigiByte (DGB)

| 矿池                | Stratum URL                                       | 控制台                                                |
| ------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`    | [digibyte.solominer.net](https://digibyte.solominer.net) |

DGB 和 BTC 同样使用 SHA-256d 算法，同一份 NMMiner 固件不用换 build 就能挖 — 只需要改矿池 URL 和 DGB 钱包地址。

## 说明

:::tip
如果矿池支持 TLS，把 scheme 换成 `stratum+ssl://` 即可，host 和端口一致。
:::

:::warning
要求高 share 难度的大型商业矿池（比如最低难度 `0x100000000`）会拒掉 NMMiner 的每一个 share。请用 SoloBTC 风格的端点 — 把 share 难度动态压到很小的那种。
:::