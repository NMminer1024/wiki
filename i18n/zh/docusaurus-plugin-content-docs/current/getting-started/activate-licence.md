---
sidebar_position: 3
title: 激活授权
---

# 激活授权

NMMiner 需要 **付费购买 License**，每台设备一个。License 把你的板子和固件绑定，解锁完整的挖矿功能。

## 如何获取 License

1. 烧录完成后，按 [烧录工具](https://flash.nmminer.com) 页面上的提示 **购买 License** — 工具会引导你完成购买流程。
2. 购买成功后，工具会显示你的 License 字符串。你可以直接在烧录工具中激活，也可以到设备后台激活。

## 激活方式

有两种方式激活 License：

### 方式一 — 在烧录工具中激活（推荐）

1. 在 [烧录工具](https://flash.nmminer.com) 中，把 License 字符串粘贴到 **Licence** 输入框。
2. 点击 **Activate** 按钮，工具直接写入 License 到你的设备。
3. 成功后显示确认信息 — 无需其他操作。

### 方式二 — 通过设备配置页激活

1. 如果板子没自动重启，手动重新上电。
2. 连上开放热点 `nmap-2.4g`，等 captive portal 弹出（或访问 `http://192.168.4.1`）。
3. 把 License 字符串粘贴到 **Licence** 框，点按钮。
4. 成功后页面显示确认信息，矿机重启进入正常模式。

:::tip License 与板子绑定
License 跟你这块板子绑定。固件升级保留 License — 每台设备只需激活一次。
:::