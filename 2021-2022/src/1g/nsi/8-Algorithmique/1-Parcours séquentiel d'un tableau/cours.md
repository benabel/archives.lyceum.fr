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
def maximum(liste):
    # ne pas utiliser max pour le nom de variable
    # car la fonction max existe en Python(on l'écraserait!)
    maxi = liste[0]
    for e in liste:
        if e > maxi:
            maxi = e
    return maxi

# appel de la fonction sur L
maximum(L)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    69


</div>

### Recherche du minimum

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def minimum(liste):
    mini = L[0]
    for e in liste:
        if e < mini:
            mini = e
    return mini

# appel de la fonction avec la liste L en argument
minimum(L)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    -12


</div>

## Calculer la moyenne d'un tableau

On initialise une valeur accumulatrice à 0, puis on additionne tous les éléments du tableau. Enfin on divise la somme des éléments par le nombre d'éléments du tableau.


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def moyenne(liste):
    somme = 0
    for e in liste:
        somme = somme + e
    # On divise la somme de tpus les éléments par leur nombre
    moyenne = somme / len(L)
    return moyenne

moyenne(L)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    28.333333333333332


</div>

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

Dans une fonction **le `return` est définitif**, on peut donc facilement arrêter la boucle dès que la valeur est trouvée. Si on est arrivé au bout de la boucle on est donc certains que l'élément cherché n'est pas présent.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def recherche(liste, cherche):
    """Fonction de recherche de l'élément dans la liste

    Arguments
    ---------
    l: liste
        la liste dans laquelle on cherche
    e: str
        l'élément chérché
    Retourne
    --------
    int 
       l'indice de l'élément si trouvé et moins la longeur de la liste -1  sinon
    """
    for e in liste:
        if e == cherche:
            return i
    return -len(liste) - 1

recherche(mots, "fuz")
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    5


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
recherche(mots, "ful")
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    -11


</div>

::: plus

Le choix de la valeur de retour peut paraitre étrange, mais il convient:

- de toujours renvoyer le même type de valeur. Ici `int`, il n'est pas souhaitable de passer par un booléen si non trouvé.
- que cette valeur en cas de recherche infructueuse soit facilement reconnaissable et inutilisable. Une valeur négative est facile à reconnaitre, et de plus malgré les indexages négatifs possibles en python, si quelqu'un utilisait cette valeur pour l'index, il aurait une `IndexError` alors qu'un renvoi de `-1` donnerait l'indice du dernier élément en indexage négatif.

:::

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
recherche(mots, 'abcde')
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    129 ms ± 655 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)


</div>

-----

On voit qu'en moyenne, l'algorithme a pris environ 130ms pour effectuer cette recherche. On comparera ce temps au temps mis par un algorithme de recherche beaucoup plus efficace dans un chapitre ultérieur: **la [recherche dichotomique](/1g/nsi/8-algorithmique/4-recherche-dichotomique)**.
