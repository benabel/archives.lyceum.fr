---
tags: ["cours", "seconde", "lycée", "snt", "python", "boucle", "fonction"]
tocHTML: '<ul><li><a href="#les-boucles" data-localhref="true">Les boucles</a></li><ul><li><a href="#les-boucles-bornées-for" data-localhref="true">Les boucles bornées: <code>for</code></a></li><li><a href="#les-boucles-non-bornées-while" data-localhref="true">Les boucles non bornées: <code>while</code></a></li></ul><li><a href="#les-fonctions" data-localhref="true">Les fonctions</a></li><ul><li><a href="#renvoyer-une-valeur-avec-return" data-localhref="true">Renvoyer une valeur avec <code>return</code></a></li><li><a href="#les-paramètres-de-fonction" data-localhref="true">Les paramètres de fonction</a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>       **Contenus**
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>            **Capacités attendues**
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Boucles bornées et non bornées</p>
<p>Définitions et appels de fonctions</p></td>
<td>Écrire et développer des programmes pour répondre à des problèmes et modéliser des phénomènes physiques, économiques et sociaux.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Dans ce chapitre, nous allons nous intéresser aux boucles qui permettent de <strong>répéter</strong> des instructions dans un programme, ainsi qu’aux fonctions qui permettent d’exécuter des portions de programme à la demande.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="RepeatUntil.svg" caption="Il existe deux types de boucles, les boucles bornées et le boucles non bornées."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="les-boucles" class="anchored">Les boucles</h2>
<p>Les boucles permettent de <strong>répéter</strong> des blocs d’instructions.</p>
<p>Il en existe deux types:</p>
<ul>
<li>Les boucles bornées avec le mot-clé <code>for</code>.</li>
<li>Les boucles non bornées avec le mot-clé <code>while</code>.</li>
</ul>
<h3 id="les-boucles-bornées-for" class="anchored">Les boucles bornées: <code>for</code></h3>
<p>Lorsqu’<em>on connait le nombre de répétitions</em> à effectuer, on utilise la boucle <code>for</code> associée à la fonction <code>range()</code>.</p>
<div class="example">
<p>Pour répéter 7 fois un bloc d’instructions, on utilise:</p>
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
</div>
<details class="plus"><summary>&nbsp;</summary>
<p>On peut aussi réaliser des boucles sur des types construits qui seront vus en <a href="/1g/nsi/3-representation-des-donnees-types-construits">première</a>.</p>
<ul>
<li><p>Sur des chaînes de caractères:</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">lettre</span> <span class="ow">in</span> <span class="s2">"Bonjour!"</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">lettre</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>B
o
n
j
o
u
r
!
</pre></div>

</div>
</div></li>
<li><p>Sur des listes:</p>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">premier</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">13</span><span class="p">]:</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">premier</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">2</span>
<span class="mf">3</span>
<span class="mf">5</span>
<span class="mf">7</span>
<span class="mf">11</span>
<span class="mf">13</span>
</pre></div>

</div>
</div></li>
</ul>
</details>

<h3 id="les-boucles-non-bornées-while" class="anchored">Les boucles non bornées: <code>while</code></h3>
<p>Lorsqu’<em>on ne connait pas le nombre de répétitions</em> à effectuer, on utilise la boucle <code>while</code> associée à une <em>variable de contrôle</em>.</p>
<div class="example">
<p>Voici un programme qui permet de vérifier la saisie d’un mot de passe par un utilisateur.</p>
<div class="highlight"><pre><span></span><span class="n">mdp</span> <span class="o">=</span> <span class="s2">""</span>                <span class="c1"># initialisation</span>
<span class="k">while</span> <span class="n">mdp</span> <span class="o">!=</span> <span class="s2">"azerty"</span><span class="p">:</span>  <span class="c1"># condition d'arrêt de la boucle</span>
<span class="n">    mdp</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Entrez votre mot de passe."</span><span class="p">)</span>   <span class="c1"># mise à jour de</span>
<span class="c1">                                                # la variable de boucle</span>
<span></span>
<span class="c1"># On sort de la boucle</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Vous êtes connecté"</span><span class="p">)</span>
</pre></div>

</div>
<div class="callout callout-style-default callout-caution callout-captioned">
<div class="callout-header d-flex align-content-center">
<div class="callout-icon-container">
<i class="callout-icon"></i>
</div>
<div class="callout-caption-container flex-fill">
Mise en garde
</div>
</div>
<div class="callout-body-container callout-body">
<p>Attention à bien vérifier que votre boucle finira par se terminer sinon votre programme rentrera dans une boucle infinie, et il faudra obligatoirement le stopper.</p>
</div>
</div>
<h2 id="les-fonctions" class="anchored">Les fonctions</h2>
<p>Il s’agit de blocs d’instructions exécutés à la demande, on les définit par le mot-clef <code>def</code>.</p>
<div class="example">
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="c1"># définition de la fonction</span>
<span class="k">def</span> <span class="nf">dit_bonjour</span><span class="p">(</span><span class="n">prenom</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Bonjour "</span> <span class="o">+</span> <span class="n">prenom</span><span class="p">)</span>
</pre></div>

</div>
<p>Nous venons de définir la fonction, mais pour l’instant, il ne se passe rien.</p>
<p>Pour exécuter le code de la fonction, il faut maintenant appeler la fonction avec un paramètre pour l’exécuter.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="c1"># appel de la fonction avec l'argument Ada</span>
<span class="n">dit_bonjour</span><span class="p">(</span><span class="s2">"Ada"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Bonjour Ada
</pre></div>

</div>
</div>
</div>
<h3 id="renvoyer-une-valeur-avec-return" class="anchored">Renvoyer une valeur avec <code>return</code></h3>
<p>Au lieu d’afficher une valeur, il est préférable de <em>renvoyer</em> une valeur grâce au mot-clé <code>return</code>.</p>
<div class="example">
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">périmètre</span><span class="p">(</span><span class="n">rayon</span><span class="p">):</span>
<span class="n">    p</span> <span class="o">=</span> <span class="mi">2</span><span class="o">*</span><span class="mf">3.14</span><span class="o">*</span><span class="n">rayon</span>
<span class="k">    return</span> <span class="n">p</span>
</pre></div>

</div>
<p>Cette fois-ci l’appel renverra la valeur du périmètre, on peut alors l’affecter à une variable.</p>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="c1"># on appelle la fonction avec l'argument 0.5</span>
<span class="n">p</span> <span class="o">=</span> <span class="n">périmètre</span><span class="p">(</span><span class="mf">0.5</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">p</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">3.14</span>
</pre></div>

</div>
</div>
</div>
<h3 id="les-paramètres-de-fonction" class="anchored">Les paramètres de fonction</h3>
<p>Une fonction peut accepter un nombre quelconque de paramètres, il suffit de les séparer par des virgules.</p>
<div class="examples">
<p>Avec deux paramètres.</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">surface_rectangle</span><span class="p">(</span><span class="n">l</span><span class="p">,</span> <span class="n">L</span><span class="p">):</span>
<span class="k">    return</span> <span class="n">l</span><span class="o">*</span><span class="n">L</span>
<span class="c1"># appel</span>
<span class="n">surface_rectangle</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="c1"># renvoie 6</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="26">
<div class="highlight"><pre><span></span><span class="mf">6</span>
</pre></div>

</div>
</div>
<p>Avec aucun paramètre:</p>
<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">time</span>
<span class="k">def</span> <span class="nf">affiche_heure</span><span class="p">():</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">time</span><span class="o">.</span><span class="n">asctime</span><span class="p">())</span>
<span></span>
<span class="c1"># Pour l'appel on met les parénthèses même s'il n'y a pas d'arguments</span>
<span class="n">affiche_heure</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Sun Feb  5 18:43:36 2023
</pre></div>

</div>
</div>
</div>

