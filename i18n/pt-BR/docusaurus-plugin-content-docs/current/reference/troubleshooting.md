---
sidebar_position: 4
title: Solução de Problemas
---

# Solução de Problemas

## A placa não aparece na ferramenta de gravação

- **Reconecte o cabo USB algumas vezes** — o seletor WebSerial pode não detectar dispositivos na primeira conexão a quente, especialmente logo após a instalação do driver.
- Use um cabo USB de **dados** (não apenas de alimentação).
- Experimente uma porta USB diferente; alguns hubs não transmitem CDC.
- No Windows, instale o driver **CP210x** ou **CH340** dependendo do chip de ponte da sua placa.
- Mantenha `BOOT` pressionado enquanto pressiona `RESET` para forçar o modo de download.

## Travado em Carregando

- Confirme que o WiFi é de **2,4 GHz** (a maioria dos chips ESP32 não funciona com 5 GHz).
- Aguarde 15 s. Se não conseguir conectar, deve retornar automaticamente ao modo AP.

## AP `nmap-2.4g` não está visível

- Desligue e ligue a placa novamente.
- Mantenha o botão de configuração pressionado por 5 s (veja [Botões](../user-guide/buttons.md)).

## O portal cativo aparece, mas Salvar não funciona

- Aguarde a janela completa de 15 s — a sincronização do armazenamento é intencionalmente lenta.
- Se a página nunca retornar, desligue e ligue novamente e tente de novo.

## Pool travada em "Conectando"

- Verifique a URL e a porta da pool.
- Tente `stratum+tcp://` em vez de `stratum+ssl://` (ou vice-versa).
- Tente a [pool de contingência](../user-guide/pools.md).

## A taxa de hash está muito abaixo da ficha técnica

- A configuração de **atualização da interface** é pesada em CPUs pequenas. Tente reduzi-la (valor mais alto no formulário).
- Use o protetor de tela **Black** para eliminar completamente o custo de redesenho do display.
- Certifique-se de que sua fonte de alimentação pode sustentar 500 mA — uma porta USB instável causará quedas de tensão.

## Todas as shares estão sendo rejeitadas

- A dificuldade da pool está definida muito alta. Mude para a pool oficial [SoloBTC](https://solobtc.nmminer.com) do NMMiner (ou a pool de contingência oficial).
- Verifique o campo da carteira — muitas pools rejeitam endereços de carteira formatados incorretamente. Veja [Perguntas Frequentes](./faq) para formatos válidos de endereço Bitcoin.

## Não consigo acessar o NM Monitor

- Certifique-se de que você e o minerador estão no **mesmo WiFi**.
- Verifique o IP na página Miner do dispositivo — tente acessá-lo diretamente.
- Desative qualquer **VPN** no seu celular/PC; algumas VPNs bloqueiam o tráfego da rede local.
- Se seu roteador usa **isolamento de AP**, os dispositivos não conseguem se alcançar — desative esse modo.

## O menu Swarm mostra menos mineradores do que eu tenho

- Clique em **Re-scan** (ou recarregue a página).
- As varreduras da rede local abrangem apenas uma sub-rede /24. Mineradores em uma sub-rede diferente não aparecerão.
- Certifique-se de que o minerador ausente está na **página Miner** de sua tela — a thread de descoberta só é executada nessa página.