---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
---

::: programme

::: list-table

   * - Contenus
     - Capacités attendues

   * - Photosites, pixels, résolution(du capteur, de l’image), profondeur de couleur.
     - Distinguer les photosites du capteur et les pixels de l’image en comparant les résolutions
       du capteur et de l’image selon les réglages de l’appareil.

   * - Métadonnées EXIF
     - Retrouver les métadonnées d’une photographie.

   * - Traitement d’image
     - Traiter par programme une image pour la transformer en agissant sur les trois composantes de
       ses pixels.

   * - Rôle des algorithmes dans les appareils photo numériques
     - Expliciter des algorithmes associés à la prise de vue. Identifier les étapes de la
       construction de l’image finale.

:::

:::

`youtube: UnNPNc-F9ks`

::: appli

Faire l'[évaluation diagnostique](https://lienmini.fr/3389-502) sur les images numériques PP102-103 du
manuel Delagrave.

:::

## Les images numériques

Il existe deux principaux types d'images numériques:

- Les images _matricielles_ dans lesquelles l'image est décrite par une suite de pixels colorées:
  les formats `jpg`, `png`, `gif`, `webp`, `avif`...
- Les images _vectorielles_ dans lesquelles l'image est décrite par les formes contenues dans
  l'image: le format `svg` principalement.


<wc-wikimage title="Bitmap_VS_SVG.svg" caption="Les images photographiques que nous étudions dans ce chapitre sont matricielles, elles souffrent des effets de pixelisation lors des zooms. Au contraire les images vectorielles peuvent être affichées à n'importe quel niveau de zoom, on les utilise principalement pour les schémas et graphiques."></wc-wikimage>

## Définition d'une image

Définition d'une image

: La définition d'une image matricielle est le nombre de pixels de l'image.

::: example

- Format Full HD : 1 920 × 1 080
- Format 4k: 3 840 × 2 160

:::

::: plus

À ne pas confondre avec la résolution de l'image qui s'exprime en pixels par pouce qui mesure
la qualité d'une image affichée ou imprimée.

:::

::: appli

Calculer la définition des images Full HD et 4K _sans calculatrice_.

:::

## Profondeur de couleurs

Profondeur des couleurs

: La profondeur de couleurs est le nombre de bits utilisés pour représenter la couleur d'un pixel
dans une image.

::: example

- **1 bit**: 0 ou 1 pour Noir et Blanc.
- **1 octet**: $2^8=256$ niveaux pour les images en niveau de gris.
- **3 octets**: 1 octet pour chaque composante rouge, verte et bleue pour les images en `jpeg`. (voir
  cette [animation](https://apps.lyceum.fr/css-colors/))
- **6 octets**: 2 octets pour chaque composante rouge, verte et bleue pour les images en `tiff` ou
  `raw`.

![Profondeur des couleurs source Wikipédia](../../images/profondeur-couleur.png)

[Wikipédia](https://en.wikipedia.org/wiki/Color_depth){.cite-source}

:::

::: appli

En utilisant cette [animation](https://apps.lyceum.fr/css-colors/). Répondre aux questions
suivantes.

1. Combien de niveaux de couleurs peuvent être codées sur 3 octets?
2. En notant (R, G, B) les couleurs sur 3 octets, expliquer comment obtenir:

   - du rouge: `(255, 0, 0)`
   - du vert:
   - du bleu:
   - du jaune:
   - du magenta:
   - du cyan:
   - du noir:
   - du blanc:

:::


## Les métadonnées

Métadonnées

: En plus des données concernant les couleurs des pixels de l'image, les photograpies numériques
contiennent de nombreuses informations concernant la prise de vue:

  - la date
  - l'heure
  - l'appareil utilisé pour prendre la photo
  - les paramètres de la prise de vue(flash, vitesse...)
  - la géolocalisation si disponible

Un des formats de métadonnées couramment utilisé dans les photos est le format `EXIF`.


::: appli

Citer au moins cinq métadonnées présentes dans la photo présentée sur cette page:

<https://apps.lyceum.fr/photo-metadata/>

:::