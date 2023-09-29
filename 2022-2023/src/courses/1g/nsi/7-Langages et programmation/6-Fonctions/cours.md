---
"tags": ["python","fonctions", "procédures"]
tocHTML: '<ul><li><a href="#définition-dune-fonction" data-localhref="true">Définition d’une fonction</a></li><li><a href="#prototyper-une-fonction" data-localhref="true">Prototyper une fonction</a></li><li><a href="#réaliser-des-tests-dassertion" data-localhref="true">Réaliser des tests d’assertion</a></li><li><a href="#en-plus" data-localhref="true">En plus</a></li><ul><li><a href="#le-return-est-définitif" data-localhref="true">Le <code>return</code> est définitif!</a></li><li><a href="#nommer-les-arguments-de-la-fonction-lors-de-lappel" data-localhref="true">Nommer les arguments de la fonction lors de l’appel</a></li><li><a href="#portée-des-variables" data-localhref="true">Portée des variables</a></li></ul></ul>'
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
<td>Spécification</td>
<td><p>Prototyper une fonction.</p>
<p>Décrire les préconditions sur les arguments.</p>
<p>Décrire des postconditions sur les résultats.</p></td>
<td>Des assertions peuvent être utilisées pour garantir des préconditions ou des postconditions.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Si on écrit un programme qui nécessite souvent de réaliser <em>les mêmes suites d’instructions</em>, on peut alors <strong>définir une fonction</strong> qui évitera de réécrire constamment les mêmes instructions et de <strong>rendre le programme plus lisible</strong>.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Function_color_example_3.svg" caption="En fonction des arguments donnés en entrée(X), la fonction renverra la valeur (Y) souhaitée."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="définition-dune-fonction" class="anchored">Définition d’une fonction</h2>
<p>Une fonction possède un nom pour pouvoir être appelée et il est possible de lui communiquer des arguments.</p>
<p>En python la syntaxe de définition d’une fonction est la suivante:</p>
<p><strong>Syntaxe (ATTENTION À L’INDENTATION)</strong></p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">nom_de_ma_fonction</span><span class="p">(</span><span class="n">paramètres</span> <span class="n">séparés</span> <span class="n">par</span> <span class="n">des</span> <span class="n">virgules</span><span class="p">):</span>
<span class="n">    instruction</span> <span class="mi">1</span>
<span class="n">    instruction</span> <span class="mi">2</span>
<span class="o">    ...</span>
<span class="k">    return</span> <span class="n">objet_renvoyé_par_ma_fonction</span>
</pre></div>

<p>Pour appeler la fonction, il suffit de taper son nom avec les arguments entre parenthèse.</p>
<div class="highlight"><pre><span></span><span class="n">nom_de_ma_fonction</span><span class="p">(</span><span class="n">arg1</span><span class="p">,</span> <span class="n">arg2</span><span class="p">,</span><span class="o">...</span><span class="p">)</span>
</pre></div>

<details class="plus"><summary>Conventions de noms en Python</summary>
<p>En python, la convention PEP8 donne l’habitude de nommer les fonctions et variables avec des lettres minuscules et des tirets bas <code>_</code> pour remplacer les espaces.</p>
</details>

<div class="example">
<p>fonction <code>energie_cinetique()</code></p>
<p>Nous prendrons comme exemple le calcul de l’énergie cinétique d’un véhicule afin d’illustrer quelques notions utiles sur l’utilisation des fonctions en <code>python</code>.</p>
<p>L’énergie cinétique d’un objet de masse m se déplaçant à la vitesse v est:</p>
<p><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>E</mi><mi>c</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">
Ec = \frac{1}{2} m  v^{2}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span>
</p>
<p>Nous allons créer une fonction <code>energie_cinetique</code> qui calcule sa valeur à partir des paramètres masse et vitesse.</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="c1"># On définit la fonction</span>
<span class="k">def</span> <span class="nf">energie_cinetique</span><span class="p">(</span><span class="n">m</span><span class="p">,</span> <span class="n">v</span><span class="p">):</span>
<span class="k">    return</span> <span class="mf">0.5</span><span class="o">*</span><span class="n">m</span><span class="o">*</span><span class="n">v</span><span class="o">**</span><span class="mi">2</span>
<span></span>
<span class="c1"># On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s</span>
<span class="n">energie_cinetique</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> 
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="mf">9.0</span>
</pre></div>

</div>
</div>
</div>
<details class="plus"><summary>Les procédures</summary>
<p>Il est possible de définir des fonctions qui ne renvoient pas de valeur, on les nomme alors parfois procédure.</p>
<p>Ce type de fonction n’utilise pas l’instruction <code>return</code>. On peut s’en servir par exemple pour faire des affichages.</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">affiche_ec</span><span class="p">(</span><span class="n">m</span><span class="p">,</span> <span class="n">v</span><span class="p">):</span>
<span class="n">    ec</span> <span class="o">=</span> <span class="mf">0.5</span><span class="o">*</span><span class="n">m</span><span class="o">*</span><span class="n">v</span><span class="o">**</span><span class="mi">2</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"L'énergie cinétique est:"</span><span class="p">,</span> <span class="n">ec</span><span class="p">,</span> <span class="s2">"J"</span><span class="p">)</span>
</pre></div>

</div>
<p>L’affichage s’effectue lors de l’appel de la procédure:</p>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="n">affiche_ec</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span><span class="mi">10</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>L'énergie cinétique est: 50.0 J
</pre></div>

</div>
</div>
</details>

<h2 id="prototyper-une-fonction" class="anchored">Prototyper une fonction</h2>
<p>Pour expliquer le fonctionnement d’une fonction, on lui ajoute un <strong>prototype</strong> juste sous la ligne de définition. En Python les prototypes sont appelés <em>docstrings</em>. On peut y accéder dans le code source ou simplement en utilisant la fonction <code>help()</code>.</p>
<p>Le prototype doit décrire le <strong>rôle de la fonction</strong>, le <strong>type des paramètres</strong> et <strong>le type de la valeur de retour</strong>.</p>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">somme</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">b</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""La somme de deux nombres.</span>
<span></span>
<span class="sd">    Renvoie la somme des deux nombres donnés en arguments</span>
<span></span>
<span class="sd">    Paramètres</span>
<span class="sd">    ----------</span>
<span class="sd">    a : int</span>
<span class="sd">        première valeur à ajouter</span>
<span class="sd">    b : int</span>
<span class="sd">        deuxième valeur à ajouter</span>
<span></span>
<span class="sd">    Renvoie</span>
<span class="sd">    -------</span>
<span class="sd">    int</span>
<span class="sd">        La somme des deux arguments de la fonction</span>
<span class="sd">    """</span>
<span class="k">    return</span> <span class="n">a</span> <span class="o">+</span> <span class="n">b</span>
</pre></div>

</div>
<p>Maintenant, en tapant <code>help(somme)</code>, vous aurez toutes les informations utilise pour utiliser la fonction.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="n">help</span><span class="p">(</span><span class="n">somme</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Help on function somme in module __main__:
<span></span>
somme(a, b)
    La somme de deux nombres.
    
    Renvoie la somme des deux nombres donnés en arguments
    
    Paramètres
    ----------
    a : int
        première valeur à ajouter
    b : int
        deuxième valeur à ajouter
    
    Renvoie
    -------
    int
        La somme des deux arguments de la fonction
</pre></div>

</div>
</div>
<h2 id="réaliser-des-tests-dassertion" class="anchored">Réaliser des tests d’assertion</h2>
<p>Pour être sûr que notre fonction donne les bons résultats, on utilise des tests d’<code>assert</code>ion <em>(affirmation en anglais)</em> qui renvoient une <code>AssertionError</code> en cas d’erreur.</p>
<dl>
<dt>
assertion
</dt>
<dd>
<div>
<p>(Programmation) Expression évaluée à vrai. <a href="https://fr.wiktionary.org/wiki/assertion" class="cite-source">Wiktionnaire</a></p>
</div>
</dd>
</dl>
<p>On pourrait tester notre fonction somme sur des cas simples:</p>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">==</span> <span class="mi">3</span>
<span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="mi">0</span>
<span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">2</span><span class="p">)</span> <span class="o">==</span> <span class="mi">8</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Tests passés avec succés:)"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Tests passés avec succés:)
</pre></div>

</div>
</div>
<p>En cas d’erreur <em>(souvent en raison d’interventions humaines sur le code!)</em>, le programme est bloqué ce qui évite de le laisser tourner en faisant des erreurs qui pourraient être très dommageables dans certaines situations(banque, commerce, circulation…).</p>
<p>Par exemple, cette suite de tests avec des flottants ne réussi pas.</p>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mf">0.0</span><span class="p">,</span> <span class="mf">0.0</span><span class="p">)</span> <span class="o">==</span> <span class="mf">0.0</span>
<span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mf">10.0</span><span class="p">,</span> <span class="o">-</span><span class="mf">2.0</span><span class="p">)</span> <span class="o">==</span> <span class="mf">8.0</span>
<span class="k">assert</span> <span class="n">somme</span><span class="p">(</span><span class="mf">0.1</span><span class="p">,</span> <span class="mf">0.2</span><span class="p">)</span> <span class="o">==</span> <span class="mf">0.3</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Tests passés avec succés:)"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-error">
<div class="highlight"><pre><span></span>AssertionError: 
</pre></div>

</div>
</div>
<p>Si vous ne voyez pas pourquoi, revoyez le chapitre sur l’<a href="/1g/nsi/2-representation-des-donnees-types-et-valeurs-de-base/3-representation-des-nombres-a-virgule">encodage des nombres à virgule</a>.</p>
<h2 id="en-plus" class="anchored">En plus</h2>
<h3 id="le-return-est-définitif" class="anchored">Le <code>return</code> est définitif!</h3>
<div class="callout-caution callout callout-style-default callout-captioned">
<div class="callout-header d-flex align-content-center">
<div class="callout-icon-container">
<i class="callout-icon"></i>
</div>
<div class="callout-caption-container flex-fill">
Mise en garde
</div>
</div>
<div class="callout-body-container callout-body">
<p>Une fonction ne peut exécuter qu’un <code>return</code>, tout <code>return</code> est <strong>définitif</strong>.</p>
</div>
</div>
<div class="examples">
<ol type="1">
<li><p>Tout ce qui suit le <code>return</code> n’est pas exécuté, on parle de code <em>mort</em>(<em>dead code</em> en anglais).</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">exemple</span><span class="p">():</span>
<span class="k">    return</span> <span class="s2">"Bonjour"</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Ce code ne sera pas exécuté(dead code)"</span><span class="p">)</span>
<span></span>
<span class="c1"># appel</span>
<span class="n">exemple</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="8">
<div class="highlight"><pre><span></span>'Bonjour'
</pre></div>

</div>
</div></li>
<li><p>Il peut y avoir plus <code>return</code>, mais un seul sera exécuté.</p>
<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">bonjour</span><span class="p">(</span><span class="n">genre</span><span class="p">):</span>
<span class="k">    if</span> <span class="n">genre</span> <span class="o">==</span> <span class="s2">"M"</span><span class="p">:</span>
<span class="k">        return</span> <span class="s2">"Bonjour monsieur"</span>
<span class="k">    elif</span> <span class="n">genre</span> <span class="o">==</span> <span class="s2">"F"</span><span class="p">:</span>
<span class="k">        return</span> <span class="s2">"Bonjour madame"</span>
<span></span>
<span class="c1"># appel</span>
<span class="n">bonjour</span><span class="p">(</span><span class="s2">"F"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="9">
<div class="highlight"><pre><span></span>'Bonjour madame'
</pre></div>

</div>
</div></li>
<li><p>Il n’est pas nécessaire de placer un <code>return</code> dans un <code>else</code> car si on arrive après les conditions, sans retourner, ces conditions sont forcément <em>non vérifiées</em>.</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">bonjour</span><span class="p">(</span><span class="n">genre</span><span class="p">):</span>
<span class="k">    if</span> <span class="n">genre</span> <span class="o">==</span> <span class="s2">"M"</span><span class="p">:</span>
<span class="k">        return</span> <span class="s2">"Bonjour monsieur"</span>
<span class="k">    elif</span> <span class="n">genre</span> <span class="o">==</span> <span class="s2">"F"</span><span class="p">:</span>
<span class="k">        return</span> <span class="s2">"Bonjour madame"</span>
<span class="k">    return</span> <span class="s2">"Bonjour"</span>
<span></span>
<span class="c1"># comme G n'est pas dans les conditions c'est le return final qui est exécuté</span>
<span class="n">bonjour</span><span class="p">(</span><span class="s2">"G"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="10">
<div class="highlight"><pre><span></span>'Bonjour'
</pre></div>

</div>
</div></li>
</ol>
</div>
<h3 id="nommer-les-arguments-de-la-fonction-lors-de-lappel" class="anchored">Nommer les arguments de la fonction lors de l’appel</h3>
<p>On peut préciser le nom des arguments dans l’appel de la fonction pour être plus explicite, on parle alors de <code>keyword arguments</code>:“arguments nommés”.</p>
<div class="highlight"><pre><span></span><span class="c1"># On définit la fonction</span>
<span class="k">def</span> <span class="nf">energie_cinetique</span><span class="p">(</span><span class="n">m</span><span class="p">,</span> <span class="n">v</span><span class="p">):</span>
<span class="k">    return</span> <span class="mf">0.5</span><span class="o">*</span><span class="n">m</span><span class="o">*</span><span class="n">v</span><span class="o">**</span><span class="mi">2</span>
<span class="c1"># On appelle la fonction pour un objet de 2kg ayant une vitesse de 3m/s</span>
<span class="n">energie_cinetique</span><span class="p">(</span><span class="n">m</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">v</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
</pre></div>

<p>Sortie:</p>
<div class="highlight"><pre><span></span>L'énergie cinétique est: 50.0 J
</pre></div>

<p>L’avantage est qu’en plus d’être plus explicite, on peut alors appeler les arguments dans un ordre quelconque ce qui n’est pas le cas lorsque l’on ne nomme pas les arguments(ce type d’arguments est appelé <code>positionnal argument</code>: “argument positionnel”)</p>
<div class="highlight"><pre><span></span><span class="n">energie_cinetique</span><span class="p">(</span><span class="n">v</span><span class="o">=</span><span class="mi">3</span><span class="p">,</span> <span class="n">m</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

<p>Sortie:</p>
<div class="highlight"><pre><span></span>L'énergie cinétique est: 50.0 J
</pre></div>

<h3 id="portée-des-variables" class="anchored">Portée des variables</h3>
<p>Les variables définies dans les fonctions, ses paramètres ou autres, sont appelés des <strong>variables locales</strong>, par opposition aux <strong>variables globales</strong>, qui sont définies dans flot d’exécution du programme.</p>
<div class="cell" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="c1"># Je défini une variable globale x</span>
<span class="n">x</span> <span class="o">=</span> <span class="mi">3</span>
<span class="c1"># Je défini une fonction avec comme paramètre x</span>
<span class="k">def</span> <span class="nf">double</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
<span class="c1">  # Il s'agit d'une nouvelle variable locale x non liée à la variable globale x</span>
<span class="k">  return</span> <span class="mi">2</span> <span class="o">*</span> <span class="n">x</span>
<span></span>
<span class="c1"># J'appelle la fonction double avec x = 2</span>
<span class="n">double</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="mf">4</span>
</pre></div>

</div>
</div>
<p>La variable globale <code>x</code> reste inchangée :</p>
<div class="cell" data-execution_count="12">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="mf">3</span>
</pre></div>

</div>
</div>

