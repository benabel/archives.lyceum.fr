---
tags: ['introduction', 'algorithme', 'programme']
---

Les ordinateurs et les programmes informatiques ont pris une place prépondérante dans nos vies, et il s'agit pour nous de mieux comprendre comment ils fonctionnent, afin de savoir comment traduire nos problèmes afin qu'ils puissent les résoudre.

> **L'objectif de l'enseignement de spécialité ISN** est d'approfondir les connaissances et les compétences des élèves en informatique, et plus généralement en sciences du numérique.
> L'ISN est un enseignement d'ouverture et de découverte des problématiques actuelles qui contribue au développement de la créativité chez les élèves et aide ceux-ci dans leur choix d'orientation.

[Source: Arrêté du 4 juillet 2017 fixant le programme d'ISN](https://www.legifrance.gouv.fr/eli/arrete/2017/7/4/MENE1719956A/jo)

Nous utiliserons cette année le langage [Python](https://www.python.org/) pour découvrir quelques **aspects fondamentaux** de l'informatique, mais surtout **du mode de pensée informatique**.

## La force de l'ordinateur

Aujourd'hui nos programmes informatiques sont capables de réaliser de multiples tâches comme par exemple jouer aux échecs, prédire quel sera votre prochain achat sur internet, calculer le nombre pi avec 10<sup>12</sup> décimales...

**Mais en réalité un ordinateur ne sait effectuer que deux choses:**

1. Calculer.
2. Mémoriser des valeurs et des résultats.

Nos ordinateurs actuels réalisent quelques milliards d'opérations par seconde, et sont capables de stocker l'information contenue dans environ 1,5 millions de livres.

Ainsi même si les ordinateurs ne sont capables que d'effectuer de simples opérations, leur force va résider dans leur rapidité et leur capacité de mémorisation, et bien sûr ce n'est pas fini.

## Le rôle de l'informaticien

Et l'homme dans tout ça! Bien sûr il n'est pas capable de réaliser des opérations aussi rapidement, non plus de retenir le contenu de millions de livres; mais il va devoir adopter un mode de pensée spécifique qui va lui permettre de faire résoudre ses problèmes par un ordinateur. Et pour cela il va falloir...

**penser de façon algorithmique!**

Et afin qu'un ordinateur puisse résoudre un problème, il faut réussir à traduire ce problème sous la forme d'un algorithme, puis d'un programme pour qu'il puisse être compris par l'ordinateur.

## Qu'est ce qu'un algorithme?

Vous avez déjà rencontré la notion d'algorithme en classe de mathématiques.

[[def |Algorithme]]
|Un algorithme est une méthode, une suite d'instructions pour obtenir un résultat.

Ce type de méthode est utilisé depuis la nuit des temps pour fabriquer des tissus, nouer des cordages, ou bien préparer des aliments.

La révolution de l'informatique survenue au milieu du XX<sup>e</sup> siècle vient du fait que l'on a pu faire exécuter ces algorithmes à des machines. Pour cela il a fallu exprimer ces algorithmes dans des langages de programmation afin qu'ils puissent être exécutés par les ordinateurs.

### Exemple: l'algorithme d'Héron

Voici un exemple d'algorithme antique utilisé pour calculer une racine carré: l'algorithme d'Héron.

Pour chercher la racine carrée d'un nombre _x_:

1. Commencer par choisir un nombre _s_ au hasard si possible le plus proche possible de la valeur de la racine carrée recherchée: **une semence**.
2. Porter _s_ au carré.
3. Comparer cette valeur au nombre _x_.
4. Si cette valeur est trop loin de la valeur x, recommencer les étapes 1 à 3 en utilisant comme semence la moyenne de s et de x/s:

$$
\frac{1}{2}(s+\frac{x}{s})
$$

_A vous:_ Essayez s'utiliser cet algorithme pour calculer la racine carrée de 16 en utilisant une semence initiale de 3, et en arrêtant l'algorithme si $s^{2} = 16 \pm 0.1$

## Qu'est ce qu'un programme?

[[def | Programme]]
|Un programme est la forme électronique et numérique d'un algorithme exprimé dans un langage de programmation. [Source Wikipedia](http://fr.wikipedia.org/wiki/Programme_informatique)

Pour écrire un programme, on utilise un langage de programmation, dans notre cas [Python](https://www.python.org/). Ce langage possède une syntaxe particulière qui va permettre de traduire chacune des instructions de notre programme en une suite d'instructions électroniques à suivre par les composants de notre ordinateur pour effectuer les calculs demandés.

Vous pouvez trouver le livre d'ISN en Python sur le site [Science info lycée](https://wiki.inria.fr/sciencinfolycee/Fichier:Informatique_et_Sciences_du_Num%C3%A9rique_-_Sp%C3%A9cialit%C3%A9_ISN_en_Terminale_S._version_Python.pdf) de l'[INRIA](https://www.inria.fr/).
