---
sidebar_position: 3
title: Perguntas Frequentes
---

# Perguntas Frequentes

## O NMMiner algum dia encontrará um bloco Bitcoin sozinho?

Matematicamente, sim — com a mesma probabilidade de um bilhete de loteria. Na prática, não. A questão é a **diversão** (e apoiar a rede), não o pagamento.

## Quanta eletricidade ele consome?

A maioria das placas suportadas consome menos de 1 W. Mesmo a R$0,90 /kWh, isso fica bem abaixo de R$1,00 por mês.

## Qual pool o NMMiner usa por padrão?

O NMMiner é pré-configurado para sua própria pool SoloBTC:

- Principal: `stratum+tcp://solobtc.nmminer.com:3333`
- Contingência: `stratum+tcp://au.solobtc.nmminer.com:3333`

Você **só precisa alterar o endereço da carteira** para seu próprio endereço BTC. As URLs da pool geralmente estão boas como estão.

## Posso usar uma pool diferente?

Sim — qualquer uma que fale Stratum v1 funcionará. Veja a [Lista de Pools](./pool-list.md) para opções comunitárias de SoloBTC e DGB. Note que grandes pools comerciais com dificuldade mínima de share alta rejeitarão todas as shares — mantenha-se nas pools oficiais [SoloBTC](https://solobtc.nmminer.com) do NMMiner ou endpoints no estilo solo.

## O NMMiner pode minerar algo além de Bitcoin?

Sim — **DigiByte (DGB)** também é suportado. O DGB usa o mesmo algoritmo SHA-256d, então funciona no mesmo firmware. Basta apontar a URL da pool para uma pool DGB e usar um endereço de carteira DGB.

## Preciso de uma carteira no dispositivo?

Não. Você só precisa de um **endereço de pagamento**. A pool envia as recompensas diretamente para qualquer endereço BTC / DGB que você configurar.

## Minha tela acorda sozinha a cada poucos segundos.

Isso é uma atualização de fundo inofensiva. Use o modo de protetor de tela **Black** se quiser zero atividade no display (e taxa de hash máxima).

## Posso executar dois mineradores no mesmo WiFi?

Sim. O menu **Swarm** do NM Monitor descobre automaticamente todos os NMMiner na mesma rede local — até 255 dispositivos por sub-rede /24. Veja [Swarm](../user-guide/swarm.md).

## Meu minerador está travado na tela de Carregamento / nunca se conecta à pool

Percorra esta lista de verificação:

1. **O WiFi deve ser de 2,4 GHz.** A maioria dos chips ESP32 não suporta 5 GHz. Se seu WiFi doméstico tiver ambas as bandas sob o mesmo SSID, separe-as temporariamente ou conecte-se explicitamente à de 2,4 GHz.
2. **Verifique o endereço da carteira.** Um erro de digitação aqui significa que a pool recusa o worker. Um endereço Bitcoin válido começa com:
   - `bc1q...` — SegWit Nativo (mais comum atualmente)
   - `bc1p...` — Taproot
   - `1...`    — P2PKH Legado
   - `3...`    — P2SH (multisig / SegWit encapsulado)

   Qualquer outra coisa **não** é um endereço BTC válido — verifique se você copiou a string completa.
3. **Verifique a URL da pool.** De fábrica, o NMMiner é pré-configurado com `stratum+tcp://solobtc.nmminer.com:3333` e funciona sem nenhuma alteração. Se você trocou de pool, a URL deve se parecer com `stratum+tcp://host:port` (ou `stratum+ssl://host:port` para TLS). Veja a [Lista de Pools](./pool-list.md) para endpoints confiáveis.
4. **Dificuldade da pool.** Grandes pools comerciais que exigem uma dificuldade mínima de share alta rejeitarão todas as shares do NMMiner. Mantenha-se nas pools oficiais [SoloBTC](https://solobtc.nmminer.com) do NMMiner.
5. **Fonte de alimentação.** Uma porta USB instável pode causar quedas de tensão que parecem um travamento. Experimente um cabo diferente + fonte de 5 V/1 A.

Se nada disso resolver, o minerador deve retornar ao modo AP após ~15 s — reconecte-se ao `nmap-2.4g` e verifique novamente os valores.

## Existe uma API pública?

Sim — cada dispositivo expõe uma API HTTP documentada na porta 80. Veja [Referência da API](../api/overview.md).

## O código-fonte está disponível?

O firmware do NMMiner é de código fechado. A API HTTP em cada dispositivo é a superfície de integração suportada. A ferramenta CLI de gravação complementar e os frontends web da pool SoloBTC são públicos.

## O que a página Ladder faz?

É um ranking **opcional** dos 10 melhores globais, classificado pela melhor dificuldade de share de todos os tempos produzida pelos mineradores participantes. As carteiras são exibidas no formato `primeiros4…últimos4` para privacidade. Desativado por padrão — ative na seção **Preferences** do NM Monitor. A visualização pública na web está em [ladder.nmminer.com](https://ladder.nmminer.com/) — veja [Ladder](../user-guide/ladder.md) para a história completa.