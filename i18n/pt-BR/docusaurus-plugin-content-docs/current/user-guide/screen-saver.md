---
sidebar_position: 6
title: Protetor de Tela
---

# Protetor de Tela

Após um período de inatividade configurável, o display entra no modo de protetor de tela.

## Modos

| Modo     | Efeito                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `IMAGE`  | Apresentação de slides de imagens personalizadas enviadas via NM Monitor. Transição suave de fade-in / fade-out. |
| `BLACK`  | Desliga a luz de fundo (OLEDs vão para o contraste mínimo). Economiza energia e **proporciona a taxa de hash máxima absoluta**. |

Altere os modos ao vivo na seção **Preferences** do [NM Monitor](./nm-monitor.md) — sem reinicialização.

## Imagens personalizadas

A página **Screensaver** do NM Monitor permite enviar arquivos PNG / JPG comuns diretamente do seu navegador. O navegador converte cada imagem para o formato compacto `.ss` do NMMiner (RGB565 + RLE) e a envia para a pasta `/ss/` do dispositivo.

- As imagens são automaticamente ajustadas à **resolução atual da tela**.
- Cada arquivo `.ss` tem no máximo **200 KB**.
- O dispositivo gerencia o espaço em disco — se o sistema de arquivos ficar cheio, o protetor de tela mais antigo é sobrescrito.

Quer programar o envio? Veja [API › Envio de Protetor de Tela](../api/screensaver-upload.md).

:::tip
Para a taxa de hash mais alta possível, escolha o modo **Black** — a atualização do display consome ciclos de CPU que poderiam ser usados para hashing.
:::

## Acordando

| Tipo de placa      | Gesto para acordar                          |
| ------------------ | ------------------------------------------- |
| Apenas botões      | Clique único em qualquer botão.             |
| Display sensível ao toque | Toque em qualquer lugar da tela.     |