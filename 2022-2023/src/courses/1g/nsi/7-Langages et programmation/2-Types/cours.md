---
tags: ['python', 'variable', 'type']
tocHTML: '<ul><li><a href="#quelques-types-dobjets-simples" data-localhref="true">Quelques types d’objets simples</a></li><li><a href="#comment-connaître-le-type-dun-objet" data-localhref="true">Comment connaître le type d’un objet ?</a></li><li><a href="#changer-le-type-dun-objet" data-localhref="true">Changer le type d’un objet</a></li><ul><li><a href="#convertir-en-chaîne-de-caractère-str" data-localhref="true">Convertir en chaîne de caractère <code>str()</code></a></li><li><a href="#convertir-un-entier-en-réel-float" data-localhref="true">Convertir un entier en réel: <code>float()</code></a></li><li><a href="#convertir-un-réel-en-entier-int-et-round" data-localhref="true">Convertir un réel en entier: <code>int()</code> et <code>round()</code></a></li></ul><li><a href="#combiner-des-objets-avec-des-opérations" data-localhref="true">Combiner des objets avec des opérations</a></li></ul>'
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
<p>Dans un programme informatique, on manipule des données sur lesquelles on effectue des calculs.</p>
<p>Lorsqu’un langage traite des données, celles-ci sont codées sous forme <em>binaire</em> et le langage doit savoir à quel type de valeur correspond ce codage binaire.</p>
<p>Par exemple, le code binaire <code>0100 0001</code> sur un octet peut désigner:</p>
<ul>
<li>Le nombre <strong>65</strong> s’il s’agit d’un entier non signé(entier positif).</li>
<li>La lettre <strong>A</strong> s’il s’agit d’un caractère(en codage ASCII/UTF-8).</li>
</ul>
<p>En fonction du type d’objet (ou de donnée), on peut appliquer certaines opérations et d’autres non.</p>
</div>
<h2 id="quelques-types-dobjets-simples" class="anchored">Quelques types d’objets simples</h2>
<p>Voici quelques types d’objets simples:</p>
<ul>
<li><code>int</code>: <em>integer</em> en anglais représentent les <strong>entiers</strong>. ex: <code>3</code></li>
<li><code>float</code>: <em>floating point</em> en anglais représentent les <strong>réels</strong>. ex: <code>3.14</code></li>
<li><code>str</code>: <em>string</em> en anglais représentent les <strong>chaînes de caractères</strong>. ex: <code>"Bonjour!"</code></li>
<li><code>bool</code>: <em>booleans</em> en anglais représentent les <strong>booléens</strong>. Il ne peuvent avoir que deux valeurs: <code>True</code> ou <code>False</code> (Vrai ou faux)</li>
</ul>
<details class="plus"><summary>`NoneType`</summary>
<p>On a parfois besoin de créer une variable vide, on utilise alors la valeur <code>None</code> qui a pour type <code>NoneType</code> <em>sans type</em> en anglais.</p>
</details>

<h2 id="comment-connaître-le-type-dun-objet" class="anchored">Comment connaître le type d’un objet ?</h2>
<p>Pour connaître le type d’un objet on peut utiliser la fonction <code>type()</code> de Python:</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="1">
<div class="highlight"><pre><span></span>int
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="mf">3.14</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="2">
<div class="highlight"><pre><span></span>float
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="s2">"Toto"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="3">
<div class="highlight"><pre><span></span>str
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="kc">False</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="4">
<div class="highlight"><pre><span></span>bool
</pre></div>

</div>
</div>
<h2 id="changer-le-type-dun-objet" class="anchored">Changer le type d’un objet</h2>
<p>Il est possible de modifier le type d’un objet en utilisant des fonctions Python, en anglais on appelle ça le <em>casting</em>.</p>
<h3 id="convertir-en-chaîne-de-caractère-str" class="anchored">Convertir en chaîne de caractère <code>str()</code></h3>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="nb">str</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="5">
<div class="highlight"><pre><span></span>'5'
</pre></div>

</div>
</div>
<p>Comme vous le voyez la présence de guillemets indique qu’il s’agit d’une chaîne de caractères.</p>
<p>En Python, on peut utiliser indifféremment les simples <code>'</code> et doubles guillemets <code>"</code>.</p>
<h3 id="convertir-un-entier-en-réel-float" class="anchored">Convertir un entier en réel: <code>float()</code></h3>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="nb">float</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="mf">5.0</span>
</pre></div>

</div>
</div>
<h3 id="convertir-un-réel-en-entier-int-et-round" class="anchored">Convertir un réel en entier: <code>int()</code> et <code>round()</code></h3>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="nb">int</span><span class="p">(</span><span class="mf">3.95</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="mf">3</span>
</pre></div>

</div>
</div>
<p>Comme vous le voyez on a conservé que la partie entière du nombre, mais on n’a pas effectué un arrondi, si on souhaite faire un arrondi il faut utiliser la fonction <code>round</code>.</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="nb">round</span><span class="p">(</span><span class="mf">3.49</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="mf">3</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="nb">round</span><span class="p">(</span><span class="mf">3.5</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="mf">4</span>
</pre></div>

</div>
</div>
<details class="plus"><summary>Typage dynamique</summary>
<p>Les langages étudiés cette année sont dynamiques, c’est-à-dire que l’on peut changer le type des valeurs et variables. Il n’est de pas nécessaire de déclarer le type de variable avant leur utilisation(typage statique) ce qui rend le programme plus court et simple.</p>
</details>

<h2 id="combiner-des-objets-avec-des-opérations" class="anchored">Combiner des objets avec des opérations</h2>
<p>Lorsque l’on combine des objets avec des opérations on crée ce que l’on appelle une <em>expression</em>, si la syntaxe de votre expression est correcte, <em>elle retourne une valeur</em> qui a comme tout objet un type.</p>
<p>La syntaxe est de la forme:</p>
<div class="highlight"><pre><span></span><span class="o">&lt;</span><span class="n">objet</span><span class="o">&gt;</span> <span class="o">&lt;</span><span class="n">opérateur</span><span class="o">&gt;</span> <span class="o">&lt;</span><span class="n">objet</span><span class="o">&gt;</span>
</pre></div>

<p>Par exemple:</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="mi">3</span> <span class="o">+</span> <span class="mi">2</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="mf">5</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="mf">3.0</span> <span class="o">+</span> <span class="mi">2</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="mf">5.0</span>
</pre></div>

</div>
</div>
<p>Comme vous le voyez l’<strong>expression retourne une valeur dont le type dépend du type de données</strong>.</p>
<p>C’est encore plus étonnant avec les chaînes de caractères:</p>
<div class="cell" data-execution_count="12">
<div class="highlight"><pre><span></span><span class="s2">"TO"</span> <span class="o">+</span> <span class="s2">"TO"</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="12">
<div class="highlight"><pre><span></span>'TOTO'
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="13">
<div class="highlight"><pre><span></span><span class="s2">"TO"</span> <span class="o">*</span> <span class="mi">2</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="13">
<div class="highlight"><pre><span></span>'TOTO'
</pre></div>

</div>
</div>
<p>Voici les opérations à connaître:</p>
<ul>
<li>addition: <code>+</code></li>
<li>soustraction: <code>-</code></li>
<li>multiplication: <code>*</code></li>
<li>division: <code>/</code></li>
<li>division entière: <code>//</code> <em>renvoie la partie entière du quotient de la division. p.ex: 5 // 2 -&gt; 2</em></li>
<li>modulo: <code>%</code>: <em>renvoie le reste de la division entière. p.ex: 5 % 2 -&gt; 1</em></li>
<li>puissance: <code>**</code></li>
</ul>
<div class="prop">
<p><strong>Ordre de priorité des opérateurs</strong>(dite règle «PEMDAS»):</p>
<p>Parenthèses &gt; Exposants &gt; Multiplication &gt; Division &gt; Addition &gt; Soustraction</p>
</div>
<p>On ne peut pas combiner les types n’importe comment en cas d’opération impossible, l’interpréteur Python lève une exception <code>TypeError</code>.</p>
<div class="cell" data-execution_count="14">
<div class="highlight"><pre><span></span><span class="s2">"python"</span> <span class="o">/</span> <span class="mi">3</span>
</pre></div>

<div class="cell-output cell-output-error">
<div class="highlight"><pre><span></span><span class="n">TypeError</span><span class="o">:</span><span class="w"> </span><span class="n">unsupported</span><span class="w"> </span><span class="n">operand</span><span class="w"> </span><span class="n">type</span><span class="o">(</span><span class="n">s</span><span class="o">)</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="o">/:</span><span class="w"> </span><span class="s1">'str'</span><span class="w"> </span><span class="n">and</span><span class="w"> </span><span class="s1">'int'</span>
</pre></div>

</div>
</div>

