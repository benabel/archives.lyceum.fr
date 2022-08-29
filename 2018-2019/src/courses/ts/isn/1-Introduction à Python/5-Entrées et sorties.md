---
tags: ["python", "type", "print", "input"]
---

Un programme est avant tout là pour nous servir à résoudre des problèmes, l'utilisateur doit pouvoir interagir avec celui-ci.

Cela s'effectue par l'intermédiaire d'entrées et des sorties.

- les **entrées** permettent à l'utilisateur d'entrer des données dans le programme.

- les **sorties** permettent d'afficher les résultats à l'utilisateur.

## Entrée des données avec la fonction `input()`

La fonction `input()` permet d'afficher une phrase(plus exactement une chaîne de caractères, c'est pour cela qu'on doit placer cette phrase entre guillemets `"ma phrase"`), d'attendre que l'utilisateur entre une donnée et tape sur *Entrée*.

```python
>>> input("Qu'est-ce qui est apparu en premier : l'œuf ou la poule ? ")
Qu'est-ce qui est apparu en premier : l'œuf ou la poule ? la poule
```

La donnée entrée par l'utilisateur est renvoyée par la fonction `input()` et peut être stockée dans une variable pour une utilisation ultérieure.

Par exemple stockons cette réponse dans une variable appelée `réponse`:

```python
>>> réponse = input("Quel jour du mois sommes nous ? ")
Quel jour du mois sommes nous ? 13
```

**ATTENTION** la fonction `input()` stocke la valeur sous la forme d'une chaîne de caractères si vous voulez effectuer des opérations mathématiques, commencez par la convertir en nombre(entier ou réel), sinon vous risquez d'avoir de mauvaises surprises!

```python
>>> réponse = input("Quel jour du mois sommes nous ? ")
Quel jour du mois sommes nous ? 13
>>> type(réponse)
<class 'str'>
>>> réponse * 2
'1313'
```

Convertissons l'entrée de l'utilisateur en entier avec la fonction `int()`

```python
>>> réponse = int(input("Quel jour du mois sommes nous ? "))
Quel jour du mois sommes nous ? 13
>>> type(réponse)
<class 'int'>
>>> réponse * 2
26
```

## Affichage de résultats pour l'utilisateur avec la fonction `print()`

Pour afficher du texte ou des valeurs de variables on utilise la fonction `print()`.

**ATTENTION** Lorsque vous affichez du texte il doit être entouré de guillemets, mais pas lorsque vous souhaitez afficher des valeurs de variables.

```python
>>> print("Votre réponse est: ")
Votre réponse est:

>>> print(réponse)
13
```

Vous pouvez même afficher plusieurs objets en les séparant par des virgules.

```python
>>> print("Nous sommes le", réponse, "du mois de septembre")
Nous sommes le 13 du mois de septembre
```

On peut même créer des chaînes de caractères multi-lignes en utilisant trois guillemets.

```python
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

## Exercices

### Calcul de prix TTC

Écrivez un programme qui fait saisir un prix hors taxes à l'utilisateur, puis qui affiche le prix TTC correspondant en se basant sur un taux de TVA à 19,6%.

### Calcul du niveau d'intensité sonore

Écrivez un programme qui fait saisir une intensité sonore en $W/m^2$, puis affiche le niveau d'intensité sonore L en décibel correspondant .

$$L=10  log(\frac{I}{I_{0}})$ avec $Io =1 \times 10^{{}-12} W/m^2$$

### Permutation de deux variables

Écrivez un programme qui permute deux variables:

```python
nombre1 = 5
nombre2 = 3

# Tapez votre code ici (sans rien modifier d'autre !)

print(nombre1); // Doit afficher 3
print(nombre2); // Doit afficher 5
```

### Calcul du tarif d'une lettre

En utilisant le lien suivant, écrire un programme qui affiche le prix de l'affranchissement d'une lettre an fonction de son type et de son poids(le physicien aurait préféré masse.)

<https://www.prixdutimbre.fr/tarifs-postaux-affranchissement-la-poste/>