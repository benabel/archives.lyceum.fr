## Spécification et tests de la division euclidienne

Copier le code suivant dans un notebook et complétez-le en ajoutant le prototype et les
commentaires.

```python
def division_euclidienne(a, b):
    """ Ecrire la spécification de la fonction

    Arguments
    ---------


    Returns
    -------

    """
    # Ajouter des commentaires pour expliquer 
    if b <= 0 or a < 0 or type(a) != int or type(b) != int:
        return -1

    if a == 0:
        return (0, 0)
    
    # mes commentaires ici sur une ligne

    r = a
    q = 0
    while (r >= 0):
        r = r - b
        q = q + 1

    return (q-1, r+b)

# Tests
def test_division_euclidienne():
    # Ajouter des commentaires pour expliquer
    # quelles sont les vérifications effectuées
    assert division_euclidienne(10, 2) == (5, 0)
    assert division_euclidienne(2, 10) == (0, 2)
    assert division_euclidienne(37, 3) == (12, 1)
    # Verifications d'erreurs
    assert division_euclidienne(-10, 7) == -1
    assert division_euclidienne(10, -7) == -1
    assert division_euclidienne(10.3, 4) == -1
    assert division_euclidienne(11, 3.5) == -1
    assert division_euclidienne(3, 0) == -1
    # ...
    assert division_euclidienne(0, 3) == (0, 0)
    assert division_euclidienne(0, 0) == -1
    
# Lancement du test
test_division_euclidienne()

```

## Créer est prototyper une fonction qui satisfait à des tests

1. Créer et prototyper une fonction `appartient()` qui indique si un élément est présent dans une
 liste, et qui passe le jeu de tests suivants:

 ```python
 def test_appartient():
    assert appartient(2, [5, 4, 1, 2, 3]) is True
    assert appartient(6, [5, 4, 1, 2, 3]) is False
```

2. Compléter le jeu de tests avec des cas limites: liste vide, types de données différents...

## Algorithmes classiques

Reprenez les algorithmes classiques du [chapitre 1 de la partie 8](../../8-algorithmique/1-parcours-sequentiel-dun-tableau): et les implémenter sous forme de fonctions
prototypées et testées:

1. Recherche d'un extremum, au choix: maximum ou minimum d'un tableau.
2. Calcul d'une moyenne des valeurs d'un tableau.

**Attention: il conviendra d'écrire l'algorithme de parcours du tableau et de ne pas utiliser les
méthodes prédéfinies dans python `max`, `min`...**

## Recherche dans une documentation

1. Rechercher dans la documentation du module `random` comment créer un dé numérique qui renvoie de
   façon équiprobable les valeurs entières de 1 à 6. Tester la fonction pour vérifier son
   fonctionnement.

2. Rechercher dans la documentation du module `math` comment calculer le logarithme en base 2 d'un
   nombre. Tester la fonction pour vérifier son fonctionnement: p.ex $\log_2(16) = 4$; $\log_2(256)
   = 8$. Expliquer ce que calcule cette fonction.

3. Rechercher dans la documentation de la librairie `pandas` plusieurs méthodes permettant d'itérer
   sur les valeurs d'une `Dataframe`.

