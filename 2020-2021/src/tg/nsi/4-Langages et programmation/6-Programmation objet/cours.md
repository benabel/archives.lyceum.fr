---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi", "poo", "attributs", "méthodes"]
---

::: programme

+-------------------------+------------------------------------+------------------------------------------+
|        Contenus         |        Capacités attendues         |               Commentaires               |
+=========================+====================================+==========================================+
| Vocabulaire de la       | Écrire la définition d’une classe. | On n’aborde pas ici tous les             |
| programmation objet :   |                                    | aspects de la programmation              |
| classes, attributs,     | Accéder aux attributs et           | objet comme le polymorphisme et          |
| méthodes, objets.       | méthodes d’une classe.             | l’héritage.                              |
+-------------------------+------------------------------------+------------------------------------------+

:::

La programmation orientée objet est un paradigme de programmation permettant à l'utilisateur de
dépasser les objets proposés par le langage de programmation afin d'en créer de nouveaux adaptés au
problème réel qu'il tente de résoudre.

Les objets sont décrits dans des `class`es contenant:

- des _attributs_ qui sont les _données_ associées à l'objet;
- des _méthodes_ qui sont les _fonctions_ s'appliquant sur cet objet.

## Création d'une classe et instanciation

En Python, on créé une classe avec la mot clé `class` qu'on nomme par habitude avec un nom en
[_CamelCase_](https://fr.wikipedia.org/wiki/Camel_case).

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class MaClasse:
    nom = "Terminale"
```

</div>

L'objet `MaClasse` est une sorte de patron à partir duquel on va pouvoir créer des objets à la
demande en créant ce que l'on appelle des instances par appel de la classe.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
## On crée deux instances de l'objet Maclasse
classe1 = MaClasse()
classe2 = MaClasse()
```

</div>

Notre classe contient un seul attribut x qui peut être retourné à l'aide de la notation pointée: `nom_instance.x`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# nos deux instances contiennent le même attribut x = 4
classe1.nom
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Terminale'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
classe2.nom
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Terminale'


</div>

On peut modifier les attributs d'un objet ou les supprimer.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# méthode déconseillée 
# on utilise plutôt des getters et setters pour ça (voir plus bas)
classe2.nom = "Première"
# l'attribut x a bien été modifié pour l'instance classe2
classe2.nom
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Première'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# par contre l'attribut de l'instance classe1 est inchangé
classe1.nom
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Terminale'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
del classe1.nom
classe1.nom
```

</div>


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-18-e51cde97e415> in <module>
    ----> 1 del classe1.nom
          2 classe1.nom


    AttributeError: nom


## Les méthodes et le mot clé `self`

Les méthodes sont des fonctions définies au sein de la classe.

Une méthode prend toujours en premier paramètre l'objet lui-même par l'intermédiare de l'argument `self`.

L'appel de la méthode se fait également avec la notation pointée: `nom_instance.methode(...)` 

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class MaClasse:
    nom = 'Terminale'
    def ajoute_lycée(self, lycée):
        """Cette méthode modifie l'attribut nom et le renvoie"""
        self.nom = self.nom + " du lycée " + lycée
        return self.nom

classe1 = MaClasse()
# appel de la méthode pour ajouter le nom du lycée et le renvoer et le renvoyer
classe1.ajoute_lycée("Honoré d'Estienne d'Orves")
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    "Terminale du lycée Honoré d'Estienne d'Orves"


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# l'attribut x a bien été modifié
classe1.nom
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    "Terminale du lycée Honoré d'Estienne d'Orves"


</div>

## Méthodes particulières

### Initialisation avec le constructeur `__init__()`

Il est souvent interressant de créer des objets différents à partir d'un même classe , il est donc possible d'ajouter des arguments qui seront pris en charge lors de l'instanciation de l'objet en utilisant la méthode prédéfinie: `__init__()`.

Prenons l'exemple d'une classe plus réaliste consitant à représenter une personne.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

jim = Personne("Jim", 27)

print(jim.nom)
print(jim.age) 
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Jim
    27


</div>

-----

### La méthode `__repr__()`

Cette méthode est utilisée pour donner une représentation des objets sous forme lisible par exemple lors d'un appel de la fonction `print`. 

Pour l'instant si on affiche notre instance, on a:

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print(jim)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <__main__.Personne object at 0x7f64a010d4f0>


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    def __repr__(self):
        return f"{self.nom} est une Personne de {self.age} ans."

john = Personne("John", 32)

print(john)
john
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    John est une Personne de 32 ans.


</div>

-----

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    John est une Personne de 32 ans.


</div>

### Les getters et setters

Il est fortement déconseillé de récupérer _(get)_ ou modifier _(set)_ des attributs de l'objet directement par l'utilisation de la notation pointée vue précédemment.

Pour chaque attribut, il est conseillé de définir deux méthodes:

- `get_nom_attribut`: pour le récupérer.
- `set_nom_attribut`: pour le modifier.

_C'est long oui, mais c'est la pratique couramment recommandée._

Voici ce que cela donnerait dans notre cas, on a deux attributs: `nom` et `age` , il faut donc ajouter quatre méthodes.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    
    def get_nom(self):
        return self.nom
    
    def set_nom(self, nom):
        self.nom = nom
    
    def get_age(self):
        return self.age
    
    def set_age(self, age):
        self.age = age
        
    def __repr__(self):
        return f"{self.nom} est une Personne de {self.age} ans."

john = Personne("John", 32)

print("Au début")
print(john)

print("Modification des attributs avec les setters")
john.set_nom("Jean")
john.set_age(12)
print(john)

print("Récupération des attributs avec les getters")
john.get_nom(), john.get_age()
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Au début
    John est une Personne de 32 ans.
    Modification des attributs avec les setters
    Jean est une Personne de 12 ans.
    Récupération des attributs avec les getters


</div>

-----

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ('Jean', 12)


</div>

## En plus: Héritage

Un des aspects intéressants _(mais hors-programme)_ est la possibilité de créer des sous classes qui héritent des attributs et méthode de la classe parente.

L'héritage q'il est bien réalisé permet d'éviter des répétitions de code _(Principe DRY: Don't Repeat Yourself)_, et permet d'aboutir à une grande structuration des données.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class Eleve(Personne):
    def __init__(self, nom, age, classe):
        # super appelle le constructeur du parent
        super().__init__(nom, age)
        self.classe = classe
    # On ne met à jour que les méthodes qui sont changées
    def __repr__(self):
        return f"Bonjour, je suis {self.nom}, j'ai {self.age} et je suis en {self.classe}"
    

albert = Eleve("Albert", 27, 'nsi')

albert
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    Bonjour, je suis Albert, j'ai 27 et je suis en nsi


</div>

Toutes les méthodes du parent non modifiées sont _héritées_.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
albert.get_age(), albert.get_nom()
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (27, 'Albert')


</div>

Il en reste cepenant à définir propre à cet objet: `get_classe()`, `set_classe()`, et peut-être d'autres (`travaille()`, `bavarde()` ...)
