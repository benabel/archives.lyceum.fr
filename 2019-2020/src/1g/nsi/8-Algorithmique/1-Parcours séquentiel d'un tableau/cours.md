---
"tags": ["Python", "algorithmique", "algorithme de force brute"]
---

::: programme
+--------------------------+-----------------------------------+-------------------------------------+
|         Contenus         |        Capacités attendues        |            Commentaires             |
+==========================+===================================+=====================================+
| Parcours séquentiel d'un | Écrire un algorithme de           | On montre que le coût est linéaire  |
| tableau                  | recherche d'une occurence sur     |                                     |
|                          | des valeurs de type               |                                     |
|                          | quelconque                        |                                     |
|                          |                                   |                                     |
|                          | Écrire un algorithme de           |                                     |
|                          | recherche d'un extremum, de       |                                     |
|                          | calcul d'une moyenne.             |                                     |
+--------------------------+-----------------------------------+-------------------------------------+
:::

Dans ce chapitre, nous allons étudier des algorithmes de parcours séquentiel d'un tableau pour:

1. Rechercher un élément d'un type donné.
2. Rechercher le maximum d'un tableau.
3. Calculer la moyenne d'un tableau.

Ces algorithmes "séquentiels" ne sont pas du tout efficace, on les appelle en anglais *"Brute force algorithms"*.

## Méthodes de parcours séquentiel d'un tableau

### avec les indices

On peut parcourir le tableau en utilisant les indices, pour cela on utise la fonction range qui génére des entiers successifs jusqu'à une limite supérieure ici la longueur totale de la liste. 

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
L = [12, 24, 32, 69, 45, -12]
for i in range(len(L)):
    print("indice: ", i, "valeur: ", L[i])
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    indice:  0 valeur:  12
    indice:  1 valeur:  24
    indice:  2 valeur:  32
    indice:  3 valeur:  69
    indice:  4 valeur:  45
    indice:  5 valeur:  -12


</div>

-----

### avec le mot-clé `in`

Python met à disposition le mot-clé `in` pour réaliser aisément des itérations sur les listes.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for e in L:
    print("élément: ", e)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    élément:  12
    élément:  24
    élément:  32
    élément:  69
    élément:  45
    élément:  -12


</div>

-----

## Recherche d'un extrémum

On initialise la valeur au premier élement du tableau puis on parcours le tableau pour vérifier s'il existe un élément soit plus petit soit plus grand.

### Recherche du maximum

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
maximum = L[0]
for e in L:
    if e > maximum:
        maximum = e
print("Le maximum est: ", maximum)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Le maximum est:  69


</div>

-----

### Recherche du minimum

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
minimum = L[0]
for e in L:
    if e < minimum:
        minimum = e
print("Le minimum est: ", minimum)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Le minimum est:  -12


</div>

-----

## Calculer la moyenne d'un tableau

On initialise une valeur accumulatrice à 0, puis on additionne tous les éléments du tableau. Enfin on divise la somme des éléments par le nombre d'éléments du tableau.


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
somme = 0
for e in L:
    somme = somme + e
moyenne = somme / len(L)
print("La moyenne est: ", moyenne)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    La moyenne est:  28.333333333333332


</div>

-----

## La recherche en table

Nous allons voir comment chercher une valeur dans un tableau par une méthode de parcours du tableau. Cet algorithme naïf est trsè couteux, et on verra par la suite d'autres algoritmes beaucoup plus efficaces pour rechercher un élément.

### Commencons par créer une liste d'éléments

Pour cela nous allons écrire une fonction pour créer facilement des  listes de mots.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
import random
import string

lettres = string.ascii_lowercase

def create_liste(N, l=3):
    """Renvoie une liste de N mots ayant l lettres"""
    L = []
    # on rend le générateur prédictible en imposant une graine fixe
    random.seed(1789)
    for i in range(N):
        mot = ''.join(random.choice(lettres) for i in range(l))
        L.append(mot)
    return L
mots = create_liste(10, 3)
print(mots)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    ['xwt', 'bup', 'bou', 'xbd', 'upd', 'fuz', 'tfb', 'yht', 'ryd', 'twn']


</div>

-----

### Algorithme de recherche par parcours séquentiel du tableau

Pour trouver un élément la méthode la plus simple consisterait à parcourir l'ensemble du tableau et de s'arrêter lorsqu'on trouve l'élément.

On peut par exemple écrire cet algorithme avec une boucle `while`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
cherché = 'fuz'
i = 0
while i < len(mots) and mots[i] != cherché:
    i += 1
    
if i < len(mots):
    print("Trouvé:", i)
else:
    print("Non trouvé")
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Trouvé: 5


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
cherché = 'ful'
i = 0
while i < len(mots) and mots[i] != cherché:
    i += 1
if i < len(mots):
    print("Trouvé:", i)
else:
    print("Non trouvé")
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Non trouvé


</div>

-----

### Coût de l'algorithme: notion de complexité

Cette méthode a l'avantage d'ếtre simple, et fonctionne cependant si le tableau est long l'algorithme devient très long. Il faut dans le pire des cas(si l'élément cherché est à la fin ou n'est pas trouvé) parcourir toute la liste.

On dit que le coût de l'algorithme est linéaire ou encore que c'est un algorithme de complexité n, n étant la taille des données. En effet, l'algorithme effectue n tours de boucles pour trouver la solution dans le pire des cas.

### Mesure du temps de référence(benchmark)

Mesurons le temps pris par cet algorithme sur une liste de 10 millions d'éléments grâce à la fonction magique `%timeit`.

*Remarque: on utilise des mots de 5 caractères ce qui permet d'obtenir $26^5$ mots différents(bien que le générateur puisse créer des doublons dans la liste).*

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
mots = create_liste(int(1E7), 5)
```

</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
%%timeit
cherché = 'abcde'
i = 0
while i < len(mots) and mots[i] != cherché:
    i += 1
if i < len(mots):
    print("Trouvé:", i)
else:
    print("Non trouvé")
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    Trouvé: 5929792
    590 ms ± 752 µs per loop (mean ± std. dev. of 7 runs, 1 loop each)


</div>

-----

On voit qu'en moyenne, l'algorithme a pris environ 600ms pour effectuer cette recherche. On comparera ce temps au temps mis par un algorithme de recherche beaucoup plus efficace dans un chapitre ultérieur: **la recherche dichotomique**.
