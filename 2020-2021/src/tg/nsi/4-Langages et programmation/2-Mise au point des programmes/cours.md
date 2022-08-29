---
tags: ["bug", "débugage"]
---

::: programme

+-------------------+----------------------------------+--------------------------------------+
|     Contenus      |       Capacités attendues        |             Commentaires             |
+===================+==================================+======================================+
| Mise au point des | Dans la pratique de la           | On prolonge le travail entrepris en  |
| programmes.       | programmation, savoir répondre   | classe de première sur l’utilisation |
|                   | aux causes typiques de bugs :    | de la spécification, des assertions, |
| Gestion des bugs. | problèmes liés au typage, effets | de la documentation des              |
|                   | de bord non désirés,             | programmes et de la construction     |
|                   | débordements dans les            | de jeux de tests.                    |
|                   | tableaux, instruction            |                                      |
|                   | conditionnelle non exhaustive,   | Les élèves apprennent                |
|                   | choix des inégalités,            | progressivement à anticiper leurs    |
|                   | comparaisons et calculs entre    | erreurs.                             |
|                   | flottants, mauvais nommage des   |                                      |
|                   | variables, etc.                  |                                      |
+-------------------+----------------------------------+--------------------------------------+

:::

> La mise au point du programme doit permettre au programme de répondre à une spécification, durant
> cette phase, le programmeur se doit de savoir répondre aux causes typiques de bugs.


## Spécification et tests

Durant la phase de conception d'un programme, on commence par écrire la spécification du programme,
et écrire des jeux de tests pour valider le fonctionnement du programme.

La spécification décrit les entrées et sorties du programme, ainsi que leurs types, ce que l'on
appelle en anglais l'API_(Application Programming Interface)_ ou interface de programmation
applicative en francais(peu courant).

Les tests vérifient que les sorties du programme sont conformes à ce que l'on attend.

::: example

Voici une fonction avec sa spécification.

```python
def est_pair(n):
    """Indique si un nombre est pair ou non

    Paramètres
    ----------
    n: int

    Returns
    -------
    bool
        True si n est pair, False sinon
    """
    if n % 2 == 0:
        return True
    else:
        return False
```

Maintenant un ensemble de tests:

```python
assert est_pair(2) == True
assert est_pair(5) == False
assert est_pair(1381635162) == True
assert est_pair(-3565454165461) == False
# le == True est redondant
assert est_pair(4)
# le == False peut être écrit
assert not(est_pair(5))
```

:::


## Documentation

Il est important de bien distinguer commenter et documenter.

- les _commentaires_ sont destinés au programmeur, pour expliquer ce que l'on a fait, pourquoi on
  l'a fait.

::: example

Dans un tri, on pourrait trouver le code suivant.

```python
# on part du deuxième élément car il est déjà trié
for i in range(1, len(tab)):
    ...
```

Le commentaire explique ce que l'on a fait, et évite de revenir en arrière si quelqu'un ne comprend
pas pourquoi on est parti de l'indice 1.

:::

- la _documentation_ est destinée aux utilisateurs, elle leur permet d'expliquer comment on utilise
  le programme du point de vue de l'utilisateur et non du programmeur.

En Python, la documentation se fait par l'écriture de
[Docstring](https://www.python.org/dev/peps/pep-0257/)s.

::: {.def terme="Docstring"}

Une docstring est une chaîne de caractère écrite en tant que première instruction dans une
définition de module, fonction, classe ou méthode. Une telle docstring devient l'attribut spécial
`__doc__` de cet objet, et pourra être affichée grâce à la fonction `help()`.

:::

::: example

On peut accéder à la Docstring de la fonction `est_pair` écrite précédemment comme ceci.

```python
help(est_pair)
```
 
Affiche :

```
Help on function est_pair in module __main__:

est_pair(n)
    Indique si un nombre est pair ou non
    
    Paramètres
    ----------
    n: int
    
    Returns
    -------
    bool
        True si n est pair, False sinon
```
:::

## Gestion des bugs

Lors de l'écriture de code Python, vous ferez fréquemment des erreurs, qui vous serons "gentiment"
rappelées par l'interpréteur Python à l'exécution du code.

Voici les erreurs les plus courantes :

- **Erreurs de syntaxe**: `SyntaxError` erreur de parenthèse, `:` manquant avant un bloc
  d'instruction.... ex: `len([1,2,3))`
- **Erreurs d'indexation**: `IndexError` accés à un index non présent dans une liste. ex:
  `[12,15,14][14],;`
- **Erreurs de nom**: `NameError` nom de fonction ou de variable mal orthographié. ex:
  `helpe(est_pair)`
- **Erreurs d'indentation**: `IndentationError` indentation oubliée, ou trop grande.
- **Erreurs de type** `TypeError` Opération impossible entre deux types. ex: `"3" * "5"`











