---
sidebar_position: 11
title: Screensaver Upload
---

# スクリーンセーバーアップロード

カスタムスクリーンセーバー画像をアップロードします。ブラウザが最初に PNG / JPG / 画像をデバイスの `.ss` 形式に変換します。この API は、その変換済みファイルを受け取ります。

> ほとんどのユーザーは [NM Monitor](../user-guide/nm-monitor.md) の **Screensaver** ページを使用してください — 変換が自動的に処理されます。このページは、プログラムで独自のアセットをプッシュしたいインテグレーター向けです。

---

## 2 ステップのフロー

```mermaid
flowchart LR
    A[GET preflight<br/>ファイルサイズ付き] --> B{十分な空き容量?}
    B -- はい --> C[POST ファイル]
    B -- いいえ --> D[拒否または上書き対象<br/>ファイルを一覧表示]
    D --> C
    C --> E[/ss/ に保存]
```

---

## `GET /api/update/screensaver/preflight`

`size` バイトのファイルを保存できるかをデバイスに問い合わせます。デバイスは最初に空き容量を確保する必要があるかを判断します（最も古い既存のスクリーンセーバーを上書き）。

### クエリパラメータ

| 名前   | 必須 | 意味                                               |
| ------ | -------- | ----------------------------------------------------- |
| `size` | はい      | アップロード予定の `.ss` ファイルのバイトサイズ。 |

### レスポンス — ファイルが収まる場合

```json
{
  "fileSize":       65536,
  "fsFree":         262144,
  "maxUploadable":  327680,
  "action":         "new",
  "overwriteCount": 0,
  "overwriteFiles": [],
  "existingCount":  2,
  "spaceAfter":     196608
}
```

### レスポンス — 上書きが必要な場合

```json
{
  "fileSize":       180000,
  "fsFree":         60000,
  "maxUploadable":  400000,
  "action":         "overwrite",
  "overwriteCount": 2,
  "overwriteFiles": [
    {"name": "saver_320_240_001.ss", "size": 65536},
    {"name": "saver_320_240_002.ss", "size": 72104}
  ],
  "existingCount":  4,
  "spaceAfter":     17640
}
```

### レスポンス — 大きすぎる場合

```json
{
  "fileSize":       1500000,
  "fsFree":         60000,
  "maxUploadable":  400000,
  "action":         "reject",
  "overwriteCount": 0,
  "overwriteFiles": [],
  "existingCount":  4,
  "spaceAfter":     0
}
```

| フィールド              | 型      | 意味                                                        |
| ------------------ | --------- | -------------------------------------------------------------- |
| `fileSize`         | integer   | リクエストされたアップロードサイズのエコー。                             |
| `fsFree`           | integer   | デバイス FS の現在の空きバイト数。                        |
| `maxUploadable`    | integer   | 空きバイト数 **プラス** 既存スクリーンセーバーの全バイト数 — 絶対的な上限。 |
| `action`           | string    | `"new"`、`"overwrite"`、または `"reject"`。                         |
| `overwriteCount`   | integer   | 空きを作るために削除される既存スクリーンセーバーの数。    |
| `overwriteFiles`   | object[]  | まもなく削除されるファイルのリスト（`name` + `size`）。        |
| `existingCount`    | integer   | 現在の画面サイズに一致する既存スクリーンセーバーファイル数。    |
| `spaceAfter`       | integer   | アップロード後の予測空きバイト数。                     |

---

## `POST /api/update/screensaver`

実際の `.ss` ファイルを `multipart/form-data` としてアップロードします。

### リクエスト

- コンテンツタイプ: `multipart/form-data`
- ファイル拡張子: **`.ss` で終わる必要があります**。
- 最大サイズ: **200 KB**。
- ファイルの先頭 2 バイト: マジック `0x4E 0x53`。

### レスポンス — 成功

```json
{
  "status": "ok",
  "path":   "/ss/saver_320_240_003.ss"
}
```

### レスポンス — 失敗

| ステータス | ボディ                              | 原因                                 |
| ------ | --------------------------------- | ------------------------------------- |
| 400    | `Only .ss files are accepted.`    | ファイル拡張子が不正。                 |
| 400    | `Invalid .ss file header.`        | マジックバイトが一致しない。             |
| 413    | `File too large (max 200 KB).`    | ボディが 200 KB を超えた。                 |
| 500    | `Failed to open file for writing.`| ファイルシステムエラー。                    |
| 500    | `Write error.`                    | 書き込み中のファイルシステムエラー。       |

### 例

```bash
SIZE=$(stat -c%s saver_320_240_003.ss)
curl "http://192.168.1.42/api/update/screensaver/preflight?size=$SIZE"
# "action" を確認し、"reject" なら中止
curl -X POST -F "file=@saver_320_240_003.ss" \
     http://192.168.1.42/api/update/screensaver
```

:::warning
スクリーンセーバーのアップロード中、ファイルシステムのフラッシュの間 **マイニングが一時停止**します。ハッシュレートは約 1 秒で通常に戻ります。
:::
