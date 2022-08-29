## QCM

1. Quelles opérations sont faites en un temps constant (indépendant de la longueur de la liste) sur
   les `list` en Python:

   - [ ] Ajouter un élément au début
   - [ ] Ajouter un élément au milieu
   - [ ] Ajouter un élément à la fin
   - [ ] Supprimer un élément au début
   - [ ] Supprimer un élément au milieu
   - [ ] Supprimer un élément à la fin
   - [ ] Accéder à un élément au début
   - [ ] Accéder à un élément au milieu
   - [ ] Accéder à un élément à la fin

2. Quelles opérations sont faites en un temps constant (indépendant de la longueur de la liste) sur
   les `dict` en Python:

   - [ ] Ajouter une valeur
   - [ ] Modifier une valeur
   - [ ] Supprimer une valeur
   - [ ] rechercher une valeur
   - [ ] rechercher une clé

##  Implémentation de la classe `Tableau`

1. Créer une classe `Tableau` qui implémente les quatre méthodes ci-dessous en stockant les données
   du tableau dans un attribut appelé `data` de type `list`e.

   - « Insérer » : ajoute un élément dans le tableau à l'index souhaité. `tableau.ajout(index, élément)` ;
   - « Retirer » : retire un élément de le tableau à l'index souhaité. `tableau.suppr(index)` ;
   - « Le tableau est-il vide ? » : renvoie « vrai » si le tableau est vide, « faux » sinon. `tableau.est_vide()`
   - « Nombre d'éléments dans le tableau » : renvoie le nombre d'éléments dans le tableau. `tableau.longueur()`

   On donne ci-dessous une séquence d'instructions d'initialisation et d'utilisation d'un
   `tableau`.

   ```python
   # instanciation
   tab = Tableau()
   
   # utilisation
   tab.longueur() # renvoie 0
   tab.est_vide() # renvoie True
   tab.ajout(0, "pomme")
   tab.data # renvoie ['pomme']
   tab.ajout(1, "poire")
   tab.ajout(0, "pêche")
   tab.data # ['pêche', 'pomme', 'poire']
   tab.est_vide() # renvoie False
   tab.suppr(2)
   tab.suppr(0)
   tab.data # renvoie ['pomme']
   ```

2. Ajoutez ensuite la possibilité d'initialiser (méthode `__init__()`)les données du tableau en
   fournissant un paramètre de type `list`e lors de l'instanciation. Et ajoutez également une
   méthode d'affichage du tableau (méthode `__repr__()`) pour afficher les tableaux sous la forme:
   `"Tableau([e1, e2, ..., en])"`.

   On donne ci-dessous une séquence d'instructions d'initialisation et d'utilisation d'un
   `tableau`.

   ```python
   # instanciation
   tab1 = Tableau([2, 6, 5])
      
   # utilisation
   tab1.longueur() # renvoie 3
   tab1.est_vide() # renvoie False
   tab1.ajout(0, 12)
   tab1.suppr(2)
   print(tab1) # renvoie "Tableau([12, 2, 5])"
   ```

3. **Pour aller plus loin:** _Cacher_ la structure de liste de l'attribut `data` en autorisant
   l'initialisation sans les crochets: `tab2 = Tableau(2, 6, 5)`, et en modifiant la méthode
   d'affichage pour que: `print(tab2)` renvoie: `"Tableau(2, 6, 5)"`.

   Pour cela on utilisera le paramètre spécial `*args`, et la méthode `join` des `str` en Python.

3. **Pour aller encore plus loin:** Rendre l'utilisation des tableaux plus aisée en permettant le
   chaînage des méthodes `tableau.méthode1().méthode2().méthode1()...`

   On donne ci-dessous une séquence d'instructions d'initialisation et d'utilisation d'un
   `tableau`.

   ```python
   # instanciation
   tab3 = Tableau()
      
   # utilisation
   tab3.ajout(0, 12).ajout(1, 13).ajout(0, 9)
   print(tab3) # renvoie "Tableau(9, 12, 13)"
   tab3.suppr(2).suppr(0)
   print(tab3) # renvoie "Tableau(12)"
   tab3.suppr(0).est_vide() # renvoie True
   ```

## Choisir une structure de donnée

Dans chaque cas, indiquer quelle structure de données vous semble la plus adaptée, et donner une
exemple de création et d'interaction avec la structure de données.

1. Une personne avec son nom, prénom, adresse email.
2. Les notes de nsi d'un élève au cours d'un trimestre.
3. Les notes de nsi de tous les élèves d'une classe au cours d'un trimestre.
4. Une grille de sudoku
   <p><a href="https://commons.wikimedia.org/wiki/File:Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg#/media/File:Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg"><img class="half center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png" alt="Sudoku Puzzle by L2G-20050714 standardized layout.svg"></a><br>By Tim Stellmach - &lt;a href="//commons.wikimedia.org/wiki/File:Sudoku-by-L2G-20050714.svg" class="image"&gt;&lt;/a&gt;, <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" title="Creative Commons Zero, Public Domain Dedication">CC0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=57831926">Link</a></p>
