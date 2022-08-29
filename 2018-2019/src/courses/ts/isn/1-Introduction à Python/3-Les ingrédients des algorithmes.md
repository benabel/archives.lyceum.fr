---
tags: ['algorithme', 'conditions', 'boucles', 'variables', 'fonctions']
---

Nous avons vu que pour que les machines puissent résoudre des problèmes, il fallait traduire ces problèmes en [algorithmes](https://fr.wikipedia.org/wiki/Algorithme).

Nous allons voir maintenant quels sont les ingrédients de base d'un algorithme, puis comment écrire ces instructions en Python.

<a title="Par Somepics [CC BY-SA 4.0  (https://creativecommons.org/licenses/by-sa/4.0)], de Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Euclid_flowchart.svg"><img class="center" width="256" alt="Euclid flowchart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Euclid_flowchart.svg/256px-Euclid_flowchart.svg.png"></a>

## Les ingrédients des Algorithmes

Un algorithme utilise _cinq ingrédients de base_:

1. Un algorithme est un chemin à parcourir pas à pas, une **séquence d'instructions**.
2. Cependant il ne faut pas forcément effectuer toutes les instructions en fonctions de conditions: le **instructions conditionnelles**.
3. Nous avons aussi besoin d'une autre construction, la **boucle d'instructions** qui permet de faire durer ou répéter une opération autant de fois que nécessaire.
4. Nous introduisons la **notion de variable** ou de paramètre qui permettra de modifier le programme en fonction de ces paramètres.
5. La dernière construction, qui consiste à **regrouper un bloc d'instructions dans une fonction**, va nous permettre de réutiliser différentes fonctionnalités, comme les briques d'un jeu de Lego, pour réaliser une construction logicielle.

[Source Les ingrédients des algorithmes sur le site Interstices](https://interstices.info/jcms/c_43821/les-ingredients-des-algorithmes)

## Traduire des algorithmes en Python

Pour que les ordinateurs réalisent nos algorithmes, nous devons écrire les séquences d'instructions dans un langage de programmation, dans notre cas Python.

### Séquence d'instructions

En Python, les lignes du programme sont exécutées de **haut en bas**, à l'exception:

- des lignes de **commentaires** qui commencent `#`.

[[example]]
|`python |print("Hello") |# print("World") |`
|N'affichera que `"Hello"` en sortie car la deuxième ligne est commentée donc non exécutée.

- des lignes de bloc qui sont **indentées** par rapport à la colonne de gauche.

[[examples]]
|`python |print("Hello") | print("World") |`
|Renvoie une erreur `IndentationError`{.danger} car la deuxième ligne est indentée et ne devrait pas l'être.
|**Attention, en python la mise en forme du code et son indentation a un sens**
|---
|`python |if 2 > 3: | print("Hello") |print("World") |`
|N'affichera que `"World"` en sortie car la deuxième ligne fait partie d'un bloc conditionnel Faux non exécutée. En effet, _2 n'est pas inférieur à 3_, donc toutes les lignes du bloc qui le suivent ne sont pas exécutées.

### Instructions conditionnelles

Il s'agit de blocs d'instructions exécutés en fonction de certaines conditions, nous voyons ici:

- `if`(_si_ en français), qui peut être complété par un
- `else`(_sinon_ en français), ou encore un
- `elif`(_sinon si_ en français):

[[example]]
|`python |n = int(input("Entrez un nombre entier")) |if n % 2 == 0: | print("Ce nombre est pair") |elif n % 2 == 1: | print("Ce nombre est impair") |else: | print("Vous n'avez pas dû rentrer un nombre entier") |`
|Affichera par exemple `'3.7.0 (default, Jul 15 2018, 10:44:58) \n[GCC 8.1.1 20180531]'` en sortie, puis `'Vous utilisez Python 3` puisque la chaîne de caractères `sys.version` commence par la lettre `"3"`.

### Boucle d'instructions

Pour effectuer des répétitions en boucle, on utilise les instructions:

- `for`: _pour_ en français.
- `while`: _tant que_ en français.

### Les variables

C'est un moyen de donner un nom à des valeurs afin de pouvoir les réutiliser aisément par la suite.

[[example]]
|`python |PI = 3.141592653589793 |R = 1 |print("Le périmètre est:", 2*PI*R) |print("La surface est:", PI*R**2) |`
|Nous avons ici affecté deux variables `PI` et `R` dont nous pouvons nous servir tout au long du programme par la suite.

### Les fonctions

Il s'agit de blocs d'instructions exécutés à la demande, on les introduits par le mot-clef `def`.

[[example]]
|`python |def calcule_surface(r): | PI = 3.141592653589793 | S = PI*r**2 | return S |`
|Nous venons de définir la fonction, mais pour l'instant, il ne se passe rien.
|
|Il faut maintenant appeler la fonction avec un paramètre pour que l'exécuter.
|`python |calcule_surface(1) |`
|Renvoie `3.141592653589793`, la surface d'un disque de rayon 1.
