<!-- Corrections dans le notebook de correction du TP2-Tris -->
## Prévoir les sorties de boucles

Écrire les sorties des algorithmes suivants.

```python
for i in range(4, 7):
    print(i)
```

---

```python
for i in range(3, 9, 2):
    print(i)
```

---

```python
for i in range(4):
    for j in range(i):
        print(i, j)
```

---

```python
i = 0
while i < 5:
    i = i+1
    print(i)
```

---

```python
i = 3
while i >= 0:
    i = i - 1
    j = i
    while j >= 0:
        j = j - 1
        print(i, j)
```

---

```python
for i in range(3):
    for j in range(i, -1, -1):
        print(i, j)
```
<!-- 
    0 0
    1 1
    1 0
    2 2
    2 1
    2 0 -->


---

```python
i = 3
while i > 0:
    j = i - 1
    while j < 3:
        j = j + 1
        print(i, j)
    i = i - 1
```


---

```python
i = 3
while i > 0:
    for j in range(i):
        print(i, j)
    i = i - 1
```


---

```python
for i in range(3, 1, -1):
   j = i 
   while j > 0:
         print(i, j)
         j = j - 1
```

---

```python
liste = [13, 5, 7, 9, 11]
for i in range(1, len(liste)):
    print(liste[i], liste[i-1])
```

---

```python
liste = [13, 5, 7, 9, 11]
for i in range(len(liste)- 2, -1, -1):
    print(liste[i], liste[i+1])
```

---

```python
dict = {"a": 0, "b": 1, "c": 2}
for item in dict.items():
    print(item)
```

## Dessiner des motifs avec des boucles

1. Écrivez un programme Python pour construire le motif suivant, en utilisant une boucle.

   ```
   *
   * *
   * * *
   * * * *
   * * * * *
   * * * *
   * * *
   * *
   *
   ```

2. Écrivez un programme Python qui accepte un mot de l'utilisateur et l'inverse.

3. Écrivez un programme Python qui prend deux chiffres `m` (nb de lignes) et `n` (nb de colonnes)
   en entrée et génère un tableau à deux dimensions.
   
   La valeur de l'élément dans la i-ème ligne et la j-ème colonne du tableau doit être `i*j`.
   
   Exemple : Lignes = 3, Colonnes = 4
   Résultat attendu : [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6]]

4. Écrivez un programme Python pour afficher le motif alphabétique « E ».

   Sortie attendue:
   
   ```
   *****
   *
   *
   ****
   *
   *
   *****
   ```

5. Écrivez un programme Python pour afficher le motif alphabétique « Z ».
   
   Sortie attendue:
   
   ```
   *******
        *
       *
      *
     *
    *
   *******
   ```

6. Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.
   
   Sortie attendue:

   ```
   1
   22
   333
   4444
   55555
   666666
   7777777
   88888888
   999999999
   ```

7. Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.
   
   Sortie attendue:

   ```
   999999999
   88888888
   7777777
   666666
   55555
   4444
   333
   22
   1
   ```
<!-- for i in range(9, 0, -1):
    txt = i * str(i)
    print(txt) -->

8. Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.
   
   Sortie attendue:

   ```
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
<!-- for i in range(1, 10):
    txt = i * " " + (10 - i) * str(i)
    print(txt) -->

9. Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.
   
   Sortie attendue:

   ```
   1                1
   22              22
   333            333
   4444          4444
   55555        55555
   666666      666666
   7777777    7777777
   88888888  88888888
   999999999999999999
   ```
<!-- for i in range(1, 10):
    txt = i * str(i)
    txt += (9 - i) * 2 * " "
    txt += i * str(i)
    print(txt) -->


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

