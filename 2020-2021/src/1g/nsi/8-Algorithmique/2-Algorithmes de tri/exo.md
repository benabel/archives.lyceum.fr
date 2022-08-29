## Tri par sélection

1. Effectuer à la main un tri par sélection des listes suivantes en précisant l'état de la liste à
   chaque tour de boucle externe:
    
    - `[28, 2, 34, 12, 16]`
    - `[1, 3, 7, 9, 16]`
    - `[51, 12, 6, 5, 3]`

2. Combien de tours de boucles a-t-il fallu au total(boucle interne et externe) dans chaque cas?

## Tri par insertion

1. Effectuer à la main un tri par insertion des listes suivantes en précisant l'état de la liste à
   chaque tour de boucle:
    
    - `[28, 2, 34, 12, 16]`
    - `[1, 3, 7, 9, 16]`
    - `[51, 12, 6, 5, 3]`

2. Combien de tours de boucles a-t-il fallu au total(boucle interne et externe) dans chaque cas?


3. On souhaite insérer dans une liste `tab` déjà trié un nouvel élément `e` de sorte que la
   nouvelle liste soit également triée.

   - Proposer un algorithme qui détermine la position à laquelle il faut l'insérer.
   - Dans quel cas cette opération demandera beaucoup de temps?
   
## Un autre algorithme de tri: le tri à bulles

L'algorithme de tri à bulles consiste à trier la liste en n'autorisant qu'à intervertir deux
éléments consécutifs de la liste. On peut le décrire comme ceci:

```
1. Chercher deux éléments consécutifs dans le désordre.
2. Si trouvés, les intervertir et recommencer
3. Sinon s'arrêter.
```
On peut démontrer que cet algorithme permet de trier n'importe quelle liste;

1. Effectuer à la main un tri à bulles des listes suivantes en précisant l'état de la liste à
   chaque tour de boucle:
    
    - `[28, 2, 34, 12, 16]`
    - `[1, 3, 7, 9, 16]`
    - `[51, 12, 6, 5, 3]`

2. Combien de tours de boucles a-t-il fallu au total dans chaque cas? Comparer ces résultats avec
   les résultats obtenus pour les tris précédents.



