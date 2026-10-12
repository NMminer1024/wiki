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

- Taxas de pool (geralmente 0,5%–3% dos seus ganhos).
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
| **Como é a sensação** | Bilhete de loteria | Contra-cheque regular |
| **Frequência de pagamento** | Extremamente rara (talvez nunca) | Frequente (diária/horária) |
| **Tamanho do pagamento por acerto** | Enorme (recompensa total do bloco) | Minúsculo (sua parte do bloco) |
| **Variância** | Altíssima | Baixa |
| **Taxa de hash adequada** | TH/s ou mais | Funciona com qualquer taxa de hash |
| **Taxas** | Nenhuma | Taxa de pool de 0,5%–3% |
| **Compatível com NMMiner?** | Sim (pool SoloBTC) | Sim (pools padrão) |

---

## A pergunta real: "Por que me conectar a uma pool se estou minerando solo?"

É aqui que a maioria dos iniciantes fica confusa. A palavra "pool" faz parecer o oposto de "solo". Vamos desmontar isso camada por camada.

### Três maneiras de minerar — apenas duas mudam a recompensa

Todo minerador precisa de um **nó Bitcoin** em algum lugar do pipeline — software que fala com a rede Bitcoin, rastreia a blockchain e distribui trabalho. A pergunta é: quem executa esse nó, e que tipo de trabalho ele dá a você?

Aqui estão as três configurações, da mais "faça você mesmo" à mais "sem esforço":

| Configuração | Quem executa o nó? | Dificuldade do trabalho | Recompensa se você acertar um bloco |
|---|---|---|---|
| **Solo verdadeiro** (nó próprio) | Você | Dificuldade total da rede | 100% sua |
| **Solo pool** (ex.: SoloBTC) | O operador da pool | Dificuldade total da rede | ~98–100% sua (pequena taxa) |
| **Pool regular** | O operador da pool | Baixa (dificuldade de share) | Dividida entre todos os participantes |

:::info

Observe o padrão: **"Solo" descreve o modelo de recompensa, não quem executa a infraestrutura.** Tanto no solo verdadeiro quanto no solo pool, você fica com (quase) o bloco inteiro se acertar um. Em uma pool regular, a recompensa é sempre dividida.

:::

### Mineração solo verdadeira — a versão "pura"

No sentido mais estrito, mineração solo significa que seu minerador fala diretamente com um **nó completo de Bitcoin rodando na sua própria máquina**. Você baixa toda a blockchain (~600 GB), a mantém sincronizada 24/7, e seu minerador pesquisa contra ela. Acertou um bloco? Você mesmo o transmite. Sem intermediário, sem taxas, sem ninguém em quem confiar.

O problema é a sobrecarga de infraestrutura. Você precisa de um computador com centenas de GB de espaço livre em disco, uma conexão de internet confiável e sempre ativa, e conforto técnico suficiente para manter o nó saudável. Para a maioria dos hobbystas — especialmente qualquer um rodando um pequeno minerador ESP32 — isso simplesmente não vale o esforço.

### Pools solo — recompensas solo, sem a dor de cabeça do nó

É aqui que pools como a SoloBTC entram. Elas executam o nó completo e cuidam de todo o encanamento da blockchain **por você**. Mas, ao contrário de uma pool regular, elas **não** reduzem a dificuldade do trabalho e **não** dividem as recompensas de bloco entre os participantes.

Em vez disso, cada minerador conectado recebe trabalhos com **dificuldade total da rede Bitcoin**. Se seu minerador por acaso encontrar um bloco válido, a pool o transmite, coleta a recompensa e envia praticamente tudo para sua carteira (mantendo apenas uma pequena taxa, normalmente 1–2%).

O insight-chave: **do ponto de vista da recompensa, isso é mineração solo.** Do ponto de vista da infraestrutura, é assistida por pool. Você ganha o bilhete de loteria solo sem precisar rodar um servidor de 600 GB.

### Então por que o solo ainda é "uma loteria"?

Porque a dificuldade de encontrar um bloco **não tem nada a ver com a pool** — ela é definida pela rede Bitcoin. Quer você rode seu próprio nó ou se conecte à SoloBTC, sua taxa de hash de nível KH/s ainda enfrenta as mesmas probabilidades astronômicas: séculos, em média, entre acertos.

A pool te poupa da dor de cabeça da infraestrutura. Ela não pode mudar a matemática.

### Qual é o padrão do NMMiner?

O NMMiner é fornecido com **SoloBTC** como pool padrão — ou seja, modo solo pool de fábrica. É uma maneira divertida e sem configuração de "jogar na loteria" assim que você conecta. Mas se você quer ganhos estáveis e previsíveis, mude para uma pool regular.

:::tip

**Para usuários do NMMiner**: Vá para o Portal de Configuração → aba Pools e substitua a URL padrão SoloBTC por uma URL de pool de mineração tradicional. Veja a página [Pools](../user-guide/pools.md) para instruções passo a passo.

:::

---

## Qual você deve escolher?

| Seu objetivo | Recomendado |
|---|---|
| "Quero ver ganhos regulares e previsíveis" | Pool regular |
| "Quero a emoção de talvez acertar um bloco completo algum dia" | Solo pool (ex.: SoloBTC) |
| "Eu opero uma grande fazenda de mineração e acerto blocos regularmente" | Solo verdadeiro (nó próprio) ou solo pool |
| "Estou aprendendo como a mineração funciona" | Pool regular (feedback instantâneo de share) |

**Resumo**: A confusão geralmente é assim — *"Espera, se é mineração solo, por que estou me conectando a uma 'pool'?"* Aqui está a resposta:

- **"Solo" significa que a recompensa não é compartilhada.** Se você encontrar um bloco, ele é seu — quer você o tenha encontrado através do seu próprio nó ou através de uma solo pool que executa o nó por você.
- **"Pool" (em "solo pool") significa apenas a camada de infraestrutura.** A pool executa o nó Bitcoin para que você não precise de um disco rígido de 600 GB e um servidor 24/7.

Para usuários do NMMiner, a conclusão prática: **pool regular = ganhos pequenos e estáveis que você realmente pode ver; solo pool = um bilhete de loteria com quase nenhum esforço de infraestrutura.** Solo não é "errado" — apenas serve a um objetivo diferente.

---

## Veja também

- [Fundamentos da Mineração de Bitcoin](./bitcoin-mining-basics.md) — os conceitos centrais por trás de tudo nesta página.
- [Pools](../user-guide/pools.md) — como configurar as configurações de pool no NMMiner.
- [Glossário](../reference/glossary.md) — definições de hashrate, share, dificuldade e mais.

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