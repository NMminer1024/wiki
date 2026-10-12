---
sidebar_position: 12
title: Examples
---

# API Examples

대시보드, 크론 작업 또는 Discord 봇에 바로 적용할 수 있는 엔드투엔드 스니펫입니다.

---

## cURL — 실시간 해시레이트 읽기

```bash
curl -s http://192.168.1.42/api/system/info \
  | jq '.miner.hashRate * 1e9'
```

현재 해시레이트를 **H/s** 단위로 출력합니다.

---

## cURL — 마이너 군집에 새 풀 URL 푸시

```bash
for ip in 192.168.1.42 192.168.1.43 192.168.1.44; do
  curl -X POST "http://${ip}/api/setting/mining" \
       -H "Content-Type: application/json" \
       -d '{"PrimaryPool":"stratum+tcp://solobtc.nmminer.com:3333"}'
done
```

---

## Python — LAN 총 해시레이트

```python
import requests

# 검색을 부트스트랩할 접근 가능한 마이너 하나를 선택합니다.
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

## Python — 모든 마이너를 물리적으로 찾기

```python
import requests

seed = "192.168.1.42"
ips = requests.get(f"http://{seed}/alive", timeout=2).json()["ips"]

for ip in ips:
    requests.post(f"http://{ip}/api/swarm/find", timeout=2)
    print(f"flashing {ip}")
```

집 안을 돌아다니면 — 각 마이너가 차례로 깜빡입니다.

---

## JavaScript (브라우저) — 최소 라이브 대시보드

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

어떤 브라우저에서든 파일을 여세요 — CORS는 설계상 열려 있습니다.

---

## Python — 지정 시간에 모든 마이너 재시작

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

필요 이상으로 자주 실행하지 마세요 — 재시작마다 Stratum 세션과 보류 중인 셰어가 폐기됩니다.
