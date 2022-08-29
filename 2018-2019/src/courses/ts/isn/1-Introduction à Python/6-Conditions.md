---
"tags": ["opérateurs booléens", "structures conditionnelles"]
---

Nous avons vu précédemment la notion de **bloc**. Il s'agit de parties de programmes qui ne sont pas forcément exécutées lors de la lecture des instructions du programme de haut en bas.

En python, les blocs sont délimités grâce aux tabulations et introduits grâce à deux points `:`.

```python
entrée dans un bloc:
    ligne 1 du bloc
    ligne 2 du bloc
    ...

retour dans l’exécution normale du programme ligne à ligne.
```

Aujourd'hui, nous allons utiliser des structures de contrôle qui permettent d’exécuter: des *blocs*, en fonction de conditions. On parle de **structure conditionnelles**.

Nous devons dans un premier temps définir les **opérations booléennes** qui vont nous permettre de définir nos conditions.

## Opérateurs booléens

Les **opérateurs booléens** sont des opérateurs de *comparaison* qui retournent un objet de type booléen: `True` ou `False`.

### Comparaisons de nombres

Soit x et y des variables de type `int` ou `float`, les opérateurs de comparaison sont:

- `x < y`: x est-il inférieur à y ?
- `x <= y`: x est-il inférieur ou égal  à y ?
- `x > y`: x est-il supérieur à y ?
- `x >= y`: x est-il supérieur ou égal à y ?
- `x == y`: x est-il égal à y ?
- `x != y`: x est-il différent y ?

#### Exemples

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x = 3
y = 5
print(x < y)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    True


</div>
</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print(x <= y)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    True


</div>
</div>

-----

Dans l'environnement ipython notebook, le print sur la dernière ligne est optionnel, et le résultat de la dernière expression entrée est evalué et affiché.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x > y
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x >= y
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x == y
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    False



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
x != y
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    True



On peut constater que ces instructions retournent systématiquement un objet de type booléen.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
type(x > y)
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    bool



Ou un erreur si on cherche à comparer *l'incomparable*:

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
"un" < 2
```

</div>
</div>


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-22-b70077822e07> in <module>
    ----> 1 "un" < 2
    

    TypeError: '<' not supported between instances of 'str' and 'int'


**ATTENTION:** Comme vous l'avez remarqué pour tester une égalité on utilise le double signe égal `==`. Tout simplement car le signe égal seul `=` est déjà utilisé pour l'affectation de variables.

## Associations d'opérations booléennes: les fonctions logiques

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
3. `(1 < 2) and (9 < 5)` renvoie `False` car les deux expressions ne sont pas vraies, seule la première l'est.

## Programme à structure conditionnelle

Grâce aux opérateurs que l'on vient de voir on va pouvoir maîtriser la façon dont se déroule le programme en fonction de certaines conditions.

Le code sera toujours interprété ligne par ligne, cependant certains blocs de code ne seront exécutés que si une condition donnée est vraie.

### L'instruction `if`

Le bloc d'instruction contenu n'est exécuté que si la condition est vérifiée.

**Syntaxe**

```python
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

Dans le programme précédent l'instruction `if a > 0:` est toujours exécutée par l'interpréteur, car elle est dans le flux normal du programme(en début de ligne).

Par contre, l'instruction `a = -a` n'est éxecutée que si la condition `a > 0` a renvoyé `True`, il s'agit d'un **bloc** relatif à l'instruction  `if a > 0:` qui le précéde. Elle est **indentée** avec quatre espaces. Si j'affecte la valeur négative -5 à `a`, ce bloc ne sera pas exécuté, et le changement de signe n'aura pas lieu.

```python
a = -5
if a > 0:
    a = -a
print(a)

>>> -5
```

### L'instruction else

Indique le bloc d'instruction a exécuter si la condition n'est pas vérifiée.

**Syntaxe**

```python
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

### L'instruction elif

Cette instruction permet de réaliser des tests imbriqués, c'est un raccourci pour les instructions else et if.

**Syntaxe**

```python
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

## Exercices

### Donner la valeur renvoyée par les instructions suivantes

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

### Donner le type et la valeur renvoyée par les instructions suivantes

```python
a = 3
a == 5.0
print(a, type(a))
```

```python
b = 10
c = b > 9
print(c, type(c))
```

### Calculer les racines du trinôme

Vous devez implémenter un programme qui demande à l'utilisateur les trois coefficients du [trinôme](https://fr.wikipedia.org/wiki/Fonction_du_second_degr%C3%A9)  $ax^2 + bx + c$, et qui lui indique en retour [le nombre de racines et leurs valeurs](https://fr.wikipedia.org/wiki/Fonction_du_second_degr%C3%A9#.C3.89quation).

#### Une solution possible

Voici une solution proposée par les auteurs du livre [Informatique et sciences du numérique - Spécialité ISN en terminale S](http://www.lsv.fr/~dowek/Isn/)

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
import math

print("""

Programme de calcul des racines d'un trinôme
============================================

ax^2 + bx +c
""")
a = float(input("Entrer la valeur de a: "))
b = float(input("Entrer la valeur de b: "))
c = float(input("Entrer la valeur de c: "))

# Calcul du discriminant
delta = b * b - 4 * a * c;
# Affichage des solutions
if delta < 0: 
    print("Pas de solution")
elif delta == 0:
    print("Une solution : ",end="")
    print(- b / (2 * a))
else:
    print("Deux solutions : ",end="")
    print((- b - math.sqrt(delta)) / (2 * a),end="")
    print(" et ",end="")
    print((- b + math.sqrt(delta)) / (2 * a))
```

</div>
</div>

## Mini-projet

Créez un programme qui permette de calculer la surface de différents [polygones](https://fr.wikipedia.org/wiki/Formulaire_de_g%C3%A9om%C3%A9trie_classique#P.C3.A9rim.C3.A8tre_et_aire)(carré, rectangle...) à partir de questions posées à l'utilisateur.



#### Une solution possible

Voici une solution proposée par Morgane C. au cours de l'année 2017-2018.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# On importe le module math pour calculer certaines aires (triangle équilatéral).
import math

# Création des fonctions permettant de calculer les différentes aires.
def aire_rectangle(longueur,largeur):
    return longueur*largeur
def aire_carre(cote):
    return cote**2
def aire_triangle_quel(cote, hauteur):
    return (cote*hauteur)/2
def aire_triangle_equi(cote):
    return (cote**2*math.sqrt(3))/4

#On demande à l'utilisateur la nature du polygone.
nature = (input("Le polygone est-il un Rectangle, un Carré, un Triangle quelconque, un Triangle équilatéral, "
                "un Triangle rectangle isocèle?"
                " Ou est-ce un Losange, ou un Parallélogramme?"))
print ("Ce polygone est un(e) : ",nature)

#On pose les conditions pour calculer l'air de ce polygone.
if nature == ("rectangle" or "Rectangle"):
    longueur = float(input("Quelle est la longueur du rectangle ?"))
    print ("La longueur est : ",longueur)
    largeur = float(input("Quelle est la largeur du rectangle ?"))
    print ("La longueur est : ", largeur)
    print ("L'aire de ce rectangle est : ",aire_rectangle (longueur, largeur))

elif nature == ("Carré" or "carré"):
    cote = float(input("Quelle est la longueur du côté du Carré ?"))
    print("La longueur du côté du Carré est : ", cote)
    print("L'aire de ce Carré est : ", aire_carre(cote))
    
elif nature == ("triangle quelconque" or "Triangle quelconque"):
    cote = float(input("Renseigner la longueur du côté le plus grand du Triangle quelconque."))
    print("La longueur du côté le plus grand est :", cote)
    hauteur = float(input("Renseigner la hauteur de ce triangle quelconque."))
    print("La hauteur correspond à : ", hauteur)
    print("L'aire de ce Triangle quelconque est : ", aire_triangle_quel(cote, hauteur))
    
elif nature == ("triangle équilatéral" or "Triangle équilatéral"):
    cote = float(input("Renseigner la longueur d'un côté du Triangle équilatéral."))
    print("La longueur du côté du Triangle équilatéral est : ", cote)
    print("L'aire du Triangle équilatéral est : ", aire_triangle_equi(cote))
    
else :
    print ("Nous n'avons pas encore travaillé sur ce polygone ! :-(")
```

</div>
</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python

```

</div>
</div>
