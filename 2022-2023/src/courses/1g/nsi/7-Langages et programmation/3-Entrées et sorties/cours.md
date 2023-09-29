---
tags: ["python", "type", "print", "input"]
tocHTML: '<ul><li><a href="#entrée-des-données-avec-la-fonction-input" data-localhref="true">Entrée des données avec la fonction <code>input()</code></a></li><li><a href="#affichage-de-résultats-pour-lutilisateur-avec-la-fonction-print" data-localhref="true">Affichage de résultats pour l’utilisateur avec la fonction <code>print()</code></a></li></ul>'
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

<div class="intro">
<p>Un programme est avant tout là pour nous servir à résoudre des problèmes, l’utilisateur doit pouvoir interagir avec celui-ci.</p>
<p>Cela s’effectue par l’intermédiaire d’entrées et des sorties.</p>
<ul>
<li><p>Les <strong>entrées</strong> permettent à l’utilisateur d’entrer des données dans le programme.</p></li>
<li><p>Les <strong>sorties</strong> permettent d’afficher les résultats à l’utilisateur.</p></li>
</ul>
</div>
<h2 id="entrée-des-données-avec-la-fonction-input" class="anchored">Entrée des données avec la fonction <code>input()</code></h2>
<p>La fonction <code>input()</code> permet d’afficher une phrase(plus exactement une chaîne de caractères, c’est pour cela qu’on doit placer cette phrase entre guillemets <code>"ma phrase"</code>), d’attendre que l’utilisateur entre une donnée et tape sur <em>Entrée</em>.</p>
<p><em>Dans la suite, les lignes commençant par <code>&gt;&gt;&gt;</code> désignent les entrées, les autres sont des sorties.</em></p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Qu'est-ce qui est apparu en premier : l'œuf ou la poule ? "</span><span class="p">)</span>
<span class="n">Qu</span><span class="s1">'est-ce qui est apparu en premier : l'</span><span class="n">œuf</span> <span class="n">ou</span> <span class="n">la</span> <span class="n">poule</span> <span class="err">?</span> <span class="n">la</span> <span class="n">poule</span>
</pre></div>

<p>La donnée entrée par l’utilisateur est renvoyée par la fonction <code>input()</code> et peut être stockée dans une variable pour une utilisation ultérieure.</p>
<p>Par exemple stockons cette réponse dans une variable appelée <code>réponse</code>:</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">réponse</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Quel jour du mois sommes nous ? "</span><span class="p">)</span>
<span class="n">Quel</span> <span class="n">jour</span> <span class="n">du</span> <span class="n">mois</span> <span class="n">sommes</span> <span class="n">nous</span> <span class="err">?</span> <span class="mi">13</span>
</pre></div>

<p><strong>ATTENTION</strong> la fonction <code>input()</code> stocke la valeur sous la forme d’une chaîne de caractères si vous voulez effectuer des opérations mathématiques, commencez par la convertir en nombre(entier ou réel), sinon vous risquez d’avoir de mauvaises surprises!</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">réponse</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Quel jour du mois sommes nous ? "</span><span class="p">)</span>
<span class="n">Quel</span> <span class="n">jour</span> <span class="n">du</span> <span class="n">mois</span> <span class="n">sommes</span> <span class="n">nous</span> <span class="err">?</span> <span class="mi">13</span>
<span class="o">&gt;&gt;&gt;</span> <span class="nb">type</span><span class="p">(</span><span class="n">réponse</span><span class="p">)</span>
<span class="o">&lt;</span><span class="k">class</span> <span class="err">'</span><span class="nc">str</span><span class="s1">'&gt;</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">réponse</span> <span class="o">*</span> <span class="mi">2</span>
<span class="s1">'1313'</span>
</pre></div>

<p>Convertissons l’entrée de l’utilisateur en entier avec la fonction <code>int()</code></p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">réponse</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel jour du mois sommes nous ? "</span><span class="p">))</span>
<span class="n">Quel</span> <span class="n">jour</span> <span class="n">du</span> <span class="n">mois</span> <span class="n">sommes</span> <span class="n">nous</span> <span class="err">?</span> <span class="mi">13</span>
<span class="o">&gt;&gt;&gt;</span> <span class="nb">type</span><span class="p">(</span><span class="n">réponse</span><span class="p">)</span>
<span class="o">&lt;</span><span class="k">class</span> <span class="err">'</span><span class="nc">int</span><span class="s1">'&gt;</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">réponse</span> <span class="o">*</span> <span class="mi">2</span>
<span class="mi">26</span>
</pre></div>

<h2 id="affichage-de-résultats-pour-lutilisateur-avec-la-fonction-print" class="anchored">Affichage de résultats pour l’utilisateur avec la fonction <code>print()</code></h2>
<p>Pour afficher du texte ou des valeurs de variables on utilise la fonction <code>print()</code>.</p>
<p><strong>ATTENTION</strong> Lorsque vous affichez du texte il doit être entouré de guillemets, mais pas lorsque vous souhaitez afficher des valeurs de variables.</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="nb">print</span><span class="p">(</span><span class="s2">"Votre réponse est: "</span><span class="p">)</span>
<span class="n">Votre</span> <span class="n">réponse</span> <span class="n">est</span><span class="p">:</span>
<span></span>
<span class="o">&gt;&gt;&gt;</span> <span class="nb">print</span><span class="p">(</span><span class="n">réponse</span><span class="p">)</span>
<span class="mi">13</span>
</pre></div>

<p>Vous pouvez même afficher plusieurs objets en les séparant par des virgules.</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="nb">print</span><span class="p">(</span><span class="s2">"Nous sommes le"</span><span class="p">,</span> <span class="n">réponse</span><span class="p">,</span> <span class="s2">"du mois de septembre"</span><span class="p">)</span>
<span class="n">Nous</span> <span class="n">sommes</span> <span class="n">le</span> <span class="mi">13</span> <span class="n">du</span> <span class="n">mois</span> <span class="n">de</span> <span class="n">septembre</span>
</pre></div>

<p>On peut même créer des chaînes de caractères sur plusieurs lignes en utilisant trois guillemets.</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="nb">print</span><span class="p">(</span><span class="s2">"""Nous allons faire une si longue phrase qu'il</span>
<span class="s2">... est indispensable de l'écrire</span>
<span class="s2">... sur au moins trois</span>
<span class="s2">... , que dis-je,</span>
<span class="s2">... cinq lignes"""</span><span class="p">)</span>
<span class="n">Nous</span> <span class="n">allons</span> <span class="n">faire</span> <span class="n">une</span> <span class="n">si</span> <span class="n">longue</span> <span class="n">phrase</span> <span class="n">qu</span><span class="s1">'il</span>
<span class="n">est</span> <span class="n">indispensable</span> <span class="n">de</span> <span class="n">l</span><span class="s1">'écrire</span>
<span class="n">sur</span> <span class="n">au</span> <span class="n">moins</span> <span class="n">trois</span>
<span class="p">,</span> <span class="n">que</span> <span class="n">dis</span><span class="o">-</span><span class="n">je</span><span class="p">,</span>
<span class="n">cinq</span> <span class="n">lignes</span>
</pre></div>

<details class="plus"><summary>Les f-strings</summary>
<p>Depuis la version 3.6 de python, il est possible de d’inclure directement des variables dans les chaines de caractères, c’est ce que l’on appelle les <a href="https://www.python.org/dev/peps/pep-0498/"><code>f-strings</code></a>, pour les utiliser, il faut:</p>
<ul>
<li>précéder le guillement ouvrant d’un <code>f</code>,</li>
<li>écrire les noms des variables entre accolades <code>{variable}</code>.</li>
</ul>
<div class="example">
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">nom</span> <span class="o">=</span> <span class="s2">"Ada"</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">age</span> <span class="o">=</span> <span class="mi">16</span>
<span class="o">&gt;&gt;&gt;</span> <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">"Bonjour, </span><span class="si">{</span><span class="n">nom</span><span class="si">}</span><span class="s2">. Vous avez </span><span class="si">{</span><span class="n">age</span><span class="si">}</span><span class="s2"> ans."</span><span class="p">)</span>
<span class="n">Bonjour</span><span class="p">,</span> <span class="n">Ada</span><span class="o">.</span> <span class="n">Vous</span> <span class="n">avez</span> <span class="mi">16</span> <span class="n">ans</span><span class="o">.</span>
</pre></div>

</div>
</details>

