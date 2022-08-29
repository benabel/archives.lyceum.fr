---
"tags": ["booléens", "algèbre de Boole"]
---

::: programme
+--------------------------------+-------------------------------------+---------------------------------------+
|            Contenus            |         Capacités attendues         |             Commentaires              |
+================================+=====================================+=======================================+
| Écriture d’un entier           | Passer de la représentation         | Les bases 2, 10 et 16 sont            |
| positif dans une base          | d’une base dans une autre.          | privilégiées.                         |
| b ⩾ 2                          |                                     |                                       |
+--------------------------------+-------------------------------------+---------------------------------------+
| Valeurs booléennes : `0`, `1`. | Dresser la table d’une              | Le ou exclusif (`xor`) est évoqué.    |
|                                | d'une expression booléenne.         |                                       |
| Opérateurs booléens :          |                                     | Quelques applications directes        |
| `and`, `or`, `not`.            |                                     | comme l’addition binaire sont         |
|                                |                                     | présentées.                           |
| Expressions booléennes         |                                     |                                       |
|                                |                                     | L’attention des élèves est attirée    |
|                                |                                     | sur le caractère séquentiel de        |
|                                |                                     | certains opérateurs booléens.         |
+--------------------------------+-------------------------------------+---------------------------------------+
:::

<!-- Uniformiser les notations 

variables: P Q R(Wikipedia) au lieu de x,y,z ou a,b,c,d...
opérateurs: + et ⋅ ou wedge vee(Wikipedia)
 -->

Dans ce cours, nous allons nous intéresser à un type simple, les booléens qui ne possèdent que deux
valeurs et qui sont donc codés que sur un seul bit:

- FAUX: dont la syntaxe peut varier suivant les langages de programmation; `0` `False`, `false` ...
- VRAI: codé en `0` `True`, `true` ...

Ces types sont extrêmement utilisés en informatique notamment pour l’exécution **conditionnelle**
de code en fonction des conditions. La fameuse instruction `if ... else`.


Comme il n'existe que deux valeurs booléennes, les opérations ne sont pas les mêmes qu'avec les nombres.

::: {.plus titre=" l’algèbre de Boole"}
George Boole, né le 2 novembre 1815 à Lincoln (Royaume-Uni) et mort le 8 décembre 1864 à 
Ballintemple (Irlande), est un logicien, mathématicien et philosophe britannique. 

Il est le créateur de la logique moderne, fondée sur une structure algébrique et
sémantique, que l’on appelle algèbre de Boole en son honneur.
*Article Wikipedia sur [George Boole](https://fr.wikipedia.org/wiki/George_Boole)*{.cite-source}
:::

## Algèbre de Boole

Dans le monde noir et blanc des idéaux, il y a une vérité absolue. C'est-à-dire que tout est vrai
ou faux . Dans ce contexte philosophique, considérons les exemples suivants:

> "Un plus un égale deux." Vrai ou faux? 

C'est (sans doute) vrai!

> "1 + 1 = 2 ET 2 + 2 = 4." Vrai ou faux? 

C'est aussi vrai.

Mais qu'en est-il:

> "1 + 1 = 3 OU Sydney est en Australie" Vrai ou faux? 

C'est vrai! Bien que 1 + 1 = 3 ne soit pas vrai, le `OU` dans l’instruction a indiqué que, si l’une
ou l’autre partie de l’instruction est vraie, l’instruction entière l’est également.

Considérons maintenant un exemple plus déconcertant

> "2 + 2 = 4 OU 1 + 1 = 3 ET 1 - 3 = -1" Vrai ou faux? 

La vérité ou la fausseté des déclarations dépend de l’ordre dans lequel vous évaluez la
déclaration. Si vous évaluez d'abord "2 + 2 = 4 `OU` 1 + 1 = 3", la déclaration est fausse et sinon
vraie. Comme en algèbre ordinaire, il est nécessaire de définir certaines règles pour régir l’ordre
d'évaluation, afin d'éviter toute ambiguïté.

Avant de décider dans quel ordre évaluer les énoncés, nous faisons ce que la plupart des
mathématiciens aiment faire: remplacer les phrases par des symboles. Soit x la vérité ou la
fausseté de l’énoncé 2 + 2 = 4. Soit y la vérité ou la fausseté de l’énoncé 1 + 1 = 3. Soit z la
vérité ou la fausseté de l’énoncé 1 - 3 = -1.

Ensuite, l’exemple ci-dessus peut être récrit de manière plus compacte:

$$
Proposition\ 1\ \textrm{ou}\ Proposition\ 2\ \textrm{et}\ Proposition\ 3
$$

On écrira dans ce cours les variables booléennes avec des lettres majuscules: P, Q, R...

$$
P\ \textrm{ou}\ Q\ \textrm{et}\ R
$$

Pour aller encore plus loin, les mathématiciens remplacent également **OR par +** et **AND par ×**,
l’énoncé devient:

$$
P + Q \times R
$$

Maintenant que l’ordre de priorité est clair. Nous évaluons (Q ET R) en premier, puis `OU` avec le P.

La déclaration "P + Q⋅R" est vraie ou symboliquement $P + Q⋅R = 1$ en notant 1 la valeur "VRAI".

Il y a une bonne raison pour laquelle nous avons choisi le signe multiplicatif pour l’opération
`AND`. Comme nous le verrons plus tard, nous pouvons établir des parallèles entre l’opération `AND` et
la multiplication.


#### Notations 

L’algèbre booléenne a des opérations (`ET` et `OU`) analogues à l’algèbre ordinaire que nous
connaissons et aimons, on rencontre parfois d'autres écritures plus spécifiques à cette algèbre.

+-----------+-------------------+-------------------------------+
| Opération | Écriture utilisée |     Écritures rencontrées     |
+===========+===================+===============================+
| ET        | ⋅                 | $\times$ ou  $\wedge$ ou rien |
|           |                   |                               |
| OU        | +                 | $\vee$                        |
+-----------+-------------------+-------------------------------+


## Tables de vérités des fonctions booléennes `AND` `OR` et `NOT`

Pour donner tous les résultats possibles d'une opération booléenne, on utilise fréquemment une
table de vérité qui donne la sortie de la fonction booléenne en fonction de la ou les entrées.

Nous allons dans un premier temps nous intéresser aux tables de vérité des [trois fonctions logiques fondamentales](https://fr.wikipedia.org/wiki/Alg%C3%A8bre_de_Boole_(logique)#Fonctions_logiques_fondamentales):


- le **NON LOGIQUE** 
- le **ET LOGIQUE**
- le **OU LOGIQUE** 

### Fonction NON LOGIQUE: `NOT`

La fonction logique `NOT` n'a qu'un argument, on la note symboliquement avec un ', une barre supérieure ou encore ¬. 

Elle renvoie l’inverse de son argument `FAUX` si l'argument est `VRAI`, et vice-versa.

+-----+--------+
|  P  | not(P) |
+=====+========+
| 0   | 1      |
|     |        |
| 0   | 0      |
+-----+--------+

#### Notations

+-----------+-------------------+----------------------------+
| Opération | Écriture utilisée |   Écritures rencontrées    |
+===========+===================+============================+
| NOT(P)    | P'                | $\neg P$ ou $\overline{P}$ |
+-----------+-------------------+----------------------------+


### Fonction ET LOGIQUE: `AND`

La  fonction `ET LOGIQUE` a deux arguments, elle renvoie `VRAI` si les deux arguments ont pour valeur `VRAI`.

+-----+-----+--------+
|  P  |  Q  | P et Q |
+=====+=====+========+
| 0   | 0   | 0      |
|     |     |        |
| 0   | 1   | 0      |
|     |     |        |
| 1   | 0   | 0      |
|     |     |        |
| 1   | 1   | 1      |
+-----+-----+--------+

On voit bien grâce à cette table pourquoi on a utilisé le signe `x` pour désigner la fonction ET LOGIQUE.

- 0 x 0 = 0
- 0 x 1 = 0
- 1 x 0 = 0
- 1 x 1 = 1

### Fonction OU LOGIQUE: `OR`

La  fonction `OU LOGIQUE` a deux arguments, elle renvoie `VRAI` si au moins un des deux arguments a pour valeur `VRAI`.

+-----+-----+--------+
|  P  |  Q  | P ou Q |
+=====+=====+========+
| 0   | 0   | 0      |
|     |     |        |
| 0   | 1   | 1      |
|     |     |        |
| 1   | 0   | 1      |
|     |     |        |
| 1   | 1   | 1      |
+-----+-----+--------+

On voit grâce à cette table que le signe `+` utilisé pour désigner la fonction OU LOGIQUE
fonctionne à peu près comme le `+` de notre algèbre traditionnelle.

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 1


## Tables de vérité composées

Les trois tables de vérité présentées ci-dessus sont les plus élémentaires et servent de jeux de
construction pour les plus complexes.

Supposons que nous voulions construire une table de vérité pour P⋅Q + R (c-à-d P ET Q OU R). 

Remarquez que cette table implique trois variables (P, Q et R), nous nous attendons donc à ce
qu'elle soit plus grande que les précédentes.

Pour construire une table de vérité, nous écrivons d’abord toutes les combinaisons possibles des
trois variables:

```
P 	Q 	R
---------
0 	0 	0
0 	0 	1
0 	1 	0
0 	1 	1
1 	0 	0
1 	0 	1
1 	1 	0
1 	1 	1
```


Nous complétons ensuite le tableau à la main en calculant la valeur que chaque combinaison produira
en utilisant l'expression P⋅Q + R.

```
P 	Q 	R  | P⋅Q+R
-----------|-----
0 	0 	0  |  0
0 	0 	1  |  1
0 	1 	0  |  0
0 	1 	1  |  1
1 	0 	0  |  0
1 	0 	1  |  1
1 	1 	0  |  1
1 	1 	1  |  1
```

La procédure que nous suivons pour produire des tables de vérité est maintenant claire. Voici
quelques exemples supplémentaires de tables de vérité.

::: {.appli titre="Construire des tables de vérité"}
Construire les tables de vérité suivantes:

- P + Q + R
- (P + Q⋅R)'
- (P + Q⋅R ') ⋅ S
:::

Voici pouvez consulter la page d'[exercices](./exo) pour vous entraîner.

## Équivalence d'expressions booléennes

En algèbre ordinaire, deux expressions peuvent être équivalentes, par exemple:

$$
x⋅z + y⋅z = (x + y)⋅ z
$$

La même chose peut être dite de l'algèbre booléenne. Construisons des tables de vérité pour:

$P⋅R + Q⋅R$ et $(P + Q)⋅ R $

```
P 	Q 	R  | P⋅R + Q⋅R
----------------------
0 	0 	0  |   0 
0 	0 	1  |   0 
0 	1 	0  |   0 
0 	1 	1  |   1 
1 	0 	0  |   0 
1 	0 	1  |   1 
1 	1 	0  |   0 
1 	1 	1  |   1 
```

```
P 	Q 	R  | (P + Q)⋅R
-----------------------
0 	0 	0  |   0 
0 	0 	1  |   0 
0 	1 	0  |   0 
0 	1 	1  |   1 
1 	0 	0  |   0 
1 	0 	1  |   1 
1 	1 	0  |   0 
1 	1 	1  |   1 
```

En comparant les deux tableaux, vous aurez remarqué que les résultats(c'est-à-dire la dernière
colonne) des deux tableaux sont identiques!

::: {.def terme=" Équivalence d'expressions booléennes"}
Nous disons que deux expressions booléennes sont équivalentes si la sortie de leurs tables de vérité est la même. 
:::

## Propriétés fondamentales de l’algèbre de BOOLE

#### Éléments neutres

- 0 est élément neutre de la fonction OU : $P+0=P$
- 0 est élément absorbant de la fonction ET : $P⋅0=0$
- 1 est élément neutre de la fonction ET : $P⋅1=P$
- 1 est élément absorbant de la fonction OU : $P+1=1$

#### Complémentarité

- $P+P'=1$
- $P⋅P'=0$

#### Commutativité

- du produit logique : $P⋅Q=Q⋅P$
- de la somme logique : $P+Q=Q+P$

#### Distributivité

- de la fonction ET par rapport à la fonction OU : $P⋅(Q+R)=P⋅Q+P⋅R$
- de la fonction OU par rapport à la fonction ET : $P+(Q⋅R)=(P+Q)⋅(P+R)$

#### Absorption

- $P+P⋅Q=P⋅1+P⋅Q=P⋅(1+Q)=P⋅1 = P$

#### Idempotence

- $P+P=P$
- $P⋅P=P$

#### Associativité

- du produit logique : $P⋅(Q⋅R)=(P⋅Q)⋅R=P⋅Q⋅R$
- de la somme logique : $P+(Q+R)=(P+Q)+R=P+Q+R$

#### Théorèmes de DE MORGAN

- Premier théorème : $(P+Q)'=P' ⋅ Q'$
- Deuxième théorème : $(P⋅ Q)'=P' + Q'$

## Règles et syntaxe dans les langages informatiques

+-------------------------+-----------+----------------------+
|        Opération        |  python   |      javascript      |
+=========================+===========+======================+
| **Valeurs booléennes**  |           |                      |
+-------------------------+-----------+----------------------+
| VRAI                    | `True`    | `true`               |
+-------------------------+-----------+----------------------+
| FAUX                    | `False`   | `false`              |
+-------------------------+-----------+----------------------+
| **Opérateurs booléens** |           |                      |
+-------------------------+-----------+----------------------+
| NON                     | `not a`   | `!a`                 |
+-------------------------+-----------+----------------------+
| ET                      | `a and b` | `a && b`             |
+-------------------------+-----------+----------------------+
| OU                      | `a or b`  | `a` &#124;&#124; `b` |
+-------------------------+-----------+----------------------+




## Sources

- https://en.m.wikibooks.org/wiki/High_School_Mathematics_Extensions/Logic
- http://info.blaisepascal.fr/nsi-les-booleens
- https://www.maxicours.com/se/cours/simplification-de-l-expression-logique-a-l-aide-des-regles-de-l-algebre-booleenne/
- http://www.courstechinfo.be/MathInfo/FctLogiques1.html
- https://www.plymouth.ac.uk/uploads/production/document/path/3/3760/PlymouthUniversity_MathsandStats_Boolean_algebra_and_logic_gates.pdf