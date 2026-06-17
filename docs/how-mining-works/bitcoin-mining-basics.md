---
sidebar_position: 1
title: Bitcoin Mining Basics
---

# Bitcoin Mining Basics

Before diving into how NMMiner participates, here is the **one-screen mental model** of Bitcoin mining.

## The job

Bitcoin miners race to find a number — a **nonce** — that, when combined with the rest of the block header and run through the SHA-256 hash function **twice** (a.k.a. **SHA-256d**), produces an output that is *smaller* than a target value set by the network.

That's it. The entire industry is one search problem:

> *Find a 32-bit value such that `sha256(sha256(header_with_that_value))` is smaller than the network target.*

## Difficulty, in plain English

- **Network difficulty** — how hard the *network* makes it for anyone to win the next block. Today, this is astronomically high; you would need an entire warehouse of ASICs to land a block in any reasonable time.
- **Pool difficulty** — how hard the *pool* asks you to look. Pools set this much lower so that small miners produce **shares** (proof that you really are searching).
- **Share** — a hash result that meets the pool difficulty (but not necessarily the network difficulty). Pools credit you for shares.

NMMiner's hashrate is in the **hundreds of KH/s** range, so it talks to pools that set share difficulty very low — often a fraction of 1.

## Mining payout, in plain English

When a pool finds a winning hash (across all its connected miners), it claims the block reward and distributes it according to the share counts of each participant. Small miners get small payouts, but they get them *directly to their wallet* on the kinds of pool NMMiner connects to.

## DigiByte (DGB) works the same way

DGB also uses SHA-256d, so the maths is identical — only the network parameters and pools differ. NMMiner supports both BTC and DGB without changing the firmware.

## What NMMiner does

NMMiner:

1. Connects to a Stratum pool you configure (defaults to NMMiner's own SoloBTC pool).
2. Gets a stream of **jobs** from the pool.
3. Searches the nonce space as fast as the chip allows.
4. Sends valid shares back to the pool.
5. Shows you the rate, the latest share, and your session/all-time best.

The next two pages explain the protocol and the data flow inside the miner.