---
sidebar_position: 1
title: Início Rápido
---

# Início Rápido

Coloque uma placa ESP32 nova para minerar em **cerca de 10 minutos**.

## O que você precisa

- Uma [placa oficialmente suportada](../hardware/overview.md) (ESP32-D0 / S3 / C3 / C5).
- Um cabo USB e um PC com **Chrome** ou **Edge** (para a ferramenta de gravação baseada em navegador).
- Uma rede WiFi de 2,4 GHz.

Você **não precisa de uma carteira** para começar — o NMMiner já vem pré-configurado com nossa própria pool SoloBTC ([solobtc.nmminer.com](https://solobtc.nmminer.com)) e uma carteira de demonstração temporária. Substitua a carteira pelo seu próprio endereço BTC quando estiver pronto.

## As cinco etapas

1. **Gravar o firmware** — abra [flash.nmminer.com](https://flash.nmminer.com), escolha sua placa, clique em *Install*. Veja [Gravar Firmware](./flash-firmware.md).
2. **Adquirir e ativar a licença** — a ferramenta de gravação orientará você na compra de uma licença; em seguida, cole a string de licença na caixa de ativação. Veja [Ativar Licença](./activate-licence.md).
3. **Conecte-se ao AP `nmap-2.4g`** com seu celular. O portal cativo abrirá automaticamente. Em PCs: acesse `http://192.168.4.1` manualmente.
4. **Configure** o WiFi (obrigatório) e a carteira (recomendado) na página web e pressione **Save**. O minerador reinicia em ~15 segundos. Veja [Primeira Configuração](./first-configuration.md).
5. **Observe-o minerar** — a página Miner na tela mostra a taxa de hash ao vivo, shares aceitas e a dificuldade da pool. Acesse [solobtc.nmminer.com](https://solobtc.nmminer.com) para ver seu worker aparecer no dashboard da pool.

:::tip
Na primeira inicialização, o minerador tentará se reconectar ao último WiFi conhecido por 15 segundos. Se falhar, ele retorna automaticamente ao modo AP / configuração.
:::