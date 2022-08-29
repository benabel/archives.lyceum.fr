---
tags: ["python", "syntaxe", "type", "interpréteur"]
---

Dans un programme informatique, on manipule des données sur lesquelles on effectue des calculs.

Les données sont représentées sous la forme d'objets, et chaque objet a un **type**.

En fonction du type d'objet (ou de donnée), on peut appliquer certaines opérations et d'autres non.


# Quelques types d'objets simples

Voici quelques types simples d'objets, c'est à dire qui ne peuvent être subdivisés.

- `int`: *integer* en anglais représentent les **entiers**. ex: 3
- `float`: *floatting point* en anglais représentent les **réels**. ex: 3.14
- `bool`: *booleans* en anglais représentent les **booléens**. Il ne peuvent avoir que deux valeurs: `True` ou `False` (Vrai ou faux)
- `NoneType`: *sans type* en anglais représente une valeur sans type. Il n'existe qu'une valeur de ce type, la valeur `None`.

# Comment connaitre le type d'un objet ?

Pour connaitre le type d'un objet on peut utiliser la fonction `type()` de Python:


```
>>> type(3)
<class 'int'>
>>> type(3.14)
<class 'float'>
```

# Changer le type d'un objet

Il est possible de modifier le type d'un objet en utilisant des fonctions Python, en angalis on appelle ça le *casting*.

1. Convertir un entier en réél: `float()`
```
>>> float(5)
5.0
```

2. Convertir un réel en entier: `int()`

```
>>> int(3.95)
3
```

Comme vous le voyez on a conservé que la partie entière du nombre, mais on a pas effectué un arrondi, si on souhaite faire un arrondi il faut utiliser la fonction `round`.

```
>>> round(3.49)
3
>>> round(3.5)
4
```


# Combiner des objets avec des opérations

Lorsqu'on combine des objets avec des opérations on crée ce que l'on appelle une **expression**, si la syntaxe de votre expression est correcte, **elle retourne une valeur** qui a comme tout objet un type.


La syntaxe est de la forme:

```
<objet> <operateur> <objet>
```

Par exemple:

```
>>> 3+2
5
>>> 3.0+2
5.0
```

Comme vous le voyez l'expression retourne une valeur dont le type dépend du type de données.

Voici les opérations à connaitre:

- addition: `+`
- soustraction: `-`
- multiplication: `*`
- division: `/`
- division entière: `//`
- modulo: `%`
- puissance: `**`

Ainsi que leur ordre de priorité (PEMDAS):

Parenthèses > Exposants > Multiplication > Division > Addition > Soustraction

# Exercices

Faites ces exercices sur le papier, puis vérifiez vos réponses après coup avec l'interpréteur Python

## Donner le type des objets suivants



```
3.14
-34
True
None
3.0
```

## Prévoir le résultat et le type des expressions suivantes

Indiquer la valeur **et** le type retourné.


```
6 + 12 -3
2 * 3.0
10/3
10.0/3.0
(2 + 3) * 4
2 + 3 * 4
2**3 + 1
2.1 ** 2.0
2.2 * 3.0
```
