---
sidebar_position: 2
title: 烧录固件
---

# 烧录固件

NMMiner 用浏览器一键烧录，**不需要** `esptool` 或 `idf.py`。

## 浏览器烧录（推荐）

1. 在 **Chrome 或 Edge** 中打开 [flash.nmminer.com](https://flash.nmminer.com)。Firefox / Safari 不支持 WebSerial。
2. USB 连接板子。
3. 从列表中选择你的板子，工具会自动从官方 GitHub Release 拉取对应固件。
4. 点 **Install** → 选串口 → 等待 "Flash complete"。
5. 烧录完成时会给一串 **授权字符串**，复制下来 — 激活页需要它。

:::warning
如果板子没自动进入下载模式，按住 `BOOT` 再按一下 `RESET`，然后松开。
:::

## 什么时候需要重新烧录

| 场景                       | 操作                                                            |
| -------------------------- | --------------------------------------------------------------- |
| 普通版本升级               | 重新跑一遍烧录工具，选最新版本。**不需要重新激活。**            |
| 授权丢了                   | 重新跑烧录工具 — 会给你发新的授权。                             |
| 换板型                     | 用新板型 profile 烧录，重新激活。                               |

详见：[激活授权](./activate-licence.md)。