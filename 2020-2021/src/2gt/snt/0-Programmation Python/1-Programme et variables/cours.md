---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
---

::: programme

+------------------------------------+---------------------------------------------------------+
|            **Contenus**            |                 **Capacités attendues**                 |
+====================================+=========================================================+
| Affectations, variables            | Écrire et développer des programmes pour répondre à des |
|                                    | problèmes et modéliser des phénomènes physiques,        |
| Séquences                          | économiques et sociaux.                                 |
|                                    |                                                         |
+------------------------------------+---------------------------------------------------------+

:::


::: intro clearfix

<p><a href="https://commons.wikimedia.org/wiki/File:Python-logo-notext.svg#/media/File:Python-logo-notext.svg"><img class="right" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python-logo-notext.svg" width="110" height="110"></a><br>By www.python.org - www.python.org, <a href="http://www.gnu.org/licenses/gpl.html" title="GNU General Public License">GPL</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=34991651">Link</a></p>

> Dans cette partie, nous allons nous intéresser à la programmation en utilisant le langage
> [Python](https://www.python.org/) qui permet d'utiliser les outils de la programmation dans des
> domaines très variés: sciences, analyse de données, web...

> On commence par les variables, les entrées et les sorties d'un programme.

:::

## Programme

::: {.def terme="programme"}

Un programme est une séquence d'instructions destinées à être exécutées par la machine.

:::

::: example

```python
print("Bonjour")
nom = input("Comment vous appelez-vous?")
print("Bienvenue", nom)
```

:::

## Variables

::: {.def terme="variable"}

Les variables sont des noms permettant de désigner des valeurs stockées par le programme.

:::

::: example

Voici trois types de variables simples utilisées en Python.

```python
# type int (integer)
entier = 13
# type float (nombre à virgule flottante)
flottant = 13.0
# type str (string) les chaînes de caractères
texte = "treize"
```

Il existe aussi le type booléen: `True` ou `False`
:::

**Attention à bien distinguer une variable comme `age` d'une chaine de caractère `"age"`.**

## La fonction `print()`: Afficher une sortie

La fonction `print` permet au programme d'afficher du texte en **sortie**.

On peut utiliser _plusieurs arguments_ séparés par des virgules qui seront alors ajoutés les uns à
côté des autres (on dit concaténés).

:::example

```python
nom = "Sy"
prenom = "Omar"
age = 42
print(prenom, nom, "a", age, "ans.")
```

Affichera: `Omar Sy a 42 ans.`

:::

## La fonction `input()`: Récupérer une entrée

La fonction `input` permet au programme de récupérer du texte en **entrée**.

Généralement, on récupère le texte entré par l'utilisateur dans un variable en le convertissant
dans le type souhaité.

::: example

```python
# récupère une chaîne de caractère par défaut
nom = input("Comment vous appelez-vous?")
# on converti la réponse de l'utilisateur en entier avec la fonction int
age = int(input("Quel âge avez-vous?"))
# on converti la réponse de l'utilisateur en fottant avec la fonction float
taille = float(input("Donnez votre taille en mètre"))
```

Lorsque le programme est lancé, l'utilisateur devra répondre aux questions posées, et on pourra
utiliser ces réponses grâce aux variables `nom`, `age` et `taille`.

::: 