---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: programme

+-------------------------+------------------------------------+------------------------------------------+
|        Contenus         |        Capacités attendues         |               Commentaires               |
+=========================+====================================+==========================================+
| Arbres : structures     | Identifier des situations          | On fait le lien avec la rubrique         |
| hiérarchiques.          | nécessitant une structure de       | « algorithmique ».                       |
|                         | données arborescente.              |                                          |
| Arbres binaires :       |                                    |                                          |
| nœuds, racines,         | Évaluer quelques mesures des       |                                          |
| feuilles,               | arbres binaires (taille,           |                                          |
| sous-arbres gauches,    | encadrement de la hauteur,         |                                          |
| sous-arbres droits.     | etc.).                             |                                          |
+-------------------------+------------------------------------+------------------------------------------+

:::



::: intro clearfix

<p><a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg#/media/Fichier:DOM-model.svg"><img class="half right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" alt="Description de cette image, également commentée ci-après"></a><br>Image par <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Lien</a></p>

> Dans ce chapitre, on présente une nouvelle structure de donnée: les _arbres_ qui sont
> particulièrement adaptés à la représentation des données hiérarchiques comme un arbre
> généalogique ou encore le [DOM](https://fr.wikipedia.org/wiki/Document_Object_Model) d'une page
> `html`. 

:::

## Vocabulaire

Un arbre est constitué de **nœuds** reliés par des **arêtes**. Souvent les nœuds ont une valeur:
l'_étiquette_.

Un arbre enraciné (ou arborescence) possède à sa base une **racine** auxquels sont reliés d'autres
nœuds qui sont ses **descendants**.

<p><a href="https://commons.wikimedia.org/wiki/File:Tree_(computer_science).svg#/media/File:Tree_(computer_science).svg"><img width="250px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/1200px-Tree_%28computer_science%29.svg.png" alt="Tree (computer science).svg"></a><br>By <a href="//commons.wikimedia.org/w/index.php?title=User:Paddy3118&amp;action=edit&amp;redlink=1" class="new" title="User:Paddy3118 (page does not exist)">Paddy3118</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=83223854">Link</a></p>

Un nœud situé à l'extrémité de l'arbre qui n'a donc pas de descendants est une **feuille**.

::: prop

Chaque nœud peut avoir un nombre quelconque de nœuds fils, mais il n'a qu'un nœud père (sauf la
racine qui n'a pas de nœud père).

:::

::: {.def terme="Profondeur d'un nœud"}

La profondeur d'un nœud est la distance, c’est-à-dire, le nombre d'arêtes de la racine au nœud.

:::

::: {.def terme="Hauteur d'un arbre"}

La hauteur d'un arbre est la plus grande profondeur d'une feuille de l'arbre.

:::

::: {.def terme="Taille d'un arbre"}

La taille d'un arbre est son nombre de nœuds.

:::

::: appli

Reproduire l'arbre ci-dessus, et l'annoter en légendant:

- la racine,
- des feuilles,
- un nœud père et ses fils.

Calculer la hauteur et la taille de cet arbre.

:::

## Arbres binaires

### Définition

::: {.def terme="Arbre binaire"}

Les arbres binaires sont un type d'arbres particuliers pour lesquels chaque nœud a au plus **deux
fils**.
:::

<p><a href="https://commons.wikimedia.org/wiki/File:Binary_tree.svg#/media/Fichier:Binary_tree.svg"><img width="256px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/1200px-Binary_tree.svg.png" alt="Binary tree.svg"></a><br>Image par <a href="//commons.wikimedia.org/wiki/User:Dcoetzee" title="User:Dcoetzee">Derrick Coetzee</a> — Travail personnel basé sur&nbsp;: <a href="//commons.wikimedia.org/wiki/File:Binary_tree.png" title="File:Binary tree.png">Binary tree.png</a>, Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=488419">Lien</a></p>

### Implémentation récursive

Comme chaque nœud d'un arbre binaire a au plus deux enfants, on définit les sous arbres gauche et
sous arbre droit d'un nœud.

![sous arbres d'un nœud](../../images/pixees-sous-arbres.png)
*CC-BY-SA David Roche*{.cite-source}

:: prop 

Un arbre binaire est une structure de données récursive. Tout nœud d'un arbre binaire est un arbre
binaire.

:::

On peut ainsi définir une `class`e `ArbreBinaire` **récursive** comme suit:

```python
class ArbreBinaire:
    """Structure de donnée d'arbre binaire

    Attributs
    ---------
    data: type simple int, float, str
        étiquette du nœud
    gauche: objet de type ArbreBinaire ou None si vide
        sous-arbre gauche
    droit: objet de type ArbreBinaire ou None si vide
        sous-arbre droit
    """

    def __init__(self, data, gauche=None, droit=None):
        self.data = data
        self.gauche =  gauche
        self.droit = droit
```

::: appli

Écrire la séquence d'instructions permettant de construire l'arbre binaire présenté en exemple
ci-dessus.

:::

### Parcours d'un arbre binaire

Il existe diverses façons de parcourir les nœuds d'un arbre.

Le parcours en **largeur d'abord**: les nœuds sont parcourus étage par étage, de haut en bas
et de gauche à droite.

<p><a href="https://commons.wikimedia.org/wiki/File:Animated_BFS.gif#/media/File:Animated_BFS.gif"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif" alt="Animated BFS.gif" width="187" height="175"></a><br>By Blake Matheny - Transferred from <span class="plainlinks"><a class="external text" href="https://en.wikipedia.org">en.wikipedia</a></span> to Commons., <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=1864649">Link</a></p>

Le parcours en **profondeur d'abord**: on explore complétement un sous-arbre avant de commencer
l'exploration de l'autre. Il existe trois façons de faire:

- Parcours **préfixe** ou _préordre_ **(NGD)**: on visite d'abord le nœud, puis son sous-arbre
  gauche, puis son sous-arbre droit.
- Parcours **infixe** ou _en ordre_ **(GND)**: on visite d'abord le sous-arbre gauche, puis le
  nœud, puis le sous-arbre droit.
- Parcours **postfixe** ou en _postordre_ **(GDN)**: on visite d'abord le sous-arbre gauche, puis
  le sous-arbre droit, et enfin le nœud.

:::example

Parcours en profondeur d'abord d'un exemple d'arbre:

- préfixe (rouge): F, B, A, D, C, E, G, I, H;
- infixe (jaune): A, B, C, D, E, F, G, H, I;
- postfixe (vert): A, C, E, D, B, H, I, G, F.

<p><a href="https://commons.wikimedia.org/wiki/File:Sorted_binary_tree_ALL.svg#/media/File:Sorted_binary_tree_ALL.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sorted_binary_tree_ALL.svg/1200px-Sorted_binary_tree_ALL.svg.png" alt="Sorted binary tree ALL.svg"></a><br>By original images by <a href="//commons.wikimedia.org/wiki/User:Pluke" title="User:Pluke">Pluke</a>, <a href="//commons.wikimedia.org/w/index.php?title=User:Miles&amp;amp;action=edit&amp;amp;redlink=1" class="new" title="User:Miles (page does not exist)">Miles</a>, overlay by <a href="//commons.wikimedia.org/wiki/User:Jochen_Burghardt" title="User:Jochen Burghardt">User:Jochen Burghardt</a> - <a href="//commons.wikimedia.org/wiki/File:Sorted_binary_tree_preorder.svg" title="File:Sorted binary tree preorder.svg">File:Sorted binary tree preorder.svg</a>, <a href="//commons.wikimedia.org/wiki/File:Sorted_binary_tree_inorder.svg" title="File:Sorted binary tree inorder.svg">File:Sorted binary tree inorder.svg</a>, <a href="//commons.wikimedia.org/wiki/File:Sorted_binary_tree_postorder.svg" title="File:Sorted binary tree postorder.svg">File:Sorted binary tree postorder.svg</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=83230146">Link</a></p>

:::

::: appli

Donner les quatre ordres de parcours de l'arbre ci-dessous qui représente une expression arithmétique.

<p><a href="https://commons.wikimedia.org/wiki/File:AST_binary_tree_arith_variables.svg#/media/File:AST_binary_tree_arith_variables.svg"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/AST_binary_tree_arith_variables.svg/1200px-AST_binary_tree_arith_variables.svg.png" alt="AST binary tree arith variables.svg"></a><br>By original image by <a href="//commons.wikimedia.org/w/index.php?title=User:Emergie&amp;amp;action=edit&amp;amp;redlink=1" class="new" title="User:Emergie (page does not exist)">User:Emergie</a>, modifications by <a href="//commons.wikimedia.org/wiki/User:Jochen_Burghardt" title="User:Jochen Burghardt">User:Jochen Burghardt</a> - <a href="//commons.wikimedia.org/wiki/File:AST_binary_tree_arithmetic.svg" title="File:AST binary tree arithmetic.svg">File:AST binary tree arithmetic.svg</a>, numbers replaced by variables, added grey background for nodes, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=83250572">Link</a></p>

Quel parcours représente la notation habituelle de nos calculatrices actuelles?

:::

## Arbres binaires de recherche

::: {.def titre="Arbre binaire de recherche"}

Il s'agit d'un arbre binaire dans lequel toutes les valeurs dans le sous-arbre gauche d'un nœud
sont inférieures à la valeur à la racine de l'arbre et toutes les valeurs dans le sous-arbre droit
d'un nœud sont supérieures ou égales à la valeur à la racine de l'arbre.

:::

<p><a href="https://commons.wikimedia.org/wiki/File:Binary_search_tree.svg#/media/Fichier:Binary_search_tree.svg"><img width="256px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png" alt="Binary search tree.svg"></a>Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=488330">Lien</a></p>

::: appli

1. Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 6 dont l'un est
   complet(tous les étages sont entièrement remplis, sauf le dernier ou les feuilles sont tassées à
   gauche).

2. Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 15 dont l'un est
parfait(tous les étages sont entièrement remplis).



:::

Un arbre binaire de recherche permet des opérations rapides pour rechercher une clé, insérer ou
supprimer une clé que nous verrons dans la partie [algorithmique](../../5-algorithmique/1-algorithmes-sur-les-arbres-binaires/#arbre-binaire-de-recherche).

::: appli

1. Comparer le nombre d'opérations nécessaires à la recherche de l'élément 15 dans l'arbre ci-dessus:

   - par une méthode brutale (_brute force_): on itère sur tous les éléments de l'arbre.
   - par une méthode dichotomique utilisant le fait que l'arbre binaire de recherche est « trié ».

2. Donner la complexité des deux méthodes pour un arbre de taille $n$.

:::

::: ref

- [Option informatique MPSI/MP](https://www.vuibert.fr/ouvrage/9782311406832-option-informatique-mpsi-mpmp-2e-edition-actualisee)
- [Prépabac NSI aux éditions Hatier](https://www.editions-hatier.fr/livre/nsi-1re-generale-numerique-et-sciences-informatiques-prepabac-9782401052307)
- [Article Wikipedia sur les arbres](https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9)
- [Article Wikipedia sur les arbres binaires de recherche](https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9)

:::