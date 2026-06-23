---
sidebar_position: 4
title: Solo vs Pool Mining
---

# Solo vs Pool Mining — Which One Is Right for You?

If you're new to mining, you've probably heard two terms thrown around: **solo mining** and **pool mining**. They're two different strategies for earning block rewards, and picking the right one matters a lot. Let's break them down in plain English.

---

## The lottery analogy

Imagine Bitcoin mining is a massive global lottery that draws a winner roughly every 10 minutes.

- The **prize**: 3.125 BTC (the current block reward) plus transaction fees.
- The **ticket**: a valid hash that meets the network difficulty.
- The **odds**: proportional to your hashrate divided by the total network hashrate.

With that picture in mind, here's how the two strategies differ.

---

## Solo mining — buying tickets by yourself

You mine alone. Your miner talks directly to a full Bitcoin node (or a special solo-mining pool that doesn't split rewards). You search for blocks independently.

If your miner finds a valid block, **you get 100% of the reward**. No sharing, no pool fees.

**Sounds great, right? Here's the catch:**

> With a typical NMMiner hashrate (~hundreds of KH/s), the average time to find a block on the Bitcoin network is measured in **centuries**. You are essentially playing a lottery where you might never win in your lifetime.

### Pros

- You keep the **entire** block reward (3.125+ BTC) if you hit one.
- Complete independence — no pool operator to trust.
- No pool fees.

### Cons

- **Extreme variance**: you could mine for years and earn nothing.
- No feedback loop — you don't know if your setup even works until you (maybe) hit a block.
- Requires massive hashrate to be practical on major networks.

### Who should solo mine?

- Large-scale operations with enough hashrate to hit blocks regularly.
- Hobbyists who treat it as a lottery ticket and don't mind earning zero.

---

## Pool mining — joining a lottery syndicate

You join a group of miners. Everyone works together, and when **anyone** in the pool finds a block, the reward is split among all participants based on how much work each contributed (measured in **shares**).

Instead of waiting centuries for a block, you earn tiny, **regular payouts** — sometimes daily, sometimes hourly.

### How shares work

The pool sets a **pool difficulty** much lower than the network difficulty. This way, even a small miner like NMMiner can submit valid *shares* every few seconds or minutes. These shares prove "I'm really searching." When a block is found, the pool counts everyone's shares to calculate payouts.

### Pros

- **Predictable, regular income** — you see results immediately.
- Works with **any hashrate**, no matter how small.
- You get feedback that your hardware is functioning correctly.
- Lower risk — your earnings smooth out over time.

### Cons

- Pool fees (usually 0.5%–3% of your earnings).
- You must trust the pool operator to pay fairly.
- Your per-block earnings are tiny (but they add up).

### Who should mine in a pool?

- **Everyone with small to medium hashrate** — which includes all NMMiner users.
- Anyone who wants consistent, predictable earnings.
- Beginners who want to see results and learn.

---

## Side-by-side comparison

| | Solo Mining | Pool Mining |
|---|---|---|
| **How it feels** | Lottery ticket | Regular paycheck |
| **Payout frequency** | Extremely rare (maybe never) | Frequent (daily/hourly) |
| **Payout size per hit** | Huge (full block reward) | Tiny (your share of the block) |
| **Variance** | Sky-high | Low |
| **Suitable hashrate** | TH/s or more | Works at any hashrate |
| **Fees** | None | 0.5%–3% pool fee |
| **NMMiner compatible?** | Yes (SoloBTC pool) | Yes (standard pools) |

---

## The real question: "Why connect to a pool if I'm solo mining?"

This is where most newcomers get confused. The word "pool" makes it sound like the opposite of "solo." Let's unpack it layer by layer.

### Three ways to mine — only two change the reward

Every miner needs a **Bitcoin node** somewhere in the pipeline — software that talks to the Bitcoin network, tracks the blockchain, and hands out work. The question is: who runs that node, and what kind of work does it give you?

Here are the three setups, from most DIY to most hands-off:

| Setup | Who runs the node? | Job difficulty | Reward if you hit a block |
|---|---|---|---|
| **True solo** (own node) | You | Full network difficulty | 100% yours |
| **Solo pool** (e.g. SoloBTC) | The pool operator | Full network difficulty | ~98–100% yours (tiny fee) |
| **Regular pool** | The pool operator | Low (share difficulty) | Split among all participants |

:::info

Notice the pattern: **"Solo" describes the reward model, not who runs the infrastructure.** In both true solo and solo-pool mining, you get (nearly) the entire block if you hit one. In a regular pool, the reward is always split.

:::

### True solo mining — the "pure" version

In the strictest sense, solo mining means your miner talks directly to a **Bitcoin full node running on your own machine**. You download the entire blockchain (~600 GB), keep it synced 24/7, and your miner searches against it. Hit a block? You broadcast it yourself. No middleman, no fees, no one to trust.

The catch is the infrastructure overhead. You need a computer with hundreds of GB of free disk space, a reliable always-on internet connection, and enough technical comfort to keep the node healthy. For most hobbyists — especially anyone running a tiny ESP32 miner — this is simply not worth the trouble.

### Solo pools — solo rewards, without the node headache

This is where pools like SoloBTC fit in. They run the full node and handle all the blockchain plumbing **for you**. But unlike a regular pool, they do **not** lower the job difficulty and do **not** split block rewards among participants.

Instead, each connected miner gets jobs at **full Bitcoin network difficulty**. If your miner happens to find a valid block, the pool broadcasts it, collects the reward, and sends virtually all of it to your wallet (keeping only a small fee, typically 1–2%).

The key insight: **from a reward perspective, this is solo mining.** From an infrastructure perspective, it's pool-assisted. You get the solo lottery ticket without needing to run a 600 GB server.

### So why is solo still "a lottery"?

Because the difficulty of finding a block has **nothing to do with the pool** — it's set by the Bitcoin network. Whether you run your own node or connect to SoloBTC, your KH/s-grade hashrate still faces the same astronomical odds: centuries, on average, between hits.

The pool saves you from the infrastructure headache. It cannot change the math.

### Which one is NMMiner's default?

NMMiner ships with **SoloBTC** as the default pool — meaning solo-pool mode out of the box. It's a fun, zero-config way to "play the lottery" the moment you plug in. But if you want steady, predictable earnings, switch to a regular pool.

:::tip

**For NMMiner users**: Go to the Configuration Portal → Pools tab, and replace the default SoloBTC URL with a traditional mining pool URL. See the [Pools](../user-guide/pools.md) page for step-by-step instructions.

:::

---

## Which should you choose?

| Your goal | Recommended |
|---|---|
| "I want to see regular, predictable earnings" | Regular pool |
| "I want the thrill of maybe hitting a full block someday" | Solo pool (e.g. SoloBTC) |
| "I run a large mining farm and hit blocks regularly" | True solo (own node) or solo pool |
| "I'm learning how mining works" | Regular pool (instant share feedback) |

**Bottom line**: The confusion usually goes like this — *"Wait, if it's solo mining, why am I connecting to a 'pool'?"* Here's the answer:

- **"Solo" means the reward is not shared.** If you find a block, it's yours — whether you found it through your own node or through a solo-pool that runs the node for you.
- **"Pool" (in "solo pool") only means the infrastructure layer.** The pool runs the Bitcoin node so you don't need a 600 GB hard drive and a 24/7 server.

For NMMiner users, the practical takeaway: **regular pool = steady small earnings you can actually see; solo pool = a lottery ticket with almost no infrastructure hassle.** Solo isn't "wrong" — it just serves a different goal.

---

## See also

- [Bitcoin Mining Basics](./bitcoin-mining-basics.md) — the core concepts behind everything on this page.
- [Pools](../user-guide/pools.md) — how to configure pool settings in NMMiner.
- [Glossary](../reference/glossary.md) — definitions of hashrate, share, difficulty, and more.
