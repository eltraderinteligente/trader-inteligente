---
title: 'Por qué los indicadores llegan tarde'
description: 'Todo indicador es una función de precios pasados. Eso no lo vuelve inútil, pero explica por qué siempre confirma después y por qué yo enseño con el gráfico limpio.'
pubDate: 2026-09-29
lang: es
translationKey: indicadores
author: 'Javier Andrade'
tags: ['indicadores', 'estructura de mercado']
draft: true
---

Hay un patrón que se repite mucho cuando algo no funciona en el gráfico: añadir
otra ventanita. Una media más, un oscilador más, algo que confirme. La
conclusión siempre es la misma, «me falta algo», y al cabo de unos meses el
precio ocupa menos de la mitad de la pantalla sin que las decisiones hayan
mejorado.

La pregunta que casi nadie se hace por el camino es de dónde sale lo que esas
ventanitas están mostrando.

## De dónde sale un indicador

Un indicador es una fórmula. Toma unos números, hace operaciones con ellos y
devuelve otro número que se dibuja en la pantalla. Los números que toma son
precios pasados. En algunos casos también volumen pasado, pero pasado igual.

De ahí sale una consecuencia que no es una opinión mía: **un indicador no puede
contener información que el precio no contenga ya.** Es una transformación de
los mismos datos. No hay una fuente externa. Nadie llama por teléfono al
mercado para preguntar qué va a hacer. Si lo que entra son las últimas
cincuenta velas, todo lo que salga por el otro lado está hecho con esas
cincuenta velas y con nada más.

Y hay una segunda consecuencia, igual de mecánica. Casi todos los indicadores
promedian, suavizan o comparan contra un período. Promediar es, por definición,
mezclar lo de ahora con lo de antes. Un promedio de veinte velas se mueve más
despacio que el precio porque diecinueve de esas veinte velas son historia. Eso
no es un defecto de programación que alguien podría arreglar. Es lo que
significa promediar.

## Un ejemplo con una media móvil

Vamos con números redondos para que se vea.

Imagina que un instrumento lleva semanas moviéndose alrededor de 100. La media
de las últimas veinte velas también vale 100, porque todas las velas valen más
o menos eso. Hasta aquí, la media y el precio dicen lo mismo.

Ahora aparecen compradores y en una sola vela el precio pasa de 100 a 110. ¿Qué
hace la media? Recalcula: diecinueve velas valen 100 y una vale 110. El
resultado es 100,5. El precio está en 110 y la media dice 100,5.

La media solo llegará a 110 cuando las veinte velas valgan 110, es decir, veinte
velas después. Mientras tanto va subiendo poco a poco, arrastrada por el precio,
siempre por detrás. Si tu señal es «el precio cruza la media» o «la media rápida
cruza a la lenta», ese cruce ocurre cuando ya han entrado suficientes velas
nuevas en el cálculo. Por construcción, después del movimiento.

Esto no es un fallo de la media móvil. Es la media móvil funcionando
exactamente como está diseñada. Le pides un promedio del pasado y te da un
promedio del pasado.

> [[IMAGEN — falta la captura: un gráfico con una media móvil encima del
> precio, con dos marcas, dónde empezó realmente el movimiento y dónde se
> produjo el cruce.]]

## «Tarde» no es lo mismo que «inútil»

Aquí quiero ser justo, porque hay mucha gente que dice esto de forma
despectiva y no me parece honesto.

Un indicador es una manera razonable de resumir algo que si no tendrías que
calcular a ojo. Si lo que quieres saber es si el precio está por encima o por
debajo de donde ha estado cotizando de media los últimos meses, una media móvil
te lo responde en un segundo y te lo responde igual todos los días. Si lo que
quieres saber es cuánto se mueve este instrumento en un día normal —algo que
importa mucho para decidir cuánto arriesgas y a qué distancia pones las cosas—,
mirarlo a ojo es lento y poco fiable, y una medida de volatilidad lo resume
bien.

Y hay algo que una fórmula hace mejor que tú: ser consistente. La fórmula te da
el mismo número hoy que dentro de seis meses. Tu ojo no. Tu ojo cambia según
hayas dormido, según lo que hayas leído esa mañana y, sobre todo, según si
tienes una posición abierta o no.

Se pueden usar bien, y donde eso ocurre suelen coincidir tres cosas: se sabe
exactamente qué hay dentro de la fórmula, se usa para resumir y no para
decidir, y la decisión está en otro sitio.

## La objeción de verdad

El retraso no es mi objeción principal. Mi objeción es otra, y es más
incómoda: **un indicador tapa aquello de lo que está hecho.**

Cuando dibujas una media sobre el precio, lo que ves es una línea suave. Las
veinte velas que produjeron esa línea siguen ahí, pero visualmente han quedado
sustituidas por ella. Para alguien que ya sabe leer esas velas, eso es un
ahorro de trabajo. Para alguien que todavía no sabe, es un cambio de objeto de
estudio: aprende a leer el indicador en lugar de aprender a leer el precio.

El síntoma se reconoce enseguida. Una persona te dice sin dudar que el RSI está
en 30, pero si le preguntas si el último mínimo quedó por encima o por debajo
del mínimo anterior, tiene que ir a mirar. Conoce la lectura, no conoce la
cosa.

Y el segundo síntoma llega después. Cuando el indicador falla —y va a fallar,
porque es un promedio del pasado y el pasado se acaba— esa persona no tiene
nada debajo a lo que agarrarse. Nunca aprendió lo que había debajo.

## Por qué enseño con el gráfico limpio

No es una cuestión de que los indicadores estén prohibidos ni de que haya que
elegir bando. Lo que cada uno acabe teniendo en su pantalla es cosa suya.

Enseño con el gráfico limpio por una cuestión de orden. La estructura —la
secuencia de máximos y mínimos que ya vimos en las primeras entradas— es la
materia prima. El indicador es material procesado. Es bastante fácil entender
algo procesado cuando ya sabes de qué está hecho, y es casi imposible en el
sentido contrario.

Cuando alguien es capaz de leer estructura sin ayuda, añadir un indicador pasa
a ser una decisión con criterio: sabe qué ve esa fórmula y qué no ve. Antes de
eso, añadirlo es simplemente taparlo todo.

## Qué hacer con esto esta semana

Si usas algún indicador, no lo tires. Haz esto:

1. Abre un gráfico que conozcas bien, con el indicador que sueles usar.
2. Quítalo. Pasa unos días mirando solo el precio y marcando la estructura,
   como en las entradas anteriores.
3. Vuelve a ponerlo. Ahora recorre las últimas señales que dio y, en cada una,
   pregúntate qué había hecho ya el precio antes de que apareciera la señal.
4. Mide ese hueco. No para demostrar que el indicador no sirve, sino para ver
   con tus propios ojos de cuánto es el retraso y decidir qué te compensa.

Es un ejercicio de una tarde y te deja una opinión propia en lugar de la mía.

La próxima entrada va sobre una pregunta muy habitual y que tiene una respuesta
bastante menos cómoda: cuánto se tarda realmente en aprender a operar.

---

Nada de lo que hay en esta entrada es una recomendación de compra o venta de
ningún instrumento. Es material educativo. Operar en los mercados implica
riesgo de pérdida.
