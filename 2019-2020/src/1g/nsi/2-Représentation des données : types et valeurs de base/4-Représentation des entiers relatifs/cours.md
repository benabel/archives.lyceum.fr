---
tags: ["base 2", "encodage", "entiers relatifs", "complément à deux"]
---

::: programme
+--------------------------------+-------------------------------------+---------------------------------------+
|            Contenus            |         Capacités attendues         |             Commentaires              |
+================================+=====================================+=======================================+
| Représentation binaire         | Évaluer le nombre de bits           | Il s’agit de décrire les tailles      |
| d’un entier relatif            | nécessaires à l’écriture en         | courantes des entiers (8, 16, 32      |
|                                | base 2 d'un entier, de la           | ou 64 bits).                          |
|                                | somme ou du produit de deux         | Il est possible d’évoquer la          |
|                                | nombres entiers.                    | représentation des entiers de taille  |
|                                | Utiliser le complément à 2.         | arbitraire de Python.                 |
+--------------------------------+-------------------------------------+---------------------------------------+
:::

Jusqu'à maintenant, nous avons appris à représenter des entiers naturels en représentation binaire
ou hexadécimale.

Ainsi en utilisant des _mots binaires_ de n bits, on peut coder $2^{n}$ nombres entiers.

Par exemple sur un octet, soit 8 bits, on peut coder $2^{n}$ valeurs soit dans le cas des entiers
naturels des nombres de _0 à 255_.

Cependant dans de nombreux programmes, il est nécessaire d'utiliser d'autres types de nombres
comme les **entiers relatifs** ou les **réels**.

## Représentation des entiers relatifs

La façon la plus simple de procéder serait de réserver le bit de poids fort pour le signe(0 pour
positif et 1 pour négatif), et de garder le rester pour la représentation de la valeur absolue du
nombre.

Avec un codage utilisant des mots de n bits, on pourrait représenter des nombres entre
$-2^{n-1}-1$ et $2^{n-1}-1$.

Par exemple, avec un codage sur 3 bits, des nombres entre -3 et 3:

+------------------------+-----------------+
| Représentation binaire | Valeur décimale |
+========================+=================+
| 000                    | +0              |
+------------------------+-----------------+
| 001                    | +1              |
+------------------------+-----------------+
| 010                    | +2              |
+------------------------+-----------------+
| 011                    | +3              |
+------------------------+-----------------+
| 100                    | -0              |
+------------------------+-----------------+
| 101                    | -1              |
+------------------------+-----------------+
| 110                    | -2              |
+------------------------+-----------------+
| 111                    | -3              |
+------------------------+-----------------+

> Malheureusement cette représentation possède deux inconvénients. Le premier (mineur) est que le
> nombre zéro (0) possède deux représentations. L'autre inconvénient (majeur) est que cette
> représentation impose de modifier l'algorithme d'addition ; si un des nombres est négatif,
> l'addition binaire usuelle donne un résultat incorrect.
> [Voir l'article de Wikipedia pour plus de détails](http://fr.wikipedia.org/wiki/Compl%C3%A9ment_%C3%A0_deux#Explication)

## Notation en complément à deux

Cette méthode permet de remédier aux problèmes évoqués ci-dessus.

On utilise toujours un bit de signe tout à gauche, les entiers positifs sont codés normalement,
 cependant les entiers négatifs sont comptés **à l'envers**.

### Méthode d'encodage

L'entier négatif x est codé comme s'il s'agissait de l'entier $x + 2^{n}$ ou n est la taille du
mot. Pour cela:

- On inverse les bits de l'écriture binaire de sa valeur absolue.
- On ajoute 1 au résultat (les dépassements sont ignorés).

Avec ce codage utilisant des mots de n bits, on pourrait représenter des nombres entre $-2^{n-1}$
et $2^{n-1}-1$.

*[Article Wikipedia sur le complément à deux](https://fr.wikipedia.org/wiki/Compl%C3%A9ment_%C3%A0_deux)*{.cite-source}

### Exemples sur 3 bits
#### Le nombre -1 qui a la représentation binaire la plus grande
##### 1^ère^ méthode

$$
(-1 = 2^3 -1 = 7)_{10} = 111_2
$$

##### 2^e^ méthode

1. La valeur $-1$ a pour valeur absolue $1$ codé `001` sur 3 bits.
2. On inverse les bits: `110`
3. On ajoute 1: `111`

#### Le nombre -4, le plus petit chiffre encodable sur 3 bits
##### 1^ère^ méthode
$$
(-4 = 2^3 - 2^2 = 4)_{10} = 100_2
$$

##### 2^e^ méthode

1. La valeur $-1$ a pour valeur absolue $1$ codé `001` sur 3 bits.
2. On inverse les bits: `110`
3. On ajoute 1: `111`

#### Tableau de valeurs

Avec un codage sur 3 bits, on peut coder des nombres entre $-2^{3-1}=-4$ et $-2^{3-1}-1=3$.

+------------------------+-----------------+
| Représentation binaire | Valeur décimale |
+========================+=================+
| 000                    | +0              |
+------------------------+-----------------+
| 001                    | +1              |
+------------------------+-----------------+
| 010                    | +2              |
+------------------------+-----------------+
| 011                    | +3              |
+------------------------+-----------------+
| 100                    | -4              |
+------------------------+-----------------+
| 101                    | -3              |
+------------------------+-----------------+
| 110                    | -2              |
+------------------------+-----------------+
| 111                    | -1              |
+------------------------+-----------------+

On peut alors vérifier avec cette notation que l'algorithme d'addition utilisé pour les entiers
naturels donne des résultats corrects avec cette représentation(voir les exercices[./exo]).
