---
sidebar_position: 2
title: Stratum Protocol
---

# Stratum プロトコル

**Stratum v1** は、Bitcoin マイニングプールがマイナーと通信するために使用する事実上のプロトコルです。NMMiner は Stratum v1 クライアントです。

> このページは、すべてのプールが理解する **公開されたよく知られた** Stratum メッセージのみを文書化します。プール固有の拡張や内部実装の詳細は対象外です。

## 接続

- **トランスポート**: TCP、または SSL プールの場合は TLS ラップされた TCP。
- **アドレススキーム**:
  - `stratum+tcp://host:port` — プレーン TCP。
  - `stratum+ssl://host:port` — TLS。
- **ワーカー ID**: ウォレットアドレスにオプションで `.workerName` を付加。例：`bc1q....workerName`。

マイナーはセッション全体を通じてソケットを開いたままにします。プールが切断した場合、NMMiner は自動的に再接続します。

## メッセージフロー
