---
sidebar_position: 3
title: 配网门户
---

# 配网门户

矿机在 AP 模式下，会在内部启一个 captive portal（开放配网网页）。

## 什么时候会出现

- **首次烧录后** 开机。
- **WiFi 连不上** — 矿机 15 秒内连不上保存的 WiFi 就会自动落回 AP 模式。
- **手动强制** — 长按配置键（见 [按键操作](./buttons.md)）。

## 如何打开

1. 手机或电脑打开 WiFi 设置。
2. 连上开放热点 **`nmap-2.4g`**。
3. 手机上 captive portal 会自动弹出；PC 上手动访问 `http://192.168.4.1`。

会看到 [初次配置](../getting-started/first-configuration.md) 里描述的配置表单。

## Save 行为

点 **Save** 写入新设置，等存储 flush（10–15 秒）后自动重启。**这段时间不要拔电** — 让它自己重启。