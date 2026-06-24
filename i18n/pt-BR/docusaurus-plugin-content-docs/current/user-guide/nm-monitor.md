---
sidebar_position: 8
title: NM Monitor
---

# NM Monitor

O **NM Monitor** é um aplicativo web que reside **dentro de cada dispositivo NMMiner**. Não há nada para instalar no seu celular ou PC — abra o IP do minerador em qualquer navegador e você estará dentro. Todo o monitoramento e gerenciamento da frota é feito através do NM Monitor e seu menu [Swarm](./swarm.md).

## Abrindo o NM Monitor

1. Conecte seu celular ou PC ao **mesmo WiFi** do minerador.
2. Encontre o IP do minerador — a maneira mais fácil é verificar a **página Miner** na tela do dispositivo (o IP é exibido na barra de status). Alternativamente, procure-o na tabela DHCP do seu roteador.
3. Abra `http://<ip-do-minerador>/` no **Chrome, Edge, Safari ou Firefox**. Não há porta para lembrar — porta 80.
4. A página inicial carrega automaticamente.

:::tip
Adicione aos favoritos `http://<nome-de-host-do-minerador>/` (ex.: `http://nm-cyd-c5-ab12cd/`) — a maioria dos roteadores domésticos permite acessar o minerador pelo nome de host também.
:::

## O que você pode fazer no NM Monitor

| Seção               | Finalidade                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Dashboard**        | Taxa de hash ao vivo, shares aceitas / rejeitadas, dificuldade da pool, tempo de atividade, RSSI, heap livre, temperatura (onde suportado). |
| **Swarm**            | Agregação em toda a rede local: veja todos os NMMiner no mesmo WiFi, some a taxa de hash, faça ping em um minerador específico para fazê-lo piscar. Veja [Swarm](./swarm.md). |
| **Network**          | Alterar nome de host, SSID WiFi, senha WiFi.                                                                                           |
| **Mining**           | URL da pool principal / contingência, endereço da carteira, senha da pool.                                                              |
| **Time**             | Fuso horário, formato de hora (12 / 24 h), formato de data.                                                                             |
| **Preferences**      | Brilho da tela, rotação, ativar LED, tempo do protetor de tela, modo do protetor de tela (imagem / preto), opt-in do [Ladder](./ladder.md). |
| **Market**           | Escolher a moeda principal e a lista de observação exibida na página Preço.                                                             |
| **Weather**          | Definir cidade / lat / lon e unidades usadas pela página Clima.                                                                         |
| **Screensaver**      | Enviar PNGs personalizados que são convertidos no navegador e enviados ao minerador.                                                    |
| **System**           | Versão do firmware, placa, heap livre, botão **Restart**.                                                                               |
| **API Doc**          | Referência ao vivo da API HTTP (também publicada em `/api-doc`).                                                                        |

## Leia de qualquer lugar na sua rede local

O NM Monitor define `Access-Control-Allow-Origin: *` em todos os endpoints da API. Isso significa que uma página de navegador servida de qualquer origem pode ler o status do minerador — útil para construir seus próprios dashboards. O conjunto completo de endpoints está documentado na [Referência da API](../api/overview.md).