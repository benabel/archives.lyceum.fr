---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: programme

+-------------------------+----------------------------------+---------------------------------+
|        Contenus         |       Capacités attendues        |          Commentaires           |
+=========================+==================================+=================================+
| Structures de données,  | Spécifier une structure de       | L’abstraction des structures de |
| interface et            | données par son interface.       | données est introduite après    |
| implémentation.         |                                  | plusieurs implémentations d’une |
|                         | Distinguer interface et          | structure simple comme la file  |
|                         | implémentation.                  | (avec un tableau ou avec deux   |
|                         |                                  | piles).                         |
|                         | Écrire plusieurs implémentations |                                 |
|                         | d’une même structure de          |                                 |
|                         | données.                         |                                 |
|                         |                                  |                                 |
+-------------------------+----------------------------------+---------------------------------+
| Listes, piles, files :  | Distinguer des structures par le |                                 |
| structures linéaires.   | jeu des méthodes qui les         | _                               |
|                         | caractérisent.                   |                                 |
| Dictionnaires, index et |                                  |                                 |
| clé.                    | Choisir une structure de         |                                 |
|                         | données adaptée à la situation à |                                 |
|                         | modéliser.                       |                                 |
|                         |                                  |                                 |
|                         | Distinguer la recherche d’une    |                                 |
|                         | valeur dans une liste et dans un |                                 |
|                         | dictionnaire.                    |                                 |
|                         |                                  |                                 |
+-------------------------+----------------------------------+---------------------------------+

:::

> Cette année, nous allons voir de nouvelles façons d'organiser et de traiter les données, ce que
> l'on appelle des **structures de données**. On rencontrera, notamment des structures linéaires
> comme la liste, la pile et la file, mais également des structures relationnelles telles que les
> arbres ou les graphes. Dans ce chapitre, nous allons commencer par distinguer la structure de
> données de son implémentation en s'appuyant sur les tableaux et dictionnaires vus en première.

## Les tableaux: _(`list` en python)_

En [première](/1g/nsi/3-representation-des-donnees-types-construits/2-tableaux), nous avons déjà
rencontré les tableaux(_tableaux dynamiques_ pour être plus précis), qui sont des séquences
d'éléments ordonnés auxquels on peut accéder facilement par leur *index*.

<wc-wikimage title="Tableau_à_une_dimension.png" caption="Un tableau est une suite de données ordonnées auxquelles on accéde par un index(un entier).">
</wc-wikimage>

En python les tableaux sont implémentés par l'objet `list` dont les éléments sont séparés par une
virgule et entourés de crochets.

```python
# création
ma_liste = [1, "deux", 3.0]
# accès aux élements par index
ma_liste[1] # renvoie "deux"!
```

Les listes étant mutables, on peut ajouter ou supprimer des éléments après création.

- Ajout d'un élément à l'index souhaité :

```python
# ajout avec la méthode `insert()`
ma_liste.insert(0, "zéro")
ma_liste # renvoie ['zéro', 1, 'deux', 3.0]
```
- Suppression d'un élément à l'index souhaité :

```python
# suppression avec la méthode `pop()`
ma_liste.pop(2)
ma_liste # renvoie ['zéro', 1, 3.0]
```

- Il est également fréquent de souhaiter connaitre la longueur de la liste :

```python
# longueur avec la fonction `len()`
len(ma_liste) # renvoie 3 puisque ['zéro', 1, 3.0]
```

::: {.plus titre="Une liste est-elle vide en Python?"}

Python étant un langage à type dynamique, il peut convertir le type d'une valeur en un autre
suivant la situation. Ainsi si une liste se retouve dans une situation ou un booléen est
attendu(`if liste: ... while liste:`), il convertira:

- la liste vide en: `False`
- une liste non vide en: `True`

Donc vérifier si une liste est vide peut-être simplement fait avec `bool(liste)`.

:::


## Différence entre interface et implémentation

Les quatre méthodes qui ont été définies dans la classe `list` en Python: `len`, `pop`, `insert` sont ce que l'on appelle
une _implémentation_ de la structure de donnée tableau.

Implémentation

:   L'implémentation d'une structure de données ou d'un algorithme est une _mise en œuvre_ pratique
    dans un langage de programmation.

Il existe de nombreux langages de programmation qui implémentent le type abstrait $tableau$, nous
avions vu l'[année
dernière](/1g/nsi/7-langages-et-programmation/7-comparaisons-de-langages) les différences
d'implémentation entre les `list` de Python et les `Array` de javascript.

Cependant, on retrouve des méthodes similaires qui sont ce que l'on appelle l'_interface_ de la
structure de données $tableau$:

1. « Insérer » : ajoute un élément dans le tableau à l'index souhaité. `ajout(index, élément)`;
2. « Retirer » : retire un élément de le tableau à l'index souhaité. `suppr(index)`;
3. « Le tableau est-il vide ? » : renvoie « vrai » si le tableau est vide, « faux » sinon. `est_vide()`;
4. « Nombre d'éléments dans le tableau » : renvoie le nombre d'éléments dans le tableau. `longueur()`.

[Article Wikipedia sur les listes](https://fr.wikipedia.org/wiki/Liste_(informatique)#Primitives){.cite-source}

Interface

:   L'interface d'une structure de données est la _spécification_ des méthodes pouvant être appliquées
    sur cette structure de données.

::: {.plus titre="Vers le pseudo-langage"}

L'intérêt de définir des structures de données avec une interface commune est de pouvoir écrire des algorithmes sur le papier en utilisant l'interface définie.

On utilise alors un pseudo-langage plus ou moins proche de la langue naturelle qui pourra être implémenté dans tous les langages de programmation ayant défini la structure de données.

:::


::: {.appli titre="Implémentation d'un tableau en python"}

Créer une classe `Tableau` qui implémente les quatre méthodes ci-dessus en stockant les données du
tableau dans un attribut appelé `data` de type `list`e.

Pour aller plus loin, faire l'[exercice 2](./exo).

:::

## Les Tableaux associatifs: _(`dict`ionnaires en Python)_

Un dictionnaire, est un type de données associant à un ensemble de **clés**, un ensemble de
**valeurs** correspondantes.

<wc-wikimage title="Associative_array_as_linked_list.svg" caption="Dans tableau associatif, on accéde aux données par une clé(chaîne de caractère), ils ne sont généralement pas ordonnés.">
</wc-wikimage>

Il s'agit de _l'implémentation_ d'une structure de données _abstraite_ appelée **tableau associatif**.

### Interface

Les opérations usuellement fournies par un tableau associatif sont :

- ajout : association d'une nouvelle valeur à une nouvelle clef ;
- modification : association d'une nouvelle valeur à une ancienne clef ;
- suppression : suppression d'une clef ;
- recherche : détermination de la valeur associée à une clef, si elle existe.

[Article Wikipedia sur le Tableau associatif](https://fr.wikipedia.org/wiki/Tableau_associatif){.cite-source}
  
### Implémentation en python

Les dictionnaires font partie de la bibliothèque standard de Python grâce à la classe `dict` vue en
[première](/1g/nsi/3-representation-des-donnees-types-construits/3-dictionnaires).

```python
# création du dictionnaire
personne = {"nom": "Lagaffe", "prenom": "Gaston", "age": 27, "rigolo": True}
# accès à une valeur
personne['age'] # renvoie 27
```

Les dictionnaires étant mutables, on peut ajouter supprimer ou modifier une valeur à un dictionnaire déjà
créé:

```python
# ajout d'une clé
personne["dessinateur"] = "André Franquin"
# suppression d'une clé
del personne["rigolo"]
# modification d'une clé
personne["age"] = 28
# accès à une valeur
personne['age'] # renvoie 28
```

La recherche d'une valeur d'une valeur est traitée ci-après comme le propose le [programme
officiel](../../programme).

::: {.plus titre="Différentes implémentations des dictionnaires"}

L'article anglais de wikipédia compare diverses implémentations des tableaux associatifs.

https://en.wikipedia.org/wiki/Associative_array#Comparison

- table de hachage
- arbres binaires de recherche équilibrés ou non
- liste chaînée...

En fonction des implémentations utilisées, les opérations de recherche ou d'ajouts sont plus ou moins couteuses en temps:

- temps fixe: $O(1)$
- temps logarithmique $O(\log n)$
- temps linéaire $O(n)$ 

:::

## Recherche d'une valeur

Les méthodes d'itération diffèrent légèrement entre les `list`es et le `dict`ionnaire en Python.

### Dans une liste

```python
# on crée une liste vide par compréhension
paires = [2*i for i in range(10)]
print(paires) # affiche [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

def recherche_liste(liste, élément):
    # itération sur les valeurs de la liste
    for e in liste:
        if e == élément:
            return True
    return False

# Appels de la fonction
recherche_liste(paires, 3) # renvoie False
recherche_liste(paires, 8) # renvoie True
```

::: {.plus titre="Avec le mot-clé in"}

On peut utiliser le mot-clé `in` pour tester la présence d'une valeur dans la liste:

```python
>>> 8 in paires
True
>>> 7 in paires
False

```
:::

### Dans un dictionnaire

Il existe trois méthodes d'itération sur les dictionnaires vues en [première](/1g/nsi/3-representation-des-donnees-types-construits/3-dictionnaires/#itération-sur-les-dictionnaires):

- Itération sur les clés: `keys()`
- Itération sur les valeurs: `values()`
- Itération sur les paires clé, valeurs: `items()`

Pour rechercher une valeur, une itération sur les valeurs suffit.

```python
personne = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 28, 'dessinateur': 'André Franquin'}

def recherche_dict(dico, valeur):
    for val in dico.values():
        if val == valeur:
            return True
    return False

recherche_dict(personne, 'André Franquin') # renvoie True
recherche_dict(personne, 'Lagafe') # renvoie False

```

::: {.plus titre="Avec le mot-clé in"}

Le mot-clé `in` teste l'opérande parmi les _clés_ et non les valeurs.

```python
>>> 'André Franquin' in personne
False
>>> 'dessinateur' in personne
True
```

:::

## Complexité des opérations

Nous avons déjà défini la complexité temporelle d'un algorithme qui consiste à compter le nombre
d'opérations élémentaires effectuées par un algorithme pour aboutir au résultat souhaité.

Nous allons préciser ici ce que l'on entend par opération élémentaire, car parfois lorsque l'on
tape une opération celle-ci n'est pas élémentaire.

::: prop
Une opération est élémentaire si elle a une complexité $O(1)$.
:::

### Cas des `list`es

+---------------------------+----------------------+------------+
|         Opération         |       Exemple        | Complexité |
+===========================+======================+============+
| Ajout à la fin            | `liste.append(e)`    | $O(1)$     |
+---------------------------+----------------------+------------+
| Insertion d'un élément    | `liste.insert(i, e)` | $O(n)$     |
+---------------------------+----------------------+------------+
| Suppression à la fin      | `liste.pop()`        | $O(1)$     |
+---------------------------+----------------------+------------+
| Suppression au milieu     | `liste.pop(i)`       | $O(n)$     |
+---------------------------+----------------------+------------+
| Accès à un élément        | `liste[i]`           | $O(1)$     |
+---------------------------+----------------------+------------+
| Modification d'un élément | `liste[i] = e`       | $O(1)$     |
+---------------------------+----------------------+------------+
| Longueur de la liste      | `len(liste)`         | $O(1)$     |
+---------------------------+----------------------+------------+
| Recherche d'un élément    | `e in liste`         | $O(n)$     |
+---------------------------+----------------------+------------+

[Time complexity sur le wiki Python](https://wiki.python.org/moin/TimeComplexity#list){.cite-source}

### Cas des `dict`ionnaires

+---------------------------+----------------------+------------+
|         Opération         |       Exemple        | Complexité |
+===========================+======================+============+
| Ajout d'un élément        | `dico[clé] = val`    | $O(1)$     |
+---------------------------+----------------------+------------+
| Modification d'un élément | `dico[clé] = val`    | $O(1)$     |
+---------------------------+----------------------+------------+
| Suppression d'un élément  | `del dico[clé]`      | $O(1)$     |
+---------------------------+----------------------+------------+
| Accès à un élément        | `dico[i]`            | $O(1)$     |
+---------------------------+----------------------+------------+
| Recherche d'une clé       | `e in dico`          | $O(1)$     |
+---------------------------+----------------------+------------+
| Recherche d'un valeur     | `e in dico.values()` | $O(n)$     |
+---------------------------+----------------------+------------+

_Note: les complexités données sont moyennes car dans le pire des cas, toutes ses opérations sont
en $O(n)$._

[Time complexity sur le wiki Python](https://wiki.python.org/moin/TimeComplexity#dict){.cite-source}
