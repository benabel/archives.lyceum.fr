---
tags: ["cours", "pc", "terminale", "lycée", "enseignement scientifique"]
---

::: programme

+---------------------------------------------------+------------------------------------------+
|                    **Savoirs**                    |             **Savoir-faire**             |
+===================================================+==========================================+
| Au cours du transport, une partie de l’énergie    | Faire un schéma d’un circuit électrique  |
| électrique, dissipée dans l’environnement par     | modélisant une ligne à haute tension.    |
| effet Joule, ne parvient pas à l’utilisateur.     |                                          |
|                                                   | Utiliser les formules littérales reliant |
| L’utilisation de la haute tension dans les lignes | la puissance à la résistance,            |
| électriques limite les pertes par effet Joule, à  | l’intensité et la tension pour           |
| puissance transportée fixée.                      | identifier l’influence de ces grandeurs  |
|                                                   | sur l’effet Joule.                       |
+---------------------------------------------------+------------------------------------------+
| Un réseau de transport électrique peut être       | Modéliser un réseau de distribution      |
| modélisé mathématiquement par un graphe orienté   | électrique simple par un graphe orienté. |
| dont les arcs représentent les lignes électriques | Exprimer mathématiquement les            |
| et dont les sommets représentent les sources      | contraintes et la fonction à minimiser.  |
| distributrices, les nœuds intermédiaires et les   |                                          |
| cibles destinatrices.                             | Sur l’exemple d’un réseau comprenant     |
|                                                   | uniquement deux sources, un nœud         |
| Dans ce modèle, l’objectif est de minimiser les   | intermédiaire et deux cibles, formuler   |
| pertes par effet Joule sur l’ensemble du réseau   | le problème de minimisation des pertes   |
| sous les contraintes suivantes :                  | par effet Joule et le résoudre pour      |
|                                                   | différentes valeurs numériques           |
| - l’intensité totale sortant d’une source est     | correspondant aux productions des        |
| limitée par la puissance maximale distribuée;     | sources et aux besoins des cibles.       |
|                                                   |                                          |
| - l’intensité totale entrant dans chaque nœud     |                                          |
| intermédiaire est égale à l’intensité totale qui  |                                          |
| en sort;                                          |                                          |
| - l’intensité totale arrivant à chaque cible est  |                                          |
| imposée par la puissance qui y est utilisée.      |                                          |
+---------------------------------------------------+------------------------------------------+

:::

<!-- `youtube: KstC2jRZJns` -->


## Transport en haute tension

::: prop

Lorsqu'un conducteur est traversé par un courant, de l'énergie thermique est perdue: c'est l'_effet Joule_.

La puissance dissipée par effet Joule est donnée par la formule.

$$
P_J = RI^2
$$

:::

Lorsqu'on élève la tension pour transporter l'électricité, à puissance égale, l'intensité diminue
puisque $P=UI$. Ainsi la puissance dissipée par effet Joule diminue aussi.

::: appli

Une centrale électrique produit une puissance électrique de 100MW à destination d'une ville située
à 40km.

Calculer la puissance dissipée par effet Joule pour un transport en BT à 400V et le comparer à
un transport en THT à 400kV.

Données: la résistance linéique des lignes électriques est de $0,25\Omega/km$

:::

## Minimiser les pertes par effet Joule

::: appli 

Activité P128-129

:::

Pour minimiser les pertes par effet Joule sur un réseau à deux sources $S_1$ et $S_2$.

1. On modélise le réseau par un graphe orienté.
2. On écrit la fonction $f(I_1, I_2)$ de calcul de la somme des puissances perdues par effet Joule
   en fonction de $I_1$ et $I_2$.
3. En appliquant la loi des nœuds on exprime $I_2$ en fonction de $I_1$.
4. On réécrit la fonction $f$ seulement en fonction de $I_1$.
5. On recherche le minimum de la fonction $f$ par méthode graphique ou analytique.

