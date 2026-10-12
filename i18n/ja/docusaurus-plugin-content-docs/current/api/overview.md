---
sidebar_position: 1
title: API Overview
---

# API 概要

すべての NMMiner デバイスは **ポート 80** で HTTP サーバーを実行し、完全な REST スタイルの API を公開しています。この API は以下によって使用されます：

- 内蔵の [NM Monitor](../user-guide/nm-monitor.md) ブラウザ UI。
- [Swarm](../user-guide/swarm.md) アグリゲーター。
- ユーザー、ダッシュボード、Grafana プラグイン、Python スクリプトなど、ステータスの読み取りや設定の送信を行いたいすべての人。

> ✅ このページは **公開契約** を文書化します：パス、メソッド、リクエストボディ、レスポンスボディ、ステータスコード。
> ❌ 実装については文書化 **しません**。デバイスは HTTP 経由で到達可能なブラックボックスとして扱ってください。

## ベース URL

```
http://<miner-ip>/
```

またはホスト名（ほとんどのホームルーターは解決できます）：

```
http://<miner-hostname>/
```

IP / ホスト名は、デバイス画面の **Miner ページ**、または NM Monitor の **System** セクションで確認できます。

## CORS

すべてのエンドポイントは以下で応答します：

```
Access-Control-Allow-Origin: *
```

これにより、プロキシなしで任意のブラウザページから API を呼び出せます。

## 認証

現時点では **認証はありません**。API は信頼できる LAN 内から使用することを前提としています。**独自のゲートウェイなしで公共のインターネットに公開しないでください。**

## コンテンツタイプ

- リクエストボディは `application/json` を使用します。
- レスポンスボディは `application/json` または `text/plain` です。
- すべてのエンドポイントは CORS プリフライト `OPTIONS` リクエストを受け入れ、応答します。

## カテゴリ

| カテゴリ                | エンドポイント                                                          |
| ----------------------- | ------------------------------------------------------------------ |
| [Discovery](./discovery.md) | `GET /probe`, `GET /alive`                                     |
| [System](./system.md)       | `GET /api/system/info`, `POST /api/system/restart`             |
| [Network settings](./settings-network.md) | `GET/POST /api/setting/network`                  |
| [Mining settings](./settings-mining.md)   | `GET/POST /api/setting/mining`                   |
| [Time settings](./settings-time.md)       | `GET/POST /api/setting/time`                     |
| [Preference settings](./settings-preference.md) | `GET/POST /api/setting/preference`         |
| [Market settings](./settings-market.md)   | `GET/POST /api/setting/market`, `GET /api/market/pairs` |
| [Weather settings](./settings-weather.md) | `GET/POST /api/setting/weather`, `POST /api/weather/refresh` |
| [Swarm find](./swarm-find.md)             | `POST /api/swarm/find`                           |
| [Screensaver upload](./screensaver-upload.md) | `GET /api/update/screensaver/preflight`, `POST /api/update/screensaver` |
| [Examples](./examples.md)                 | cURL / Python / JavaScript                       |

## バージョニング

契約は **マイナーファームウェアバージョン間で安定**しています（例：`v2.0.x`）。破壊的変更は [GitHub リリースログ](https://github.com/NMminer1024/NMMiner#release-log) で明示されます。

## ステータスコード

| コード | 意味                                                          |
| ---- | ---------------------------------------------------------------- |
| 200  | OK — レスポンスボディがドキュメント化されたスキーマと一致。                |
| 204  | OK — CORS プリフライトに使用。                                    |
| 400  | 不正なリクエスト — 通常は無効な JSON または範囲外の値。       |
| 404  | そのようなエンドポイントはありません。                                                |
| 413  | ペイロードが大きすぎる（スクリーンセーバーアップロードのみ）。                     |
| 429  | レート制限 — 現在 `/api/weather/refresh` で使用。         |
| 500  | デバイスエラー（例：アップロード中のファイルシステム書き込み失敗）。     |

## ディスカバラビリティ

`http://<miner-ip>/api-doc` にアクセスすると、マイナー自身が配信するライブ HTML リファレンスを確認できます。実際の API がこの Wiki と異なる場合、デバイスのライブ `/api-doc` が常に優先されます。
