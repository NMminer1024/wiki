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
