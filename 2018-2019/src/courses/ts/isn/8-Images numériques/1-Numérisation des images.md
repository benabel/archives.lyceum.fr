---
tags: ["image vectorielle", "image matricielle", "compression"]
---

> L'appellation « image numérique » désigne toute image (dessin, icône, photographie…) acquise,
> créée, traitée et stockée sous forme binaire.
> 
> *[Wikipedia](https//fr.wikipedia.org/wiki/Image_num%C3%A9rique)*{.cite-source}

## Types d'images

il existe deux façons de coder une image numérique:

- le codage **matriciel** (bitmap en anglais) qui est un *codage des couleurs des pixels*.
- le codage **vectoriel** qui est un codage *des formes* contenues dans le dessin.

<div class="center">
<p><a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG_Fr.svg#/media/File:Bitmap_VS_SVG_Fr.svg"><img src="//upload.wikimedia.org/wikipedia/commons/d/db/Bitmap_VS_SVG_Fr.svg" alt="Bitmap VS SVG Fr.svg" width="640" height="384"></a><br>By <a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG.svg" title="File:Bitmap VS SVG.svg">Bitmap_VS_SVG.svg</a>: <a href="//commons.wikimedia.org/wiki/User:Yug" title="User:Yug">Yug</a>, modifications by <a href="//commons.wikimedia.org/wiki/User:3247" class="mw-redirect" title="User:3247">3247</a>
derivative work: <a href="//commons.wikimedia.org/wiki/User:Tiger66" title="User:Tiger66">Tiger66</a> (<a href="//commons.wikimedia.org/wiki/User_talk:Tiger66" title="User talk:Tiger66"><span class="signature-talk">talk</span></a>) - <a href="//commons.wikimedia.org/wiki/File:Bitmap_VS_SVG.svg" title="File:Bitmap VS SVG.svg">Bitmap_VS_SVG.svg</a>, <a href="//creativecommons.org/licenses/by-sa/2.5" title="Creative Commons Attribution-Share Alike 2.5">CC BY-SA 2.5</a>, <a href="//commons.wikimedia.org/w/index.php?curid=14696418">Link</a></p>
</div>

## Images matricielles(ou bitmaps)

Une image matricielle est stockée sous forme d'un tableau de points de couleurs, ces points de
couleurs sont appelés **pixels**, de l'anglais *picture element*.

Chaque point de l'image possède une abscisse, une ordonnée et une couleur.

### Définition et résolution d'une image bitmap

La qualité d'une image matricielle dépend du nombre de pixels de l'image: sa définition.

[[def | La définition de l'image]]
|La définition de l'image est le nombre de pixels de l'image.

Par exemple pour une image "SD"(Standard Definition) de 720 pixels sur 576, la résolution est 720 x 576  soit 414720.

[[def | La résolution de l'image]]
|La résolution de l'image est le nombre de pixels de l'image par
|unité de surface, on l'exprime souvent en "ppi": pixel per inch(pixel par pouce) pour les images ou
|dpi dots per inch(points par pouce) pour les imprimantes et les scanners.

Par exemple pour une impression sur un format A4, une résolution de 300&nbsp;dpi est en général suffisante pour que l'oeil ne distingue pas les points images. Pour un écran d'ordinateur une résolution de 76 dpi est en général suffisante.

Pour plus de détail, voir cet [article](//fr.wikipedia.org/wiki/R%C3%A9solution_spatiale_des_images_matricielles#R.C3.A9solution_maximale_perceptible_par_l.27.C5.93il_humain) sur Wikipedia.

[[appli | &nbsp;]]
|On trouve actuellement des téléviseurs 16/9ème UHD 4K(3 840 × 2 160 pixels) de 55 pouces(140 cm) de diagonale.
|
|1. Calculer la définition et la résolution de ces écrans.
|2. En utilisant le lien ci-dessus, indiquer à quelle distance l'oeil serait capable de distinguer 
|les pixels. Commenter dans le cas d'une utilisation normale de la télé.

### Couleurs des pixels

La représentation des couleurs peut se faire de deux façons:

- le codage **RVB**(ou RGB en anglais) qui décrit les composantes rouge, verte et bleu généralement avec un octet par composante soit 256 niveaux. Il est également possible de coder une transparence de la couleur dans le cas de superposition d'images comme par exemple dans le format RGBa.
- le codage **TSL**( ou HSL en anglais) qui décrit la couleur à l'aide de trois composantes; sa **T**einte, sa **S**aturation et sa **L**uminosité.

[[appli | &nbsp;]]
|Dans un navigateur récent, le sélecteur de couleur de votre système s'ouvre en cliquant sur 
|l'élément suivant:
|<input type="color"></input> 
|
|1. Comment obtenir du noir ou du blanc en RVB, et en TSL?
|2. Quel est l'effet du réglage de la teinte? et de la saturation?

### Formats d'images matricielles

Les principaux formats matriciels sont `BMP`, `GIF`, `TIFF`, `PNG`, `JPEG` ou le plus récent `WEBP`.

Chaque format a ses propres spécificités et utilisations:

- le format `GIF` ne supporte que 256 couleurs(1 octet), mais est animable contrairement aux `JPEG`
  et `PNG`.
- le format `JPEG` supporte 16 millions de couleurs(3 octets), tout comme le format `PNG` cependant
  il est plus léger car les données sont compressées avec une perte de données réglable.
- le format `PNG` est lui aussi compressé, mais sans perte, et il est capable gérer la transparence
  des couleurs contrairement au format `JPEG`.
- le format `WEBP` qui propose une amélioration des performances des algorithmes de compression 
- sans perte du `PNG` et avec perte du `JPEG` pour obtenir des fichiers de même qualité 25% plus légers.

## Images vectorielles

> Une image vectorielle (ou image en mode trait), en informatique, est une image numérique composée
> d'objets géométriques individuels (segments de droite, polygones, arcs de cercle, etc.) définis
> chacun par divers attributs de forme, de position, de couleur, etc. Elle se différencie en cela
> des images matricielles (ou « bitmap »), qui elles sont constituées de pixels.
>
> Par nature, un dessin vectoriel est dessiné à nouveau à chaque visualisation, ce qui engendre des
> calculs sur la machine.
>
> L'intérêt est de pouvoir redimensionner l'image à volonté sans aucun effet d'escalier.
> L'inconvénient est que pour atteindre une qualité photoréaliste, il faut pouvoir disposer d'une
> puissance de calcul importante et de beaucoup de mémoire. [Source
> Wikipedia](//fr.wikipedia.org/wiki/Image_vectorielle)

### Formats

Les fichiers `pdf` sont des fichiers vectoriels très utilisés dans le domaine de l'édition. Ils peuvent être créés à partir de fichiers textes ou images des éditeurs `LibreOffice` par exemple.


Dans le domaine du web, le format `svg` est un format standard proposé par le W3C. Il peut être
intégré directement dans les pages web sous forme de code svg ou par l'appel de fichiers externes
avec l'extension svg. Voir le cours [Dessin vectoriel en svg](./2-Dessin-vectoriel-en-svg)

Les fichiers `svg` peuvent être créés ou modifiés avec le logiciel de dessin vectoriel libre `Inkscape`.

## Comparaisons de formats

<table class="center">
<thead>
<td>Image vectorielle</td>
<td>Image matricielle</td>
</thead>
<tbody><tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="center" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/20px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/30px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/40px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="20" height="20"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="center" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/20px-Raster_graphics_fruit_120px.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/30px-Raster_graphics_fruit_120px.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/40px-Raster_graphics_fruit_120px.png 2x" data-file-width="120" data-file-height="120" width="20" height="20"></a></td>
</tr>
<tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="center" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/60px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/90px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/120px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="60" height="60"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="center" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/60px-Raster_graphics_fruit_120px.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Raster_graphics_fruit_120px.png/90px-Raster_graphics_fruit_120px.png 1.5x, //upload.wikimedia.org/wikipedia/commons/b/ba/Raster_graphics_fruit_120px.png 2x" data-file-width="120" data-file-height="120" width="60" height="60"></a></td>
</tr>
<tr>
<td><a href="//commons.wikimedia.org/wiki/File:Drupe_fruit_diagram_no_text.svg?uselang=fr" class="center" title="Image vectorielle"><img alt="Image vectorielle" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/120px-Drupe_fruit_diagram_no_text.svg.png" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/180px-Drupe_fruit_diagram_no_text.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Drupe_fruit_diagram_no_text.svg/240px-Drupe_fruit_diagram_no_text.svg.png 2x" data-file-width="400" data-file-height="400" width="120" height="120"></a></td>
<td><a href="//commons.wikimedia.org/wiki/File:Raster_graphics_fruit_120px.png?uselang=fr" class="center" title="Image matricielle"><img alt="Image matricielle" src="//upload.wikimedia.org/wikipedia/commons/b/ba/Raster_graphics_fruit_120px.png" data-file-width="120" data-file-height="120" width="120" height="120"></a></td>
</tr>
</tbody>
</table>

Une image vectorielle est **redimensionnable sans perte de qualité**, contrairement à une image matricielle.

D'autres part une image vectorielle est souvent **plus légère**(sauf si elle ne contient pas de formes simples à dessiner!).

Cependant une image vectorielle nécessite d'être redessiné à chaque affichage ou redimensionnement, elle nécessite donc **davantage de puissance de calcul et de mémoire vive.**

[[appli | &nbsp;]]
|En utilisant des images de divers formats de fichier(jpg, png, gif, svg), grâce à l'outil de recherche de [Google Images](//www.google.fr/search?biw=928&bih=957&site=imghp&tbs=ift%3Agif&tbm=isch&source=hp&biw=&bih=&q=wikimedia+logo&oq=Wikimedia&gs_l=img.3.2.0l7j0i30k1l3.5943.8525.0.10967.9.6.0.3.3.0.103.403.4j1.5.0....0...1ac.1.64.img..1.8.412.AybkEdE5mMQ#q=star+wars+logo&tbs=ift:png&tbm=isch&*).
|
|<p><a href="//commons.wikimedia.org/wiki/File:Star_Wars_Logo.svg#/media/File:Star_Wars_Logo.svg"><img src="//upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo.svg" width="220" height="133"></a><br>By <a href="//en.wikipedia.org/wiki/en:User:KAMiKAZOW" class="extiw" title="w:en:User:KAMiKAZOW">User:KAMiKAZOW</a> - Transferred from&nbsp;<span class="plainlinks"><a class="external text" href="//en.wikipedia.org">en.wikipedia</a></span>&nbsp;to Commons., Public Domain, <a href="//commons.wikimedia.org/w/index.php?curid=4617117">Link</a></p>
|
|1. Comparer la taille des fichiers rapportée au pixel(octet/pixel).*
|2. Calculer le rapport de compression supposant que le stockage consite uniquement
|à stocker la couleur des pixels. Par exemple, en GIF, un pixel peut avoir 256
|couleurs soit 1 octet, les pixels RGB sont stockés sur 3 octets(16 millions de
|couleur), les pixels RGBA sur 4 octets(16 millions de couleurs ayant chacune
|256 niveaux de transparence)
|3. Recommencer avec des images plus complexes telles que des photos.
