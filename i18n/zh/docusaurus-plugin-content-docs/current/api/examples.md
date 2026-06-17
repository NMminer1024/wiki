---
sidebar_position: 12
title: 调用示例
---

# API 调用示例

可以直接放进 dashboard、cron、Discord 机器人的端到端片段。

---

## cURL — 读实时 hashrate

```bash
curl -s http://192.168.1.42/api/system/info \
  | jq '.miner.hashRate * 1e9'
```

输出单位是 **H/s**。

---

## cURL — 给一群矿机批量改矿池 URL

```bash
for ip in 192.168.1.42 192.168.1.43 192.168.1.44; do
  curl -X POST "http://${ip}/api/setting/mining" \
       -H "Content-Type: application/json" \
       -d '{"PrimaryPool":"stratum+tcp://solobtc.nmminer.com:3333"}'
done
```

---

## Python — 计算局域网总算力

```python
import requests

# 用任一可达矿机引导发现
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

## Python — 一台台闪屏定位

```python
import requests

seed = "192.168.1.42"
ips = requests.get(f"http://{seed}/alive", timeout=2).json()["ips"]

for ip in ips:
    requests.post(f"http://{ip}/api/swarm/find", timeout=2)
    print(f"flashing {ip}")
```

满屋子走一圈，每台矿机都会按顺序闪一下。

---

## JavaScript（浏览器）— 极简实时面板

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

浏览器直接打开即可 — CORS 默认全开。

---

## Python — 指定时刻批量重启全部矿机

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

非必要不要频繁重启 — 每次都会丢掉 Stratum 会话和未提交的 share。