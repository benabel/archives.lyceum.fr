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

Si on écrit un programme qui nécessite souvent de réaliser *les mêmes suites d'instructions*, on
peut alors **définir une fonction** qui évitera de réécrire constamment les mêmes instructions et
de **rendre le programme plus lisible**.

## Définition d'une fonction

Une fonction possède un nom pour pouvoir être appelée et il est possible de lui communiquer des
arguments.

En python la syntaxe de définition d'une fonction est la suivante:

**Syntaxe (ATTENTION À L'INDENTATION)**

```python
def nom_de_ma_fonction(paramètres séparés par des virgules):
    instruction 1
    instruction 2
    ...
    return objet_renvoyé_par_ma_fonction
```


Pour appeler la fonction, il suffit de taper son nom avec les arguments entre parenthèse.

```python
nom_de_ma_fonction(arg1, arg2,...)
```

::: {.plus titre="Conventions de noms en Python"}

En python, la convention PEP8 donne l'habitude de nommer les fonctions et variables avec
des lettres minuscules et des tirets bas `_` pour remplacer les espaces.

:::

::: example
fonction `energie_cinetique()`

Nous prendrons comme exemple le calcul de l'énergie cinétique d'un véhicule afin d'illustrer
quelques notions utiles sur l'utilisation des fonctions en `python`.

L'énergie cinétique d'un objet de masse m se déplaçant à la vitesse v est:

$$
Ec = \frac{1}{2} m  v^{2}
$$

Nous allons créer une fonction `energie_cinetique` qui calcule sa valeur à partir des paramètres
masse et vitesse.

```python
# On définit la fonction
def energie_cinetique(m, v):
    return 0.5*m*v**2

# On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s
energie_cinetique(2, 3) 

```
Sortie:
```
9.0
```

:::

::: {.plus titre="Les procédures"}

Il est possible de définir des fonctions qui ne renvoient pas de valeur, on les nomme alors parfois
procédure.

Ce type de fonction n'utilise pas l'instruction `return`. On peut s'en servir par exemple pour
faire des affichages.

```python
def affiche_ec(m, v):
    ec = 0.5*m*v**2
    print("L'énergie cinétique est:", ec, "J")
```
L'affichage s'effectue lors de l'appel de la procédure:

```python
affiche_ec(1,10)
```
Sortie:
```
L'énergie cinétique est: 50.0 J
```
:::

## Prototyper une fonction

Pour expliquer le fonctionnement d'une fonction, on lui ajoute un **prototype** juste sous la ligne
de définition. En Python les prototypes sont appelés *docstrings*. On peut y accéder dans le code
source ou simplement en utilisant la fonction `help()`. 

Le prototype doit décrire le **rôle de la fonction**, le **type des paramètres** et **le type de la
valeur de retour**.

```python
def somme(a, b):
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

Maintenant, en tapant `help(somme)`, vous aurez toutes les informations utilise pour utiliser la
fonction.

## Réaliser des tests sur les sorties des fonctions

Pour être sûr que notre fonction donne les bons résultats, on utilise des tests d'`assert`ion
_(affirmation en anglais)_ qui renvoient une `AssertionError` en cas d'erreur.

On pourrait tester notre fonction somme sur des cas simples:

```python
assert(somme(1, 2) == 3)
assert(somme(0, 0) == 0)
assert(somme(10, -2) == 8)
print("Tests passés avec succés:)")
```

En cas d'erreur _(souvent en raison d'interventions humaines sur le code!)_, le programme est
bloqué ce qui évite de le laisser tourner en faisant des erreurs qui pourraient être très
dommageables dans certaines situations(banque, commerce, circulation...).

Par exemple, cette suite de test:

```python
assert(somme(0.1, 0.2) == 0.3)
assert(somme(0.0, 0.0) == 0.0)
assert(somme(10.0, -2.0) == 8.0)
print("Tests passés avec succés:)")
```
Renverrait:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError
```

Si vous ne voyez pas pourquoi, revoyez le chapitre sur l'[encodage des nombres à virgule](/1g/nsi/2-representation-des-donnees-types-et-valeurs-de-base/3-representation-des-nombres-a-virgule).



## En plus: Nommer les arguments de la fonction lors de l'appel

On peut préciser le nom des arguments dans l'appel de la fonction pour être plus explicite, on
parle alors de `keyword arguments`:"arguments nommés".


```python
# On définit la fonction
def energie_cinetique(m, v):
    return 0.5*m*v**2
# On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s
energie_cinetique(m=2, v=3)
```
Sortie:
```
L'énergie cinétique est: 50.0 J
```
L'avantage est qu'en plus d'être plus explicite, on peut alors appeler les arguments dans un ordre
quelconque ce qui n'est pas le cas lorsque l'on ne nomme pas les arguments(ce type d'arguments est
appelé `positionnal argument`: "argument positionnel")


```python
energie_cinetique(v=3, m=2)
```
Sortie:
```
L'énergie cinétique est: 50.0 J
```

## En plus: portée des variables

Les variables définies dans les fonctions, ses paramètres ou autres, sont appelés des **variables
locales**, par opposition aux **variables globales**, qui sont définies dans flot d'exécution du
programme.

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
```
Sortie:
```
4
```

La variable globale `x` reste inchangée :

```python
print(x)
```
Sortie:
```
3
```