## Questions de cours

1. Trouver une situation où la représentation sous forme d'arbre est adaptée, et donner un exemple
   d'arbre dans cette situation avec la signification des nœuds et des arêtes utilisées.
2. La racine d'un arbre en informatique est-elle en haut ou en bas d'un arbre? Combien de racines
   un arbre peut-il avoir?
3. Un arbre binaire complet est un arbre qui est plein à chaque niveau de l'arbre, ce qui signifie
   qu'il n'y a pas place pour un autre nœud à n'importe quel niveau de l'arbre, sauf aux feuilles.

   Combien de nœuds y a-t-il dans un arbre binaire complet de hauteur 2 ? de hauteur 3 ? de hauteur
   4?

4. Dans un arbre binaire complet, donner un encadrement de la taille de l'arbre en fonction de sa
   hauteur ?

5. Quelle est la hauteur minimale d'un arbre de taille 7 ? de taille 77 ? de taille 777 ?    

6. Les calculs écrits sur une calculatrice sont transformés en arbres binaires avec des nœuds de
   deux types: des nœuds d'opérations (+, -, * , /), et des nœuds de nombres (0, 1, ...,9).
   Proposer l'écriture d'un arbre pour l'opération suivante: `5 * 4 + 3 * 2`. Écrire les notations
   préfixe et postfixe de cet arbre.

## Utilisation de la classe `ArbreBinaire`

En utilisant la classe `ArbreBinaire` définie dans le cours, construire l'arbre binaire suivant:

![arbre binaire de wikimedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sorted_binary_tree_ALL.svg/562px-Sorted_binary_tree_ALL.svg.png)

## Arbre binaire

En utilisant la classe `ArbreBinaire` définie dans le cours, écrire de façon **récursive** les
fonctions suivantes qui prennent un seul paramètre de type `ArbreBinaire`:

- `taille(arbre)` renvoie la taille de l'arbre.
- `prefixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
  préfixe.
- `infixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
  infixe.
- `postfixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
  postfixe.

**En plus:** Écrivez un algorithme non récursif pour effectuer une traversée dans l'ordre infixe d'un
arbre. (AIDE: Votre algorithme aura besoin d'une pile pour que cela fonctionne.)

## Implémentation d'un arbre binaire avec des tuples

Il est possible d'implémenter les arbres binaires avec des _tuples (ou listes) imbriqués de
longueur 3_.

Un **arbre vide** sera représenté par un tuple vide: `()`.

Un **nœud non vide** sera représenté ainsi:

- l'index `0` sera l'étiquette,
- l'index `1` sera le sous-arbre gauche: un tuple éventuellement vide,
- l'index `2` sera le sous-arbre droit: un tuple éventuellement vide.

**Questions**

1. Construire l'arbre suivant avec cette représentation:

   <p><a href="https://commons.wikimedia.org/wiki/File:Binary_search_tree.svg#/media/Fichier:Binary_search_tree.svg"><img width="256px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png" alt="Binary search tree.svg"></a>Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=488330">Lien</a></p>

2. Implémenter les fonctions suivantes qui prennent en paramètre un arbre binaire représenté sous
   forme de tuples imbriqués:

   - `taille(arbre)` renvoie la taille de l'arbre.
   - `est_vide(arbre)` renvoie `True` si l'arbre est vide `False` sinon.
   - `prefixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
     préfixe.
   - `infixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
     infixe.
   - `postfixe(arbre)` affiche les éléments lors du parcours de l'arbre en profondeur dans l'ordre
     postfixe.

## Parcours en largeur

_On utilise dans cet exercice la classe `ArbreBinaire` vue en cours pour représenter les arbres._

Écrire une procédure itérative de `parcours_largeur(arbre)` qui affiche les éléments d'un arbre
donné en argument de haut en bas et de gauche à droite([parcours en
largeur](/tg/nsi/1-structures-de-donnees/3-arbres/#parcours-dun-arbre-binaire)).

On donne ci-dessous le pseudo-code issu de l'article Wikipédia anglais sur le parcours d'arbres [_Breadth First Search_](https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first_search) en anglais.

```
levelorder(root)
    q ← empty queue
    q.enqueue(root)
    while not q.isEmpty() do
        node ← q.dequeue()
        visit(node)
        if node.left ≠ null then
            q.enqueue(node.left)
        if node.right ≠ null then
            q.enqueue(node.right)
```

