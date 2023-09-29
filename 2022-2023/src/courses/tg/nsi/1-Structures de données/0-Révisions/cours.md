---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#les-types-simples" data-localhref="true">Les types simples</a></li><li><a href="#les-types-construits" data-localhref="true">Les types construits</a></li><li><a href="#méthode-ditérations" data-localhref="true">Méthode d’itérations</a></li><ul><li><a href="#itération-sur-une-liste" data-localhref="true">Itération sur une liste</a></li><li><a href="#itération-sur-les-dictionnaires" data-localhref="true">Itération sur les dictionnaires</a></li></ul></ul>'
---





<div class="intro">
<blockquote class="blockquote">
<p>Nous avons vu l’année dernière comment étaient codées les données au sein d’un ordinateur, et nous avons utilisé des types simples et composés de Python.</p>
</blockquote>
</div>
<h2 id="les-types-simples" class="anchored">Les types simples</h2>
<p>Un objet de type simple ne stocke qu’une donnée.</p>
<ul>
<li>entier(<code>int</code>): <code>1</code> <code>12</code> <code>-4</code></li>
<li>nombre flottant(<code>float</code>): <code>1.1</code> <code>12.0</code> -25E2`<br>
</li>
<li>chaîne de caractères(<code>str</code>): <code>"Du texte"</code> <code>'Un autre texte'</code></li>
<li>booléen(<code>bool</code>): <code>True</code> <code>False</code></li>
</ul>
<h2 id="les-types-construits" class="anchored">Les types construits</h2>
<p>Les types construits permettent de stocker des collections de données.</p>
<ul>
<li><p>tableau(<code>list</code>): <code>l = [1, 12, -4]</code></p>
<p>On accède aux éléments du tableau par <strong>index</strong>. <code>l[2]</code> → <code>-4</code></p></li>
<li><p>dictionnaire(<code>dict</code>): <code>d = {"nom": "Gaston", "age": 25}</code></p>
<p>On accède aux éléments du dictionnaire par <strong>clef</strong>. <code>d["age"]</code> → <code>25</code></p></li>
</ul>
<h2 id="méthode-ditérations" class="anchored">Méthode d’itérations</h2>
<h3 id="itération-sur-une-liste" class="anchored">Itération sur une liste</h3>
<p>On peut itérer sur les valeurs ou sur les index.</p>
<ol type="1">
<li>Itération sur les valeurs</li>
</ol>
<p>On fait une itération sures valeurs du tableau en utilisant le mot-clé <code>in</code>.</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">val</span> <span class="ow">in</span> <span class="n">ma_liste</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">val</span><span class="p">)</span>
</pre></div>

<ol start="2" type="1">
<li>Itération sur les index</li>
</ol>
<p>C’est la méthode classique utilisée dans les langages impératifs. Ayant accès à l’index on a également accès la valeur.</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">ma_liste</span><span class="p">)):</span>
<span class="n">    val</span> <span class="o">=</span> <span class="n">ma_liste</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"indice:"</span><span class="p">,</span> <span class="n">i</span><span class="p">,</span> <span class="s2">"valeur:"</span><span class="p">,</span> <span class="n">val</span><span class="p">)</span>
</pre></div>

<h3 id="itération-sur-les-dictionnaires" class="anchored">Itération sur les dictionnaires</h3>
<p>Les dictionnaires étant des associations de clés(key) et de valeurs(value), on peut itérer sur les clés, les valeurs, ou les deux.</p>
<ol type="1">
<li><p>Itération sur les clés: <code>keys()</code></p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">key</span> <span class="ow">in</span> <span class="n">D</span><span class="o">.</span><span class="n">keys</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">key</span><span class="p">)</span>
</pre></div>

<p>Ou plus simplement.</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">key</span> <span class="ow">in</span> <span class="n">D</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">key</span><span class="p">)</span>
</pre></div>
</li>
<li><p>Itération sur les valeurs: <code>values()</code></p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">value</span> <span class="ow">in</span> <span class="n">D</span><span class="o">.</span><span class="n">values</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">value</span><span class="p">)</span>
</pre></div>
</li>
<li><p>Itération sur les paires clé, valeurs: <code>items()</code></p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">key</span><span class="p">,</span> <span class="n">value</span> <span class="ow">in</span> <span class="n">D</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">key</span><span class="p">,</span> <span class="s1">'=&gt;'</span><span class="p">,</span> <span class="n">value</span><span class="p">)</span>
</pre></div>
</li>
</ol>

