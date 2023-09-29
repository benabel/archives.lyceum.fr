---
tocHTML: '<ul><li><a href="#spécification-et-tests-de-la-division-euclidienne" data-localhref="true">Spécification et tests de la division euclidienne</a></li><li><a href="#créer-est-prototyper-une-fonction-qui-satisfait-à-des-tests" data-localhref="true">Créer est prototyper une fonction qui satisfait à des tests</a></li><li><a href="#algorithmes-classiques" data-localhref="true">Algorithmes classiques</a></li><li><a href="#recherche-dans-une-documentation" data-localhref="true">Recherche dans une documentation</a></li></ul>'
---





<h2 id="spécification-et-tests-de-la-division-euclidienne" class="anchored">Spécification et tests de la division euclidienne</h2>
<p>Copier le code suivant dans un notebook et complétez-le en ajoutant le prototype et les commentaires.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">division_euclidienne</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">b</span><span class="p">):</span>
<span class="w">    </span><span class="sd">""" Ecrire la spécification de la fonction</span>
<span></span>
<span class="sd">    Arguments</span>
<span class="sd">    ---------</span>
<span></span>
<span class="sd">
    Returns</span>
<span class="sd">    -------</span>
<span></span>
<span class="sd">    """</span>
<span class="c1">    # Ajouter des commentaires pour expliquer </span>
<span class="k">    if</span> <span class="n">b</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="ow">or</span> <span class="n">a</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="ow">or</span> <span class="nb">type</span><span class="p">(</span><span class="n">a</span><span class="p">)</span> <span class="o">!=</span> <span class="nb">int</span> <span class="ow">or</span> <span class="nb">type</span><span class="p">(</span><span class="n">b</span><span class="p">)</span> <span class="o">!=</span> <span class="nb">int</span><span class="p">:</span>
<span class="k">        return</span> <span class="o">-</span><span class="mi">1</span>
<span></span>
<span class="k">    if</span> <span class="n">a</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="c1">    
    # mes commentaires ici sur une ligne</span>
<span></span>
<span class="n">    r</span> <span class="o">=</span> <span class="n">a</span>
<span class="n">    q</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">    while</span> <span class="p">(</span><span class="n">r</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">):</span>
<span class="n">        r</span> <span class="o">=</span> <span class="n">r</span> <span class="o">-</span> <span class="n">b</span>
<span class="n">        q</span> <span class="o">=</span> <span class="n">q</span> <span class="o">+</span> <span class="mi">1</span>
<span></span>
<span class="k">    return</span> <span class="p">(</span><span class="n">q</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="n">r</span><span class="o">+</span><span class="n">b</span><span class="p">)</span>
<span></span>
<span class="c1"># Tests</span>
<span class="k">def</span> <span class="nf">test_division_euclidienne</span><span class="p">():</span>
<span class="c1">    # Ajouter des commentaires pour expliquer</span>
<span class="c1">    # quelles sont les vérifications effectuées</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">37</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="mi">12</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
<span class="c1">    # Verifications d'erreurs</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="o">-</span><span class="mi">10</span><span class="p">,</span> <span class="mi">7</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">7</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mf">10.3</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">11</span><span class="p">,</span> <span class="mf">3.5</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="c1">    # ...</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span>
<span class="k">    assert</span> <span class="n">division_euclidienne</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span>
<span class="c1">    
# Lancement du test</span>
<span class="n">test_division_euclidienne</span><span class="p">()</span>
</pre></div>

<h2 id="créer-est-prototyper-une-fonction-qui-satisfait-à-des-tests" class="anchored">Créer est prototyper une fonction qui satisfait à des tests</h2>
<ol type="1">
<li>Créer et prototyper une fonction <code>appartient()</code> qui indique si un élément est présent dans une liste, et qui passe le jeu de tests suivants:</li>
</ol>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">test_appartient</span><span class="p">():</span>
<span class="k">   assert</span> <span class="n">appartient</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="p">[</span><span class="mi">5</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">])</span> <span class="ow">is</span> <span class="kc">True</span>
<span class="k">   assert</span> <span class="n">appartient</span><span class="p">(</span><span class="mi">6</span><span class="p">,</span> <span class="p">[</span><span class="mi">5</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">])</span> <span class="ow">is</span> <span class="kc">False</span>
</pre></div>

<ol start="2" type="1">
<li>Compléter le jeu de tests avec des cas limites: liste vide, types de données différents…</li>
</ol>
<h2 id="algorithmes-classiques" class="anchored">Algorithmes classiques</h2>
<p>Reprenez les algorithmes classiques du <a href="../../8-algorithmique/1-parcours-sequentiel-dun-tableau">chapitre 1 de la partie 8</a>: et les implémenter sous forme de fonctions prototypées et testées:</p>
<ol type="1">
<li>Recherche d’un extremum, au choix: maximum ou minimum d’un tableau.</li>
<li>Calcul d’une moyenne des valeurs d’un tableau.</li>
</ol>
<p><strong>Attention: il conviendra d’écrire l’algorithme de parcours du tableau et de ne pas utiliser les méthodes prédéfinies dans python <code>max</code>, <code>min</code>…</strong></p>
<h2 id="recherche-dans-une-documentation" class="anchored">Recherche dans une documentation</h2>
<ol type="1">
<li><p>Rechercher dans la documentation du module <code>random</code> comment créer un dé numérique qui renvoie de façon équiprobable les valeurs entières de 1 à 6. Tester la fonction pour vérifier son fonctionnement.</p></li>
<li><p>Rechercher dans la documentation du module <code>math</code> comment calculer le logarithme en base 2 d’un nombre. Tester la fonction pour vérifier son fonctionnement: p.ex <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy="false">(</mo><mn>16</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn></mrow><annotation encoding="application/x-tex">\log_2(16) = 4</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">16</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>
; <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy="false">(</mo><mn>256</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn></mrow><annotation encoding="application/x-tex">\log_2(256) = 8</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">256</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">8</span></span></span></span>
. Expliquer ce que calcule cette fonction.</p></li>
<li><p>Rechercher dans la documentation de la librairie <code>pandas</code> plusieurs méthodes permettant d’itérer sur les valeurs d’une <code>Dataframe</code>.</p></li>
</ol>

