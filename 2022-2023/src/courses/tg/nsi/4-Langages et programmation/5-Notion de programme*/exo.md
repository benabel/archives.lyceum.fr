---
tocHTML: '<ul><li><a href="#vocabulaire" data-localhref="true">Vocabulaire</a></li><li><a href="#exemple-de-fonction-calculable-la-racine-carrée" data-localhref="true">Exemple de fonction calculable: la racine carrée</a></li><li><a href="#problèmes-de-décision-sur-les-entiers" data-localhref="true">Problèmes de décision sur les entiers</a></li><li><a href="#non-décidabilité-de-larrêt" data-localhref="true">Non-décidabilité de l’arrêt</a></li></ul>'
---





<h2 id="vocabulaire" class="anchored">Vocabulaire</h2>
<ol type="1">
<li>Donner deux exemples qui montrent pourquoi un programme est aussi une donnée.</li>
<li>Quelle est la différence entre la calculabilité et la décidabilité d’un problème ?</li>
<li>Donner des exemples de problèmes décidables.</li>
<li>Donner un exemple de problème indécidable.</li>
</ol>
<h2 id="exemple-de-fonction-calculable-la-racine-carrée" class="anchored">Exemple de fonction calculable: la racine carrée</h2>
<p>On définit ci-dessous une fonction <code>racine_carrée</code>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">racine_carrée</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="n">precision</span><span class="o">=</span><span class="mf">1E-2</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Recherche d'une racine carrée par une méthode dichotomique</span>
<span class="sd">    </span>
<span class="sd">    Paramètres</span>
<span class="sd">    ----------</span>
<span class="sd">    n: float</span>
<span class="sd">        le nombre dont on recherche la racine</span>
<span class="sd">    precision: float 0.01 par défaut</span>
<span class="sd">        precision du calcul du carré</span>
<span class="sd">    </span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    float</span>
<span class="sd">        la racine carrée de n</span>
<span class="sd">    """</span>
<span class="n">    gauche</span><span class="p">,</span> <span class="n">droite</span><span class="p">,</span> <span class="n">milieu</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="n">n</span><span class="p">,</span> <span class="n">n</span>
<span class="k">    while</span> <span class="nb">abs</span><span class="p">(</span><span class="n">milieu</span> <span class="o">**</span> <span class="mi">2</span> <span class="o">-</span> <span class="n">n</span><span class="p">)</span> <span class="o">&gt;</span> <span class="n">precision</span> <span class="p">:</span>
<span class="n">        milieu</span> <span class="o">=</span> <span class="p">(</span><span class="n">gauche</span> <span class="o">+</span> <span class="n">droite</span><span class="p">)</span> <span class="o">/</span> <span class="mi">2</span>
<span class="k">        if</span> <span class="n">milieu</span> <span class="o">**</span> <span class="mi">2</span> <span class="o">-</span> <span class="n">n</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">            droite</span> <span class="o">=</span> <span class="n">milieu</span> <span class="o">-</span> <span class="n">precision</span>
<span class="k">        else</span><span class="p">:</span>
<span class="n">            gauche</span> <span class="o">=</span> <span class="n">milieu</span> <span class="o">+</span> <span class="n">precision</span>
<span class="k">    return</span> <span class="n">milieu</span>
</pre></div>

<ol type="1">
<li>Expliquer pourquoi il est nécessaire d’utiliser une précision dans ce calcul ?</li>
<li>Expliquer la ligne: <code>while abs(milieu ** 2 - n) &gt; precision :</code></li>
<li>Pourquoi peut-on qualifier cet algorithme de dichotomique ?</li>
</ol>
<h2 id="problèmes-de-décision-sur-les-entiers" class="anchored">Problèmes de décision sur les entiers</h2>
<ol type="1">
<li><p>Implémenter en Python deux fonctions :</p>
<ul>
<li><code>est_pair(n)</code>: Renvoie <code>True</code> si le nombre entier <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
est pair, <code>False</code> sinon.</li>
<li><code>est_premier(n)</code>: Renvoie <code>True</code> si le nombre entier <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
est premier, <code>False</code> sinon.</li>
</ul></li>
<li><p>Tester ces fonctions avec des petites entrées, puis avec des grandes pour voir si ces algorithmes seraient utilisables en pratique.</p></li>
</ol>
<h2 id="non-décidabilité-de-larrêt" class="anchored">Non-décidabilité de l’arrêt</h2>
<ol type="1">
<li>Pourquoi dit-on que le problème de l’arrêt est indécidable ?</li>
</ol>
<p>Supposons qu’il existe une fonction calculable <code>termine(fonction, données)</code> qui prend 2 arguments :</p>
<ul>
<li>une fonction,</li>
<li>et des données d’entrée pour cette fonction</li>
</ul>
<p>et qui renverra <code>True</code> si le programme termine et <code>False</code> s’il entre dans une boucle infinie.</p>
<p>On définit les deux fonctions suivantes :</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">fonction1</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>
<span class="k">    if</span> <span class="n">n</span> <span class="o">%</span> <span class="mi">3</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">True</span>
<span class="k">    else</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">False</span>
<span></span>
<span class="k">def</span> <span class="nf">fonction2</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>
<span class="k">    while</span> <span class="n">n</span> <span class="o">%</span> <span class="mi">3</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">"True"</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"False"</span><span class="p">)</span>
</pre></div>

<ol start="2" type="1">
<li><p>Que renverront les appels suivants ?</p>
<div class="highlight"><pre><span></span><span class="n">termine</span><span class="p">(</span><span class="n">function1</span><span class="p">,</span> <span class="mi">7</span><span class="p">)</span>
<span class="n">termine</span><span class="p">(</span><span class="n">function1</span><span class="p">,</span> <span class="mi">9</span><span class="p">)</span>
<span class="n">termine</span><span class="p">(</span><span class="n">function2</span><span class="p">,</span> <span class="mi">7</span><span class="p">)</span>
<span class="n">termine</span><span class="p">(</span><span class="n">function2</span><span class="p">,</span> <span class="mi">9</span><span class="p">)</span>
</pre></div>

<p>Justifier vos réponses.</p></li>
<li><p>On définit une fonction <code>test_sur_soi</code>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">test_sur_soi</span><span class="p">(</span><span class="n">programme</span><span class="p">):</span>
<span class="k">    if</span> <span class="n">termine</span><span class="p">(</span><span class="n">programme</span><span class="p">,</span> <span class="n">programme</span><span class="p">):</span>
<span class="k">        while</span> <span class="kc">True</span><span class="p">:</span> <span class="k">pass</span> <span class="c1"># boucle infinie</span>
</pre></div>

<p>Que se passe-t-il si on appelle <code>test_sur_soi</code> sur elle-même: <code>test_sur_soi(test_sur_soi)</code> ?</p></li>
</ol>

