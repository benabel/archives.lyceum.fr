---
"tags": ["Python", "algorithmique", "Recherche des k plus proche voisins"]
---

::: programme
+--------------------------+-----------------------------------+-------------------------------------+
|         Contenus         |        Capacités attendues        |            Commentaires             |
+==========================+===================================+=====================================+
| Algorithme des k plus    | Écrire un algorithme qui prédit   | Il s’agit d’un exemple d’algorithme |
| proches voisins          | la classe d’un élément en         | d’apprentissage.                    |
|                          | fonction de la classe majoritaire |                                     |
|                          | de ses k plus proches voisins.    |                                     |
+--------------------------+-----------------------------------+-------------------------------------+
:::

Dans ce chapitre nous abordons un algorithme dit d’**apprentissage automatique** qui permet à un programme d’apprendre à classer des « objets » en utilisant un jeu de données pour qu’il y trouve des similarités.

C’est un algorithme simple de *« machine learning »* un sujet très en vogue à l’heure actuelle dans le domaine de l’informatique.


## Principe

### Principe de l'apprentissage supervisé

A l'heure actuelle, l'intelligence artificielle se base souvent sur l'utilisation de données annotées que l'on fournit à l'ordinateur pour qu'il y trouve des similarités(c'est ce que l'on appele de l'apprentissage supervisé).

::: example
On peut fournir à un programme une grande quantité d'écritures de chiffres.

Le programme va lire toutes les données, et grâce à des algorithmes plus ou moins évolués, le programme va trouver les points communs entre les chiffres représentant le même nombre.
<a title="Josef Steppan / CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)" href="https://commons.wikimedia.org/wiki/File:MnistExamples.png"><img width="512" alt="MnistExamples" src="https://upload.wikimedia.org/wikipedia/commons/2/27/MnistExamples.png"></a>

Ensuite, on peut donner au programme une image non annotée, et il nous dira s'il s'agit d'un 1, d'un 6 ou d'un 8...

C'est un système qui est utilisé depuis des années pour la lecture des codes postaux sur les lettres avec un efficacité supérieure à 99%.
:::


### Principe l'algorithme des k plus proches voisins

On dispose d'une collection de données annotées, et on veut savoir à quelle catégorie appartient un nouvel échantillon. Il s'agit d'un problème de **classification**.

Prenons l'exemple suivant issu de cette [page](https://nadjarebinguet.wordpress.com/2020/03/20/algorithme-des-k-plus-proches-voisins/).

> Imaginons… On étudie des papillons. Ceux-ci ont une certaine largeur et une certaine longueur. Certains sont des males, d’autres des femelles.
>
> On étudie un certain nombre de ces papillons. Cela constitue un jeu d’apprentissage dont les caractéristiques sont représentées ci-dessous.
>
> A partir de ce jeu d’apprentissage, on cherche à prédire le sexe d’un papillon dont on connaît les dimensions.

>![Classification des papillons](./img/geogebra-papillons.png)

> L’objectif est maintenant d’identifier le sexe d’un nouveau papillon en s’appuyant sur notre expérience précédente.
>
> **Le principe est simple : On fait l’hypothèse que notre papillon a le même sexe que ces voisins.**

On voit par exemple que le voisin le plus proche est un paillon mâle:

![k=1](./img/geogebra-1voisin.png)

Cependant la particularité de l'algorithme des k plus proches voisins est le fait que l'on puisse choisir $k$, le nombre de plus proches voisins nous permettant de faire notre choix, on va prendre plusieurs voisins pour éviter de se baser que sur une observation pour notre choix.

Voici par exemple l'application pour $k=5$:

![k=5](./img/geogebra-5-voisins.png)
 
::: {.appli titre='Influence du nombre de voisins'}
En utilisant ce fichier [geogebra](https://www.geogebra.org/m/zhbhycsh) montrer comment le choix de $k$ a une influence sur la prévision de la méthode.

:::

## Implémentation naïve en Python

Le code qui suit utilise des méthodes de `pandas` `matplotlib` et `numpy` non vues, il n'est pas nécessaire de savoir le refaire, par contre en utilisant les commentaires vous pouvez voir comment est effctuée la classification dans cet implémentation.


### Classification d'élèves en conseil de classe

Nous allons utiliser un fichier `csv` qui contient les *moyennes, absences et mentions d'élèves de lycée*.

Vous pouvez visualiser ce fichier ici: https://github.com/heoinfo/k-plus-proches-voisins/blob/master/data/mentions-anonymised.csv

A partir de ce fichier de données **l'algorithme sera capable de vous indiquer quelle sera votre mention (Félicitations, compliments...)** en fonction de notre moyenne générale et notre nombre d'absences.

### Tracé de la classification

Commencons par observer l'ensemble des données sous forme graphique pour se faire une idée.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
%matplotlib inline
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
```

</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# données du conseil de classe 
df = pd.read_csv('./data/mentions-anonymised.csv')

# On affiche 3 échantillons du tableau
df.sample(3)

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
      <th>Mentions</th>
      <th>1/2j abs</th>
      <th>Rang</th>
      <th>Moyenne Générale</th>
      <th>PHILOSOPHIE</th>
      <th>HISTOIRE-GEOGRAPHIE</th>
      <th>MATHEMATIQUES</th>
      <th>PHYSIQUE-CHIMIE</th>
      <th>SCIENCES VIE &amp; TERRE</th>
      <th>ED.PHYSIQUE &amp; SPORT.</th>
      <th>...</th>
      <th>ESPAGNOL LV2</th>
      <th>ITALIEN LV2</th>
      <th>JAPONAIS LV2</th>
      <th>SPECIALITE SVT</th>
      <th>SPECIALITE PHYS</th>
      <th>NISSART LV3</th>
      <th>SPECIALITE MATHS</th>
      <th>SPECIALITE ISN</th>
      <th>arts fac</th>
      <th>ENS. MORAL &amp; CIVIQUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>59</th>
      <td>Encouragements</td>
      <td>16.0</td>
      <td>20.0</td>
      <td>12.1</td>
      <td>13.5</td>
      <td>NaN</td>
      <td>12.4</td>
      <td>9.0</td>
      <td>11.0</td>
      <td>18.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>12.1</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>N.Not</td>
      <td>13.7</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Félicitations</td>
      <td>9.0</td>
      <td>3.0</td>
      <td>17.8</td>
      <td>18.5</td>
      <td>18.5</td>
      <td>18.9</td>
      <td>20.0</td>
      <td>17.6</td>
      <td>12.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>17.3</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>16.3</td>
      <td>18.7</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>68</th>
      <td>Encouragements</td>
      <td>2.0</td>
      <td>24.0</td>
      <td>12.3</td>
      <td>13.7</td>
      <td>12.5</td>
      <td>12.4</td>
      <td>11.5</td>
      <td>12.0</td>
      <td>15.5</td>
      <td>...</td>
      <td>NaN</td>
      <td>14.5</td>
      <td>NaN</td>
      <td>11.1</td>
      <td>NaN</td>
      <td>16.9</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>14.0</td>
    </tr>
  </tbody>
</table>
<p>3 rows × 22 columns</p>
</div>


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# on ne conserve que 3 colonnes pour cette étude simplifiée
df =  df.loc[:, ['Moyenne Générale', '1/2j abs', 'Mentions']]
df
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
      <th>Moyenne Générale</th>
      <th>1/2j abs</th>
      <th>Mentions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>17.4</td>
      <td>3.0</td>
      <td>Félicitations</td>
    </tr>
    <tr>
      <th>1</th>
      <td>18.1</td>
      <td>5.0</td>
      <td>Félicitations</td>
    </tr>
    <tr>
      <th>2</th>
      <td>18.2</td>
      <td>NaN</td>
      <td>Félicitations</td>
    </tr>
    <tr>
      <th>3</th>
      <td>17.0</td>
      <td>1.0</td>
      <td>Félicitations</td>
    </tr>
    <tr>
      <th>4</th>
      <td>17.6</td>
      <td>2.0</td>
      <td>Félicitations</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>91</th>
      <td>9.0</td>
      <td>12.0</td>
      <td>Encouragements</td>
    </tr>
    <tr>
      <th>92</th>
      <td>9.4</td>
      <td>14.0</td>
      <td>Pas de mention</td>
    </tr>
    <tr>
      <th>93</th>
      <td>7.7</td>
      <td>49.0</td>
      <td>Pas de mention</td>
    </tr>
    <tr>
      <th>94</th>
      <td>12.3</td>
      <td>32.0</td>
      <td>Pas de mention</td>
    </tr>
    <tr>
      <th>95</th>
      <td>11.7</td>
      <td>33.0</td>
      <td>Pas de mention</td>
    </tr>
  </tbody>
</table>
<p>96 rows × 3 columns</p>
</div>


</div>

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def tracé_graph():
    for mention in ["Pas de mention","Encouragements", "Compliments", "Félicitations"]:
        df_mention = df.loc[df["Mentions"] == mention]
        plt.scatter(df_mention["1/2j abs"], df_mention["Moyenne Générale"], label=mention, alpha=0.5)
    plt.legend()
tracé_graph()
```

</div>


![png](cours_files/cours_4_0.png){width=100%}


On voit bien le groupe des **Félicitations** se dégager avec des hautes notes et peu d'absences, ainsi que le groupe **Pas de mention** pour les absentéistes. Par contre la zone basse du graphique présente de nombreux points de divers mentions proches. 

### Implémentation de l'algorithme

Nous allons maintenant définir la fonction qui à partie de la moyenne et des absences données en argument renverra la mention des k plus proches voisins(par défaut: 3).

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
def k_plus_proches_voisins(moyenne, absences, k=3):
    """Renvoie la classe des k plus proches voisins
    
    Entrée:
        moyenne: moyenne de l'élève
        absences: nb de 1/2j d'absences lors du trimestre
        k: nombre de voisins les plus proches à utiliser(par défaut 3)
        
    Sortie:
        renvoie les classe la plus probable des k plus porches voisins"""
    
    # on commence par afficher notre point sur un graphique
    plt.scatter(absences, moyenne, label="Elève étudié", marker="P")
    
    # on crée une liste pour stocker les distances euclidiennes
    df['distance'] = df.apply(lambda row: ((row["Moyenne Générale"] - moyenne)**2 + (row["1/2j abs"] - absences)**2)**0.5, axis=1)
    # On affiche les trois plus courtes distances
    df_voisins = df.iloc[df.distance.sort_values().index[:k]]
    print(df_voisins)
    # on les marque sur le graph
    plt.scatter(df_voisins["1/2j abs"],
                df_voisins["Moyenne Générale"],
                label="Plus proches voisins", marker="*")
    # On ajoute tous les autres points
    tracé_graph()
    return df_voisins["Mentions"].value_counts().nlargest(1)
```

</div>

### Appels de la fonction

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
k_plus_proches_voisins(12.5, 10)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

        Moyenne Générale  1/2j abs        Mentions  distance
    32              12.3      11.0     Compliments  1.019804
    62              11.6       9.0  Pas de mention  1.345362
    66              11.4       9.0  Pas de mention  1.486607


</div>

-----

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    Pas de mention    2
    Name: Mentions, dtype: int64


</div>


![png](cours_files/cours_8_2.png){width=100%}


On observe donc que l'élève n'aurait pas de mention malgré ses 12.5 de moyenne, Voyons ce qu'il en est si on réduit le nombre d'absences à 5.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
k_plus_proches_voisins(12.5, 5)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

        Moyenne Générale  1/2j abs        Mentions  distance
    65              12.4       5.0  Encouragements       0.1
    46              12.9       5.0     Compliments       0.4
    58              12.5       4.0  Encouragements       1.0


</div>

-----

<div class="card">
<div class="card-header"><small class="text-muted">Résultat</small></div>


    Encouragements    2
    Name: Mentions, dtype: int64


</div>


![png](cours_files/cours_10_2.png){width=100%}


L'élève a maintenant les encouragements.

### Et vous, quelle serait votre mention?

L'algorithme et les données sont en ligne dans le dépôt suivant:

https://github.com/heoinfo/k-plus-proches-voisins

Vous pouvez *soit* télécharger le [dossier](https://github.com/heoinfo/k-plus-proches-voisins/archive/master.zip) pour travailler sur le code sur votre machine si vous avaez installé python et anconda chez vous.

Vous pouvez sinon travailler en ligne en lancant un environment [![Binder](http://mybinder.org/badge_logo.svg)](http://mybinder.org/v2/gh/heoinfo/k-plus-proches-voisins/master?filepath=index.ipynb).

::: {.appli titre="L'algorithme est-il efficace?"}
Reprendre vos bulletins de lycée pour vérifier si la prévision faite à partir de votre moyenne générale et de votre nombre de jours d'absences est conforme au résultat obtenu.

Vous pouvez éventuellement changer la valeur de $k$ pour améliorer les prédictions.

**Pour conclure:** Que diriez-vous de cette méthode? Peut-on vraiment qualifier cet algorithme d'*intelligence artificielle*? Voyez-vous des dangers à la prise de décisions par des algorithmes?
layout:::


## Notes sur l'algorithme

Cet algorithme(*brute-force*) est peu efficace avec une complexité de $O[D N^2]$(voir [doc sklearn](https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbor-algorithms)).

D'autres part, il serait bon de mettre à l'échelle les données utilisées, car on voit bien que l'échelle des absences est trois fois plus grande que les moyennes, et ainsi a un importance accrue dans le calcul de la distance des voisins.

## Références

- Cours de Nadja Rebinguet duquel est extrait l'exemple des papillons: https://nadjarebinguet.wordpress.com/2020/03/20/algorithme-des-k-plus-proches-voisins/

- Cette video de [Phillippe Bouchery sur le machine learning](https://www.youtube.com/watch?v=OEJX-q6UOag)

- Cours sur pixees.fr: https://pixees.fr/informatiquelycee/n_site/nsi_prem_knn.html
        
- Article Wikipedia: https://fr.wikipedia.org/wiki/M%C3%A9thode_des_k_plus_proches_voisins
        
- Doc sklearn: https://scikit-learn.org/stable/modules/neighbors.html#nearest-neighbor-algorithms

