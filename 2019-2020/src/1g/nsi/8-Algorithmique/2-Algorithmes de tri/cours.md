---
"tags": ["tri par sélection", "tri par insertion"]
---

::: programme
+--------------------------+-----------------------------------+-------------------------------------+
|         Contenus         |        Capacités attendues        |            Commentaires             |
+==========================+===================================+=====================================+
| Tris par insertion, par  | Écrire un algorithme de tri.      | La terminaison de ces algorithmes   |
| sélection                |                                   | est à justifier.                    |
|                          |                                   |                                     |
|                          | Décrire un invariant de boucle    | On montre que leur coût est         |
|                          | qui prouve la correction des tris | quadratique dans le pire cas.       |
|                          | par insertion, par sélection.     |                                     |
+--------------------------+-----------------------------------+-------------------------------------+
:::


Maintenant que nous disposons de tableaux pour stocker de grandes quantités de données, il faut qu'on apprenne à les classer. Il existe de nombreux algorithmes de tri plus ou moins efficaces, qui sont pour la plupart répertoriées dans _The Art of Computer Programming, Volume 3, Sorting and Searching._ de Knuth, Donald. E. [1998]. Le livre de chevet de tout programmeur.

## Problématique

> Comment ranger des données afin de faciliter leur accès futur ? C'est par exemple l'ordre alphabétique du dictionnaire, où les mots sont rangés dans un ordre logique qui permet de ne pas devoir parcourir tout l'ouvrage pour retrouver une définition. Ce peut être aussi l'ordre intuitif dans lequel un joueur de cartes va ranger son jeu afin de limiter le temps de recherche pendant le déroulement de la partie. Cette problématique permet d'introduire la notion de tri (avec plusieurs sens distincts : séparer, ordonner, choisir), puis d'étudier différents algorithmes de tri. Le tri permet essentiellement d'accélérer les recherches, grâce à l'algorithme de recherche dichotomique.

[Source eduscol](http://cache.media.eduscol.education.fr/file/ISN_Tle_S/29/6/lyceeGT_ressource_ISN_20_06_Tle_S_14_Vous_avez_dit_trier_1_algorithmes_218296.pdf)

### Situation d'accroche

Un joueur de cartes reçoit 9 cartes lors de la donne en début de partie ; il les trie ensuite pour faciliter la lecture de son jeu.

- Comment procède-t-il exactement pour réaliser cette opération ?
- Y a-t-il plusieurs façons de procéder :

Vous rendre sur cette page sur laquelle vous est proposé un jeu de cartes à trier:

<https://heoinfo.github.io/order-cards-game/>.

Réalisez les consignes suivantes dans l'ordre.

1. **Consigne n° 1:** « triez les cartes » en notant le nombre d'opérations nécessaires au tri, recommencer l'opération pour voir si le nombre de tours d'algorithmes varie, et de quoi peut dépendre ce nombre. Ensuite seulement,
2. **Consigne n° 2:** « décrivez par écrit la façon précise dont vous vous y êtes pris pour effectuer le tri ».
3. **En plus:** imaginez d'autres méthodes qui pourraient être plus efficaces pour effectuer le tri.


### Implémentations en python

Nous allons maintenant voir comment implémenter deux algorithmes de tri pas forcément très efficaces, mais relativement simples en python:

- le tri par sélection
- le tri par insertion

### Créer une liste de données aléatoire

Commencer par créer des données de façon aléatoire grâce au module `random` afin de pouvoir les classer.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Importer le module random pour créer des nombres au hasard
import random

def genere_liste_aleatoire(N, n):
    """Génére une liste aléatoire de N éléments compris entre 0 et n"""
    # Créer une liste vide pour accueillir les nombres
    data = []
    # ajoute les éléments aléatoires dans la liste
    for i in range(N):
        data.append(random.randrange(n))
    return data

# Création d'une liste de 50 valeurs comprises entre 0 et 100
liste_aléatoire = genere_liste_aleatoire(50, 100)
print(liste_aléatoire)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    [75, 37, 17, 94, 63, 40, 17, 4, 83, 46, 33, 53, 37, 93, 22, 75, 82, 46, 31, 64, 48, 80, 69, 83, 85, 49, 1, 58, 80, 88, 47, 22, 95, 13, 38, 19, 7, 24, 22, 72, 50, 43, 5, 66, 49, 17, 89, 77, 87, 96]


</div>

-----

## Le tri par sélection
### Principe
> Sur un tableau de n éléments (numérotés de 0 à n), le principe du tri par sélection est le suivant :
- rechercher le plus petit élément du tableau, et l'échanger avec l'élément d'indice 0 ;
- rechercher le second plus petit élément du tableau, et l'échanger avec l'élément d'indice 1 ;
- continuer de cette façon jusqu'à ce que le tableau soit entièrement trié.

[Source Wikipedia](http://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection)

### Illustration graphique

<a title="Joestape89 at the English language Wikipedia [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ASelection-Sort-Animation.gif"><img class="center" width="64" alt="Selection-Sort-Animation" src="//upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif"/></a>

### Illustration en vidéo

`youtube: Ns4TPTC8whw`

*Select-sort with Gypsy folk dance. Created at Sapientia University, Tirgu Mures (Marosvásárhely), Romania. Directed by Kátai Zoltán and Tóth László. In cooperation with "Maros Művészegyüttes", Tirgu Mures (Marosvásárhely), Romania.*{.cite-source}

### Implémentation en python

Voici un exemple de code implémentant cet algorithme de tri présentant l'état de la liste à chaque tour avancée dans le tableau. Vous pouvez voir que le tableau est bien classé en **plaçant systématiquement l'élément minimum du tableau restant à trier à la fin des éléments triés**.



------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Création d'une liste de 5 valeurs comprises entre 0 et 20 à trier
data = genere_liste_aleatoire(5, 20)
print("Liste initiale: ", data)

# Calculer la taille du tableau
N = len(data)
# Parcourir le tableau entier
for i in range(N):
    print('-' * 80)
    print("i= ", i)
    # Stocker la valeur initiale de la case d'indice i, et son indice
    minimum = data[i]
    i_min = i
    #  Parcourir le reste du tableau pour rechercher l'élément le plus petit restant
    for j in range(i, N):
        if data[j] < minimum:
            # Stocker la valeur du minimum et son indice
            minimum = data[j]
            i_min = j
    # Intervertir la valeur initiale de la case d'indice i et le minimum trouvé
    tmp = data[i]
    data[i] = minimum
    data[i_min] = tmp
    # Affiche les états intermédiaires de la liste
    print("Etat de la liste:", data)
    print("Éléments triés: ", data[:i+1], "Reste à trier: ", data[i+1:N])

print("Liste triée: ", data)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Liste initiale:  [11, 6, 7, 13, 2]
    --------------------------------------------------------------------------------
    i=  0
    Etat de la liste: [2, 6, 7, 13, 11]
    Éléments triés:  [2] Reste à trier:  [6, 7, 13, 11]
    --------------------------------------------------------------------------------
    i=  1
    Etat de la liste: [2, 6, 7, 13, 11]
    Éléments triés:  [2, 6] Reste à trier:  [7, 13, 11]
    --------------------------------------------------------------------------------
    i=  2
    Etat de la liste: [2, 6, 7, 13, 11]
    Éléments triés:  [2, 6, 7] Reste à trier:  [13, 11]
    --------------------------------------------------------------------------------
    i=  3
    Etat de la liste: [2, 6, 7, 11, 13]
    Éléments triés:  [2, 6, 7, 11] Reste à trier:  [13]
    --------------------------------------------------------------------------------
    i=  4
    Etat de la liste: [2, 6, 7, 11, 13]
    Éléments triés:  [2, 6, 7, 11, 13] Reste à trier:  []
    Liste triée:  [2, 6, 7, 11, 13]


</div>

-----

## Le tri par insertion

### Principe

> Dans l'algorithme, on parcourt le tableau à trier du début à la fin. Au moment où on considère le i-ème élément, les éléments qui le précèdent sont déjà triés. Pour faire l'analogie avec l'exemple du jeu de cartes, lorsqu'on est à la i-ème étape du parcours, le i-ème élément est la carte saisie, les éléments précédents sont la main triée et les éléments suivants correspondent aux cartes encore mélangées sur la table.

> L'objectif d'une étape est d'insérer le i-ème élément à sa place parmi ceux qui précèdent. Il faut pour cela trouver où l'élément doit être inséré en le comparant aux autres, puis décaler les éléments afin de pouvoir effectuer l'insertion. En pratique, ces deux actions sont fréquemment effectuées en une passe, qui consiste à faire « remonter » l'élément au fur et à mesure jusqu'à rencontrer un élément plus petit.

[Source Wikipedia](http://fr.wikipedia.org/wiki/Tri_par_insertion)

### Illustration graphique

<p><a href="http://commons.wikimedia.org/wiki/File:Insertion-sort-example-300px.gif#mediaviewer/File:Insertion-sort-example-300px.gif"><img class="center" alt="Insertion-sort-example-300px.gif" src="http://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif"></a><br>"<a href="http://commons.wikimedia.org/wiki/File:Insertion-sort-example-300px.gif#mediaviewer/File:Insertion-sort-example-300px.gif">Insertion-sort-example-300px</a>" by <a href="//commons.wikimedia.org/w/index.php?title=User:Swfung8&amp;action=edit&amp;redlink=1" class="new" title="User:Swfung8 (page does not exist)">Swfung8</a> - <span class="int-own-work">Own work</span>. Licensed under <a title="Creative Commons Attribution-Share Alike 3.0" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>

### Illustration en vidéo

`youtube: ROalU379l3U`

*Insert-sort with Romanian folk dance. Created at Sapientia University, Tirgu Mures (Marosvásárhely), Romania. Directed by Kátai Zoltán and Tóth László. In cooperation with "Maros Művészegyüttes", Tirgu Mures (Marosvásárhely), Romania.*{.cite-source}

### Implémentation en python

Voici un exemple d'implémentation ou le tableau est parcouru de la gauche vers la droite, observer bien ou est placée la valeur à insérer à chaque tour de la boucle.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Création d'une liste de 5 valeurs comprises entre 0 et 20 à trier
data = genere_liste_aleatoire(5, 100)
print("Liste initiale: ", data)

# Parcourir l'ensemble de la liste à partir de la deuxième case
for i in range(1, len(data)):
    print('-' * 80)
    print("i= ", i)
    # Stocker la valeur à "insérer"
    val = data[i]
    print("Valeur à insérer:", val)
    # Parcourir le tableau déjà trié de dimension i-1 vers la gauche
    # jusqu'à rencontrer une valeur inférieure à notre valeur à insérer
    j = i - 1
    while data[j] > val and j >=0:
        # Intervertir  les valeurs aux indices j et j+1
        data[j+1] = data[j]
        data[j] = val
        # Diminuer j de 1 pour la prochaine comparaison
        j = j - 1
        print("On remonte la valeur <-", data)
    print("Etat intérmédiaire de la liste: ", data)
# Afficher le résultat
print('\nListe triée:')
print(data)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    Liste initiale:  [58, 48, 69, 37, 65]
    --------------------------------------------------------------------------------
    i=  1
    Valeur à insérer: 48
    On remonte la valeur <- [48, 58, 69, 37, 65]
    Etat intérmédiaire de la liste:  [48, 58, 69, 37, 65]
    --------------------------------------------------------------------------------
    i=  2
    Valeur à insérer: 69
    Etat intérmédiaire de la liste:  [48, 58, 69, 37, 65]
    --------------------------------------------------------------------------------
    i=  3
    Valeur à insérer: 37
    On remonte la valeur <- [48, 58, 37, 69, 65]
    On remonte la valeur <- [48, 37, 58, 69, 65]
    On remonte la valeur <- [37, 48, 58, 69, 65]
    Etat intérmédiaire de la liste:  [37, 48, 58, 69, 65]
    --------------------------------------------------------------------------------
    i=  4
    Valeur à insérer: 65
    On remonte la valeur <- [37, 48, 58, 65, 69]
    Etat intérmédiaire de la liste:  [37, 48, 58, 65, 69]
    
    Liste triée:
    [37, 48, 58, 65, 69]


</div>

-----

## Autres algorithmes

Ces deux algorithmes ne sont que des exemples d'algorithmes de tri, et il en existe bien d'autres plus efficace comme le fameux *quicksort*, ou le *timsort* utilisé comme algorithme par défaut en Python.

La littérature ne manque pas sur ce sujet car il s'agit d'une introduction de choix à de nombreux concepts clés de l'algorithmique:

- **la complexité**: l'étude du temps et de la mémoire nécessité par l'algorithme.
- **les cas extremes** ou *edge cases*: que se passe-t-il dans le cas ou la liste est déjà triée, ou au contraire si elle est en ordre inversé.
- **la correction de l'algorithme**: comment prouver que l'algorithme donne le bon résultat en toute occasion par une *méthode de récurrence* mathématique.


Vous pouvez consulter cet article du site [interstices.info](https://interstices.info/jcms/c_6973/les-algorithmes-de-tri) pour en savoir plus.
