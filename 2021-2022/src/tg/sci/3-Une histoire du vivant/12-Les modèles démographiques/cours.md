---
tags: ["cours", "math", "terminale", "lycée", "enseignement scientifique"]
---

::: programme

+-----------------------------------------------------+------------------------------------------+
|                     **Savoirs**                     |             **Savoir-faire**             |
+=====================================================+==========================================+
| Un modèle mathématique simple est le modèle         | Exprimer u(n) en fonction de u(0) et n.  |
| linéaire.                                           |                                          |
|                                                     | Produire et interpréter des graphiques   |
| Une grandeur discrète $u$ varie de manière linéaire | statistiques traduisant l’évolution      |
| en fonction d’un palier entier $n$ si sa variation  | d’effectif d’une population ou de        |
| absolue $u(n+1)-u(n)$ est constante. Dans ce cas,   | ressources, notamment sous forme de      |
| les points $(n, u(n))$ sont situés sur une droite.  | nuages de points.                        |
| La suite de terme général $u(n)$ est arithmétique.  |                                          |
|                                                     | À l’aide d’une calculatrice ou d’un      |
| Dans la réalité, pour une population dont la        | tableur, ajuster un nuage de points par  |
| variation absolue est presque constante d’un        | une droite et utiliser ce modèle         |
| palier à l’autre, on peut ajuster le nuage de       | linéaire pour effectuer des prévisions.  |
| points qui la représente par une droite (modèle     |                                          |
| linéaire).                                          |                                          |
+-----------------------------------------------------+------------------------------------------+
| Le modèle linéaire est inadapté pour représenter    | Exprimer u(n) en fonction de u(0) et de  |
| l’évolution d’une grandeur dont la variation        | n.                                       |
| absolue change fortement d’un palier à l’autre.     |                                          |
|                                                     | À partir de données démographiques,      |
| Une grandeur discrète $u$ varie de manière          | calculer le taux de variation d’une      |
| exponentielle en fonction du palier entier n si sa  | population entre deux dates.             |
| variation absolue $u(n+1) - u(n)$ est               |                                          |
| proportionnelle à sa valeur courante $u(n)$. Dans   | Calculer l’effectif final d’une          |
| ce cas, sa variation relative (ou taux de           | population à partir de son effectif      |
| variation) est constante et la suite de terme       | initial, de son taux de natalité et de   |
| général $u(n)$ est géométrique.                     | son taux de mortalité. Dans la           |
|                                                     | réalité, pour une population dont le     |
|                                                     | taux de variation est presque constant   |
|                                                     | d’un palier à l’autre, on peut ajuster   |
|                                                     | le nuage de points par un modèle         |
|                                                     | exponentiel.                             |
+-----------------------------------------------------+------------------------------------------+
| Le modèle démographique de Malthus est un modèle    | À l’aide d’un tableur, d’une             |
| exponentiel d’évolution de l’effectif de la         | calculatrice ou d’une représentation     |
| population. Il prévoit que l’effectif de la         | graphique, calculer le temps de          |
| population décroît vers 0 si le taux de mortalité   | doublement d’une population sous         |
| est supérieur au taux de natalité et croît vers     | l’hypothèse de croissance exponentielle. |
| l’infini si le taux de natalité est supérieur au    |                                          |
| taux de mortalité.                                  | À partir de documents fournis, proposer  |
|                                                     | un modèle de croissance de ressources    |
| Si les prédictions du modèle de Malthus peuvent se  | alimentaires (par exemple la production  |
| révéler correctes sur un temps court, elles sont    | mondiale de blé ou de riz) et la         |
| irréalistes sur un temps long, notamment en raison  | comparer à une croissance exponentielle. |
| de l’insuffisance des ressources disponibles.       |                                          |
|                                                     | Comparer les valeurs fournies par un     |
| Des modèles plus élaborés prévoient que la          | modèle à des données réelles afin de     |
| population mondiale atteindra environ 10 milliards  | tester sa validité.                      |
| d’humains en 2050. modèle de Malthus, prédire       |                                          |
| l’effectif d’une population au bout de n années.    |                                          |
+-----------------------------------------------------+------------------------------------------+

:::


::: intro

Dans le cadre de l’étude de l’évolution des populations, il est important de prédire leur effectif
futur, mais aussi la manière dont vont évoluer les ressources qui leur sont nécessaires. Pour
prédire l’évolution d’un système quelconque, les scientifiques utilisent des modèles
mathématiques. La présentation de l’exemple historique de Malthus permet de mettre en œuvre cette
démarche mathématique dans le cas discret (correspondant à une variation par paliers).

:::

## Evolution de la population

<wc-wikimage title="World_population_(UN)_fr.svg" caption="Evolutions et prédictions des populations du monde."></wc-wikimage>

L'évolution de la population dépend du taux de variation $t$ de la population.

$$
t = taux_{natalité} - taux_{mortalité}
$$

Pour prédire la population future, il faut faire des hypothèses sur les facteurs qui conditionnent
la natalité et la mortalité des populations comme:

- leur alimentation(ressources, qualité, quantité...)
- leur santé(qualité des soins, accès aux soins...)
- leur bonheur
- ...

<wc-wikimage title="Popu_mondiale_1800-2100_UNrev2013.jpg" caption="Population mondiale : 3 scénarios d'évolution possible de la population mondiale. sources : Nations unies, Projections de population 2013 ; 1800-1950 : estimations US Census Bureau"></wc-wikimage>


## Modèle linéaire

Une grandeur discrète $u$ varie de manière linéaire en fonction d’un palier entier $n$ si sa
variation absolue $u(n+1)-u(n)$ est constante.

Dans ce cas, les points $(n, u(n))$ sont situés sur une droite. La suite de terme général $u(n)$
est **arithmétique**.

$$
u(n+1)-u(n)=r
$$

$$
u(n)=u(0)+n\times r
$$

::: appli

Un village avait une population de 1000 habitants en l'an 1990, sa population diminue de 10
habitants par an.

1. Exprimer u(n) en fonction de $u(0)$ et $n$. $u(0)$ étant la population en 1990.
2. Représenter l'allure de la population en fonction du temps entre 1990 et 1995.
3. Prédire la population du village en 2020.
4. Même question en 2200. Commenter.

:::

## Modèle exponentiel

Une grandeur discrète $u$ varie de manière exponentielle en fonction du palier entier n si sa
variation absolue $u(n+1) - u(n)$ est proportionnelle à sa valeur courante $u(n)$.

Dans ce cas, sa variation relative (ou taux de variation) est constante et la suite de terme     
général $u(n)$ est **géométrique**.  

$$
\frac{u(n+1)}{u(n)}=q
$$

$$
u(n)=u(0)\times q^n
$$

En fonction du taux de variation $t$ de la population, on obtient le modèle de Malthus:

$$
u(n)=u(0)\times (1+t)^n
$$


::: appli

Une petite ville avait une population de 10 000 habitants en l'an 1990, sa population augmente de
5% par an.

1. Exprimer u(n) en fonction de $u(0)$ et $n$. $u(0)$ étant la population en 1995.
2. Représenter l'allure de la population en fonction du temps entre 1990 et 1995.
3. Prédire la population du village en 2020.
4. Même question en 2200. Commenter.

:::