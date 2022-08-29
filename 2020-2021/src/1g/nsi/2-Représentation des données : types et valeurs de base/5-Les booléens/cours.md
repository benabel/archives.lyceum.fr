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
| `ET`, `or`, `not`.            |                                     | comme l’addition binaire sont         |
|                                |                                     | présentées.                           |
| Expressions booléennes         |                                     |                                       |
|                                |                                     | L’attention des élèves est attirée    |
|                                |                                     | sur le caractère séquentiel de        |
|                                |                                     | certains opérateurs booléens.         |
+--------------------------------+-------------------------------------+---------------------------------------+
:::

<!-- Uniformisation des notations & ‖ ! pour se rapprocher du C ou js car on est en info

variables notées comme des variables propositionnelles: P Q R(Wikipedia) au lieu de x,y,z ou a,b,c,d...
https://fr.wikipedia.org/wiki/Variable_propositionnelle

A VOIR Notebook logique avec sympy le not est noté ! et OU |

On peut envisager un TP TD simplifications par python vérifications

 -->

> Au XIXe siècle, le britannique _Georges Boole_ crée une algèbre pour traduire les raisonnements
> logiques en opérations. Plus tard, au début de l'informatique dans les années 1930, _Claude
> Shannon_ montre dans sa
> [thèse](https://en.wikipedia.org/wiki/A_Symbolic_Analysis_of_Relay_ET_Switching_Circuits) qu'il
> devrait également être possible d'utiliser des arrangements de relais électriques pour résoudre
> des problèmes d'algèbre booléenne. La route était ouverte à l'apparition des premier ordinateurs
> électriques, et bientôt électroniques.


Dans ce cours, nous allons nous intéresser à un type simple, les booléens qui ne possèdent que deux
valeurs et qui sont donc codés que sur un seul bit:

- *FAUX*: dont la syntaxe peut varier suivant les langages de programmation; `0` `False`, `false` ...
- *VRAI*: noté `0`, `True`, `true` ...

Ces types sont extrêmement utilisés en informatique notamment pour l’exécution **conditionnelle**
de code en fonction des conditions. La fameuse instruction `if ... else`.

Comme il n'existe que deux valeurs booléennes, les opérations ne sont pas les mêmes qu'avec les nombres.

## Introduction à l'algèbre de Boole

Dans le monde noir et blanc des idéaux, il y a une vérité absolue. C'est-à-dire que tout est vrai
ou faux. Dans ce contexte philosophique, considérons les exemples suivants:

> "Un plus un égale deux." **Vrai ou faux?** 

C'est (sans doute) vrai!

> "1 + 1 = 2" ET "2 + 2 = 4" **Vrai ou faux? **

C'est aussi vrai.

Mais qu'en est-il:

> "1 + 1 = 3" OU "Sydney est en Australie" **Vrai ou faux?**

C'est vrai! Bien que 1 + 1 = 3 ne soit pas vrai, le `OU` dans l’instruction a indiqué que, si l’une
ou l’autre partie de l’instruction est vraie, l’instruction entière l’est également.

Considérons maintenant un exemple plus déconcertant

> "2 + 2 = 4" OU "1 + 1 = 3" ET "1 - 3 = -1" **Vrai ou faux?**

La vérité ou la fausseté des déclarations dépend de l’ordre dans lequel vous évaluez la
déclaration. Si vous évaluez d'abord "2 + 2 = 4 `OU` 1 + 1 = 3", la déclaration est fausse et sinon
vraie. Comme en algèbre ordinaire, il est nécessaire de définir certaines règles pour régir l’ordre
d'évaluation, afin d'éviter toute ambiguïté.

Avant de décider dans quel ordre évaluer les énoncés, nous faisons ce que la plupart des
mathématiciens aiment faire, remplacer les phrases par des symboles ces symboles représentent ce
que l'on appelle des **variables propositionnelles**:

- Soit $P$ la vérité ou la fausseté de l’énoncé 2 + 2 = 4.
- Soit $Q$ la vérité ou la fausseté de l’énoncé 1 + 1 = 3.
- Soit $R$ la vérité ou la fausseté de l’énoncé 1 - 3 = -1.

Ensuite, l’exemple ci-dessus peut être récrit de manière plus compacte:

$$
P\ \textrm{ou}\ Q\ \textrm{et}\ R
$$

Pour aller encore plus loin, les mathématiciens remplacent également les opérations par des signes
**OU par $\vee$** et **ET par $\wedge$**, l’énoncé devient:

$$
P \vee Q \wedge R
$$

Il faut également établir l’ordre de priorité. Nous évaluons `ET` en premier, puis `OU` avec
le P.

La déclaration $P \vee Q \wedge R$ est vraie on peut écrire:

 $$
 P \vee Q \wedge R = \textrm{VRAI}
 $$ 

## Opérations fondamentales et notations

Dans ce cours on notera les valeurs $\textrm{VRAI} = 1$ et $\textrm{FAUX} = 0$.

L’algèbre booléenne est construite à partir de [3 opérations
fondamentales](https://fr.wikipedia.org/wiki/Alg%C3%A8bre_de_Boole_(logique)#Fonctions_logiques_fondamentales),
les notations dépendent du domaine d'étude (logique, électronique, algèbre...), on utilisera une
notation proche de _langages de programmation_ usuels tels que le C ou le javascript.

+-----------+-------------------+------------------------------------+
| Opération | Écriture utilisée |       Écritures rencontrées        |
+===========+===================+====================================+
| ET        | &                 | $\times$ . ou  $\wedge$            |
+-----------+-------------------+------------------------------------+
| OU        | ‖                 | + ou $\vee$                        |
+-----------+-------------------+------------------------------------+
| NON       | !                 | P', ~P, $\neg P$ ou $\overline{P}$ |
+-----------+-------------------+------------------------------------+

::: prop

Le ET logique est **prioritaire** sur le OU.

:::

On notera dans ce cours les variables booléennes avec des lettres majuscules: $\displaystyle P$,
$\displaystyle Q$, $\displaystyle R$... On parle de [variable
propositionnelle](https://fr.wikipedia.org/wiki/Variable_propositionnelle).

Dans les langages informatiques, les syntaxes peuvent être encore différentes!

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

## Tables de vérités

::: {.def terme="Tables de vérité"}

Une table de vérité donne tous les résultats possibles d'une opération booléenne en fonction de la
ou les entrées.

:::

Nous allons dans un premier temps nous intéresser aux tables de vérité des trois fonctions
logiques
fondamentales:

### Fonction NON LOGIQUE: `!` 

La fonction logique `NON` n'a qu'un argument. 

Elle renvoie l’inverse de son argument `FAUX` si l'argument est `VRAI`, et vice-versa.

+-----+-----+
|  P  | !P  |
+=====+=====+
| 0   | 1   |
|     |     |
| 0   | 0   |
+-----+-----+

### Fonction ET LOGIQUE: `&`

La  fonction `ET LOGIQUE` a deux arguments, elle renvoie `VRAI` si les deux arguments ont pour
valeur `VRAI`.

+-----+-----+-------+
|  P  |  Q  | P & Q |
+=====+=====+=======+
| 0   | 0   | 0     |
|     |     |       |
| 0   | 1   | 0     |
|     |     |       |
| 1   | 0   | 0     |
|     |     |       |
| 1   | 1   | 1     |
+-----+-----+-------+

On voit bien grâce à cette table pourquoi on utilise parfois le signe `x` pour désigner la fonction
ET LOGIQUE.

- 0 x 0 = 0
- 0 x 1 = 0
- 1 x 0 = 0
- 1 x 1 = 1

### Fonction OU LOGIQUE: `‖`

La  fonction `OU LOGIQUE` a deux arguments, elle renvoie `VRAI` si au moins un des deux arguments a
pour valeur `VRAI`.

+-----+-----+-------+
|  P  |  Q  | P ‖ Q |
+=====+=====+=======+
| 0   | 0   | 0     |
|     |     |       |
| 0   | 1   | 1     |
|     |     |       |
| 1   | 0   | 1     |
|     |     |       |
| 1   | 1   | 1     |
+-----+-----+-------+

On voit grâce à cette table que le signe `+` utilisé pour désigner la fonction OU LOGIQUE
fonctionne à peu près comme le `+` de notre algèbre traditionnelle.

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 1

::: {.plus titre="XOR, NAND et NOR"}

Bien que toutes les opérations booléennes puissent être écrites avec les trois opérations
fondamentales ET, OU et NON, on utilise fréquemment d'autres opérations:

- **XOR**: OU EXCLUSIF cette opération renvoie vrai uniquement si P ou Q sont vraies mais pas les
  deux $P \& !Q \lVert !P \& Q$.
- **NAND**: NON ET cette opération renvoie faux uniquement si P et Q sont vraies $!(P \& Q)$.
- **NOR**: NON OU cette opération renvoie vrai uniquement si P et Q sont fausses $!(P \lVert Q)$.

Vous pouvez construire les tables de vérité de ces fonctions en application.

:::


### Tables de vérité composées

Les trois tables de vérité présentées ci-dessus sont les plus élémentaires et servent de jeux de
construction pour les plus complexes.

Supposons que nous voulions construire une table de vérité pour P & Q ‖ R (c-à-d P ET Q OU R). 

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
en utilisant l'expression P&Q ‖ R.

```
P 	Q 	R  | P & Q ‖ R
-----------|----------
0 	0 	0  |     0
0 	0 	1  |     1
0 	1 	0  |     0
0 	1 	1  |     1
1 	0 	0  |     0
1 	0 	1  |     1
1 	1 	0  |     1
1 	1 	1  |     1
```

La procédure que nous suivons pour produire des tables de vérité est maintenant claire. Voici
quelques exemples supplémentaires de tables de vérité.

::: {.appli titre="Construire des tables de vérité"}
Construire les tables de vérité suivantes:

- P ‖ Q ‖ R
- !(P ‖ Q & R)
- (P ‖ Q & !R) & S
:::

Voici pouvez consulter la page d'[exercices](./exo) pour vous entraîner.

## Équivalence d'expressions booléennes

En algèbre ordinaire, deux expressions peuvent être équivalentes, par exemple:

$$
x \times z + y \times z = (x + y) \times z
$$

La même chose peut être dite de l'algèbre booléenne. Construisons des tables de vérité pour:

$P \& R \lVert Q \& R$ et $(P \lVert Q) \& R$

```
P 	Q 	R  | P & R ‖ Q & R
--------------------------
0 	0 	0  |       0 
0 	0 	1  |       0 
0 	1 	0  |       0 
0 	1 	1  |       1 
1 	0 	0  |       0 
1 	0 	1  |       1 
1 	1 	0  |       0 
1 	1 	1  |       1 
```

```
P 	Q 	R  | (P ‖ Q) & R
------------------------
0 	0 	0  |     0 
0 	0 	1  |     0 
0 	1 	0  |     0 
0 	1 	1  |     1 
1 	0 	0  |     0 
1 	0 	1  |     1 
1 	1 	0  |     0 
1 	1 	1  |     1 
```

En comparant les deux tableaux, vous aurez remarqué que les résultats(c'est-à-dire la dernière
colonne) des deux tableaux sont identiques!

::: {.def terme=" Équivalence d'expressions booléennes"}

Nous disons que deux expressions booléennes sont équivalentes si la sortie de leurs tables de
vérité est la même. L'équivalence d'expressions booléennes est notée avec le signe =.

:::

## Les lois de l’algèbre de BOOLE

**Il n'est pas demandé d'apprendre ces lois.**

+---------------------+-------------------------------------------------------------------------+
|    Nom de la loi    |                          Écriture mathématique                          |
+=====================+=========================================================================+
| Éléments neutres    | $P\lVert0=P$                                                            |
|                     |                                                                         |
|                     | $P\&1=P$                                                                |
+---------------------+-------------------------------------------------------------------------+
| Éléments absorbants | $P\&0=0$                                                                |
|                     |                                                                         |
|                     | $P\lVert 1=1$                                                           |
+---------------------+-------------------------------------------------------------------------+
| Complémentarité     | $P\lVert !P=1$                                                          |
|                     |                                                                         |
|                     | $P\& !P=0$                                                              |
+---------------------+-------------------------------------------------------------------------+
| Idempotence         | $P\lVert P=P$                                                           |
|                     |                                                                         |
|                     | $P \&P = P$                                                             |
+---------------------+-------------------------------------------------------------------------+
| Commutativité       | $P \& Q = Q \& P$                                                       |
|                     |                                                                         |
|                     | $P \lVert Q = Q \lVert P$                                               |
+---------------------+-------------------------------------------------------------------------+
| Associativité       | $P \& (Q \& R)= (P \& Q) \&R =P \&Q \& R$                               |
|                     |                                                                         |
|                     | $P \lVert ( Q \lVert R ) = (P \lVert Q) \lVert R = P \lVert Q \lVert R$ |
+---------------------+-------------------------------------------------------------------------+
| Distributivité      | $P \& ( Q \lVert R ) = P \& Q \lVert P \& R$                            |
|                     |                                                                         |
|                     | $P \lVert ( Q \& R ) =(P \lVert Q)\&(P \lVert R)$                       |
+---------------------+-------------------------------------------------------------------------+
| Lois de De Morgan   | $!(P \lVert Q)= !P \& !Q$                                               |
|                     |                                                                         |
|                     | $!(P\& Q)= !P \lVert !Q$                                                |
+---------------------+-------------------------------------------------------------------------+

Ces lois peuvent facilement être démontrées à l'aide de tables de vérité.

::: ref

- https://en.m.wikibooks.org/wiki/High_School_Mathematics_Extensions/Logic
- http://info.blaisepascal.fr/nsi-les-booleens
- https://www.maxicours.com/se/cours/simplification-de-l-expression-logique-a-l-aide-des-regles-de-l-algebre-booleenne/
- http://www.courstechinfo.be/MathInfo/FctLogiques1.html
- https://www.plymouth.ac.uk/uploads/production/document/path/3/3760/PlymouthUniversity_MathsETStats_Boolean_algebra_ET_logic_gates.pdf

:::