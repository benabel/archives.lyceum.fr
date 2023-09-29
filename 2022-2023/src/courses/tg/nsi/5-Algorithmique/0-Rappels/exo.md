---
tocHTML: '<ul><li><a href="#prévoir-les-sorties-de-boucles" data-localhref="true">Prévoir les sorties de boucles</a></li><li><a href="#dessiner-des-motifs-avec-des-boucles" data-localhref="true">Dessiner des motifs avec des boucles</a></li><li><a href="#vérifier-quune-liste-est-triée" data-localhref="true">Vérifier qu’une liste est triée</a></li><li><a href="#étude-du-tri-par-insertion" data-localhref="true">Étude du tri par insertion</a></li><ul><li><a href="#compréhension-de-lalgorithme" data-localhref="true">Compréhension de l’algorithme</a></li><li><a href="#étude-de-la-complexité" data-localhref="true">Étude de la complexité</a></li><li><a href="#correction-de-lalgorithme" data-localhref="true">Correction de l’algorithme</a></li></ul></ul>'
---





<!-- Corrections dans le notebook de correction du TP2-Tris -->
<h2 id="prévoir-les-sorties-de-boucles" class="anchored">Prévoir les sorties de boucles</h2>
<p>Écrire les sorties des algorithmes suivants.</p>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">7</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">2</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">):</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i</span><span class="p">):</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">5</span><span class="p">:</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span><span class="o">+</span><span class="mi">1</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">3</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">-</span> <span class="mi">1</span>
<span class="n">    j</span> <span class="o">=</span> <span class="n">i</span>
<span class="k">    while</span> <span class="n">j</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">        j</span> <span class="o">=</span> <span class="n">j</span> <span class="o">-</span> <span class="mi">1</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">):</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
</pre></div>

<!-- 
    0 0
    1 1
    1 0
    2 2
    2 1
    2 0 -->
<hr>
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">3</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">    j</span> <span class="o">=</span> <span class="n">i</span> <span class="o">-</span> <span class="mi">1</span>
<span class="k">    while</span> <span class="n">j</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">:</span>
<span class="n">        j</span> <span class="o">=</span> <span class="n">j</span> <span class="o">+</span> <span class="mi">1</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">-</span> <span class="mi">1</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">3</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i</span><span class="p">):</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">-</span> <span class="mi">1</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="n">   j</span> <span class="o">=</span> <span class="n">i</span> 
<span class="k">   while</span> <span class="n">j</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">         print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">)</span>
<span class="n">         j</span> <span class="o">=</span> <span class="n">j</span> <span class="o">-</span> <span class="mi">1</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="n">liste</span> <span class="o">=</span> <span class="p">[</span><span class="mi">13</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">11</span><span class="p">]</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">liste</span><span class="p">)):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">liste</span><span class="p">[</span><span class="n">i</span><span class="p">],</span> <span class="n">liste</span><span class="p">[</span><span class="n">i</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="n">liste</span> <span class="o">=</span> <span class="p">[</span><span class="mi">13</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">11</span><span class="p">]</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">liste</span><span class="p">)</span><span class="o">-</span> <span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">liste</span><span class="p">[</span><span class="n">i</span><span class="p">],</span> <span class="n">liste</span><span class="p">[</span><span class="n">i</span><span class="o">+</span><span class="mi">1</span><span class="p">])</span>
</pre></div>

<hr>
<div class="highlight"><pre><span></span><span class="nb">dict</span> <span class="o">=</span> <span class="p">{</span><span class="s2">"a"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span> <span class="s2">"b"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="s2">"c"</span><span class="p">:</span> <span class="mi">2</span><span class="p">}</span>
<span class="k">for</span> <span class="n">item</span> <span class="ow">in</span> <span class="nb">dict</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">item</span><span class="p">)</span>
</pre></div>

<h2 id="dessiner-des-motifs-avec-des-boucles" class="anchored">Dessiner des motifs avec des boucles</h2>
<ol type="1">
<li><p>Écrivez un programme Python pour construire le motif suivant, en utilisant une boucle.</p>
<div class="highlight"><pre><span></span>*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
</pre></div>
</li>
<li><p>Écrivez un programme Python qui accepte un mot de l’utilisateur et l’inverse.</p></li>
<li><p>Écrivez un programme Python qui prend deux chiffres <code>m</code> (nb de lignes) et <code>n</code> (nb de colonnes) en entrée et génère un tableau à deux dimensions.</p>
<p>La valeur de l’élément dans la i-ème ligne et la j-ème colonne du tableau doit être <code>i*j</code>.</p>
<p>Exemple : Lignes = 3, Colonnes = 4 Résultat attendu : [[0, 0, 0, 0], [0, 1, 2, 3], [0, 2, 4, 6]]</p></li>
<li><p>Écrivez un programme Python pour afficher le motif alphabétique «&nbsp;E&nbsp;».</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span>*****
*
*
****
*
*
*****
</pre></div>
</li>
<li><p>Écrivez un programme Python pour afficher le motif alphabétique «&nbsp;Z&nbsp;».</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span>*******
     *
    *
   *
  *
 *
*******
</pre></div>
</li>
<li><p>Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span><span class="mf">1</span>
<span class="mf">22</span>
<span class="mf">333</span>
<span class="mf">4444</span>
<span class="mf">55555</span>
<span class="mf">666666</span>
<span class="mf">7777777</span>
<span class="mf">88888888</span>
<span class="mf">999999999</span>
</pre></div>
</li>
<li><p>Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span><span class="mf">999999999</span>
<span class="mf">88888888</span>
<span class="mf">7777777</span>
<span class="mf">666666</span>
<span class="mf">55555</span>
<span class="mf">4444</span>
<span class="mf">333</span>
<span class="mf">22</span>
<span class="mf">1</span>
</pre></div>

<!-- for i in range(9, 0, -1):
 txt = i * str(i)
 print(txt) --></li>
<li><p>Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span><span class="mf">111111111</span>
<span class="w"> </span><span class="mf">22222222</span>
<span class="w">  </span><span class="mf">3333333</span>
<span class="w">   </span><span class="mf">444444</span>
<span class="w">    </span><span class="mf">55555</span>
<span class="w">     </span><span class="mf">6666</span>
<span class="w">      </span><span class="mf">777</span>
<span class="w">       </span><span class="mf">88</span>
<span class="w">        </span><span class="mf">9</span>
</pre></div>

<!-- for i in range(1, 10):
 txt = i * " " + (10 - i) * str(i)
 print(txt) --></li>
<li><p>Écrivez un programme Python pour construire le modèle suivant, en utilisant une boucle.</p>
<p>Sortie attendue:</p>
<div class="highlight"><pre><span></span><span class="mf">1</span><span class="w">                </span><span class="mf">1</span>
<span class="mf">22</span><span class="w">              </span><span class="mf">22</span>
<span class="mf">333</span><span class="w">            </span><span class="mf">333</span>
<span class="mf">4444</span><span class="w">          </span><span class="mf">4444</span>
<span class="mf">55555</span><span class="w">        </span><span class="mf">55555</span>
<span class="mf">666666</span><span class="w">      </span><span class="mf">666666</span>
<span class="mf">7777777</span><span class="w">    </span><span class="mf">7777777</span>
<span class="mf">88888888</span><span class="w">  </span><span class="mf">88888888</span>
<span class="mf">999999999999999999</span>
</pre></div>

<!-- for i in range(1, 10):
 txt = i * str(i)
 txt += (9 - i) * 2 * " "
 txt += i * str(i)
 print(txt) --></li>
</ol>
<h2 id="vérifier-quune-liste-est-triée" class="anchored">Vérifier qu’une liste est triée</h2>
<p>Écrire le code d’une fonction appelée <code>is_sorted</code> qui prend en paramètres une liste et qui renvoie <code>True</code> si la liste est triée et <code>False</code> sinon.</p>
<ol type="1">
<li>Écrire en python le code de la fonction en la <em>prototypant</em>.</li>
<li>Proposer quelques tests d’<code>assert</code>ion en pensant aux cas limites : liste vide, liste triée, éléments égaux…</li>
<li>Évaluer la complexité de l’algorithme dans le pire des cas.</li>
</ol>
<h2 id="étude-du-tri-par-insertion" class="anchored">Étude du tri par insertion</h2>
<p>On donne ci-dessous le code Python du tri par insertion :</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_insertion</span><span class="p">(</span><span class="n">t</span><span class="p">):</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">n</span><span class="p">):</span>
<span class="c1">        # ICI</span>
<span class="n">        x</span> <span class="o">=</span> <span class="n">t</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="n">        j</span> <span class="o">=</span> <span class="n">i</span>
<span class="k">        while</span> <span class="n">j</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="ow">and</span> <span class="n">t</span><span class="p">[</span><span class="n">j</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">x</span><span class="p">:</span>
<span class="n">            t</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="n">t</span><span class="p">[</span><span class="n">j</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>
<span class="n">            j</span> <span class="o">=</span> <span class="n">j</span> <span class="o">-</span> <span class="mi">1</span>
<span class="n">        t</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="n">x</span>
<span class="c1">        # LA</span>
<span class="k">    return</span> <span class="n">t</span>
</pre></div>

<h3 id="compréhension-de-lalgorithme" class="anchored">Compréhension de l’algorithme</h3>
<ol type="1">
<li>Écrire le prototype de cette fonction.</li>
</ol>
<p>On va étudier l’appel de la fonction avec comme argument <code>[11, 25, 12, 22, 64]</code>.</p>
<ol start="2" type="1">
<li>Écrire l’instruction permettant d’exécuter l’appel de la fonction avec la liste précédente.</li>
<li>Que représente <code>n</code>? Quelle est sa valeur?</li>
<li>Quelles seront les valeurs prises par <code>i</code> données par l’instruction <code>for i in range(1, n)</code>?</li>
<li>Dans un tableau, donner les états successifs du tableau aux points <code>ICI</code> et <code>LA</code> pour tous les tours de la boucle externe(<code>for</code>).</li>
<li>Expliquer le rôle de la boucle interne(<code>while</code>).</li>
</ol>
<h3 id="étude-de-la-complexité" class="anchored">Étude de la complexité</h3>
<ol type="1">
<li>Rappeler la définition de la complexité.</li>
<li>Montrer que pour tout entier <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
, la somme des entiers de 1 à <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
vaut : <span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><mi>S</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mi>n</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mi>i</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac><mi mathvariant="normal">.</mi></mstyle></mrow><annotation encoding="application/x-tex">
{\displaystyle S=1+2+3+\cdots +(n-1)+n=\sum _{i=1}^{n}i={\frac {n(n+1)}{2}}.}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span><span class="mord">.</span></span></span></span></span></span>
(<a href="https://fr.wikipedia.org/wiki/Somme_(arithm%C3%A9tique)#/media/Fichier:Animated_proof_for_the_formula_giving_the_sum_of_the_first_integers_1+2+...+n.gif">voir cette animation</a> si nécessaire.)</li>
<li>Calculer la complexité du tri par insertion proposé.</li>
<li>En déduire qu’il s’agit d’un algorithme de complexité quadratique: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>
.</li>
</ol>
<h3 id="correction-de-lalgorithme" class="anchored">Correction de l’algorithme</h3>
<p>Etablir la correction de l’algorithme. On rappelle que pour prouver la correction nous devons montrer les trois points suivants:</p>
<ol type="1">
<li><strong>Initialisation:</strong> L’invariant est vrai avant la première itération.</li>
<li><strong>Conservation:</strong> si l’invariant est vrai avant une itération, il restera vrai après l’itération.</li>
<li><strong>Terminaison:</strong> la boucle se termine et nous donne le résultat attendu.</li>
</ol>

