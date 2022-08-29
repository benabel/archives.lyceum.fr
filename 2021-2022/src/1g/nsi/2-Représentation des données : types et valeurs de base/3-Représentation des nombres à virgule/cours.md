---
tags: ["base 2", "encodage", "nombres à virgule", "nombres flottants"]
---

::: programme
+-----------------------+-----------------------+---------------------------------------+
|       Contenus        |  Capacités attendues  |             Commentaires              |
+=======================+=======================+=======================================+
| Représentation        | Représentation        | `0.2 + 0.1` n’est pas égal à `0.3`.   |
| approximative des     | approximative des     | Il faut éviter de tester l’égalité de |
| nombres réels: notion | nombres réels: notion | deux flottants.                       |
| de nombre flottant    | de nombre flottant    | Aucune connaissance précise de        |
|                       |                       | la norme IEEE-754 n’est exigible.     |
+-----------------------+-----------------------+---------------------------------------+
:::

Nous avons appris à encoder des nombres entiers naturels, et relatifs, et nous avons vu que les
limites physiques des machines imposaient des limites sur l'étendue des valeurs. Par exemple, sur
un octet on dispose de $2^8 = 256$ valeurs distinctes qui permettent d'encoder:

- des nombres entiers naturels entre 0 et 255.
- des nombres entiers relatifs entre -128 et 127.

Maintenant que nous allons tenter de coder les réels, les limites de notre machine vont encore
entraîner des limites sur l'_étendue des valeurs_, mais également sur **la précision des valeurs**.

Ainsi, si on effectue le calcul $0.2 +0.1$ en Python, on obtient:

```python
>>> 0.2 + 0.1
0.30000000000000004
```

Et contre toute attente, certains tests que l'on aurait cru positifs renvoient des valeurs
négatives(ce que l'on appelle un *[faux
négatif](https://fr.wikipedia.org/wiki/Faux_n%C3%A9gatif)*):

```python
>>> 0.2 + 0.1 == 0.3
False
```

Ainsi **un calcul avec des nombres à virgule ne peut-être qu'approximatif**. Cependant plus on
augmente la taille du registre du processeur et plus nous pourrons représenter de valeurs, et plus
nos calculs gagneront en précision.

## Virgule fixe et virgule flottante

Il existe deux façons de coder les nombres à virgule:

- Le codage en **virgule fixe** qui consiste à garder **un nombre fixe de chiffes après la
  virgule.**

::: example

Par exemple sur un octet, on peut utiliser 4 bits pour la partie entière et 4 bits pour la partie décimale.

Ainsi, `0101 1011` a pour valeur:

$$
2^2 + 2^0 + 2^{-1} + 2^{-2} + 2^{-3} = 4 + 1 + 0.5 + 0.25 + 0.125 = 5,825
$$

:::

- Dans le codage en **virgule flottante**, on garde **un nombre fixe de chiffres significatifs** et
  on réserve l'autre partie du codage à l'exposant. C'est une méthode semblable à la notation
  scientifique utilisée en physique par exemple.

$$
\pm m \times  2^{n} \text{ avec } m \in [1; 2[
$$

C'est cette deuxième méthode qui est utilisée dans les ordinateurs et smartphones et que nous
allons étudier cette année.

## Principe du codage en virgule flottante

On représente un nombre à virgule flottante sous la forme:

$$
s\ m \cdot 2^n
$$

<wc-wikimage title="IEEE754_Format_General.png" caption="La norme IEEE754 définit le nombre de bits accordés à l'exposant et à la mantisse."></wc-wikimage>

Supposons un nombre flottant codé sur un octet utilisant 1 bit de signe, 3 bits pour l'exposant et
4 bits pour la mantisse: `1 101 1011`

- $s$ est le signe représenté par le bit de poids fort:
    - $s=0$: signe $+$
    - $s=1$: signe $-$

Notre codage représente donc un nombre négatif.

- $n$ est l'exposant représenté par un *entier relatif décalé* et non en complément à deux, afin
  de faciliter la comparaison des exposants. Ce décalage est de $2^{e-1} - 1$ _(e représente le
  nombre de bits utilisé pour coder l'exposant)_

L'exposant a pour valeur `101` codé sur 3 bits, il doit être décalé de $2^{2} - 1 = 3$. Ainsi,
puisque $101_2 = 5_{10}$, l'exposant `101` correspond à un exposant de 5-3=**2**.

- $m$ est la mantisse qui est un nombre binaire à virgule compris entre 1 inclus et 2 exclus. Le
  seul chiffre avant la virgule étant toujours 1, il n'est pas représenté(on le dit *implicite*),
  et le codage binaire de la mantisse représente donc uniquement les chiffres après la virgule qui
  sont en base 2 des demis, des quarts, des huitièmes...

Dans notre exemple, la mantisse est: `1011`, elle représentera le nombre:

$$
m = 1 + \frac{1}{2} + \frac{0}{2^2} + \frac{1}{2^3}+ \frac{1}{2^4} =  1,6875
$$

Le code `1 101 1011` sur un octet utilisant 1 bit de signe, 3 bits pour l'exposant et 4 bits pour
la mantisse représente donc:

$$
- 1,6875 \cdot 2^{2}= -6,75
$$

## La norme IEEE 754

> L’IEEE 754 est une norme pour la représentation des nombres à virgule flottante en binaire. Elle
> est la norme la plus employée actuellement pour le calcul des nombres à virgule flottante dans
> le domaine informatique. [Source Wikipedia](http://fr.wikipedia.org/wiki/IEEE_754)

Cette norme définit notamment 2 formats pour représenter des nombres à virgule flottante:

- *simple précision* (32 bits : 1 bit de signe, 8 bits d'exposant (-126 à 127), 23 bits de
  mantisse),

<p><a href="https://commons.wikimedia.org/wiki/File:IEEE754_simple_precision.png#/media/File:IEEE754_simple_precision.png"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/IEEE754_simple_precision.png" alt="Représentation simple précision flottants IEEE 754"></a><br>Image par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page does not exist)">GMjeanmatt</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7318385">Lien</a></p>

- *double précision* (64 bits : 1 bit de signe, 11 bits d'exposant (-1022 à 1023), 52 bits de
  mantisse).

<p><a href="https://commons.wikimedia.org/wiki/File:IEEE754_double_precision.png#/media/File:IEEE754_double_precision.png"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/IEEE754_double_precision.png" alt="IEEE754 double precision.png"></a><br>Image par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page does not exist)">GMjeanmatt</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7318466">Lien</a></p>

::: {.appli titre="Réaliser la conversion en base 2 de la valeur approchée de pi: 3.14159265359"}
- en simple précision: [ici](http://www.binaryconvert.com/result_float.html?decimal=051046049052049053057050054053051053057)
- en double précision: [ici](http://www.binaryconvert.com/result_double.html?decimal=051046049052049053057050054053051053057)

Comparer la précision obtenue dans les deux cas.
:::

::: plus
Chaque norme défini aussi des valeurs spéciales, par exemple en double précision:

- le zéro positif: `+0 = 0 00000000000 0000000000000000000000000000000000000000000000000000`,
- le zéro négatif: `-0 = 1 00000000000 0000000000000000000000000000000000000000000000000000`,
- l'infini positif: `+∞ = 0 11111111111 0000000000000000000000000000000000000000000000000000`,
- l'infini négatif: `+∞ = 1 11111111111 0000000000000000000000000000000000000000000000000000`,
- Not a Number ...

[Article Wikiédia en anglais](https://en.wikipedia.org/wiki/Double-precision_floating-point_format#Double-precision_examples){.cite-source}
:::

## Tests d'égalité sur les flottants

Comme nous sommes limités sur la précision des flottants, on transforme les tests d'égalités en
tests d'inégalités à une précision donnée.

Ainsi:

```python
>>> 0.2 + 0.1 == 0.3
False
```

Par contre, en utilisant une précision du millionième:

```python
>>> import math # pour utiliser la fonction valeur absolue  fabs()
>>> precision = 1E-6
>>> math.fabs((0.2 + 0.1) - 0.3)  < precision
True
```

D'ailleurs la bibliothèque `math` de Python inclut à cet effet la fonction
[`math.isclose()`](https://docs.python.org/3/library/math.html#math.isclose).

```python
>>> from math import isclose
>>> isclose(0.2 + 0.1, 0.3)
True
```
