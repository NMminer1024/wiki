---
sidebar_position: 3
title: Portal de Configuração
---

# Portal de Configuração

O portal de configuração é uma pequena página web no estilo de portal cativo servida pelo próprio minerador enquanto ele está no modo AP.

## Quando o portal é exibido

- **Primeira inicialização** após a gravação.
- **Falha de reconexão** — se o minerador não conseguir alcançar o WiFi salvo em ~15 segundos, ele retorna automaticamente ao modo AP.
- **Forçar manualmente** — pressione longamente o botão de configuração (veja [Botões](./buttons.md)).

## Como acessá-lo

1. Abra as configurações de WiFi no seu celular ou notebook.
2. Conecte-se ao hotspot aberto **`nmap-2.4g`**.
3. No celular, um navegador de portal cativo abre automaticamente. No PC, abra `http://192.168.4.1`.

Você verá o formulário de configuração descrito em [Primeira Configuração](../getting-started/first-configuration.md).

## Comportamento ao Salvar

Pressionar **Save** grava as novas configurações, aguarda a sincronização do armazenamento do dispositivo (10-15 s) e então reinicia. **Não desligue durante esta janela** — deixe-o reiniciar sozinho.