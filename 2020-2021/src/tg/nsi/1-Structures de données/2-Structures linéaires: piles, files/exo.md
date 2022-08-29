## QCU

1. Une pile est qualifiée de:

   - [ ] _last in, first out_ ou _LIFO_ en anglais.
   - [ ] _first in, first out_ ou _FIFO_ en anglais.

2. Une file est qualifiée de:

   - [ ] _last in, first out_ ou _LIFO_ en anglais.
   - [ ] _first in, first out_ ou _FIFO_ en anglais.

3. L'opération `enfiler` d'un **file** ajoute l'élément:

   - [ ] en tête de file.
   - [ ] en milieu de file.
   - [ ] en queue de file.

4. L'opération `défiler` d'un **file** supprime et renvoie l'élément:

   - [ ] en tête de file.
   - [ ] en milieu de file.
   - [ ] en queue de file.

5. L'opération `empiler` d'une **pile** ajoute l'élément:

   - [ ] en sommet de pile.
   - [ ] en milieu de pile.
   - [ ] en bas de pile.

6. L'opération `dépiler` d'un **pile** retire et renvoie l'élément:

   - [ ] en sommet de pile.
   - [ ] en milieu de pile.
   - [ ] en bas de pile.

## Implémentation de la classe `Pile`

Créer une classe `Pile` qui implémente le type abstrait pile en stockant les données de la pile
dans un attribut privé `_data` de type `list`.

- L'initialisation s'effectue sans argument et affecte une liste vide à l'attribut `_data`.
- La méthode `empiler(élément)` ajoute l'élément à la fin de l'attribut `_data`.
- La méthode `dépiler()` retire l'élément à la fin de l'attribut `_data` et le renvoie.
- La méthode `est_vide()` renvoie `True` si la pile est vide et `False` sinon.
- La méthode `sommet()` renvoie l'élément présent au sommet de la pile, et `None` si la pile est
  vide.

Voici une série de tests à passer.

```python
pile = Pile()
assert pile.est_vide()

pile.empiler(1)
assert not pile.est_vide()
assert pile.sommet() == 1

pile.empiler(2)
assert not pile.est_vide()
assert pile.sommet() == 2
assert not pile.est_vide()

pile.empiler(3)
assert pile.sommet() == 3

while not pile.est_vide():
    pile.dépiler()

assert pile.est_vide()
```

**Pour aller plus loin**, modifier la classe `Pile` afin que `sommet()` ne soit plus une méthode
mais un attribut `sommet`. La série de tests précédents devra être modifié en supprimant les
parenthèses des appels des méthodes `pile.sommet()` en `pile.sommet`.

## Implémentation de la classe `File`

Créer une classe `File` qui implémente le type abstrait file en stockant les données de la file
dans un attribut privé `_data` de type `collections.deque` présentée dans le cours et dont vous
pouvez consulter la documentation grâce à la fonction `help()`.

- L'initialisation s'effectue sans argument et affecte une liste chaînée double vide à l'attribut
  `_data`.
- La méthode `enfiler(élément)` ajoute l'élément à la fin l'attribut `_data`.
- La méthode `défiler()` retire l'élément à la tête de l'attribut `_data` et le renvoie.
- La méthode `est_vide()` renvoie `True` si la file est vide et `False` sinon.
- La méthode `tête()` renvoie l'élément présent à la tête de la file, et `None` si la file est
  vide.

Voici une série de tests à passer.

```python
from collections import deque
file = File()
assert file.est_vide()

file.enfiler(1)
assert not file.est_vide()
assert file.tête() == 1

file.enfiler(2)
assert not file.est_vide()
assert file.tête() == 1
assert not file.est_vide()

file.enfiler(3)
assert file.tête() == 1
assert not file.est_vide()

assert file.défiler() == 1
assert file.défiler() == 2
assert file.défiler() == 3

assert file.est_vide()
```

**Pour aller plus loin**, modifier la classe `File` afin que `tête()` ne soit plus une méthode
mais un attribut `tête`. La série de tests précédents devra être modifié en supprimant les
parenthèses des appels des méthodes `file.tête()` en `file.tête`.