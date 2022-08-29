---
tags: ["opérations binaires", "base 2", "base 16", ]
---

## Opérations arithmétiques

Les règles utilisées en base dix s'appliquent de la même façon dans les autres bases.

## Addition binaire

[[example]]
|Réaliser l'addition binaire: $1011_2 + 1010_2$
|
|```
| (1) (1)
|    1 0 1 1
|  + 1 0 1 0
|    -------
|  1 0 1 0 1
|
|```

On peut vérifier le résultat en base 10:

$$
({1011}_2 = 11_{10})+({1010}_2 = 10_{10})={10101}_2 = 21_{10}
$$

## Addition hexadécimale

[[example]]
|Réaliser l'addition hexadécimale: $A803_{16} + 2D35_{16}$
|
|```
|   (1)
|    A 8 0 3
|  + 2 D 3 5
|    -------
|    D 5 3 8
|
|```

On peut vérifier le résultat en base 10:

$$
({A803}_{16} = 43 011_{10})+({2D35}_{16} = 11 573_{10})={D538}_{16} = 54 584_{10}
$$

## Soustraction binaire

[[example]]
|Réaliser la soustraction binaire: $1011_2 - 1010_2$
|
|```
|    1 0 1 1
|  - 1 0 1 0
|    -------
|    0 0 0 1
|
|```

On peut vérifier le résultat en base 10:

$$
({1011}_2 = 11_{10})-({1010}_2 = 10_{10})={0001}_2 = 1_{10}
$$

## Soustraction hexadécimale

[[example]]
|Réaliser la soustraction hexadécimale: $A803_{16} - 2D35_{16}$
|
|```
|     A  8  0  3
|  -  2  D  3  5
|    (1)(1)(1)
|    -----------
|     7  A  C  E
|
|```

On peut vérifier le résultat en base 10:

$$
({A803}_{16} = 43 011_{10})-({2D35}_{16} = 11 573_{10})={7ACE}_{16} = 31 438_{10}
$$

Maintenant que vous avez tout compris, voici un lien vers un convertisseur en ligne.

<http://www.binaryconvert.com/convert_unsigned_int.html>

## Conversions et opérations en python

Bien entendu comme ce genre d'opérations est courante en informatique, python possède des fonctions pour manipuler les nombres entiers en base décimale `int`, en base deux `bin`, en base seize `hex`.

Vous pouvez trouver quelques exemples de ces conversions sur cette réponse du forum de programmation an anglais [stackoverflow](http://stackoverflow.com/a/11029366/1919130)