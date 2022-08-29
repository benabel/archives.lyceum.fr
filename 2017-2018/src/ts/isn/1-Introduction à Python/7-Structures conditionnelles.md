---
tags: ["python", "structure conditionnelle", "if", "elif", "else"]
---


Nous avons vu la semaine dernière la notion de **bloc** à l'occasion de l'écriture de fonctions. Il s'agit de parties de programmes qui ne sont pas forcément exécutées à chaque lancement du programme.

En python, les blocs sont délimités grâce aux tabulations et introduits grâce à deux points `:`.

```
entrée dans un bloc:
    ligne 1 du bloc
    ligne 2 du bloc
    ...

retour dans l’exécution normale du programme ligne à ligne.
```

La semaine dernière le bloc définin dans la fonction n'est éxecuté qu'à l'appel de la fonction, aujourd'hui, nous allons utiliser des structures de contrôle qui permettent d’exécuter: des *blocs*, en fonction de conditions. On parle de **structure conditionnelles**.

Nous devons dans un premier temps définir les **opérations booléennes** qui vont nous permettre de définir nos conditions.

# Opérateurs booléens

Les **opérateurs booléens** sont des opérateurs de *comparaison* qui retournent un objet de type booléen: `True` ou `False`.


## Comparaisons de nombres

Soit x et y des variables de type `int` ou `float`, les opérateurs de comparaison sont:

- `x < y`: x est-il inférieur à y ?
- `x <= y`: x est-il inférieur ou égal  à y ?
- `x > y`: x est-il supérieur à y ?
- `x >= y`: x est-il supérieur ou égal à y ?
- `x == y`: x est-il égal à y ?
- `x != y`: x est-il différent y ?


**Exemples:**

```python
x = 3
y = 5
print(x < y)
>>> True

print(x <= y)
>>> True

# en ipython notebook, le print sur la deuxième ligne est optionnel
x > y
>>> False

x >= y
>>> False

x == y
>>> False

x != y
>>> True
```

On peut constater que ces instructions retournent systématiquement un objet de type booléen.

```python
type(x > y)

>>> <class 'bool'>
```

ou un erreur si on cherche à comparer *l'incomparable*:

```python
"un" < 2

>>> Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unorderable types: str() < int()
```

**ATTENTION:** Comme vous l'avez remarqué pour tester une égalité on utilise le double signe égal `==`. Tout simplement car le signe égal seul `=` est déjà utilisé pour l'[affectation](./6-Variables-et-fonctions) de variables.

# Associations d'opérations booléennes: les fonctions logiques

Il est également possible d'associer plusieurs opérations logiques grâce aux [trois fonctions logiques fondamentales](https://fr.wikipedia.org/wiki/Alg%C3%A8bre_de_Boole_(logique)#Fonctions_logiques_fondamentales):

- `not(a)`: **L'INVERSE** renvoie l'inverse de son argument `a`: `True` si `a` a pour valeur `False`, et vice-versa.
- `a and b`: **ET LOGIQUE** renvoie `True` si `a` et `b` ont pour valeur `True`.
- `a or b`: **ou LOGIQUE** renvoie `True` si `a` ou `b` ont pour valeur `True`.

**Exemples:**

```python
not(2 < 3)
>>> False

(1 < 2) or (9 < 5)
>>> True

(1 < 2) and (9 < 5)
>>> False
```

1. `not(2 < 3)` renvoie `False` car 2 est inférieur à trois donc en prenant l'inverse on obtient `False`
2. `(1 < 2) or (9 < 5)` renvoie `True` car une des deux expression est vraie, la première.
3. `(1 < 2) and (9 < 5)` renvoie `False` car les deux expressions ne sont pas vraies, seule la prmeière l'est.


# Programme à structure conditionnelle

Grâce aux opérateurs que l'on vient de voir on va pouvoir maîtriser la façon dont se déroule le programme en fonction de certaines conditions.

Le code sera toujours interprété ligne par ligne, cependant certains blocs de code ne seront exécutés que si une condition donnée est vraie.

En [Python](http://www.python.org), pour différencier les *blocs de code* et *le flux d'instructions* du programme principal, on les indente avec quatre espaces.

## L'instruction `if`

Le bloc d'instruction contenu n'est exécuté que si la condition est vérifiée.

**Syntaxe**

```
if condition:
    instruction 1
    instruction 2
    ...
```

```python
a = 3
if a > 0:
    a = -a
print(a)

>>> -3
```

Dans le programme précédent l'instruction `if a > 0:` est toujours éexécutée par l'interpréteur, car elle est dans le flux normal du programme(en début de ligne).

Par contre, l'instruction `a = -a` n'est éxecutée que si la condition `a > 0` a renvoyé `True`, il s'agit d'un **bloc** relatif à l'instruction  `if a > 0:` qui le précéde. Elle est **indentée** avec quatre espaces. Si j'affecte la valeur négative -5 à `a`, ce bloc ne sera pas exécuté, et le changement de signe n'aura pas lieu.

```python
a = -5
if a > 0:
    a = -a
print(a)

>>> -5
```

## L'instruction else

Indique le bloc d'instruction a exécuter si la condition n'est pas vérifiée.

**Syntaxe**

```
if condition:
    bloc d'instructions exécuté si la condition est vraie
else:
    bloc d'instructions exécuté si la condition est fausse
```


```python
a = -3
if a > 0:
    a = -a
else:
    a = a*100

print(a)

>>> -300
```

Comme initialement la variable a n'était pas positive, c'est le bloc d'instructions `else` qui a été exécuté.

## L'instruction elif

Cette instruction permet de réaliser des tests imbriqués, c'est un raccourci pour les instructions else et if.

**Syntaxe**

```
if condition 1:
    bloc d'instructions exécuté si la condition 1 est vraie
elif condition 2:
    bloc d'instructions exécuté si la condition 1 est fausse et la condition 2 vraie
else:
    bloc d'instructions exécuté si les conditions 1 et 2 sont fausses
```

```python
a = 3
if a == 7:
    print("C'est un chiffre porte bonheur")
elif a == 3:
    print("Quelques modifications sont nécessaires")
    a += 4

print(a)

>>> Quelques modifications sont nécessaires
>>> 7

```

Vous voila maintenant armés pour aborder des programmes beaucoup plus riches dans lesquels vous allez pouvoir **prendre des décisions** en fonction des données qui lui arrivent.

# Exercices

## Donner la valeur renvoyée par les instructions suivantes

```python
3 > 4

4.0 > 3.999

4 > 4

4 > + 4

2 + 2 == 4

True or False

False or False

not False

3.0 - 1.0 != 5.0 - 3.0

3 > 4 or (2 < 3 and 9 > 10)

4 > 5 or 3 < 4 and 9 > 8

not(4 > 3 and 100 > 6)
```


## Donner le type et la valeur renvoyée par les instructions suivantes


```python
a = 3
a == 5.0
a
```

```python
b = 10
c = b > 9
c
```

## Calculer les racines du trinôme

Vous devez implémenter un programme qui demande à l'utilisateur les trois coefficients du [trinôme](https://fr.wikipedia.org/wiki/Fonction_du_second_degr%C3%A9)  $ax^2 + bx + c$, et qui lui indique en retour [le nombre de racines et leurs valeurs](https://fr.wikipedia.org/wiki/Fonction_du_second_degr%C3%A9#.C3.89quation).

# Mini-projet

Créez un programme qui permette de calculer la surface de différents [polygones](https://fr.wikipedia.org/wiki/Formulaire_de_g%C3%A9om%C3%A9trie_classique#P.C3.A9rim.C3.A8tre_et_aire)(carré, rectangle...) à partir de questions posées à l'utilisateur.
