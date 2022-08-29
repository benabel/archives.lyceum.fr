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

Dans la deuxième partie [2-Représentation des données: types et valeurs de base](../), nous avions vu certains types de variables simples:

- `int`: les entiers
- `float`: les rééls(nombres à virgule flottante)
- `boolean`: booléen (Vrai ou Faux)
- `str`: caractère simple(s'il y en a plusieurs, les chaînes de caractères forment alors un type construit de plusieurs caractères semblable aux listes)

Cependant, il existe de nombreux objets qui sont représentés par plusieurs valeurs, c'est le cas par exemple du texte, des images et des sons...

Dans ce cas les enregistrements collectent des valeurs de types différents dans des champs.

Nous verrons dans cette partie trois exemples de types construits:

- les p-uplets `tuple ` et listes `list`: des collections d'éléments ordonnés dans lesquels les valeurs sont accédées via un **index de position**.
- les p-uplet nommés `namedtuple` et les dictionnaires `dict`: ensemble d'éléments dans lesquels les valeurs sont accédées via une **clef**.

Nous commencons dans ce premier chapitre par les `tuple`s, très utilisés notamment lorsque l'on souhaite stocker plusieurs variables d'*un coup*.

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

## Assignations de variables

On peut stocker plusieurs valeurs dans la variable de type tuple.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t = (1, 4, -3)
t
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 4, -3)


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

Les tuples prennent tout leur intéret en récupérant leurs valeurs séparées dans des variables de type simple: on parle de déstructuration.

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

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    t= (1, 4, -3)
    a= 1
    b= 4
    c= -3


</div>

-----

## Accés aux valeurs par index

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


    4


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


    -3


</div>

## Méthodes des tuples

On peut citer:

- `len`: nombre d'éléments stockés.
- `index`: index de l'élément cherché donné en argument.
- `count`: nombre d'éléments de valeur donnée en argument. 

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

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    2


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
t.count(10)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    0


</div>

## Renvoie de plusieurs valeurs par une fonction

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


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-13-28b8e5df48e8> in <module>
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

L'accés peut se faire en ajoutant un point et le nom de la clé(*notation pointée*).

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

L'usage des p-uplet qu'ils soient nommés ou pas reste peu répandu au profit des tableaux `list` et dictionnaires `dict` respectivement qui au contraire des n-uplets sont [mutables](https://fr.wiktionary.org/wiki/mutable].

On pourra ainsi y ajouter des éléments, en retirer...


