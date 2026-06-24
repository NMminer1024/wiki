---
sidebar_position: 2
title: Flash Firmware
---

# ファームウェアのフラッシュ

NMMiner は単一のブラウザフラッシュ可能なイメージとして提供されます。`esptool` や `idf.py` は不要です。

## ブラウザフラッシュ（推奨）

1. **Chrome または Edge** で [flash.nmminer.com](https://flash.nmminer.com) を開きます。Firefox / Safari は WebSerial を実装していません。
2. USB 経由でボードを接続します。
3. リストからボードを選択します。ツールは公式 GitHub リリースから一致するファームウェアを取得します。
4. **Install** をクリックし、シリアルポートを選択して、「Flash complete」と表示されるまで待ちます。
5. ツールが **ライセンスの購入** を促します。購入後、ライセンス文字列が表示されます — コピーしてください。アクティベーションページで 1 回必要になります。

:::warning
ボードが自動的にダウンロードモードに入らない場合は、`RESET` を押しながら `BOOT` を押し続けてから離してください。
:::