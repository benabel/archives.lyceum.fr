---
tags: ["physique", 'relativité du mouvement', 'gravitation']
---

::: programme

**Notions abordées au collège (cycle 4)**

Vitesse (direction, sens, valeur), mouvements uniformes, rectilignes, circulaires, relativité des
mouvements, interactions, forces, expression scalaire de la loi de gravitation universelle,
force de pesanteur.

+-----------------------------------+-------------------------------------------------------------------+
|      **Notions et contenus**      |                      **Capacités exigibles**                      |
|                                   |      **_Activités expérimentales support de la formation_**       |
+===================================+===================================================================+
| Système.                          | Identifier les échelles temporelles et spatiales pertinentes      |
|                                   | de description d’un mouvement.                                    |
| Échelles caractéristiques d’un    |                                                                   |
| système.                          | Choisir un référentiel pour décrire le mouvement d’un             |
|                                   | système.                                                          |
| Référentiel et relativité du      |                                                                   |
| mouvement.                        | Expliquer, dans le cas de la translation, l’influence du          |
|                                   | choix du référentiel sur la description du mouvement d’un         |
|                                   | système.                                                          |
+-----------------------------------+-------------------------------------------------------------------+
| Description du mouvement d’un     | Décrire le mouvement d’un système par celui d’un point et         |
| système par celui d’un point.     | caractériser cette modélisation en termes de perte                |
| Position. Trajectoire d’un point. | d’informations.                                                   |
|                                   |                                                                   |
|                                   | Caractériser différentes trajectoires.                            |
|                                   |                                                                   |
|                                   | **Capacité numérique** : représenter les positions                |
|                                   | successives d’un système modélisé par un point lors               |
|                                   | d’une évolution unidimensionnelle ou bidimensionnelle à           |
|                                   | l’aide d’un langage de programmation.                             |
+-----------------------------------+-------------------------------------------------------------------+
| Vecteur déplacement d’un point.   | Définir le vecteur vitesse moyenne d’un point.                    |
| Vecteur vitesse moyenne d'un      | Approcher le vecteur vitesse d'un point à l’aide du vecteur       |
| point.                            | déplacement $\overrightarrow{MM'}$, où M et M’ sont les positions |
|                                   | successives à des instants voisins séparés de Δt; le              |
| Vecteur vitesse d’un point.       | représenter.                                                      |
|                                   |                                                                   |
| Mouvement rectiligne.             | Caractériser un mouvement rectiligne uniforme ou non              |
|                                   | uniforme.                                                         |
|                                   |                                                                   |
|                                   | _Réaliser et/ou exploiter une vidéo ou une_                       |
|                                   | _chronophotographie d’un système en mouvement et_                 |
|                                   | _représenter des vecteurs vitesse; décrire la variation du_       |
|                                   | _vecteur vitesse._                                                |
|                                   |                                                                   |
|                                   | **Capacité numérique** : représenter des vecteurs vitesse         |
|                                   | d’un système modélisé par un point lors d’un mouvement            |
|                                   | à l’aide d’un langage de programmation.                           |
|                                   |                                                                   |
|                                   | **Capacités mathématiques** : représenter des vecteurs.           |
|                                   | Utiliser des grandeurs algébriques.                               |
+-----------------------------------+-------------------------------------------------------------------+
:::

Dan ce chapitre nous allons voir comment décrire physiquement les mouvements.

## Vocabulaire

L'objet dont on étudie le mouvement est appelé **système**, on le _modélise_ par un point.

:::example
Pour étudier le mouvement d'un ballon on étudie le mouvement de son centre.

_Cette modélisation nous fait perdre toutes les informations concernant la rotation du
ballon(effets...)_
:::

La nature d'un mouvement du système dépend de la position de l'observateur. L'objet par rapport
auquel on étudie le mouvement du système est appelé **référentiel**.

:::example
Un scooter roule à 45 km/h en ligne droite *par rapport à la route*.

Si on le croise en voiture à 50km/h, il se déplace à 125km/h *par rapport à notre véhicule*.
:::


L'ensemble des positions successives du système est appelé **trajectoire**, il existe trois
types de mouvements:

- rectiligne,
- circulaire,
- curviligne.


## Vecteurs vitesses

<!-- TODO: illustration 

AVOIR GEOGEBRA  -->

### Vecteur déplacement d’un point

Le vecteur déplacement entre $M$ et $M'$: $\overrightarrow{MM'}$ a les
caractéristiques suivantes:

- direction: droite (MM')
- sens: de M vers M'
- valeur: distance MM' (en m)

**Un déplacement s'exprime en mètre$(m)$.**

### Vecteur vitesse moyenne d'un point

Le vecteur vitesse moyenne entre $M$ et $M'$: $\overrightarrow{v}_{moy}$ a les caractéristiques
suivantes:

- direction: droite (MM')
- sens: de M vers M'
- valeur: distance MM' divisée par la durée Δt passée pour aller de M à M'. (en $m \cdot s^{-1}$)

$$
\overrightarrow{v}_{moy} = \frac{\overrightarrow{MM'}}{\Delta t} \text{avec $\Delta t = t_{M'} - t_M$}
$$

**Une vitesse s'exprime en mètre par seconde $(m \cdot s^{-1})$.**

### Vecteur vitesse en un point

La vitesse *instantanée* en un point $M$: $\overrightarrow{v}$ est assimilée à la vitesse moyenne
entre deux points M et M' très proches. 

- direction: Tangente à la trajectoire
- sens: celui du mouvement
- valeur: distance MM' divisée par la durée Δt extrémenent courte. (en $m \cdot s^{-1}$)

$$
\overrightarrow{v} = \frac{\overrightarrow{MM'}}{\Delta t} \text{avec la durée $\Delta t$ très courte}
$$

## Le mouvement rectiligne uniforme

Un point a un mouvement rectiligne uniforme si:

- sa trajectoire est une droite,
- sa vitesse $v$ reste constante.

Ceci se traduit par un vecteur vitesse $\overrightarrow{v}$ constant ayant:

- toujours la même direction
- toujours le même sens
- toujours la même valeur (en $m \cdot s^{-1}$)


<!--

## La gravitation

### Lien entre poids et masse

À la surface d'un astre, le poids d'un objet est **proportionnel** à sa masse :

$$
P=mg
$$

**Notations**
- $P$: poids de l'objet en Newton($N$)
- $m$: masse de l'objet en kilogramme($kg$)
- $g$: intensité de la pesanteur en Newton par kilogramme($N/kg$)

::: examples
- Sur la Terre : $g_{Terre}$
- Sur la Lune : $g_{Lune}$
:::

::: {.plus titre="Différence entre masse et poids"}
- le **poids est une force** qui dépend du l'endroit ou l'on se trouve, il se mesure en Newton avec un dynamomètre.
- la **masse** est liée à la quantité de matière contenue dans un objet, elle ne dépend pas du lieu ou l'on se trouve. Elle se mesure en kilogramme avec un balance.
:::

### L'interaction gravitationnelle

Après la découverte par Copernic que les planètes tournent autour du Soleil au début du XVI^e^
siècle.

<p><a href="https://commons.wikimedia.org/wiki/File:CopernicSystem.png#/media/File:CopernicSystem.png"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/CopernicSystem.png" alt="CopernicSystem.png"></a><br>Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=232287">Lien</a></p>

<https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_fr.html>

Newton propose en 1687, une explication de ce phénomène connu aujourd'hui sous le nom de la théorie
de la **gravitation universelle**.

Les corps s'attirent mutuellement. La gravitation augmente avec la masse des corps et diminue
rapidement avec la distance.

$$
Fg=\mathscr{G}\frac{m_A m_B}{d^2}
$$

::: {.appli title="Calculer des forces gravitationnelles"}
- calculer la force d'attraction entre vous et votre voisin situé à 1 m.
- calculer la force d'attraction entre vous et la Terre dont la masse est m~T~ =5,97×10^24^ kg et
  le rayon est 6380 km.
:::

### Calcul de l'intensité de la pesanteur

L'intensité de la pesanteur d'un astre notée g~A~ mesure la valeur de la force d'attraction
gravitationnelle exercée par l'astre sur un objet de 1 kg situé à sa surface.

Pour un astre quelconque :

$$
g_{astre}=\mathscr{G} \frac{m_{astre}}{R_{astre}^2}
$$

**Notations:**
- $g_{astre}$: intensité de la pesanteur de l'astre en Newton par kilogramme($N/kg$)
- $m_{astre}$: masse de l'astre en kilogramme($kg$)
- $R_{astre}$: rayon de l'astre en mètre($m$)

+-------+------------+------------+---------------------------+
| Astre | Masse (kg) | Rayon (km) | Intensité de la pesanteur |
|       |            |            |                           |
|       |            |            | (N/kg)                    |
+-------+------------+------------+---------------------------+
| Terre | 6,0×10^24^ | 6,4×10^3^  |                           |
+-------+------------+------------+---------------------------+
| Lune  | 7,3×10^22^ | 1,7×10^3^  |                           |
+-------+------------+------------+---------------------------+
| Mars  | 6,4×10^23^ | 3,4×10^3^  |                           |
+-------+------------+------------+---------------------------+

## Caractéristiques du mouvement

Un mouvement dans un référentiel donné peut être décrit par **sa trajectoire** et l'évolution de
**sa vitesse.**

[]{.image}

####

![](../../images/7-Mouvements dans
lUnivers/Pictures/1000020100000567000001C5A3CF012509045F8A.png){width="18.2cm" height="5.96cm"}
-->