---
"tags": ["python", "dictionnaire"]
---

::: programme
+---------------------------+-------------------------------+--------------------------------------+
|         Contenus          |      Capacités attendues      |             Commentaires             |
+===========================+===============================+======================================+
| Dictionnaires par clés et | Construire une entrée de      | Il est possible de présenter les     |
| valeurs                   | dictionnaire                  | données EXIF d’une image sous        |
|                           |                               | la forme d’un enregistrement.        |
|                           |                               |                                      |
|                           | Itérer sur les éléments d'un  | En Python, les p-uplets nommés       |
|                           | dictionnaire.                 | sont implémentés par des             |
|                           |                               | dictionnaires.                       |
|                           |                               |                                      |
|                           |                               | Utiliser les méthodes `keys()`,      |
|                           |                               | `values()` et `items()`              |
+---------------------------+-------------------------------+--------------------------------------+
:::

Dans un dictionnaire les valeurs de la collection ne sont pas repéré par
un index, mais par une *clé*.

## Syntaxe

 Les dictionnaires sont entourés d'accolades `{}`. Les clés doivent être des chaînes de caractère `str` elles sont écrites avec des guillemets.

```python
{'clé_1': valeur_1, 'clé_n': valeur_n, ...'clé_n': valeur_n}
```


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D = { 'nom': 'Lagaffe' , 'prenom': 'Gaston', 'age': 22 }
type(D)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    dict


</div>

Pour accéder aux éléments du dictionnaire, il suffit d'appeler la clé correspondante, d'autres part la fonction len est égalemnt disponible.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
len(D)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D['nom']
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    'Lagaffe'


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D['age']
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    22


</div>

## Ajout et suppression d'éléments

Les dictionnaires étant *[mutables](https://fr.wiktionary.org/wiki/mutable)*, on peut ajouter des éléments au dictionnaire en **assignant* des clés paire valeur à notre guise.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D["expression"] = "M'enfin"
D
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    {'nom': 'Lagaffe', 'prenom': 'Gaston', 'age': 22, 'expression': "M'enfin"}


</div>

On peut au contraire supprimer des éléments du dictionnaire avec la méthode `pop()`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D.pop("age")
D
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    {'nom': 'Lagaffe', 'prenom': 'Gaston', 'expression': "M'enfin"}


</div>

## Itération sur les dictionnaires


Les dictionnaires étant des associations de clés(key) et de valeurs(value), on peut itérer sur les clés, les valeurs, ou les deux.

### Itération sur les clés: `keys()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for key in D.keys():
    print(key)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    nom
    prenom
    expression


</div>

-----

Ou plus simplement.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for key in D:
    print(key)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    nom
    prenom
    expression


</div>

-----

### Itération sur les valeurs: `values()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for value in D.values():
    print(value)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Lagaffe
    Gaston
    M'enfin


</div>

-----

### Itération sur les paires clé, valeurs: `items()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for key, value in D.items():
    print(key, '=>', value)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    nom => Lagaffe
    prenom => Gaston
    expression => M'enfin


</div>

-----
