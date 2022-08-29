---
tags: ["python", "syntaxe", "type", "interpréteur"]
---

Donc, ce que nous allons faire maintenant est de commencer à parler de [Python](https://www.python.org/). Et notre objectif est d'apprendre la **syntaxe** de ce langage, puis de l'utiliser pour apprendre comment nous pouvons traduire nos algorithmes pour résoudre un problème en une forme qui puisse être éxecutée par l'ordinateur.

Pour que l'interpréteur Python puisse traduire votre programme en une séquence d'instructions compréhensibles par l'ordinateur, il faut respecter certaines règles de syntaxe sans quoi l'interpréteur peut renvoyer un message d'erreur.

On peut classer les erreurs en deux types:

1. **Les erreurs de syntaxe:** L'expression tapée n'est pas correctement construite.
2. **Les erreurs de sémantique:** vous utilisez une syntaxe correcte mais les types de données utilisés ne permettent pas d'interpréter correctement l'expression.

# Les erreurs de syntaxe

```
>>> 1+/2
  File "<stdin>", line 1
    1+/2
      ^
SyntaxError: invalid syntax
>>> 1 2 /
  File "<stdin>", line 1
    1 2 /
      ^
SyntaxError: invalid syntax
>>> 1 /
  File "<stdin>", line 1
    1 /
      ^
SyntaxError: invalid syntax

```

C'est comme si vous employiez deux verbes dans une phrase: "Chacun cherche trouve son chat" ou que vous terminiez votre phrase par un verbe: "Chacun chat cherche"...


# Les erreurs sémantiques

*Par exemple*: si on essaye d'ajouter un nombre entier et une chaine de caractère.

```
>>> 1 + "mot"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> "un " + "mot"
'un mot'
```

# Python: un langage dynamique

**Attention:** Python peut réserver des surprises au premier abord. En effet, c'est un langage dit **dynamique**, il peut modifier le type de données dans le cas de certaines opérations.

*Par exemple:*
- si on divise deux entiers, il renvoie systématiquement un nombre à virgule.

```
>>> 1/1
1.0
```

- on multiplie une chaine de caractère par un entier, et on obtient une chaîne de caractère.

```
>>> 13 * 'YO'
'YOYOYOYOYOYOYOYOYOYOYOYOYO'
```

C'est déconcertant au début, mais c'est volontaire, le but est d'avoir un langage moins contraignant que les langages dits **statiques**(comme C ou C++), on peut développer plus rapidement, les programmes sont moins longs.

Par contre, cela  peut causer beaucoup plus de problèmes si au cours d'un programme on obtient un type de données non attendu et que Python réalise une conversion de type en ne renvoyant aucun message d'erreur.

Par exemple, on était certain d'ajouter des nombres mais un booléen s'est glissé dans l'opération:

```
>>> 12 * True
12
>>> 12 * False
0
>>> 1 + True
2
>>> 1 + Null
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'Null' is not defined
```

Bon ça va, l'interpréteur ne convertit pas tout quand même!
