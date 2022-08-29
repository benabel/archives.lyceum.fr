---
"tags": ["python", "pandas"]
---

::: programme
+----------------------+------------------------------------+-----------------------------------+
|       Contenus       |        Capacités attendues         |           Commentaires            |
+======================+====================================+===================================+
| Tri d’une table      | Trier une table suivant une        | Une fonction de tri intégrée au   |
|                      | colonne.                           | système ou à une bibliothèque     |
|                      |                                    | peut être utilisée.               |
+----------------------+------------------------------------+-----------------------------------+
| Fusion de tables     | Construire une nouvelle table      | La notion de domaine de valeurs   |
|                      | en combinant les données de        | est mise en évidence.             |
|                      | deux tables.                       |                                   |
+----------------------+------------------------------------+-----------------------------------+
:::

L'utilisation des données en table étant très largement répandue, une bibliothèque spécialisée s'est développée et imposée dans le monde de python [`pandas`](https://pandas.pydata.org/).

Cette libraire va grandemant nous faciliter la lecture et l'utilisation des données.

## Lecture d'un fichier `csv`

Par exemple la lecture csv à partir d'une url, on utilise ici la [Cartographie des stationnements deux roues de Nice](https://www.data.gouv.fr/fr/datasets/cartographie-des-stationnements-deux-roues-de-nice/) mise à disposition sur le site gouvernemental: <https://data.gouv.fr> avec la description suivante:

> Vous trouverez ici la cartographie des stationnements deux roues. Table des données SIG relatives aux GAV-GAM et GAV/GAM nb : GAV = Garage à Vélo + GAM = Garage à Moto Code profil 1 = GAM; Code profil 2 = GAV, Code profil 0 = GAV-GAM



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
import pandas as pd

# on importe les données dans un variable appelée df pou dataframe(le nom de la variable vous appartient)
df = pd.read_csv("https://www.data.gouv.fr/fr/datasets/r/d2adbc7e-8526-43f8-9b30-51dc44f1b430", sep=";")

# on affiche les 5 premières lignes
df.head(5)
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>NB_ARC_VL</th>
      <th>ID_GAV</th>
      <th>NB_PL_MT</th>
      <th>LARGEUR</th>
      <th>GLOBALID</th>
      <th>TYPE_MOBIL</th>
      <th>PROFIL</th>
      <th>LONGUEUR</th>
      <th>ETAT_</th>
      <th>CODE_INSEE</th>
      <th>NB_PL_VL</th>
      <th>NB_PLACE</th>
      <th>NB_ARC_MT</th>
      <th>geometry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.0</td>
      <td>1001</td>
      <td>30.0</td>
      <td>0.65</td>
      <td>{578A7D02-A426-4AA0-99C6-D2C1FBED8814}</td>
      <td>4.0</td>
      <td>1</td>
      <td>21.2</td>
      <td>En vigueur</td>
      <td>6088</td>
      <td>0.0</td>
      <td>30.0</td>
      <td>0</td>
      <td>{"type": "Point", "coordinates": [7.21337219, ...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2.0</td>
      <td>2010</td>
      <td>3.0</td>
      <td>2.00</td>
      <td>{291C1D1B-2A1C-42B7-9D06-2877D62B2838}</td>
      <td>1.0</td>
      <td>0</td>
      <td>7.5</td>
      <td>En vigueur</td>
      <td>6088</td>
      <td>2.0</td>
      <td>5.0</td>
      <td>4</td>
      <td>{"type": "Point", "coordinates": [7.25311445, ...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.0</td>
      <td>2015</td>
      <td>12.0</td>
      <td>2.00</td>
      <td>{E002A4DF-3CD8-4F5F-9E87-721004924B1C}</td>
      <td>1.0</td>
      <td>1</td>
      <td>26.0</td>
      <td>En vigueur</td>
      <td>6088</td>
      <td>0.0</td>
      <td>12.0</td>
      <td>12</td>
      <td>{"type": "Point", "coordinates": [7.25608087, ...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.0</td>
      <td>2020</td>
      <td>3.0</td>
      <td>2.00</td>
      <td>{DD571B19-C522-4E1F-97E5-0841E6DE59E5}</td>
      <td>2.0</td>
      <td>0</td>
      <td>4.7</td>
      <td>En vigueur</td>
      <td>6088</td>
      <td>1.0</td>
      <td>4.0</td>
      <td>0</td>
      <td>{"type": "Point", "coordinates": [7.25171699, ...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.0</td>
      <td>2024</td>
      <td>7.0</td>
      <td>2.00</td>
      <td>{1710D778-67BF-45ED-B3F5-399B82088C5A}</td>
      <td>2.0</td>
      <td>0</td>
      <td>12.0</td>
      <td>En vigueur</td>
      <td>6088</td>
      <td>3.0</td>
      <td>10.0</td>
      <td>0</td>
      <td>{"type": "Point", "coordinates": [7.25427638, ...</td>
    </tr>
  </tbody>
</table>
</div>


</div>

## Exploration des données

On peut également facilement afficher le nom des colonnes avec l'attribut `columns`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
df.columns
```

</div>

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    Index(['NB_ARC_VL', 'ID_GAV', 'NB_PL_MT', 'LARGEUR', 'GLOBALID', 'TYPE_MOBIL',
           'PROFIL', 'LONGUEUR', 'ETAT_', 'CODE_INSEE', 'NB_PL_VL', 'NB_PLACE',
           'NB_ARC_MT', 'geometry'],
          dtype='object')


</div>

On peut facilement parcourir l'ensemble des lignes du tableau avec la méthode `itertuples()`.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for ligne in df.itertuples():
    # On s'arrête à la troisième ligne pour pas encombrer le cours
    # Commenter ces deux lignes pour parcourir l'ensmble du tableau
    if ligne.Index > 2:
        break
    print(ligne)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Pandas(Index=0, NB_ARC_VL=0.0, ID_GAV='1001', NB_PL_MT=30.0, LARGEUR=0.65, GLOBALID='{578A7D02-A426-4AA0-99C6-D2C1FBED8814}', TYPE_MOBIL=4.0, PROFIL=1, LONGUEUR=21.2, ETAT_='En vigueur', CODE_INSEE=6088, NB_PL_VL=0.0, NB_PLACE=30.0, NB_ARC_MT=0, geometry='{"type": "Point", "coordinates": [7.21337219, 43.66717783]}')
    Pandas(Index=1, NB_ARC_VL=2.0, ID_GAV='2010', NB_PL_MT=3.0, LARGEUR=2.0, GLOBALID='{291C1D1B-2A1C-42B7-9D06-2877D62B2838}', TYPE_MOBIL=1.0, PROFIL=0, LONGUEUR=7.5, ETAT_='En vigueur', CODE_INSEE=6088, NB_PL_VL=2.0, NB_PLACE=5.0, NB_ARC_MT=4, geometry='{"type": "Point", "coordinates": [7.25311445, 43.69461128]}')
    Pandas(Index=2, NB_ARC_VL=0.0, ID_GAV='2015', NB_PL_MT=12.0, LARGEUR=2.0, GLOBALID='{E002A4DF-3CD8-4F5F-9E87-721004924B1C}', TYPE_MOBIL=1.0, PROFIL=1, LONGUEUR=26.0, ETAT_='En vigueur', CODE_INSEE=6088, NB_PL_VL=0.0, NB_PLACE=12.0, NB_ARC_MT=12, geometry='{"type": "Point", "coordinates": [7.25608087, 43.6951747]}')


</div>

-----

Chaque ligne renvoyée par la méthode `itertuples()` est un tuple nommé, on peut ainsi accéder accéder aux valeurs individuelles de chaque ligne avec la notation pointée `ligne.nom_de_la_colonne`. Par exemple pour afficher le nombre d'arcs du stationnement.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for ligne in df.itertuples():
    # On s'arrête à la troisième ligne pour pas encombrer le cours
    # Commenter ces deux lignes pour parcourir l'ensmble du tableau
    if ligne.Index > 2:
        break
    print("Nombre d'arcs de stationnement pour vélos:", ligne.NB_ARC_VL)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Nombre d'arcs de stationnement pour vélos: 0.0
    Nombre d'arcs de stationnement pour vélos: 2.0
    Nombre d'arcs de stationnement pour vélos: 0.0


</div>

-----

## Sélection logique de données

Supposons que l'on cherche des stationnements destinés aux vélos.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
for ligne in df.itertuples():
    # On s'arrête à la troisième ligne pour pas encombrer le cours
    # Commenter ces deux lignes pour parcourir l'ensmble du tableau
    if ligne.Index > 2:
        break
    if ligne.NB_ARC_VL > 0:
        print(ligne.Index, ligne.NB_ARC_VL)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    1 2.0


</div>

-----

Effectivement parmi les trois premières lignes seul la ligne d'index 1(la deuxième) présente des arcs de stationnement pour vélos.

Pour explorer davantage cette table de données, passez aux [exercices](./exo).

## Liens

La librairie `pandas` est extrémemnt riche et seul son utilisation sur des cas concrets permet d'en comprendre les rouages.

Pour plus d'informations, vous pouvez consulter:

- la [documentation](https://pandas.pydata.org/pandas-docs/stable/)
- la fiche de [rappels](https://github.com/pandas-dev/pandas/blob/master/doc/cheatsheet/Pandas_Cheat_Sheet.pdf),
- ou encore voir ce qu'arrive à faire les kagglers avec les données en consultatnt des [exemples de notebooks](https://www.kaggle.com/kernels?sortBy=relevance&group=everyone&search=pandas&page=1&pageSize=20) sur le site  <https://kaggle.com>.
