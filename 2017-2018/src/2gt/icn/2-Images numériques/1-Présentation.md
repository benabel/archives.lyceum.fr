---
tags: ["image numérique", "image vectorielle", "image matricielle"]
---

>L'appellation « image numérique » désigne toute image (dessin, icône, photographie…) acquise, créée, traitée et stockée sous forme binaire. [Source Wikipedia](//fr.wikipedia.org/wiki/Image_num%C3%A9rique)

# Types d'images

il existe deux façons de coder une image numérique:

- le codage **matriciel** (bitmap en anglais) qui est un *codage des couleurs des pixels*.
- le codage **vectoriel** qui est un codage *des formes* contenues dans le dessin.

<p><a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG_Fr.svg#/media/File:Bitmap_VS_SVG_Fr.svg"><img src="//upload.wikimedia.org/wikipedia/commons/d/db/Bitmap_VS_SVG_Fr.svg" alt="Bitmap VS SVG Fr.svg" class="center" width="640" height="384"></a><br>By <a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG.svg" title="File:Bitmap VS SVG.svg">Bitmap_VS_SVG.svg</a>: <a href="//commons.wikimedia.org/wiki/User:Yug" title="User:Yug">Yug</a>, modifications by <a href="//commons.wikimedia.org/wiki/User:3247" class="mw-redirect" title="User:3247">3247</a>
derivative work: <a href="//commons.wikimedia.org/wiki/User:Tiger66" title="User:Tiger66">Tiger66</a> (<a href="//commons.wikimedia.org/wiki/User_talk:Tiger66" title="User talk:Tiger66"><span class="signature-talk">talk</span></a>) - <a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG.svg" title="File:Bitmap VS SVG.svg">Bitmap_VS_SVG.svg</a>, <a href="//creativecommons.org/licenses/by-sa/2.5" title="Creative Commons Attribution-Share Alike 2.5">CC BY-SA 2.5</a>, <a href="//commons.wikimedia.org/w/index.php?curid=14696418">Link</a></p>

# Images matricielles(ou bitmaps)

Une image matricielle est stockée sous forme d'un tableau de points de couleurs, ces points de couleurs sont appelés **pixels**, de l'anglais *picture element*.

Chaque point de l'image possède une abscisse, une ordonnée et une couleur.

## Ratio et définition d'une image bitmap

La *qualité d'une image matricielle* dépend du nombre de pixels de l'image: **sa définition**.

La définition de l'image
:   La définition de l'image est le nombre de pixels de l'image.

Par exemple pour une image "SD"(Standard Definition) de 720 pixels sur 576, la résolution est 720 x 576  soit 414720.

Les images étant de formes rectangulaires on définit également leur **ratio**.

Ratio d'une image
: rapport largeur sur hauteur de l'image.

Voici ci-dessous une comparaison des principaux formats standards.

<a title="By Atchius 05:11, 4 December 2006 (UTC) (Homemade, based on Image:Video_Standards.png) [Public domain], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AVector_Video_Standards.png"><img  class="center" width="512" alt="Vector Video Standards" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Vector_Video_Standards.png/512px-Vector_Video_Standards.png"/></a>

### Exercice d'application

1. Quels sont les ratios les plus courants?
2. On trouve actuellement des téléviseurs 16/9ème UHD 4K(3 840 × 2 160 pixels). Calculer le ratio et la résolution de ces images.
3. Quels sont les avantages et inconvénients d'augmenter la résolution des images matricielles?

## Couleurs des pixels

La représentation des couleurs peut se faire de deux façons:

- le codage **RVB**(ou RGB en anglais) qui décrit les composantes rouge, verte et bleu généralement avec un octet par composante soit 256 niveaux. Il est également possible de coder une transparence de la couleur dans le cas de superposition d'images comme par exemple dans le format RGBa.
- le codage **TSL**( ou HSL en anglais) qui décrit la couleur à l'aide de trois composantes; sa **T**einte, sa **S**aturation et sa **L**uminosité.

### Exercice d'application

Dans un navigateur récent, le sélecteur de couleur de votre système s'ouvre en cliquant ci-dessous.
</input> <input type="color">

1. Quelles sont les valeurs minimales et maximales en `RVB` pour chaque couleur?
2. Même question en `TSL`, et en déduire ce que peuvent représenter ces échelles(angle, pourcentage...).
3. Comment obtenir les couleurs suivantes en RVB, et en TSL(Répondre sous forme de tableau):
    - noir,
    - blanc,
    - rouge,
    - vert,
    - bleu,
    - jaune,
    - cyan,
    - magenta.

## Formats d'images matricielles

Les principaux formats matriciels sont `BMP`, `GIF`, `TIFF`, `PNG` et `JPEG`. Chaque format a ses propres spécificités et utilisations:

- le format `GIF` ne supporte que 256 couleurs(1 octet), mais est animable contrairement aux `JPEG` et `PNG`.
- le format `JPEG` supporte 16 millions de couleurs(3 octets), tout comme le format `PNG` cependant il est plus léger car les données sont compressées avec une perte de données réglable.
- le format `PNG` est lui aussi compressé, mais sans perte, et il est capable gérer la transparence des couleurs contrairement au format `JPEG`.


### Exercice d'application

Comparer les images de la Terre obtenues grâce au moteur de recherche google images en fonction de leur format:

- [recherche google images terre `jpeg`](https://www.google.fr/search?q=terre&tbs=imgo:1,ift:jpg&tbm=isch)
- [recherche google images terre `gif`](https://www.google.fr/search?q=terre&tbs=imgo:1,ift:gif&tbm=isch)
- [recherche google images terre `png`](https://www.google.fr/search?q=terre&tbs=imgo:1,ift:png&tbm=isch)


# Images vectorielles

> Une image vectorielle (ou image en mode trait), en informatique, est une image numérique composée d'objets géométriques individuels (segments de droite, polygones, arcs de cercle, etc.) définis chacun par divers attributs de forme, de position, de couleur, etc. Elle se différencie en cela des images matricielles (ou « bitmap »), qui elles sont constituées de pixels.

> Par nature, un dessin vectoriel est dessiné à nouveau à chaque visualisation, ce qui engendre des calculs sur la machine.

> L'intérêt est de pouvoir redimensionner l'image à volonté sans aucun effet d'escalier. L'inconvénient est que pour atteindre une qualité photoréaliste, il faut pouvoir disposer d'une puissance de calcul importante et de beaucoup de mémoire. [Source Wikipedia](//fr.wikipedia.org/wiki/Image_vectorielle)

## Formats

Les fichiers `pdf` sont des fichiers vectoriels très utilisés dans le domaine de l'édition. Ils peuvent être créés à partir de fichiers textes ou images des éditeurs `LibreOffice` par exemple.


Dans le domaine du web, le format `svg` est un format standard proposé par le W3C. Il peut être intégré directement dans les pages web sous forme de code svg ou par l'appel de fichiers externes avec l'extension svg. Voir le cours [Dessin vectoriel en svg](./2-Dessin-vectoriel-en-svg)

Les fichiers svg peuvent être créés ou modifiés avec le logiciel de dessin vectoriel libre `Inkscape`.

# Comparaisons de formats

<table class="center">
<tbody><tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="image" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/20px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/30px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/40px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="20" height="20"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="image" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/20px-Raster_graphics_fruit_120px.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/30px-Raster_graphics_fruit_120px.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/40px-Raster_graphics_fruit_120px.png 2x" data-file-width="120" data-file-height="120" width="20" height="20"></a></td>
</tr>
<tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="image" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/60px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/90px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/120px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="60" height="60"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="image" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/60px-Raster_graphics_fruit_120px.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/90px-Raster_graphics_fruit_120px.png 1.5x, //upload.wikimedia.org/wikipedia/commons/b/ba/Raster_graphics_fruit_120px.png 2x" data-file-width="120" data-file-height="120" width="60" height="60"></a></td>
</tr>
<tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="image" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/120px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/180px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/240px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="120" height="120"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="image" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/b/ba/Raster_graphics_fruit_120px.png" data-file-width="120" data-file-height="120"class="center" width="120" height="120"></a></td>
</tr>
<tr>
<td>Image vectorielle</td>
<td>Image matricielle</td>
</tr>

</tbody>
</table>
Une image vectorielle est **redimensionnable sans perte de qualité**, contrairement à une image matricielle.

D'autres part une image vectorielle est souvent **plus légère**(sauf si elle ne contient pas de formes simples à dessiner!).

Cependant une image vectorielle nécessite d'être redessiné à chaque affichage ou redimensionnement, elle nécessite donc **davantage de puissance de calcul et de mémoire vive.**

### Exercice d'application

Trouver un  schéma de la Terre à la fois disponible en format `svg` et `png` grâce à [Google Images](https://www.google.fr/search?q=terre&tbs=imgo:1,ift:svg&tbm=isch).

1. Vérifier que le format `svg` n'est pas détérioré en cas de zoom contrairement au format `png`.
2. Pour chaque image, trouver la définition de l'image, ainsi que sa taille en octets.
3. Calculer rapport taille sur définition en octet par pixel, et conclure.
