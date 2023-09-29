---
"tags": ["opérateurs booléens", "structures conditionnelles"]
tocHTML: '<ul><li><a href="#les-blocs-en-python" data-localhref="true">Les blocs en python</a></li><li><a href="#opérateurs-de-comparaison" data-localhref="true">Opérateurs de comparaison</a></li><li><a href="#programme-à-structure-conditionnelle" data-localhref="true">Programme à structure conditionnelle</a></li><ul><li><a href="#linstruction-if" data-localhref="true">L’instruction <code>if</code></a></li><li><a href="#linstruction-else" data-localhref="true">L’instruction <code>else</code></a></li><li><a href="#linstruction-elif" data-localhref="true">L’instruction <code>elif</code></a></li></ul><li><a href="#opérateurs-booléens" data-localhref="true">Opérateurs booléens</a></li></ul>'
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
<p>Les structures conditionnelles permettent d’écrire des programmes qui peuvent s’exécuter différemment selon que certaines conditions sont vérifiées ou non.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="SunsetTracksCrop.JPG" caption="Les programmes comme les trains peuvent prendre des chemins différents suivant les conditions(destination, heure, travaux...)"></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="les-blocs-en-python" class="anchored">Les blocs en python</h2>
<p>Nous avons vu précédemment que les programmes étaient une suite d’instructions. Il est cependant possible d’utiliser des <strong>blocs</strong> d’instructions qui ne seront pas exécutés dès leur apparition dans le programme à l’opposé des instructions écrites dans le flot principal(à gauche de la ligne).</p>
<p>En python, les blocs sont délimités grâce à des espaces et introduits grâce à deux points <code>:</code>.</p>
<div class="highlight"><pre><span></span>entrée dans un bloc:
    ligne 1 du bloc
    ligne 2 du bloc
    ...
<span></span>
retour dans l’exécution normale du programme ligne à ligne.
</pre></div>

<p>Aujourd’hui, nous allons utiliser des structures de contrôle qui permettent d’exécuter: des <em>blocs</em>, en fonction de conditions. On parle de <strong>structure conditionnelle</strong>.</p>
<h2 id="opérateurs-de-comparaison" class="anchored">Opérateurs de comparaison</h2>
<p>Pour tester une condition, on utilise un opérateur de comparaison qui donne un résultat booléen: <code>True</code> ou <code>False</code>.</p>
<p>Soit x et y des variables de type <code>int</code> ou <code>float</code>, les opérateurs de comparaison sont:</p>
<ul>
<li><code>x &lt; y</code>: x est-il inférieur à y ?</li>
<li><code>x &lt;= y</code>: x est-il inférieur ou égal à y ?</li>
<li><code>x &gt; y</code>: x est-il supérieur à y ?</li>
<li><code>x &gt;= y</code>: x est-il supérieur ou égal à y ?</li>
<li><code>x == y</code>: x est-il égal à y ?</li>
<li><code>x != y</code>: x est-il différent de y ?</li>
</ul>
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
<p>Comme vous l’avez remarqué pour tester une égalité on utilise le double signe égal <code>==</code>. Tout simplement, car le signe égal seul <code>=</code> est déjà utilisé pour l’affectation de variables.</p>
</div>
</div>
<div class="examples">
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="mi">3</span> <span class="o">&lt;</span> <span class="mi">5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>True
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="mi">3</span> <span class="o">&lt;=</span> <span class="mi">5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>True
</pre></div>

</div>
</div>
<p>Dans l’environnement Jupyter, le <code>print</code> sur la dernière ligne est optionnel, et le résultat de la dernière expression entrée est évalué et affiché.</p>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">&gt;</span> <span class="mi">5</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="3">
<div class="highlight"><pre><span></span>False
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">&gt;=</span> <span class="mi">5</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="4">
<div class="highlight"><pre><span></span>False
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">==</span> <span class="mi">5</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="5">
<div class="highlight"><pre><span></span>False
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">!=</span> <span class="mi">5</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="6">
<div class="highlight"><pre><span></span>True
</pre></div>

</div>
</div>
<p>On peut constater que ces instructions retournent systématiquement un objet de type booléen.</p>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="mi">3</span> <span class="o">&gt;</span> <span class="mi">5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="7">
<div class="highlight"><pre><span></span>bool
</pre></div>

</div>
</div>
<p>Ou une erreur si on cherche à comparer <em>l’incomparable</em>:</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">&lt;</span> <span class="s2">"5"</span>
</pre></div>

<div class="cell-output cell-output-error">
<div class="highlight"><pre><span></span>TypeError: '&lt;' not supported between instances of 'int' and 'str'
</pre></div>

</div>
</div>
</div>
<div class="prop">
<p>Les opérateurs de comparaison ont une priorité inférieure aux opérateurs arithmétiques.</p>
</div>
<div class="example">
<p><code>3 + 4 &lt; 2 * 12</code> renvoie <code>True</code> car les opérations <code>+</code> et <code>*</code> sont exécutées avant la comparaison <code>&lt;</code>.</p>
<p>Les parenthèses sont donc inutiles (<code>(3 + 4) &lt; (2 * 12)</code>).</p>
</div>
<h2 id="programme-à-structure-conditionnelle" class="anchored">Programme à structure conditionnelle</h2>
<p>Dans ce type de programme, le code sera toujours interprété ligne par ligne, cependant certains blocs de code ne seront exécutés que si une condition donnée est vraie.</p>
<h3 id="linstruction-if" class="anchored">L’instruction <code>if</code></h3>
<p>Le bloc d’instruction contenu n’est exécuté que si la condition est vérifiée.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span><span class="p">:</span>
<span class="n">    instruction</span> <span class="mi">1</span>
<span class="n">    instruction</span> <span class="mi">2</span>
<span class="o">    ...</span>
</pre></div>

<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="mi">3</span>
<span class="k">if</span> <span class="n">a</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">    a</span> <span class="o">=</span> <span class="o">-</span><span class="n">a</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>-3
</pre></div>

</div>
</div>
<p>Dans le programme précédent l’instruction <code>if a &gt; 0:</code> est toujours exécutée par l’interpréteur, car elle est dans le flux normal du programme(en début de ligne).</p>
<p>Par contre, l’instruction <code>a = -a</code> n’est exécutée que si la condition <code>a &gt; 0</code> a renvoyé <code>True</code>, il s’agit d’un <strong>bloc</strong> relatif à l’instruction <code>if a &gt; 0:</code> qui le précède. Elle est <strong>indentée</strong> avec quatre espaces. Si j’affecte la valeur négative -5 à <code>a</code>, ce bloc ne sera pas exécuté, et le changement de signe n’aura pas lieu.</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="o">-</span><span class="mi">5</span>
<span class="k">if</span> <span class="n">a</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">    a</span> <span class="o">=</span> <span class="o">-</span><span class="n">a</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>-5
</pre></div>

</div>
</div>
<h3 id="linstruction-else" class="anchored">L’instruction <code>else</code></h3>
<p>Indique le bloc d’instruction à exécuter si la condition n’est pas vérifiée.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition est vraie</span>
<span class="k">else</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition est fausse</span>
</pre></div>

<div class="cell" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="o">-</span><span class="mi">3</span>
<span class="k">if</span> <span class="n">a</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="n">    a</span> <span class="o">=</span> <span class="o">-</span><span class="n">a</span>
<span class="k">else</span><span class="p">:</span>
<span class="n">    a</span> <span class="o">=</span> <span class="n">a</span><span class="o">*</span><span class="mi">100</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>-300
</pre></div>

</div>
</div>
<p>Comme initialement la variable a n’était pas positive, c’est le bloc d’instructions <code>else</code> qui a été exécuté.</p>
<h3 id="linstruction-elif" class="anchored">L’instruction <code>elif</code></h3>
<p>Cette instruction permet de réaliser des tests imbriqués, c’est un raccourci pour les instructions <code>else</code> et <code>if</code>.</p>
<p><strong>Syntaxe</strong></p>
<div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">condition</span> <span class="mi">1</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition 1 est vraie</span>
<span class="k">elif</span> <span class="n">condition</span> <span class="mi">2</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si la condition 1 est fausse et la condition 2 vraie</span>
<span class="k">else</span><span class="p">:</span>
<span class="n">    bloc</span> <span class="n">d</span><span class="s1">'instructions exécuté si les conditions 1 et 2 sont fausses</span>
</pre></div>

<div class="cell" data-execution_count="12">
<div class="highlight"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="mi">3</span>
<span class="k">if</span> <span class="n">a</span> <span class="o">==</span> <span class="mi">7</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"C'est un chiffre porte bonheur"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">a</span> <span class="o">==</span> <span class="mi">3</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Quelques modifications sont nécessaires"</span><span class="p">)</span>
<span class="n">    a</span> <span class="o">+=</span> <span class="mi">4</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Quelques modifications sont nécessaires
7
</pre></div>

</div>
</div>
<h2 id="opérateurs-booléens" class="anchored">Opérateurs booléens</h2>
<p>On peut combiner des conditions avec les opérateurs booléens.</p>
<p>Les opérateurs booléens français sont <code>ET</code>, <code>OU</code>, <code>NON</code> et leur correspondant en Python sont <code>and</code>, <code>or</code> et <code>not</code>.</p>
<ul>
<li><code>and</code> renvoie <code>True</code> si les deux arguments ont pour valeur <code>True</code>.</li>
<li><code>or</code> renvoie <code>True</code> si au moins un des deux arguments a pour valeur <code>True</code>.</li>
<li><code>not</code> renvoie l’inverse de son argument <code>False</code> si l’argument est <code>True</code>, et vice-versa.</li>
</ul>
<div class="examples">
<ul>
<li><code>1 &lt; 2 and 3 &lt; 4</code> renvoie <code>True</code></li>
<li><code>1 &lt; 2 and 3 &gt; 4</code> renvoie <code>False</code></li>
<li><code>1 &lt; 2 or 3 &lt; 4</code> renvoie <code>True</code></li>
<li><code>1 &lt; 2 or 3 &gt; 4</code> renvoie <code>True</code></li>
<li><code>not 1 &lt; 2</code> renvoie <code>False</code></li>
</ul>
</div>
<div class="prop">
<p>Les opérateurs de comparaison sont prioritaires sur les opérateurs booléens. Quand on écrit <code>1 &lt; 2 and 3 &lt; 4</code> les opérations sont évaluées avant l’opération <code>and</code>; les parenthèses sont superflues: <code>(1 &lt; 2) and (3 &lt; 4)</code>.</p>
</div>
<p>Vous êtes maintenant armés pour aborder des programmes beaucoup plus riches dans lesquels vous allez pouvoir <em>prendre des décisions</em> en fonction des données qui lui arrivent.</p>

