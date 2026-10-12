---
sidebar_position: 2
title: Páginas da Tela
---

# Páginas da Tela

Placas com display percorrem um pequeno conjunto de páginas. Alterne com o gesto definido em [Botões e Toque](./buttons.md) — toque, clique duplo ou deslize, dependendo do hardware.

O NMMiner possui layouts para os seguintes tamanhos nativos:

```
128x64    128x128    160x80     240x135
240x240   320x170    320x172    320x240
480x320   536x240
```

## Páginas

| Ordem | Página       | Propósito                                                                |
| ----- | ---------- | ---------------------------------------------------------------------- |
| 1     | **Loading**| Splash + status de inicialização, versão do firmware, handshake de rede.             |
| 2     | **Config** | Exibida no modo AP — QR / IP / SSID para acessar o portal cativo.    |
| 3     | **Miner**  | Taxa de hash ao vivo, dificuldade **melhor da sessão** e **melhor de todos os tempos**, shares aceitas / rejeitadas, URL da pool, tempo de atividade. A página "de trabalho" principal. |
| 4     | **Clock**  | Relógio grande + data, com ticker de preço BTC que fica verde em ganhos e vermelho em perdas. Formato de hora selecionável 12 / 24 h, formato de data configurável. |
| 5     | **Price**  | Dois modos:<br/>• **K-line** — gráfico de velas da sua moeda principal, intervalo configurável (`15m`, `1h`, `4h`, `1d`, …).<br/>• **Wall** — visualização de lista de observação multi-moeda (até 20 pares). |
| 6     | **Weather**| Condições atuais + AQI + previsão de 3 dias + nascer / pôr do sol. Unidades selecionáveis de temperatura (°C / °F), velocidade do vento (km/h / mph / m/s) e altímetro (pressão / umidade). |
| 7     | **Ladder** | **Opt-in** ranking global top-10 ordenado pela melhor dificuldade de share de todos os tempos. As carteiras são exibidas como `primeiras4…últimas4` por privacidade. Desligado por padrão. Os mesmos dados também são publicados na web em [ladder.nmminer.com](https://ladder.nmminer.com/) — veja [Ladder](./ladder.md). |

:::info
A ordem das páginas é idêntica entre as placas; telas pequenas / OLED pulam páginas que não cabem. O NMMiner lembra a página em que você estava e retoma lá após um ciclo de energia (desde a v1.8.20).
:::

## Protetor de tela

Se você deixar o minerador ocioso por tempo suficiente, ele entra em um protetor de tela:

- **Modo imagem** — apresentação de slides de imagens personalizadas enviadas via NM Monitor.
- **Modo preto** — desliga a luz de fundo (ou o contraste OLED ao mínimo) para o menor consumo de energia e **a taxa de hash de pico absoluta**.

Gestos de despertar: clique simples em `BOOT` (ou `USER`), ou toque em uma tela sensível ao toque. Detalhes: [Protetor de Tela](./screen-saver.md).
