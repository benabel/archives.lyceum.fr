---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
---

::: programme

+----------------------+--------------------------------+-------------------------------------+
|       Contenus       |      Capacités attendues       |            Commentaires             |
+======================+================================+=====================================+
| Recherche textuelle. | Étudier l’algorithme de Boyer- | L’intérêt du prétraitement du motif |
|                      | Moore pour la recherche d’un   | est mis en avant.                   |
|                      | motif dans un texte.           |                                     |
|                      |                                | L’étude du coût, difficile, ne peut |
|                      |                                | être exigée.                        |
+----------------------+--------------------------------+-------------------------------------+

:::


> La recherche d'une sous-chaine a des applications importantes en informatiques, par exemple dans
les moteurs de recherche. Nous commencerons par une application naïve puis nous verrons qu'il est
bien plus efficace de faire la recherche en sens inverse en partant du dernier caractère du mot
pour ne pas tester toutes les positions.

## Algorithme naïf

Nous allons appliquer une méthode itérative brute pour rechercher une sous-chaine dans une chaine
de caractères.

Nous allons avancer dans le texte caractère par caractère, puis si le caractère considéré
correspond au premier caractère du mot, nous comparerons les caractères suivants à ceux du mot. si
la recherche s'avère fructueuse on renvoie `True`.

```python
def recherche_mot(texte, mot):
    """Recherche un mot dans un texte

    Arguments
    ---------
    texte: str
        le texte dans lequel on effectue la recherche
    mot: str
        le mot recherché

    Returns
    -------
    bool
        renvoie True si le mot est trouvé
    """
    N = len(texte)
    n = len(mot)
    for i in range(N-n+1):
        trouvé = True
        while recherche and k < n:
            if mot[k] != texte[i+k]
                recherche = False
            k += 1
        if recherche:
            return True
    return False
```

L'exécution est relativement lente, la fonction doit tester $N-n$ positions dans `texte` et pour
chacune effectuer jusqu'à $N-n$ comparaisons, soit jusqu'à $(N-n)\times n$.

La complexité de cet algorithme est dans le pire des cas $O\left( (N-n) \times n \right )$, c'est
une complexité quadratique $O\left( N^2 \right )$ car souvent $N >> n$.

Nous allons voir qu'il est beaucoup plus efficace de faire la recherche à l'envers à partir de la fin du mot.

## L'algorithme de Boyer-Moore : version simplifiée de Horspool

Nous allons étudier une version simplifiée du meilleur algorithme connu : l'algorithme de
Boyer-Moore qui a été proposé par Nigel Horspool.

Cet algorithme repose sur deux idées :

1. On compare le mot de droite à gauche à partir de sa dernière lettre.
2. On n'avance pas dans le texte caractère par caractère, mais on utilise un décalage dépendant de
   la dernière comparaison effectuée.

### Déroulement de l'algorithme

Nous considérons ici la recherche du motif `mot = 'dab'` dans le texte `texte = 'abracadabra'`.

On commence la recherche à l'index 2 :

```
abracadabra
dab
```

Il n'y a pas de correspondance à la fin du mot : `'r' != 'b'`, donc on avance, mais de combien de caractères
avance-t-on. Pour le décider, on utilise le fait que le caractère `'r'` n'apparait pas dans le mot
cherché, donc on peut avancer de `n = len(mot) = 3` caractères sans crainte de rater le mot.

On recherche donc à l'indice 2 + 3 = 5 :

```
abracadabra
   dab
```

Il n'y a pas de correspondance à la fin du mot : `'a' != 'b'`, donc on avance, cependant, cette
fois, comme le caractère `'a'` apparait pas dans le mot cherché en avant-dernière position, on ne
peut avancer que de une case pour faire une comparaison en alignant les `'a'`.

On recherche donc à l'indice 5 + 1 = 6 :

```
abracadabra
    dab
```

Il n'y a pas de correspondance à la fin du mot : `'d' != 'b'`, donc on avance, cependant, cette
fois, comme le caractère `'d'` apparait dans le mot cherché en avant-avant-dernière
position(_première position, mais on doit lire à l'envers !_), on avance de deux cases pour faire
une comparaison en alignant les `'d'`.

On recherche donc à l'indice 6 + 2 = 8 :

```
abracadabra
      dab
```

Maintenant lorsqu'on effectue les comparaisons à l'envers : les `'b'`, puis les `'a'`, puis les
`'d'` correspondent. On a trouvé le mot on renvoie `VRAI`.

### Implémentation en Python

Pour implémenter efficacement cet algorithme, on va passer par un pré-traitement du nom pour
facilement accéder au décalage à effectuer. On utilise un dictionnaire pour cela.

```python
def pre_traitement(mot):
    """Renvoie un dictionnaire avec pour clé la lettre et pour valeur le décalage

    Arguments
    ---------
    mot: str
    
    Returns
    -------
    dict
    """
    n = len(mot)
    décalages = {}
    # Il n'est pas nécéssaire d'inclure la dernière lettre
    for i, letter in enumerate(mot[:-1]):
        décalages[letter] = n - i -1
    return décalages

# tests
assert pre_traitement("dab") == {'d': 2, 'a': 1}
assert pre_traitement("maman") == {'m': 2, 'a': 1}
```

Maintenant la fonction de recherche :

```python
def recherche_mot_boyer(texte, mot):
    """Recherche un mot dans un texte avec l'algo de boyer-moore

    Arguments
    ---------
    texte: str
        le texte dans lequel on effectue la recherche
    mot: str
        le mot recherché

    Returns
    -------
    bool
        renvoie True si le mot est trouvé
    """
    N = len(texte)
    n = len(mot)
    
    # création de notre dictionnaire de décalages
    décalages = pre_traitement(mot)
    
    # on commence à la fin du mot
    i = n - 1
    while i < N:
        lettre = texte[i]
        if lettre == mot[-1]:
            # On vérifie que le mot est là avec un slice sur texte
            # On pourrait faire un while
            if texte[i-n+1:i+1] == mot:
                return True
        # on décale
        if lettre in décalages.keys():
            i += décalages[lettre]
        else:
            i += n
        
    return False

# Quelques tests
assert recherche_mot_boyer('abracadabra', 'dab')
assert recherche_mot_boyer('abracadabra', 'abra')
assert recherche_mot_boyer('abracadabra', 'obra') == False
assert recherche_mot_boyer('abracadabra', 'bara') == False
assert recherche_mot_boyer('maman est là', 'maman')
assert recherche_mot_boyer('bonjour maman', 'maman')
assert recherche_mot_boyer('bonjour maman', 'papa') == False
```

::: appli

Copier et tester ce code dans votre environnement, puis :

1. Ajouter des tests avec des cas limites.
2. Remplacer `if texte[i-n+1:i+1] == mot:return True` par une boucle `while`, qui lit les
   caractères de droite à gauche et retourne `True` si tous les caractères de `texte` et de `mot`
   correspondent à la position `i` considéré.

:::

::: ref

- [Informatique MP-PC-PT-PSI](https://editions.lavoisier.fr/etudes-superieures/informatique-mp-pc-pt-psi/preaux/tec-et-doc/le-tout-en-un/livre/9782743022976)
- [Ressources pour la NSI sur eduscol](https://eduscol.education.fr/cid144156/nsi-bac-2021.html)

[wikipedia]: https://fr.wikipedia.org/wiki/Diviser_pour_r%C3%A9gner_(informatique)

:::

