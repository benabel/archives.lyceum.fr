---
tocHTML: '<ul><li><a href="#programmation-fonctionnelle-avec-filter-map-reduce" data-localhref="true">Programmation fonctionnelle avec <code>filter</code>, <code>map</code>, <code>reduce</code></a></li></ul>'
---





<h2 id="programmation-fonctionnelle-avec-filter-map-reduce" class="anchored">Programmation fonctionnelle avec <code>filter</code>, <code>map</code>, <code>reduce</code></h2>
<ol type="1">
<li><p>Bien que ces fonctions soient définies en Python, nous allons les implémenter avec les noms suivants:</p>
<ol type="a">
<li><code>filtre(fonction, liste)</code> <em>(filter)</em>: fonction qui prend deux paramètres en entrée:
<ul>
<li>un fonction de décision à 1 paramètre de type simple(<code>int pour simplifier</code>).</li>
<li>et une liste,</li>
</ul></li>
</ol>
<p>Cette fonction renvoie une nouvelle liste avec seulement les éléments ayant satisfait la fonction de décision.</p>
<p>Voici quelques tests à effectuer pour vérifier son fonctionnement:</p>
<div class="highlight"><pre><span></span><span class="c1"># nb impairs</span>
<span class="k">assert</span> <span class="n">filtre</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">1</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>
<span class="c1"># nb pairs</span>
<span class="k">assert</span> <span class="n">filtre</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">]</span>
</pre></div>

<ol start="2" type="a">
<li><code>applique(fonction, liste)</code> <em>(map)</em>: fonction qui prend deux paramètres en entrée:
<ul>
<li>un fonction à 1 paramètre de type simple(<code>int pour simplifier</code>) qui renvoie une valeur.</li>
<li>et une liste,</li>
</ul></li>
</ol>
<p>Cette fonction renvoie une nouvelle liste pour laquelle a été appliqué la fonction donnée en argument à chacun des éléments de la liste d’entrée.</p>
<p>Voici quelques tests à effectuer pour vérifier son fonctionnement:</p>
<div class="highlight"><pre><span></span><span class="c1"># doubles</span>
<span class="k">assert</span> <span class="n">applique</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span> <span class="o">**</span> <span class="mi">2</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">16</span><span class="p">]</span>
<span class="c1"># puissances de 2</span>
<span class="k">assert</span> <span class="n">applique</span><span class="p">(</span><span class="k">lambda</span> <span class="n">n</span><span class="p">:</span> <span class="mi">2</span><span class="o">**</span><span class="n">n</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">16</span><span class="p">]</span>
</pre></div>

<ol start="3" type="a">
<li><code>réduit</code> <em>(reduce)</em>: fonction qui prend deux paramètres en entrée:
<ul>
<li>un fonction à 2 paramètres de type simple qui renvoie une valeur.</li>
<li>une liste.</li>
</ul></li>
</ol>
<p>Cette fonction renvoie une valeur par l’accumulation des valeurs de la liste par la fonction d’accumulation donnée en argument.</p>
<p>Voici quelques tests à effectuer pour vérifier son fonctionnement:</p>
<div class="highlight"><pre><span></span><span class="c1"># addition des éléments</span>
<span class="k">assert</span> <span class="n">réduit</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="mi">10</span>
<span class="c1"># soustraction des éléments</span>
<span class="k">assert</span> <span class="n">réduit</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">-</span> <span class="n">y</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="o">-</span><span class="mi">10</span>
<span class="c1"># concaténation des éléments</span>
<span class="k">assert</span> <span class="n">réduit</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="nb">str</span><span class="p">(</span><span class="n">x</span><span class="p">)</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">y</span><span class="p">),</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="s2">"01234"</span>
</pre></div>
</li>
<li><p>En utilisant la fonction <code>applique</code>, créer en une ligne une fonction <code>négatif</code> qui permet de passer ce test:</p>
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">négatif</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">3</span><span class="p">,</span> <span class="o">-</span><span class="mi">4</span><span class="p">]</span>
</pre></div>
</li>
<li><p>En utilisant la fonction <code>réduit</code>, créer en une ligne une fonction <code>longueur</code> qui permet de passer ces tests:</p>
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">longueur</span><span class="p">([])</span> <span class="o">==</span> <span class="mi">0</span>
<span class="k">assert</span> <span class="n">longueur</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">])</span> <span class="o">==</span> <span class="mi">3</span>
<span class="k">assert</span> <span class="n">longueur</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">])</span> <span class="o">==</span> <span class="mi">5</span>
</pre></div>
</li>
</ol>

