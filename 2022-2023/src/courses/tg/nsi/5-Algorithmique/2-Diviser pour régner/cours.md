---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#complexité-des-algorithmes-de-tri" data-localhref="true">Complexité des algorithmes de tri</a></li><li><a href="#le-principe-de-diviser-pour-régner" data-localhref="true">Le principe de diviser pour régner</a></li><li><a href="#le-tri-fusion" data-localhref="true">Le tri fusion</a></li><ul><li><a href="#algorithme-de-fusion" data-localhref="true">Algorithme de fusion</a></li><li><a href="#algorithme-de-tri-fusion" data-localhref="true">Algorithme de tri fusion</a></li><li><a href="#conclusion" data-localhref="true">Conclusion</a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<!-- 
+------------------------+-----------------------------------+------------------------------------+
|        Contenus        |        Capacités attendues        |            Commentaires            |
+========================+===================================+====================================+
| Méthode « diviser pour | Écrire un algorithme utilisant la | La rotation d’une image bitmap     |
| régner ».              | méthode « diviser pour régner ».  | d’un quart de tour avec un coût en |
|                        |                                   | mémoire constant est un bon        |
|                        |                                   | exemple.                           |
|                        |                                   |                                    |
|                        |                                   | L’exemple du tri fusion permet     |
|                        |                                   | également d’exploiter la           |
|                        |                                   | récursivité et d’exhiber un        |
|                        |                                   | algorithme de coût en n log 2 n    |
|                        |                                   | dans les pires des cas.            |
+------------------------+-----------------------------------+------------------------------------+ -->
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro">
<p><wc-wikimage class="half right" title="Merge-sort-example-300px.gif" caption="Le tri fusion est un algorithme de tri utilisant la méthode « Diviser pour Régner » tout comme la recherche dichotomique vue en première."></wc-wikimage></p>
<blockquote class="blockquote">
<p>Nous avons vu en première deux algorithmes de tris assez naturels, mais peu efficaces: le tri par insertion et le tri par sélection. Cette année, nous allons étudier un algorithme beaucoup plus efficace et très utilisé inventé par John Von Neumann en 1945: le tri par fusion. Cet algorithme nous permettra d’illustrer la méthode diviser pour régner que nous avions déjà vue lors de la recherche dichotomique.</p>
</blockquote>
</div>
<h2 id="complexité-des-algorithmes-de-tri" class="anchored">Complexité des algorithmes de tri</h2>
<p>En <a href="../../..//1g/nsi/8-algorithmique/2-algorithmes-de-tri">première</a>, nous avons vu deux algorithmes peu performants:</p>
<ul>
<li>le tri par sélection qui a une complexité <em>quadratique</em> dans le pire des cas, le meilleur des cas et en moyenne.</li>
<li>le tri par insertion qui a une complexité <em>linéaire</em> dans le meilleur des cas, et <em>quadratique</em> dans le pire des cas et en moyenne.</li>
</ul>
<p>Ces algorithmes ne sont pas utilisés en pratique, car peu efficaces. En effet, il a été prouvé que dans le pire des cas et en moyenne, on pouvait au mieux obtenir une complexité <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n \log(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>
.</p>
<p>Cela fait une grande différence car <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>⋘</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">\log(n) \lll n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⋘</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
, en effet:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn></mrow><annotation encoding="application/x-tex">\log(n) = 10</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">10</span></span></span></span>
pour <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mn>10</mn></msup><mo>=</mo><mn>1024</mn></mrow><annotation encoding="application/x-tex">n = 2^{10} = 1024</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1024</span></span></span></span>
</li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\log(n) = 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">100</span></span></span></span>
pour <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><msup><mn>2</mn><mn>100</mn></msup><mo>=</mo><mn>1267650600228229401496703205376</mn></mrow><annotation encoding="application/x-tex">n = 2^{100} = 1267650600228229401496703205376</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">100</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1267650600228229401496703205376</span></span></span></span>
</li>
</ul>
<p>On avait déjà rencontré ce type d’améliorations entre la recherche en table et la recherche dichotomique qui utilisait le principe «Diviser pour régner».</p>
<h2 id="le-principe-de-diviser-pour-régner" class="anchored">Le principe de diviser pour régner</h2>
<p>Le principe de diviser pour régner consiste à ramener la résolution d’un problème sur N données à la résolution d’un problème sur la moitié des données et poursuivre ce découpage jusqu’à ce que le problème devienne évident(<em>par exemple trier un tableau d’une donnée</em>). Une fois que les solutions des sous problèmes ont été trouvées, on les combine pour obtenir la solution du problème complet.</p>
<blockquote class="blockquote">
<ul>
<li><em>Diviser</em> : découper un problème initial en sous-problèmes ;</li>
<li><em>Régner</em> : résoudre les sous-problèmes (récursivement ou directement s’ils sont assez petits) ;</li>
<li><em>Combiner</em> : calculer une solution au problème initial à partir des solutions des sous-problèmes.</li>
</ul>
</blockquote>
<p><a href="https://fr.wikipedia.org/wiki/Diviser_pour_r%C3%A9gner_(informatique)">Article Wikipedia Diviser pour régner</a>{.cite-source}</p>
<p><wc-wikimage title="Trois_étapes_illustré_avec_l'algorithme_du_tri_fusion.svg" caption="Au lieu de trier la liste entière, nous allons couper la liste en plus petites listes qui seront faciles à trier. On combinera ensuite les petites listes triées obtenues en une seule."></wc-wikimage></p>
<h2 id="le-tri-fusion" class="anchored">Le tri fusion</h2>
<p>Le tri fusion s’appuie sur le fait que fusionner deux tableaux triés en un tableau trié se fait en un temps linéaire <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>
.</p>
<div class="example">
<p>Pour fusionner ces deux tableaux triés:</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/fusion-2-tab-tries.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Fusion de deux tableaux à 3 et 4 éléments</figcaption><p></p>
</figure>
</div>
<p>Il suffit d’une itération sur les deux listes en même temps donc <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>
ici 5 itérations pour une liste de 7 éléments:</p>
<ol type="1">
<li>On considère 3 et 9, on place 3, et on avance sur la 1ère liste.</li>
<li>On considère 27 et 9, on place 9, et on avance sur la 2e liste.</li>
<li>On considère 27 et 10, on place 10, …</li>
<li>On considère 27 et 82, on place 27, …</li>
<li>On considère 38 et 82, on place 38, …</li>
<li>On considère 43 et 82, on place 43, et on voit qu’on est arrivé au bout de la première liste On place maintenant tous les éléments restants de la deuxième liste.</li>
</ol>
</div>
<p>D’autre part, le découpage récursif d’un tableau jusqu’à arriver au cas terminal : tableau trié d’un seul élément est en <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\log(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>
. Ce qui fait bien une complexité en <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n\log(n))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">))</span></span></span></span>
, on ne peut pas faire mieux.</p>
<p>On va donc séparer notre algorithme en deux fonctions, une qui réalise la fusion et l’autre qui réalise la récursion du tri(le découpage). Ces deux opérations sont symbolisées sur l’illustration ci-dessous:</p>
<ul>
<li>rouge: division</li>
<li>vert: fusion.</li>
</ul>
<p><wc-wikimage title="Merge_sort_algorithm_diagram.svg" caption="Une fois la liste découpée, le problème du tri est simple car un tableau de un élément est forcément trié! Il ne reste alors plus qu'à fusionner."></wc-wikimage></p>
<h3 id="algorithme-de-fusion" class="anchored">Algorithme de fusion</h3>
<p>Voici l’algorithme de fusion de deux tableaux triés en un seul.</p>
<p>Tout d’abord en pseudo-code:</p>

<div class="highlight"><pre><span></span><span class="n">fonction</span><span class="w"> </span><span class="k">fusion</span><span class="p">(</span><span class="nl">tbl1</span><span class="p">:</span><span class="w"> </span><span class="n">Tableau</span><span class="p">,</span><span class="w"> </span><span class="nl">tbl2</span><span class="p">:</span><span class="w"> </span><span class="n">Tableau</span><span class="p">)</span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">tbl1</span><span class="w"> </span><span class="n">et</span><span class="w"> </span><span class="n">tbl2</span><span class="w"> </span><span class="n">sont</span><span class="w"> </span><span class="n">deux</span><span class="w"> </span><span class="n">tableaux</span><span class="w"> </span><span class="n">triés</span>
<span class="w">    </span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Initialisation</span>
<span class="w">    </span><span class="n">i1</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="mi">0</span><span class="w">   </span><span class="o">//</span><span class="w"> </span><span class="n">indice</span><span class="w"> </span><span class="n">du</span><span class="w"> </span><span class="mi">1</span><span class="n">er</span><span class="w"> </span><span class="n">tableau</span>
<span class="w">    </span><span class="n">i2</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="mi">0</span><span class="w">   </span><span class="o">//</span><span class="w"> </span><span class="n">indice</span><span class="w"> </span><span class="n">du</span><span class="w"> </span><span class="mi">2</span><span class="n">e</span><span class="w"> </span><span class="n">tableau</span>
<span class="w">    </span><span class="n">tbl</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="err">[]</span><span class="w">   </span><span class="o">//</span><span class="w"> </span><span class="n">liste</span><span class="w"> </span><span class="n">vide</span><span class="w"> </span><span class="n">destinée</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">accueillir</span><span class="w"> </span><span class="n">les</span><span class="w"> </span><span class="n">éléments</span><span class="w"> </span><span class="n">triés</span>
<span></span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Boucle</span>
<span class="w">    </span><span class="n">TANT</span><span class="w"> </span><span class="n">QUE</span><span class="w"> </span><span class="n">l</span><span class="s1">'on a pas atteint la fin d'</span><span class="n">un</span><span class="w"> </span><span class="n">des</span><span class="w"> </span><span class="n">tableaux</span>
<span class="w">        </span><span class="n">SI</span><span class="w"> </span><span class="n">tbl1</span><span class="o">[</span><span class="n">i1</span><span class="o">]</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="n">tbl2</span><span class="o">[</span><span class="n">i2</span><span class="o">]</span><span class="w"> </span><span class="n">ALORS</span>
<span class="w">            </span><span class="n">Insérer</span><span class="w"> </span><span class="n">tbl1</span><span class="o">[</span><span class="n">i1</span><span class="o">]</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fin</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">            </span><span class="n">incrémenter</span><span class="w"> </span><span class="n">i1</span>
<span class="w">        </span><span class="n">SINON</span>
<span class="w">            </span><span class="n">Insérer</span><span class="w"> </span><span class="n">tbl2</span><span class="o">[</span><span class="n">i2</span><span class="o">]</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fin</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">            </span><span class="n">incrémenter</span><span class="w"> </span><span class="n">i2</span>
<span class="w">        </span><span class="n">FIN</span><span class="w"> </span><span class="n">SI</span>
<span class="w">    </span><span class="n">FIN</span><span class="w"> </span><span class="n">TANT</span><span class="w"> </span><span class="n">QUE</span>
<span class="w">    </span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Finalisation</span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Insérer</span><span class="w"> </span><span class="n">les</span><span class="w"> </span><span class="n">éléments</span><span class="w"> </span><span class="n">restants</span><span class="w"> </span><span class="n">du</span><span class="w"> </span><span class="n">tableau</span><span class="w"> </span><span class="n">non</span><span class="w"> </span><span class="n">vide</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fin</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">    </span><span class="n">SI</span><span class="w"> </span><span class="n">i1</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="n">longueur</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl1</span><span class="w"> </span><span class="n">ALORS</span>
<span class="w">        </span><span class="n">Insérer</span><span class="w"> </span><span class="n">tous</span><span class="w"> </span><span class="n">les</span><span class="w"> </span><span class="n">éléments</span><span class="w"> </span><span class="n">restants</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl1</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fin</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">    </span><span class="n">SINON</span><span class="w"> </span><span class="n">SI</span><span class="w"> </span><span class="n">i2</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="n">longueur</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl2</span><span class="w"> </span><span class="n">ALORS</span>
<span class="w">        </span><span class="n">Insérer</span><span class="w"> </span><span class="n">tous</span><span class="w"> </span><span class="n">les</span><span class="w"> </span><span class="n">éléments</span><span class="w"> </span><span class="n">restants</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl2</span><span class="w"> </span><span class="n">à</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fin</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">RENVOYER</span><span class="w"> </span><span class="n">tbl</span>
</pre></div>

<p>Et voici une implémentation en python:</p>

<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">fusion</span> <span class="p">(</span><span class="n">tbl1</span><span class="p">:</span> <span class="nb">list</span><span class="p">,</span> <span class="n">tbl2</span><span class="p">:</span> <span class="nb">list</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">list</span><span class="p">:</span>
<span class="c1">    # Initialisation</span>
<span class="n">    N1</span><span class="p">,</span> <span class="n">N2</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">tbl1</span><span class="p">),</span> <span class="nb">len</span><span class="p">(</span><span class="n">tbl2</span><span class="p">)</span>
<span class="n">    i1</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">    i2</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">    tbl</span> <span class="o">=</span> <span class="p">[]</span>
<span></span>
<span class="c1">    # Boucle sur les deux tableaux</span>
<span class="k">    while</span> <span class="p">(</span><span class="n">i1</span> <span class="o">&lt;</span> <span class="n">N1</span><span class="p">)</span> <span class="ow">and</span> <span class="p">(</span><span class="n">i2</span> <span class="o">&lt;</span> <span class="n">N2</span><span class="p">):</span>
<span class="n">        x1</span><span class="p">,</span> <span class="n">x2</span> <span class="o">=</span> <span class="n">tbl1</span><span class="p">[</span><span class="n">i1</span><span class="p">],</span> <span class="n">tbl2</span><span class="p">[</span><span class="n">i2</span><span class="p">]</span>
<span class="c1">        # si x1 &lt; x2  on ajoute l'élément x1 à tbl</span>
<span class="k">        if</span> <span class="n">x1</span> <span class="o">&lt;=</span> <span class="n">x2</span><span class="p">:</span>
<span class="n">            tbl</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">x1</span><span class="p">)</span>
<span class="n">            i1</span> <span class="o">=</span> <span class="n">i1</span> <span class="o">+</span> <span class="mi">1</span>
<span class="c1">        # sinon on ajoute l'élément x2</span>
<span class="k">        else</span><span class="p">:</span>
<span class="n">            tbl</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">x2</span><span class="p">)</span>
<span class="n">            i2</span> <span class="o">=</span> <span class="n">i2</span> <span class="o">+</span> <span class="mi">1</span>
<span></span>
<span class="c1">    # Finalisation: On ajoute les éléments restants du tableau non vide restant</span>
<span class="c1">    # Si tbl1 n'a pas été entièrement vidé, on ajoute ses éléments restants</span>
<span class="k">    if</span> <span class="n">i1</span> <span class="o">&lt;</span> <span class="n">N1</span><span class="p">:</span>
<span class="k">        for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i1</span><span class="p">,</span> <span class="n">N1</span><span class="p">):</span>
<span class="n">            tbl</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">tbl1</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
<span class="c1">    # Sinon on ajoute les éléments de tbl2 restants</span>
<span class="k">    elif</span> <span class="n">i2</span> <span class="o">&lt;</span> <span class="n">N2</span><span class="p">:</span>
<span class="k">        for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i2</span><span class="p">,</span> <span class="n">N2</span><span class="p">):</span>
<span class="n">            tbl</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">tbl2</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
<span class="k">        
    return</span> <span class="n">tbl</span>
</pre></div>

<p>Un petit test dans la console <code>ipython</code> permet de vérifier sur un cas simple la fusion:</p>
<div class="highlight"><pre><span></span>&gt;&gt;&gt; fusion([3,6,8], [2,5,7,12])
[2, 3, 5, 6, 7, 8, 12]
</pre></div>

<h3 id="algorithme-de-tri-fusion" class="anchored">Algorithme de tri fusion</h3>
<p>Voici l’algorithme récursif de tri fusion qui utilise la fonction <code>fusion</code> définie précédemment.</p>
<p>Tout d’abord en pseudo-code, on retrouve des techniques de découpage du tableau en deux avec des divisions entières <code>//</code> vues dans la recherche dichotomique.</p>

<div class="highlight"><pre><span></span><span class="n">fonction</span><span class="w"> </span><span class="nf">tri_fusion</span><span class="p">(</span><span class="n">tbl</span><span class="o">:</span><span class="w"> </span><span class="n">Tableau</span><span class="p">)</span>
<span class="w">    </span><span class="n">N</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="n">Longueur</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span></span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Cas</span><span class="w"> </span><span class="n">terminal</span><span class="o">:</span><span class="w"> </span><span class="n">une</span><span class="w"> </span><span class="n">liste</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">un</span><span class="w"> </span>é<span class="n">lément</span><span class="w"> </span><span class="n">est</span><span class="w"> </span><span class="n">forcément</span><span class="w"> </span><span class="n">triée</span>
<span class="w">    </span><span class="n">SI</span><span class="w"> </span><span class="n">N</span><span class="w"> </span><span class="o">==</span><span class="w"> </span><span class="m">1</span><span class="w"> </span><span class="n">ALORS</span>
<span class="w">        </span><span class="n">RENVOYER</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">    </span><span class="n">FIN</span><span class="w"> </span><span class="n">SI</span>
<span></span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Recursion</span><span class="w"> </span><span class="n">sur</span><span class="w"> </span><span class="n">les</span><span class="w"> </span><span class="n">deux</span><span class="w"> </span><span class="n">demi</span><span class="o">-</span><span class="n">tableaux</span><span class="w"> </span><span class="n">sinon</span>
<span class="w">    </span><span class="n">tbl1</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="n">liste</span><span class="w"> </span><span class="n">des</span><span class="w"> </span><span class="n">N</span><span class="o">//</span><span class="m">2</span><span class="w"> </span><span class="n">premiers</span><span class="w"> </span>é<span class="n">léments</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span class="w">    </span><span class="n">tbl2</span><span class="w"> </span><span class="o">&lt;-</span><span class="w"> </span><span class="n">liste</span><span class="w"> </span><span class="n">des</span><span class="w"> </span><span class="n">N</span><span class="o">//</span><span class="m">2</span><span class="w"> </span><span class="n">derniers</span><span class="w"> </span>é<span class="n">léments</span><span class="w"> </span><span class="n">de</span><span class="w"> </span><span class="n">tbl</span>
<span></span>
<span class="w">    </span><span class="o">//</span><span class="w"> </span><span class="n">Renvoi</span><span class="w"> </span><span class="n">des</span><span class="w"> </span><span class="n">la</span><span class="w"> </span><span class="n">fusion</span><span class="w"> </span><span class="n">des</span><span class="w"> </span><span class="n">deux</span><span class="w"> </span><span class="n">tableaux</span>
<span class="w">    </span><span class="n">RENVOYER</span><span class="w"> </span><span class="nf">fusion</span><span class="p">(</span><span class="nf">tri_fusion</span><span class="p">(</span><span class="n">tbl1</span><span class="p">),</span><span class="w"> </span><span class="nf">tri_fusion</span><span class="p">(</span><span class="n">tbl2</span><span class="p">))</span>
</pre></div>

<p>Et voici une implémentation en python qui utilise les <a href="https://www.lyceum.fr/1g/nsi/3-representation-des-donnees-types-construits/2-usages-avances-des-tableaux#tableau-donn%C3%A9-en-compr%C3%A9hension">listes en compréhension</a>:</p>

<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_fusion</span> <span class="p">(</span><span class="n">tbl</span><span class="p">:</span> <span class="nb">list</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">list</span><span class="p">:</span>
<span class="n">    N</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">tbl</span><span class="p">)</span>
<span class="c1">    # cas de base: un tableau de zéro ou un élément est forcément trié!</span>
<span class="k">    if</span> <span class="n">N</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">:</span>
<span class="k">        return</span> <span class="n">tbl</span>
<span class="c1">    
    # on coupe le tableau en deux</span>
<span class="n">    tbl1</span> <span class="o">=</span> <span class="p">[</span><span class="n">tbl</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">N</span><span class="o">//</span><span class="mi">2</span><span class="p">)]</span>
<span class="n">    tbl2</span> <span class="o">=</span> <span class="p">[</span><span class="n">tbl</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">N</span><span class="o">//</span><span class="mi">2</span><span class="p">,</span> <span class="n">N</span><span class="p">)]</span>
<span class="c1">    
    # appels récursifs</span>
<span class="k">    return</span> <span class="n">fusion</span><span class="p">(</span><span class="n">tri_fusion</span><span class="p">(</span><span class="n">tbl1</span><span class="p">),</span> <span class="n">tri_fusion</span><span class="p">(</span><span class="n">tbl2</span><span class="p">))</span>
</pre></div>

<p>On fait un petit test sur une liste quelconque.</p>
<div class="highlight"><pre><span></span>&gt;&gt;&gt; tri_fusion([0, 25, 36, 41, 1, 465, 2, 3, 987])
[0, 1, 2, 3, 25, 36, 41, 465, 987]
</pre></div>

<h3 id="conclusion" class="anchored">Conclusion</h3>
<p>Nous avons vu dans ce chapitre un algorithme particulièrement <em>élégant et efficace</em> pour trier des éléments. Bien sûr, dans la pratique des contraintes de mémoire peuvent intervenir, et là au contraire cet algorithme se révélera peu performant, car l’utilisation de la récursivité et du tableau intermédiaire le rend très gourmand en mémoire.</p>
<p>La méthode «diviser pour régner» est une méthode très efficace pour résoudre des problèmes complexes en les <em>découpant en sous problèmes indépendants</em>. Par contre, on verra dans le prochain chapitre qu’elle devient inefficace si les sous-problèmes se chevauchent, et il conviendra alors d’utiliser une nouvelle technique appelée <em>« Programmation dynamique »</em> qui sera étudiée dans le chapitre <a href="/tg/nsi/5-algorithmique/4-programmation-dynamique">P5C4</a>.</p>
<div class="ref">
<ul>
<li><a href="https://fr.wikipedia.org/wiki/Diviser_pour_r%C3%A9gner_(informatique)">Article Wikipedia Diviser pour régner</a></li>
<li><a href="https://editions.lavoisier.fr/etudes-superieures/informatique-mp-pc-pt-psi/preaux/tec-et-doc/le-tout-en-un/livre/9782743022976">Informatique MP-PC-PT-PSI</a></li>
</ul>
</div>

