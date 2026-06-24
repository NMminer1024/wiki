---
sidebar_position: 1
title: Visão Geral da API
---

# Visão Geral da API

Todo dispositivo NMMiner executa um servidor HTTP na **porta 80** que expõe uma API completa no estilo REST. A mesma API é utilizada por:

- A interface do [NM Monitor](../user-guide/nm-monitor.md) no navegador.
- O agregador [Swarm](../user-guide/swarm.md).
- Qualquer pessoa — você, seu dashboard, um plugin do Grafana, um script Python — que queira ler o status ou enviar configurações.

> ✅ Esta página documenta o **contrato público**: caminhos, métodos, corpos de requisição, corpos de resposta, códigos de status.
> ❌ Ela **não** documenta a implementação. Trate o dispositivo como uma caixa preta acessível via HTTP.

## URL Base
