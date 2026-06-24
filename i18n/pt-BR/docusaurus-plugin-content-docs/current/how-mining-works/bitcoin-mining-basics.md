---
sidebar_position: 1
title: Fundamentos da Mineração de Bitcoin
---

# Fundamentos da Mineração de Bitcoin

Antes de mergulhar em como o NMMiner participa, aqui está o **modelo mental de uma tela** da mineração de Bitcoin.

## O trabalho

Os mineradores de Bitcoin competem para encontrar um número — um **nonce** — que, quando combinado com o restante do cabeçalho do bloco e processado pela função de hash SHA-256 **duas vezes** (também conhecido como **SHA-256d**), produz uma saída que é *menor* do que um valor alvo definido pela rede.

É só isso. Toda a indústria é um único problema de busca:

> *Encontre um valor de 32 bits tal que `sha256(sha256(cabeçalho_com_esse_valor))` seja menor que o alvo da rede.*

## Dificuldade, em linguagem simples

- **Dificuldade da rede** — quão difícil a *rede* torna para alguém ganhar o próximo bloco. Hoje, isso é astronomicamente alto; você precisaria de um galpão inteiro de ASICs para encontrar um bloco em um tempo razoável.
- **Dificuldade da pool** — quão difícil a *pool* pede que você procure. As pools definem isso muito mais baixo para que mineradores pequenos produzam **shares** (prova de que você realmente está procurando).
- **Share** — um resultado de hash que atende à dificuldade da pool (mas não necessariamente à dificuldade da rede). As pools creditam você pelas shares.

A taxa de hash do NMMiner está na faixa de **centenas de KH/s**, então ele se comunica com pools que definem a dificuldade de share muito baixa — frequentemente uma fração de 1.

## Pagamento da mineração, em linguagem simples

Quando uma pool encontra um hash vencedor (entre todos os seus mineradores conectados), ela reivindica a recompensa do bloco e a distribui de acordo com a contagem de shares de cada participante. Mineradores pequenos recebem pagamentos pequenos, mas os recebem *diretamente em sua carteira* nos tipos de pool aos quais o NMMiner se conecta.

## DigiByte (DGB) funciona da mesma forma

O DGB também usa SHA-256d, então a matemática é idêntica — apenas os parâmetros de rede e as pools diferem. O NMMiner suporta tanto BTC quanto DGB sem alterar o firmware.

## O que o NMMiner faz

O NMMiner:

1. Conecta-se a uma pool Stratum que você configura (o padrão é a própria pool SoloBTC do NMMiner).
2. Recebe um fluxo de **jobs** da pool.
3. Pesquisa o espaço de nonce o mais rápido que o chip permite.
4. Envia shares válidas de volta para a pool.
5. Mostra a taxa, o share mais recente e seus melhores resultados da sessão e de todos os tempos.

As próximas duas páginas explicam o protocolo e o fluxo de dados dentro do minerador.