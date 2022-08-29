---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
---

::: programme

+------------------------------------+---------------------------------------------------------+
|            **Contenus**            |                 **Capacités attendues**                 |
+====================================+=========================================================+
| Boucles bornées et non bornées     | Écrire et développer des programmes pour répondre à des |
|                                    | problèmes et modéliser des phénomènes physiques,        |
| Définitions et appels de fonctions | économiques et sociaux.                                 |
+------------------------------------+---------------------------------------------------------+

:::

::: intro

<p><a href="https://commons.wikimedia.org/wiki/File:RepeatUntil.svg#/media/File:RepeatUntil.svg"><img class="half right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/RepeatUntil.svg/1200px-RepeatUntil.svg.png" alt="RepeatUntil.svg"></a><br>Image by Scratch is a project of the Scratch Foundation, in collaboration with the Lifelong Kindergarten Group at the MIT Media Lab. It is available for free at <a rel="nofollow" class="external free" href="https://scratch.mit.edu">https://scratch.mit.edu</a> - <a rel="nofollow" class="external free" href="http://scratchblocks.github.io">http://scratchblocks.github.io</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5" title="Creative Commons Attribution-Share Alike 2.5">CC BY-SA 2.5</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=85860811">Link</a></p>

> Dans ce chapitre, nous allons nous intéresser aux boucles qui permettent de **répéter** des
> instructions dans une programme, ainsi qu'aux fonctions qui permettent d'exécuter des portions de
> programme à la demande.

:::

## Les boucles


Les boucles permettent de **répéter** des blocs d'instructions.

Il en existe deux types:

- Les boucles bornées avec le mot-clé `for`.
- Les boucles non-bornées avec le mot-clé `while`.

### Les boucles bornées: `for`

Lorsqu'_on connait le nombre de répétitions_ à effectuer, on utilise la boucle `for` associée à la
fonction `range()`.

::: example

Pour répéter 7 fois un bloc d'instructions, on utilise:

```python
for i in range(7):
    print(i)
```

Affichera:

```
0
1
2
3
4
5
6
```

:::

::: plus

On peut aussi réaliser des boucles sur des types construits qui seront vus en [première](/1g/nsi/3-representation-des-donnees-types-construits).

- Sur des chaînes de caractères:

  ```python
  for lettre in "Bonjour!":
      print(i)
  ```
  
  Affichera:
  
  ```
  B
  o
  n
  j
  o
  u
  r
  !
  ```

- Sur des listes:

  ```python
  for premier in [2, 3, 5, 7, 11, 13]:
      print(premier)
  ```
  
  Affichera:
  
  ```
  2
  3
  5
  7
  11
  13
  ```

:::

### Les boucles non bornées: `while`

Lorsqu'_on ne connait pas le nombre de répétitions_ à effectuer, on utilise la boucle `while`
associée à une _variable de contrôle_.

::: example

Voici un programme qui permet de vérifier que votre compte n'est pas à découvert. Pour cela on
utilise la variable de contrôle `solde`.

```python
solde = 1000                # initialisation
while solde > 0:            # condition d'arrêt de la boucle
    débit = float(input("Entrez la somme à débiter: "))
    solde = solde - débit   # mise à jour de la variable de contrôle

# On sort de la boucle
print("Vous êtes à découvert")
```

:::

**Attention à bien vérifier que votre boucle finira par se terminer sinon votre programme rentrera
dans une boucle infinie, et il faudra obligatoirement le stopper.**

## Les fonctions

Il s'agit de blocs d'instructions exécutés à la demande, on les définit par le mot-clef `def`.

::: example
```python
def dit_bonjour(prenom):
    print("Bonjour " + prenom)
```

Nous venons de définir la fonction, mais pour l'instant, il ne se passe rien.

Pour exécuter le code de la fonction, il faut maintenant appeler la fonction avec un paramètre pour que l'exécuter.

```python
# on appelle la fonction avec l'argument Ada
dit_bonjour("Ada")
```

Affichera `"Bonjour Ada"`.
:::

Les fonctions peuvent renvoyer une valeur grâce au mot-clé `return`.

::: example

```python
def périmétre(rayon):
    p = 2*3.14*rayon
    return p
```

Cette fois-ci l'appel renverra la valeur du périmètre, on peut alors le stocker dans une variable.

```python
# on appelle la fonction avec l'argument 0.5
peri_05 = périmètre(0.5)
```

La variable `peri_05` contient la valeur renvoyée par l'appel de la fonction `3.14`.

:::

Une fonction peut accepter un nombre quelconque de paramètres, il suffit de les séparer par des
virgules.

::: examples

Avec deux paramètres. 

```python
def surface_rectangle(l, L):
    return l*L
# appel
surface_rectangle(2, 3) # renvoie 6
```

Avec aucun paramètre:

```python
import time
def affiche_heure():
    print(time.asctime())
# Pour l'appel on met les parénthèses même s'il n'y a pas d'arguments
affiche_heure()
# affiche: Mon Jan 18 10:16:43 2021 par exemple
```

:::
