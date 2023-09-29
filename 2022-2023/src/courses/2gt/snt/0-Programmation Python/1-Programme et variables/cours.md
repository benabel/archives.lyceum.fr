---
tags: ["cours", "seconde", "lycée", "snt", "seconde générale et technologique",
       "sciences numériques et technologie"]
tocHTML: '<ul><li><a href="#algorithme-et-programme" data-localhref="true">Algorithme et programme</a></li><li><a href="#variables" data-localhref="true">Variables</a></li><li><a href="#la-fonction-print-afficher-une-sortie" data-localhref="true">La fonction <code>print()</code>: Afficher une sortie</a></li><li><a href="#la-fonction-input-récupérer-une-entrée" data-localhref="true">La fonction <code>input()</code>: Récupérer une entrée</a></li></ul>'
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
<td><p>Affectations, variables</p>
<p>Séquences</p></td>
<td>Écrire et développer des programmes pour répondre à des problèmes et modéliser des phénomènes physiques, économiques et sociaux.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Dans cette partie, nous allons nous intéresser à la programmation en utilisant le langage <a href="https://www.python.org/">Python</a> qui permet d’utiliser les outils de la programmation dans des domaines très variés: sciences, analyse de données, web… On commence par les variables, les entrées et les sorties d’un programme.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Python-logo-notext.svg" caption="Le langage Python est un langage de haut niveau simple à apprendre."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="algorithme-et-programme" class="anchored">Algorithme et programme</h2>
<dl>
<dt>
Programme
</dt>
<dd>
<div>
<p>Un programme est une séquence d’instructions destinées à être exécutées par la machine.</p>
</div>
</dd>
</dl>
<div class="example">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">"Bonjour"</span><span class="p">)</span>
<span class="n">nom</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Comment vous appelez-vous?"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Bienvenue"</span><span class="p">,</span> <span class="n">nom</span><span class="p">)</span>
</pre></div>

</div>
<details class="plus"><summary>Algorithme et programme</summary>
<p>En informatique, on parle souvent d’algorithmes, car nos programmes sont en fait des algorithmes exécutés par les ordinateurs.</p>
<dl>
<dt>
Algorithme
</dt>
<dd>
<div>
<p>Un algorithme est une méthode, une suite d’instructions permettant d’obtenir un résultat.</p>
</div>
</dd>
</dl>
<p>Ce type de méthode est utilisé depuis la nuit des temps pour fabriquer des tissus, nouer des cordages, ou bien préparer des aliments.</p>
<p>La révolution de l’informatique survenue au milieu du XXe siècle vient du fait que l’on a pu faire exécuter ces algorithmes à des machines. Pour cela il a fallu exprimer ces algorithmes dans des langages de programmation afin qu’ils puissent être exécutés par les ordinateurs.</p>
</details>

<h2 id="variables" class="anchored">Variables</h2>
<dl>
<dt>
Variable
</dt>
<dd>
<div>
<p>Les variables sont des noms permettant de désigner des valeurs stockées par le programme.</p>
</div>
</dd>
</dl>
<div class="example">
<p>Voici trois types de variables simples utilisées en Python.</p>
<div class="highlight"><pre><span></span><span class="c1"># type int (integer)</span>
<span class="n">entier</span> <span class="o">=</span> <span class="mi">13</span>
<span class="c1"># type float (nombre à virgule flottante)</span>
<span class="n">flottant</span> <span class="o">=</span> <span class="mf">13.0</span>
<span class="c1"># type str (string) les chaînes de caractères</span>
<span class="n">texte</span> <span class="o">=</span> <span class="s2">"treize"</span>
</pre></div>

<p>Il existe aussi le type booléen: <code>True</code> ou <code>False</code></p>
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
<p>Attention à bien distinguer une variable comme <code>age</code> d’une chaine de caractère <code>"age"</code>.</p>
</div>
</div>
<h2 id="la-fonction-print-afficher-une-sortie" class="anchored">La fonction <code>print()</code>: Afficher une sortie</h2>
<p>La fonction <code>print</code> permet au programme d’afficher du texte en <strong>sortie</strong>.</p>
<p>On peut utiliser <em>plusieurs arguments</em> séparés par des virgules qui seront alors ajoutés les uns à côté des autres (on dit concaténés).</p>
<div class="example">
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="n">nom</span> <span class="o">=</span> <span class="s2">"Sy"</span>
<span class="n">prenom</span> <span class="o">=</span> <span class="s2">"Omar"</span>
<span class="n">age</span> <span class="o">=</span> <span class="mi">42</span>
<span class="nb">print</span><span class="p">(</span><span class="n">prenom</span><span class="p">,</span> <span class="n">nom</span><span class="p">,</span> <span class="s2">"a"</span><span class="p">,</span> <span class="n">age</span><span class="p">,</span> <span class="s2">"ans."</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Omar Sy a 42 ans.
</pre></div>

</div>
</div>
</div>
<h2 id="la-fonction-input-récupérer-une-entrée" class="anchored">La fonction <code>input()</code>: Récupérer une entrée</h2>
<p>La fonction <code>input</code> permet au programme de récupérer du texte en <strong>entrée</strong>.</p>
<p>Généralement, on récupère le texte entré par l’utilisateur dans un variable en le convertissant dans le type souhaité.</p>
<div class="example">
<div class="highlight"><pre><span></span><span class="c1"># récupère une chaîne de caractère par défaut</span>
<span class="n">nom</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">"Comment vous appelez-vous?"</span><span class="p">)</span>
<span class="c1"># on converti la réponse de l'utilisateur en entier avec la fonction int</span>
<span class="n">age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous?"</span><span class="p">))</span>
<span class="c1"># on converti la réponse de l'utilisateur en fottant avec la fonction float</span>
<span class="n">taille</span> <span class="o">=</span> <span class="nb">float</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Donnez votre taille en mètre"</span><span class="p">))</span>
</pre></div>

<p>Lorsque le programme est lancé, l’utilisateur devra répondre aux questions posées, et on pourra utiliser ces réponses grâce aux variables <code>nom</code>, <code>age</code> et <code>taille</code>.</p>
</div>

