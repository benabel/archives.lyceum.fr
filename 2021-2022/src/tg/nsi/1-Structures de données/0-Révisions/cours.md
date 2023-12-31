---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: intro

> Nous avons vu l'année dernière comment étaient codées les données au sein d'un 
> ordinateur, et nous avons utilisé des types simples et composés de Python.

:::

## Les types simples

Un objet de type simple ne stocke qu'une donnée.

- entier(`int`): `1` `12` `-4`
- nombre flottant(`float`): `1.1` `12.0` -25E2`  
- chaîne de caractères(`str`): `"Du texte"` `'Un autre texte'`
- booléen(`bool`): `True` `False`
  
## Les types construits

Les types construits permettent de stocker des collections de données.

- tableau(`list`): `l = [1, 12, -4]`
  
  On accède aux éléments du tableau par **index**. `l[2]` → `-4`

- dictionnaire(`dict`): `d = {"nom": "Gaston", "age": 25}`

  On accède aux éléments du dictionnaire par **clef**. `d["age"]` → `25`

## Méthode d'itérations

### Itération sur une liste

On peut itérer sur les valeurs ou sur les index.

1. Itération sur les valeurs

On fait une itération sures valeurs du tableau en utilisant le mot-clé `in`.

```python
for val in ma_liste:
    print(val)
```

2. Itération sur les index

C'est la méthode classique utilisée dans les langages impératifs. Ayant accès à l'index on a également accès la valeur.

```python
for i in range(len(ma_liste)):
    val = ma_liste[i]
    print("indice:", i, "valeur:", val)
```

### Itération sur les dictionnaires

Les dictionnaires étant des associations de clés(key) et de valeurs(value), on peut itérer sur les clés, les valeurs, ou les deux.

1. Itération sur les clés: `keys()`

   ```python
   for key in D.keys():
       print(key)
   ```
 
   Ou plus simplement.
 
   ```python
   for key in D:
       print(key)
   ```

2. Itération sur les valeurs: `values()`

   ```python
   for value in D.values():
       print(value)
   ```

3. Itération sur les paires clé, valeurs: `items()`

   ```python
   for key, value in D.items():
       print(key, '=>', value)
   ```
