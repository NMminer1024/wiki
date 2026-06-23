---
sidebar_position: 1
title: API 总览
---

# API 总览

每台 NMMiner 设备在 **80 端口** 提供一套完整的 REST 风格 HTTP API。使用方包括：

- 内置的 [NM Monitor](../user-guide/nm-monitor.md) 浏览器 UI。
- [Swarm](../user-guide/swarm.md) 聚合器。
- 任何想读状态或推送设置的人 — 你自己、你的 dashboard、Grafana 插件、Python 脚本都行。

> ✅ 本页文档化的是**公开契约**：路径、方法、请求体、响应体、状态码。
> ❌ **不**文档化实现细节。请把设备当成一个 HTTP 可达的黑盒。

## Base URL

```
http://<miner-ip>/
```

或用 hostname（大多数家用路由器支持）：

```
http://<miner-hostname>/
```

IP / hostname 可以在设备屏幕的 **Miner 页**，或 NM Monitor 的 **System** 板块查到。

## CORS

每个端点都返回：

```
Access-Control-Allow-Origin: *
```

任意来源的浏览器页面都能直接调用，不需要代理。

## 鉴权

目前**没有鉴权**。API 设计为在你信任的局域网内使用。**不要直接暴露到公网，除非你自己加了网关。**

## Content type

- 请求体使用 `application/json`。
- 响应体是 `application/json` 或 `text/plain`。
- 所有端点都支持 CORS 预检 `OPTIONS` 请求。

## 分类

| 分类                          | 端点                                                                |
| ----------------------------- | ------------------------------------------------------------------- |
| [发现](./discovery.md)         | `GET /probe`、`GET /alive`                                          |
| [系统](./system.md)            | `GET /api/system/info`、`POST /api/system/restart`                  |
| [网络设置](./settings-network.md) | `GET/POST /api/setting/network`                                  |
| [挖矿设置](./settings-mining.md)  | `GET/POST /api/setting/mining`                                   |
| [时间设置](./settings-time.md)    | `GET/POST /api/setting/time`                                     |
| [偏好设置](./settings-preference.md) | `GET/POST /api/setting/preference`                            |
| [行情设置](./settings-market.md)  | `GET/POST /api/setting/market`、`GET /api/market/pairs`           |
| [天气设置](./settings-weather.md) | `GET/POST /api/setting/weather`、`POST /api/weather/refresh`     |
| [Swarm 定位](./swarm-find.md)     | `POST /api/swarm/find`                                           |
| [屏保上传](./screensaver-upload.md) | `GET /api/update/screensaver/preflight`、`POST /api/update/screensaver` |
| [示例](./examples.md)             | cURL / Python / JavaScript                                       |

## 版本约定

契约在 **同一 minor 版本系列内保持稳定**（例如 `v2.0.x`）。破坏性变更会在 [GitHub release log](https://github.com/NMminer1024/NMMiner#release-log) 单独提示。

## 状态码

| Code | 含义                                                              |
| ---- | ----------------------------------------------------------------- |
| 200  | OK — 响应体符合契约。                                              |
| 204  | OK — 用于 CORS 预检。                                              |
| 400  | 请求错误 — 通常是 JSON 解析失败或字段越界。                       |
| 404  | 没有这个端点。                                                     |
| 413  | 请求体过大（仅 screensaver upload）。                              |
| 429  | 限流 — 目前用于 `/api/weather/refresh`。                           |
| 500  | 设备错误（如上传时文件系统写入失败）。                            |

## 自描述文档

访问 `http://<miner-ip>/api-doc` 可看到设备自带的 HTML API 参考。如果实际 API 接口有变化，请以设备自描述的 `/api-doc` 为准。