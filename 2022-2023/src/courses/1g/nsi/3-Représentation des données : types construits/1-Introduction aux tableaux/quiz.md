1.  Quel est le type de données de base en Python qui permet de stocker une séquence modifiable de valeurs?

    -  [x] Liste
    -  [ ] Tuple
    -  [ ] Dictionnaire
    -  [ ] Ensemble

2.  Quel est le type de données de base en Python qui permet de stocker une séquence immuable de valeurs?

    -  [ ] Liste
    -  [x] Tuple
    -  [ ] Dictionnaire
    -  [ ] Ensemble

3.  Comment accédez-vous au troisième élément d'une liste ou d'un tuple nommé `t` en Python?

    -  [ ] `t(2)`
    -  [x] `t[2]`
    -  [ ] `t(3)`
    -  [ ] `t[3]`

4.  Quelle méthode utilisez-vous pour ajouter un élément à la fin d'une liste en Python?

    -  [ ] `insert()`
    -  [ ] `extend()`
    -  [x] `append()`
    -  [ ] `add()`

5.  Quelle méthode utilisez-vous pour insérer un élément à un index spécifique d'une liste en
    Python?

    -  [ ] `append()`
    -  [x] `insert()`
    -  [ ] `extend()`
    -  [ ] `add()`

6.  Quelle est la syntaxe pour créer un tuple en Python?

    -  [ ] `[1, 2, 3]`
    -  [ ] `{1, 2, 3}`
    -  [x] `(1, 2, 3)`
    -  [ ] `"1, 2, 3"`

7.  Qu'est-ce qu'un tuple en Python?

    - [x] Un type de données qui peut contenir un nombre quelconque d'éléments, mais qui ne peut pas
     être modifié une fois créé.
    - [ ] Un type de données qui peut contenir un nombre quelconque d'éléments, et qui peut être
     modifié une fois créé.
    - [ ] Un type de données qui ne peut contenir qu'un seul élément.
    
8.  Comment créez-vous une liste en Python?

    - [ ] En utilisant des accolades `{}`
    - [ ] En utilisant des parenthèses `()`
    - [x] En utilisant des crochets `[]`
    
   
9.  Quelle est la syntaxe pour accéder à un élément d'un tuple en Python?

    - [x] `tuple[index]`
    - [ ] `tuple{index}`
    - [ ] `tuple(index)`
    
10. Comment puis-je trouver la longueur d'un tuple en Python?
    

    - [x] En utilisant la fonction `len(tuple)`
    - [ ] En utilisant la méthode `tuple.length()`
    - [ ] En utilisant la variable `tuple.size`
    

11. Quelle est la valeur de la variable `r` à la fin de l'exécution du script suivant?

    ```python
    t = (10, 6, 1, 12, 15) 
    r = t[2] - 1
    ```

    - [ ] 9 
    - [ ] 5 
    - [x] 0 
    - [ ] -5

12. Quelle est la valeur de la variable `r` à la fin de l'exécution du script suivant?

    ```python
    tab = [10,6,1,12,15]
    r = tab[3] - tab[1]
    ```

    - [ ] -9 
    - [ ] 2 
    - [ ] 3 
    - [x] 6

13. Qu'observe-t-on lors de l'exécution du script suivant:

    ```python
    a = 1
    b = 2
    a = b
    b = a
    print(a, b)
    ```
    - [ ] `1 2`
    - [ ] `2 1`
    - [ ] `1 1`
    - [x] `2 2`

14. Qu'observe-t-on lors de l'exécution du script suivant:

    ```python
    a = 1
    b = 2
    (a, b) = (b, a)
    print(a, b)
    ```
    - [ ] `1 2`
    - [x] `2 1`
    - [ ] `1 1`
    - [ ] `2 2`

15. Quel est le type de l'expression `f(4)` si la fonction f est définie par:
   
    ```python
    def f(x):
        return (x, x**2)
    ```

    - [ ] un entier 
    - [ ] un flottant 
    - [x] un tuple
    - [ ] une liste 

16. Quel est la valeur de l'expression `f(4)` si la fonction f est définie par:
   
    ```python
    def f(x):
        return (x, x**2)
    ```

    - [ ] 4 
    - [x] (4, 16)
    - [ ] 16
    - [ ] (4, 8)

17. La fonction ci-dessous prend en argument deux nombres entiers.

    ```python
    def f(n1,n2): 
        etendue = max(n1,n2)-min(n1,n2) 
        moyenne = (n1+n2)/2 
        return etendue, moyenne 
    ```
   
    Quel est le type de la valeur renvoyée par un appel à cette fonction? 

    - [ ] un entier 
    - [ ] un réel (ou flottant) 
    - [x] un tuple 
    - [ ] une liste
   
18. On considère le code suivant:

    ```python
    def s(tuple1, tuple2): 
        (x1,y1) = tuple1 
        (x2,y2) = tuple2 
        return (x1+x2, y1+y2)
    ```
    
    Que renvoie l'appel `s((1,3), (2,4))`? 

    - [x] le tuple (3,7) 
    - [ ] le tuple (4,6) 
    - [ ] l'entier 10 
    - [ ] une erreur
  
19. Qu'observe-t-on lors de l'exécution du script suivant:

    ```python
    t = (3, 4)
    t[0] = 2
    print(t)
    ```

    - [ ] (2, 3, 4)
    - [ ] (2, 4)
    - [ ] (3, 2)
    - [x] une erreur `TypeError: 'tuple' object does not support item assignment`

20. Qu'observe-t-on lors de l'exécution du script suivant:

    ```python
    t = [3, 4]
    t[0] = 1
    print(t)
    ```
 
    - [ ] 1
    - [x] [1, 4]
    - [ ] [3, 4]
    - [ ] [1, 3, 4]