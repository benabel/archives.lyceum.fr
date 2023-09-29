---
tags: ['algorithme', 'conditions', 'boucles', 'variables', 'fonctions']
tocHTML: '<ul><li><a href="#les-ingrédients-des-algorithmes" data-localhref="true">Les ingrédients des Algorithmes</a></li><li><a href="#traduire-des-algorithmes-en-python" data-localhref="true">Traduire des algorithmes en Python</a></li><ul><li><a href="#séquence-dinstructions" data-localhref="true">Séquence d’instructions</a></li><li><a href="#les-variables" data-localhref="true">Les variables</a></li><li><a href="#instructions-conditionnelles" data-localhref="true">Instructions conditionnelles</a></li><li><a href="#boucle-dinstructions" data-localhref="true">Boucle d’instructions</a></li><li><a href="#les-fonctions" data-localhref="true">Les fonctions</a></li></ul></ul>'
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
<p>Alan Turing a montré que pour que les machines puissent résoudre des problèmes, il fallait traduire ces problèmes en <a href="https://fr.wikipedia.org/wiki/Algorithme">algorithmes</a>. Dans ce chapitre, nous allons voir <em>quels sont les ingrédients de base d’un algorithme</em>, puis comment les écrire en Python.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="1983_CPA_5426.jpg" caption="Le mot algorithme vient d'Al-Khwârizmî (en arabe : الخوارزمي), nom d'un mathématicien persan du IXe siècle."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="les-ingrédients-des-algorithmes" class="anchored">Les ingrédients des Algorithmes</h2>
<p>Un algorithme utilise <em>cinq ingrédients de base</em>:</p>
<ol type="1">
<li>Un algorithme est un chemin à parcourir pas à pas, une <strong>séquence d’instructions</strong>.</li>
<li>Cependant, il ne faut pas forcément effectuer toutes les instructions en fonctions de conditions: les <strong>instructions conditionnelles</strong>.</li>
<li>Nous avons aussi besoin d’une autre construction, la <strong>boucle d’instructions</strong> qui permet de faire durer ou répéter une opération autant de fois que nécessaire.</li>
<li>Nous introduisons la <strong>notion de variable</strong> ou de paramètre qui permettra de modifier le programme en fonction de ces paramètres.</li>
<li>La dernière construction, qui consiste à <strong>regrouper un bloc d’instructions dans une fonction</strong>, va nous permettre de réutiliser différentes fonctionnalités, comme les briques d’un jeu de Lego, pour réaliser une construction logicielle.</li>
</ol>
<p><a href="https://interstices.info/jcms/c_43821/les-ingredients-des-algorithmes" class="cite-source">Les ingrédients des algorithmes sur le site Interstices</a></p>
<h2 id="traduire-des-algorithmes-en-python" class="anchored">Traduire des algorithmes en Python</h2>
<p>Pour que les ordinateurs réalisent nos algorithmes, nous devons écrire les séquences d’instructions dans un langage de programmation, dans notre cas Python.</p>
<h3 id="séquence-dinstructions" class="anchored">Séquence d’instructions</h3>
<p>En Python, les lignes du programme sont exécutées de <strong>haut en bas</strong>, à l’exception:</p>
<ul>
<li>Des lignes de <strong>commentaires</strong> qui commencent <code>#</code>.</li>
</ul>
<div class="example">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">"Hello"</span><span class="p">)</span>
<span class="c1"># print("World") </span>
</pre></div>

<p>N’affichera que <code>"Hello"</code> en sortie, car la deuxième ligne est commentée donc non exécutée.</p>
</div>
<ul>
<li>Des lignes de bloc qui sont <strong>indentées</strong> par rapport à la colonne de gauche.</li>
</ul>
<div class="example">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">"Hello"</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"World"</span><span class="p">)</span>
</pre></div>

<p>Renvoie une erreur <code>IndentationError</code>, car la deuxième ligne est indentée et ne devrait pas l’être.</p>
</div>
<h3 id="les-variables" class="anchored">Les variables</h3>
<p>C’est un moyen de donner un nom à des valeurs afin de pouvoir les réutiliser aisément par la suite.</p>
<div class="example">
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="n">PI</span> <span class="o">=</span> <span class="mf">3.141592653589793</span>
<span class="n">R</span> <span class="o">=</span> <span class="mi">1</span> 
<span class="nb">print</span><span class="p">(</span><span class="s2">"Le périmètre est:"</span><span class="p">,</span> <span class="mi">2</span><span class="o">*</span><span class="n">PI</span><span class="o">*</span><span class="n">R</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"La surface est:"</span><span class="p">,</span> <span class="n">PI</span><span class="o">*</span><span class="n">R</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Le périmètre est: 6.283185307179586
La surface est: 3.141592653589793
</pre></div>

</div>
</div>
<p>Nous avons ici affecté deux variables <code>PI</code> et <code>R</code> dont nous pouvons nous servir tout au long du programme par la suite.</p>
</div>
<h3 id="instructions-conditionnelles" class="anchored">Instructions conditionnelles</h3>
<p>Il s’agit de blocs d’instructions exécutés en fonction de certaines conditions, nous voyons ici:</p>
<ul>
<li><code>if</code>(<em>si</em> en français), qui peut être complété par un</li>
<li><code>else</code>(<em>sinon</em> en français).</li>
</ul>
<div class="example">
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous?"</span><span class="p">)</span>
<span class="k">if</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">14</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"OK"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"not OK"</span><span class="p">)</span>
</pre></div>

</div>
<p>Il existe également le mot-clé, <code>elif</code>(<em>sinon si</em> en français) en Python. Qui permet de tester plusieurs conditions.</p>
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous?"</span><span class="p">)</span>
<span class="k">if</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">18</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Vous ne devriez plus être en lycée!"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">14</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"OK"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"not OK"</span><span class="p">)</span>
</pre></div>

<p><strong>Attention à l’ordre des conditions, car le bloc de la première condition vérifiée est le seul exécuté.</strong></p>
<h3 id="boucle-dinstructions" class="anchored">Boucle d’instructions</h3>
<p>Pour effectuer des répétitions en boucle, on utilise les instructions:</p>
<ul>
<li><code>for</code>: <em>pour</em> en français.</li>
<li><code>while</code>: <em>tant que</em> en français.</li>
</ul>
<p>Les deux types de boucles sont interchangeables, on préfère cependant utiliser:</p>
<ul>
<li><code>for</code> si le nombre d’itérations est connu à l’avance.</li>
<li><code>while</code> si l’arrêt s’effectue à une condition.</li>
</ul>
<div class="example">
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">0</span>
<span class="mf">1</span>
<span class="mf">2</span>
<span class="mf">3</span>
<span class="mf">4</span>
</pre></div>

</div>
</div>
</div>
<div class="example">
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span> <span class="c1"># initialisation</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">5</span><span class="p">:</span> <span class="c1"># condition d'arrêt</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="c1"># incrémentation de l'indice</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">0</span>
<span class="mf">1</span>
<span class="mf">2</span>
<span class="mf">3</span>
<span class="mf">4</span>
</pre></div>

</div>
</div>
</div>
<h3 id="les-fonctions" class="anchored">Les fonctions</h3>
<p>Il s’agit de <em>blocs d’instructions</em> exécutés à la demande, on les définit par le mot-clef <code>def</code>.</p>
<div class="example">
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">dit_bonjour</span><span class="p">(</span><span class="n">prenom</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Bonjour "</span> <span class="o">+</span> <span class="n">prenom</span><span class="p">)</span>
</pre></div>

</div>
<p>Nous venons de définir la fonction, mais pour l’instant, il ne se passe rien.</p>
<p>Pour exécuter le code de la fonction, il faut maintenant appeler la fonction avec une valeur pour l’exécuter.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="c1"># on appelle la fonction avec l'argument Ada</span>
<span class="n">dit_bonjour</span><span class="p">(</span><span class="s2">"Ada"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Bonjour Ada
</pre></div>

</div>
</div>
</div>
<div class="prop">
<p>Une fonction peut prendre zéro ou plusieurs paramètres séparés par des virgules en entrée.</p>
</div>
<div class="example">
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="c1"># import du module datetime</span>
<span class="kn">import</span> <span class="nn">datetime</span>
<span></span>
<span class="c1">
# fonction sans argument</span>
<span class="k">def</span> <span class="nf">heure</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Il est:"</span><span class="p">,</span> <span class="n">datetime</span><span class="o">.</span><span class="n">datetime</span><span class="o">.</span><span class="n">now</span><span class="p">()</span><span class="o">.</span><span class="n">time</span><span class="p">())</span>
<span></span>
<span class="c1"># appel de la fonction</span>
<span class="n">heure</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Il est: 08:52:03.623625
</pre></div>

</div>
</div>
</div>
<div class="prop">
<p>Une fonction peut renvoyer une valeur grâce au mot-clé <code>return</code>.</p>
</div>
<div class="example">
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">aire_rectangle</span><span class="p">(</span><span class="n">L</span><span class="p">,</span> <span class="n">l</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Fonction qui renvoie l'aire d'un rectangle"""</span>
<span class="k">    return</span> <span class="n">L</span> <span class="o">*</span> <span class="n">l</span>
<span></span>
<span class="c1"># appel est affectation de la valeur renvoyée à la variable S</span>
<span class="n">S</span> <span class="o">=</span> <span class="n">aire_rectangle</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"L'aire est:"</span><span class="p">,</span> <span class="n">S</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>L'aire est: 15
</pre></div>

</div>
</div>
</div>

