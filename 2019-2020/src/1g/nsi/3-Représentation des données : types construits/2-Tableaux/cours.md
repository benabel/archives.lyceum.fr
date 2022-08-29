---
"tags": ["python", "tableaux", "listes", "array"]
---

::: programme
+---------------------------+-------------------------------+--------------------------------------+
|         Contenus          |      Capacités attendues      |             Commentaires             |
+===========================+===============================+======================================+
| Tableau indexé, tableau   | Lire et modifier les éléments | Seuls les tableaux dont les          |
| donné en                  | d’un tableau grâce à leurs    | éléments sont du même type sont      |
| compréhension             | index.                        | présentés.                           |
|                           |                               |                                      |
|                           | Constuire un tableau par      | Aucune connaissance des              |
|                           | compréhension.                | tranches (slices) n’est exigible.    |
|                           |                               |                                      |
|                           | Utiliser des tableaux de      | L’aspect dynamique des tableaux      |
|                           | tableaux pour représenter des | de Python n’est pas évoqué.          |
|                           | matrices, notation `a[i][j]`  |                                      |
|                           |                               | Python identifie listes et tableaux. |
|                           |                               |                                      |
|                           | Itérer sur les éléments d'un  | Il n’est pas fait référence aux      |
|                           | tableau.                      | tableaux de la bibliothèque          |
|                           |                               | NumPy.                               |
+---------------------------+-------------------------------+--------------------------------------+
:::

Nous nous intéressons dans ce chapitre aux tableaux `list` qui sont des collections *ordonnées de valeurs* *[mutables](https://fr.wiktionary.org/wiki/mutable)*.

## Syntaxe

Les valeurs de la collection sont entourées par des crochets `[]`, leurs éléments sont séparés par des
virgules.

Les éléments d'une liste peuvent avoir des types différents.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste = [ 1, 'deux' , 3]
type(ma_liste)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    list


</div>

### Longueur et accés aux éléments
On peut facilement accéder à la longueur de la liste grace à la fonction
`len` et à chacun de ces éléments grâce à leur index *(Attention le
premier élement à l'index 0)*

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
len(ma_liste)
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
ma_liste[0]
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
ma_liste[2]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3


</div>

On peut inversement connaître l'indice correspondant à une valeur grâce à l'attribut `index`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.index('deux')
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    1


</div>

### Ajout et suppression d'éléments

Comme les listes sont *[mutables](https://fr.wiktionary.org/wiki/mutable)*, on peut ajouter des éléments à la liste à la fin avec la méthode `append`, ou à un indice quelconque avec la méthode `insert`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.append(4)
ma_liste
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [1, 'deux', 3, 4]


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.insert(0, 'zéro')
ma_liste
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 1, 'deux', 3, 4]


</div>

On peut au contraire supprimer des éléments de la liste à la fin avec la méthode `pop()`, ou à un indice quelconque avec la méthode `pop(indice)`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.pop()
ma_liste
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 1, 'deux', 3]


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.pop(1)
ma_liste
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 'deux', 3]


</div>

## Itération sur les valeurs de la liste

On peut utiliser les index ou une méthode simplifiée implémentée dans Python.

### Méthode simplifiée

On fait une itération des directe des valeurs du tableau.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for e in ma_liste:
    print(e)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    zéro
    deux
    3


</div>

-----

### Itération avec l'index

C'est la méthode classique utilisée dans les langages impératifs.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(len(ma_liste)):
    print("indice:", i, "valeur:", ma_liste[i])
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    indice: 0 valeur: zéro
    indice: 1 valeur: deux
    indice: 2 valeur: 3


</div>

-----

## Tableau donné en compréhension

Plutôt que de remplir un tableau par énumération de ces éléments dans une boucle, on peut définir des [listes en compréhension](), c'est-à-dire des listes dont le contenu est *défini par filtrage du contenu d'une autre liste*.

### Boucle classique

On commence par créer une liste vide, puis, on ajoute grâce à une boucle les éléments un à un à la liste grâce à la méthode `append()`.

Voici par exemple comment créer une liste contenant les puissances de 2 de $2^1$ à $2^{12}$.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
L = []
for i in range(13):
    L.append(2**i)
L
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]


</div>

### Ecriture en compréhension

Cette construction syntaxique offre des avantages de lisibilité et de concision et se rapproche de la notation utilisée en mathématiques :

$$
S=\{2^{n} | n\in {\mathbb{N}}, n<13\}
$$


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
L = [2**n for n in range(13)]
L
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096]


</div>

On peut même ajoter des conditions, exemple ici on crée une liste des puissance de 2 des puissance paires.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
L = [2**n for n in range(13) if n % 2 == 0]
L
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [1, 4, 16, 64, 256, 1024, 4096]


</div>

::: {.plus titre="Syntaxe complète avec `else`"}
Il est possible d'utiliser une clause `else` dans les conditions grâce à l'opérateur ternaire: `valeur_si_vrai if condition else valeur_si_faux`

```python
[f(x) if condition else g(x) for x in sequence]
```
Par exemple:

```python
[str(i) + " est pair" if i % 2 == 0 else str(i) + " est impair" for i in range(5)]
```
renvoie: `['0 est pair', '1 est impair', '2 est pair', '3 est impair', '4 est pair']`
:::    

## Tableaux à deux dimensions: les matrices

Pour représenter un tableau de données, on peut utiliser une liste de liste.

$$
\begin{pmatrix}
   1 & 2 & 3\\
   2 & 4 & 6\\
   3 & 6 & 9 
\end{pmatrix}
$$

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
M = [[1, 2, 3],
     [2, 4, 6],
     [3, 6, 9]]
M
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [[1, 2, 3], [2, 4, 6], [3, 6, 9]]


</div>

On accéde alors aux éléments en précisant l'index de ligne et le colonne: `M[i ligne][i colonne]`.

Par exemple pour accéder au troisième élément de la première ligne.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
M[0][2]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3


</div>

Accés au deuxième élément de la troisième ligne.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
M[2][1]
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    6


</div>
