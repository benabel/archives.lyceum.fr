---
"tags": ["Python", "algorithmique", "algorithme de force brute"]
tocHTML: '<ul><li><a href="#méthodes-de-parcours-séquentiel-dun-tableau" data-localhref="true">Méthodes de parcours séquentiel d’un tableau</a></li><ul><li><a href="#itération-sur-les-valeurs" data-localhref="true">Itération sur les valeurs</a></li><li><a href="#itération-sur-les-index" data-localhref="true">Itération sur les index</a></li></ul><li><a href="#recherche-dun-extrémum" data-localhref="true">Recherche d’un extrémum</a></li><ul><li><a href="#recherche-du-maximum" data-localhref="true">Recherche du maximum</a></li><li><a href="#recherche-du-minimum" data-localhref="true">Recherche du minimum</a></li></ul><li><a href="#calculer-la-moyenne-dun-tableau" data-localhref="true">Calculer la moyenne d’un tableau</a></li><li><a href="#coût-de-lalgorithme-notion-de-complexité" data-localhref="true">Coût de l’algorithme: notion de complexité</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>    Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>   Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>       Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Parcours séquentiel d’un tableau</td>
<td>Écrire un algorithme de recherche d’un extremum, de calcul d’une moyenne.</td>
<td>On montre que le coût est linéaire</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="g quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Dans ce chapitre, nous allons étudier des algorithmes de parcours séquentiel d’un tableau pour:</p>
<ol type="1">
<li>Rechercher un élément d’un type donné.</li>
<li>Rechercher le maximum d’un tableau.</li>
<li>Calculer la moyenne d’un tableau.</li>
</ol>
<p>Ces algorithmes «séquentiels» ne sont pas du tout efficace, on les appelle en anglais <em>Brute force algorithms</em>.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Sudoku_solved_by_bactracking.gif" caption="Exemple de résolution d'un sudoku par force brute. Toutes les solutions sont explorées jusqu'à trouver la bonne."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="méthodes-de-parcours-séquentiel-dun-tableau" class="anchored">Méthodes de parcours séquentiel d’un tableau</h2>
<p>Comme vu dans le chapitre P3C2, on peut itérer sur les valeurs ou sur les index.</p>
<h3 id="itération-sur-les-valeurs" class="anchored">Itération sur les valeurs</h3>
<p>On fait une itération sur les valeurs du tableau en utilisant le mot-clé <code>in</code>.</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="n">tab</span> <span class="o">=</span> <span class="p">[</span><span class="mi">12</span><span class="p">,</span> <span class="o">-</span><span class="mi">3</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="o">-</span><span class="mi">9</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">7</span><span class="p">]</span>
<span class="k">for</span> <span class="n">val</span> <span class="ow">in</span> <span class="n">tab</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">val</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">12</span>
<span class="o">-</span><span class="mf">3</span>
<span class="mf">15</span>
<span class="o">-</span><span class="mf">9</span>
<span class="mf">17</span>
<span class="mf">7</span>
</pre></div>

</div>
</div>
<h3 id="itération-sur-les-index" class="anchored">Itération sur les index</h3>
<p>C’est la méthode classique utilisée dans les langages impératifs.</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">tab</span><span class="p">)):</span>
<span class="n">    val</span> <span class="o">=</span> <span class="n">tab</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"indice:"</span><span class="p">,</span> <span class="n">i</span><span class="p">,</span> <span class="s2">"valeur:"</span><span class="p">,</span> <span class="n">val</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">0</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="mi">12</span>
<span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">1</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="o">-</span><span class="mi">3</span>
<span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">2</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="mi">15</span>
<span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">3</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="o">-</span><span class="mi">9</span>
<span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">4</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="mi">17</span>
<span class="n">indice</span><span class="o">:</span><span class="w"> </span><span class="mi">5</span><span class="w"> </span><span class="n">valeur</span><span class="o">:</span><span class="w"> </span><span class="mi">7</span>
</pre></div>

</div>
</div>
<h2 id="recherche-dun-extrémum" class="anchored">Recherche d’un extrémum</h2>
<p>On initialise la valeur au premier élément du tableau puis on parcourt le tableau pour vérifier s’il existe un élément soit plus petit soit plus grand.</p>
<h3 id="recherche-du-maximum" class="anchored">Recherche du maximum</h3>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">maximum</span><span class="p">(</span><span class="n">liste</span><span class="p">):</span>
<span class="c1">    # ne pas utiliser max pour le nom de variable</span>
<span class="c1">    # car la fonction max existe en Python(on l'écraserait!)</span>
<span class="n">    maxi</span> <span class="o">=</span> <span class="n">liste</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="k">    for</span> <span class="n">e</span> <span class="ow">in</span> <span class="n">liste</span><span class="p">:</span>
<span class="k">        if</span> <span class="n">e</span> <span class="o">&gt;</span> <span class="n">maxi</span><span class="p">:</span>
<span class="n">            maxi</span> <span class="o">=</span> <span class="n">e</span>
<span class="k">    return</span> <span class="n">maxi</span>
<span></span>
<span class="c1"># appel de la fonction sur tab</span>
<span class="n">maximum</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="26">
<div class="highlight"><pre><span></span><span class="mf">17</span>
</pre></div>

</div>
</div>
<h3 id="recherche-du-minimum" class="anchored">Recherche du minimum</h3>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">minimum</span><span class="p">(</span><span class="n">liste</span><span class="p">):</span>
<span class="n">    mini</span> <span class="o">=</span> <span class="n">liste</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="k">    for</span> <span class="n">e</span> <span class="ow">in</span> <span class="n">liste</span><span class="p">:</span>
<span class="k">        if</span> <span class="n">e</span> <span class="o">&lt;</span> <span class="n">mini</span><span class="p">:</span>
<span class="n">            mini</span> <span class="o">=</span> <span class="n">e</span>
<span class="k">    return</span> <span class="n">mini</span>
<span></span>
<span class="c1"># appel de la fonction avec la liste tab en argument</span>
<span class="n">minimum</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="27">
<div class="highlight"><pre><span></span>-9
</pre></div>

</div>
</div>
<h2 id="calculer-la-moyenne-dun-tableau" class="anchored">Calculer la moyenne d’un tableau</h2>
<p>On initialise une valeur accumulatrice à 0, puis on additionne tous les éléments du tableau. Enfin on divise la somme des éléments par le nombre d’éléments du tableau.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">moyenne</span><span class="p">(</span><span class="n">liste</span><span class="p">):</span>
<span class="n">    somme</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">    for</span> <span class="n">e</span> <span class="ow">in</span> <span class="n">liste</span><span class="p">:</span>
<span class="n">        somme</span> <span class="o">=</span> <span class="n">somme</span> <span class="o">+</span> <span class="n">e</span>
<span class="c1">    # On divise la somme de tpus les éléments par leur nombre</span>
<span class="n">    moyenne</span> <span class="o">=</span> <span class="n">somme</span> <span class="o">/</span> <span class="nb">len</span><span class="p">(</span><span class="n">liste</span><span class="p">)</span>
<span class="k">    return</span> <span class="n">moyenne</span>
<span></span>
<span class="c1"># appel de la fonction</span>
<span class="n">moyenne</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="28">
<div class="highlight"><pre><span></span><span class="mf">6.5</span>
</pre></div>

</div>
</div>
<h2 id="coût-de-lalgorithme-notion-de-complexité" class="anchored">Coût de l’algorithme: notion de complexité</h2>
<p>Pour mesurer l’efficacité <em>temporelle</em> d’un algorithme, on introduit la notion de complexité.</p>
<dl>
<dt>
Complexité
</dt>
<dd>
<div>
<p>La complexité d’un algorithme est le nombre d’opérations élémentaires(opération arithmétique, comparaison, affectation…) effectuées pour obtenir un résultat.</p>
</div>
</dd>
</dl>
<div class="prop">
<p>La complexité d’un algorithme dépend souvent de la taille des données d’entrée notée <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>
. Dans notre cas la taille du tableau dans lequel on recherche l’élément.</p>
</div>
<p>Pour comparer facilement les algorithmes on se place dans le pire des cas, dans les algorithmes présentés il faut <em>toujours</em> parcourir entièrement la liste pour trouver le maximum, le minimum ou la moyenne: il y a donc <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>
itérations.</p>
<p>On dit que le coût de l’algorithme est <em>linéaire</em> ou encore que c’est un algorithme de complexité <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(N)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span>
.</p>

