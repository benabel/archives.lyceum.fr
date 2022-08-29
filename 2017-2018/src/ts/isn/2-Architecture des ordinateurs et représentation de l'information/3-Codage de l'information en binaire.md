---
tags: ["représentation des entiers", "base 2", "base 16"]
---




# Notation décimale

On a l'habitude d'écrire les nombres entiers naturels en *notation décimale à position*, dans ce système, on écrit de **droite à gauche** le nombre d'unités, de paquets de dizaines, de centaines, etc.

Chacun de ces nombres étant comprise entre 0 et 9, cela représente un ensemble de dix chiffres d’où le nom de notation décimale.

Les chiffres utilisés sont: **0 1 2 3 4 5 6 7 8 9**


**exemple: 1789**

1789 est l'addition de droite à gauche de neuf unités, huit dizaines, sept centaines, et un millier.

Soit mathématiquement:
$$
1789=1 \times 10^3 + 7 \times 10^2 + 8 \times 10^1 + 9 \times 10^0
$$

# Codage binaire

> Le système binaire est un système de numération utilisant la base 2. On nomme couramment bit (de l'anglais binary digit, soit « chiffre binaire ») les chiffres de la numération binaire positionnelle. Ceux-ci ne peuvent prendre que deux valeurs, notées par convention 0 et 1.

> C'est un concept essentiel de l'informatique. En effet, les processeurs des ordinateurs actuels sont composés de transistors ne gérant chacun que deux états.

> [Source Wikipedia](http://fr.wikipedia.org/wiki/Syst%C3%A8me_binaire)

Ainsi dans les systèmes numériques comme les ordinateurs, toutes les informations, qu'il s'agisse de nombres, de textes d'images, de sons ou encore de vidéos sont codées en **langage binaire**.

Le système binaire est un système de numération positionnel utilisant la base deux.

Les chiffres utilisés sont: **0 1**


**exemple: 1110**

$1110_2$ est l'addition de droite à gauche de zéro unité, une deuzaine, une quatraine, une huitaine.

Soit mathématiquement:

$$
1110=1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 14
$$

*Remarque: on indique la base de numération par un indice à la fin du nombre.*

Soit $1110_2 = 14_{10}$

## Comment passer de la notation décimale à la notation binaire ?


On regroupe les objets par paquets de 2 en réalisant des divisions successives jusqu'à obtenir un quotient égal à 0.

**Exemple**

Trouver en base deux la représentation du nombre $13_{10}$

```
13 | 2
   |---
 1 | 6 | 2
       |---
     0 | 3 | 2
           |---
         1 | 1 | 2
               |---
             1 | 0
```

L'écriture du nombre se fait alors de droite à gauche:

$$
13_{10} = 1101_{2}
$$

On peut vérifier le résultat:

$$
{1110}_{2} = 1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 13_{10}
$$

## Exercices

1. Trouver la représentation en base deux du nombre 1000.

2. Donner les représentations en base deux des nombres 1, 3, 7, 15, 31 et 63. Expliquer le résultat.

3. Trouver la représentation en base dix du nombre 10010110.

4. C’est en 11110010000 qu’a été démontré le théorème fondamental de l'informatique. Exprimer ce nombre en base dix.

5. Pour multiplier par dix un entier naturel exprimé en base dix, il suffit d’ajouter un 0 à sa droite, par exemple, 12 x 10 = 120. Quelle est l’opération équivalente pour les entiers natu— rels exprimés en base deux ? Exprimer en base deux les nombres 3, 6 et 12 pour illustrer  cette remarque.  



# L'octet

> Les mémoires actuelles sont toutes composées de cellules mémoires capables de retenir un bit. En mettant pleins de ces cellules dans un seul composant, et en mettant quelques circuits électroniques pour gérer le tout, on obtient une mémoire.[Source OpenClassroom](http://fr.openclassrooms.com/informatique/cours/fonctionnement-d-un-ordinateur-depuis-zero/memoriser-un-bit)

L’état d’un circuit mémoire, se décrit par une suite finie de 0 et de 1, que l’on appelle un **mot**. Par exemple, le mot 100 décrit l’état d’un circuit composé de trois circuits mémoire un bit, respectivement dans l’état 1, 0 et 0.

Dans la mémoire des ordinateurs les circuits mémoire un bit sont souvent groupés par huit : les **octets**. On utilise souvent des nombres exprimés en notation binaire, c’est-à-dire en base deux, sur un, deux, quatre ou huit
octets, soit 8, 16, 32 ou 64 bits.

Un octet permet de représenter $2^8$, c'est-à-dire 256, valeurs différentes. Un ou plusieurs octets permettent ainsi de coder des valeurs numériques ou des caractères.

## Exercices

1. On imagine un ordinateur dont la mémoire est constituée de quatre circuits mémoire un bit. Quel est le nombre d'états possibles de la mémoire de cet ordinateur ? Même question pour un ordinateur dont la mémoire est constituée de dix circuits mémoire un bit. Et pour un ordinateur dont la mémoire est constituée de 34 milliards de tels circuits.

2. On veut représenter chacune des sept couleurs de l’arc—en—ciel par un mot, les sept mots devant être distincts et de même longueur. Quelle est la longueur minimale de ces mots ?  

# Codage hexadécimale

La notation binaire bien qu'adaptée aux composants électroniques, ne l'est pas du tout pour l'homme. Certains des premiers ordinateurs, comme l'[EINAC](https://fr.wikipedia.org/wiki/ENIAC#Histoire) utilisaient la base 10, cependant cette idée a été abandonnée en raison des difficultés que cela entraînaient au niveau électronique. La base 16, le système hexadécimal rend l'utilisation du binaire plus humaine.

Un chiffre hexadécimal est un mot de 4 bits puique $2^4 = 16$.

> Le système hexadécimal est utilisé notamment en électronique numérique et en informatique car il est particulièrement commode et permet un compromis entre le code binaire des machines et une base de numération pratique à utiliser pour les ingénieurs. En effet, chaque chiffre hexadécimal correspond exactement à quatre chiffres binaires (ou bits), rendant les conversions très simples et fournissant une écriture plus compacte.[Source Wikipedia](https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal)

Les chiffres utilisés sont: **0 1 2 3 4 5 6 7 8 9 a b c d e f**

Voici les correspondances entre les bases hexadécimale, décimale et binaire.

<table>
    <colgroup>
        <col style="width: 29%" />
        <col style="width: 35%" />
        <col style="width: 35%" />
    </colgroup>
    <thead>
        <tr class="header">
            <th >Chiffre hexadécimal</th>
            <th >Représentation décimale</th>
            <th >Représentation binaire</th>
        </tr>
    </thead>
    <tbody>
        <tr class="odd">
            <td >
                <p>0</p>
            </td>
            <td >
                <p>0</p>
            </td>
            <td >
                <p>0000</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>1</p>
            </td>
            <td >
                <p>1</p>
            </td>
            <td >
                <p>0001</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>2</p>
            </td>
            <td >
                <p>2</p>
            </td>
            <td >
                <p>0010</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>3</p>
            </td>
            <td >
                <p>3</p>
            </td>
            <td >
                <p>0011</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>4</p>
            </td>
            <td >
                <p>4</p>
            </td>
            <td >
                <p>0100</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>5</p>
            </td>
            <td >
                <p>5</p>
            </td>
            <td >
                <p>0101</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>6</p>
            </td>
            <td >
                <p>6</p>
            </td>
            <td >
                <p>0110</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>7</p>
            </td>
            <td >
                <p>7</p>
            </td>
            <td >
                <p>0111</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>8</p>
            </td>
            <td >
                <p>8</p>
            </td>
            <td >
                <p>1000</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>9</p>
            </td>
            <td >
                <p>9</p>
            </td>
            <td >
                <p>1001</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>A</p>
            </td>
            <td >
                <p>10</p>
            </td>
            <td >
                <p>1010</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>B</p>
            </td>
            <td >
                <p>11</p>
            </td>
            <td >
                <p>1011</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>C</p>
            </td>
            <td >
                <p>12</p>
            </td>
            <td >
                <p>1100</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>D</p>
            </td>
            <td >
                <p>13</p>
            </td>
            <td >
                <p>1101</p>
            </td>
        </tr>
        <tr class="odd">
            <td >
                <p>E</p>
            </td>
            <td >
                <p>14</p>
            </td>
            <td >
                <p>1110</p>
            </td>
        </tr>
        <tr class="even">
            <td >
                <p>F</p>
            </td>
            <td >
                <p>15</p>
            </td>
            <td >
                <p>1111</p>
            </td>
        </tr>
    </tbody>
</table>



**exemple: comment représenter le mot binaire de 16 bits: `1010101111100001`**

On est d'accord, en binaire, c'est *inhumain*, par contre en hexadécimal, cela devient beaucoup plus lisible et manipulable:

$$
{1010101111100001}_2 = {abe1}_{16}
$$

Ou si l'on tient vraiement à notre bonne vielle base 10:

$$
abe1_{16}=(10 \times 16^3 + 11 \times 16^2 + 14 \times 16^1 + 1 \times 16^0)_{10}=44001_{10}
$$

## Méthode: comment passer de la notation binaire à la notation hexadécimale ?

Pour passer de l’écriture binaire à l’écriture hexadécimale, il suffit de regrouper les chiffres 4 par 4.

**Exemple**

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

## Exercices

1. Trouver la représentation en base 16 du nombre binaire: `111100011001`
2. Trouver la représentation en base dix du nombre 4e2c (en base seize).
2. Trouver la représentation en base seize du nombre 965.


**Source** Tous les exercices de cette page sont issus su livre [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)
