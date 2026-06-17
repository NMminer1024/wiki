---
sidebar_position: 7
title: 偏好设置
---

# 偏好设置

显示、LED、屏保和可选的全球 Ladder。

---

## `GET /api/setting/preference`

### 响应

```json
{
  "Brightness":      80,
  "RotateScreen":    270,
  "LedEnable":       1,
  "ScreenSaver":     "5m",
  "ScreenSaverMode": "image",
  "LadderEnable":    false
}
```

| 字段              | 类型     | 含义                                                               |
| ----------------- | -------- | ------------------------------------------------------------------ |
| `Brightness`      | integer  | 屏幕亮度，**1-100**（会被夹到 ≥ 1）。                              |
| `RotateScreen`    | integer  | 屏幕旋转角度。常见：`0`、`90`、`180`、`270`。                      |
| `LedEnable`       | integer  | `1` 开 LED，`0` 关。                                              |
| `ScreenSaver`     | string   | 触发屏保前的空闲超时，如 `"off"`、`"1m"`、`"5m"`、`"30m"`。       |
| `ScreenSaverMode` | string   | `"image"`（轮播）或 `"black"`（关背光）。                          |
| `LadderEnable`    | boolean  | 是否加入全球排行榜。默认关闭。                                    |

---

## `POST /api/setting/preference`

部分更新 — **不需要重启**，**立即** 生效。

### 请求

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### 响应

`200 OK` 体为 `OK`。

### 示例

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
追求 **最高 hashrate** 推荐设 `ScreenSaverMode: "black"` — 没有屏幕刷新开销。
:::