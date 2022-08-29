---
tags: ['algorithme', 'conditions', 'boucles', 'variables', 'fonctions']
---

::: programme
+------------------------+---------------------------------+-----------------------------------+
|        Contenus        |       Capacités attendues       |           Commentaires            |
+========================+=================================+===================================+
| Constructions          | Mettre en évidence un corpus    | Séquences, affectation,           |
| élémentaires           | de constructions élémentaires.  | conditionnelles, boucles bornées, |
|                        | boucles non bornées, appels de  |                                   |
|                        | fonction.                       |                                   |
+------------------------+---------------------------------+-----------------------------------+
:::

> Alan Turing a montré que pour que les machines puissent résoudre des problèmes, il fallait
traduire ces problèmes en [algorithmes](https://fr.wikipedia.org/wiki/Algorithme).
> Dans ce chapitre, nous allons voir *quels sont les ingrédients de base d'un algorithme*, puis comment
écrire ces instructions en Python.
> &nbsp;
> <a title="Par Somepics [CC BY-SA 4.0  (https://creativecommons.org/licenses/by-sa/4.0)], de Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Euclid_flowchart.svg"><img class="center" width="256" alt="Euclid flowchart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Euclid_flowchart.svg/256px-Euclid_flowchart.svg.png"></a>

## Les ingrédients des Algorithmes

Un algorithme utilise _cinq ingrédients de base_:

1. Un algorithme est un chemin à parcourir pas à pas, une **séquence d'instructions**.
2. Cependant il ne faut pas forcément effectuer toutes les instructions en fonctions de conditions:
   le **instructions conditionnelles**.
3. Nous avons aussi besoin d'une autre construction, la **boucle d'instructions** qui permet de
   faire durer ou répéter une opération autant de fois que nécessaire.
4. Nous introduisons la **notion de variable** ou de paramètre qui permettra de modifier le
   programme en fonction de ces paramètres.
5. La dernière construction, qui consiste à **regrouper un bloc d'instructions dans une fonction**,
   va nous permettre de réutiliser différentes fonctionnalités, comme les briques d'un jeu de Lego,
   pour réaliser une construction logicielle.

[Source Les ingrédients des algorithmes sur le site Interstices](https://interstices.info/jcms/c_43821/les-ingredients-des-algorithmes)

## Traduire des algorithmes en Python

Pour que les ordinateurs réalisent nos algorithmes, nous devons écrire les séquences d'instructions
dans un langage de programmation, dans notre cas Python.

### Séquence d'instructions

En Python, les lignes du programme sont exécutées de **haut en bas**, à l'exception:

- des lignes de **commentaires** qui commencent `#`.

::: example

```python
print("Hello")
# print("World") 
```

N'affichera que `"Hello"` en sortie car la deuxième ligne est commentée donc non exécutée.
:::

- des lignes de bloc qui sont **indentées** par rapport à la colonne de gauche.

::: example

```python
print("Hello")
    print("World")
```

Renvoie une erreur `IndentationError`{.danger} car la deuxième ligne est indentée et ne devrait pas l'être.
:::

### Instructions conditionnelles

Il s'agit de blocs d'instructions exécutés en fonction de certaines conditions, nous voyons ici:

- `if`(_si_ en français), qui peut être complété par un
- `else`(_sinon_ en français).

::: example

```python
age = int(input("Quel âge avez-vous?")
if age > 14:
    print("OK")
else:
    print("not OK")
```
:::

::: {.plus titre="elif en Python"}

Il existe également le mot-clé , `elif`(_sinon si_ en français) en Python. Qui permet de tester
plusieurs conditions.

```python
age = int(input("Quel âge avez-vous?")
if age > 14:
    print("OK")
elif age > 18:
    print("Vous ne dervriez plus être en lycée!")
else:
    print("not OK")
```

:::

### Boucle d'instructions

Pour effectuer des répétitions en boucle, on utilise les instructions:

- `for`: _pour_ en français.
- `while`: _tant que_ en français.

Les deux types de boucles sont interchangeables, on préfère cependant utiliser:

- `for` si le nombre d'itérations est connu à l'avance.
- `while` si l'arrêt s'effectue à une condition.

::: example
```python
for i in range(10):
    print(i)
```
:::

::: example
```python
i = 0 # initialisation
while i < 10: # condition d'arrêt
    print(i)
    i = i + 1 # incrémentation de l'indice
```
:::


### Les variables

C'est un moyen de donner un nom à des valeurs afin de pouvoir les réutiliser aisément par la suite.

::: example

```python
PI = 3.141592653589793
R = 1 
print("Le périmètre est:", 2*PI*R)
print("La surface est:", PI*R**2)```
Nous avons ici affecté deux variables `PI` et `R` dont nous pouvons nous servir tout au long du programme par la suite.
```

:::

### Les fonctions

Il s'agit de blocs d'instructions exécutés à la demande, on les définit par le mot-clef `def`.

::: example

```python
def dit_bonjour(prenom):
    print("Bonjour " + prenom)
```

Nous venons de définir la fonction, mais pour l'instant, il ne se passe rien.

Pour exécuter le code de la fonction, il faut maintenant appeler la fonction avec une valeur pour
l'exécuter.

```python
# on appelle la fonction avec l'argument Ada
dit_bonjour("Ada")
```

Affichera `"Bonjour Ada"`.
:::