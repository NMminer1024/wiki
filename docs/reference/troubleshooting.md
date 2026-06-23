---
sidebar_position: 4
title: Troubleshooting
---

# Troubleshooting

### Board does not appear in the flash tool

- **Re-plug the USB cable a couple of times** — the WebSerial picker can miss devices on the first hot-plug, especially right after driver install.
- Use a **data** USB cable (not power-only).
- Try a different USB port; some hubs do not pass through CDC.
- On Windows, install the **CP210x** or **CH340** driver depending on your boards bridge chip.
- Hold `BOOT` while pressing `RESET` to force download mode.

### Stuck on Loading

- Confirm the WiFi is **2.4 GHz** (most ESP32 chips do not do 5 GHz).
- Wait 15 s. If it cannot connect it should fall back to AP mode automatically.

### AP `nmap-2.4g` not visible

- Power-cycle the board.
- Hold the configuration button for 5 s (see [Buttons](../user-guide/buttons.md)).

### Captive portal shows but Save does not work

- Wait the full 15 s window — the storage flush is intentionally slow.
- If the page never returns, power-cycle and re-try.

### Pool stuck on "Connecting"

- Verify the pool URL and port.
- Try `stratum+tcp://` instead of `stratum+ssl://` (or vice versa).
- Try the [fallback pool](../user-guide/pools.md).

### Hashrate is much lower than the spec sheet

- The **UI refresh** setting is heavy on small CPUs. Try lowering it (higher value in the form).
- Use **Black** screen-saver to remove the display redraw cost entirely.
- Make sure your power supply can sustain 500 mA — a flaky USB port will cause brownouts.

### Shares are all rejected

- The pool diff is set too high. Switch to NMMiner's official SoloBTC pool (or the official fallback pool).
- Verify the wallet field — many pools reject incorrectly formatted worker names.

### Cant reach NM Monitor

- Make sure you and the miner are on the **same WiFi**.
- Check the miner s Miner page for its IP — try that directly.
- Disable any **VPN** on your phone/PC; some VPNs block LAN traffic.
- If your router uses **AP isolation**, devices cannot reach each other — disable that mode.

### Swarm menu shows fewer miners than I have

- Click **Re-scan** (or reload the page).
- LAN scans only span one /24 subnet. Miners on a different subnet wont show up.
- Make sure the missing miner is on the **Miner page** of its screen — the discovery thread only runs on that page.
