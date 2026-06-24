---
sidebar_position: 2
title: Gravar Firmware
---

# Gravar Firmware

O NMMiner é distribuído como uma única imagem gravável pelo navegador. Não é necessário `esptool` nem `idf.py`.

## Gravação pelo navegador (recomendado)

1. Abra [flash.nmminer.com](https://flash.nmminer.com) no **Chrome ou Edge**. Firefox / Safari não implementam WebSerial.
2. Conecte sua placa via USB.
3. Escolha sua placa na lista. A ferramenta buscará o firmware correspondente no lançamento oficial do GitHub.
4. Clique em **Install**, escolha a porta serial e aguarde "Flash complete".
5. A ferramenta solicitará que você **adquira uma licença**. Após a compra, ela exibe sua string de licença — copie-a. Você precisará dela uma vez na página de ativação.

:::warning
Se sua placa não entrar automaticamente no modo de download, mantenha `BOOT` pressionado enquanto pressiona `RESET` e depois solte.
:::