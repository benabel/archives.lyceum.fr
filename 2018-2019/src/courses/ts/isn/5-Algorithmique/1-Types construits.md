---
"tags": ["python", "listes", "dictionnaires"]
---

Dans l'[introduction à Python](https://lyceum.fr/ts/isn/1-Introduction-a-Python), nous avions vu certains types et valeurs de base:

- `int`: les entiers
- `float`: les rééls(nombres à virgule flottante)
- `boolean`: booléen (Vrai ou Faux)
- `str`: caractère simple(s'il y en a plusieurs, les chaînes de caractères forment alors un type construit de plusieurs caractères semblable aux listes)

Cependant, il existe de nombreux objets qui sont représentés par plusieurs valeurs, c'est le cas par exemple du texte, des images et des sons...

Dans ce cas les enregistrements collectent des valeurs de types différents dans des champs nommés.

Nous verrons dans ce cours deux exemples de variables construits:

- les listes `list`: tableau d'éléments ordonnés dans lesquels les valeurs sont accédées via un **index**.
- les dictionnaires `dict`: ensemble d'éléments dans lesquels les valeurs sont accédées via une **clef**.

## Listes


Les listes sont des collections *ordonnées de valeurs*, elles sont
entourées par des crochets `[]`, leurs éléments sont séparés par des
virgules.

Les éléments d'une liste peuvent avoir des types différents.


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste = [ 1, 'deux' , 3]
type(ma_liste)
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    list



### Longueur et accés aux éléments
On peut facilement accéder à la longueur de la liste grace à la fonction
`len` et à chacun de ces éléments grâce à leur index *(Attention le
premier élement à l'index 0)*

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
len(ma_liste)
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste[0], ma_liste[2]
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    (1, 3)



On peut inversement connaître l'indice correspondant à une valeur grâce à l'attribut `index`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.index('deux')
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    1



### Ajout et suppression d'éléments

On peut ajouter des éléments à la liste à la fin avec la méthode `append`, ou à un indice quelconque avec la méthode `insert`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.append(4)
ma_liste
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    [1, 'deux', 3, 4]



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.insert(0, 'zéro')
ma_liste
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 1, 'deux', 3, 4]



On peut au contraire supprimer des éléments de la liste à la fin avec la méthode `pop()`, ou à un indice quelconque avec la méthode `pop(indice)`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.pop()
ma_liste
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 1, 'deux', 3]



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
ma_liste.pop(1)
ma_liste
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ['zéro', 'deux', 3]



### Itération sur les valeurs de la liste

On peut utiliser les index ou une méthode simplifiée implémentée dans Python.

#### Méthode simplifiée

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for e in ma_liste:
    print(e)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    zéro
    deux
    3


</div>
</div>

-----

#### Itération de l'index

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for i in range(len(ma_liste)):
    print(i, ma_liste[i])
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    0 zéro
    1 deux
    2 3


</div>
</div>

-----

## Dictionnaires

Dans un dictionnaire les valeurs de la collection ne sont pas repéré par
un index, mais par une *clé*. Les dictionnaires sont entourés d'accolades `{}`.


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D = { 'nom': 'Doe' , 'prenom': 'John', 'age': 77 }
type(D)
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    dict



Pour accéder aux éléments du dictionnaire, il suffit d'appeler la clé correspondante, d'autres part la fonction len est égalemnt disponible.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
len(D)
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    3



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D['nom'], D['age']
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    ('Doe', 77)



### Ajout et suppression d'éléments

On peut ajouter des éléments au dictionnaire en **assignant* des clés paire valeur à notre guise.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D["adresse"] = "Nice"
D
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    {'nom': 'Doe', 'prenom': 'John', 'age': 77, 'adresse': 'Nice'}



On peut au contraire supprimer des éléments du dictionnaire avec la méthode `pop()`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
D.pop("age")
D
```

</div>
</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    {'nom': 'Doe', 'prenom': 'John', 'adresse': 'Nice'}



### Itération sur les dictionnaires


Les dictionnaires étant des associations de clés(key) et de valeurs(value), on peut itérer sur les clés, les valeurs, ou les deux.

#### Itération sur les clés: `keys()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for key in D.keys():
    print(key)

print("\nou plus simplement\n")
for key in D:
    print(key)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    nom
    prenom
    adresse
    
    ou plus simplement
    
    nom
    prenom
    adresse


</div>
</div>

-----

#### Itération sur les valeurs: `values()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for value in D.values():
    print(value)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Doe
    John
    Nice


</div>
</div>

-----

#### Itération sur les paires clé, valeurs: `items()`

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for key, value in D.items():
    print(key, '=>', value)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    nom => Doe
    prenom => John
    adresse => Nice


</div>
</div>

-----

## Persistance des données

Les listes et dictionnaires sont des objets **mutables**, c'est à dire que l'on peut modifier leur contenu sans créer un nouvel objet. On dit qu'il s'agit de données [non-persistantes](http://fr.wikipedia.org/wiki/Persistance_%28informatique%29).


------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Valeurs initiales
liste = [ 1, 'deux' , 3]
dict = { 'nom': 'Doe' , 'prenom': 'John', 'age': 77 }
print("Valeurs initiales:\n", liste, dict)

# Modification des valeurs par assignation
liste[1] = 2
dict['age'] = 17

print("Modification des valeurs par assignation:\n", liste, dict)

# Ajout d'éléments
liste.append(4)
dict['nationalité'] = 'française'

print("Ajout d'éléments:\n", liste, dict)

# Suppression d'éléments
liste.pop(0)
dict.pop('age')

print("Suppression d'éléments:\n", liste, dict)
```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Valeurs initiales:
     [1, 'deux', 3] {'nom': 'Doe', 'prenom': 'John', 'age': 77}
    Modification des valeurs par assignation:
     [1, 2, 3] {'nom': 'Doe', 'prenom': 'John', 'age': 17}
    Ajout d'éléments:
     [1, 2, 3, 4] {'nom': 'Doe', 'prenom': 'John', 'age': 17, 'nationalité': 'française'}
    Suppression d'éléments:
     [2, 3, 4] {'nom': 'Doe', 'prenom': 'John', 'nationalité': 'française'}


</div>
</div>

-----

Si on a besoin de modifier une liste ou un dictionnaire, mais que l'on veut garder une trace des objets initiaux, il faut commencer par en créer une **copie**, il ne suffit pas de créer une variable suplémentaire sans quoi cette variable serait elle aussi modifiée si l'objet initial changeait: l'assignation est dite par **référence** dans ce cas.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Valeurs initiales
L = [ 1, 'deux' , 3]
print("Valeurs initiales:\n", L)

# Création d'une référence à la liste par simple assignation
L_ref = L

# Création d'une copie de la liste
L_copie = list(L)

# Modification de la liste initiale
L[1] = 2

print("Modification de la liste L:")
print("La liste L a bien, été modifiée:", L)
print("La liste L_ref a aussi été modifiée car il s'agit juste d'une référence vers la liste L:", L_ref)
print("La copie L_copie n'a pas été modifiée:", L_copie)


```

</div>
</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Valeurs initiales:
     [1, 'deux', 3]
    Modification de la liste L:
    La liste L a bien, été modifiée: [1, 2, 3]
    La liste L_ref a aussi été modifiée car il s'agit juste d'une référence vers la liste L: [1, 2, 3]
    La copie L_copie n'a pas été modifiée: [1, 'deux', 3]


</div>
</div>

-----
