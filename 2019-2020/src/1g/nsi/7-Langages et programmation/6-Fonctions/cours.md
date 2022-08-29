---
"tags": ["python","fonctions", "procédures"]
---

::: programme
+------------------------+---------------------------------+-----------------------------------+
|        Contenus        |       Capacités attendues       |           Commentaires            |
+========================+=================================+===================================+
| Spécification          | Prototyper une fonction.        | Des assertions peuvent être       |
|                        |                                 | utilisées pour garantir des       |
|                        | Décrire les préconditions sur   | préconditions ou des              |
|                        | les arguments.                  | postconditions.                   |
|                        |                                 |                                   |
|                        | Décrire des postconditions sur  |                                   |
|                        | les résultats.                  |                                   |
+------------------------+---------------------------------+-----------------------------------+
:::

Si on écrit un programme qui nécessite souvent de réaliser *les mêmes suites d'instructions*, on peut alors **définir une fonction** qui évitera de réécrire constamment les mêmes instructions et de **rendre le programme plus lisible**.

## Définition d'une fonction

Une fonction possède un nom pour pouvoir être appelée et il est possible de lui communiquer des arguments.

En python la syntaxe de définition d'une fonction est la suivante:

**Syntaxe (ATTENTION À L'INDENTATION)**

```python
def nom_de_ma_fonction(arguments séparés par des virgules):
    instruction 1
    instruction 2
    ...
    return objet_renvoyé_par_ma_fonction
```


Pour appeler la fonction, il suffit de taper son nom avec les arguments entre parenthèse.

```python
nom_de_ma_fonction(arg1, arg2,...)
```

*Remarque: en python, la convention PEP8 donne l'habitude de nommer les fonctions et variables avec des lettres minuscules et des tirets bas `_`*

::: example
fonction `energie_cinetique()`

Nous prendrons comme exemple le calcul de l'énergie cinétique d'un véhicule afin d'illustrer quelques notions utiles sur l'utilisation des fonctions en `python`.

L'énergie cinétique d'un objet de masse m se déplaçant à la vitesse v est:

$$
Ec = \frac{1}{2} m  v^{2}
$$

Nous allons créer une fonction `energie_cinetique` qui calcule sa valeur à partir des paramètres masse et vitesse.


```python
# On définit la fonction
def energie_cinetique(m, v):
    return 0.5*m*v**2

# On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s
energie_cinetique(2,3)

>>> 9.0
```
:::


## Cas particulier: les procédures

Il est possible de définir des fonctions qui ne renvoient pas de valeur, on les nomme alors parfois procédure.

Ce type de fonction n'utilise pas l'instruction `return`. On peut s'en servir par exemple pour faire des affichages.

```python
def affiche_nb_impairs(n):
    for i in range(1,n, 2):
        print(i)
```

## Prototyper une fonction

Pour expliquer le fonctionnement d'une fonction, on lui ajoute un **prototype** juste sous la ligne de
définition. En Python les prototypes sont appelés *docstrings*. On peut y accéder dans le code
source ou simplement en utilisant la fonction `doc()`. 

Le prototype doit décrire le **rôle de la fonction**, le **type des paramètres** et **le type de la valeur de retour**.

```python
def ajout(a, b):
    """La somme de deux nombres.

    Renvoie la somme des deux nombres donnés en argument

    Parameters
    ----------
    a : int ou float
        première valeur à ajouter
    b : int ou float
        deuxième valeur à ajouter

    Returns
    -------
    int or float
        La somme des deux arguments de la fonction
    """
    return a + b
```

Maintenant, en tapant `doc(ajout)`, vous aurez toutes les informations utilise pour utiliser la fonction.

## Nommer les arguments de la fonction lors de l'appel

On peut préciser le nom des arguments dans l'appel de la fonction pour être plus explicite, on parle alors de `keyword arguments`:"arguments nommés".


```python
# On définit la fonction
def energie_cinetique(m, v):
    return 0.5*m*v**2
# On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s
energie_cinetique(m=2, v=3)

>>> 9.0
```



L'avantage est qu'en plus d'être plus explicite, on peut alors appeler les arguments dans un ordre quelconque ce qui n'est pas le cas lorsque l'on nomme pas les arguments(ce type d'arguments est appelé `positionnal argument`: "argument positionnel")


```python
energie_cinetique(v=3, m=2)

>>> 9.0
```





## En plus: portée des variables

Les variables définies dans les fonctions, ses paramètres ou autres, sont appelés des **variables locales**, par opposition aux **variables globales**, qui sont définies dans flot d'exécution du programme.

```python
# Je défini une variable globale x
x = 3
# Je défini une fonction avec comme paramètre x
def double(x):
  # Il s'agit d'une nouvelle variable locale x non liée à la variable globale x
  return 2 * x

# J'appelle la fonction double avec x = 2
double(2)
```


     4

La variable globale x reste inchangée:

```python
print(x)

>>>  3
```

   

