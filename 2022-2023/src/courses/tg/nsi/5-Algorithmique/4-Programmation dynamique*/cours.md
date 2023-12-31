---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: ''
---





<p><strong>Ce chapitre ne pourra pas faire l’objet d’une évaluation lors de l’épreuve terminale écrite et pratique de l’enseignement de spécialité.</strong> <a href="https://www.education.gouv.fr/bo/21/Hebdo30/MENE2121274N.htm" class="cite-source">BO MENE2121274N</a></p>
<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>Contenus</th>
<th>Capacités attendues</th>
<th><div class="highlight"><pre><span></span>     Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Programmation dynamique.</td>
<td>Utiliser la programmation dynamique pour écrire un algorithme.</td>
<td><p>Les exemples de l’alignement de séquences ou du rendu de monnaie peuvent être présentés.</p>
<p>La discussion sur le coût en mémoire peut être développée.</p></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>


<!-- 

> Dans ce chapitre, nous allons étudier la _programmation dynamique_, c'est une technique qui comme
> la méthode "diviser pour régner décompose un problème en plus petits problèmes plus faciles à
> résoudre. Cependant, elle y ajoute la technique de _mémoïsation_ qui permet d'éviter d'effectuer
> plusieurs fois le même calcul lorsque les sous-problèmes ne sont pas indépendants.

## Principe

Nous allons illustrer le principe de la programmation dynamique sur le calcul de la suite de
Fibonacci. La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme
des deux termes qui le précèdent. 

$$
{\mathcal {F}}_{0} = 0 , \quad {\mathcal {F}}_{1}=1, et
{\mathcal {F}}_{n} = {\mathcal {F}}_{n-1} + {\mathcal {F}}_{n-2}
$$

::: plus

Cette suite est liée au nombre d'or, ou proportion divine telle que:

$$
\frac{a+b}{a} = \frac{a}{b}
$$

:::

Si on appliquait simplement la méthode "diviser pour régner", l'algorithme s'écrirait:

```
FONCTION fibonacci(n)
   SI n = 0 OU n = 1
         RETOURNER n
   SINON
         RETOURNER fibonacci(n-1) + fibonacci(n-2)
```
Cependant cette méthode n'est pas du tout efficace, pour calculer ${\mathcal {F}}_{5}$, je dois
calculer deux fois ${\mathcal {F}}_{3}$, comme le montre le graph de dépendances des sous problème.

<p><a href="https://commons.wikimedia.org/wiki/File:Fibonacci_dynamic_programming.svg#/media/Fichier:Fibonacci_dynamic_programming.svg"><img width="128px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fibonacci_dynamic_programming.svg/1200px-Fibonacci_dynamic_programming.svg.png" alt="Fibonacci dynamic programming.svg"></a><br>Image par <a href="https://en.wikipedia.org/wiki/User:Dcoatzee" class="extiw" title="en:User:Dcoatzee">en:User:Dcoatzee</a>, traced by <a href="//commons.wikimedia.org/wiki/User:Stannered" title="User:Stannered">User:Stannered</a> — <a href="https://en.wikipedia.org/wiki/Image:Fibonacci_dynamic_programming.png" class="extiw" title="en:Image:Fibonacci dynamic programming.png">en:Image:Fibonacci dynamic programming.png</a>, Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=3325402">Lien</a></p>

Ce graph n'est pas un arbre ce qui illustre que les _sous-problèmes se chevauchent_. Dès que n
devient un peu plus grand, ces calculs inutiles à répétition rendent l'algorithme inutilisable.

Nous allons utiliser la technique de _mémoïsation_ de la programmation dynamique pour stocker les
résultats intermédiaires et les utiliser pour éviter les calculs identiques.

```
F = []  # Cette liste est utilisée pour stocker les termes de la suite au fur et à mesure
FONCTION fibonacci(n)
   SI F[n] n'est pas défini
      SI n = 0 ou n = 1
         F[n] := n
      SINON
         F[n] := fibonacci(n-1) + fibonacci(n-2)
   retourner F[n]
```

::: {.plus titre="Implémentation en Python"}

En mesurant les temps respectifs avec `timeit`, on constate que qu'avec des nombres de quelques
dizaines seulement, l'algorithme dynamique est déjà 3000 fois plus rapide, et l'écart s'accentue
plus n est grand.

```python
%%timeit
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

assert fibonacci(13) == 233
assert fibonacci(25) == 75025
```

`19.7 ms ± 5.79 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)`

```python
%%timeit
F = [0, 1]
def fibonacci_dynamique(n):
    if n < 2:
        return n
    elif n < len(F):
        return F[n]    
    else:
        fn = fibonacci_dynamique(n-1) + fibonacci_dynamique(n-2)
        F.append(fn)
    return F[n]
assert fibonacci_dynamique(13) == 233
assert fibonacci_dynamique(25) == 75025
```

`6.35 µs ± 11.3 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)`

:::

Bien sûr l'utilisation de la liste a un coût mémoire, le gain temporel(la complexité temporelle) se
fait au détriment de l'utilisation de la mémoire(On parle de complexité spatiale en ce qui concerne
la mémoire).



## Le problème du sac à dos

Nous avions déjà vu le problème en première dans le chapitre sur les [algorithmes
gloutons](../../../1g/nsi/8-algorithmique/5-algorithmes-gloutons/) qui nous avait permis
d'obtenir une solution assez bonne mais pas forcément optimale par la méthode gloutonne.

<p><a href="https://commons.wikimedia.org/wiki/File:Knapsack.svg#/media/File:Knapsack.svg"><img width="256px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Knapsack.svg/1200px-Knapsack.svg.png" alt="Knapsack.svg"></a><br><a href="https://creativecommons.org/licenses/by-sa/2.5" title="Creative Commons Attribution-Share Alike 2.5">CC BY-SA 2.5</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=985491">Link</a></p>

C'est un problème d'optimisation sous contrainte: Comment maximiser la valeur contenue dans le sac
sans dépasser la capacité du sac?


Nous allons appliquer à ce problème la programmation dynamique car il possède une propriété
particulière:

> Le problème du sac à dos possède la propriété de sous-structure optimale, c'est-à-dire que l'on
> peut construire la solution optimale du problème à $i$ variables à partir du problème à $i-1$
> variables.

[Article Wikipedia sur le problème du sac à dos](https://fr.wikipedia.org/wiki/Probl%C3%A8me_du_sac_%C3%A0_dos#Programmation_dynamique){.cite-source}

En clair il est possible de trouver la solution pour un sac de capacité $W$ si on connait la
solution pour tous les sacs de capacité inférieur à $W$.

On va construire un tableau avec nos solutions optimales pour les sacs allant de 1 à 15kg.

Pour chaque masse de sac $m$, on a pour chaque objet deux possibilités:

- On prend cet objet de masse $m_i$ et de valeur $v_{i}$.
- On ne prend pas cet objet.

Pour prendre cette décision, il suffit de comparer la valeur du sac si on ne prend pas l'objet à la
valeur du sac si on prend cet objet **plus** la plus grande valeur du sac de poids capacité du sac
moins masse de l'objet, la solution gardée est:

$$
\max \left(valeur(m - m_i) + v_{i} \right)
$$

_Ne pas prendre l'objet consiste à prendre un objet de masse nulle et de valeur nulle(voir
implémentation)._

::: {.plus titre="Implémentation en Python"}

```python
# adapté de https://dev.to/downey/solving-the-knapsack-problem-with-dynamic-programming-4hce

# | objet | masse | valeur |
# |-------|-------|--------|
# | 1     | 1     | 1      |
# | 2     | 1     | 2      |
# | 3     | 2     | 2      |
# | 4     | 4     | 10     |
# | 5     | 12    | 4      |

# On a ajouté l'absence d'objet avec les 0
objet_masses = [0, 1, 1, 2, 4, 12]
objet_valeurs = [0, 1, 2, 2, 10, 4]

n = len(objet_masses)
MASSE_MAX = 15  # Capacité maximale du sac

# initialisation de notre liste de valeurs optimales à 0
sac_optimisés = [0 for i in range(MASSE_MAX + 1)]

# Itération sur toutes les masses de 1 à 15kg
# (Approche BOTTOM-UP nécessaire à la mémoïsation)
for m in range(1, MASSE_MAX + 1):
    valeur_max_pour_m = 0
    for i in range(1, n):
        mi = objet_masses[i]
        vi = objet_valeurs[i]
        if mi <= m:
            valeur_avec_objet_i = sac_optimisés[m - mi] + vi
            if valeur_avec_objet_i > valeur_max_pour_m:
                valeur_max_pour_m = valeur_avec_objet_i
    sac_optimisés[m] = valeur_max_pour_m

# Results
print("Resultat: ", sac_optimisés[MASSE_MAX])
print("liste des sac_optimisés: ", sac_optimisés)
```
La démonstration de la correction de l'algorithme est donnée [ici](eind).

La complexité est $O(mn)$, puisqu'on fait une itération de tous les objets pour tous les sacs(Force
Brute).

:::


On obtient ce tableau qui permet de voir que la solution optimale est 36€ pour un sac de 15kg.

| Capacité du sac(kg) | 0 | 1 | 2 | 3 | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11 | 12 | 13 | 14 | 15 |
|---------------------|---|---|---|---|----|----|----|----|----|----|----|----|----|----|----|----|
| Valeur maximale(€)  | 0 | 2 | 4 | 6 | 10 | 12 | 14 | 16 | 20 | 22 | 24 | 26 | 30 | 32 | 34 | 36 |

Comme vous le voyez cet algorithme nous donne la valeur maximale du sac, mais on ne sait pas quels
objets, il faut prendre, on va le modifier pour garder en plus de la valeur maximale les objets
pris.

Nous allons modifier légérement le code pour garder un trace des sacs optimaux réalisés en
modifiant légérement la liste utilisée pour la mémoïsation:

Au lieu de stocker simplement la valeur du sac, on crée une liste avec:

- la valeur à l'index 0 
- le contenu du sac à l'index 1 sous forme de liste

Le meilleur sac de 14 kg `[14, [0, 0, 2, 0, 1, 0]]` a une valeur de 14€ avec 2 objets de 2kg à 2€
et 1 objet de 4kg à 10€.

::: {.plus titre="Implémentation en Python"}

```python
# Pour connaitre le jeu d'objets de la solution optimale
# On va stocker les objets dans une liste 
# en plus de la valeur maximale du sac

# On a ajouté l'absence d'objet avec les 0
objet_masses = [0, 1, 1, 2, 4, 12]
objet_valeurs = [0, 1, 2, 2, 10, 4]

n = len(objet_masses)
MASSE_MAX = 15  # Capacité maximale du sac


def pas_dobjets():
    """renvoie une liste vide contenant les objets choisis
    
    Fonction utilitaire car les listes sont passées en références"""
    return [0 for i in range(n)]

# initialisation de notre liste de valeurs optimales
sac_optimisés = [[0, pas_dobjets()] for i in range(MASSE_MAX + 1)]

# Itération sur toutes les masses de 1 à 15kg
# (Approche BOTTOM-UP nécessaire à la mémoïsation)
for m in range(1, MASSE_MAX + 1):
    # On crée une sous liste pour la liste des objets
    valeur_max_pour_m = [0, pas_dobjets()]
    for i in range(1, n):
        mi = objet_masses[i]
        vi = objet_valeurs[i]
        if mi <= m:
            valeur_avec_objet_i = sac_optimisés[m - mi][0] + vi
            if valeur_avec_objet_i > valeur_max_pour_m[0]:
                valeur_max_pour_m[0] = valeur_avec_objet_i
                valeur_max_pour_m[1] = sac_optimisés[m - mi][1].copy()
                valeur_max_pour_m[1][i] += 1
    sac_optimisés[m] = valeur_max_pour_m

# Results
print("Resultat: ", sac_optimisés[MASSE_MAX])
#print("liste des sac_optimisés: ", sac_optimisés)
```

:::

On obtient le tableau suivant:

+---------------------+--------------------+--------------------+
| Capacité du sac(kg) | Valeur maximale(€) |   Contenu du sac   |
+=====================+====================+====================+
| 0                   | 0                  | [0, 0, 0, 0, 0, 0] |
| 1                   | 2                  | [0, 0, 1, 0, 0, 0] |
| 2                   | 4                  | [0, 0, 2, 0, 0, 0] |
| 3                   | 6                  | [0, 0, 3, 0, 0, 0] |
| 4                   | 10                 | [0, 0, 0, 0, 1, 0] |
| 5                   | 12                 | [0, 0, 1, 0, 1, 0] |
| 6                   | 14                 | [0, 0, 2, 0, 1, 0] |
| 7                   | 16                 | [0, 0, 3, 0, 1, 0] |
| 8                   | 20                 | [0, 0, 0, 0, 2, 0] |
| 9                   | 22                 | [0, 0, 1, 0, 2, 0] |
| 10                  | 24                 | [0, 0, 2, 0, 2, 0] |
| 11                  | 26                 | [0, 0, 3, 0, 2, 0] |
| 12                  | 30                 | [0, 0, 0, 0, 3, 0] |
| 13                  | 32                 | [0, 0, 1, 0, 3, 0] |
| 14                  | 34                 | [0, 0, 2, 0, 3, 0] |
| 15                  | 36                 | [0, 0, 3, 0, 3, 0] |
+---------------------+--------------------+--------------------+

On a donc maintenant en plus de la valeur, le contenu du sac. Je vous laisse vérifier que ce sac
est bien _optimal_.

## Conclusion

Dans ce chapitre nous avons vu comment résoudre des problèmes d'optimisation à l'aide de la
programmation dynamique si la solution du problème peut-être construite à partir de la solution de
ses sous problèmes. Nous avons également vu comment rendre ces algorithmes plus efficaces
(temporellement) en utilisant la technique des mémoïsation qui consite à stocker les solutions des
sous-problèmes afin de ne pas les calculer plusieurs fois.

Même si nous avons vu que deux exemples, les problèmes d'optimisations contraintes sont des
problèmes très courants et d'une grande importance pratique:

- Gestion des stocks d'un magasin,
- gestion d'emplois du temps,
- optimisation des ressources d'un ordinateur, d'un réseau, des salles d'un batiment...


::: ref

- [Article Wikipedia sur la programmation dynamique][wikipedia]
- [Lecture 13:The Knapsack Problem University of Eindhoven](eind)

[eind]: http://www.es.ele.tue.nl/education/5MC10/Solutions/knapsack.pdf
[wikipedia]: https://fr.wikipedia.org/wiki/Programmation_dynamique

::: -->

