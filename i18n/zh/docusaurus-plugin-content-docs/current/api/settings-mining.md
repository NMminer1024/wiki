---
sidebar_position: 5
title: 挖矿设置
---

# 挖矿设置

主 / 备矿池 URL、钱包、密码。

---

## `GET /api/setting/mining`

### 响应

```json
{
  "PrimaryPool":       "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":    "bc1q....worker1",
  "PrimaryPassword":   "x",
  "SecondaryPool":     "stratum+tcp://au.solobtc.nmminer.com:3333",
  "SecondaryAddress":  "bc1q....worker1",
  "SecondaryPassword": "x"
}
```

| 字段                | 类型   | 含义                                                                |
| ------------------- | ------ | ------------------------------------------------------------------- |
| `PrimaryPool`       | string | 主 Stratum URL（`stratum+tcp://...` 或 `stratum+ssl://...`）。      |
| `PrimaryAddress`    | string | Worker 名 — 通常是 `<wallet>.<worker>`。                            |
| `PrimaryPassword`   | string | Worker 密码。大多数矿池接受 `x`。                                   |
| `SecondaryPool`     | string | 备用矿池 URL。主矿池不可达时切换到这里。                            |
| `SecondaryAddress`  | string | 备用 worker 名。                                                    |
| `SecondaryPassword` | string | 备用 worker 密码。                                                  |

---

## `POST /api/setting/mining`

部分更新。

### 请求

```json
{
  "PrimaryPool":     "stratum+tcp://solobtc.nmminer.com:3333",
  "PrimaryAddress":  "bc1q....worker1",
  "PrimaryPassword": "x"
}
```

### 响应

成功：`200 OK` 体为 `OK`。JSON 非法：`400`。

### 示例

```bash
curl -X POST http://192.168.1.42/api/setting/mining \
  -H "Content-Type: application/json" \
  -d '{"PrimaryPool":"stratum+ssl://solobtc.nmminer.com:3333","PrimaryAddress":"bc1q....worker1"}'
```

:::tip
新设置在矿机下次重连矿池时生效 — 通常几秒之内。
:::