## Représentation binaire des entiers naturels

`h5p: 3402212386`

## Entiers naturels en base deux

1. Trouver la représentation en base deux du nombre 1000.
2. Donner les représentations en base deux des nombres 1, 3, 7, 15, 31 et 63. Expliquer le
   résultat.
3. Trouver la représentation en base dix du nombre $10010110_2$.
4. C'est en $11110010000_2$ qu'a été démontré le théorème fondamental de l'informatique. Exprimer
   ce nombre en base dix.
5. Pour multiplier par dix un entier naturel exprimé en base dix, il suffit d'ajouter un 0 à sa
   droite, par exemple, 12 x 10 = 120. Quelle est l'opération équivalente pour les entiers naturels
   exprimés en base deux ? Exprimer en base deux les nombres 3, 6 et 12 pour illustrer cette
   remarque.

Source: [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices
corrigés et des idées de projets par Gilles
Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)


## Octet et information

1. Combien de bits d'informations contient un octet ? Combien un octet peut-il représenter de
   valeurs différentes ?
2. On imagine un ordinateur dont la mémoire est constituée de quatre circuits mémoire un bit. Quel
   est le nombre d'états possibles de la mémoire de cet ordinateur ? Même question pour un
   ordinateur dont la mémoire est constituée de dix circuits mémoires un bit. Et pour un ordinateur
   dont la mémoire est constituée de 34 milliards de tels circuits.
3. On veut représenter chacune des sept couleurs de l'arc-en-ciel par un mot, les sept mots devant
   être distincts et de même longueur. Quelle est la longueur minimale de ces mots ?

**Source:** [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des
exercices corrigés et des idées de projets par Gilles
Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)

## Entiers naturels en base 16

1. Trouver la représentation en base 16 du nombre binaire: $111100011001_2$.
2. Trouver la représentation en base dix du nombre $4e2c_{16}$.
3. Trouver la représentation en base seize du nombre $965_{10}$.

**Source:** [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des
exercices corrigés et des idées de projets par Gilles
Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)

## Effectuer des opérations

1. Poser les opérations binaires suivantes, et vérifier votre résultat en base 10: 

```
   11010
+ 100001
--------
```

```
 100001
- 11010
--------
```

1. Poser les opérations hexadécimales suivantes, et vérifier votre résultat en base 10: 

```
   FF0
+   1E
------
```

```
 FF0
- 1E
----
```

## Représenter des couleurs en hexadécimal

En HTML et en CSS, les couleurs peuvent être codées sous la forme d'un sextuplet hexadécimal
représentant ainsi la couleur sur 3 octets. Par exemple: `12AB5F`.

Chaque **octet** est écrit avec deux chiffres hexadécimaux, et représente un niveau parmi 256 de
chacune des trois couleurs primaires de la synthèse additive **Rouge, Vert et Bleu** dans l'ordre.

_Par exemple, le code `#FF0000` représente un niveau maximal à 255 sur le rouge, et des niveaux
nuls pour le vert et le bleu._

Une animation est disponible à l'adresse suivante: <https://eduinfo.frama.io/css-colors/>

1. Chaque composante de couleur étant codé sur un octet, donner en décimal et en hexadécimal les
   valeurs minimale, maximale et médiane.
2. Compléter le tableau suivant:

+---------+------------------+------------+-----------+------------+------------------------+
| couleur | Code hexadécimal | R(décimal) | V(décimal | B(décimal) | Codage 3bits(quest. 4) |
+=========+==================+============+===========+============+========================+
|         | `#000000`        |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+
|         |                  | 0          | 0         | 255        | `001`                  |
+---------+------------------+------------+-----------+------------+------------------------+
| Vert    |                  |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+
|         | `#00FFFF`        |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+
|         |                  | 255        | 0         | 0          | `100`                  |
+---------+------------------+------------+-----------+------------+------------------------+
| Magenta |                  |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+
|         | `#FFFF00`        |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+
| Blanc   |                  |            |           |            |                        |
+---------+------------------+------------+-----------+------------+------------------------+

3. La complémentaire d'une couleur est obtenue en allumant les lampes éteintes et en éteignant les
   lampes allumées. Déterminer les couleurs complémentaires des couleurs précédentes.

4. En utilisant comme précédemment uniquement les éclairages nuls et maximum, combien de couleurs
   sont codées? En déduire comment aurait-on pu coder ces données sur 3 bits, et compléter le
   tableau de la question 2.

5. Quel est le nombre de couleurs qui peut être codé si on considère toutes les combinaisons
   d'éclairage rendus possibles par le codage hexadécimal utilisé par le HTML et CSS.

6. Grâce à l'animation expliquer comment:

   - Créer des nuances de gris.
   - Comment obscurcir une couleur par exemple le rouge.
   - Comment éclaircir une couleur par exemple le rouge.