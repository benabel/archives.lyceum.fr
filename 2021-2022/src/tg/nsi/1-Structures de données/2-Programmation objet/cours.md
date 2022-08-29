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

::: intro

<wc-wikimage title="OOP.svg" class="half right"></wc-wikimage>

La _programmation orientée objet&nbsp;(P.O.O.)_ est un [paradigme de programmation](/tg/nsi/4-langages-et-programmation/4-paradigmes-de-programmation/) permettant au développeur de
dépasser les objets proposés par le langage de programmation afin d'en créer de nouveaux adaptés au
problème qu'il tente de résoudre: des utilisateurs, des messages, des jouets...


:::


## Attributs et méthodes

En POO, les objets sont décrits dans des `class`es contenant:

- des _attributs_ qui sont les _données_ associées à l'objet;
- des _méthodes_ qui sont les _fonctions_ s'appliquant sur cet objet.

En Python, on accède aux attributs et aux méthodes grâce à la **notation pointée**, vous l'avez déjà utilisée car Python est un langage fortement orienté objet.

Prenons l'exemple des objets de types [`date`]() du module `datetime`.

On commence par créer une date de ce type, ce que l'on appelle une instance de l'objet.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
from datetime import date

prise_bastille = date.fromisoformat("1789-07-14")
print("type:", type(prise_bastille))
print("objet: ", prise_bastille)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    type: <class 'datetime.date'>
    objet:  1789-07-14


</div>

-----

### Les attributs: données

Cet objet possède des **attributs*: les _données_ relatives à cet objet.

On y accède grâce à la notation pointée: `objet.attribut`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
prise_bastille.day
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    14


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
prise_bastille.month
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    7


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
prise_bastille.year
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    1789


</div>

### Les méthodes: fonctions

Cet objet possède des **méthodes*: les _fonctions_ s'appliquant sur cet objet.

On y accède grâce à la notation pointée: `objet.méthode(...)`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Appel de la méthode sans argument
prise_bastille.ctime()
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Tue Jul 14 00:00:00 1789'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Appel de la méthode avec un argument de type str
prise_bastille.strftime("%A %d %B %Y")
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Tuesday 14 July 1789'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Même appel mais en utilisant une version française
import locale

locale.setlocale(locale.LC_ALL, "fr_FR.UTF-8")

prise_bastille.strftime("%A %d %B %Y")
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'mardi 14 juillet 1789'


</div>

## Création d'une classe et instanciation

En Python, on créé une classe avec la mot clé `class` qu'on nomme par habitude avec un nom en
[_UpperCamelCase_](https://fr.wikipedia.org/wiki/Camel_case).

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    nom = "Terminale"
    numero = 1
    # liste des élèves
    eleves = []
```

</div>

L'objet `ClasseDeLycee` est une sorte de «patron» à partir duquel on va pouvoir créer des objets à la
demande en créant ce que l'on appelle des instances par appel de la classe.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
## On crée deux instances de l'objet ClasseDeLycee
term1 = ClasseDeLycee()
term2 = ClasseDeLycee()
```

</div>

On peut accéder aux attributs de nos objets à l'aide de la notation pointée: `nom_instance.attribut`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# nos deux instances contiennent les mêmes attributs nom et numero
term1.nom
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
term2.nom
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
term1.numero, term2.numero
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 2)


</div>

On peut modifier les attributs d'un objet ou les supprimer.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# méthode déconseillée
# on utilise plutôt des getters et setters pour ça (voir plus bas)
term2.numero = 2
# les attributs onta bien été modifiés pour l'instance term2
term2.nom, term2.numero
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ('Terminale', 2)


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# par contre les attributs de l'instance term1 sont inchangés
term1.nom, term1.numero
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ('Terminale', 1)


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
del term1.nom
term1.nom
```

</div>


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-44-946079c0e9b2> in <module>
    ----> 1 del term1.nom
          2 term1.nom


    AttributeError: nom


::: {.plus titre="Attributs de classe et d'instance"}

Dans cette partie nous avons utilisé des attributs de classe sans le `self` pour plus de simplicité dans cette introduction.

Par la suite, on utilisera des attributs d'instance(`self.attribut`), il y a de légères différences qui sortent du cadre de ce cours.

:::

## Les méthodes et la variable `self`

Les méthodes sont des fonctions définies au sein de la classe qui s'appliquent aux objets créés grâce à cette classe.

Une méthode prend toujours en premier paramètre l'objet lui-même par l'intermédiare du paramètre qu'on appelle par convention `self`.

De façon générale, le mot clé `self` désignera l'instance de l'objet au sein du code de la classe.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    nom = "Terminale"
    numero = 1
    eleves = []

    def ajoute_eleve(self, élève):
        """Cette méthode ajoute un élève dans la classe"""
        self.eleves.append(élève)
```

</div>

Lorsqu'on appelle une méthode sur une instance de la classe, on utilisera encore la notation pointée: `nom_instance.methode(...)`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
term1 = ClasseDeLycee()
term1.ajoute_eleve("Alan Turing")
```

</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# l'attribut eleves a bien été modifié
term1.eleves
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['Alan Turing']


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# mais pas pour l'instance term2
term2.eleves
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    []


</div>

## Méthodes particulières

### Initialisation avec le constructeur `__init__()`

Il est souvent interressant de créer des objets différents à partir d'un même classe , il est donc possible d'ajouter des arguments qui seront pris en charge lors de l'instanciation de l'objet en utilisant la méthode prédéfinie: `__init__()`.

Voici comment nous pourrions permettre de personnnaliser notre classe dès sa création.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    def __init__(self, nom, numero, eleves):
        self.nom = nom
        self.numero = numero
        self.eleves = eleves


prem7 = ClasseDeLycee("Première", 7, ["Ada Lovelace"])

print(prem7.nom, prem7.numero, prem7.eleves)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Première 7 ['Ada Lovelace']


</div>

-----

On peut donner des valeurs par défaut aux paramètres dans la signature de la méthode `__init__`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    def __init__(self, nom="Terminale", numero=3, eleves=[]):
        self.nom = nom
        self.numero = numero
        self.eleves = eleves


term3 = ClasseDeLycee()

print(term3.nom, term3.numero, term3.eleves)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Terminale 3 []


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# on peut personnaliser les attributs souhaités de l'instance
# en gardant les valeurs par défaut pour les autres

term4 = ClasseDeLycee(numero=4)

print(term4.nom, term4.numero, term4.eleves)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Terminale 4 []


</div>

-----

### La méthode `__str__()`

Cette méthode est utilisée pour donner une représentation des objets sous forme lisible lors d'un appel de la fonction `print`. 

Pour l'instant si on affiche notre instance, on a:

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
print(term4)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <__main__.ClasseDeLycee object at 0x7fe037f4bc10>


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    def __init__(self, nom="Terminale", numero=3, eleves=[]):
        self.nom = nom
        self.numero = numero
        self.eleves = eleves

    def __str__(self):
        return f"<Classe de Lycée {self.nom}{self.numero}>"


term3 = ClasseDeLycee()

print(term3)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <Classe de Lycée Terminale3>


</div>

-----

::: plus
On peut également utiliser la méthode `__repr__()` qui est plus générale et qui sera également utilisée lors d'un appel de la fonction `print` si `__str__` n'est pas définie.
:::

### Les accesseurs(_getters_) et mutateurs (_setters_)

Il est fortement _déconseillé_ de récupérer _(get)_ ou modifier _(set)_ des attributs de l'objet directement par l'utilisation de la notation pointée vue précédemment.

Pour chaque attribut, il est conseillé de définir deux méthodes:

- `get_nom_attribut`: pour le récupérer.
- `set_nom_attribut`: pour le modifier.

_C'est long oui, mais c'est la pratique couramment recommandée._

Voici ce que cela donnerait dans notre cas, on a trois attributs, il faut donc ajouter six méthodes.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class ClasseDeLycee:
    def __init__(self, nom="Terminale", numero=3, eleves=[]):
        self.nom = nom
        self.numero = numero
        self.eleves = eleves

    def get_nom(self):
        return self.nom

    def set_nom(self, nom):
        self.nom = nom

    def get_numero(self):
        return self.numero

    def set_numero(self, numero):
        self.numero = numero

    def get_eleves(self):
        return self.eleves

    def set_eleves(self, eleves):
        self.eleves = eleves

    def __str__(self):
        return f"<Classe de Lycée {self.nom}{self.numero}>"


c = ClasseDeLycee()

print("Au début")
print(c)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Au début
    <Classe de Lycée Terminale3>


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Modification des attributs avec les setters
c.set_nom("Seconde")
c.set_numero(15)
print(c)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <Classe de Lycée Seconde15>


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Récupération des attributs avec les getters
c.get_nom(), c.get_eleves()
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ('Seconde', [])


</div>

## En plus: Héritage

Un des aspects intéressants _(mais hors-programme)_ est la possibilité de créer des sous classes qui héritent des attributs et méthode de la classe parente.

L'héritage q'il est bien réalisé permet d'éviter des répétitions de code _(Principe DRY: Don't Repeat Yourself)_, et permet d'aboutir à une grande structuration des données.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
class Terminale(ClasseDeLycee):
    def __init__(self, numero, eleves=[]):
        # super appelle le constructeur du parent
        super().__init__("terminale", numero, eleves)

    # On ne met à jour que les méthodes qui sont changées
    # Toutes les autres méthodes sont héritées
    def __str__(self):
        return f"<Classe de Terminale{self.numero}>"


term7 = Terminale(7)
print(term7)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    <Classe de Terminale7>


</div>

-----

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
term7.get_eleves()
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    []


</div>

Toutes les méthodes du parent non modifiées sont _héritées_.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
term7.set_eleves(["Albert Einstein", "Paul MacCartney"])
term7.get_eleves()
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['Albert Einstein', 'Paul MacCartney']


</div>

Il reste cependant à définir les méthodes et attributs propres à cette classe: `voeux_parcoursup`, `mention_bac`...
