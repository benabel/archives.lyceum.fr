---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: programme

+------------------------+----------------------------------+------------------------------------------+
|        Contenus        |       Capacités attendues        |               Commentaires               |
+========================+==================================+==========================================+
| Structures de données, | Spécifier une structure de       | L’abstraction des structures de          |
| interface et           | données par son interface.       | données est introduite après             |
| implémentation.        |                                  | plusieurs implémentations d’une          |
|                        | Distinguer interface et          | structure simple comme la file           |
|                        | implémentation.                  | (avec un tableau ou avec deux            |
|                        |                                  | piles).                                  |
|                        | Écrire plusieurs implémentations |                                          |
|                        | d’une même structure de          |                                          |
|                        | données.                         |                                          |
|                        |                                  |                                          |
+------------------------+----------------------------------+------------------------------------------+
| Listes, piles, files : | Distinguer des structures par le | On distingue les modes FIFO(`first_      |
| structures linéaires.  | jeu des méthodes qui les         | _in first out_) et LIFO (_last in first_ |
|                        | caractérisent.                   | _out_) des piles et des files.           |
|                        |                                  |                                          |
|                        | Choisir une structure de         |                                          |
|                        | données adaptée à la situation à |                                          |
|                        | modéliser.                       |                                          |
+------------------------+----------------------------------+------------------------------------------+

:::

::: intro 

<wc-wikimage class= "half right" title="QUEUE_VS_STACK.svg" caption="Différences entre les piles et files"></wc-wikimage>

> Dans ce chapitre nous allons décrire des structures de données linéaires appelées **listes**,
> dont nous verrons deux formes restreintes _très efficaces_: les **piles** et les **files**. Il
> faut bien comprendre que lorsqu'on parle de structure de données, on parle d'une _représentation
> abstraite_ qui n'est pas en lien direct avec son implémentation qui peut-être réalisé de diverses
> manières suivant le langage de programmation, voire au sein d'un même langage de programmation.

:::

<!-- TODO implémentation en python avec des classes queue from collections ou sinon fonction(voir IPT Eyrolles) ou Prpeabac -->


## Les piles: _LIFO_

Les **pile**s(_stacks_ en anglais) correspondent exactement à la notion de pile dans la vie courante:

- Une pile de cartes,
- Une pile d'assiettes...

<wc-wikimage class="half center" title="Data_stack.svg" caption="La pile est une structure de données LIFO: dernier arrivé premier sorti."></wc-wikimage>

Pour ajouter un élément on l'empile, il se retrouve donc au-dessus, et pour retirer un élément on
ne peut retirer **que l'élément se trouvant au sommet de la pile**.

En anglais on dit _last in, first out_ ou _LIFO_ pour dire: dernier arrivé premier sorti.

::: examples

Ce type de structure de données est par exemple utilisé dans:

- les éditeurs avec la fonction _Annuler_ (CTRL+Z)
- les navigateurs pour reculer d'une page.
- les compilateurs et interpréteurs pour évaluer des séries de fonctions (voir [fonctions récursives](/tg/nsi/4-langages-et-programmation/3-recursivite))
- Sans l'évaluation des expressions mathématiques avec parenthèses `((ax + b) * c)`

::: 

### Interface

Une pile est définie par l'interface comprenant les opérations suivantes:

- **Consulter** le dernier élément de la pile: `sommet()`
- Savoir si la pile **est vide**: `est_vide()`
- **Empiler** un élément pour le mettre au sommet de la pile: `empiler(élément)`.
- **Dépiler** un élément pour le retirer du sommet de la pile: `dépiler()`.


::: prop

Les méthodes `empiler` et `dépiler` doivent s'effectuer en temps constant (Complexité $O(1)$)

:::

### Implémentation en Python

L'objet `list` en Python présente deux méthodes qui lui permettent d'implémenter la pile:

- `list.append(el)`: ajoute l'élément en fin de liste.
- `list.pop()`: supprime le dernier élément de la liste et le renvoie.

De plus ces deux méthodes s'effectuent en temps constant (voir ce
[tableau](/tg/nsi/1-structures-de-donnees/1-interface-et-implementation/#cas-des-listes)
pour plus de détails.)

```python
pile = [3, 4, 5]
pile.append(6)
pile.append(7)

print(pile)    # affiche [3, 4, 5, 6, 7]
pile.pop()     # renvoie 7
print(pile)    # affiche [3, 4, 5, 6]
pile.pop()     # renvoie 6
pile.pop()     # renvoie 5
print(pile)    # affiche [3, 4]
```

[Documentation de
Python](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks){.cite-source}

::: appli

Créer une classe `Pile` qui implémente le type abstrait pile en stockant les données de la pile
dans un attribut privé `_data` de type `list`. Voir cet [exercice](./exo/#exo1) pour plus de détails.

:::

## Les files: _FIFO_

Les files(_queues_ en anglais) correspondent également à la notion de file dans la vie courante:

- Une file d'attente à la caisse,
- à un feu rouge...

<wc-wikimage title="Data_Queue.svg" caption="La file est une structure de données FIFO: premier arrivé premier sorti."></wc-wikimage>


Lorsqu'on ajoute un élément, celui-ci se retrouve à la fin de la file, et on **retire les éléments
dans l'ordre dans lequel ils sont arrivés**.

En anglais on dit _first in, first out_ ou _FIFO_ pour dire: **premier arrivé premier sorti**.

::: examples

Ce type de structure de données est par exemple utilisé dans:

- Un gestionnaire d'impression pour ordonner l'ordre des impressions.
- Un processeur pour planifier l'ordre des opérations.
- Un serveur web pour ordonner les réponses en fonction de l'ordre des demandes.

:::

### Interface

Une file est une liste sur laquelle on autorise seulement 4 opérations:

- **Consulter** le premier élément de la file: la tête: `tête()`.
- Tester si la file **est vide**: `est_vide()`.
- **Enfiler** un nouvel élément: le mettre en dernier dans la queue: `enfiler(élément)`.
- **Défiler** un élément, supprimer et renvoyer le premier élément: `défiler()`.

::: prop

Les méthodes `enfiler` et `défiler` doivent s'effectuer en temps constant (Complexité $O(1)$)

:::

### Implémentation en Python

L'objet `list` en Python présente deux méthodes qui lui permettent d'implémenter la file:

- `list.append(el)`: ajoute l'élément en fin de liste.
- `list.pop(0)`: supprime le premier élément de la liste et le renvoie.

Toutefois, les listes ne sont pas très efficaces pour réaliser ce type de traitement. Alors que les
ajouts et suppressions en fin de liste sont rapides, les opérations d'insertions ou de retraits en
début de liste sont lentes (car tous les autres éléments doivent être décalés d'une position $O(n)$).

Pour implémenter une file avec des opérations en temps constant $O(1)$, on peut utiliser la classe
[`collections.deque`](https://docs.python.org/fr/3/library/collections.html#collections.deque). Les
`deques` sont une généralisation des piles et des files appelée **liste chainée double** (en
anglais _double-ended queue_).

```python
from collections import deque
queue = deque()
# On considère une file allant de gauche à droite
# on enfile à gauche
queue.appendleft("Jobi")    # enfile 'Jobi'
queue.appendleft("Joba")    # enfile 'Joba'

# L'élément en tête est à droite au dernier indice
print(queue[-1])            # affiche "Jobi"

# on défile à droite
queue.pop()                 # défile 'Jobi' et le renvoie
print(queue[-1])            # affiche "Joba" qui est en tête de queue maintenant
queue.pop()                 # défile 'Joba' et le renvoie

# on vérifie que la queue est bien vide
len(queue) == 0             # renvoie True

```

[Documentation de Python](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues){.cite-source}

::: appli

Créer une classe `File` qui implémente le type abstrait file en stockant les données de la file
dans un attribut privé `_data` de type `collections.deque`. Voir cet [exercice](./exo/#exo2) pour plus de détails.

:::

## Comment réaliser une boucle?

L'interface des piles et files étant volontairement très réduite, il est impossible d'accéder aux
éléments présents au milieu sans les sortir.

Donc pour itérer sur les éléments, on les retire jusqu'à ce que la structure soit vide.

### Avec une pile

```
while not pile.est_vide():
    e = pile.dépiler()
```

L'ordre de sortie est l'inverse de l'ordre d'entrée.

```python
# instanciation
pile = []

# empile au sommet Jobi Joba
pile.append('Jobi')
pile.append('Joba')

# dépile tout
while len(pile) > 0:
    e = pile.pop()
    print(e, end=' | ')
```

**Sortie** `Joba | Jobi | `

### Avec une file

```
while not file.est_vide():
    e = file.défiler()
```
L'ordre de sortie est le même que l'ordre d'entrée.

```python
from collections import deque
# instanciation
file = deque()

# enfile à gauche  Jobi Joba
file.appendleft('Jobi')
file.appendleft('Joba')

# défile tout
while len(file) > 0:
    e = file.pop()
    print(e, end=' | ')
```

**Sortie** `Jobi | Joba | `