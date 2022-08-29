---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

**Ce chapitre ne pourra pas faire l'objet d'une évaluation lors de l'épreuve terminale écrite et pratique de l'enseignement de spécialité.**
[BO MENE2121274N](https://www.education.gouv.fr/bo/21/Hebdo30/MENE2121274N.htm){.cite-source}

::: programme

::: list-table

   * - Contenus
     - Capacités attendues
     - Commentaires

   * - Graphes : structures relationnelles.
       
       Sommets, arcs, arêtes, graphes orientés ou non orientés.

     - Modéliser des situations sous forme de graphes.

       Écrire les implémentations correspondantes d’un graphe : matrice d’adjacence, liste de
       successeurs/de prédécesseurs.
       
       Passer d’une représentation à une autre.

     - On s’appuie sur des exemples comme le réseau routier, le réseau électrique, Internet, les
       réseaux sociaux.
       
       Le choix de la représentation dépend du traitement qu’on veut mettre en place : on fait le
       lien avec la rubrique « algorithmique ».


:::

:::

::: intro

<wc-wikimage title="Random-graph-Erdos_generated_network.svg" class="half right"></wc-wikimage>

Dans ce chapitre, nous étudions les _graphes_, une structure de données très utilisée pour
représenter les liens et les interactions entre des objets, les personnes, les villes, les
ordinateurs... En effet, nous verrons qu'il existe de nombreuses variétés de _graphes_ permettant
ainsi de décrire des situations diverses, tout en conservant, une même représentation et donc des
mêmes méthodes pour les manipuler par informatique.

:::

## Les graphes : une structure de données non linéaire

Vous êtes déjà habitués à manipuler des listes, n-uplets ou encore les piles et les files, qui sont
des exemples de _structures de données linéaires_, c'est-à-dire à une dimension, on peut les
parcourir du début à la fin en suivant _un seul chemin_.


Dans le chapitre précédent, nous avons vu les [arbres](../../1-structures-de-donnees/4-arbres), un
exemple structure de données non linéaire très utilisée pour représenter une hiérarchie entre des
données comme des liens de descendance dans un arbre généalogique.

En fait, les arbres sont des graphes avec bien particuliers tels que tous les sommets sauf la racine
ont un unique parent(on parle de _graphe acyclique orienté_).

Maintenant que nous parlons de graphe, il n'existe plus aucune restriction, il n'y a plus de
racine, plus de restriction sur les parents, les enfants, ou quoi que ce soit.

![Graphe et arbres](../../images/arbre-vs-graphe.svg)

graphe

: Un graphe est une structure de données composée d'objets: les _sommets_ dans laquelle certaines
paires d'objets sont reliées par des _arêtes_ (ou arcs dans le cas de graphes orientés).

[Lexique de la théorie des graphes](lexique){.cite-source}

![Sommets et arêtes sur un graphe](../../images/graphe-vocab.svg)


Graphe orienté

: On distingue les graphes _non orientés_, où les arêtes relient deux sommets de _manière
symétrique_ et les graphes _orientés_, où les arêtes, alors appelés _arcs_, relient deux sommets
de manière asymétrique.
    
    [Lexique de la théorie des graphes](lexique)

    ![Graphes orientés et non orientés](../../images/graphe-orientation.svg)


Graphe pondéré

:   Un graphe pondéré ou un réseau est un graphe où chaque arête porte un nombre (son poids).

    
    <wc-wikimage class="half center" title="Weighted_network.png" ></wc-wikimage>
    
    Ces poids peuvent représenter par exemple des coûts, des longueurs ou des capacités, en
    fonction du problème traité. Ces graphes sont fréquents dans divers contextes, comme le
    problème de plus court chemin ou le problème du voyageur de commerce.

## Vocabulaire des graphes

Sommets adjacents

: Deux sommets reliés par une arête sont dits adjacents.

Graphe complet

: Un graphe est dit complet lorsque tous ses sommets sont adjacents.

Ordre d'un graphe

: L'ordre d'un graphe est le nombre de sommets de ce graphe.

Degré d'un sommet

: Le degré d'un sommet est le nombre d'arêtes dont ce sommet est une extrémité.

[Lexique de la théorie des graphes](lexique)

## Quelques exemples de graphes

En fait les graphes sont omniprésents, car il est rare que l'information puisse être réduite à une
structure linéaire comme les listes ou encore à un arbre dans lequel la descendance est
parfaitement établie.

### Internet 

::: clearfix

<wc-wikimage title="Internet_map_1024.jpg" class="half right" caption=""></wc-wikimage> 

Prenons l'exemple d'internet, le réseau internet est un ensemble de machines sont identifiées par
leur adresse IP. Elles sont reliées entre elles _sans une machine mère_ qui centralise les échanges
et dans lequel le chemin des paquets n'est pas unique entre deux machines grâce aux protocoles de
routage.


Lorsque nous cliquons entre des sites Web et que nous naviguons entre les URL, nous naviguons
vraiment à travers un graphe. Parfois, ces graphiques ont des sommets avec des bords non orientés -
je peux aller et venir d'une page Web à une autre - et d'autres qui sont dirigés - je ne peux que
passer de la page Web A à la page Web B, et jamais l'inverse.

Mais il y a un meilleur exemple qui illustre magnifiquement nos interactions quotidiennes avec les
graphes: les _réseaux sociaux_.

:::

### Réseaux sociaux

Prenons l'exemple des réseaux sociaux tels sur Facebook ou son alternative libre
[Diaspora](https://diasporafoundation.org/).

Dans ce type de réseau social:

- les sommets sont les utilisateurs
- les arêtes sont les liens d'amitié entre ces utilisateurs.

![Réseau social d'amis](../../images/medium-social-graph.jpeg)
[A gentle introduction to graph theory][medium]

L'amitié se veut être un lien bidirectionnel, on ne peut être ami de quelqu'un qui n'est pas votre
ami: **C'est un graphe non-orienté**.

Au contraire dans les réseaux de microblogging comme Twiter ou son alternative libre
[Mastodon](https://mastodon.social/about), les liens ne sont pas de la même nature.

On peut suivre une personne, mais il n'est pas obligatoire que cette personne vous suivre en retour.

![Réseau social d'amis avec suivi](../../images/medium-social-graph-directed.jpeg)
[A gentle introduction to graph theory][medium]

Le suivi est un lien directionnel : **C'est un graphe non-orienté**.

### Graphes routiers

::: clearfix 

<wc-wikimage class="half right" title="Carte_TGV.svg" caption="Carte du réseau ferroviare des TGV"></wc-wikimage>

Les graphes routiers sont un bel exemple de graphes **pondérés non-orientés**. On peut utiliser le
temps ou la distance pour la pondération.

On place souvent les sommets à leur position réelle sur une carte sur ce type de graphes.

:::

## Comment implémenter un graphe?

Il existe deux façons d'implémenter un graphe:

- La matrice d'adjacence,
- la liste de successeurs/prédécesseurs.

Nous allons voir comment réaliser ces deux implémentations, et comment passer de l'une à l'autre.

### La liste de successeurs/prédécesseurs

Liste d'adjacence

:   La liste d'adjacence d'un graphe non orienté, est la liste des voisins de chaque sommet.



[Article Wikipédia sur la liste d'adjacence](https://fr.wikipedia.org/wiki/Liste_d%27adjacence){.cite-source}

![Liste d'adjacence d'un graphe orienté](../../images/liste-adjacence-graph-non-oriente.png)


### La matrice d'adjacence

Matrice d'adjacence

:   On représente les liens entre les $n$ sommets du graphe par une matrice de dimension $n$ dont
l'élément non diagonal $a_{ij}$ est le nombre d'arêtes (ou son poids pour un graphe pondéré) liant
le sommet $i$ au sommet $j$.


L'élément diagonal $a_{ii}$ est le nombre de boucles au sommet i.

Dans le cas d'un graphe non orienté, la matrice d'adjacence est _symétrique_.

![Matrice d'adjacence d'un graphe non orienté](../../images/matrice-adjacence-graph-non-oriente.png)

Pour un graphe orienté, elle est quelconque.

![Matrice d'adjacence d'un graphe orienté](../../images/matrice-adjacence-graph-oriente.png)

[Article Wikipédia sur les matrices d'adjacence](https://fr.wikipedia.org/wiki/Matrice_d%27adjacence){.cite-source}


::: {.plus titre="Quelle implémentation choisir?"}

Cette représentation est particulièrement adaptée aux graphes creux (c'est-à-dire peu denses),
contrairement à la matrice d'adjacence adaptée aux graphes denses.

+----------------------+-------------------+-------------------+----------------------+
|    Implémentation    | Accès à une arête | Accès à un voisin | Utilisation préférée |
+======================+===================+===================+======================+
| matrice d’adjacence  | $O(1)$            | $O(n)$            | Graphe dense         |
+----------------------+-------------------+-------------------+----------------------+
| liste de successeurs | $O(n)$            | $O(1)$            | Graphe creux         |
+----------------------+-------------------+-------------------+----------------------+


:::




### Implémentations en Python

Le créateur de Python Guido Von Rossum, proposa une implémentation de graphe en Python utilisant la
**liste d'adjacence**(https://www.python.org/doc/essays/graphs/):

> Few programming languages provide direct support for graphs as a data type, and Python is no
> exception. However, graphs are easily built out of lists and dictionaries. For instance, here's a
> simple graph (I can't use drawings in these columns, so I write down the graph's arcs): 

```
A -> B
A -> C
B -> C
B -> D
C -> D
D -> C
E -> F
F -> C
```

```python
graph = {'A': ['B', 'C'],
         'B': ['C', 'D'],
         'C': ['D'],
         'D': ['C'],
         'E': ['F'],
         'F': ['C']}
```

En ce qui concerne les **matrices**, on les représente généralement sous forme de tableaux de
tableaux, comme vu en
[première](/1g/nsi/3-representation-des-donnees-types-construits/2-tableaux#tableaux-à-deux-dimensions-les-matrices).

$$
\begin{pmatrix}
   1 & 2 & 3\\
   4 & 5 & 6\\
   7 & 8 & 9 
\end{pmatrix}
$$

```python
M = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
```


::: appli

1. Dessiner une représentation conventionnelle du graphe proposé par Guido Von Rossum.
2. Écrire la matrice d'adjacence correspondante.
3. Proposer une implémentation de la matrice d'adjacence de ce graphe en Python en utilisant une
   liste de liste.

:::


::: ref

- [A gentle introduction to graph theory][medium]
- [Article wikipedia sur les graphes][wkp]
- [Lexique de la théorie des graphes sur Wikipédia](lexique)


[medium]: https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8 {.cite-source}
[wkp]: https://fr.wikipedia.org/wiki/Graphe_(math%C3%A9matiques_discr%C3%A8tes) {.cite-source}
[lexique]: https://fr.wikipedia.org/wiki/Lexique_de_la_th%C3%A9orie_des_graphes {.cite-source}

:::
