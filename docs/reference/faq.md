---
sidebar_position: 3
title: FAQ
---

# FAQ

## Will NMMiner ever find a Bitcoin block on its own?

Mathematically, yes — with the same probability as a lottery ticket. Practically, no. The point is the **fun** (and supporting the network), not the payout.

## How much electricity does it use?

Most supported boards draw under 1 W. Even at $0.30 /kWh, that is well under 30 cents per month.

## Which pool does NMMiner use by default?

NMMiner ships pre-configured to its own SoloBTC pool:

- Primary: `stratum+tcp://solobtc.nmminer.com:3333`
- Fallback: `stratum+tcp://au.solobtc.nmminer.com:3333`

You **only need to change the wallet address** to your own BTC address. Pool URLs are usually fine as-is.

## Can I use a different pool?

Yes — anything that speaks Stratum v1 will work. See the [Pool List](./pool-list.md) for community SoloBTC and DGB options. Note that big commercial pools with a high minimum share difficulty will reject every share — stick to NMMiner's official [SoloBTC](https://solobtc.nmminer.com) pools or solo-style endpoints.

## Can NMMiner mine anything other than Bitcoin?

Yes — **DigiByte (DGB)** is also supported. DGB uses the same SHA-256d algorithm, so it works on the same firmware. Just point the pool URL at a DGB pool and use a DGB wallet address.

## Do I need a wallet on the device?

No. You only need a **payout address**. The pool sends rewards directly to whatever BTC / DGB address you configure.

## My screen wakes up by itself every few seconds.

That is harmless background refresh. Use **Black** screen-saver mode if you want zero display activity (and max hashrate).

## Can I run two miners on the same WiFi?

Yes. NM Monitor's **Swarm** menu auto-discovers every NMMiner on the same LAN — up to 255 devices per /24 subnet. See [Swarm](../user-guide/swarm.md).

## My miner is stuck on the Loading screen / never connects to the pool

Run through this checklist:

1. **WiFi must be 2.4 GHz.** Most ESP32 chips do not support 5 GHz. If your home WiFi has both bands under the same SSID, temporarily separate them or join the 2.4 GHz one explicitly.
2. **Verify the wallet address.** A typo here means the pool refuses the worker. A valid Bitcoin address starts with:
   - `bc1q...` — Native SegWit (most common today)
   - `bc1p...` — Taproot
   - `1...`    — Legacy P2PKH
   - `3...`    — P2SH (multisig / wrapped SegWit)

   Anything else is **not** a valid BTC address — double-check you copied the full string.
3. **Verify the pool URL.** Out of the box NMMiner is pre-configured with `stratum+tcp://solobtc.nmminer.com:3333` and works without any change. If you switched pools, the URL must look like `stratum+tcp://host:port` (or `stratum+ssl://host:port` for TLS). See the [Pool List](./pool-list.md) for known-good endpoints.
4. **Pool difficulty.** Big commercial pools that mandate a high minimum share difficulty will reject every NMMiner share. Stick to NMMiner's official [SoloBTC](https://solobtc.nmminer.com) pools.
5. **Power supply.** A flaky USB port can cause brownouts that look like a hang. Try a different cable + 5 V/1 A power source.

If none of the above fixes it, the miner should fall back to AP mode after ~15 s — re-join `nmap-2.4g` and re-check the values.

## Is there a public API?

Yes — every device exposes a documented HTTP API on port 80. See [API Reference](../api/overview.md).

## Is the source code available?

NMMiner firmware is closed-source. The HTTP API on each device is the supported integration surface. The companion CLI flash tool and the SoloBTC pool web frontends are public.

## What does the Ladder page do?

It is an **opt-in** global top-10 leaderboard ranked by the best-ever share difficulty produced by participating miners. Wallets are displayed in `first4…last4` format for privacy. Disabled by default — enable it from the **Preferences** section of NM Monitor. The public web view lives at [ladder.nmminer.com](https://ladder.nmminer.com/) — see [Ladder](../user-guide/ladder.md) for the full story.