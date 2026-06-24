---
sidebar_position: 2
title: Pool List
---

# プールリスト

NMMiner の約 150～1000 KH/s のハッシュレートと良好に動作することが確認されているプール。これらはすべて小規模マイナー向けにシェア難易度を動的に調整します。

## Bitcoin (BTC) — **デフォルト**

| プール                              | Stratum URL                                       | ダッシュボード                                                |
| --------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **NMMiner SoloBTC**（デフォルト）     | `stratum+tcp://solobtc.nmminer.com:3333`          | [solobtc.nmminer.com](https://solobtc.nmminer.com)       |
| **NMMiner SoloBTC AU**（フォールバック） | `stratum+tcp://au.solobtc.nmminer.com:3333`       | [au.solobtc.nmminer.com](https://au.solobtc.nmminer.com) |

SoloBTC プールは NMMiner によって運営されています。すべてのデバイスに事前設定されています — 箱出しで自分のウォレットアドレスを入力するだけで済みます。

## DigiByte (DGB)

| プール                | Stratum URL                                       | ダッシュボード                                            |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| Solo Miner DGB      | `stratum+tcp://dgb-stratum.solominer.net:3333`    | [digibyte.solominer.net](https://digibyte.solominer.net) |

DGB は BTC と同じ SHA-256d ハッシュアルゴリズムを共有しているため、同じ NMMiner ファームウェアがビルド変更なしで動作します — プール URL とウォレットアドレスのみが異なります。

## 注意点

:::tip
プールが TLS をサポートしている場合、スキームを `stratum+ssl://` に切り替えてください — ホストとポートは同じです。
:::

:::warning
高い最小シェア難易度（例：`0x100000000`）を義務付ける大手商用プールは、すべての NMMiner シェアを拒否します。小規模マイナー向けにシェア難易度を非常に低い値にスケールダウンする SoloBTC スタイルのエンドポイントを使用してください。
:::