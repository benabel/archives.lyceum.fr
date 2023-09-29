---
"tags": ["comparaison", "python", "javascript"]
tocHTML: '<ul><li><a href="#commentaires" data-localhref="true">Commentaires</a></li><li><a href="#affectation-de-variable" data-localhref="true">Affectation de variable</a></li><li><a href="#entrées-et-sorties" data-localhref="true">Entrées et sorties</a></li><li><a href="#instructions-conditionnelles" data-localhref="true">Instructions conditionnelles</a></li><li><a href="#boucles" data-localhref="true">Boucles</a></li><ul><li><a href="#boucle-for" data-localhref="true">Boucle <code>for</code></a></li><li><a href="#boucle-while" data-localhref="true">Boucle <code>while</code></a></li></ul><li><a href="#fonctions" data-localhref="true">Fonctions</a></li><ul><li><a href="#définition-de-la-fonction" data-localhref="true">Définition de la fonction</a></li><li><a href="#appel-de-la-fonction" data-localhref="true">Appel de la fonction</a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>   Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span> Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>    Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Diversité et unité des langages de programmation</td>
<td>Repérer, dans un nouveau langage de programmation, les traits communs et les traits particuliers à ce langage.</td>
<td>Les manières dont un même programme simple s’écrit dans différents langages sont comparées.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<p>Comme nous l’avons vu précédemment un programme permet d’écrire un algorithme afin qu’il soit exécuté par un ordinateur.</p>
<p>Il existe de très nombreux langages de programmation aujourd’hui, chacun ayant ses forces et ses faiblesses et sera donc adapté à un domaine plutôt qu’à un autre.</p>
<p>Cette année nous utiliserons deux langages: <a href="https://www.python.org/">Python</a> et <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">javascript</a>:</p>
<ul>
<li><code>Python</code> est très apprécié dans la communauté scientifique</li>
<li>alors que le <code>javascript</code> est le langage implémenté nativement dans tous les navigateurs web.</li>
</ul>
<p>Nous allons voir sur l’exemple de ces deux langages qu’il est possible d’écrire les mêmes algorithmes avec des syntaxes assez proches.</p>
<h2 id="commentaires" class="anchored">Commentaires</h2>
<p>Les commentaires sont indispensables pour expliquer votre code à ceux qui le lisent(souvent vous-même quelques jours, semaines ou mois après). En <code>javascript</code> on utilise le double slash pour le commentaire de ligne <code>//</code>.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="c1"># ceci est un commentaire</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="c1">// ceci est un commentaire</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h2 id="affectation-de-variable" class="anchored">Affectation de variable</h2>
<p>Dans les deux langages on utilise le simple signe égal <code>=</code>, on utilise cependant le mot clé <code>var</code> en <code>js</code>.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="mi">3</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="kd">var</span><span class="w"> </span><span class="nx">a</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">3</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<details class="plus"><summary>let et const</summary>
<p>Les nouvelles versions de javascript ont ajouté les mots-clés <code>const</code> et <code>let</code> pour déclarer des variables respectivement immutables ou mutables.</p>
</details>

<h2 id="entrées-et-sorties" class="anchored">Entrées et sorties</h2>
<p>Les entrées permettent de récupérer des données de l’utilisateur pour adapter son fonctionnement aux exigences de ce dernier.</p>
<p>Les sorties permettent d’afficher les résultats à l’utilisateur.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="c1"># entrée</span>
<span class="n">age</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Quel age avez-vous?)</span>
<span class="c1"># sortie</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Votre âge est "</span> <span class="o">+</span> <span class="n">age</span> <span class="o">+</span> <span class="s2">" ans"</span><span class="p">)</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="c1">// entrée</span>
<span class="kd">var</span><span class="w"> </span><span class="nx">age</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">prompt</span><span class="p">(</span><span class="s2">"Quel age avez-vous?"</span><span class="p">)</span>
<span class="c1">// sortie</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">"Votre âge est "</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="nx">age</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="s2">" ans"</span><span class="p">)</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h2 id="instructions-conditionnelles" class="anchored">Instructions conditionnelles</h2>
<p>Dans les deux langages on utilise les mots-clef <code>if</code> et <code>else</code> cependant le <code>elif</code> n’existe pas en <code>js</code>. On utilise <code>else if</code>.</p>
<p>D’autre part, le javascript n’utilise pas l’indentation pour définir les blocs de code, il les place entre accolades <code>{}</code></p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="k">if</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">18</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Vous êtes majeur"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">age</span> <span class="o">&gt;</span><span class="mi">16</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Bientôt majeur"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Soyez patient"</span><span class="p">)</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="nx">age</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="mf">18</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`Vous êtes majeur`</span><span class="p">)</span>
<span class="p">}</span><span class="w"> </span><span class="k">else</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="p">(</span><span class="nx">age</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="mf">16</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`Bientôt majeur`</span><span class="p">)</span>
<span class="p">}</span><span class="w"> </span><span class="k">else</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`Soyez patient`</span><span class="p">)</span>
<span class="p">}</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h2 id="boucles" class="anchored">Boucles</h2>
<p>Les deux langages définissent les boucles <code>for</code> et <code>while</code>.</p>
<h3 id="boucle-for" class="anchored">Boucle <code>for</code></h3>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="k">for</span><span class="w"> </span><span class="p">(</span><span class="kd">var</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="p">;</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="mf">10</span><span class="p">;</span><span class="w"> </span><span class="nx">i</span><span class="o">++</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span>
<span class="p">}</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h3 id="boucle-while" class="anchored">Boucle <code>while</code></h3>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span> <span class="c1"># initialisation</span>
<span class="k">while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">:</span> <span class="c1"># condition d'arrêt</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="c1">    # incrémentation de l'indice</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">i</span> <span class="o">+</span> <span class="mi">1</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Soyez patient"</span><span class="p">)</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="kd">var</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="w"> </span><span class="c1">// initialisation</span>
<span class="k">while</span><span class="w"> </span><span class="p">(</span><span class="nx">i</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="mf">10</span><span class="p">)</span><span class="w"> </span><span class="p">{</span><span class="w"> </span><span class="c1">// condition d'arrêt</span>
<span class="w">    </span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span>
<span class="w">    </span><span class="c1">// incrémentation de l'indice</span>
<span class="w">    </span><span class="nx">i</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">i</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="mf">1</span>
<span class="p">}</span>
<span class="w">    </span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`Soyez patient`</span><span class="p">)</span>
<span class="p">}</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h2 id="fonctions" class="anchored">Fonctions</h2>
<h3 id="définition-de-la-fonction" class="anchored">Définition de la fonction</h3>
<p>En python le mot clef utilisé est <code>def</code> et <code>function</code> en javascript, dans les deux cas le retour de fonction se fait par le mot-clé <code>return</code>.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">carré</span><span class="p">(</span><span class="n">nb</span><span class="p">):</span>
<span class="k">    return</span> <span class="n">nb</span><span class="o">**</span><span class="mi">2</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="kd">function</span><span class="w"> </span><span class="nx">carré</span><span class="w"> </span><span class="p">(</span><span class="nx">nb</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="k">return</span><span class="w"> </span><span class="nx">nb</span><span class="o">**</span><span class="mf">2</span>
<span class="p">}</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<h3 id="appel-de-la-fonction" class="anchored">Appel de la fonction</h3>
<p>Même syntaxe, on écrit le nom de la fonction avec le ou les arguments de la fonction entre parenthèse.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>python</th>
<th>javascript</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="highlight"><pre><span></span><span class="n">carré</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
</pre></div>
</td>
<td><div class="highlight"><pre><span></span><span class="nx">carré</span><span class="p">(</span><span class="mf">2</span><span class="p">)</span>
</pre></div>
</td>
</tr>
</tbody>
</table>
<details class="plus"><summary>Fonction sans paramètres</summary>
<p>Une fonction peut ne pas avoir de paramètres, mais son appel <strong>nécessite</strong> la présence des parenthèses.</p>
<div class="highlight"><pre><span></span>compte()
</pre></div>

</details>

