---
tocHTML: '<ul><li><a href="#rotation-dune-image-dun-quart-de-tour" data-localhref="true">Rotation d’une image d’un quart de tour</a></li></ul>'
---





<p>## Algorithmes de tris quadratiques vus en première</p>
<p>Vous avez vu en première deux algorithmes de tris peu efficaces(complexité <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>
):</p>
<ul>
<li><p>Le tri par sélection</p>
<p>Sur un tableau de n éléments (numérotés de <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>
à <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">n-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>
), le principe du tri par sélection est le suivant :</p>
<ul>
<li>Rechercher le plus petit élément du tableau, et l’échanger avec l’élément d’indice 0 ;</li>
<li>rechercher le second plus petit élément du tableau, et l’échanger avec l’élément d’indice 1 ;</li>
<li>continuer de cette façon jusqu’à ce que le tableau soit entièrement trié. &nbsp; <a href="http://fr.wikipedia.org/wiki/Tri_par_s%C3%A9lection">Source Wikipedia</a></li>
</ul></li>
<li><p>Le tri par insertion</p>
<p>Dans l’algorithme, on parcourt le tableau à trier du début à la fin. Au moment où on considère le i-ème élément, les éléments qui le précèdent sont déjà triés. Pour faire l’analogie avec l’exemple du jeu de cartes, lorsqu’on est à la i-ème étape du parcours, le i-ème élément est la carte saisie, les éléments précédents sont la main triée et les éléments suivants correspondent aux cartes encore mélangées sur la table.</p>
<p>L’objectif d’une étape est d’insérer le i-ème élément à sa place parmi ceux qui précèdent. En pratique, on fait « remonter » l’élément au fur et à mesure jusqu’à rencontrer un élément plus petit.</p></li>
</ul>
<ol type="1">
<li><p>On considère la liste suivante de neuf valeurs: <code>[36, 45, 36, 9, 15, 23, 11, 38, 40]</code>.</p>
<p>Donner l’état de la liste à la fin des neuf étapes de tri pour le tri par sélection et le tri par insertion.</p>
<p>Pourquoi l’algorithme a une complexité quadratique alors que la liste ne passe que par neuf états au cours de son tri?</p></li>
<li><p>Implémenter ces deux algorithmes de tri en Python:</p>
<ul>
<li><code>tri_selection(tbl: list) -&gt; list</code></li>
<li><code>tri_insertion(tbl: list) -&gt; list</code></li>
</ul>
<p>Tester les fonctions avec les assertions suivantes:</p>
<div class="highlight"><pre><span></span><span class="n">tbl</span> <span class="o">=</span> <span class="p">[</span><span class="mi">36</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">40</span><span class="p">]</span>
<span class="k">assert</span> <span class="n">tri_selection</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span> <span class="o">==</span> <span class="p">[</span><span class="mi">9</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">45</span><span class="p">]</span>
<span class="k">assert</span> <span class="n">tri_insertion</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span> <span class="o">==</span> <span class="p">[</span><span class="mi">9</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">45</span><span class="p">]</span>
<span></span>
<span class="c1"># avec des valeurs aléatoires</span>
<span class="kn">import</span> <span class="nn">random</span> <span class="k">as</span> <span class="nn">rd</span>
<span class="n">tbl</span> <span class="o">=</span>  <span class="p">[</span><span class="n">rd</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="o">-</span><span class="mi">1000</span><span class="p">,</span> <span class="mi">1000</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1000</span><span class="p">)]</span>
<span class="c1"># bien évidemment Python sait trier!</span>
<span class="n">trié</span> <span class="o">=</span> <span class="nb">sorted</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">tri_selection</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span> <span class="o">==</span> <span class="n">trié</span>
<span class="k">assert</span> <span class="n">tri_insertion</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span> <span class="o">==</span> <span class="n">trié</span>
</pre></div>
</li>
</ol>
<h2 id="rotation-dune-image-dun-quart-de-tour" class="anchored">Rotation d’une image d’un quart de tour</h2>
<blockquote class="blockquote">
<p>Exercice inspiré du travail de Laurent Cheno, les images proviennent de son notebook que l’on ne peut plus trouver en ligne.</p>
</blockquote>
<p>On considère l’image suivante de la Joconde découpée en carré de <code>1024x1024</code>.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/cheno-joconde_1024.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">La Joconde carrée</figcaption><p></p>
</figure>
</div>
<p>Pour la réalisation de cet exercice, il est conseillé d’utiliser le package Python <a href="https://pillow.readthedocs.io/en/stable/">pillow</a>.</p>
<p>Voici le code nécessaire à l’ouverture d’une image, et l’affichage de sa taille.</p>
<div class="highlight"><pre><span></span><span class="kn">from</span> <span class="nn">PIL</span> <span class="kn">import</span> <span class="n">Image</span>
<span class="n">img</span> <span class="o">=</span> <span class="n">Image</span><span class="o">.</span><span class="n">open</span><span class="p">(</span><span class="s2">"joconde_1024.png"</span><span class="p">)</span>
<span class="n">img</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
<span class="n">img</span><span class="o">.</span><span class="n">size</span>
</pre></div>

<p>Principe de l’algorithme: On découpe l’image carrée en quatre quadrants, on fait tourner récursivement chaque quart, puis on opère une permutation circulaire des quadrants.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/cheno-quart-de-tour-recursif.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Méthode diviser pour régner appliquée à la rotation d’une image</figcaption><p></p>
</figure>
</div>
<p>Pour tenter de faire cet exercice, vous pourrez utiliser la fonction <code>echange_pixels</code> qui permet d’échanger les valeurs des pixels de coordonnées <code>x0, y0</code> et <code>x1, y1</code>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">echange_pixels</span><span class="p">(</span><span class="n">image</span><span class="p">:</span> <span class="n">PIL</span><span class="o">.</span><span class="n">image</span><span class="p">,</span>
<span class="n">                   x0</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">y0</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span>
<span class="n">                   x1</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">y1</span><span class="p">:</span> <span class="nb">int</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="n">PIL</span><span class="o">.</span><span class="n">image</span><span class="p">:</span>
<span class="n">    couleurs0</span><span class="p">,</span> <span class="n">couleurs1</span> <span class="o">=</span> <span class="n">image</span><span class="o">.</span><span class="n">getpixel</span><span class="p">(</span><span class="n">x0</span><span class="p">,</span> <span class="n">y0</span><span class="p">),</span> <span class="n">image</span><span class="o">.</span><span class="n">getpixel</span><span class="p">(</span><span class="n">x1</span><span class="p">,</span> <span class="n">y1</span><span class="p">)</span>
<span class="n">    image</span><span class="o">.</span><span class="n">putpixel</span><span class="p">(</span><span class="n">x0</span><span class="p">,</span> <span class="n">y0</span><span class="p">,</span> <span class="n">couleurs1</span><span class="p">)</span>
<span class="n">    image</span><span class="o">.</span><span class="n">putpixel</span><span class="p">(</span><span class="n">x1</span><span class="p">,</span> <span class="n">y1</span><span class="p">,</span> <span class="n">couleurs0</span><span class="p">)</span>
<span class="k">    return</span> <span class="n">image</span>
</pre></div>

<p>À vous, bon courage!</p>

