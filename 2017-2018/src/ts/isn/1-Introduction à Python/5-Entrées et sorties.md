---
tags: ["python", "type", "interpréteur", "print", "input"]
---



Un programme est avant tout là pour nous servir à résoudre des problèmes, l'utilisateur doit pouvoir intéragir avec celui-ci.

Cela s'effectue par l'intérmédiare d'entrées et des sorties.

- les **entrées** permettent à l'utilisateur d'entrer des données dans le programme.

- les **sorties** permettent d'afficher les résultats à l'utilisateur.

# Entrée des données avec la fonction `input()`

La fonction `input()` permet d'afficher une phrase(plus exactement une chaîne de caractères, c'est pour cela qu'on doit placer cette phrase entre guillemets `"ma phrase"`), d'attendre que l'utilisateur entre une donnée et tape sur *Entrée*.

```
>>> input("Qu'est-ce qui est apparu en premier : l'œuf ou la poule ? ")
Qu'est-ce qui est apparu en premier : l'œuf ou la poule ? la poule
```

La donnée entrée par l'utilisateur est renvoyée par la fonction `input()` et peut être stockée dans une variable pour une utilisation ultérieure.

Par exemple stockons cette réponse dans une variable appelée `reponse`:

```python
>>> reponse = input("Quel jour du mois sommes nous ? ")
Quel jour du mois sommes nous ? 13
```

**ATTENTION** la fonction `input()` stocke la valeur sous la forme d'une chaîne de carctères si vous voulez effectuer des opérations mathématiques, commencez par la convertir en nombre(entier ou réel), sinon vous risquez d'avoir de mauvaises surprises!

```python
>>> reponse = input("Quel jour du mois sommes nous ? ")
Quel jour du mois sommes nous ? 13
>>> type(reponse)
<class 'str'>
>>> reponse * 2
'1313'
```

Convertissons l'entrée de l'utilisateur en entier avec la fonction `int()`

```
>>> reponse = int(input("Quel jour du mois sommes nous ? "))
Quel jour du mois sommes nous ? 13
>>> type(reponse)
<class 'int'>
>>> reponse * 2
26
```

# Affichage de résultats pour l'utilisateur avec la fonction `print()`

Pour afficher du texte ou des valeurs de variables on utilise la fonction `print()`.

**ATTENTION** Lorsque vous affichez du texte il doit être entouré de guillements, mais pas lorsque vous souhaitez afficher des valeurs de variables.

```
>>> print("Votre réponse est: ")
Votre réponse est:

>>> print(reponse)
13
```

Vous pouvez même afficher plusieurs objets en les séparant par des virgules.

```
>>> print("Nous sommes le", reponse, "du mois de septembre")
Nous sommes le 13 du mois de septembre
```

On peut même créer des chaînes de caractères multi-lignes en utilisants trois guillemets.

```
>>> print("""Nous allons faire une si longue phrase qu'il
... est indispensable de l'écrire
... sur au moins trois
... , que dis-je,
... cinq lignes""")
Nous allons faire une si longue phrase qu'il
est indispensable de l'écrire
sur au moins trois
, que dis-je,
cinq lignes
```

# Exercice: créer un solveur d'équations

## Calculer des grandeurs physiques

Implémenter des programmes pour calculer:

- une vitesse: $v=\frac{d}{t}$
- une force gravitationnelle: $F_{g}=G\times \frac{m_Am_B}{d^2}$
- une longueur d'onde: $\lambda =  v T$ ou $\lambda =  \frac{v}{f}$
- un niveau d'intensité sonore: $L=10  log(\frac{I}{I_{0}})$ avec $Io =1 \times 10^{{}-12} W/m^2$

Vous pourrez trouver d'autres formules sur la page suivante du site [openclassroom](https://openclassrooms.com/forum/sujet/bac-terminale-s-les-formules-a-connaitre-1).
