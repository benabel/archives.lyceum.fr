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



::: intro
<figure class="half right">
<a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg#/media/File:DOM-model.svg"><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" alt="DOM-model.svg"></a><figcaption>By ‍Birger Eriksson - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a></figcaption></figure>

> Dans ce chapitre, on présente une nouvelle structure de donnée: les _arbres_ qui sont
> particulièrement adaptés à la représentation des données hiérarchiques comme un arbre
> généalogique ou encore le [DOM](https://fr.wikipedia.org/wiki/Document_Object_Model) d'une page
> `html`. 

:::

## Vocabulaire

Arbre

:   Un arbre est constitué de **nœuds** reliés par des **arêtes**. Souvent les nœuds ont une valeur:
l'_étiquette_.

Racine d'un arbre enraciné

:   Un arbre enraciné (ou arborescence) possède à sa base une **racine** auxquels sont reliés d'autres
nœuds qui sont ses **descendants**.

<wc-wikimage class="half center" title="Tree_(computer_science).svg" caption="Dans cet arbre, la racine est le noeud 2 au sommet coloré en vert."></wc-wikimage>


Un nœud situé à l'extrémité de l'arbre qui n'a donc pas de descendants est une **feuille**.

::: prop

Chaque nœud peut avoir un nombre quelconque de nœuds fils, mais il n'a qu'un nœud père (sauf la
racine qui n'a pas de nœud père).

:::

Profondeur d'un nœud

:   La profondeur d'un nœud est la distance, c’est-à-dire, le nombre d'arêtes de la racine au nœud.

Hauteur d'un arbre

:   La hauteur d'un arbre est la plus grande profondeur d'une feuille de l'arbre.

Taille d'un arbre

:   La taille d'un arbre est son nombre de nœuds.

::: appli

Reproduire l'arbre ci-dessus, et l'annoter en légendant:

- la racine,
- des feuilles,
- un nœud père et ses fils.

Calculer la hauteur et la taille de cet arbre.

:::

## Arbres binaires

### Définition

Arbre binaire

:   Les arbres binaires sont un type d'arbres particuliers pour lesquels chaque nœud a au plus
    **deux fils**.

<wc-wikimage class="half center" title="Binary_tree.svg" caption="Dans un arbre binaire, un noeud ne peut avoir plus de 2 enfants."></wc-wikimage>


### Implémentation récursive

Comme chaque nœud d'un arbre binaire a au plus deux enfants, on définit les sous arbres gauche et
sous arbre droit d'un nœud.

![sous arbres d'un nœud](../../images/pixees-sous-arbres.png)

[CC-BY-SA David Roche](https://pixees.fr/informatiquelycee/n_site/nsi_term_structDo_arbre.html){.cite-source}


::: prop 

Un arbre binaire est une structure de données récursive. Tout nœud d'un arbre binaire est un arbre
binaire.

:::


On peut ainsi définir une `class`e `ArbreBinaire` **récursive** comme suit:

```python
# nécessaire pour pouvoir annoter le type de la classe
from __future__ import annotations


class ArbreBinaire:
    """Structure de donnée d'arbre binaire"""

    def __init__(self, étiquette: str, gauche: ArbreBinaire, droit: ArbreBinaire):
        self.étiquette = étiquette
        self.gauche = gauche
        self.droit = droit
```

::: appli

1. Écrire la séquence d'instructions permettant de construire l'arbre binaire présenté en exemple
ci-dessus.

2. Expliquer comment accéder à l'étiquette du nœud 7(en partant de la racine) à partir de cette
   implémentation.

:::

### Parcours d'un arbre binaire

Il existe diverses façons de parcourir les nœuds d'un arbre.

Le parcours en **largeur d'abord**: les nœuds sont parcourus comme si on lisait l'arbre, de haut en
bas et de gauche à droite.

<wc-wikimage class="half center" title="Animated_BFS.gif" caption="Parcours en largeur"></wc-wikimage>


Le parcours en **profondeur d'abord**: on explore complétement le sous-arbre gauche avant de
commencer l'exploration du droit. Il existe trois façons de faire:

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

<wc-wikimage title="Sorted_binary_tree_ALL.svg" caption="Les trois ordres possibles de parcours en profondeur."></wc-wikimage>

:::

::: appli

Donner les quatre ordres de parcours de l'arbre ci-dessous qui représente une expression arithmétique.

<wc-wikimage title="AST_binary_tree_arith_variables.svg" caption="L'arbre de l'expression A*(B-C)+(D+E)."></wc-wikimage>

Quel parcours représente la notation habituelle de nos calculatrices actuelles?

:::

## Arbres binaires de recherche

### Définition

Arbre binaire de recherche

:   Il s'agit d'un arbre binaire dans lequel toutes les valeurs dans le sous-arbre gauche d'un nœud
    sont inférieures à la valeur à la racine de l'arbre et toutes les valeurs dans le sous-arbre
    droit d'un nœud sont supérieures ou égales à la valeur à la racine de l'arbre.

<wc-wikimage class="half center" title="Binary_search_tree.svg" caption="Un arbre binaire de recherche est l'équivalent d'une liste triée pour les arbres binaire, ils permettent des recherches très efficaces."></wc-wikimage>


::: appli

1. Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 6 dont l'un est
   complet(tous les étages sont entièrement remplis, sauf le dernier ou les feuilles sont tassées à
   gauche).

2. Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 15 dont l'un est
parfait(tous les étages sont entièrement remplis).

:::

### Implémentation en P.O.O.

Dans un arbre binaire de recherche, les nœuds ne peuvent pas être placés n'importe comment et
doivent respecter l'ordre entre les sous arbres et le nœud: $G<N<D$.

On peut créer une classe `ABR` semblable à la classe `ArbreBinaire`, mais en lui ajoutant une
méthode `insérer` pour ajouter l'élément à sa place dans l'arbre binaire de recherche.

On peut ainsi définir une `class`e `ArbreBinaire` **récursive** comme suit:

```python
# nécessaire pour pouvoir annoter le type de la classe
from __future__ import annotations


class ABR:
    """Structure de donnée d'arbre binaire de recherche"""

    def __init__(self, étiquette: int, gauche: ABR, droit: ABR):
        self.étiquette = étiquette
        self.gauche = gauche
        self.droit = droit

    def insérer(self, valeur):
        """Insère une valeur à sa place dans l'arbre"""

        # si la valeur est inférieure on l'insère à gauche
        if valeur < self.étiquette:
            # si il y a pas de noeud à gauche, on l'insère
            if self.gauche is None:
                self.gauche = ABR(valeur, None, None)
            # sinon on fait un appel récursif sur le sous arbre gauche
            else:
                self.gauche.insérer(valeur)
        else:
            if self.droit is None:
                self.droit = ABR(valeur, None, None)
            else:
                self.droit.insérer(valeur)
```

::: appli

1. À quoi ressemblerait l'arbre créé en insérant successivement tous les entiers entre 1 et 6 comme
   ceci.

   ```python
   abr = ABR(1, None, None)
   for i in range(2, 7):
       abr.insérer(i)
   ```

2. Corriger l'ordre d'insertion afin d'obtenir un arbre complet.
:::

### Intérêt des arbres binaires de recherche

Le caractère trié d'un arbre binaire de recherche permet des opérations rapides pour rechercher une
clé, ce que nous verrons dans la partie
[algorithmique](../../5-algorithmique/1-algorithmes-sur-les-arbres-binaires/#arbre-binaire-de-recherche).

::: appli

1. Comparer le nombre d'opérations nécessaires à la recherche de l'élément 15 dans l'arbre
   ci-dessus:

   - par une méthode brutale (_brute force_): on itère sur tous les éléments de l'arbre par exemple
     avec un parcours en largeur.
   - par une méthode **dichotomique** utilisant le fait que l'arbre binaire de recherche est « trié ».

2. Donner la complexité des deux méthodes pour un arbre de taille $n$.

:::

::: ref

- [Option informatique MPSI/MP](https://www.vuibert.fr/ouvrage/9782311406832-option-informatique-mpsi-mpmp-2e-edition-actualisee)
- [Prépabac NSI aux éditions Hatier](https://www.editions-hatier.fr/livre/nsi-1re-generale-numerique-et-sciences-informatiques-prepabac-9782401052307)
- [Article Wikipedia sur les arbres](https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9)
- [Article Wikipedia sur les arbres binaires de recherche](https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9)

:::
