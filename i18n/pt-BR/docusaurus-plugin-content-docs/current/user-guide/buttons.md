---
sidebar_position: 1
title: Botões e Toque
---

# Botões e Toque

Placas diferentes têm um botão (`BOOT`), dois (`BOOT` + `USER`) ou uma tela sensível ao toque. O NMMiner expõe gestos consistentes em todos os três tipos.

## Placas com um botão

| Gesto                | Ação                                                          |
| -------------------- | ------------------------------------------------------------- |
| Clique único         | Acordar a tela (em placas com display).                       |
| Clique duplo         | Mudar para a próxima página da tela.                          |
| Pressão longa        | Entrar no modo de configuração do minerador (forçar modo AP). |

## Placas com dois botões

| Botão   | Gesto                | Ação                                                                 |
| ------- | -------------------- | -------------------------------------------------------------------- |
| `BOOT`  | Clique único         | Acordar a tela.                                                      |
| `BOOT`  | Clique duplo         | Acordar a tela.                                                      |
| `BOOT`  | Pressão longa        | Limpar todo o estado armazenado do NVS (se ativado na compilação).   |
| `USER`  | Clique único         | Acordar a tela.                                                      |
| `USER`  | Clique duplo         | Mudar para a próxima página da tela.                                 |
| `USER`  | Pressão longa        | Entrar no modo de configuração do minerador (forçar modo AP).        |

## Placas com tela sensível ao toque

Desde a v2.0.01, placas com toque (NM-TV-154, CYD 2.4 / 2.8 / 3.5, Waveshare 3.5 touch etc.) suportam gestos **diretamente na tela**:

| Gesto                               | Ação                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------ |
| Toque                               | Mudar para a próxima página da tela (também acorda a tela se estiver adormecida). |
| **Pressão longa de 10 segundos**    | Entrar no modo de configuração do minerador (forçar modo AP).            |

Veja [Telas](./screens.md) para a ordem das páginas e [Portal de Configuração](./configuration-portal.md) para o que acontece após uma pressão longa.