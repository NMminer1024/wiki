---
sidebar_position: 5
title: Atualização de Firmware
---

# Atualização de Firmware

A atualização é igual à primeira gravação: reabra a ferramenta de gravação no navegador, escolha sua placa, instale.

## Etapas

1. Abra [flash.nmminer.com](https://flash.nmminer.com) no Chrome ou Edge.
2. Escolha o perfil da placa.
3. Clique em **Install**, escolha a porta serial, aguarde a conclusão.

Após a atualização, você **não precisa reativar a licença**. As configurações (SSID / pool / carteira) sobrevivem à atualização.

## Acompanhando a versão do firmware remotamente

A versão atual do firmware é reportada por cada minerador via [`GET /api/system/info`](../api/system.md). Combine isso com a descoberta do [Swarm](./swarm.md) e você poderá ver rapidamente quais mineradores na rede local ainda precisam de atualização.

## O que muda entre as versões

Veja o [registro de lançamentos do GitHub](https://github.com/NMminer1024/NMMiner#release-log) para o registro completo de alterações. Atualizações de versão principal (ex.: **v1.x → v2.0**) introduziram melhorias significativas no NM Monitor e no Swarm — versões mais antigas não são interoperáveis com os protocolos Swarm mais recentes, então é melhor manter toda a sua frota na mesma série menor.