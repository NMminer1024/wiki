---
sidebar_position: 4
title: Primeira Configuração
---

# Primeira Configuração

Em uma placa recém-gravada, o NMMiner entra no **modo AP / configuração** e expõe uma página web onde você define WiFi, pool, carteira e opções de display.

## Campos

| Campo                        | Padrão                                                 | Finalidade                                                                             |
| ---------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **WiFi SSID**                | `NMTech-2.4G`                                          | Nome da sua rede de 2,4 GHz.                                                           |
| **Senha WiFi**               | `NMMiner2048`                                          | Senha WPA / WPA2.                                                                      |
| **URL da pool (principal)**  | `stratum+tcp://solobtc.nmminer.com:3333`               | Pool SoloBTC do próprio NMMiner. Substitua apenas se realmente precisar.               |
| **URL da pool (contingência)** | `stratum+tcp://au.solobtc.nmminer.com:3333`          | Contingência da Ásia-Pacífico do NMMiner. Usada se a principal estiver inacessível.    |
| **Carteira / Nome do worker** | Carteira de demonstração pré-preenchida                | Seu endereço de pagamento BTC, opcionalmente seguido de `.nomeDoWorker`. **Altere isso!** |
| **Atualização da interface** | Específico da placa                                    | Menor = atualização de tela mais rápida, taxa de hash ligeiramente menor. Maior = taxa de hash máxima, interface mais lenta. |
| **Brilho da tela**           | 100 %                                                  | 0–100 %.                                                                               |
| **Fuso horário**             | `+8`                                                   | Float aceito (ex.: `8`, `5.5`, `-3.5`). Intervalo: -13,5 ~ +13,5.                      |
| **Formato de hora**          | 24 h                                                   | 12 / 24 horas.                                                                         |
| **LED**                      | Específico da placa                                    | Ativar / desativar o LED de status da placa.                                           |

Quando você pressiona **Save**, o minerador leva de 10 a 15 segundos para gravar na memória flash. **Não reinicie manualmente.** Ele reiniciará sozinho.

:::tip Defina sua própria carteira
O NMMiner é pré-configurado para minerar para um endereço de demonstração para que a placa "funcione de imediato". Substitua a carteira pelo seu próprio endereço BTC antes de fazer qualquer coisa séria — esse endereço de demonstração é compartilhado por todos os dispositivos novos.
:::

## Forçar reconfiguração

Se você precisar alterar as configurações após o minerador já estar online:

- **Placa com um botão** → pressione longamente `BOOT`.
- **Placa com dois botões** → pressione longamente `USER`.
- **Placa com tela sensível ao toque** → pressione longamente a tela por 10 segundos.

O minerador reinicia no modo AP e expõe o portal cativo novamente. Comportamento detalhado: [Botões](../user-guide/buttons.md).

## Atualizações ao vivo sem reinicialização

Algumas configurações são aplicadas **instantaneamente** — sem necessidade de salvar novamente e reiniciar:

- Brilho da tela
- Rotação da tela
- LED ligado/desligado
- Fuso horário
- Modo do protetor de tela (imagem/preto)

Você pode alterá-las no [NM Monitor](../user-guide/nm-monitor.md) e ver o efeito imediatamente.