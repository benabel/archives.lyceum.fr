## Questions de cours

1. Trouver une situation où la représentation sous forme d'arbre est adaptée, et donner un exemple
   d'arbre dans cette situation avec la signification des nœuds et des arêtes utilisées.

2. La racine d'un arbre en informatique est-elle en haut ou en bas d'un arbre? Combien de racines
   un arbre peut-il avoir?

3. Un arbre binaire _parfait_ est un arbre qui est plein à chaque niveau de l'arbre, ce qui signifie
   que toutes les feuilles ont la même profondeur égale à la hauteur de l'arbre.
   
   <!-- digraph {
	node [color=lightgray fillcolor=lightgray fontcolor=black shape=record style="filled, rounded"]
	140364689978608 [label="<l>|<v> 8|<r>"]
	140364689978608:l -> 140364689973520:v
	140364689978608:r -> 140364689966272:v
	140364689973520 [label="<l>|<v> 10|<r>"]
	140364689973520:l -> 140364686130480:v
	140364689973520:r -> 140364686123424:v
	140364689966272 [label="<l>|<v> 9|<r>"]
	140364689966272:l -> 140364686123376:v
	140364689966272:r -> 140364686124240:v
	140364686130480 [label="<l>|<v> 12|<r>"]
	140364686130480:l -> 140364686130144:v
	140364686130480:r -> 140364686114976:v
	140364686123424 [label="<l>|<v> 14|<r>"]
	140364686123424:l -> 140364686123952:v
	140364686123424:r -> 140364686989856:v
	140364686123376 [label="<l>|<v> 2|<r>"]
	140364686123376:l -> 140364686998160:v
	140364686123376:r -> 140364686995376:v
	140364686124240 [label="<l>|<v> 11|<r>"]
	140364686124240:l -> 140364686994704:v
	140364686124240:r -> 140364686989136:v
	140364686130144 [label="<l>|<v> 5|<r>"]
	140364686114976 [label="<l>|<v> 13|<r>"]
	140364686123952 [label="<l>|<v> 7|<r>"]
	140364686989856 [label="<l>|<v> 1|<r>"]
	140364686998160 [label="<l>|<v> 0|<r>"]
	140364686995376 [label="<l>|<v> 4|<r>"]
	140364686994704 [label="<l>|<v> 6|<r>"]
	140364686989136 [label="<l>|<v> 3|<r>"]
   } -->


   ![Arbre parfait de hauteur 4](../../images/arbre-parfait.svg)

   Combien de nœuds y a-t-il dans un arbre binaire _parfait_ de hauteur 2 ? de hauteur 3 ? de
   hauteur $h$?

4. Dans un arbre binaire _complet_, tous les étages sont remplis à l'exception du dernier où les
   nœuds sont rassemblés à gauche.
   
   <!-- 
   digraph {
	node [color=lightgray fillcolor=lightgray fontcolor=black shape=record style="filled, rounded"]
	140364686235520 [label="<l>|<v> 7|<r>"]
	140364686235520:l -> 140364686121408:v
	140364686235520:r -> 140364686385088:v
	140364686121408 [label="<l>|<v> 13|<r>"]
	140364686121408:l -> 140364686919712:v
	140364686121408:r -> 140364686927200:v
	140364686385088 [label="<l>|<v> 8|<r>"]
	140364686385088:l -> 140364686927440:v
	140364686385088:r -> 140364686921344:v
	140364686919712 [label="<l>|<v> 9|<r>"]
	140364686919712:l -> 140364686918512:v
	140364686919712:r -> 140364686927392:v
	140364686927200 [label="<l>|<v> 6|<r>"]
	140364686927200:l -> 140364686918704:v
	140364686927440 [label="<l>|<v> 10|<r>"]
	140364686921344 [label="<l>|<v> 12|<r>"]
	140364686918512 [label="<l>|<v> 11|<r>"]
	140364686927392 [label="<l>|<v> 1|<r>"]
	140364686918704 [label="<l>|<v> 4|<r>"]} -->

   ![Arbre complet de hauteur 4](../../images/arbre-complet.svg)

   Donner un encadrement de la taille d'un arbre complet en fonction de sa hauteur $h$?

5. Quelle est la hauteur minimale d'un arbre de taille 7 ? de taille 77 ? de taille 777 ?    

6. Les calculs écrits sur une calculatrice sont transformés en arbres binaires avec des nœuds de
   deux types: des nœuds d'opérations (+, -, * , /), et des nœuds de nombres (0, 1, ...,9).
   Proposer l'écriture d'un arbre pour l'opération suivante: `5 * 4 + 3 * 2`. Écrire les notations
   préfixe et postfixe de cet arbre.

## Utilisation de la classe `ArbreBinaire`

En utilisant la classe `ArbreBinaire` définie dans le cours, construire l'arbre binaire suivant:

![arbre binaire de wikimedia](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sorted_binary_tree_ALL.svg/562px-Sorted_binary_tree_ALL.svg.png)

Expliquer comment afficher l'étiquette du nœud F en partant de la racine?

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

   Expliquer comment accéder à l'étiquette du nœud 7(en partant de la racine) à partir de cette
   implémentation.

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
largeur](/tg/nsi/1-structures-de-donnees/4-arbres/#parcours-dun-arbre-binaire)).

On donne ci-dessous le pseudo-code issu de l'article Wikipédia anglais sur le parcours d'arbres
[_Breadth First Search_](https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first_search) en
anglais.

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

