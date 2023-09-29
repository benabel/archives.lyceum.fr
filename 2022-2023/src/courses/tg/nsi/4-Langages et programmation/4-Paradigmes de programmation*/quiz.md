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
   - [x] `2 3`


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
   - [x] `1 1`  
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
   - [ ] `4`  
   - [ ] `12`  
   - [x] `24`  
   - [ ] `SyntaxError`

3. On souhaite écrire une fonction `bonjour` qui prend un paramètre `prénom` et qui retourne
   `"Bonjour <prénom> :)"`, par exemple une fois appelée avec l'argument `Python`, cette fonction
   renverrai `"Bonjour Python :)"`.
 
   - [ ] La définition s'écrit: `bonjour = ("Bonjour " + a + " :)   ")`, et l'appel s'écrit: `bonjour("Python")`.
   - [x] La définition s'écrit: `bonjour = lambda nom: "Bonjour " + nom + " :)"`, et l'appel s'écrit: `bonjour("Python")`.
   - [ ] La définition s'écrit: `lambda nom: "Bonjour " + nom + " :)    = bonjour"`, et l'appel s'écrit: `bonjour(Python)`.
   - [ ] Cette définition est impossible, car une fonction ne peut pas renvoyer plusieurs valeurs.

