---
tags: ["bug", "débogage"]
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

Durant la phase de conception d'un programme, on commence par écrire la spécification du programme
et écrire des jeux de tests pour valider le fonctionnement du programme.

La spécification décrit les entrées et sorties du programme, ainsi que leurs types, ce que l'on
appelle en anglais l'API_(Application Programming Interface)_ ou interface de programmation
applicative en français(peu courant).

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

Ou plus succinctement avec les annotations de type:

```python
def est_pair(n: int) -> bool:
    "Indique si un nombre est pair ou non"
    if n % 2 == 0:
        return True
    else:
        return False
```


Maintenant un ensemble de tests:

```python
assert est_pair(2) is True
assert est_pair(5) is False
assert est_pair(1381635162) is True
assert est_pair(-3565454165461) is False
# le is True est redondant
assert est_pair(4)
# le is False peut être écrit
assert not est_pair(5)
```

On peut également ajouter un message en cas d'erreur sur un test en le séparant par une virgule.

```python
assert est_pair(2) is True, "Le nombre deux n'a pas été reconnu comme pair"
```

Ainsi si la fonction présentait un jour une erreur, le programme s'arrêterait en levant l'exception
avec le message d'explication.

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError: Le nombre deux n'a pas été reconnu comme pair
```

:::

## Gestion des bugs

Lors de l'écriture de code Python, vous ferez fréquemment des erreurs, qui vous serons «gentiment»
rappelées par l'interpréteur Python à l'exécution du code.

### Erreurs les plus courantes en Python

En fonction des erreurs rencontrées, Python affiche des erreurs spécifiques qui vous aident à
comprendre quel est le problème dans votre programme.

Voici quelques erreurs courantes que vous devez apprendre à reconnaitre parmi les
[nombreuses exceptions](https://docs.python.org/fr/3/library/exceptions.html#exception-hierarchy)
de Python.

+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+
|     Type d'erreur     |    Objet Python    |                                Erreurs courantes                                 |                 Exemple                  |
+=======================+====================+==================================================================================+==========================================+
| Erreur de syntaxe     | `SyntaxError`      | Erreur de parenthèse,  `:` manquant avant un bloc   d'instruction....            | `len([1,2,3))`                           |
+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+
| Erreurs d'indexation  | `IndexError`       | Accès à un index non présent dans une liste.                                     | `[12,15,14][4]`                          |
|                       |                    | Accès à un index non présent dans une liste, ou un tuple, str...                 |                                          |
+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+
| Erreurs de nom        | `NameError`        | Nom de fonction ou de variable mal orthographié.                                 | `print(Bonjour) ` ou  `prout("Bonjour")` |
+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+
| Erreurs d'indentation | `IndentationError` | Indentation oubliée, ou trop grande, les blocs sont alors mal délimités.         |                                          |
+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+
| Erreurs de type       | `TypeError`        | Opération impossible entre deux types(str - int). Conversion de type impossible. | `"3" * "5"`                              |
+-----------------------+--------------------+----------------------------------------------------------------------------------+------------------------------------------+

Parfois ces erreurs nécessitent de modifier le code pour corriger le «bug».

D'autres fois ces erreurs nécessitent d'être gérées sans arrêter complétement le programme.

### Gestion des exceptions avec `try: ... except...`

Prenons l'exemple de la gestion d'une entrée utilisateur. Vous demandez l'âge d'une personne et
vous attendez un entier pour vérifier son accès.

Il faut lui reposer la question jusqu'à ce qu'il rentre une valeur conforme à nos attentes.

```python
age = int(input("Quel âge avez-vous? "))
if age >= 13:
  print("Vous pouvez vous inscrire")
else:
  print("Les réseaux sociaux sont interdits aux moins de 13 ans.")  
```

Si l'utilisateur répond `"seize ans"`, vous obtenez le message d'erreur suivant:

```
ValueError: invalid literal for int() with base 10: 'seize ans'
```

On va gérer cette erreur avec un `try`.

```python
try:
  age = int(input("Quel âge avez-vous? "))
except ValueError:
  print("Veuillez entrer votre âge sous forme de chiffres")
```

Le programme ne renvoie plus d'erreurs et ne s'arrête pas. On peut continuer à demander l'âge sans relancer le programme.

```
Quel âge avez-vous? treize ans
Veuillez entrer votre âge sous forme de chiffres
```

Un `while` peut permettre de reposer la question en cas de besoin.

```python
age = None
while not age: 
    try:
      age = int(input("Quel âge avez-vous? "))
    except ValueError:
      print("Veuillez entrer votre âge sous forme de chiffres")

# on est sures d'avoir un age entier ici
if age >= 13:
    print("Vous pouvez vous inscrire")
else:
    print("Les réseaux sociaux sont interdits aux moins de 13 ans.")
```

Voici un exemple d'interaction avec ce programme.

```
Quel âge avez-vous?  treize ans
Veuillez entrer votre âge sous forme de chiffres
Quel âge avez-vous?  13.5
Veuillez entrer votre âge sous forme de chiffres
Quel âge avez-vous?  13
Vous pouvez vous inscrire
```

::: plus

Attention à gérer les exceptions avec précaution ou vous risquez d'introduire des bugs qui
n'arrêteront pas le programme et resteront donc «invisibles».

:::
