 ## QCM

 1. Quelle est la sortie du code suivant,

 ```python
class Point:
    def __init__(self, x=0, y=0):
        self.x = x + 1
        self.y = y + 1
      
p1 = Point(1, 2)
print(p1.x, p1.y)
```

- [ ] `0 0`
- [ ] `1 1`  
- [ ] `1 2`  
- [ ] `2 3`


 2. Quelle est la sortie du code suivant?

 ```python
class Point:
    def __init__(self, x=0, y=0):
        self.x = x + 1
        self.y = y + 1
      
p2 = Point()
print(p2.x, p2.y)
```

- [ ] `0 0`
- [ ] `1 1`  
- [ ] `1 2`  
- [ ] `2 3`

3. Quelle est la sortie du code suivant?

 ```python
double = lambda x: x * 2
triple = lambda x: x * 3
x = 2
x = double(x) 
x = triple(x) 
x = double(x) 
print(x)

```

- [ ] `2`
- [ ] `8`  
- [ ] `24`  
- [ ] `SyntaxError`

3. On souhaite écrire une fonction `bonjour` qui prend un paramètre `prénom` et qui retourne
   `"Bonjour <prénom> :)"`, par exemple une fois appelée avec l'argument `Python`, cette fonction
   renverrai `"Bonjour Python :)"`.
 
- [ ] La définition s'écrit: `bonjour = ("Bonjour " + a + " :)")`, et l'appel s'écrit: `bonjour("Python")`.
- [ ] La définition s'écrit: `bonjour = lambda a: "Bonjour " + a + " :)"`, et l'appel s'écrit: `bonjour("Python")`.
- [ ] La définition s'écrit: `lambda a: "Bonjour " + a + " :) = bonjour"`, et l'appel s'écrit: `bonjour("Python")`.
- [ ] Cette définition est impossibla car une fonction ne peut pas renvoyer plusieurs valeurs.

## Programmation fonctionnelle avec `filter`, `map`, `reduce`

1. Bien que ces fonctions soient définies en Python, nous allons les implémenter avec les noms
suivants:

   a) `filtre(fonction, liste)` _(filter)_: fonction qui prend deux paramètres en entrée:
       - un fonction de décision à 1 paramètre de type simple(`int pour simplifier`).
       - et une liste,
       
     Cette fonction renvoie une nouvelle liste avec seulement les éléments ayant satisfait la
     fonction de décision.
   
     Voici quelques tests à effectuer pour vérifier son fonctionnement:
   
     ```python
     # nb impairs
     assert filtre(lambda x: x % 2 == 1, [0, 1, 2, 3, 4]) == [1, 3]
     # nb pairs
     assert filtre(lambda x: x % 2 == 0, [0, 1, 2, 3, 4]) == [0, 2, 4]
     ```
   
   b) `applique(fonction, liste)` _(map)_: fonction qui prend deux paramètres en entrée:
       - un fonction à 1 paramètre de type simple(`int pour simplifier`) qui renvoie une valeur.
       - et une liste,
       
     Cette fonction renvoie une nouvelle liste pour laquelle a été appliqué la fonction donnée en
     argument à chacun des éléments de la liste d'entrée.
   
     Voici quelques tests à effectuer pour vérifier son fonctionnement:
   
     ```python
     # doubles
     assert applique(lambda x: x ** 2, [0, 1, 2, 3, 4]) == [0, 1, 4, 9, 16]
     # puissances de 2
     assert applique(lambda n: 2**n, [0, 1, 2, 3, 4]) == [1, 2, 4, 8, 16]
     ```
   
   c) `réduit` _(reduce)_: fonction qui prend deux paramètres en entrée:
       - un fonction à 2 paramètres de type simple qui renvoie une valeur.
       - une liste.
       
     Cette fonction renvoie une valeur par l'accumulation des valeurs de la liste par la fonction
     d'accumulation donnée en argument.
   
     Voici quelques tests à effectuer pour vérifier son fonctionnement:
   
     ```python
     # addition des éléments
     assert réduit(lambda x, y: x + y, [0, 1, 2, 3, 4]) == 10
     # soustraction des éléments
     assert réduit(lambda x, y: x - y, [0, 1, 2, 3, 4]) == -10
     # concaténation des éléments
     assert réduit(lambda x, y: str(x) + str(y), [0, 1, 2, 3, 4]) == "01234"
     ```

2. En utilisant la fonction `applique`, créer en une ligne une fonction `négatif` qui permet de
   passer ce test:
   ```python
   assert négatif([0, 1, 2, 3, 4]) == [0, -1, -2, -3, -4]
   ```

3. En utilisant la fonction `réduit`, créer en une ligne une fonction `longueur` qui permet de
   passer ces tests:
   ```python
   assert longueur([]) == 0
   assert longueur([0, 1, 2]) == 3
   assert longueur([0, 1, 2, 3, 4]) == 5
   ```


