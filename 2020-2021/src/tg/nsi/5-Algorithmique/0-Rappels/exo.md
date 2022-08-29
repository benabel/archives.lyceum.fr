<!-- Corrections dans le notebook de correction du TP2-Tris -->

## Maitriser les boucles en Python

Si besoin consulter la page de cours de première sur les
[boucles](/1g/nsi/7-langages-et-programmation/5-boucles).

### Prévoir la sortie des instructions suivantes


```python
for i in range(5):
    print(i)

for i in range(1, 5):
    print(i)

for i in range(5, 1, -1):
    print(i)

for i in range(5):
    for j in range(i):
        print(j)

for i in range(5):
    j = i
    while j > 0:
        print(j)
        j -= 1
```

### Écrire le code permettant d'obtenir les sorties suivantes

```
O
OO
OOO
OOOO
OOOOO
OOOOOO
OOOOOOO
OOOOOOOO
OOOOOOOOO
```
&nbsp;

```
0000000000
111111111
22222222
3333333
444444
55555
6666
777
88
9
```
&nbsp;

```
  | |
-------
  | |
-------
  | |

```

## Vérifier qu'une liste est triée

Écrire le code d'une fonction appelée `is_sorted` qui prend en paramètres une liste et qui renvoie
`True` si la liste est triée et `False` sinon.

1. Écrire en python le code de la fonction en la _prototypant_.
2. Proposer quelques tests d'`assert`ion en pensant aux cas limites : liste vide, liste triée,
   éléments égaux...
3. Évaluer la complexité de l'algorithme dans le pire des cas.

## Étude du tri par insertion

On donne ci-dessous le code Python du tri par insertion :

```python
def tri_insertion(t):
    n = len(t)
    for i in range(1, n):
        # ICI
        x = t[i]
        j = i
        while j > 0 and t[j-1] > x:
            t[j] = t[j-1]
            j = j - 1
        t[j] = x
        # LA
    return t
```
### Compréhension de l'algorithme

1. Écrire le prototype de cette fonction.

On va étudier l'appel de la fonction avec comme argument `[11, 25, 12, 22, 64]`.

2. Écrire l'instruction permettant d'exécuter l'appel de la fonction avec la liste précédente.
3. Que représente `n`? Quelle est sa valeur?
4. Quelles seront les valeurs prises par `i` données par l'instruction `for i in range(1, n)`?
5. Dans un tableau, donner les états successifs du tableau aux points `ICI` et `LA` pour tous les
   tours de la boucle externe(`for`).
6. Expliquer le rôle de la boucle interne(`while`).

### Étude de la complexité

1. Rappeler la définition de la complexité.
2. Montrer que pour tout entier $n$, la somme des entiers de 1 à $n$ vaut :
   $$
   {\displaystyle S=1+2+3+\cdots +(n-1)+n=\sum _{i=1}^{n}i={\frac {n(n+1)}{2}}.}
   $$
   ([voir cette animation](https://fr.wikipedia.org/wiki/Somme_(arithm%C3%A9tique)#/media/Fichier:Animated_proof_for_the_formula_giving_the_sum_of_the_first_integers_1+2+...+n.gif)
   si nécessaire.)
3. Calculer la complexité du tri par insertion proposé.
4. En déduire qu'il s'agit d'un algorithme de complexité quadratique: $O(n^2)$.

### Correction de l'algorithme

Etablir la correction de l'algorithme. On rappelle que pour prouver la correction nous devons
montrer les trois points suivants:

1. **Initialisation:** L'invariant est vrai avant la première itération.
2. **Conservation:** si l'invariant est vrai avant une itération, il restera vrai après l'itération.
3. **Terminaison:** la boucle se termine et nous donne le résultat attendu.
