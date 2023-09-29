---
tags: ["complexité d'un algorithme", "correction d'un algorithme"]
---

::: programme

Révisions de [première](/1g/nsi/programme):

- Algorithmes de recherche: recherche en table, recherche dichotomique.
- Complexité d'un algorithme, notation grand O. Complexité linéaire, quadratique et logarithmique.
- Algorithmes de tri: tri par sélection, tri par insertion.
- Correction d'un algorithme, invariant de boucle.

:::

> Nous allons revoir quelques définitions importantes de première en s'appuyant sur les algorithmes
> classiques de recherche et de tris.

## Algorithme naïf de recherche: la recherche en table

Pour rechercher un élément dans une table on pourrait simplement parcourir tout simplement le
tableau jusqu'à rencontrer la valeur recherché. C'est ce que l'on appelle la [recherche en
table](/1g/nsi/8-algorithmique/1-parcours-sequentiel-dun-tableau/#la-recherche-en-table).

```python
def recherche(liste, élément):
    """Recherche d'un élément dans une liste
    
    Arguments
    ---------
    liste: liste d'entiers
    élément: entier
        l'élément cherché
    
    Returns
    -------
    int: l'indice de l'élément si trouvé ou -1 sinon
    
    """
    for i in range(len(liste)):
        if liste[i] == élément:
            # l'élément est trouve
            return i
    # non trouvé
    return -1

# Quelques tests
assert recherche([1], 1) == 0
assert recherche([1,6,5], 5) == 2
assert recherche([1,6,5], 7) == -1
```

Même si cet algorithme simple semble faire le travail, il n'est en pratique pas
du tout utiliser, car **il n'est pas du tout efficace**.

Pour mesurer l'efficacité d'un algorithme, on utilise la notion de **complexité**.

## Notion de complexité

Si je donne à mon programme une entrée de taille $N$. Quel est l'ordre de
grandeur, en fonction de $N$, du nombre d'opérations qu'il va effectuer ?

Complexité

:   La complexité d'un algorithme est le nombre d'opérations élémentaires(opération arithmétique,
    comparaison, affectation...)_ effectuées pour obtenir un résultat.

Si on prend l'exemple de l'algorithme précédent, on se rend compte que cela dépend des cas.
Expliquez...

Pour pouvoir faire des comparaisons entre algorithmes, l'informaticien étudie souvent la
**complexité dans le pire des cas**.

::: {.appli titre="Complexité de la recherche linéaire"}

Regardons ce que cela donne dans le cas de notre recherche en table, le pire des
cas correspond au cas où l'élément n'est pas dans le tableau.

Étudions chacune des étapes pour compter les opérations élémentaires effectuées.

```python
for i in range(len(liste)):      # N opérations
    if liste[i] == élément:      # N opérations
        return i                 # 0 opération(on est dans le pire des cas)
return -1                        # 1 seul return 
```

On obtient donc: $2N + 1$ opérations.

Les facteurs multiplicatifs et additifs sont négligés, on dit que notre
algorithme a une complexité grand O de $N$ notée:

$$
O(N)
$$

On parle d'_algorithme linéaire_: son temps d'exécution croit proportionnellement avec la taille de l'entrée.


:::

Notation asymptotique: grand O

: On utilise la notation asymptotique ($N \rightarrow \infty$) pour décrire le temps d'exécution des algorithmes. On se placera dans le pire des cas(Ex: élément non trouvé pour une recherche) la complexité est alors notée $O$.


::: examples

Par ordre de complexité croissante:

- complexité logarithmique: $O(\log N)$
- complexité linéaire: $O(N)$
- complexité quadratique: $O(N^2)$
- complexité exponentielle: $O(e^N)$

Dès $O(N^2)$ l'algorithme devient quasiment inutilisable en pratique.

:::



## Un algorithme efficace: la recherche dichotomique

Quand on cherche un mot dans le dictionnaire, on ne va pas le chercher en les lisant un par un, on
va utiliser la méthode de [recherche dichotomique vue en
première](/1g/nsi/8-algorithmique/4-recherche-dichotomique).

Cette méthode est possible dans le cas ou les données ont été au préalable trié, ce pour quoi il
existe également des [algorithmes](/1g/nsi/8-algorithmique/2-algorithmes-de-tri) efficaces.

<wc-wikimage title="Binary_search_into_array.png" caption="Cette image illustre la recherche de l'élément 4 dans tableau trié."></wc-wikimage>


Voici un exemple d'implémentation en Python:

```python
def recherche_dichotomique(liste, élément):
    """Recherche dichotomique

    Arguments
    ---------
    liste: liste d'entiers
        ATTENTION: la liste doit être triée
    élément: entier
        l'élément cherché
    
    Returns
    -------
    int: l'indice de l'élément si trouvé ou -1 sinon
    
    """
    # on initialise les indices début et fin aux extrémités de la liste
    début = 0
    fin = len(liste)    
    while début <= fin:
        # On se place au milieu de la liste
        milieu = (début + fin) // 2 # il, s'agit d'une division entière
        if liste[milieu] == élément:
            # l'élément est trouvé
            return milieu
        elif liste[milieu] < élément:   
            # l'élément est situé dans la sous-liste de droite    
            début = milieu + 1
        else:
            # l'élément est situé dans la sous-liste de gauche
            fin = milieu - 1
    return -1
```

::: {.appli titre="Complexité de la recherche dichotomique"}

En prenant l'exemple de la liste `L8 = [2, 11, 14, 20, 22, 30, 33, 37]`

1. Combien de tours de boucles sont faites lors des appels:
   
   - `recherche_dichotomique(L8, 11)`
   - `recherche_dichotomique(L8, 12)`
  
2. Montrer que dans le pire des cas, il faut 4 tours de boucles pour rechercher un élément dans `L16 = [3, 11, 14, 21, 22, 27, 33, 37, 42, 50, 55, 58, 62, 69, 76, 81]`
3. A votre avis combien faudrait-il de tours de boucles pour effectuer une recherche sur une liste de 256 éléments.
   
:::

Cet algorithme est beaucoup plus efficace, sa complexité (asymptotique dans le pire des cas) est
$O(log(N))$.

Ceci fait une énorme différence notamment lorsque la taille des données augmente:

![Comparaison des complexités linéaire et logarithmique](../../images/comparaison-complexite.png)

## Correction d'un algorithme

Pour rappel, un algorithme est une suite d'instructions permettant d'obtenir un
résultat.

La **correction d'un algorithme** est une démonstration qui prouve que
l'algorithme permet bien d'obtenir le résultat souhaité.

Nous allons utiliser une méthode répandue semblable au _raisonnement par
récurrence_ fondée sur la recherche d'un **invariant de boucle**.

Pour prouver la correction nous devons montrer les trois points suivants:

1. **Initialisation:** L'invariant est vrai avant la première itération.
2. **Conservation:** si l'invariant est vrai avant une itération, il restera vrai après l'itération.
3. **Terminaison:** la boucle se termine et nous donne le résultat attendu.

Nous allons appliquer cette méthode aux algorithmes de tris vus en première. 

## Correction du tri par sélection

On rappelle le principe de l'algorithme.

> Sur un tableau de N éléments (numérotés de 0 à $N-1$), le principe du tri par sélection est le suivant :
> &nbsp;
>- rechercher le plus petit élément du tableau, et l'échanger avec l'élément d'indice 0 ;
>- rechercher le second plus petit élément du tableau, et l'échanger avec l'élément d'indice 1 ;
>- continuer de cette façon jusqu'à ce que le tableau soit entièrement trié.

### Implémentation en Python

En voici une implémentation en python.

```python
def tri_selection(t):
    N = len(t)
    # Parcourir le tableau jusqu'à l'avant dernière valeur
    # en effet la dernière valeur sera forcément la plus grande
    for i in range(N-1):
        # on recherche l'indice du plus petit élément du sous-tableau de droite
        i_min = i
        #  Parcourir le reste du tableau pour rechercher l'élément le plus petit restant
        for j in range(i+1, N):
            if t[j] < t[i_min]:
                i_min = j
        if i_min != i:
            # échanger t[i] et t[i_min]
            t[i], t[i_min] = t[i_min], t[i]
    return t
```

Voici les états successifs du tableau après chaque tour de boucle avec en entrée `[12, 15, 1, 3, 7]`:

```
[1, 15, 12, 3, 7]
[1, 3, 12, 15, 7]
[1, 3, 7, 15, 12]
[1, 3, 7, 12, 15]
```

### Correction de l'algorithme

L'invariant de boucle consiste à montrer que si les $i$ premiers éléments du tableau sont triés
avant l'itération, alors les $i+1$ premiers éléments seront triés après une itération.

1. **Initialisation:** Au départ, $i = 0$, le sous-tableau trié de gauche ne contient aucun élément
   `[]`. Il est donc forcément trié.
2. **Conservation:** Lorsqu'on considère le tour de boucle $i$, le tableau est déjà trié pour les
   indices $0$ à $i-1$. Grâce à la boucle interne, on trouve le plus petit élément parmi les
   éléments d'indice $i$ à $n$ (tous plus grands que l'élément d'indice $i-1$), et on le place à
   l'indice $i$. Après le tour de boucle, le tableau sera donc trié pour les indices de $0$ à $i$.
3. **Terminaison:** la boucle se termine lorsqu'on arrive à l'avant-dernier élément du tableau. Le
   tableau est trié pour les éléments d'indice $0$ à $n-2$, et le dernier élément d'indice $n-1$
   est forcément plus grand que l'élément d'indice $ $n-2$. Le tableau est donc entièrement trié.

::: {.appli titre="Étude du tri par insertion"}

La partie [exercice](./exo) propose une étude complète de l'algorithme de tri par insertion vu
également en première.

> Dans l'algorithme, on parcourt le tableau à trier du début à la fin. Au moment où on considère le
> i-ème élément, les éléments qui le précèdent sont déjà triés. Pour faire l'analogie avec
> l'exemple du jeu de cartes, lorsqu'on est à la i-ème étape du parcours, le i-ème élément est la
> carte saisie, les éléments précédents sont la main triée et les éléments suivants correspondent
> aux cartes encore mélangées sur la table.

> L'objectif d'une étape est d'insérer le i-ème élément à sa place parmi ceux qui précèdent. Il
> faut pour cela trouver où l'élément doit être inséré en le comparant aux autres, puis décaler les
> éléments afin de pouvoir effectuer l'insertion. En pratique, ces deux actions sont fréquemment
> effectuées en une passe, qui consiste à faire « remonter » l'élément au fur et à mesure jusqu'à
> rencontrer un élément plus petit.

[Source Wikipedia](http://fr.wikipedia.org/wiki/Tri_par_insertion)

```python
def tri_insertion(t: list):
    N = len(t)
    for i in range(1, N):
        x = t[i]
        j = i
        while j > 0 and t[j-1] > x:
            t[j] = t[j-1]
            j = j - 1
        t[j] = x
    return t
```
:::


::: {.plus titre="Complexité des algorithmes de tri"}

Montrer que les deux algorithmes de tris précédents ont une complexité quadratique en $O(n^2)$.

:::
