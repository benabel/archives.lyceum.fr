---
tags: ["image numérique", "pixel", "profondeur de couleur"]
tocHTML: '<ul><li><a href="#les-images-numériques" data-localhref="true">Les images numériques</a></li><li><a href="#définition-dune-image" data-localhref="true">Définition d’une image</a></li><li><a href="#codage-des-couleurs" data-localhref="true">Codage des couleurs</a></li><li><a href="#les-métadonnées" data-localhref="true">Les métadonnées</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>Contenus</th>
<th>Capacités attendues</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Photosites, pixels, résolution(du capteur, de l’image), profondeur de couleur.</td>
<td>Distinguer les photosites du capteur et les pixels de l’image en comparant les résolutions du capteur et de l’image selon les réglages de l’appareil.</td>
</tr>
<tr class="even">
<td>Métadonnées EXIF</td>
<td>Retrouver les métadonnées d’une photographie.</td>
</tr>
<tr class="odd">
<td>Traitement d’image</td>
<td>Traiter par programme une image pour la transformer en agissant sur les trois composantes de ses pixels.</td>
</tr>
<tr class="even">
<td>Rôle des algorithmes dans les appareils photo numériques</td>
<td>Expliciter des algorithmes associés à la prise de vue. Identifier les étapes de la construction de l’image finale.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<p></p><div class="yt-embend"><div><iframe width="560" height="315" src="https://invidious.projectsegfau.lt/embed/UnNPNc-F9ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><p><a href="https://www.youtube.com/watch?v=UnNPNc-F9ks">Vidéo</a> servie sans cookie via <a href="https://projectsegfau.lt/">Project Segfault</a></p></div></div><p></p>
<details class="appli"><summary>&nbsp;</summary>
<p>Faire l’<a href="https://lienmini.fr/3389-502">évaluation diagnostique</a> sur les images numériques PP102-103 du manuel Delagrave.</p>
</details>

<h2 id="les-images-numériques" class="anchored">Les images numériques</h2>
<p>Il existe deux principaux types d’images numériques:</p>
<ul>
<li>Les images <em>matricielles</em> dans lesquelles l’image est décrite par une suite de pixels colorées: les formats <code>jpg</code>, <code>png</code>, <code>gif</code>, <code>webp</code>, <code>avif</code>…</li>
<li>Les images <em>vectorielles</em> dans lesquelles l’image est décrite par les formes contenues dans l’image: le format <code>svg</code> principalement.</li>
</ul>
<p><wc-wikimage title="Bitmap_VS_SVG.svg" caption="Les images photographiques que nous étudions dans ce chapitre sont matricielles, elles souffrent des effets de pixelisation lors des zooms. Au contraire les images vectorielles peuvent être affichées à n'importe quel niveau de zoom, on les utilise principalement pour les schémas et graphiques."></wc-wikimage></p>
<h2 id="définition-dune-image" class="anchored">Définition d’une image</h2>
<dl>
<dt>
Définition d’une image
</dt>
<dd>
<div>
<p>La définition d’une image matricielle est le nombre de pixels de l’image.</p>
</div>
</dd>
</dl>
<div class="example">
<ul>
<li>Format Full HD : 1 920 × 1 080</li>
<li>Format 4k: 3 840 × 2 160</li>
</ul>
</div>
<details class="plus"><summary>&nbsp;</summary>
<p>À ne pas confondre avec la résolution de l’image qui s’exprime en pixels par pouce qui mesure la qualité d’une image affichée ou imprimée.</p>
</details>

<details class="appli"><summary>&nbsp;</summary>
<p>Calculer la définition des images Full HD et 4K <em>sans calculatrice</em>.</p>
</details>

<h2 id="codage-des-couleurs" class="anchored">Codage des couleurs</h2>
<p>En informatique, il existe différentes façons de coder les couleurs, pour s’en rendre, il suffit d’ouvrir un sélecteur de couleur sur votre ordinateur pour s’en rendre compte.</p>
<p><input type="color"></p>
<dl>
<dt>
Système RVB
</dt>
<dd>
<div>
<p>Un des systèmes les plus courants de codage des couleurs en informatique est le système RVB (pour Rouge Vert Bleu) qui code les intensités des composantes rouge, verte et bleue d’un pixel en synthèse additive des couleurs.</p>
</div>
</dd>
</dl>
<div class="quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Synthese%2B.svg" caption="Synthèse additive des couleurs."></wc-wikimage></p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Pixel_geometry_02_Pengo.jpg" caption="Dispositions possibles des mosaïques de lumières colorées dans un écran."></wc-wikimage></p>
</div>
</div>
</div>
<details class="plus"><summary>Références des systèmes de couleurs sur MDN</summary>
<p>Encore une fois, consultez cette page sur l’excellent site MDN pour en savoir plus.</p>
<p><a href="https://developer.mozilla.org/fr/docs/Web/CSS/color_value" class="uri">https://developer.mozilla.org/fr/docs/Web/CSS/color_value</a></p>
</details>

<dl>
<dt>
Profondeur des couleurs
</dt>
<dd>
<div>
<p>La profondeur de couleurs est le nombre de bits utilisés pour représenter la couleur d’un pixel dans une image.</p>
</div>
</dd>
</dl>
<div class="example">
<ul>
<li><strong>1 bit</strong>: 0 ou 1 pour Noir et Blanc.</li>
<li><strong>1 octet</strong>: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>8</mn></msup><mo>=</mo><mn>256</mn></mrow><annotation encoding="application/x-tex">2^8=256</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">256</span></span></span></span>
niveaux pour les images en niveau de gris.</li>
<li><strong>3 octets</strong>: 1 octet pour chaque composante rouge, verte et bleue pour les images en <code>jpeg</code>. (voir cette <a href="https://apps.lyceum.fr/css-colors/">animation</a>)</li>
<li><strong>6 octets</strong>: 2 octets pour chaque composante rouge, verte et bleue pour les images en <code>tiff</code> ou <code>raw</code>.</li>
</ul>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/profondeur-couleur.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Profondeur des couleurs source Wikipédia</figcaption><p></p>
</figure>
</div>
<p><a href="https://en.wikipedia.org/wiki/Color_depth" class="cite-source">Wikipédia</a></p>
</div>
<details class="appli"><summary>&nbsp;</summary>
<p>En utilisant cette <a href="https://apps.lyceum.fr/css-colors/">animation</a>. Répondre aux questions suivantes.</p>
<ol type="1">
<li><p>Combien de niveaux de couleurs peuvent être codées sur 3 octets?</p></li>
<li><p>En notant (R, G, B) les couleurs sur 3 octets, expliquer comment obtenir:</p>
<ul>
<li>du rouge: <code>(255, 0, 0)</code></li>
<li>du vert:</li>
<li>du bleu:</li>
<li>du jaune:</li>
<li>du magenta:</li>
<li>du cyan:</li>
<li>du noir:</li>
<li>du blanc:</li>
</ul></li>
</ol>
</details>

<h2 id="les-métadonnées" class="anchored">Les métadonnées</h2>
<dl>
<dt>
Métadonnées
</dt>
<dd>
<div>
<p>En plus des données concernant les couleurs des pixels de l’image, les photographies numériques contiennent de nombreuses informations concernant la prise de vue:</p>
</div>
</dd>
</dl>
<ul>
<li>la date</li>
<li>l’heure</li>
<li>l’appareil utilisé pour prendre la photo</li>
<li>les paramètres de la prise de vue(flash, vitesse…)</li>
<li>la géolocalisation si disponible</li>
</ul>
<p>Un des formats de métadonnées couramment utilisé dans les photos est le format <code>EXIF</code>.</p>
<details class="appli"><summary>&nbsp;</summary>
<p>Citer au moins cinq métadonnées présentes dans la photo présentée sur cette page:</p>
<p><a href="https://apps.lyceum.fr/photo-metadata/" class="uri">https://apps.lyceum.fr/photo-metadata/</a></p>
</details>

