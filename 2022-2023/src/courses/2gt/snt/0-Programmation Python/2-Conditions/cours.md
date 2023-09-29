---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
tocHTML: '<ul><li><a href="#la-logique-booléenne" data-localhref="true">La logique booléenne</a></li><ul><li><a href="#les-opérateurs-de-comparaison" data-localhref="true">Les opérateurs de comparaison</a></li><li><a href="#opérateurs-booléens" data-localhref="true">Opérateurs booléens</a></li></ul><li><a href="#les-instructions-conditionnelles" data-localhref="true">Les instructions conditionnelles</a></li><ul><li><a href="#linstruction-si-if" data-localhref="true">L’instruction SI <code>if</code></a></li><li><a href="#linstruction-sinon-else" data-localhref="true">L’instruction SINON <code>else</code></a></li><li><a href="#linstruction-sinon-si-elif" data-localhref="true">L’instruction SINON SI <code>elif</code></a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>    **Contenus**
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>            **Capacités attendues**
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Instructions conditionnelles</td>
<td>Écrire et développer des programmes pour répondre à des problèmes et modéliser des phénomènes physiques, économiques et sociaux.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Dans ce chapitre, nous allons voir comment utiliser des conditions dans un programme pour que son fonctionnement change en fonction des valeurs des variables.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="110_to_91_interchange_-_panoramio.jpg" caption="Beaucoup de chemins ont possibles, reste à aller sur le bon en fonction de notre destination."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="la-logique-booléenne" class="anchored">La logique booléenne</h2>
<p>Les booléens sont un type particulier de variables qui n’ont que deux valeurs possibles:</p>
<ul>
<li><code>True</code>: Vrai</li>
<li><code>False</code>: Faux</li>
</ul>
<h3 id="les-opérateurs-de-comparaison" class="anchored">Les opérateurs de comparaison</h3>
<p>Pour comparer des variables en Python, on utilise les opérateurs suivants:</p>
<ul>
<li><code>x &lt; y</code>: x est-il inférieur à y ?</li>
<li><code>x &lt;= y</code>: x est-il inférieur ou égal à y ?</li>
<li><code>x &gt; y</code>: x est-il supérieur à y ?</li>
<li><code>x &gt;= y</code>: x est-il supérieur ou égal à y ?</li>
<li><code>x == y</code>: x est-il égal à y ?</li>
<li><code>x != y</code>: x est-il différent y ?</li>
</ul>
<p>Les opérateurs de comparaison retournent un booléen: <code>True</code> ou <code>False</code>.</p>
<div class="examples">
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="c1"># affectation des variables</span>
<span class="n">a</span> <span class="o">=</span> <span class="mi">7</span>
<span class="n">b</span> <span class="o">=</span> <span class="mi">13</span>
<span class="n">c</span> <span class="o">=</span> <span class="mi">7</span>
<span></span>
<span class="c1"># comparaisons</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span> <span class="o">&lt;</span> <span class="n">b</span><span class="p">)</span> 
<span class="nb">print</span><span class="p">(</span><span class="n">a</span> <span class="o">==</span> <span class="n">b</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span> <span class="o">!=</span> <span class="n">b</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span> <span class="o">==</span> <span class="n">c</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>True
False
True
True
</pre></div>

</div>
</div>
</div>
<div class="callout-warning callout callout-style-default callout-captioned">
<div class="callout-header d-flex align-content-center">
<div class="callout-icon-container">
<i class="callout-icon"></i>
</div>
<div class="callout-caption-container flex-fill">
Avertissement
</div>
</div>
<div class="callout-body-container callout-body">
<p>Il faut bien distinguer le simple égal <code>=</code> utilisé pour l’<em>affectation des variables</em> et le double égal <code>==</code> utilisé pour la <em>condition d’égalité</em>.</p>
</div>
</div>
<h3 id="opérateurs-booléens" class="anchored">Opérateurs booléens</h3>
<p>On peut réaliser des combinaisons de valeurs booléennes avec les opérateurs:</p>
<ul>
<li><code>and</code>: <em>ET LOGIQUE</em> vrai si deux conditions sont vraies.</li>
<li><code>or</code>: <em>OU LOGIQUE</em> vrai si au moins une des deux conditions est vraie.</li>
</ul>
<div class="examples">
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="mi">15</span>
<span></span>
<span class="c1"># comparaisons</span>
<span class="nb">print</span><span class="p">(</span><span class="n">age</span> <span class="o">&gt;</span> <span class="mi">10</span><span class="p">)</span>  
<span class="nb">print</span><span class="p">(</span><span class="n">age</span> <span class="o">&gt;=</span> <span class="mi">18</span><span class="p">)</span> 
<span></span>
<span class="c1"># combinaisons</span>
<span class="nb">print</span><span class="p">(</span><span class="n">age</span> <span class="o">&gt;</span> <span class="mi">10</span> <span class="ow">and</span> <span class="n">age</span> <span class="o">&gt;=</span> <span class="mi">18</span><span class="p">)</span>  
<span class="nb">print</span><span class="p">(</span><span class="n">age</span> <span class="o">&gt;</span> <span class="mi">10</span> <span class="ow">or</span> <span class="n">age</span> <span class="o">&gt;=</span> <span class="mi">18</span><span class="p">)</span>   
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>True
False
False
True
</pre></div>

</div>
</div>
</div>
<h2 id="les-instructions-conditionnelles" class="anchored">Les instructions conditionnelles</h2>
<p>En fonction de conditions on va exécuter des blocs de code différents.</p>
<p>En Python, les blocs sont précédés de <code>:</code> et sont indentés avec 4 espaces.</p>
<div class="highlight"><pre><span></span>entrée dans le bloc:
    1ère instruction du bloc
    2e instruction du bloc
    ...
sortie du bloc
</pre></div>

<h3 id="linstruction-si-if" class="anchored">L’instruction SI <code>if</code></h3>
<p>Le bloc d’instruction contenu n’est exécuté que si la condition est vérifiée.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span><span class="p">:</span>
<span class="n">    instruction</span> <span class="mi">1</span>
<span class="n">    instruction</span> <span class="mi">2</span>
<span class="o">    ...</span>
</pre></div>

<div class="example">
<div class="highlight"><pre><span></span><span class="n">mdp</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Entrez votre mot de passe."</span><span class="p">)</span>
<span class="k">if</span> <span class="n">mdp</span> <span class="o">==</span> <span class="s2">"azerty :</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Connexion réussie"</span><span class="p">)</span>
</pre></div>

</div>
<h3 id="linstruction-sinon-else" class="anchored">L’instruction SINON <code>else</code></h3>
<p>Indique le bloc d’instruction a exécuté si la condition n’est pas vérifiée.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition est vraie</span>
<span class="k">else</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition est fausse</span>
</pre></div>

<div class="example">
<div class="highlight"><pre><span></span><span class="n">mdp</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Entrez votre mot de passe."</span><span class="p">)</span>
<span class="k">if</span> <span class="n">mdp</span> <span class="o">==</span> <span class="s2">"azerty :</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Connexion réussie"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Mot de passe faux"</span><span class="p">)</span>
</pre></div>

</div>
<h3 id="linstruction-sinon-si-elif" class="anchored">L’instruction SINON SI <code>elif</code></h3>
<p>Cette instruction permet de réaliser des tests imbriqués, c’est un raccourci pour les instructions <code>else</code> et <code>if</code>.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span> <span class="mi">1</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition 1 est vraie</span>
<span class="k">elif</span> <span class="n">condition</span> <span class="mi">2</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition 1 est fausse et la condition 2 vraie</span>
<span class="k">else</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si les conditions 1 et 2 sont fausses</span>
</pre></div>

<div class="example">
<div class="highlight"><pre><span></span><span class="n">nom</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Entrez votre nom d'utilisateur."</span><span class="p">)</span>
<span class="n">mdp</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Entrez votre mot de passe."</span><span class="p">)</span>
<span class="k">if</span> <span class="n">nom</span> <span class="o">!=</span> <span class="s2">"nice06"</span> <span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Nom d'utilisateur inconnu"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">mdp</span> <span class="o">!=</span> <span class="s2">"azerty"</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Mot de passe incorrect"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="c1">    # le mot de passe et le nom d'utilisateurs sont corrects</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Connexion réussie"</span><span class="p">)</span>
</pre></div>

</div>

