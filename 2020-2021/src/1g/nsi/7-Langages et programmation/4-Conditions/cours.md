---
"tags": ["opérateurs booléens", "structures conditionnelles"]
---

::: programme
+------------------------+---------------------------------+-----------------------------------+
|        Contenus        |       Capacités attendues       |           Commentaires            |
+========================+=================================+===================================+
| Constructions          | Mettre en évidence un corpus    | Séquences, affectation,           |
| élémentaires           | de constructions élémentaires.  | conditionnelles, boucles bornées, |
|                        | boucles non bornées, appels de  |                                   |
|                        | fonction.                       |                                   |
+------------------------+---------------------------------+-----------------------------------+
:::

> Les structures conditionnelles permettent d'écrire des programmes qui peuvent s'éxecuter différemment selon les conditions dans lesquelles ils sont exécutés. Plus formellement, c'est une structure de contrôle pouvant dévier le flot de contrôle du programme.

<a href="https://commons.wikimedia.org/wiki/File:SunsetTracksCrop.JPG#/media/Fichier:SunsetTracksCrop.JPG"><img class="half right" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SunsetTracksCrop.JPG" alt="SunsetTracksCrop.JPG" /></a>Image par <a href="//commons.wikimedia.org/wiki/User:Knipptang" title="User:Knipptang">Arne Hückelheim</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=23003609">Lien</a>


## Les blocs en python

Nous avons vu précédemment que les programmes étaient une suite d'instructions. Il est cependant possible d'utiliser des **blocs** d'instructions qui ne seront pas exécutés dès leur apparition dans le programme à l'opposé des instructions écrites dans le flot principal(à gauche de la ligne).

En python, les blocs sont délimités grâce aux tabulations et introduits grâce à deux points `:`.

```
entrée dans un bloc:
    ligne 1 du bloc
    ligne 2 du bloc
    ...

retour dans l’exécution normale du programme ligne à ligne.
```

Aujourd'hui, nous allons utiliser des structures de contrôle qui permettent d’exécuter: des *blocs*, en fonction de conditions. On parle de **structure conditionnelles**.

## Programme à structure conditionnelle

Dans ce types de programme, le code sera toujours interprété ligne par ligne, cependant certains blocs de code ne seront exécutés que si une condition donnée est vraie.

### L'instruction `if`

Le bloc d'instruction contenu n'est exécuté que si la condition est vérifiée.

**Syntaxe**

```python
if condition:
    instruction 1
    instruction 2
    ...
```

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a = 3
if a > 0:
    a = -a
print(a)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    -3


</div>

-----

Dans le programme précédent l'instruction `if a > 0:` est toujours exécutée par l'interpréteur, car elle est dans le flux normal du programme(en début de ligne).

Par contre, l'instruction `a = -a` n'est exécutée que si la condition `a > 0` a renvoyé `True`, il s'agit d'un **bloc** relatif à l'instruction  `if a > 0:` qui le précède Elle est **indentée** avec quatre espaces. Si j'affecte la valeur négative -5 à `a`, ce bloc ne sera pas exécuté, et le changement de signe n'aura pas lieu.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a = -5
if a > 0:
    a = -a
print(a)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    -5


</div>

-----

### L'instruction `else`

Indique le bloc d'instruction a exécuter si la condition n'est pas vérifiée.

**Syntaxe**

```python
if condition:
    bloc d'instructions exécuté si la condition est vraie
else:
    bloc d'instructions exécuté si la condition est fausse
```

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a = -3
if a > 0:
    a = -a
else:
    a = a*100

print(a)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    -300


</div>

-----

Comme initialement la variable a n'était pas positive, c'est le bloc d'instructions `else` qui a été exécuté.

### L'instruction `elif`

Cette instruction permet de réaliser des tests imbriqués, c'est un raccourci pour les instructions else et if.

**Syntaxe**

```python
if condition 1:
    bloc d'instructions exécuté si la condition 1 est vraie
elif condition 2:
    bloc d'instructions exécuté si la condition 1 est fausse et la condition 2 vraie
else:
    bloc d'instructions exécuté si les conditions 1 et 2 sont fausses
```

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
a = 3
if a == 7:
    print("C'est un chiffre porte bonheur")
elif a == 3:
    print("Quelques modifications sont nécessaires")
    a += 4

print(a)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Quelques modifications sont nécessaires
    7


</div>

-----

Vous voila maintenant armés pour aborder des programmes beaucoup plus riches dans lesquels vous allez pouvoir **prendre des décisions** en fonction des données qui lui arrivent.

## Opérateurs booléens

Les **opérateurs booléens** sont des opérateurs de *comparaison* qui retournent un objet de type booléen: `True` ou `False`.

Soit x et y des variables de type `int` ou `float`, les opérateurs de comparaison sont:

- `x < y`: x est-il inférieur à y ?
- `x <= y`: x est-il inférieur ou égal  à y ?
- `x > y`: x est-il supérieur à y ?
- `x >= y`: x est-il supérieur ou égal à y ?
- `x == y`: x est-il égal à y ?
- `x != y`: x est-il différent y ?

#### Exemples

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x = 3
y = 5
print(x < y)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    True


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print(x <= y)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    True


</div>

-----

Dans l'environnement jupyter notebook, le print sur la dernière ligne est optionnel, et le résultat de la dernière expression entrée est evalué et affiché.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x > y
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x >= y
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x == y
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x != y
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    True


</div>

On peut constater que ces instructions retournent systématiquement un objet de type booléen.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
type(x > y)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    bool


</div>

Ou un erreur si on cherche à comparer *l'incomparable*:

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x < "y"
```

</div>


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-12-9bebce4cbfdb> in <module>
    ----> 1 x < "y"
    

    TypeError: '<' not supported between instances of 'int' and 'str'


**ATTENTION:** Comme vous l'avez remarqué pour tester une égalité on utilise le double signe égal `==`. Tout simplement car le signe égal seul `=` est déjà utilisé pour l'affectation de variables.
