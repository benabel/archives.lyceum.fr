## Graphe d'un réseau électrique

Un de vos amis travaille pour un distributeur d'électricité.

Il doit proposer à son supérieur une représentation du réseau reliant différentes villes. Comme il
n'y arrive pas trop, il voudrait que vous la lui fassiez.

Pour simplifier le problème, il a déjà renommé les villes en A, B, C, D, E et F. De plus, il vous donne les informations suivantes :

- la ville A est reliée par un réseau électrique aux villes B, E et F,
- la ville B est reliée par un réseau électrique aux villes A, C et D,
- la ville C est reliée par un réseau électrique aux villes B, D, E et F,
- la ville D est reliée par un réseau électrique aux villes B, C et F,
- la ville E est reliée par un réseau électrique aux villes A, C et F,
- la ville F est relié par un réseau électrique aux villes A, C, D et E.

1. Proposer un graphe qui modélise la situation.
2. Ce graphe est-il complet ? Pourquoi ?

[CC-BY-SA-NC Mon lycée numérique](mln){.cite-source}

## Représentation d'un graphe non orienté

Voici un ensemble des relations :

- A est ami avec tout le monde sauf G,
- B est ami avec A, D et H,
- C est ami avec A, F, G et H,
- D est ami avec A, B et H,
- E est ami avec A et H,
- F est ami avec A et C,
- G est ami avec C et H,
- H est ami avec A, B, C, D, E et G.

1. Représenter ce graphe et vérifier qu'il est non orienté.
2. Implémenter ce graphe sous la forme d'un dictionnaire de liste dans lequel chaque clé représente
   le nœud étudié et les sommets adjacents sont représentés sous la forme d'une liste.
3. Écrire la matrice d'adjacence et vérifier qu'elle est symétrique(_on utilisera l'ordre
   alphabétique pour indexer les nœuds_).
4. Implémenter la matrice en python sous la forme d'une liste de liste.

[CC-BY-SA-NC Mon lycée numérique](mln){.cite-source}

## Représentation d'un graphe orienté

Voici un ensemble de relations de suivi sur un réseau social.

![Réseau social d'amis avec suivi](../../images/medium-social-graph-directed.jpeg)

1. Implémenter ce graphe sous la forme d'un dictionnaire de liste dans lequel chaque clé représente
   le nœud étudié et les sommets successeurs sont représentés sous la forme d'une liste.
2. Écrire la matrice d'adjacence et vérifier qu'elle n'est pas symétrique(_on utilisera l'ordre
   alphabétique pour indexer les nœuds_).


## Représentation et parcours d'un graphe pondéré non-orienté

Voici un graphe représentant les distances dans le réseau sud-est.

![Réseau sud-Est](../../../../2gt/snt/images/reseau-routier-sud-est.svg)

1. Implémenter ce graphe sous la forme d'un dictionnaire de liste dans lequel chaque clé représente
   le nœud étudié et les sommets adjacents sont représentés sous la forme d'une liste de
   dictionnaires clé(sommet adjacent): valeur(distance).
2. Écrire la matrice d'adjacence et vérifier qu'elle est symétrique(_on utilisera l'ordre
   alphabétique pour indexer les nœuds_).
3. Proposer un algorithme qui renvoie tous les chemins possibles pour aller de Nice à Lyon sans
   jamais passer deux fois par la même ville. On utilisera trois paramètres d'entrée: le graphe
   implémenté sous la forme d'un dictionnaire d'adjacence comme celui de la question 2 et les deux
   villes de départ et d'arrivée.


[mln]: http://monlyceenumerique.fr/nsi_terminale/sd/sd5_graphe.php