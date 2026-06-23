---
sidebar_position: 4
title: 初次配置
---

# 初次配置

刚烧好固件的板子会进入 **AP / 配置模式**，提供一个网页让你设置 WiFi、矿池、钱包和屏幕参数。

## 配置项

| 字段                | 默认值                                                | 作用                                                                |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| **WiFi SSID**       | `NMTech-2.4G`                                        | 你的 2.4 GHz 网络名。                                              |
| **WiFi Password**   | `NMMiner2048`                                        | WPA / WPA2 密码。                                                   |
| **Pool URL (primary)** | `stratum+tcp://solobtc.nmminer.com:3333`           | NMMiner 自家 SoloBTC 矿池。除非有明确理由，否则不需要改。           |
| **Pool URL (fallback)** | `stratum+tcp://au.solobtc.nmminer.com:3333`        | NMMiner 亚太备用矿池。主矿池不可达时使用。                          |
| **Wallet / Worker name** | 预填演示钱包                                     | 你的 BTC 收款地址，可加 `.workerName`。**请改成你自己的！**          |
| **UI refresh**      | 跟板子相关                                            | 值小 → 屏幕刷新更快、hashrate 略低；值大 → 最大 hashrate、屏幕更新慢。 |
| **Screen brightness** | 100 %                                              | 0–100 %。                                                            |
| **Time zone**       | `+8`                                                  | 支持小数（如 `8`、`5.5`、`-3.5`）。范围：-13.5 ~ +13.5。            |
| **Time format**     | 24 小时制                                             | 12 / 24 小时制。                                                    |
| **LED**             | 跟板子相关                                            | 启用 / 禁用板载状态 LED。                                           |

点 **Save** 后矿机需要 10–15 秒把配置写入存储。**不要手动重置。** 它会自己重启。

:::tip 改成自己的钱包
NMMiner 出厂预配了一个演示钱包，方便你"开箱即挖"。**认真挖之前请改成你自己的 BTC 地址** — 那个演示地址被所有新机器共用。
:::

## 强制重新配置

矿机已经联网后想改设置：

- **单按键板** → 长按 `BOOT`。
- **双按键板** → 长按 `USER`。
- **触摸屏板** → 长按屏幕 10 秒。

矿机会重启进入 AP 模式重新提供 captive portal。详细行为：[按键操作](../user-guide/buttons.md)。

## 即改即生效（不需要重启）

部分设置 **立即生效**，不需要 Save + 重启：

- 屏幕亮度
- 屏幕旋转
- LED 开关
- 时区
- 屏保模式（image / black）

可以在 [NM Monitor](../user-guide/nm-monitor.md) 里改，效果即时可见。