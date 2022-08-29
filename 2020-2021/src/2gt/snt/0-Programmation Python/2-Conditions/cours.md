---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
---

::: programme

+------------------------------+---------------------------------------------------------+
|         **Contenus**         |                 **Capacités attendues**                 |
+==============================+=========================================================+
| Instructions conditionnelles | Écrire et développer des programmes pour répondre à des |
|                              | problèmes et modéliser des phénomènes physiques,        |
|                              | économiques et sociaux.                                 |
+------------------------------+---------------------------------------------------------+

:::

::: intro clearfix

<p><a href="https://commons.wikimedia.org/wiki/File:110_to_91_interchange_-_panoramio.jpg#/media/File:110_to_91_interchange_-_panoramio.jpg"><img class="right" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/110_to_91_interchange_-_panoramio.jpg" alt="110 to 91 interchange - panoramio.jpg" width="640" height="480"></a><br>By beglib, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=49372392">Link</a></p>

> Dans ce chapitre nous allons voir comment utiliser des conditions dans un programme pour que son
> fonctionnement change en fonction des valeurs des variables.

:::

## Les opérateurs de comparaison

Pour comparer des variables en Python, on utilise les opérateurs suivants:

- `x < y`: x est-il inférieur à y ?
- `x <= y`: x est-il inférieur ou égal  à y ?
- `x > y`: x est-il supérieur à y ?
- `x >= y`: x est-il supérieur ou égal à y ?
- `x == y`: x est-il égal à y ?
- `x != y`: x est-il différent y ?

Les opérateurs de comparaison retournent un booléen: `True` ou `False`.

::: examples

```python
# affectation des variables
a = 7
b = 13
c = 7

a < b    # renvoie True
a == b   # renvoie False
a != b   # renvoie True
a == c   # renvoie True
```
:::

**ATTENTION: Il faut bien distinguer le simple égal `=` utilisé pour l'_affectation des variables_ et
le double égal `==` utilisé pour la _condition d'égalité_.**

## Les instructions conditionnelles

En fonction de conditions on va exécuter des blocs de code différents.

En Python, les blocs sont précédés de `:` et sont indentés avec 4 espaces.

```
entrée dans le bloc:
    1ère instruction du bloc
    2e instruction du bloc
    ...
sortie du bloc
```

### L'instruction `if`

Le bloc d'instruction contenu n'est exécuté que si la condition est vérifiée.

**Syntaxe**

```python
if condition:
    instruction 1
    instruction 2
    ...
```

::: example

```python
a = 3
if a > 0:
    a = -a
print(a)
```

Renvoie: `-3`

```python
a = -5
if a > 0:
    a = -a
print(a)
```

Renvoie: `-5`

:::

### L'instruction `else`

Indique le bloc d'instruction a exécuté si la condition n'est pas vérifiée.

**Syntaxe**

```python
if condition:
    bloc d'instructions exécuté si la condition est vraie
else:
    bloc d'instructions exécuté si la condition est fausse
```

::: example

```python
a = -3
if a > 0:
    a = -a
else:
    a = a*100

print(a)
```

Renvoie: `-300`

Comme initialement la variable a n'était pas positive, c'est le bloc d'instructions `else` qui a
été exécuté.

:::

### L'instruction `elif`

Cette instruction permet de réaliser des tests imbriqués, c'est un raccourci pour les instructions
`else` et `if`.

**Syntaxe**

```python
if condition 1:
    bloc d'instructions exécuté si la condition 1 est vraie
elif condition 2:
    bloc d'instructions exécuté si la condition 1 est fausse et la condition 2 vraie
else:
    bloc d'instructions exécuté si les conditions 1 et 2 sont fausses
```

:::example

```python
a = 3
if a == 7:
    print("C'est un chiffre porte bonheur")
elif a == 3:
    print("Quelques modifications sont nécessaires")
    a += 4

print(a)
```

Renvoie:
```
Quelques modifications sont nécessaires
7
```
:::