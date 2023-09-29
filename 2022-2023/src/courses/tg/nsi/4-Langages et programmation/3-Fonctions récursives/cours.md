---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#définition-et-exemple" data-localhref="true">Définition et exemple</a></li><li><a href="#comment-définir-une-fonction-récursive" data-localhref="true">Comment définir une fonction récursive?</a></li><li><a href="#pile-dexécution" data-localhref="true">Pile d’exécution</a></li><li><a href="#efficacité-des-algorithmes-récursifs" data-localhref="true">Efficacité des algorithmes récursifs</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span> Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>  Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>        Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Récursivité.</td>
<td><p>Écrire un programme récursif.</p>
<p>Analyser le fonctionnement d’un programme récursif.</p></td>
<td>Des exemples relevant de domaines variés sont à privilégier.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro">
<p><wc-wikimage class="half right" title="34*21-FibonacciBlocks.png" caption="Les nombres de la suite de Fibonnacci sont un exemple souvent utilisé pour illustrer l'utilisation des fonctions récursives."></wc-wikimage></p>
<p>Dans ce chapitre, nous allons voir comment utiliser des fonctions <em>récursives</em>, des fonctions qui s’appellent elles-mêmes. Ce type de fonction peut avantageusement remplacer la boucle pour écrire des programmes courts et élégants. Ce type de construction est notamment utilisée en <strong><a href="../5-paradigmes-de-programmation">programmation fonctionnelle</a></strong>, un paradigme de programmation centrée sur les fonctions.</p>
</div>
<h2 id="définition-et-exemple" class="anchored">Définition et exemple</h2>
<dl>
<dt>
Fonction récursive
</dt>
<dd>
<div>
<p>Une fonction récursive est une fonction qui s’appelle elle-même dans sa définition.</p>
</div>
</dd>
</dl>
<p>Commençons par un exemple pour clarifier un peu les choses.</p>
<p>Vous voulez demander à un utilisateur une entrée par exemple son âge, et vous voulez vous assurer que l’utilisateur vous donne bien une valeur entière positive.</p>
<p>On peut implémenter cela avec une boucle <code>while</code>.</p>
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="kc">None</span>
<span class="k">while</span> <span class="ow">not</span><span class="p">(</span><span class="n">age</span><span class="p">):</span>
<span class="n">    age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous?"</span><span class="p">))</span>
<span class="k">    if</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">"Merci pour votre réponse)</span>
<span class="c1">    # on affecte None à age pour relancer un tour de boucle</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"L'age doit être un entier positif"</span><span class="p">)</span>
<span class="n">    age</span> <span class="o">=</span> <span class="kc">None</span>
        
</pre></div>

<p>Mais il est aussi tout à fait possible d’utiliser une fonction récursive comme ceci:</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">quel_age</span><span class="p">():</span>
<span class="n">    age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous?"</span><span class="p">))</span>
<span class="k">    if</span> <span class="n">age</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="n">age</span>
<span class="c1">    # L'age n'est pas positif, il faut recommencer</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"L'age doit être un entier positif"</span><span class="p">)</span>
<span class="c1">    # on fait l'appel récursif pour reposer la question</span>
<span class="n">    quel_age</span><span class="p">()</span>
<span></span>
<span class="n">age</span> <span class="o">=</span> <span class="n">quel_age</span><span class="p">()</span> <span class="c1"># appel de la fonction et assignation de la valeur retournée à la variable age</span>
</pre></div>

<p>Comme vous le voyez cette fonction continuera de s’appeler <em>tant que</em> nécessaire. On a donc bien remplacé la boucle avec cette fonction.</p>
<details class="appli"><summary>Gestion des exceptions</summary>
<p>Ce code ne traite que le problème du signe, si on voulait être complet il faudrait gérer les problèmes de type(<code>str</code>, <code>float</code>…) avec les structures <code>try except</code>.</p>
<p>Vous pouvez l’implémenter en guise d’exercice.</p>
</details>

<h2 id="comment-définir-une-fonction-récursive" class="anchored">Comment définir une fonction récursive?</h2>
<p>Pour écrire une fonction récursive il faut:</p>
<ul>
<li><p>Traiter attentivement le <em>cas récursif</em> du passage des valeurs renvoyées par l’appel précédent à l’appel suivant.</p></li>
<li><p>Prévoir le <em>cas de base</em> qui ne nécessite pas de rappel de la fonction afin d’arrêter la boucle.</p></li>
</ul>
<div class="example">
<p>Nous allons utiliser l’exemple <em>classique</em> de la fonction puissance qui retourne <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>
.</p>
<p>Un traitement par une boucle <code>for</code> serait <em>(programmation impérative)</em>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">puissance2</span><span class="p">(</span><span class="n">n</span><span class="p">:</span> <span class="nb">int</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">int</span><span class="p">:</span>
<span class="n">    puissance</span> <span class="o">=</span> <span class="mi">1</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>
<span class="n">        puissance</span> <span class="o">=</span> <span class="n">puissance</span> <span class="o">*</span> <span class="mi">2</span>
<span class="k">    return</span> <span class="n">puissance</span>
</pre></div>

<div class="highlight"><pre><span></span>&gt;&gt;&gt; puissance2(8)
256
</pre></div>

<p>Cette fonction peut-être définie par une fonction récursive car:</p>
<ul>
<li>Le cas récursif est: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>=</mo><mn>2</mn><mo>∗</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">2^n = 2 * 2^{n-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>
</li>
<li>Le cas de base est: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^0 = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>
</li>
</ul>
<p>Voici donc la fonction récursive:</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">puissance_recursive</span><span class="p">(</span><span class="n">exposant</span><span class="p">):</span>
<span class="c1">    # cas de base</span>
<span class="k">    if</span> <span class="n">exposant</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="mi">1</span>
<span class="c1">    # appel recursif</span>
<span class="k">    return</span> <span class="mi">2</span> <span class="o">*</span> <span class="n">puissance_recursive</span><span class="p">(</span><span class="n">exposant</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">)</span>
<span></span>
<span class="n">puissance_3</span> <span class="o">=</span> <span class="n">puissance_recursive</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
</pre></div>

</div>
<details class="plus"><summary>Correction de l'algorithme récursif</summary>
<p>Nous pouvons démontrer la <strong>correction</strong> <em>(validité)</em> de cet algorithme, pour cela nous allons prouver par récurrence que <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>u</mi><mi>i</mi><mi>s</mi><mi>s</mi><mi>a</mi><mi>n</mi><mi>c</mi><msub><mi>e</mi><mi>r</mi></msub><mi>e</mi><mi>c</mi><mi>u</mi><mi>r</mi><mi>s</mi><mi>i</mi><mi>v</mi><mi>e</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">puissance_recursive(n) = 2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">u</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ss</span><span class="mord mathnormal">an</span><span class="mord mathnormal">c</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ec</span><span class="mord mathnormal">u</span><span class="mord mathnormal">rs</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">e</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>
.</p>
<ul>
<li><strong>Initialisation:</strong> pour <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mi>x</mi><mi>p</mi><mi>o</mi><mi>s</mi><mi>a</mi><mi>n</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">exposant = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8095em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">p</span><span class="mord mathnormal">os</span><span class="mord mathnormal">an</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>
, <code>puissance_recursive(0)</code> vaut 1 qui est bien égal à <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>0</mn></msup></mrow><annotation encoding="application/x-tex">2^0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span></span></span></span>
.</li>
<li><strong>Conservation:</strong> si <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>u</mi><mi>i</mi><mi>s</mi><mi>s</mi><mi>a</mi><mi>n</mi><mi>c</mi><msub><mi>e</mi><mi>r</mi></msub><mi>e</mi><mi>c</mi><mi>u</mi><mi>r</mi><mi>s</mi><mi>i</mi><mi>v</mi><mi>e</mi><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">puissance_recursive(n-1) = 2^{n-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">u</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ss</span><span class="mord mathnormal">an</span><span class="mord mathnormal">c</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ec</span><span class="mord mathnormal">u</span><span class="mord mathnormal">rs</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">e</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>
alors <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>u</mi><mi>i</mi><mi>s</mi><mi>s</mi><mi>a</mi><mi>n</mi><mi>c</mi><msub><mi>e</mi><mi>r</mi></msub><mi>e</mi><mi>c</mi><mi>u</mi><mi>r</mi><mi>s</mi><mi>i</mi><mi>v</mi><mi>e</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo>×</mo><mi>p</mi><mi>u</mi><mi>i</mi><mi>s</mi><mi>s</mi><mi>a</mi><mi>n</mi><mi>c</mi><msub><mi>e</mi><mi>r</mi></msub><mi>e</mi><mi>c</mi><mi>u</mi><mi>r</mi><mi>s</mi><mi>i</mi><mi>v</mi><mi>e</mi><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">puissance_recursive(n) = 2 \times puissance_recursive(n-1) = 2\times2^{n-1}=2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">u</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ss</span><span class="mord mathnormal">an</span><span class="mord mathnormal">c</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ec</span><span class="mord mathnormal">u</span><span class="mord mathnormal">rs</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">e</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">u</span><span class="mord mathnormal">i</span><span class="mord mathnormal">ss</span><span class="mord mathnormal">an</span><span class="mord mathnormal">c</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal">ec</span><span class="mord mathnormal">u</span><span class="mord mathnormal">rs</span><span class="mord mathnormal">i</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord mathnormal">e</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>
.</li>
<li><strong>Terminaison:</strong> L’algorithme se termine, car à chaque tour de boucle <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
diminue de 1 et on finit par arriver au <code>return</code> du cas terminal lorsque <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">n=0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>
<strong>à condition d’avoir donné au paramètre <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
une valeur positive à l’appel de la fonction.</strong></li>
</ul>
</details>

<h2 id="pile-dexécution" class="anchored">Pile d’exécution</h2>
<p>Bien que la gestion de la mémoire soit «cachée» au programmeur en Python, qu’il existe deux façons d’allouer de la mémoire à un programme lors de son exécution (on parle d’allocation dynamique).</p>
<ul>
<li>Le <a href="https://fr.wikipedia.org/wiki/Tas_(allocation_dynamique)">tas</a> <em>(heap en anglais)</em> est un segment de mémoire que l’on peut faire grandir ou rétrécir à la demande.</li>
<li>L’autre segment de mémoire utilisé est la <a href="https://fr.wikipedia.org/wiki/Pile_d%27ex%C3%A9cution">pile d’exécution</a> <em>(call stack)</em>. La pile sert à enregistrer des informations au sujet des fonctions actives dans un programme informatique, c’est celle qui nous intéresse ici.</li>
</ul>
<blockquote class="blockquote">
<p>Étant donné que la pile d’exécution est une pile, l’appelant pousse l’adresse de retour sur la pile, et la fonction appelée, quand elle se termine, récupère l’adresse de retour au sommet de la pile d’exécution (et y transfère le contrôle). Si une fonction appelée appelle une autre fonction, elle poussera son adresse de retour sur la pile d’exécution. Les adresses de retour s’accumulent donc sur la pile d’exécution et sont récupérées une à une lors de la fin de l’exécution des fonctions. Si l’accumulation des adresses de retour consomme tout l’espace alloué à la pile d’exécution, un message d’erreur appelé un dépassement de pile se produit.</p>
</blockquote>
<p><a href="https://fr.wikipedia.org/wiki/Pile_d%27ex%C3%A9cution" class="cite-source">Article Wikipédia sur la pile d’exécution</a></p>
<p>Pour bien comprendre comment fonctionne la pile d’exécution, on peut exécuter la fonction <code>puissance_recursive</code> pas à pas sur <a href="http://pythontutor.com/visualize.html#code=def%20puissance_recursive%28exposant%29%3A%0A%20%20%20%20%23%20cas%20de%20base%0A%20%20%20%20if%20exposant%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20return%201%0A%20%20%20%20%23%20appel%20recursif%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%202%20*%20puissance_recursive%28exposant%20-%201%20%29%0A%0Apuissance_3%20%3D%20puissance_recursive%283%29&amp;cumulative=false&amp;curInstr=0&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=3&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false">pythontutor</a>.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/animation-puiss-recursive.gif" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Animation appel récursif sur python tutor</figcaption><p></p>
</figure>
</div>
<p>Sur cette animation la pile est «à l’envers»!</p>
<h2 id="efficacité-des-algorithmes-récursifs" class="anchored">Efficacité des algorithmes récursifs</h2>
<p>L’écriture d’algorithmes récursifs peut-être très élégante et concise, cependant elle peut avoir des conséquences très néfastes sur leur efficacité. La taille de la pile peut croitre au-dessus des limites de la mémoire, ou encore certains calculs identiques peuvent être réalisés plusieurs fois.</p>
<p>Nous allons voir comment l’utilisation d’un <em>accumulateur</em> peut permettre de passer des valeurs d’un appel à un autre lors de la récursion.</p>
<div class="example">
<p>Voici donc la fonction récursive puissance modifiée avec un deuxième paramètre <code>acc</code> ayant pour valeur par défaut 1, et qui <em>accumulera</em> le résultat des multiplications lors des appels récursifs.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">puissance_rec_acc</span><span class="p">(</span><span class="n">exposant</span><span class="p">,</span> <span class="n">acc</span><span class="o">=</span><span class="mi">1</span><span class="p">):</span>
<span class="c1">    # cas de base</span>
<span class="k">    if</span> <span class="n">exposant</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="n">acc</span>
<span class="c1">    # appel recursif</span>
<span class="k">    return</span> <span class="n">puissance_rec_acc</span><span class="p">(</span><span class="n">exposant</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="o">*</span><span class="n">acc</span> <span class="p">)</span>
<span class="n">puissance_rec_acc</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
</pre></div>

<p>Nous n’avons pas modifié la hauteur de la pile, mais on a modifié l’ordre des opérations effectuées. Les multiplications sont effectuées lors de l’empilement au lieu du dépilement précédemment.</p>
<p>Nous pouvons visualiser l’exécution de cet algorithme sur <a href="https://pythontutor.com/visualize.html#code=def%20puissance_rec_acc%28exposant,%20acc%3D1%29%3A%0A%20%20%20%20%23%20cas%20de%20base%0A%20%20%20%20if%20exposant%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20return%20acc%0A%20%20%20%20%23%20appel%20recursif%0A%20%20%20%20return%20puissance_rec_acc%28exposant%20-%201,%202*acc%20%29%0A%0Apuissance_rec_acc%283%29&amp;cumulative=false&amp;curInstr=0&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=3&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false">pythontutor</a>.</p>
<p><img src="../../images/pytutor_puissance_rec_acc.gif" class="img-fluid"></p>
</div>
<p>L’utilisation d’un accumulateur est parfois indispensable comme dans les exercices 5 et 6, voire indispensable comme dans le calcul des termes de Fibonacci de grand ordre(exercice 7).</p>
<div class="ref">
<ul>
<li><a href="http://www.editions-eyrolles.com/Livre/9782212135435/">Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek</a></li>
<li><a href="http://www.editions-eyrolles.com/Livre/9782212137002/informatique-pour-tous-en-classes-preparatoires-aux-grandes-ecoles">Informatique pour tous en classes préparatoires aux grandes écoles de Benjamin Wack</a></li>
</ul>
</div>

