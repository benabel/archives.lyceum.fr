---
"tags": ["python","boucles", "for","while"]
tocHTML: '<ul><li><a href="#la-boucle-bornée-for" data-localhref="true">La boucle bornée <code>for</code></a></li><ul><li><a href="#utilisation-de-la-fonction-range" data-localhref="true">Utilisation de la fonction <code>range()</code></a></li></ul><li><a href="#la-boucle-non-bornée-while" data-localhref="true">La boucle non bornée: <code>while</code></a></li><ul><li><a href="#réécriture-dune-boucle-for" data-localhref="true">Réécriture d’une boucle <code>for</code></a></li><li><a href="#contrôle-par-variable-booléenne" data-localhref="true">Contrôle par variable booléenne</a></li><li><a href="#remarques" data-localhref="true">Remarques</a></li></ul><li><a href="#boucles-imbriquées" data-localhref="true">Boucles imbriquées</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>   Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>  Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>      Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Constructions élémentaires</td>
<td>Mettre en évidence un corpus de constructions élémentaires. boucles non bornées, appels de fonction.</td>
<td>Séquences, affectation, conditionnelles, boucles bornées,</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Comme nous l’avons déjà vu, les boucles permettent de répéter des instructions. Nous détaillerons dans ce chapitre la syntaxe de la fonction <code>range()</code> en Python utile pour contrôler les boucles bornées <code>for</code>, et verrons les trois étapes essentielles à la construction d’une boucle <code>while</code>: initialisation, condition d’arrêt et mise à jour.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="RepeatUntil.svg" caption="Les boucles font partie des ingrédients indispensables des algorithmes et vous les avez certainement déjà rencontrés en Scratch en collège."></wc-wikimage></p>
</div>
</div>
</div>
<p>Il existe deux façons de coder des boucles:</p>
<ul>
<li>La boucle bornée répète les instructions pour des valeurs choisies. En Python <code>for</code> (<em>pour</em> en français).</li>
<li>La boucle non bornée répète les instructions _tant qu’_une condition est vérifiée. En Python: <code>while</code> (<em>tant que</em> en français).</li>
</ul>
<p>Les deux types de boucles sont interchangeables, on préfère cependant utiliser:</p>
<ul>
<li><code>for</code> si le nombre d’itérations est connu à l’avance.</li>
<li><code>while</code> sinon.</li>
</ul>
<h2 id="la-boucle-bornée-for" class="anchored">La boucle bornée <code>for</code></h2>
<p>La boucle <code>for</code> est utilisée lorsque l’on <em>connaît à l’avance</em> les valeurs pour lesquelles on veut répéter le bloc d’instructions. On l’appelle une <strong>boucle bornée</strong>.</p>
<h3 id="utilisation-de-la-fonction-range" class="anchored">Utilisation de la fonction <code>range()</code></h3>
<div class="prop">
<p>La fonction <code>range()</code> peut accepter de 1 à 3 paramètres pour contrôler la façon dont se font les itérations.</p>
</div>
<p>Il est très fréquent de réaliser des itérations sur des nombres en comptant les tours de boucles.</p>
<p>La fonction <code>range(n)</code> permet de créer une boucle de n tours.</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">7</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">0</span>
<span class="mf">1</span>
<span class="mf">2</span>
<span class="mf">3</span>
<span class="mf">4</span>
<span class="mf">5</span>
<span class="mf">6</span>
</pre></div>

</div>
</div>
<p>On peut éventuellement choisir la valeur du compteur au départ.</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">début</span><span class="p">,</span> <span class="n">fin</span><span class="p">):</span>
<span class="o">    ...</span>
</pre></div>

<p><strong>Attention:</strong> Dans tous les cas le nombre final n’est pas inclus dans les itérations.</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">7</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">1</span>
<span class="mf">2</span>
<span class="mf">3</span>
<span class="mf">4</span>
<span class="mf">5</span>
<span class="mf">6</span>
</pre></div>

</div>
</div>
<p>On peut également choisir le pas de l’incrémentation grâce à la syntaxe:</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">début</span><span class="p">,</span> <span class="n">fin</span><span class="p">,</span> <span class="n">pas</span><span class="p">):</span>
<span class="n">    instruction</span> <span class="mi">1</span>
<span class="n">    instruction</span> <span class="mi">2</span>
<span class="o">...</span>
</pre></div>

<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">2</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">1</span>
<span class="mf">3</span>
<span class="mf">5</span>
<span class="mf">7</span>
<span class="mf">9</span>
<span class="mf">11</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">365</span><span class="p">,</span> <span class="mi">300</span><span class="p">,</span> <span class="o">-</span><span class="mi">5</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">365</span>
<span class="mf">360</span>
<span class="mf">355</span>
<span class="mf">350</span>
<span class="mf">345</span>
<span class="mf">340</span>
<span class="mf">335</span>
<span class="mf">330</span>
<span class="mf">325</span>
<span class="mf">320</span>
<span class="mf">315</span>
<span class="mf">310</span>
<span class="mf">305</span>
</pre></div>

</div>
</div>
<h2 id="la-boucle-non-bornée-while" class="anchored">La boucle non bornée: <code>while</code></h2>
<p>La boucle <code>while</code> est plus puissante que la boucle <code>for</code>, elle permet de créer des répétitions, même si l’on ne connait pas à l’avance le nombre de répétitions.</p>
<p>Contrairement à la boucle <code>for</code>, le nombre d’itérations n’est pas fixé à l’avance, mais il est testé <em>dynamiquement</em> au début de chaque boucle: On parle de <strong>boucle non bornée</strong>.</p>
<p>À chaque tour, on teste une condition, si cette condition est vérifiée, on exécute le bloc d’instructions de la boucle, sinon, l’exécution de la boucle est arrêtée et le programme se poursuit «<em>normalement</em>».</p>
<p>L’écriture d’une boucle non bornée nécessite trois étapes:</p>
<ol type="1">
<li>Initialisation de la variable de contrôle.</li>
<li>Condition d’arrêt.</li>
<li>Mise à jour de la variable de contrôle.</li>
</ol>
<h3 id="réécriture-dune-boucle-for" class="anchored">Réécriture d’une boucle <code>for</code></h3>
<p>Nous allons traduire une boucle <code>for</code> par un <code>while</code> (même si cela n’est pas conseillé).</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">2</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">1</span>
<span class="mf">3</span>
<span class="mf">5</span>
</pre></div>

</div>
</div>
<p>Dans une boucle <code>for</code> toutes les affectations de la variable <code>i</code> sont gérées par la fonction <code>range()</code>. Avec le <code>while</code> c’est à nous de nous en occuper.</p>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">1</span>                   <span class="c1"># initialisation</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">7</span><span class="p">:</span>            <span class="c1"># condition d'arrêt</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">2</span>           <span class="c1"># Mise à jour de la variable de contrôle</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">1</span>
<span class="mf">3</span>
<span class="mf">5</span>
</pre></div>

</div>
</div>
<h3 id="contrôle-par-variable-booléenne" class="anchored">Contrôle par variable booléenne</h3>
<p>Nous créons ici une variable booléenne <code>repeat</code> pour bien comprendre si la boucle <code>while</code> doit se poursuivre ou non.</p>
<div class="highlight"><pre><span></span><span class="n">repeat</span> <span class="o">=</span> <span class="kc">True</span><span class="p">;</span>
<span class="k">while</span> <span class="n">repeat</span><span class="p">:</span>
<span class="n">    resultat</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Combien font 2 + 5?  "</span><span class="p">))</span>
<span class="k">    if</span> <span class="n">resultat</span> <span class="o">==</span> <span class="mi">7</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">"Bravo vous avez trouvé."</span><span class="p">)</span>
<span class="n">        repeat</span> <span class="o">=</span> <span class="kc">False</span>
</pre></div>

<p>Il serait cependant plus élégant de faire passer la condition du <code>if</code> dans le <code>while</code>.</p>
<div class="highlight"><pre><span></span><span class="n">resultat</span> <span class="o">=</span> <span class="kc">None</span>
<span class="k">while</span> <span class="n">resultat</span> <span class="o">!=</span> <span class="mi">7</span><span class="p">:</span>
<span class="n">    resultat</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Combien font 2 + 5?  "</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Bravo vous avez trouvé."</span><span class="p">)</span>
</pre></div>

<h3 id="remarques" class="anchored">Remarques</h3>
<ul>
<li><p>La variable compteur est souvent notée <code>i</code>;</p></li>
<li><p>faire attention à ne pas programmer une <strong>boucle infinie</strong> qui bloquerait votre programme en lui faisant répéter l’instruction une infinité de fois et saturerait ainsi votre processeur et votre mémoire.</p>
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">1</span>
<span class="c1">    # i sera toujours positif, la condition d'arrêt ne sera jamais vraie</span>
</pre></div>
</li>
</ul>
<h2 id="boucles-imbriquées" class="anchored">Boucles imbriquées</h2>
<p>Il est possible d’exécuter une boucle à l’intérieur d’une autre boucle, elles sont alors dites imbriquées.</p>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="c1"># boucle externe</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">):</span>
<span class="c1">    # boucle interne</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">):</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">0</span><span class="w"> </span><span class="mf">0</span>
<span class="mf">0</span><span class="w"> </span><span class="mf">1</span>
<span class="mf">1</span><span class="w"> </span><span class="mf">0</span>
<span class="mf">1</span><span class="w"> </span><span class="mf">1</span>
<span class="mf">2</span><span class="w"> </span><span class="mf">0</span>
<span class="mf">2</span><span class="w"> </span><span class="mf">1</span>
</pre></div>

</div>
</div>
<p>Ce type de boucles peut par exemple être utilisé pour parcourir des tableaux de données en ligne et en colonne, on les utilisera également dans les <a href="/1g/nsi/8-algorithmique/2-algorithmes-de-tri">algorithmes de tris</a> que nous verrons en fin d’année.</p>

