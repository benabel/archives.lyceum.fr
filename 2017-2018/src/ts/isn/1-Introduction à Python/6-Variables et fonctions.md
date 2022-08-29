---
tags: ["python", "syntaxe", "type", "assignation", "variable"]
---


Nous avons jusqu'à maintenant utilisé l'interpréteur python comme une simple calculatrice, nous allons voir maintenant comment associer des noms a des valeurs ou à des suite d'instructions afin de rendre les programmes plus facilement lisibles et compréhensibles.

# Affectation d'une valeur à une variable: `=`

Par exemple, si nous souhaitons utiliser l'intensité de la pesanteur de la Terre dans un programme, il peut être intéressant d'affecter(ou assigner) un nom à la valeur 9,81. Pour cela on utilise tout simplement un signe égal `=`.

```python
g = 9.81
```

L'interpréteur remplacera alors systématiquement la variable `g` par la valeur stockée dans toutes nos expressions.

```python
>>> g * 2
19.62
>>> g + 1
10.81
>>> print(g)
9.81
```

## Pourquoi utiliser des variables?

Tout d'abord cela **évite les répétitions**, si on souhaite utiliser plusieurs fois une valeur numérique dans un programme, on est pas obligé de la retaper à chaque fois.(Principe DRY: Don't Repeat Yourself)

D'autres part cela permet de rendre le compte beaucoup **plus lisible**, mais aussi de donner davantage de sens aux instructions du programme pour le rendre davantage **compréhensible**.

Comparer ces deux extraits pour vous en convaincre:

```python
>>> 10 * 9.81
98.10000000000001
```

```python
>>> masse = 10
>>> g_terre = 9.81
>>> masse * g_terre
98.10000000000001
```

Le nom des variables utilisées dans le deuxième extrait rend le code très explicite sur ce que l'on est en train de faire.


# Réaffectation de variables

Un autre intérêt à l'utilisation de variables est qu'il est beaucoup plus facile de modifier le programme par la suite, en changeant simplement la valeur de la variable, on demande alors une **réaffectation**.


```python
>>> masse = 100
>>> masse * g_terre
981.0
```

J'ai remplacé la valeur stockée par ma nouvelle valeur.

Je peux même réaffecter ma variable en utilisant la valeur précédente.

```python
>>> masse = masse / 2
>>> masse
50.0
```

La valeur 50 est maintenant affectée à la variable masse, et l'interpréteur n'a alors plus aucune idée de la valeur précédente: 100, on dit que cette valeur a été écrasée.

Les réaffectations étant très communes, il existe des syntaxes raccourcies: `+=`, `-=`, `*=`, `/=`... pour les opérateurs de base:

```python
>>> masse += 2
>>> masse
52.0
>>> masse -= 27
>>> masse
25.0
>>> masse *= 4
>>> masse
100.0
```

## Quelques erreurs à éviter

### Appeler une variable non affectée

Utiliser un nom d'une variable déjà utilisé par le langage Python ou un de ses modules. Certains noms sont mêmes réservés.

<table border="1" width="400">
	<caption>Keywords in Python programming language</caption>
	<tbody>
		<tr>
			<td>False</td>
			<td>class</td>
			<td>finally</td>
			<td>is</td>
			<td>return</td>
		</tr>
		<tr>
			<td>None</td>
			<td>continue</td>
			<td>for</td>
			<td>lambda</td>
			<td>try</td>
		</tr>
		<tr>
			<td>True</td>
			<td>def</td>
			<td>from</td>
			<td>nonlocal</td>
			<td>while</td>
		</tr>
		<tr>
			<td>and</td>
			<td>del</td>
			<td>global</td>
			<td>not</td>
			<td>with</td>
		</tr>
		<tr>
			<td>as</td>
			<td>elif</td>
			<td>if</td>
			<td>or</td>
			<td>yield</td>
		</tr>
		<tr>
			<td>assert</td>
			<td>else</td>
			<td>import</td>
			<td>pass</td>
			<td>&nbsp;</td>
		</tr>
		<tr>
			<td>break</td>
			<td>except</td>
			<td>in</td>
			<td>raise</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>

### Appeler une variable non affectée

Vous ne pouvez appeler que des variables connues par l'interpréteur, c'est à dire auxquelles vous avez déjà affecté une valeur, sinon l'interpréteur renvoie une `NameError`.

```python
>>> m * g
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'm' is not defined
```


### Attention à l'ordre des instructions

On décide maintenant de stocker le poids de l'objet $P=m \cdot g$ dans une variable P. On peut alors simplement entrer l'instruction suivante:

```python
>>> P = masse * g_terre
>>> P
981.0
```

P contient bien la valeur associée à `masse * g_terre`, par contre si maintenant je change la masse, la valeur de la variable P ne change pas.

```python
>>> masse = 10
>>> P
981.0
```

Il faut à nouveau affecter la valeur correcte à `P` pour qu'elle contienne la valeur correcte:

```python
>>> P = masse * g_terre
>>> P
98.10000000000001
```



# Exercices sur l'affectation

Faites ces exercices sur le papier, puis vérifiez vos réponses après coup avec l'interpréteur Python.

Donner le type et la valeur renvoyée par les instructions suivantes:

1.
```python
>>> a = 3
>>> a + 2.0
```
2.
```python
>>> a = a + 1.0
>>> a
```
3.
```python
>>> a = 3
>>> b
```


# Enregistrer des instructions dans une fonction

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

*Remarque2: Il est possible de définir des fonctions qui ne renvoient pas de valeur, on les nomme alors parfois procédure.*

# Exemple: fonction `energie_cinetique()`

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
```




    9.0



# Nommer les arguments de la fonction
On peut préciser le nom des arguments dans l'appel de la fonction pour être plus explicite, on parle alors de `keyword arguments`:"arguments nommés".


```python
# On définit la fonction
def energie_cinetique(m, v):
    return 0.5*m*v**2
# On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s
energie_cinetique(m=2, v=3)
```




    9.0



L'avantage est qu'en plus d'être plus explicite, on peut alors appeler les arguments dans un ordre quelconque ce qui n'est pas le cas lorsque l'on nomme pas les arguments(ce type d'arguments est appelé `positionnal argument`: "argument positionnel")


```python
energie_cinetique(v=3, m=2)
```




    9.0



# Donner des valeurs par défaut aux arguments
Lorque l'on définit la fonction on peut rentrer des valeurs par défaut qui seront utilisées en cas d'absence d'argument lors de l'appel.


```python
# On définit la fonction
def energie_cinetique(m=2, v=3):
    return 0.5*m*v**2
# On appelle la fonction avec les valeurs par défaut
energie_cinetique()
```




    9.0




```python
# On remplace une des valeurs seulement
energie_cinetique(v=2)
```




    4.0




```python
# On remplace une des valeurs seulement de façon positionnelle
# On ne remplace que le premier argument du coup
energie_cinetique(4)
```




    18.0

# En plus: portée des variables

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
```

    3

# Exercices sur les fonctions

Exercices issus du livre ISN aux éditions eyrolles.

Ecrire les fonctions suivantes:

1. Une fonction qui renvoie la plus grande valeur de deux valeurs entières.
2. Une fonction qui affiche un même mot un certain nombre de fois au choix.
3. Une fonction, construite en utilisant le module `random`, qui tire au sort un nombre entier entre deux bornes données en arguments.
4. Une fonction qui donne l'équation de la droite passant par deux points dont les coordonnées ont été données en argument.
