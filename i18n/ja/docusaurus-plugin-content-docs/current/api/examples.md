---
sidebar_position: 12
title: Examples
---

# API 例

ダッシュボード、cron ジョブ、Discord ボットにそのまま組み込めるエンドツーエンドのスニペットです。

---

## cURL — ライブハッシュレートの読み取り

```bash
curl -s http://192.168.1.42/api/system/info \
  | jq '.miner.hashRate * 1e9'
```

現在のハッシュレートを **H/s** で出力します。

---

## cURL — マイナーの群れに新しいプール URL をプッシュ

```bash
for ip in 192.168.1.42 192.168.1.43 192.168.1.44; do
  curl -X POST "http://${ip}/api/setting/mining" \
       -H "Content-Type: application/json" \
       -d '{"PrimaryPool":"stratum+tcp://solobtc.nmminer.com:3333"}'
done
```

---

## Python — LAN の合計ハッシュレート

```python
import requests

# 検出をブートストラップするために、到達可能な 1 台のマイナーを選びます。
seed = "192.168.1.42"

ips = requests.get(f"http://{seed}/alive", timeout=2).json()["ips"]

total_hs = 0.0
for ip in ips:
    try:
        info = requests.get(f"http://{ip}/api/system/info", timeout=2).json()
        total_hs += info["miner"]["hashRate"] * 1e9
    except Exception as e:
        print(f"{ip}: {e}")

print(f"Total LAN hashrate: {total_hs/1e3:,.1f} KH/s across {len(ips)} miner(s)")
```

---

## Python — 各マイナーを物理的に探す

```python
import requests

seed = "192.168.1.42"
ips = requests.get(f"http://{seed}/alive", timeout=2).json()["ips"]

for ip in ips:
    requests.post(f"http://{ip}/api/swarm/find", timeout=2)
    print(f"flashing {ip}")
```

家の中を歩き回ると — 各マイナーが順番に点滅します。

---

## JavaScript（ブラウザ）— 最小限のライブダッシュボード

```html
<!DOCTYPE html>
<html>
<head><title>NMMiner Live</title></head>
<body>
<pre id="out">loading...</pre>
<script>
const SEED = "192.168.1.42";

async function tick() {
  const alive = await fetch(`http://${SEED}/alive`).then(r => r.json());
  const rows = await Promise.all(
    alive.ips.map(ip => fetch(`http://${ip}/api/system/info`)
      .then(r => r.json())
      .then(j => ({
        ip,
        host:    j.identity.hostName,
        ver:     j.identity.fwVersion,
        khs:     (j.miner.hashRate * 1e6).toFixed(1),
        acc:     j.miner.sAccepted,
        rej:     j.miner.sRejected,
        bestEv:  j.miner.bestDiffEver,
      })).catch(() => null))
  );
  const lines = rows.filter(Boolean).map(r =>
    `${r.host.padEnd(24)} ${r.ip.padEnd(15)} ${r.khs.padStart(7)} KH/s` +
    `   acc=${r.acc} rej=${r.rej}   bestEver=${r.bestEv}`
  );
  document.getElementById("out").textContent =
    `NMMiner LAN — ${rows.length} miners\n\n` + lines.join("\n");
}
tick(); setInterval(tick, 5000);
</script>
</body>
</html>
```

任意のブラウザでファイルを開いてください — CORS は設計上オープンです。

---

## Python — 指定時刻にすべてのマイナーを再起動

```python
import requests, datetime, time

ips = ["192.168.1.42", "192.168.1.43", "192.168.1.44"]
target = datetime.datetime(2026, 7, 1, 3, 0, 0)

while datetime.datetime.now() < target:
    time.sleep(30)

for ip in ips:
    try:
        requests.post(f"http://{ip}/api/system/restart", timeout=2)
        print(f"restart sent to {ip}")
    except Exception as e:
        print(f"{ip}: {e}")
```

必要以上に頻繁に実行しないでください — 再起動のたびに Stratum セッションと保留中のシェアが破棄されます。
