---
tags: ["encodage des entiers naturels", "base 2", "base 16"]
---

::: programme
+--------------------------------+-------------------------------------+---------------------------------------+
|            Contenus            |         Capacités attendues         |             Commentaires              |
+================================+=====================================+=======================================+
| Écriture d’un entier           | Passer de la représentation         | Les bases 2, 10 et 16 sont            |
| positif dans une base          | d’une base dans une autre.          | privilégiées.                         |
| b ⩾ 2                          |                                     |                                       |
+--------------------------------+-------------------------------------+---------------------------------------+
:::

> On a l'habitude d'écrire les nombres entiers naturels en utilisant la notation décimale,
> cependant les ordinateurs utilisent une base 2 pour calculer. Comment compter en binaire?

Chacun de ces nombres étant comprise entre 0 et 9, cela représente un ensemble de dix chiffres d’où
le nom de notation décimale.

Les chiffres utilisés sont: **0 1 2 3 4 5 6 7 8 9**

Cependant nos ordinateurs actuels utilisent des transistors pour calculer qui ne possédent que deux
états: **0 1**.

Lorsqu'on va compter, on va trsè rapidement se retrouver à cours de chiffres, et on sera obligé
d'ajouter des deuzaines, quatraines, huitaines à gauche. tout comme nous ajoutions des dizaines,
centaines en base 10.

+-------------------------+------------------------+
| Représentation décimale | Représentation binaire |
+=========================+========================+
| 0                       | 0000                   |
+-------------------------+------------------------+
| 1                       | 0001                   |
+-------------------------+------------------------+
| 2                       | 0010                   |
+-------------------------+------------------------+
| 3                       | 0011                   |
+-------------------------+------------------------+
| 4                       | 0100                   |
+-------------------------+------------------------+
| 5                       | 0101                   |
+-------------------------+------------------------+
| 6                       | 0110                   |
+-------------------------+------------------------+
| 7                       | 0111                   |
+-------------------------+------------------------+
| 8                       | 1000                   |
+-------------------------+------------------------+
| 9                       | 1001                   |
+-------------------------+------------------------+
| 10                      | 1010                   |
+-------------------------+------------------------+
| 11                      | 1011                   |
+-------------------------+------------------------+
| 12                      | 1100                   |
+-------------------------+------------------------+
| 13                      | 1101                   |
+-------------------------+------------------------+

## Codage binaire

> Le système binaire est un système de numération utilisant la base 2. On nomme couramment bit (de
> l'anglais binary digit, soit « chiffre binaire ») les chiffres de la numération binaire
> positionnelle. Ceux-ci ne peuvent prendre que deux valeurs, notées par convention 0 et 1.
>
> C'est un concept essentiel de l'informatique. En effet, les processeurs des ordinateurs actuels
> sont composés de transistors ne gérant chacun que deux états.
>
> *[article Wikipedia sur le système binaire](http://fr.wikipedia.org/wiki/Syst%C3%A8me_binaire)*{.cite-source}

Actuellement, dans les systèmes numériques comme les ordinateurs, toutes *les informations*, qu'il
s'agisse de nombres, de textes d'images, de sons ou encore de vidéos sont codées sous forme
**binaire**.

Le système binaire est un système de *numération positionnel* utilisant la **base deux**.

Les chiffres utilisés sont: **0 1**

### Comment passer de la notation binaire à la notation décimale ?

::: example
$$
1110
$$
$1110_2$ est l'addition de droite à gauche de zéro unité, une *deuzaine*, une *quatraine*, une *huitaine*.

Soit mathématiquement:

$$
1110=1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 14
$$
:::

*Remarque: on indique la base de numération par un indice à la fin du nombre.*

Soit $1110_2 = 14_{10}$

### Comment passer de la notation décimale à la notation binaire ?

On regroupe les objets par paquets de 2 en réalisant des divisions successives jusqu'à obtenir un quotient égal à 0.

::: example
Trouver en base deux la représentation du nombre $13_{10}$

```
13| 2
   |---
 1 | 6 | 2
       |---
     0 | 3 | 2
           |---
         1 | 1 | 2
               |---
             1 | 0
```
:::

L'écriture du nombre se fait alors de droite à gauche :

$$
13_{10} = 1101_{2}
$$

On peut vérifier le résultat:

$$
{1110}_{2} = 1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 13_{10}
$$

## L'octet

> Les mémoires actuelles sont toutes composées de cellules mémoires capables de retenir un bit. En
> mettant pleins de ces cellules dans un seul composant, et en mettant quelques circuits
> électroniques pour gérer le tout, on obtient une mémoire.[Source
> OpenClassroom](http://fr.openclassrooms.com/informatique/cours/fonctionnement-d-un-ordinateur-depuis-zero/memoriser-un-bit)

L’état d’un circuit mémoire, se décrit par une suite finie de 0 et de 1, que l’on appelle un
**mot**. Par exemple, le mot 100 décrit l’état d’un circuit composé de trois circuits mémoire un
bit, respectivement dans l’état 1, 0 et 0.

Dans la mémoire des ordinateurs les circuits mémoire un bit sont souvent groupés par huit : les
**octets**. On utilise souvent des nombres exprimés en notation binaire, c’est-à-dire en base deux,
sur un, deux, quatre ou huit octets, soit 8, 16, 32 ou 64 bits.

Un octet permet de représenter $2^8$, c'est-à-dire 256, valeurs différentes. Un ou plusieurs octets
permettent ainsi de coder des valeurs numériques ou des caractères.

## Codage hexadécimal

La notation binaire bien qu'adaptée aux composants électroniques, ne l'est pas du tout pour
l'homme. Certains des premiers ordinateurs, comme
l'[EINAC](https://fr.wikipedia.org/wiki/ENIAC#Histoire) utilisaient la base 10, cependant cette
idée a été abandonnée en raison des difficultés que cela entraînaient au niveau électronique. La
base 16, **le système hexadécimal rend l'utilisation du binaire plus humaine**.

Un chiffre hexadécimal est un mot de 4 bits puisque $2^4 = 16$.

> Le système hexadécimal est utilisé notamment en électronique numérique et en informatique car il
> est particulièrement commode et permet un compromis entre le code binaire des machines et une
> base de numération pratique à utiliser pour les ingénieurs. En effet, chaque chiffre hexadécimal
> correspond exactement à quatre chiffres binaires (ou bits), rendant les conversions très simples
> et fournissant une écriture plus compacte.[Source
> Wikipedia](https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal)

Les chiffres utilisés sont: **0 1 2 3 4 5 6 7 8 9 a b c d e f**

Voici les correspondances entre les bases hexadécimale, décimale et binaire.

+---------------------+-------------------------+------------------------+
| Chiffre hexadécimal | Représentation décimale | Représentation binaire |
+=====================+=========================+========================+
| 0                   | 0                       | 0000                   |
+---------------------+-------------------------+------------------------+
| 1                   | 1                       | 0001                   |
+---------------------+-------------------------+------------------------+
| 2                   | 2                       | 0010                   |
+---------------------+-------------------------+------------------------+
| 3                   | 3                       | 0011                   |
+---------------------+-------------------------+------------------------+
| 4                   | 4                       | 0100                   |
+---------------------+-------------------------+------------------------+
| 5                   | 5                       | 0101                   |
+---------------------+-------------------------+------------------------+
| 6                   | 6                       | 0110                   |
+---------------------+-------------------------+------------------------+
| 7                   | 7                       | 0111                   |
+---------------------+-------------------------+------------------------+
| 8                   | 8                       | 1000                   |
+---------------------+-------------------------+------------------------+
| 9                   | 9                       | 1001                   |
+---------------------+-------------------------+------------------------+
| A                   | 10                      | 1010                   |
+---------------------+-------------------------+------------------------+
| B                   | 11                      | 1011                   |
+---------------------+-------------------------+------------------------+
| C                   | 12                      | 1100                   |
+---------------------+-------------------------+------------------------+
| D                   | 13                      | 1101                   |
+---------------------+-------------------------+------------------------+
| E                   | 14                      | 1110                   |
+---------------------+-------------------------+------------------------+
| F                   | 15                      | 1111                   |
+---------------------+-------------------------+------------------------+


### Comment passer de la notation binaire à la notation hexadécimale ?

::: example
Comment représenter le mot binaire de 16 bits: `1010101111100001`

On est d'accord, en binaire, c'est *inhumain*, par contre en hexadécimal, cela devient beaucoup
plus lisible et manipulable:

$$
{1010101111100001}_2 = {abe1}_{16}
$$

Ou si l'on tient vraiment à notre bonne vielle base 10:

$$
abe1_{16}=(10 \times 16^3 + 11 \times 16^2 + 14 \times 16^1 + 1 \times 16^0)_{10}=44001_{10}
$$
:::

Pour passer de l’écriture binaire à l’écriture hexadécimale, il suffit de regrouper les chiffres 4
par 4.

::: example

Trouver en base seize la représentation du nombre $101101_{2}$

```
En base 2:    101101 = 0010 1101
En base 16:              2    D
```

Soit: $101101_{2} = 2D_{16}$


On peut vérifier le résultat en base 10:

$$
{101101}_2 = + 1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 13_{10}
$$
:::

### Comment passer de la notation décimale à la notation hexadécimale ?

On regroupe les objets par paquets de 16 en réalisant des divisions successives jusqu'à obtenir un
quotient égal à 0.

::: example
Trouver en base seize la représentation du nombre $255_{16}$

```
 286  | 16
      |---
14(e)| 17 | 16
           |---
         1 | 1 | 16
               |---
             1 | 0 
```
:::

L'écriture du nombre se fait alors de droite à gauche en remplaçant les nombres décimaux par leurs
écritures hexadécimales:

$$
286_{10} = 11e_{16}
$$

On peut vérifier le résultat :

$$
{e11}_{16} = 1 \times 16^2 + 1 \times 16^1 + 14(e) \times 2^0 = 256 + 16 + 14 = 286_{10}
$$

## Opérations arithmétiques

Les règles utilisées en base dix s'appliquent de la même façon dans les autres bases.

### Addition binaire

::: example

Réaliser l'addition binaire: $1011_2 + 1010_2$

```
 (1) (1)
    1 0 1 1
  + 1 0 1 0
    -------
  1 0 1 0 1

```
:::

On peut vérifier le résultat en base 10 :

$$
({1011}_2 = 11_{10})+({1010}_2 = 10_{10})={10101}_2 = 21_{10}
$$

### Addition hexadécimale

::: example

Réaliser l'addition hexadécimale: $A803_{16} + 2D35_{16}$

```
   (1)
    A 8 0 3
  + 2 D 3 5
    -------
    D 5 3 8

```
:::

On peut vérifier le résultat en base 10:

$$
({A803}_{16} = 43 011_{10})+({2D35}_{16} = 11 573_{10})={D538}_{16} = 54 584_{10}
$$

### Soustraction binaire

::: example
Réaliser la soustraction binaire: $1011_2 - 1010_2$

```
    1 0 1 1
  - 1 0 1 0
    -------
    0 0 0 1

```
:::

On peut vérifier le résultat en base 10:

$$
({1011}_2 = 11_{10})-({1010}_2 = 10_{10})={0001}_2 = 1_{10}
$$

### Soustraction hexadécimale

::: example
 
Réaliser la soustraction hexadécimale : $A803_{16} - 2D35_{16}$

```
     A  8  0  3
  -  2  D  3  5
    (1)(1)(1)
    -----------
     7  A  C  E

```
:::

On peut vérifier le résultat en base 10 :

$$
({A803}_{16} = 43 011_{10})-({2D35}_{16} = 11 573_{10})={7ACE}_{16} = 31 438_{10}
$$

Maintenant que vous avez tout compris, voici un lien vers un convertisseur en ligne.

<http://www.binaryconvert.com/convert_unsigned_int.html>

## Conversions et opérations en python

Bien entendu comme ce genre d'opérations est courante en informatique, python possède des fonctions
pour manipuler les nombres entiers en base décimale `int`, en base deux `bin`, en base seize `hex`.

Vous pouvez trouver quelques exemples de ces conversions sur cette réponse du forum de
programmation en anglais [stackoverflow](http://stackoverflow.com/a/11029366/1919130)