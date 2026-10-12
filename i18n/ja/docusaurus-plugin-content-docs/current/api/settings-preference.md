---
sidebar_position: 7
title: Preference Settings
---

# 環境設定

ディスプレイ、LED、スクリーンセーバー、およびオプションのグローバルラダー。

---

## `GET /api/setting/preference`

### レスポンス

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

| フィールド             | 型    | 意味                                                           |
| ----------------- | ------- | ----------------------------------------------------------------- |
| `Brightness`      | integer | 画面の明るさ、**1-100**（≥ 1 にクランプされます）。           |
| `RotateScreen`    | integer | 画面回転（度）。典型値：`0`, `90`, `180`, `270`。    |
| `LedEnable`       | integer | ステータス LED を有効化するなら `1`、無効化するなら `0`。                     |
| `ScreenSaver`     | string  | スクリーンセーバー起動までのアイドルタイムアウト。例：`"off"`, `"1m"`, `"5m"`, `"30m"`。 |
| `ScreenSaverMode` | string  | `"image"`（スライドショー）または `"black"`（バックライトオフ）。              |
| `LadderEnable`    | boolean | グローバルラダーへのオプトイン。デフォルトはオフ。                 |

---

## `POST /api/setting/preference`

部分更新 — 再起動なしで **ライブに** 適用されます。

### リクエスト

```json
{
  "Brightness":      60,
  "ScreenSaverMode": "black"
}
```

### レスポンス

本文 `OK` を伴う `200 OK`。

### 例

```bash
curl -X POST http://192.168.1.42/api/setting/preference \
  -H "Content-Type: application/json" \
  -d '{"Brightness":40,"LedEnable":0}'
```

:::tip
`ScreenSaverMode: "black"` は **最大ハッシュレート** を求めるユーザーにおすすめの設定です — 画面リフレッシュのコストがありません。
:::
