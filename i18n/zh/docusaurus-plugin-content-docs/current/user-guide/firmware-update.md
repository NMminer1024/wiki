---
sidebar_position: 5
title: 固件升级
---

# 固件升级

升级和首次烧录一样：重新打开浏览器烧录工具，选板子，安装。

## 步骤

1. 在 Chrome 或 Edge 打开 [flash.nmminer.com](https://flash.nmminer.com)。
2. 选板型 profile。
3. 点 **Install**，选串口，等待完成。

升级后 **不需要重新激活授权**。设置（SSID / 矿池 / 钱包）也会保留。

## 远程跟踪固件版本

每台矿机都通过 [`GET /api/system/info`](../api/system.md) 上报当前固件版本。结合 [Swarm](./swarm.md) 发现机制，可以一眼看出局域网里哪些机器还需要升级。

## 版本之间有什么变化

完整变更见 [GitHub release log](https://github.com/NMminer1024/NMMiner#release-log)。主版本号跨越（如 **v1.x → v2.0**）会引入 NM Monitor 和 Swarm 的不兼容改进 — 老版本和新版本之间的 Swarm 协议不互通，所以建议把全网矿机都升到同一个 minor 系列。