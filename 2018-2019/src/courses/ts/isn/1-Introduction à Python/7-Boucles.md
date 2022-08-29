---
"tags": ["python","boucles", "for","while"]
---

Nous allons voir dans ce chapitre comment créer des blocs d'instructions qui se répètent.

Il existe deux façons de coder des boucles en `Python`:

- la boucle `for` en français *pour*, répète les instructions **pour** des valeurs choisies.

- la boucle `while` en français *tant que*, répète les instructions **tant qu'**une condition est vérifiée


## La boucle `for`

La boucle `for` est utilisée lorsque l'**on connaît à l'avance les valeurs pour lesquelles on veut répéter le bloc d'instructions**.

Si les éléments sur lesquels ont veut réaliser les itérations sont bien connus, on peut faire des boucles sur des listes de valeur.

### Itérations sur des listes

Les [list](https://docs.python.org/fr/3/tutorial/datastructures.html)es sont tout simplement un ensemble de valeurs que l'on place entre crochets.

```python
[valeur0, valeur1, valeur2, ..., valeurN] 
```


Pour réaliser une itérations sur tous les éléments de la liste, la syntaxe est:

```python
for element in liste:
    instructions utilisant l'élément
```

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
saisons = ['été', 'automne', 'hiver', 'printemps']
print(type(saisons))
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <class 'list'>


</div>
</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for saison in saisons:
    print(saison)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    été
    automne
    hiver
    printemps


</div>
</div>

-----

### Utilisation de la fonction `range`

Il est très fréquent de réaliser des iterations  sur des nombres en comptant les tours de boucles.

La fonction `range(n)` permet de créer une boucle de n tours.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(7):
    print(i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    0
    1
    2
    3
    4
    5
    6


</div>
</div>

-----

On peut éventuellement choisir la valeur du compteur au départ.

```python
for i in range(début, fin):
    ...
```
**Attention:** Dans tous les cas le nombre final n'est pas inclus dans les itérations.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(1, 7):
    print(i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1
    2
    3
    4
    5
    6


</div>
</div>

-----

On peut également choisir le pas de l'incrémentation grâce à la syntaxe:

```python
for i in range(début, fin, pas):
    instruction 1
    instruction 2
...
```

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(1, 12, 2):
    print(i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1
    3
    5
    7
    9
    11


</div>
</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(365, 300, -5):
    print(i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    365
    360
    355
    350
    345
    340
    335
    330
    325
    320
    315
    310
    305


</div>
</div>

-----

*Remarque:* par défaut chaque instruction print se termine par un retour à la ligne, mais on peut suprimer ce retour en choisissant une fin de print vide avec l'attribut end.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(1, 32):
    print(i, end="")
    print(" janvier")
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1 janvier
    2 janvier
    3 janvier
    4 janvier
    5 janvier
    6 janvier
    7 janvier
    8 janvier
    9 janvier
    10 janvier
    11 janvier
    12 janvier
    13 janvier
    14 janvier
    15 janvier
    16 janvier
    17 janvier
    18 janvier
    19 janvier
    20 janvier
    21 janvier
    22 janvier
    23 janvier
    24 janvier
    25 janvier
    26 janvier
    27 janvier
    28 janvier
    29 janvier
    30 janvier
    31 janvier


</div>
</div>

-----

### Boucles imbriquées

Il est possible d'éxecuter une boucle à l'intérieur d'une autre boucle, elles sont alors dites imbriquées.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for mois in range(1, 13):
    for jour in range(1,31):
        print(jour, end="/")
        print(mois)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1/1
    2/1
    3/1
    4/1
    5/1
    6/1
    7/1
    8/1
    9/1
    10/1
    11/1
    12/1
    13/1
    14/1
    15/1
    16/1
    17/1
    18/1
    19/1
    20/1
    21/1
    22/1
    23/1
    24/1
    25/1
    26/1
    27/1
    28/1
    29/1
    30/1
    1/2
    2/2
    3/2
    4/2
    5/2
    6/2
    7/2
    8/2
    9/2
    10/2
    11/2
    12/2
    13/2
    14/2
    15/2
    16/2
    17/2
    18/2
    19/2
    20/2
    21/2
    22/2
    23/2
    24/2
    25/2
    26/2
    27/2
    28/2
    29/2
    30/2
    1/3
    2/3
    3/3
    4/3
    5/3
    6/3
    7/3
    8/3
    9/3
    10/3
    11/3
    12/3
    13/3
    14/3
    15/3
    16/3
    17/3
    18/3
    19/3
    20/3
    21/3
    22/3
    23/3
    24/3
    25/3
    26/3
    27/3
    28/3
    29/3
    30/3
    1/4
    2/4
    3/4
    4/4
    5/4
    6/4
    7/4
    8/4
    9/4
    10/4
    11/4
    12/4
    13/4
    14/4
    15/4
    16/4
    17/4
    18/4
    19/4
    20/4
    21/4
    22/4
    23/4
    24/4
    25/4
    26/4
    27/4
    28/4
    29/4
    30/4
    1/5
    2/5
    3/5
    4/5
    5/5
    6/5
    7/5
    8/5
    9/5
    10/5
    11/5
    12/5
    13/5
    14/5
    15/5
    16/5
    17/5
    18/5
    19/5
    20/5
    21/5
    22/5
    23/5
    24/5
    25/5
    26/5
    27/5
    28/5
    29/5
    30/5
    1/6
    2/6
    3/6
    4/6
    5/6
    6/6
    7/6
    8/6
    9/6
    10/6
    11/6
    12/6
    13/6
    14/6
    15/6
    16/6
    17/6
    18/6
    19/6
    20/6
    21/6
    22/6
    23/6
    24/6
    25/6
    26/6
    27/6
    28/6
    29/6
    30/6
    1/7
    2/7
    3/7
    4/7
    5/7
    6/7
    7/7
    8/7
    9/7
    10/7
    11/7
    12/7
    13/7
    14/7
    15/7
    16/7
    17/7
    18/7
    19/7
    20/7
    21/7
    22/7
    23/7
    24/7
    25/7
    26/7
    27/7
    28/7
    29/7
    30/7
    1/8
    2/8
    3/8
    4/8
    5/8
    6/8
    7/8
    8/8
    9/8
    10/8
    11/8
    12/8
    13/8
    14/8
    15/8
    16/8
    17/8
    18/8
    19/8
    20/8
    21/8
    22/8
    23/8
    24/8
    25/8
    26/8
    27/8
    28/8
    29/8
    30/8
    1/9
    2/9
    3/9
    4/9
    5/9
    6/9
    7/9
    8/9
    9/9
    10/9
    11/9
    12/9
    13/9
    14/9
    15/9
    16/9
    17/9
    18/9
    19/9
    20/9
    21/9
    22/9
    23/9
    24/9
    25/9
    26/9
    27/9
    28/9
    29/9
    30/9
    1/10
    2/10
    3/10
    4/10
    5/10
    6/10
    7/10
    8/10
    9/10
    10/10
    11/10
    12/10
    13/10
    14/10
    15/10
    16/10
    17/10
    18/10
    19/10
    20/10
    21/10
    22/10
    23/10
    24/10
    25/10
    26/10
    27/10
    28/10
    29/10
    30/10
    1/11
    2/11
    3/11
    4/11
    5/11
    6/11
    7/11
    8/11
    9/11
    10/11
    11/11
    12/11
    13/11
    14/11
    15/11
    16/11
    17/11
    18/11
    19/11
    20/11
    21/11
    22/11
    23/11
    24/11
    25/11
    26/11
    27/11
    28/11
    29/11
    30/11
    1/12
    2/12
    3/12
    4/12
    5/12
    6/12
    7/12
    8/12
    9/12
    10/12
    11/12
    12/12
    13/12
    14/12
    15/12
    16/12
    17/12
    18/12
    19/12
    20/12
    21/12
    22/12
    23/12
    24/12
    25/12
    26/12
    27/12
    28/12
    29/12
    30/12


</div>
</div>

-----

## La boucle `while`

La boucle `while` est plus puissante que la boucle `for`, elle permet de créer des répétitions, même si l'on ne connait pas à l'avance le nombre de répétitions.

Contrairement à la boucle `for`, le nombre d'itérations n'est pas fixé à l'avance, mais il est testé dynamiquement:
avant chaque éxecution du bloc d'instructions de la boucle.

A chaque tour, on teste une condition, si cette condition est vérifiée, on éxecute le bloc d'instructiuons de la boucle, sinon, l'éxecution de la boucle est arrétée.

Souvent il faut **initialiser** une variable qui contrôle l'itération avant de commencer la boucle.

### Contrôle par variable booléenne

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
repeat = True;
while repeat:
    resultat = int(input("Combien font 2 + 5?  "))
    if resultat == 7:
        print("Bravo vous avez trouvé.")
        repeat = False
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Combien font 2 + 5?  2
    Combien font 2 + 5?  9
    Combien font 2 + 5?  3
    Combien font 2 + 5?  7
    Bravo vous avez trouvé.


</div>
</div>

-----

### Contrôle à l'aide d'un compteur

Ceci ne peut fonctionner que si on connait à l'avance le nombre de tours de boucles. On préférera alors souvent utiliser un `for`.

On va cependant détailler cette structure car elle est très commune, et illustre bien le mode de pensée que doit acquérir un programmeur.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
compteur = 1;                 # initialisation
while compteur <= 5:          # condition
    print(compteur)
    compteur = compteur + 1   # incrémentation du compteur
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1
    2
    3
    4
    5


</div>
</div>

-----

On peut découper cette structure de code en trois phases: l'initialisation, la condition et l'incrémentation.

- L'**initialisation** se produit une seule fois, au début de l'exécution.
- La **condition** est évaluée avant chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée.
- L'**étape** ou *incrémentation*  est réalisée après chaque tour de boucle.

*Remarques*

- la variable compteur est souvent notée `i`;
- faire attention à ne pas programmer une **boucle infinie** qui bloquerait votre programme en lui faisant répéter l'instruction une infinité de fois et saturerait ainsi votre processeur et/ou votre mémoire.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# BOUCLE INFINIE NE PAS EXECUTER
#i = 0
#while i >= 0:
#    print(i)
#    i += 1
```

</div>
</div>

## Exercices

Ces exercices sont adaptés du cours sur la javascript de [openclassrooms](https://openclassrooms.com/en/courses/2984401-apprenez-a-coder-avec-javascript/3074396-repetez-des-instructions#/id/r-3075177)

Je vous conseille de réaliser chaque exercice avec le while, puis avec le for. Cela vous entraînera et vous permettra de mieux juger par la suite du meilleur type de boucle à utiliser.

### Tournez manège

Ecrivez un programme qui fait faire 10 tours de manège en affichant un message à chaque tour: `"C'est le tour n°..."`.

#### Une solution possible¶

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(1,11):
    print("C'est le tour n°", i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    C'est le tour n° 1
    C'est le tour n° 2
    C'est le tour n° 3
    C'est le tour n° 4
    C'est le tour n° 5
    C'est le tour n° 6
    C'est le tour n° 7
    C'est le tour n° 8
    C'est le tour n° 9
    C'est le tour n° 10


</div>
</div>

-----

### Parité

Ecrivez un programme qui affiche tous les nombres entre 1 et 10, et indique pour chacun si celui-ci est pair ou impair:

```python
"1 est impair"
"2 est pair"
...
"10 est pair"
```
#### Une solution possible¶

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(1,11):
    if i %2 ==0:
        print(i, "est pair")
    else:
        print(i, "est impair")
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1 est impair
    2 est pair
    3 est impair
    4 est pair
    5 est impair
    6 est pair
    7 est impair
    8 est pair
    9 est impair
    10 est pair


</div>
</div>

-----

### Contrôle de saisie

Ecrivez un programme qui fait saisir un nombre à l'utilisateur jusqu'à ce que ce nombre soit inférieur ou égal à 100.

Ensuite, améliorez votre programme pour que le nombre saisi soit compris entre 50 et 100.

**Attention** Réfléchissez bien à la condition de votre boucle : quel est l'inverse de "compris entre 50 et 100" ?

#### Une solution possible¶

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
REPEAT = True
while REPEAT:
    n = int(input("Entrez un nombre compris entre 50 et 100: "))
    if (n > 49) and (n < 100):
        print("Merci pour votre réponse:)")
        REPEAT = False
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Entrez un nombre compris entre 50 et 100: 12
    Entrez un nombre compris entre 50 et 100: 69
    Merci pour votre réponse:)


</div>
</div>

-----

### Table de multiplication

Ecrivez un programme qui fait saisir un chiffre à l'utilisateur puis affiche la table de multiplication de ce chiffre.

```python
Voici la table de multiplication de 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

Ensuite, améliorez votre programme pour vérifier que le nombre saisi soit compris entre 1 et 9, en vous inspirant de l'exercice précédent.

#### Une solution possible

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
n = int(input("Vous souhaitez afficher la table de: "))
for i in range(1,11):
    print(n, "x", i, "=", n*i)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Vous souhaitez afficher la table de: 7
    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70


</div>
</div>

-----

### Ni oui ni non

Ecrivez un programme qui fait jouer l'utilisateur au ni oui, ni non : il entre un texte jusqu'à saisir "oui" ou "non", ce qui déclenche la fin du jeu.

#### Une solution possible¶

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print("""
Bienvenue dans le jeu du ni oui ni non
""")
# On initialise la variable reponse
reponse = ""
while (reponse != "oui") and (reponse != "non"):
    reponse = input("Que dites-vous? ")
    # On convertit la réponse en minuscules pour la comparaison
    reponse = reponse.lower()
    
print("PERDU! Vous avez dit", reponse)

```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    
    Bienvenue dans le jeu du ni oui ni non
    
    Que dites-vous? Patate
    Que dites-vous? Avion
    Que dites-vous? Camion
    Que dites-vous? Oui
    PERDU! Vous avez dit oui


</div>
</div>

-----

### FizzBuzz

Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :

- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.

```python
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
```

Ensuite, améliorez votre programme pour qu'il affiche "FizzBuzz" à la place des nombres divisibles à la fois par 3 et par 5.

**Attention:** Cet exercice a de nombreuses solutions possibles et constitue un test d'entretien d'embauche classique qui élimine un nombre significatif de candidats. Accrochez-vous pour le réussir !

```python
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

#### Une solution possible¶

J'attends toujours vos propositions!
