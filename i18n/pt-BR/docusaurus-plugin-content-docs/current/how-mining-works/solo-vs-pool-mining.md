---
sidebar_position: 4
title: Mineração Solo vs Pool
---

# Mineração Solo vs Pool — Qual é a Melhor para Você?

Se você é novo na mineração, provavelmente já ouviu dois termos sendo usados: **mineração solo** e **mineração em pool**. São duas estratégias diferentes para ganhar recompensas de bloco, e escolher a certa faz muita diferença. Vamos explicá-las em linguagem simples.

---

## A analogia da loteria

Imagine que a mineração de Bitcoin é uma enorme loteria global que sorteia um vencedor aproximadamente a cada 10 minutos.

- **O prêmio**: 3,125 BTC (a recompensa atual do bloco) mais taxas de transação.
- **O bilhete**: um hash válido que atende à dificuldade da rede.
- **As probabilidades**: proporcionais à sua taxa de hash dividida pela taxa de hash total da rede.

Com essa imagem em mente, veja como as duas estratégias se diferenciam.

---

## Mineração solo — comprando bilhetes sozinho

Você minera sozinho. Seu minerador se comunica diretamente com um nó completo de Bitcoin (ou uma pool especial de mineração solo que não divide recompensas). Você procura blocos de forma independente.

Se seu minerador encontrar um bloco válido, **você fica com 100% da recompensa**. Sem divisão, sem taxas de pool.

**Parece ótimo, certo? Aqui está o problema:**

> Com uma taxa de hash típica do NMMiner (~centenas de KH/s), o tempo médio para encontrar um bloco na rede Bitcoin é medido em **séculos**. Você está essencialmente jogando em uma loteria onde talvez nunca ganhe durante sua vida.

### Prós

- Você fica com a recompensa **inteira** do bloco (3,125+ BTC) se encontrar um.
- Independência total — nenhum operador de pool em quem confiar.
- Sem taxas de pool.

### Contras

- **Variância extrema**: você pode minerar por anos e não ganhar nada.
- Sem ciclo de feedback — você não sabe se sua configuração funciona até (talvez) encontrar um bloco.
- Requer taxa de hash massiva para ser prático em redes principais.

### Quem deve minerar solo?

- Operações de grande escala com taxa de hash suficiente para encontrar blocos regularmente.
- Hobbystas que tratam como um bilhete de loteria e não se importam em ganhar zero.

---

## Mineração em pool — juntando-se a um bolão

Você se junta a um grupo de mineradores. Todos trabalham juntos, e quando **qualquer um** na pool encontra um bloco, a recompensa é dividida entre todos os participantes com base em quanto trabalho cada um contribuiu (medido em **shares**).

Em vez de esperar séculos por um bloco, você ganha pagamentos pequenos e **regulares** — às vezes diários, às vezes a cada hora.

### Como as shares funcionam

A pool define uma **dificuldade de pool** muito menor que a dificuldade da rede. Dessa forma, até mesmo um minerador pequeno como o NMMiner pode enviar *shares* válidas a cada poucos segundos ou minutos. Essas shares provam "eu realmente estou procurando". Quando um bloco é encontrado, a pool conta as shares de todos para calcular os pagamentos.

### Prós

- **Renda previsível e regular** — você vê resultados imediatamente.
- Funciona com **qualquer taxa de hash**, não importa quão pequena.
- Você recebe feedback de que seu hardware está funcionando corretamente.
- Menor risco — seus ganhos se suavizam ao longo do tempo.

### Contras

- Taxas da pool (geralmente 0,5%–3% dos seus ganhos).
- Você precisa confiar que o operador da pool pagará de forma justa.
- Seus ganhos por bloco são minúsculos (mas se acumulam).

### Quem deve minerar em pool?

- **Todos com taxa de hash pequena a média** — o que inclui todos os usuários do NMMiner.
- Qualquer pessoa que queira ganhos consistentes e previsíveis.
- Iniciantes que querem ver resultados e aprender.

---

## Comparação lado a lado

| | Mineração Solo | Mineração em Pool |
|---|---|---|
| **Como se sente** | Bilhete de loteria | Salário regular |
| **Frequência de pagamento** | Extremamente rara (talvez nunca) | Frequente (diária/a cada hora) |
| **Tamanho do pagamento por acerto** | Enorme (recompensa completa do bloco) | Muito pequeno (sua parte do bloco) |
| **Variância** | Altíssima | Baixa |
| **Taxa de hash adequada** | TH/s ou mais | Funciona com qualquer taxa de hash |
| **Taxas** | Nenhuma | 0,5%–3% de taxa da pool |
| **Compatível com NMMiner?** | Sim (pool SoloBTC) | Sim (pools padrão) |

---

## A verdadeira pergunta: "Por que se conectar a uma pool se estou minerando solo?"

É aqui que a maioria dos novatos se confunde. A palavra "pool" faz parecer o oposto de "solo". Vamos desempacotar isso camada por camada.