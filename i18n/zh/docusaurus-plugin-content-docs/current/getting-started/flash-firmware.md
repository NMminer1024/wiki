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
5. 工具会提示你 **购买 License**。购买完成后显示 License 字符串，复制下来 — 激活页需要它。

:::warning
如果板子没自动进入下载模式，按住 `BOOT` 再按一下 `RESET`，然后松开。
:::