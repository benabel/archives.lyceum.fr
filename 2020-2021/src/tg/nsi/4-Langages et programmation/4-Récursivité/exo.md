## Fonction factorielle

On rappelle que factorielle de n _(notée $!n$)_ est définie ainsi:

$$
n! = n \times n - 1 \times \ldots \times 2 \times 1
$$

Par exemple: $3! =  3 \times 2 \times 1 = 6$; et $4! =  4 \times 3 \times 2 \times 1 = 24 $...

1. Écrire une fonction itérative _(non récursive)_ appelée `factorielle` qui prend un paramètre `n`
   entier en entrée et qui renvoie le factoriel de `n` en sortie.
2. Écrire une version récursive de cette fonction appelée `factorielle_rec`.


*[Cours python de l'université de Paris Diderot](https://python.sdv.univ-paris-diderot.fr/12_plus_sur_les_fonctions/#122-fonctions-recursives)*{.cite-source}

## Suite de Fibonacci

La suite de Fibonacci est une suite de nombres entiers définie par récurrence.

Les deux premiers termes sont 0 et 1, puis un terme est la somme des deux termes précédents.

On obtient ainsi les nombres dits de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...

La définition mathématique est:

$$
f_0 = 0 \newline

f_1 = 1 \newline

f_n = f_{n-1} + f_{n-2} \text{ pour n > 1}
$$

1. Écrire une version récursive `fibo` qui calcule le terme $f_n$ de la suite de Fibonacci. Par
   exemple: `fibo(7)` renvoie 13.
2. Écrire une fonction itérative _(non récursive)_ `fibo_iter`.


## Parité d'un entier naturel

La fonction `est_pair` définie ci-dessous indique si un entier naturel est pair ou non.

```python
def est_pair(n):
    while n > 0:
        n = n - 2
    return n == 0
```

Écrire une version récursive de cette fonction `est_pair_rec`.

*[NSI Terminale de Serge Bays aux éditions Eyrolles](https://www.eyrolles.com/Loisirs/Livre/specialite-numerique-et-sciences-informatiques-terminale-nouveaux-programmes-9782340038448/)*{.cite-source}

##  Fonction somme

On autorise seulement deux opérations sur les entiers:

- Ajouter 1;
- retrancher 1.

La fonction `somme` définie ci-dessous renvoie la _somme de deux entiers positifs_ avec ces deux
opérations.

```python
def somme(a, b):
    while b > 0:
        a = a + 1
        b = b - 1
    return a
```

1. Écrire une version récursive de cette fonction `somme_rec`.
2. Adapter le code des fonctions `somme` et `somme_rec` afin de pouvoir renvoyer la _somme de deux
   entiers quelconques_.


*[NSI Terminale de Serge Bays aux éditions Eyrolles](https://www.eyrolles.com/Loisirs/Livre/specialite-numerique-et-sciences-informatiques-terminale-nouveaux-programmes-9782340038448/)*{.cite-source}

## Somme des éléments d'une liste

1. Écrire une fonction récursive `somme_list_rec` qui prend un paramètre une liste de nombres et
   renvoie la somme des termes de cette liste. Par exemple: `somme_list_rec([4, 7, 2])` renvoie `11`.
2. Expliquer le déroulement de l'exécution de cette fonction lors de l'appel `somme_list_rec([4, 7, 2])`.
   On pourra s'aider du site <http://pythontutor.com/>.


*[NSI Terminale de Serge Bays aux éditions Eyrolles](https://www.eyrolles.com/Loisirs/Livre/specialite-numerique-et-sciences-informatiques-terminale-nouveaux-programmes-9782340038448/)*{.cite-source}

## Inversion d'une chaîne de caractères

Écrire une fonction récursive `inverse` qui prend en paramètre une chaîne de caractères `txt` et
qui renvoie la chaîne en inversant l'ordre des lettres. Par exemple: `inverse("azerty")` renvoie
`ytreza`.

*[NSI Terminale de Serge Bays aux éditions Eyrolles](https://www.eyrolles.com/Loisirs/Livre/specialite-numerique-et-sciences-informatiques-terminale-nouveaux-programmes-9782340038448/)*{.cite-source}
