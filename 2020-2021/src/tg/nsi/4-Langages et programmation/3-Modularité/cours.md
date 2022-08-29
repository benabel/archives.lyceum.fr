---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: programme

+---------------------+----------------------------------+--------------------------------------+
|      Contenus       |       Capacités attendues        |             Commentaires             |
+=====================+==================================+======================================+
| Modularité.         | Utiliser des API (Application    |                                      |
|                     | Programming Interface) ou des    |                                      |
|                     | bibliothèques.                   |                                      |
|                     |                                  |                                      |
|                     | Exploiter leur documentation.    |                                      |
|                     | Créer des modules simples et     |                                      |
|                     | les documenter.                  |                                      |
+---------------------+----------------------------------+--------------------------------------+

:::

Jusqu'à maintenant, nous avons toujours programmé au sein d'un seul fichier (ou script). Cependant,
lorsqu'on souhaite rédiger des programmes plus longs, il est souhaitable de séparer le code dans
plusieurs fichiers. Chaque fichier est appelé un module et les définitions d'un module peuvent être
importées dans un autre module grâce au mot-clé `import`.

## Utilisation des modules

Vous avez en fait déjà utilisé des modules, car ceux-ci font partie intégrante de Python lui-même.

On a par exemple déjà utilisé les modules `math` ou `random`, nous allons dans cet exemple utiliser
le module [`statistics`](https://docs.python.org/fr:3/library/statistics.html) moins connu ajouté à
partir de la version 3.4 de Python.

```python
# import du module
import statistics
# affiche l'aide
help(statistics)
```

Supposons que l'on souhaite utiliser les fonctions `mean()` moyenne et `stdev()` :écart-type.
Plusieurs solutions s'offrent à nous:

1. Import du module et utilisation de son espace de noms avec une notation pointée(avec un point
   entre le nom du module et le nom de la fonction).

```python
import statistics
notes = [11, 14, 18, 5, 12, 13, 15]
print("Moyenne:", statistics.mean(notes))
print("Écart-type:", statistics.stdev(notes))
```
SORTIE
```
Moyenne: 12.571428571428571
Écart-type: 4.035556254807296
```

On peut aussi renommer l'import avec le mot-clé `as` pour rendre le code plus lisible.

```python
import statistics as stat
notes = [11, 14, 18, 5, 12, 13, 15]
print("Moyenne:", stat.mean(notes))
print("Écart-type:", stat.stdev(notes))
```

2. Vous pouvez également n'importer que les fonctions dont vous avez besoin.

```python
from statistics import mean, stdev
notes = [11, 14, 18, 5, 12, 13, 15]
print("Moyenne:", mean(notes))
print("Écart-type:", stdev(notes))
```

3. Une autre méthode cependant **déconseillée** en raison de la pollution de l'espace des noms(de
   variables) est l'utilisation du `*` (wildcard, _joker_ en anglais).

```python
from statistics import *
# Toutes les objets du module sont disponibles sans notation pointée
notes = [11, 14, 18, 5, 12, 13, 15]
print("Moyenne:", mean(notes))
print("Écart-type:", stdev(notes))
```

## Notre premier module

Nous allons créer un premier module dans un fichier `fibo.py`.

```python
# Module sur les nombres de Fibonacci

def fib(n):    # affiche les nombres de Fibonacci jusqu'à n
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

def fib2(n):   # renvoie la liste des nombres de Fibonacci jusqu'à n
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result
```

Ce module est accessible sous le nom `fibo` en python(l'extension ne doit pas être précisée.)

On peut alors importer le module et utiliser les fonctions qui y sont définies:

- soit en important le module directement et en utilisant des notations pointées;

```python
import fibo
fibo.fib(1000)
# affiche 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
fibo.fib2(100)
# renvoie [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

- soit en important spécifiquement des fonctions pour pouvoir les utiliser sans rappeler le module
  d'origine.

```python
from fibo import fib, fib2
fib(1000)
# affiche 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
fib2(100)
# renvoie [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```
## Documenter un module

Nous avons déjà vu en
[première](/1g/nsi/7-langages-et-programmation/6-fonctions/#prototyper-une-fonction)
comment _prototyper_ des fonctions pour décrire le rôle de la fonction, le type des paramètres et
le type de la valeur de retour.

Pour documenter un module il suffit de créer la `docstring` au début du fichier en utilisant les
chaines de caractères multi lignes délimitées par `"""`, pour une lecture aisée on limite souvent le
nombre de caractères par ligne à 80(ou 100 suivant les projets).

Si on prend l'exemple précédent on pourrait le documenter avec une description générale au début du
module ainsi qu'une liste des fonctions, et en pensant à documenter également les fonctions bien
sûr.

Les fonctions ont également été renommées pour être plus explicites:

- `fib`: `fib_print`
- `fib2`: `fib_to_array`

```python
""" Module fibo relatif à la création de nombres de Fibionacci

Pour rappel, la suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme 
des deux termes qui le précèdent.(voir: https://fr.wikipedia.org/wiki/Suite_de_Fibonacci)

Ce module présente deux fonctions:

- fib_print: affiche les nombres de Fibionacii
- fib_to_array: renvoie la liste des nombres de Fibionacci

"""

def fib_print(n):
    """Affiche les nombres de Fibionacii

    Arguments
    ---------
    n: int
        dernier rang de la suite de Fibonacci affiché
    """
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

def fib_to_array(n):
    """Renvoie la liste des nombres de Fibionacii

    Arguments
    ---------
    n: int
        dernier rang de la suite de Fibonacci renvoyé dans la liste
    
    Returns
    -------
    list
        La liste des nombres de Fibionnaci jusqu'au rang n
    """
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result
```

## API (_Application Programming Interface_)

Lorsqu'un projet grandit, il y a de plus en plus de personnes qui doivent travailler dessus et
l'utiliser et il devient de plus en plus complexe à comprendre. C'est pour cela qu'une bonne
documentation est indispensable, mais aussi une bonne organisation du code afin de le rendre plus
facile à utiliser.

Il conviendra de bien organiser les divers modules et fonctions accessibles, ce qu'on appelle
l'API.

On peut prendre l'exemple de la bibliothèque open-source
[`sklearn`](https://github.com/scikit-learn/scikit-learn) connue pour la qualité de son code, de
son API et de sa documentation.

https://scikit-learn.org/stable/modules/classes.html

::: app

Utiliser la documentation de sklearn pour implémenter la recherche des k-plus proches voisins vue
en classe première en utilisant le jeu de données sur les joueurs du top-14: 

https://github.com/heoinfo/k-plus-proches-voisins/tree/master/top-14

:::

  
::: ref

- [Documentation python sur les modules](https://docs.python.org/fr/3/tutorial/modules.html)
- [A Guide to NumPy/SciPy Documentation](https://numpy.org/devdocs/docs/howto_document.html)

:::