## QCM

Cet exercice est extrait du cours [Découvrez la programmation orientée objet avec
Python](https://openclassrooms.com/fr/courses/4302126-decouvrez-la-programmation-orientee-objet-avec-python?status=published)
proposé par le site [OpenClassroom](https://openclassrooms.com) sous licence CC-BY-SA.

1. Un attribut est...

   - [ ] une caractéristique d'un objet, par exemple la taille d'un bateau.
   - [ ] une fonctionnalité de mon programme, par exemple la possibilité de télécharger les résultats d'un jeu de bataille navale.

2. Une méthode est...

   - [ ] un guide commun à toutes les actions réalisées par mon programme et qui les aide à se coordonner.
   - [ ] une action réalisée par un objet, par exemple le déplacement d'un bateau de la case A6 à la case B12.

3. En programmation orientée objet, un objet est...

   - [ ] un ensemble d'atomes que je peux, moi, humain, déplacer de mes propres mains.
   - [ ] un concept qui représente un ensemble de données et qui en contrôle l'accès.

4. Une classe a des attributs et des méthodes.

   - [ ] Vrai
   - [ ] Faux

5. Une classe est :

   - [ ] une salle dans laquelle se réunissent les élèves apprenant à coder.
   - [ ] la représentation d'un objet en programmation.

6. Pour créer la classe `Fruit`, vous écrivez :

   - [ ] `class Fruit:`
   - [ ] `classe Fruit()`
   - [ ] `class Fruit():`
   - [ ] `class Fruit`

7. Créer l'instance d'une classe s'écrit ainsi :

   - [ ] `banane = fruit`
   - [ ] `banane = Fruit`
   - [ ] `banane = Fruit()`


8. Vous pouvez créer autant d'instances que vous le souhaitez.

   - [ ] Vrai
   - [ ] Faux

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
class Film:
    def __init__(self, titre, réalisateur):
        self.titre = titre
        self.réalisateur = réalisateur

class Personne:
    def __init__(self, nom, année_naissance, lieu_naissance):
        self.nom = nom
        self.année_naissance = année_naissance
        self.lieu_naissance = lieu_naissance
```

1. Comment créer une instance de la classe `Personne` appelée `lautner` pour le réalisateur Georges
   Lautner né en 1926 à Nice?
2. Comment afficher `"Georges Lautner est une personne née à Nice en 1926"` en utilisant l'instance
   `lautner`.
3. On crée une instance de la classe `Film` avec l'instruction suivante: `tonton = Film("Les
   tontons flingueurs", lautner)`.
   
   a) Qu'affiche l'instruction: `print(tonton.titre)` ?
   
   b) Qu'affiche l'instruction: `print(tonton.réalisateur.nom)` ?
   
   c) Comment afficher `"Les tontons flingeurs est un film réalisé par Georges Lautner originaire
   de Nice"` en utilisant l'instance `tonton`.
