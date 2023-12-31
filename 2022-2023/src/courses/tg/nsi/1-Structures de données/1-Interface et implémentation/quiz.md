1. On accède aux données par clef dans un:

   - [ ] tableau(`list` en python) 
   - [x] tableau associatif(`dict` en python)

2. On accède aux données par index dans un:

   - [x] tableau(`list` en python) 
   - [ ] tableau associatif(`dict` en python)

3. Une interface est de nature:

   - [ ] pratique
   - [x] théorique

4. Une implémentation est de nature:

   - [x] pratique
   - [ ] théorique

5. Quelle est la sortie du code suivant (`end=" "` place un espace entre chaque affichage.):
   
   ```python
   tab = [2, 3, 5, 7, 11]
   for v in tab:
      print(v, end=",")
   ```

   - [x] `2 3 5 7 11`
   - [ ] `1 2 3 4 5`
   - [ ] `0 1 2 3 4`

6. Quelle est la sortie du code suivant:
   
   ```python
   tab = [2, 3, 5, 7, 11]
   for i in range(len(tab)):
      print(v, end=",")
   ```

   - [ ] `2 3 5 7 11`
   - [ ] `1 2 3 4 5`
   - [x] `0 1 2 3 4`

7. Quelle est la sortie du code suivant:
   
   ```python
   gaston = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}
   for k in gaston:
       print(k, end=" ")
   ```

   - [ ] `nom Lagaffe prenom Gaston age 22 expression M'enfin`
   - [x] `nom prenom age expression`
   - [ ] `('nom', 'Lagaffe') ('prenom', 'Gaston') ('age', 22) ('expression', "M'enfin")`
   - [ ] ` Lagaffe Gaston 22 M'enfin`

8. Quelle est la sortie du code suivant:
   
   ```python
   gaston = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}
   for k in gaston.keys():
       print(k, end=" ")
   ```

   - [ ] `nom Lagaffe prenom Gaston age 22 expression M'enfin`
   - [x] `nom prenom age expression`
   - [ ] `('nom', 'Lagaffe') ('prenom', 'Gaston') ('age', 22) ('expression', "M'enfin")`
   - [ ] ` Lagaffe Gaston 22 M'enfin`

9.  Quelle est la sortie du code suivant:
   
   ```python
   gaston = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}
   for k in gaston.values():
       print(k, end=" ")
   ```

   - [ ] `nom Lagaffe prenom Gaston age 22 expression M'enfin`
   - [ ] `nom prenom age expression`
   - [ ] `('nom', 'Lagaffe') ('prenom', 'Gaston') ('age', 22) ('expression', "M'enfin")`
   - [x] ` Lagaffe Gaston 22 M'enfin`

11. Quelle est la sortie du code suivant:
   
   ```python
   gaston = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}
   for k in gaston.items():
       print(k, end=" ")
   ```

   - [ ] `nom Lagaffe prenom Gaston age 22 expression M'enfin`
   - [ ] `nom prenom age expression`
   - [x] `('nom', 'Lagaffe') ('prenom', 'Gaston') ('age', 22) ('expression', "M'enfin")`
   - [ ] ` Lagaffe Gaston 22 M'enfin`

12. Quelle est la sortie du code suivant:
   
   ```python
   gaston = {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}
   for k, v in gaston.items():
       print(k, v, end=" ")
   ```

   - [ ] `nom Lagaffe prenom Gaston age 22 expression M'enfin`
   - [ ] `nom prenom age expression`
   - [ ] `('nom', 'Lagaffe') ('prenom', 'Gaston') ('age', 22) ('expression', "M'enfin")`
   - [x] ` Lagaffe Gaston 22 M'enfin`

12. Quelle opération est faite en un temps constant $O(1)$ (indépendant de la longueur de la liste)
   sur les `list`es en Python?

   - [ ] Ajouter un élément au début
   - [ ] Ajouter un élément au milieu
   - [x] Ajouter un élément à la fin

13. Quelle opération est faite en un temps constant $O(1)$ sur les `list`es en Python?

   - [ ] Supprimer un élément au début
   - [ ] Supprimer un élément au milieu
   - [x] Supprimer un élément à la fin

14. L'accès à la valeur d'un élément d'une `list`e en python se fait en temps constant $O(1)$ quelle
   que soit sa position dans la liste?

   - [x] Vrai
   - [ ] Faux

11. Quelle opération est faite, en moyenne, en temps linéaire $O(n)$ (proportionnel la longueur du
   dictionnaire) sur les `dict` en Python:

   - [ ] Ajouter une valeur
   - [ ] Modifier une valeur
   - [ ] Supprimer une valeur
   - [x] Rechercher une valeur
   - [ ] Rechercher une clé

