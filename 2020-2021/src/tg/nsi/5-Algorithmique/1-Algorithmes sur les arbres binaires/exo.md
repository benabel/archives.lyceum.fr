## Implémentations des algorithmes du cours

En utilisant le module [`binarytree`](https://github.com/joowani/binarytree), implémenter les algorithmes du programme officiel:

- Calculer la hauteur de l'arbre
- Calculer la taille de l'arbre

- Parcours de l'arbre
  - Parcours préfixe
  - Parcours postfixe
  - Parcours infixe
  - Parcours en largeur

- Arbre binaire de recherche

  - Insertion d'une clé
  - Recherche d'une clé

Pour le parcours en largeur, on pourra utiliser la classe `File` suivante.

```python
from collections import deque

class File:
    # pas d'initialisation si on crée tjs des files vides
    _data = deque()
    
    def enfiler(self, élément):
        self._data.appendleft(élément)
    
    def défiler(self):
        return self._data.pop()
    
    def est_vide(self):
        return not self._data

    def tête(self):
        return self._data[-1]
```

## Version itérative des parcours en profondeur

Il est possible d'écrire des version iteratives (et non récursive) des algorithmes d parcours en profondeur.

Pour cela on utilisera une pile(stack en anglais).


Voici les pseudo-codes proposées sur l'article [Wikipédia en anglais](https://en.wikipedia.org/wiki/Tree_traversal#Implementations).

### Parcours préfixe itératif

```
iterativePreorder(node)
  if (node == null)
    return
  s ← empty stack
  s.push(node)
  while (not s.isEmpty())
    node ← s.pop()
    visit(node)
    //right child is pushed first so that left is processed first
    if node.right ≠ null
      s.push(node.right)
    if node.left ≠ null
      s.push(node.left)
```

### Parcours infixe itératif

```
iterativeInorder(node)
  s ← empty stack
  while (not s.isEmpty() or node ≠ null)
    if (node ≠ null)
      s.push(node)
      node ← node.left
    else
      node ← s.pop()
      visit(node)
      node ← node.right
```

### Parcours postfixe itératif

```
iterativePostorder(node)
  s ← empty stack
  lastNodeVisited ← null
  while (not s.isEmpty() or node ≠ null)
    if (node ≠ null)
      s.push(node)
      node ← node.left
    else
      peekNode ← s.peek()
      // if right child exists and traversing node
      // from left child, then move right
      if (peekNode.right ≠ null and lastNodeVisited ≠ peekNode.right)
        node ← peekNode.right
      else
        visit(peekNode)
        lastNodeVisited ← s.pop()
```

Pour faire cet exercice, on pourra utiliser la classe `Pile` suivante.

```python
class Pile:
    def __init__(self):
        # Initialisation par une liste vide
        self._data = []
    
    def empiler(self, élément):
        self._data.append(élément)
    
    def dépiler(self):
        return self._data.pop()
    
    def est_vide(self):
        return not self._data

    def sommet(self):
        return self._data[-1]
```