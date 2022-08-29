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

## Les tableaux: `list`

En [première](/1g/nsi/3-representation-des-donnees-types-construits/2-tableaux), nous avons déjà
rencontré les tableaux(_tableaux dynamiques_ pour être plus précis), qui sont des séquences
d'éléments ordonnés auxquels on peut accéder facilement par leur *index*.

<p><a href="https://commons.wikimedia.org/wiki/File:Tableau_%C3%A0_une_dimension.png#/media/Fichier:Tableau_à_une_dimension.png"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Tableau_%C3%A0_une_dimension.png" alt="Tableau à une dimension.png"></a><br>Par Original uploader was <a href="https://fr.wikipedia.org/wiki/User:Sanao" class="extiw" title="fr:User:Sanao">Sanao</a> at <a class="external text" href="https://fr.wikipedia.org">fr.wikipedia</a> — Transferred from <a class="external text" href="https://fr.wikipedia.org">fr.wikipedia</a>; transferred to Commons by <a href="//commons.wikimedia.org/wiki/User:Bloody-libu" title="User:Bloody-libu">User:Bloody-libu</a> using <a rel="nofollow" class="external text" href="http://tools.wikimedia.de/~magnus/commonshelper.php">CommonsHelper</a>., Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=18040241">Lien</a></p>

En python les tableaux sont implémentés par l'objet `list` dont les éléments sont séparés par une
virgule et entourés de crochets.

```python
# création
ma_liste = [1, "deux", 3.0]
# accés aux élements par index
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

Les quatre méthodes qui ont été définies dans la classe `list` en Python sont ce que l'on appelle
une _implémentation_ de la structure de donnée tableau.

Il existe de nombreux langages de programmation qui implémentent le type abstrait $tableau$, nous
avions vu l'[année
dernière](/1g/nsi/7-langages-et-programmation/7-comparaisons-de-langages) les différences
d'implémentation entre les `list` de Python et les `Array` de javascript.

::: {.def terme="Implémentation"}

L'implémentation d'une structure de données ou d'un algorithme est leur _mise en œuvre_ pratique
dans un langage de programmation.

:::

Cependant, on retrouve des méthodes similaires qui sont ce que l'on appelle l'_interface_ de la
structure de données $tableau$:

1. « Insérer » : ajoute un élément dans le tableau à l'index souhaité. `ajout(index, élément)` ;
2. « Retirer » : retire un élément de le tableau à l'index souhaité. `suppr(index)` ;
3. « Le tableau est-il vide ? » : renvoie « vrai » si le tableau est vide, « faux » sinon. `est_vide()`
4. « Nombre d'éléments dans le tableau » : renvoie le nombre d'éléments dans le tableau. `longueur()`

*[Article Wikipedia sur les listes](https://fr.wikipedia.org/wiki/Liste_(informatique)#Primitives)*{.cite-source}

::: {.def terme="Interface"}

L'interface d'une structure de données est la _spécification_ des méthodes pouvant être appliquées
sur cette structure de données.

:::

::: {.appli titre="Implémentation d'un tableau en python"}

Créer une classe `Tableau` qui implémente les quatre méthodes ci-dessus en stockant les données du
tableau dans un attribut appelé `data` de type `list`e.

Pour aller plus loin, faire l'[exercice 2](./exo).

:::

## Les dictionnaires: `dict`

Un dictionnaire, est un type de données associant à un ensemble de **clés**, un ensemble de
**valeurs** correspondantes.

Il s'agit d'une structure de données _abstraite_ appelée tableau associatif qui a une
implémentation native en Python par la classe `dict` vue en
[première](/1g/nsi/3-representation-des-donnees-types-construits/3-dictionnaires).

```python
# création du dictionnaire
personne = {"nom": "Lagaffe", "prenom": "Gaston", "age": 27, "rigolo": True}
# accés à une valeur
personne['age'] # renvoie 27
```

### Méthodes

Les opérations usuellement fournies par un tableau associatif sont :

- ajout : association d'une nouvelle valeur à une nouvelle clef ;
- modification : association d'une nouvelle valeur à une ancienne clef ;
- suppression : suppression d'une clef ;
- recherche : détermination de la valeur associée à une clef, si elle existe.

*[Article Wikipedia sur le Tableau associatif](https://fr.wikipedia.org/wiki/Tableau_associatif)*{.cite-source}

### Implémentation en Python

Les dictionnaires étant mutables, on peut ajouter supprimer ou modifier une valeur à un dictionnaire déjà
créé:

```python
# ajout d'une clé
personne["dessinateur"] = "André Franquin"
# suppression d'une clé
del personne["rigolo"]
# modification d'une clé
personne["age"] = 28
# accés à une valeur
personne['age'] # renvoie 28
```

La recherche d'une valeur d'une valeur est traitée ci-après comme le propose le [programme
officiel](../../programme).

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
| Accés à un élément        | `liste[i]`           | $O(1)$     |
+---------------------------+----------------------+------------+
| Modification d'un élément | `liste[i] = e`       | $O(1)$     |
+---------------------------+----------------------+------------+
| Longueur de la liste      | `len(liste)`         | $O(1)$     |
+---------------------------+----------------------+------------+
| Recherche d'un élément    | `e in liste`         | $O(n)$     |
+---------------------------+----------------------+------------+

*[Time complexity sur le wiki Python](https://wiki.python.org/moin/TimeComplexity#list)*{.cite-source}

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

*[Time complexity sur le wiki Python](https://wiki.python.org/moin/TimeComplexity#dict)*{.cite-source}