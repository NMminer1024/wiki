---
sidebar_position: 4
title: Minería solo vs pool
---

# Minería solo vs pool — ¿Cuál es la adecuada para usted?

Si es nuevo en la minería, probablemente haya oído dos términos: **minería solo** y **minería en pool**. Son dos estrategias diferentes para ganar recompensas de bloque, y elegir la correcta importa mucho. Vamos a desglosarlas en lenguaje sencillo.

---

## La analogía de la lotería

Imagine que la minería de Bitcoin es una lotería global masiva que sortea un ganador aproximadamente cada 10 minutos.

- El **premio**: 3,125 BTC (la recompensa de bloque actual) más las comisiones de transacción.
- El **billete**: un hash válido que cumple la dificultad de red.
- Las **probabilidades**: proporcionales a su tasa de hash dividida por la tasa de hash total de la red.

Con esa imagen en mente, así es como difieren las dos estrategias.

---

## Minería solo — comprar billetes por su cuenta

Usted mina solo. Su minero se comunica directamente con un nodo completo de Bitcoin (o un pool especial de minería solo que no divide recompensas). Busca bloques de forma independiente.

Si su minero encuentra un bloque válido, **usted recibe el 100% de la recompensa**. Sin reparto, sin comisiones de pool.

**Suena genial, ¿verdad? Aquí está la pega:**

> Con una tasa de hash típica de NMMiner (~cientos de KH/s), el tiempo medio para encontrar un bloque en la red Bitcoin se mide en **siglos**. Básicamente está jugando a una lotería donde quizás nunca gane en su vida.

### Ventajas

- Se queda con la recompensa de bloque **completa** (3,125+ BTC) si acierta uno.
- Independencia total — sin operador de pool en quien confiar.
- Sin comisiones de pool.

### Desventajas

- **Varianza extrema**: podría minar durante años y no ganar nada.
- Sin bucle de retroalimentación — no sabe si su configuración funciona hasta que (quizás) acierte un bloque.
- Requiere una tasa de hash masiva para ser práctico en redes principales.

### ¿Quién debería minar en solo?

- Operaciones a gran escala con suficiente tasa de hash para acertar bloques regularmente.
- Aficionados que lo tratan como un billete de lotería y no les importa ganar cero.

---

## Minería en pool — unirse a un sindicato de lotería

Se une a un grupo de mineros. Todos trabajan juntos, y cuando **alguien** en el pool encuentra un bloque, la recompensa se divide entre todos los participantes según cuánto trabajo contribuyó cada uno (medido en **shares**).

En lugar de esperar siglos por un bloque, usted gana **pagos regulares** pequeños — a veces diarios, a veces cada hora.

### Cómo funcionan las shares

El pool establece una **dificultad de pool** mucho más baja que la dificultad de red. De esta manera, incluso un minero pequeño como NMMiner puede enviar *shares* válidas cada pocos segundos o minutos. Estas shares demuestran "realmente estoy buscando". Cuando se encuentra un bloque, el pool cuenta las shares de todos para calcular los pagos.

### Ventajas

- **Ingresos predecibles y regulares** — ve resultados inmediatamente.
- Funciona con **cualquier tasa de hash**, sin importar cuán pequeña sea.
- Obtiene retroalimentación de que su hardware funciona correctamente.
- Menor riesgo — sus ganancias se suavizan con el tiempo.

### Desventajas

- Comisiones del pool (normalmente 0,5%–3% de sus ganancias).
- Debe confiar en que el operador del pool pague justamente.
- Sus ganancias por bloque son pequeñas (pero se acumulan).

### ¿Quién debería minar en pool?

- **Cualquiera con tasa de hash pequeña a media** — lo que incluye a todos los usuarios de NMMiner.
- Cualquiera que quiera ganancias consistentes y predecibles.
- Principiantes que quieren ver resultados y aprender.

---

## Comparación lado a lado

| | Minería solo | Minería en pool |
|---|---|---|
| **Cómo se siente** | Billete de lotería | Cheque de pago regular |
| **Frecuencia de pago** | Extremadamente raro (quizás nunca) | Frecuente (diario/cada hora) |
| **Tamaño de pago por acierto** | Enorme (recompensa de bloque completa) | Pequeño (su parte del bloque) |
| **Varianza** | Altísima | Baja |
| **Tasa de hash adecuada** | TH/s o más | Funciona con cualquier tasa de hash |
| **Comisiones** | Ninguna | 0,5%–3% de comisión del pool |
| **¿Compatible con NMMiner?** | Sí (pool SoloBTC) | Sí (pools estándar) |

---

## La pregunta real: "¿Por qué conectarme a un pool si estoy minando solo?"

Aquí es donde la mayoría de los novatos se confunden. La palabra "pool" hace que suene como lo opuesto a "solo". Vamos a desgranarlo capa por capa.

### Tres formas de minar — solo dos cambian la recompensa

Cada minero necesita un **nodo Bitcoin** en algún lugar del pipeline — software que habla con la red Bitcoin, rastrea la cadena de bloques y reparte trabajo. La pregunta es: ¿quién ejecuta ese nodo y qué tipo de trabajo le da?

Aquí están las tres configuraciones, de la más DIY a la más manos libres:

| Configuración | ¿Quién ejecuta el nodo? | Dificultad de trabajo | Recompensa si acierta un bloque |
|---|---|---|---|
| **Solo verdadero** (nodo propio) | Usted | Dificultad de red completa | 100% suyo |
| **Pool solo** (p. ej. SoloBTC) | El operador del pool | Dificultad de red completa | ~98–100% suyo (pequeña comisión) |
| **Pool regular** | El operador del pool | Baja (dificultad de share) | Repartida entre todos los participantes |

:::info

Note el patrón: **"Solo" describe el modelo de recompensa, no quién ejecuta la infraestructura.** Tanto en minería solo verdadera como en pool solo, usted obtiene (casi) todo el bloque si acierta uno. En un pool regular, la recompensa siempre se reparte.

:::

### Minería solo verdadera — la versión "pura"

En el sentido más estricto, minería solo significa que su minero se comunica directamente con un **nodo completo de Bitcoin ejecutándose en su propia máquina**. Descarga toda la cadena de bloques (~600 GB), la mantiene sincronizada 24/7, y su minero busca contra ella. ¿Acierta un bloque? Lo transmite usted mismo. Sin intermediarios, sin comisiones, sin nadie en quien confiar.

La pega es la sobrecarga de infraestructura. Necesita un ordenador con cientos de GB de espacio libre en disco, una conexión a Internet fiable siempre activa y suficiente soltura técnica para mantener el nodo saludable. Para la mayoría de los aficionados — especialmente cualquiera que ejecute un pequeño minero ESP32 — esto simplemente no vale la pena.

### Pools solo — recompensas solo, sin el dolor de cabeza del nodo

Aquí es donde encajan pools como SoloBTC. Ellos ejecutan el nodo completo y manejan toda la fontanería de la cadena de bloques **por usted**. Pero a diferencia de un pool regular, **no** reducen la dificultad del trabajo y **no** reparten las recompensas de bloque entre los participantes.

En su lugar, cada minero conectado recibe trabajos a **dificultad de red Bitcoin completa**. Si su minero encuentra casualmente un bloque válido, el pool lo transmite, recoge la recompensa y envía prácticamente todo a su billetera (quedándose solo con una pequeña comisión, típicamente 1–2%).

La idea clave: **desde la perspectiva de la recompensa, esto es minería solo.** Desde la perspectiva de la infraestructura, es asistida por pool. Obtiene el billete de lotería solo sin necesidad de ejecutar un servidor de 600 GB.

### Entonces, ¿por qué solo sigue siendo "una lotería"?

Porque la dificultad de encontrar un bloque **no tiene nada que ver con el pool** — la establece la red Bitcoin. Ya sea que ejecute su propio nodo o se conecte a SoloBTC, su tasa de hash de grado KH/s aún enfrenta las mismas probabilidades astronómicas: siglos, en promedio, entre aciertos.

El pool le ahorra el dolor de cabeza de infraestructura. No puede cambiar las matemáticas.

### ¿Cuál es la configuración predeterminada de NMMiner?

NMMiner viene con **SoloBTC** como pool predeterminado — es decir, modo pool solo de fábrica. Es una forma divertida y sin configuración de "jugar a la lotería" en el momento en que lo enchufa. Pero si quiere ganancias estables y predecibles, cambie a un pool regular.

:::tip

**Para usuarios de NMMiner**: Vaya al Portal de Configuración → pestaña Pools, y reemplace la URL predeterminada de SoloBTC con una URL de pool de minería tradicional. Consulte la página [Pools](../user-guide/pools.md) para instrucciones paso a paso.

:::

---

## ¿Cuál debería elegir?

| Su objetivo | Recomendado |
|---|---|
| "Quiero ver ganancias regulares y predecibles" | Pool regular |
| "Quiero la emoción de quizás acertar un bloque completo algún día" | Pool solo (p. ej. SoloBTC) |
| "Ejecuto una gran granja de minería y acierto bloques regularmente" | Solo verdadero (nodo propio) o pool solo |
| "Estoy aprendiendo cómo funciona la minería" | Pool regular (retroalimentación instantánea de shares) |

**En resumen**: La confusión suele ser así — *"Espera, si es minería solo, ¿por qué me conecto a un 'pool'?"* Aquí está la respuesta:

- **"Solo" significa que la recompensa no se comparte.** Si encuentra un bloque, es suyo — ya sea que lo haya encontrado a través de su propio nodo o a través de un pool solo que ejecuta el nodo por usted.
- **"Pool" (en "pool solo") solo significa la capa de infraestructura.** El pool ejecuta el nodo Bitcoin para que usted no necesite un disco duro de 600 GB y un servidor 24/7.

Para los usuarios de NMMiner, la conclusión práctica: **pool regular = pequeñas ganancias estables que realmente puede ver; pool solo = un billete de lotería con casi ninguna molestia de infraestructura.** Solo no es "incorrecto" — simplemente sirve a un objetivo diferente.

---

## Véase también

- [Fundamentos de minería Bitcoin](./bitcoin-mining-basics.md) — los conceptos centrales detrás de todo en esta página.
- [Pools](../user-guide/pools.md) — cómo configurar los ajustes de pool en NMMiner.
- [Glosario](../reference/glossary.md) — definiciones de tasa de hash, share, dificultad y más.