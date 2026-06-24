---
sidebar_position: 5
title: Glossário
---

# Glossário

| Termo                   | Definição                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Modo AP**             | Portal cativo Soft-AP para o qual o NMMiner retorna quando não consegue alcançar o WiFi.              |
| **CYD**                 | "Cheap Yellow Display" — uma família de placas ESP32 + TFT de baixo custo.                            |
| **DGB / DigiByte**      | Uma altcoin SHA-256d. O NMMiner suporta DGB de imediato — mesmo firmware, pool diferente.             |
| **Hashrate**            | Hashes por segundo. Reportado em KH/s no NMMiner.                                                     |
| **Job**                 | Uma unidade de trabalho entregue pela pool (`mining.notify`).                                         |
| **Ladder**              | O ranking global opcional dos 10 melhores por dificuldade, publicado em [ladder.nmminer.com](https://ladder.nmminer.com/) e espelhado na tela do dispositivo. Veja [Ladder](../user-guide/ladder.md). |
| **Licença**             | String de ativação por dispositivo que vincula uma placa a uma imagem de firmware.                    |
| **NM Monitor**          | A interface baseada em navegador servida por cada minerador na porta 80.                              |
| **Nonce**               | O campo de 32 bits que um minerador itera enquanto procura por uma share.                             |
| **Dificuldade da pool** | Dificuldade mínima de share que a pool aceita.                                                        |
| **Probe**               | O endpoint leve `/probe` usado para identificação na rede local.                                      |
| **Share**               | Um hash que atende à dificuldade da pool, mas não à dificuldade da rede.                              |
| **SoloBTC**             | A pool de mineração oficial do NMMiner: [solobtc.nmminer.com](https://solobtc.nmminer.com). A pool padrão em todos os dispositivos enviados. |
| **Stratum**             | O protocolo de pool que o NMMiner utiliza. Apenas v1.                                                 |
| **Swarm**               | O menu Swarm no NM Monitor — agregação de mineradores em toda a rede local, sem instalação. Até 255 dispositivos por sub-rede /24. |