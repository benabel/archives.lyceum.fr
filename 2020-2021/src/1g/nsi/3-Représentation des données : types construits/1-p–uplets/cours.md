---
"tags": ["python", "type construit", "p-uplet", "tuple"]
---

::: programme
+---------------------------+-------------------------------+--------------------------------------+
|         Contenus          |      Capacités attendues      |             Commentaires             |
+===========================+===============================+======================================+
| p-uplets.                 | Écrire une fonction renvoyant |                                      |
| p-uplets nommés           | un p-uplet de valeurs.        |                                      |
+---------------------------+-------------------------------+--------------------------------------+
:::

::: intro clearfix

<p><a href="https://commons.wikimedia.org/wiki/File:Tableau_%C3%A0_une_dimension.png#/media/File:Tableau_à_une_dimension.png"><img class="right" src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Tableau_%C3%A0_une_dimension.png" alt="Tableau à une dimension.png" width="640" height="143"></a></p>

Dans la deuxième partie [2-Représentation des données: types et valeurs de base](../), nous avions vu certains types de **variables simples**: `int`(entiers), `float`(nombres à virgule flottante) `bool`(booléen), `str`(châine de caractères)

Nous allons maintenant voir des **types construits** qui sont des _collections d'objets_ de type simple assemblés dans ce que l'on appelle une structure de données.


:::

Nous verrons dans cette partie trois exemples de types construits:

- les p-uplets `tuple ` et listes `list`: des collections d'éléments ordonnés dans lesquels les valeurs sont accédées via un **index de position**.
- les p-uplet nommés `namedtuple` et les dictionnaires `dict`: ensemble d'éléments dans lesquels les valeurs sont accédées via une **clef**.

Nous commencons dans ce premier chapitre par les `tuple`s, très utilisés notamment lorsque l'on souhaite travailler avec plusieurs variables _simultanément_.

## Syntaxe

Les tuples sont des valeurs séparées par des virgules `,` entourées de parenthèses `(..., ..., ...`)` qui peuvent parfois être *ommises*.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
(1, 2, 3)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 2, 3)


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# sans parenthèses
1, 2, 3
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 2, 3)


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
type((1, 2, 3))
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    tuple


</div>

## Accés aux valeurs par index

On peut stocker plusieurs valeurs de types différents dans une variable de type tuple.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t = (1, 2.0, "trois")
t
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 2.0, 'trois')


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
type(t)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    tuple


</div>

L'accés se fait par un index entier de position qui **commence à 0**. On place l'index entre des crochets.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t[0]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    1


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t[1]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    2.0


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t[2]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'trois'


</div>

**ATTENTION: Dans les types construits, il faut bien distinguer l'index et la valeur stockée à cet index.**

## Méthodes des tuples

Les tuples présentent de nombreuses méthodes qui sont décrites dans la [documentation](https://docs.python.org/fr/3/library/stdtypes.html#sequence-types-list-tuple-range) ou grâce à l'appel `help(tuple)`

- La fonction `len`: nombre d'éléments stockés.
- La méthode `index`: index de l'élément cherché donné en argument.
- La méthode `count`: nombre d'éléments de valeur donnée en argument.

::: {.plus titre="Différence entre méthode et fonction"}

La différence entre méthode et fonction sera approfondie en terminale lors de l'étude de la [programmation orientée objet](/tg/nsi/4-langages-et-programmation/6-programmation-objet). Pour l'instant nous pouvons simplement dire qu'il s'agit d'une fonction attachée à un objet qui s'appelle en utilisant une **notation pointée**.

```python
# appel d'une fonction
fonction(arguments)
# appel d'une méthode d'objet
objet.méthode(arguments)
```

:::

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print(t)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    (1, 2.0, 'trois')


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
len(t)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t.index(-3)
```

</div>


    -------------------------------------------------------------------------

    ValueError                              Traceback (most recent call last)

    <ipython-input-11-1ab9b8c50e8f> in <module>
    ----> 1 t.index(-3)
    

    ValueError: tuple.index(x): x not in tuple


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t.count(10)
```

</div>

## Utilisations courantes

### Déstructuration

Il peut être _pratique_ de récupérer les valeurs stockées dans le tuple dans des variables de type simple: on parle de **déstructuration**.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a, b, c = t
print("t=", t)
print("a=", a)
print("b=", b)
print("c=", c)
```

</div>

### Permuter des variables

Habituellement, lorsque l'on souhaite pemuter deux variables, il est nécessaire de passer par une troisième variable auxiliaire. Grâce aux tuples, la permutation peut se faire en une instruction.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a = 3
b = 2
print("a=",a, "b=", b)
print("Permutation")
a, b = b, a
print("a=",a, "b=", b)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    a= 3 b= 2
    Permutation
    a= 2 b= 3


</div>

-----

### Renvoyer plusieurs valeurs dans une fonction

Il s'agit d'une application courante des tuples. prenons l'exemple d'une fonction qui renvoie les deux racines du trinome.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def racines_du_trinome(a,b,c):
    delta = b**2-4*a*c
    if delta > 0:
        return -b-delta**0.5/(2*a), -b+delta**0.5/(2*a)
racines_du_trinome(1,0,-1)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (-1.0, 1.0)


</div>

Ici on récupère les racines par déstructuration.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x1, x2 = racines_du_trinome(1,0,-2)
print("racine 1:", x1)
print("racine 2:", x2)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    racine 1: -1.4142135623730951
    racine 2: 1.4142135623730951


</div>

-----

## Particularités des tuples

Les tuples peuvent stocker n'importe quel type de valeurs.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
(False, "un", 2.0, 3)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (False, 'un', 2.0, 3)


</div>

Les tuples sont [*immutables*](https://fr.wiktionary.org/wiki/immutable), c'est à dire qu'on ne peut les modifier une fois qu'ils ont été créés.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t[0] = 6
```

</div>


    -------------------------------------------------------------------------

    TypeError                               Traceback (most recent call last)

    <ipython-input-17-28b8e5df48e8> in <module>
    ----> 1 t[0] = 6
    

    TypeError: 'tuple' object does not support item assignment


## p-uplets nommés

Il est possible de créer des p-uplets nommés afin de pouvoir accéder aux éléments de la collection par clé.

Ce type nécessite d'être importé par le module `collections` avant d'être utilisé.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
from collections import namedtuple

Eleve = namedtuple('Eleve', 'nom, age, classe, spécialité')
e = Eleve("John", 17, "1g", "nsi" )
e
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    Eleve(nom='John', age=17, classe='1g', spécialité='nsi')


</div>

L'avantage de l'accés par clef est qu'il apporte plus d'expressivité au code.

L'accés peut se faire en ajoutant un point et le nom de la clé. Il s'agit encore d'une _notation pointée_ comme dans le cas d'appel de méthodes, cependant il n'y a pas de parenthèses car il s'agit de valeurs et non de fonctions(On parle d'attributs de l'objet).

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
e.age
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    17


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
e.spécialité
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'nsi'


</div>

## Usage

L'usage des p-uplet qu'ils soient nommés ou pas reste peu répandu au profit des tableaux `list` et dictionnaires `dict` respectivement, qui au contraire des n-uplets sont [mutables](https://fr.wiktionary.org/wiki/mutable).

On pourra ainsi y ajouter des éléments, en retirer...


