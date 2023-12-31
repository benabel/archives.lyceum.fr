## Implémentation de la classe `Pile`

Créer une classe `Pile` qui implémente le type abstrait pile en stockant les données de la pile
dans un attribut privé `_data` de type `list`.

- L'initialisation s'effectue sans argument et affecte une liste vide à l'attribut `_data`.
- La méthode `empiler(élément)` ajoute l'élément à la fin de l'attribut `_data`.
- La méthode `dépiler()` retire l'élément à la fin de l'attribut `_data` et le renvoie.
- La méthode `est_vide()` renvoie `True` si la pile est vide et `False` sinon.
- La méthode `sommet()` renvoie l'élément présent au sommet de la pile, et `None` si la pile est
  vide.

Voici une série de tests à passer.

```python
pile = Pile()
assert pile.est_vide() is True

pile.empiler(1)
assert pile.est_vide() is False
assert pile.sommet() == 1

pile.empiler(2)
assert pile.est_vide() is False
assert pile.sommet() == 2
assert pile.est_vide() is False

pile.empiler(3)
assert pile.sommet() == 3
assert pile.dépiler() == 3

while not pile.est_vide():
    pile.dépiler()

assert pile.est_vide() is True
assert pile.sommet() is None
```

**Pour aller plus loin**, modifier la classe `Pile` afin que `sommet()` ne soit plus une méthode,
mais un attribut `sommet`. La série de tests précédents devra être modifié en supprimant les
parenthèses des appels des méthodes `pile.sommet()` en `pile.sommet`.

## Implémentation de la classe `File`

Créer une classe `File` qui implémente le type abstrait file en stockant les données de la file
dans un attribut privé `_data` de type `collections.deque` présentée dans le cours et dont vous
pouvez consulter la documentation grâce à la fonction `help()`.

- L'initialisation s'effectue sans argument et affecte une liste chaînée double vide à l'attribut
  `_data`.
- La méthode `enfiler(élément)` ajoute l'élément à la tête de l'attribut `_data`.
- La méthode `défiler()` retire l'élément de la queue de l'attribut `_data` et le renvoie.
- La méthode `est_vide()` renvoie `True` si la file est vide et `False` sinon.
- La méthode `tête()` renvoie l'élément présent à la tête de la file, et `None` si la file est
  vide.

Voici une série de tests à passer.

```python
file = File()
assert file.est_vide() is True

file.enfiler(1)
assert file.est_vide() is False
assert file.tête() == 1

file.enfiler(2)
assert file.est_vide() is False
assert file.tête() == 1
assert file.est_vide() is False

file.enfiler(3)
assert file.tête() == 1
assert file.est_vide() is False

assert file.défiler() == 1
assert file.défiler() == 2
assert file.défiler() == 3

assert file.est_vide() is True
assert file.tête() is None
```

**Pour aller plus loin**, modifier la classe `File` afin que `tête()` ne soit plus une méthode,
mais un attribut `tête`. La série de tests précédents devra être modifié en supprimant les
parenthèses des appels des méthodes `file.tête()` en `file.tête`.

## Exercice type BAC

> Cet exercice porte sur la notion de pile, de file et sur la programmation de base en Python.

> Il est extrait du BAC 2021 Amérique du Nord sujet 1 Exercice 5.

Les interfaces des structures de données abstraites `Pile` et `File` sont proposées ci-dessous. On
utilisera uniquement les fonctions ci-dessous :

---

**Structure de données abstraite: Pile**

Utilise: Élément, Booléen

Opérations:

- `creer_pile_vide:∅ → Pile`     

  `creer_pile_vide()` renvoie une pile vide 

- `est_vide:Pile → Booléen`

  `est_vide(pile)` renvoie `True` si `pile` est vide, `False` sinon 

- `empiler: Pile,Élément → ∅` 
 
  `empiler(pile,element)` ajoute `element` à la pile pile

- `depiler: Pile → Élément` 
  
  `depiler(pile)` renvoie l’élément au sommet de la pile en le retirant de la `pile`

---

**Structure de données abstraite: File**

Utilise: Élément, Booléen

Opérations: 

- `creer_file_vide: ∅ → File`

  `creer_file_vide()` renvoie une file vide 

- `est_vide:File → Booléen`

  `est_vide(file)` renvoie `True` si file est vide, `False` sinon 

- `enfiler: File, Élément → ∅`

  `enfiler(file,element)` ajoute element dans la file `file` 

- `defiler: File → Élément`

  `defiler(file)` renvoie l’élément au sommet de la file `file` en le retirant de la file `file`.

---

1. On considère la file `F` suivante :

   ```
                --------------------------------------   
   enfilement → "rouge" "vert" "jaune" "rouge" "jaune" → défilement.
                --------------------------------------
   ```
   
   Quel sera le contenu de la pile `P` et de la file `F` après l’exécution du programme Python
   suivant?
   
   ```python
   P = creer_pile_vide()
   while not(est_vide(F)):
       empiler(P, defiler(F))
   ```
   
2. Créer une fonction `taille_file` qui prend en paramètre une file `F` et qui renvoie le
   nombre d’éléments qu’elle contient. Après appel de cette fonction la file `F` doit avoir
   retrouvé son état d’origine.

   ```python
   def taille_file(F):
       """File -> Int"""
   ``` 
    
3. Écrire une fonction `former_pile` qui prend en paramètre une file `F` et qui renvoie une pile
   `P` contenant les mêmes éléments que la file.
   
   Le premier élément sorti de la file devra se trouver au sommet de la pile; le deuxième
   élément sorti de la file devra se trouver juste en-dessous du sommet, etc.
   
   Exemple: si

   ```
       --------------------------------------
   F = "rouge" "vert" "jaune" "rouge" "jaune"
       --------------------------------------
   ```
   
   alors l’appel `former_pile(F)` va renvoyer la pile `P` ci-dessous :
   
   ```
        | "jaune" | -> sommet
        | "rouge" |
   P =  | "jaune" |
        | "vert"  |
        | "rouge" |
        -----------

   ```

4. Écrire une fonction `nb_elements` qui prend en paramètres une file `F` et un élément
   `elt` et qui renvoie le nombre de fois où `elt` est présent dans la file `F`. Après appel de
   cette fonction la file `F` doit avoir retrouvé son état d’origine.
   
5. Écrire une fonction `verifier_contenu` qui prend en paramètres une file `F` et trois entiers:
   `nb_rouge`, `nb_vert` et `nb_jaune`. Cette fonction renvoie le booléen `True` si "rouge" apparaît
   au plus `nb_rouge`fois dans la file `F`, "vert" apparaît au plus `nb_vert`fois dans la file
   `F` et "jaune" apparaît au plus `nb_jaune` fois dans la file `F`. Elle renvoie `False` sinon. On
   pourra utiliser les fonctions précédentes.



