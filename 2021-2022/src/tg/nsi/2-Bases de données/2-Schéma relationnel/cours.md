---
tags: ["bases de données", "algèbre relationnel", "schéma relationnel"]
---

::: programme

+--------------------------+-------------------------------------+------------------------------------+
|         Contenus         |         Capacités attendues         |            Commentaires            |
+==========================+=====================================+====================================+
| Base de données          | Savoir distinguer la structure      | La structure est un ensemble de    |
| relationnelle.           | d’une base de données de son        | schémas relationnels qui           |
|                          | contenu.                            | respecte les contraintes du        |
|                          |                                     | modèle relationnel.                |
|                          | Repérer des anomalies dans le       |                                    |
|                          | schéma d’une base de données.       | Les anomalies peuvent être des     |
|                          |                                     | redondances de données ou des      |
|                          |                                     | anomalies d’insertion, de          |
|                          |                                     | suppression, de mise à jour.       |
|                          |                                     |                                    |
|                          |                                     | On privilégie la manipulation de   |
|                          |                                     | données nombreuses et              |
|                          |                                     | réalistes.                         |
+--------------------------+-------------------------------------+------------------------------------+

:::

> Nous allons voir plus en détail ce que sont les bases de données relationnelles et mettre en
> évidence quelques anomalies qui peuvent être rencontrées.

## Vocabulaire

Nous allons définir le vocabulaire de l'algèbre relationnelle inventée en 1970 par Edgar Frank
Codd, et le mettre en relation avec le vocabulaire plus abordable des tableaux.

<wc-wikimage class="half center" title="Table_relationnel.png" caption="Le vocabulaire des bases de données."></wc-wikimage>

Relation

: Dans le modèle relationnel, les données sont stockées dans des tables, aussi
appelées **relations**.

L'illustration ci-dessus présente une relation appelée `voiture`.

Attribut

:   Le nom d'une colonne d'une relation est appelé **attribut**.

La relation `voiture` possède trois attributs: `marque`, `couleur` et `plaque`.

n-uplet

:   Un enregistrement (ligne) d'une relation est appelé **n-uplet**.

::: examples

- `ID voiture`, `marque` de la table voiture.
- `ID carburant`, `type` de la table carburant.

:::

Domaine

:   Le **domaine** d'un attribut est l'ensemble des valeurs qui peuvent être prises par cet attribut.

:::examples

Une base de donnée [sqlite](https://www.sqlite.org/datatype3.html#storage_classes_and_datatypes) il
n'y a que cinq domaines de valeurs possibles:

- `NULL`. La valeur est une valeur NULL.
- `INTEGER`. La valeur est un entier signé, stocké dans 1, 2, 3, 4, 6 ou 8 octets en fonction de
  l'amplitude de la valeur.
- `REAL`. La valeur est une valeur à virgule flottante, stockée sous forme de nombre à virgule
  flottante IEEE de 8 octets.
- `TEXT`. La valeur est une chaîne de texte, stockée à l'aide du codage de la base de données
  (UTF-8, UTF-16BE ou UTF-16LE).
- `BLOB`. La valeur est une donnée binaire brute, stocké exactement comme elle a été entrée.

Dans le SGBD MariaDB il y a beaucoup plus de types avec notamment des formats
pour les dates [(voir doc)](https://mariadb.com/kb/en/data-types/).

:::

Pour résumer, le tableau suivant montre celui, rigoureux, issu de l'algèbre relationnelle et celui,
plus vague, correspondant à la représentation par table. Les termes de chaque ligne seront
considérés comme équivalents, mais on privilégiera les premiers qui sont plus précis.

+----------------------------------+--------------------------------------+
| Terme de l'algèbre relationnelle | Terme de la représentation par table |
+==================================+======================================+
| Relation                         | Table                                |
+----------------------------------+--------------------------------------+
| n-uplet                          | ligne                                |
+----------------------------------+--------------------------------------+
| Nom d’attribut                   | Nom de colonne                       |
+----------------------------------+--------------------------------------+
| Valeur d’attribut                | Cellule                              |
+----------------------------------+--------------------------------------+
| Domaine                          | Type                                 |
+----------------------------------+--------------------------------------+

[Philippe Rigaux sur
sql.dbpedia.fr CC-BY-NC-SA](http://sql.bdpedia.fr/relationnel.html#le-schema){.cite-source}


## Clés primaire et secondaire


Clé primaire

:   Chaque ligne de la table doit comporter un attribut qui l'identifie de façon **unique**, on
l'appelle la **clé primaire**.

::: examples

- Dans la table `voiture` l'attribut `plaque` pourrait constituer la clé primaire.
- En s'inscrivant sur un site, on vous impose d'utiliser un `identifiant` unique pour créer votre
  ligne dans la base de données.
- L'email d'un utilisateur peut servir de clé primaire, mais ce n'est pas conseillé.

:::

::: plus

On préférera utiliser une clé primaire complètement indépendante des données métier, afin de
s'assurer que le champ est toujours rempli et n'évolue pas dans le temps.

Toutes les bases de données proposent des mécanismes prenant en charge une
numérotation utilisable pour les clés primaires.

:::


Clé secondaire

: Une clé secondaire ou _clé étrangère_ est une clé utilisée dans une table pour
faire référence à un enregistrement d'une autre table.

::: example

<wc-wikimage class= "half center" title="Relation.png" caption="La clé primaire ID carburant de la relation carburant sert de clé secondaire dans la relation voiture."></wc-wikimage>

:::

::: prop

L'ensemble constitué d'une *clé primaire* et d'une *clé étrangère* sert à établir des *relations*
entre tables.

:::


## Contraintes d'intégrité

Les SGBD modernes permettent de garder les données conformes au modèle relationnel. **Trois types
de contraintes d'intégrité** font partie intégrante du modèle de données relationnel:

- **L'intégrité de clé primaire**: cette règle stipule que chaque table doit avoir une clé primaire
  et que la ou les colonnes choisies pour être la clé primaire doivent être uniques et non nulles.

::: example

Dans la table `voiture` essayez d'ajouter la troisième voiture avec l'ID 2, l'ajout sera refusé,
car `ID voiture` a été déclaré comme clé primaire

:::

- **L'intégrité référentielle** est une situation dans laquelle pour chaque information d'une table
  A qui fait référence à une information d'une table B, l'information référencée existe dans la
  table B.

::: examples

Si vous tentez de supprimer la ligne 2 de la table `carburant`, le SGBD vous le refusera en raison
de sa présence dans la table des voitures à la ligne de la BMW.

Il est aussi impossible d'ajouter dans la table `voitures` un `id carburant` qui n'existe pas dans
la relation `carburant`.

:::

- **L'intégrité du domaine** spécifie que toutes les colonnes d'une base de données relationnelle
  doivent être déclarées sur un domaine défini.

::: example

S'assurer qu'une valeur est bien un email, un numéro de téléphone ou un code postal.

Le support des types dans sqlite étant relativement limité, vous pouvez par exemple vérifier qu'on
ne peut ajouter un `id voiture` qui ne soit pas un entier comme `A` par exemple.

:::

::: prop

Une fois la contrainte déclarée, le SGBD refusera toute modification du contenu de la base de
données qui violerait une de ces règles et casserait l'intégrité. 

:::

::: appli

Télécharger la base de données sqlite `voitures.db` à l'adresse suivante:
https://apps.lyceum.fr/sqlite/dbs/voitures.db.

L'ouvrir dans sqliteBrowser et vérifier que les trois contraintes d'intégrité sont bien gérées par
le SGBD sqlite.

:::

## Exemples d'anomalies

Nous allons montrer sur un l'exemple d'une base de donnée de DVD _mal construite_ quels types
d'anomalies peuvent apparaître.

![exemple de table de DVDs](../../images/table-univ-orleans.png)

[Mirian Halfeld-Ferrari Université d'Orléans](https://www.univ-orleans.fr/lifo/Members/Mirian.Halfeld/Cours/BD/iutA2-intro.pdf){.cite-source}

Comme vous le voyez cette table est mal construite:

- Les données sont _redondantes_: À chaque fois qu’un film apparaît, les valeurs pour le genre,
length et rating apparaissent aussi.
- Les attributs concernent à la fois le DVD et le film, il **faudrait créer des tables
  séparées**.

Maintenant, intéressons-nous aux anomalies qui pourraient se présenter:

- **Anomalie de mise à jour**: Que se passe-t-il si le film `Elisabeth` est renommé `Élisabeth`
  pour satisfaire les clients francophones?
- **Anomalie d’insertion**: Que se passe-t-il avec l’insertion du n-uplet : `〈102,1/1/99,
  Elisabeth, drama,110, PG13〉`
- **Anomalie de suppression**: Que se passe-t-il lors de la suppression du DVD numéro `123`?

## Comment concevoir une base de données bien structurée?

Une base de données bien structurée:

- Économise de l'espace disque en éliminant les données redondantes.
- Maintient l'exactitude et l'intégrité des données.
- Fournit un accès facile aux données utiles.

Le processus de conception peut-être scindé comme suit:

1. Analyse des besoins ou identification de l'objectif de votre base de données.
2. Organisation des données en tableaux.
3. Spécification des clés primaires et analyse des relations.

L'utilisation d'un diagramme relationnel aide à visualiser les relations entre les données.

Voici l'exemple de la base de données «[Rock60](https://apps.lyceum.fr/sqlite)» qui rassemble des
données sur les albums de rock des années 60 ainsi que les musiciens et producteurs qui y ont
participé.

![Schéma relationnel de la base de données rock60](../../images/BDD-ROCK60-MODELE-LOGIQUE.png)


Outre l'utilisation de clés primaires et secondaires, on a ajouté des tables particulières qui
permettent de relier deux tables lorsque qu'on a une relation dite N:N.

::: example

Une personne peut jouer dans plusieurs groupes et un groupe est constitué de plusieurs personnes.

La table `Joue Dans` permet d'exprimer cette relation en utilisant deux clés étrangères.

:::

::: appli

En étudiant le schéma ci-dessus:

- Donner le nom de toutes les clés primaires.
- Donner le nom de toutes les clés secondaires.
- Donner le nom de toutes les tables exprimant les relations N:N comme la table `Joue Dans`.

:::
