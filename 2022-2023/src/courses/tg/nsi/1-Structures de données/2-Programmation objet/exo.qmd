## Création, instanciation et représentation d'une classe

Créez une classe `Voiture` avec deux attributs d'instance:

- `couleur`, qui stocke la couleur de la voiture sous forme de chaîne de caractères
- `kilometrage`, qui stocke le nombre de kilomètres sur la voiture sous forme d'entier.

Ensuite, instanciez deux objets `Voiture` - une voiture bleue de 20 000 kilomètres et une voiture
rouge de 30 000 kilomètres. Affichez ensuite leurs couleurs et leur kilométrage. Votre sortie
devrait ressembler à ceci:

```
La voiture bleue a 20 000 kilomètres.
La voiture rouge a 30 000 kilomètres.
```

## Des classes cinématographiques

On considère les définitions de classe suivantes:

```python
class Personne:
    """Objet représentant une personne"""

    def __init__(self, nom: str, année_naissance: int, lieu_naissance: str):
        self.nom = nom
        self.année_naissance = année_naissance
        self.lieu_naissance = lieu_naissance


class Film:
    """Objet représentant un film"""

    def __init__(self, titre: str, réalisateur: Personne):
        self.titre = titre
        self.réalisateur = réalisateur
```

1. Comment créer une instance de la classe `Personne` appelée `lautner` pour le réalisateur Georges
   Lautner né en 1926 à Nice?
2. Proposer la définition d'une méthode `__str__` dans la classe `Personne` qui afficherait
   `"Georges Lautner est une personne née à Nice en 1926"` lors de l'appel `print(lautner)`.
3. On crée une instance de la classe `Film` avec l'instruction suivante: 
   `tonton = Film("Les tontons flingueurs", lautner)`.
   
   a) Qu'affiche l'instruction: `print(tonton.titre)` ?
   
   b) Qu'affiche l'instruction: `print(tonton.réalisateur.nom)` ?
   
   c) Proposer la définition d'une méthode `__str__` dans la classe `Film` qui afficherait
   `"Les tontons flingeurs est un film réalisé par Georges Lautner originaire de Nice"` lors de 
   l'appel `print(tonton)`.
