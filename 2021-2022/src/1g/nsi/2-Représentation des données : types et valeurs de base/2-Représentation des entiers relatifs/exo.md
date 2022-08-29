## Intervalles de valeurs

1. Quel intervalle d'entiers relatifs peut-on représenter avec des mots de 8 bits? Combien sont-ils
   ?
2. Même question avec des mots de 32 bits et 64 bits.

## Complément à 2 sur un octet

1. Trouver la représentation binaire sur huit bits des entiers relatifs $0$ et $-128$.
2. Trouver la représentation décimale des entiers relatifs dont la
   représentation binaire sur huit bits est `0000 0000` et `1000 0000`.
3. Calculer la représentation binaire sur huit bits de l’entier relatif $-16$, puis de son opposé.
4. Représenter les entiers relatifs $96$ et $48$ en binaire sur huit bits.
   Ajouter les deux nombres binaires obtenus en utilisant l’algorithme de
   l’addition binaire. Quel est l'entier relatif obtenu ? Pourquoi est-il
   négatif ?
5. Expliquer comment faire une soustraction de deux nombres binaires sur huit
   bits à partir du calcul de l’opposé et de l’algorithme de l’addition binaire.
   Calculer ainsi $15 - 7$. 


[Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés
et des idées de projets par Gilles
Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/){.cite-source}

## Coder sur 16 bits des entiers relatifs

Dans cet exercice, on utilise un codage en complément à $2^{16}$ sur 2 octets. 

1. Quels sont les nombres minimum et maximum que l'on peut représenter?
2. Compléter le tableau suivant:

+---------+-----------------------+
| Base 10 |    Complément à 2     |
+=========+=======================+
| -1023   |                       |
+---------+-----------------------+
| -1024   |                       |
+---------+-----------------------+
| -1      |                       |
+---------+-----------------------+
| 0       |                       |
+---------+-----------------------+
| -32768  |                       |
+---------+-----------------------+
|         | `0000 0000 1000 0000` |
+---------+-----------------------+
|         | `0111 1111 1111 1111` |
+---------+-----------------------+
|         | `1000 0000 1000 0001` |
+---------+-----------------------+


[Prépabac NSI aux éditions Hatier](https://www.editions-hatier.fr/livre/nsi-1re-generale-numerique-et-sciences-informatiques-prepabac-9782401052307){.cite-source}

**Correction exercice 3 chapitre P2C2**

1. Quels sont les nombres minimum et maximum que l'on peut représenter?

On peut représenter des nombres allant de $-2^{15}$  à $2^{15} -1$, soit l'intervalle: $[-32~768; 32~767].$

2. Compléter le tableau suivant:

+-------------+-----------------------+
|   Base 10   |    Complément à 2     |
+=============+=======================+
| *-1023*     | `1111 1100 0000 0001` |
+-------------+-----------------------+
| *-1024*     | `1111 1100 0000 0000` |
+-------------+-----------------------+
| *-1*        | `1111 1111 1111 1111` |
+-------------+-----------------------+
| *0*         | `0000 0000 0000 0000` |
+-------------+-----------------------+
| **-32768**  | `1000 0000 1000 0000` |
+-------------+-----------------------+
| **128**     | `0000 0000 1000 0000` |
+-------------+-----------------------+
| **32 767**  | `0111 1111 1111 1111` |
+-------------+-----------------------+
| **-32 767** | `1000 0000 1000 0001` |
+-------------+-----------------------+



## Codage et décodage en Python

1. Créer un programme qui demande un nombre à encoder et un nombre $n$ de bits d'encodage, et qui
   renvoie la représentation binaire du nombre en complément $2^n$ de ce nombre.

   P.ex:
   
   - si vous demandez le codage de -1 sur 4 bits, le programme affiche: `"1111"`.
   - si vous demandez le codage de 5 sur 4 bits, le programme affiche: `"0101"`.

   Pour simplifier, on supposera que l'utilisateur ne demande pas l'impossible, et que le nombre
   demandé peut être codé sur le nombre de bits donnés.

**Aides:**

- Pour obtenir la représentation binaire d'un nombre entier naturel on utilise: `bin(nombre)[2:]`.

  P.ex: `bin(127)[2:]` renvoie `'1111111'`

- Pour parcourir un à un les éléments d'une chaîne de caractère, on utilise la syntaxe `for élément in chaine_de_caractères:`
  
  P.ex:

  ```python
  for chiffre in '1111111':
      print(chiffre)
  ```

- Pour forcer l'écriture sur $n$ bits d'un nombre binaire, on utilise: `'{:0nd}'.format(nombre)`
  
  P.ex: `'{:08d}'.format(1000)` renvoie `'00001000'`

**Une des difficultés notables de cet exercice est qu'il faut traiter les nombres binaires comme
des `str`. Réfléchissez bien aux types utilsés.**


2. Créer un programme qui demande un code binaire à décoder écrit sur $n$ bits, et qui
   renvoie la valeur décimale de ce nombre par décodage du nombre en complément $2^n$.

   P.ex:
   
   - si vous demandez le décodage de `"1111"`, le programme affiche: `-1`.
   - si vous demandez le décodage de `"0101"`, le programme affiche: `5`.

   le codage binaire donnant implicitement la valeur de n pour le complément à 2.

**Aide**

Pour obtenir la longueur d'une chaîne de caractères, on utilise la fonction `len()`.

P.ex: `len("0101")` renvoie `4`.

<!-- Exo sur le bug de l'an 2038 de linux

Source: https://linux.developpez.com/actu/309958/Linux-5-10-rc1-se-separe-d-une-fonctionnalite-vieille-de-plusieurs-decennies-qui-a-cause-des-bogues-de-securite-et-repousse-le-probleme-de-l-an-2038-a-l-an-2486-via-un-reglage-de-l-horodatage-XFS/

Depuis la version 5.6 du noyau, publié en mars dernier, l’équipe a commencé à proposer des correctifs pour résoudre le problème de l’année 2038. Il s’agit d’un bogue détecté il y a longtemps dans l’encodage du temps sur les systèmes de type Unix, dont Linux, macOS, et d’autres systèmes d’exploitation compatibles POSIX. Sur ces systèmes, le calcul du temps est effectué en fonction des secondes écoulées à partir du 1er janvier 1970 à 00:00:00 UTC (nommée également epoch). Un jour donnera par exemple 86 400 secondes et une année 31 536 000 secondes.

Et plus les années passeront, plus il faudra de nombres pour représenter les dates. Pour effectuer le décompte sur ces systèmes, lorsque la fonction time() est appelée, elle retourne un entier signé de type “time_t”. Si le système est 32 bits, la valeur retournée est un entier signé 32 bits et si le système est 64 bits, la valeur retournée est 64 bits. Sur un système 64 bits, les limites sont supérieures à 292 milliards d’années. Il n’y a donc pas de soucis à se faire ici (ce sera beaucoup plus que l'âge de notre planète ou l'estimation de son espérance de vie).

Mais sur les systèmes 32 bits, le nombre de secondes total que la fonction peut retourner est 231–1, c’est-à-dire environ 136 ans. La date de référence étant le 1er janvier 1970 à 00:00:00 UTC, la date minimale représentable est le vendredi 13 décembre 1901 et la date maximale représentable est le mardi 19 janvier 2038 à 3 h 14 min 8 s. Lorsqu’il sera 3 h 14 min 8 s le 19 janvier 2038, le système passera au 13 décembre 1901 à la seconde suivante (également appelé le bogue de l’an 2038 abrégé en anglais Y2038). Bien évidemment, ce ne sera pas la fin du monde.

-->
