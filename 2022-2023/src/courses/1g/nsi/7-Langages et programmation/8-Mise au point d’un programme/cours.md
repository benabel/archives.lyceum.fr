---
"tags": ["python", "spécification", "tests", "modules"]
tocHTML: '<ul><li><a href="#utilisation-dune-approche-fonctionnelle-def" data-localhref="true">Utilisation d’une approche fonctionnelle: <code>def</code></a></li><li><a href="#renvoi-de-valeurs-return" data-localhref="true">Renvoi de valeurs: <code>return</code></a></li><li><a href="#prototypage-de-la-fonction" data-localhref="true">Prototypage de la fonction</a></li><li><a href="#les-tests-assert" data-localhref="true">Les tests: <code>assert</code></a></li><li><a href="#les-bibliothèques-import" data-localhref="true">Les bibliothèques: <code>import</code></a></li><li><a href="#bibliothèques-tierces" data-localhref="true">Bibliothèques tierces</a></li></ul>'
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
<td>Mise au point de programmes</td>
<td>Utiliser des jeux de tests.</td>
<td><p>L’importance de la qualité et du nombre des tests est mise en évidence.</p>
<p>Le succès d’un jeu de tests ne garantit pas la correction d’un programme.</p></td>
</tr>
<tr class="even">
<td>Utilisation de bibliothèques</td>
<td>Utiliser la documentation d’une bibliothèque.</td>
<td>Aucune connaissance exhaustive d’une bibliothèque particulière n’est exigible.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<p>Nous avons déjà vu que parmi des ingrédients des <a href="../1-les-ingredients-dun-algorithme">programmes</a>, il y en a un qui est particuliérément utile pour rendre les programmes plus lisibles et structurés et donc <strong>plus faciles à maintenir</strong>, c’est l’<em>utilisation de fonctions</em>.</p>
<p>Nous avons également vu comment <em>prototyper</em> des <a href="6-fonctions">fonctions</a> afin de pouvoir rendre le code plus explicite et que l’on puisse revenir dessus afin de l’améliorer ou le corriger plus tard lors du développement du programme.</p>
<p>Nous étions alors dans la phase descendante de la conception du programme qui nous a permis d’arriver à <em>implémenter notre programme</em>. Ce modèle d’organisation de la conception d’un programme est connu sous le nom de <em><a href="https://fr.wikipedia.org/wiki/Cycle_en_V">cycle en V</a></em>, et il est un standard utuilisé depuis les années 1980.</p>
<p><a title="Leon Osborne, Jeffrey Brummond, Robert Hart, Mohsen (Moe) Zarean Ph.D., P.E, Steven Conger ; Redrawn by User:Slashme. / Public domain" href="https://commons.wikimedia.org/wiki/File:Systems_Engineering_Process_II.svg"><img class="center" width="512" alt="Systems Engineering Process II" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Systems_Engineering_Process_II.svg/512px-Systems_Engineering_Process_II.svg.png"></a></p>
<p>Nous allons voir dans ce chapitre une autre étape du cycle de développement d’applications: <strong>La mise au point du programme grâce à l’utilisation de tests</strong>.</p>
<p>Prenons l’exemple du calcul des racines du trinôme proposé par <em>un élève</em>. <strong>Nous allons peu à peu améliorer ce programme pour le rendre plus stable, plus facile à utiliser, à maintenir et à améliorer pour le futur</strong>.</p>
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">math</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"""</span>
<span></span>
<span class="s2">Programme de calcul des racines d'un trinôme</span>
<span class="s2">============================================</span>
<span></span>
<span class="s2">ax^2 + bx +c</span>
<span class="s2">"""</span><span class="p">)</span>
<span class="n">a</span> <span class="o">=</span> <span class="nb">float</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Entrer la valeur de a: "</span><span class="p">))</span>
<span class="n">b</span> <span class="o">=</span> <span class="nb">float</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Entrer la valeur de b: "</span><span class="p">))</span>
<span class="n">c</span> <span class="o">=</span> <span class="nb">float</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Entrer la valeur de c: "</span><span class="p">))</span>
<span></span>
<span class="c1"># Calcul du discriminant</span>
<span class="n">delta</span> <span class="o">=</span> <span class="n">b</span> <span class="o">*</span> <span class="n">b</span> <span class="o">-</span> <span class="mi">4</span> <span class="o">*</span> <span class="n">a</span> <span class="o">*</span> <span class="n">c</span><span class="p">;</span>
<span class="c1"># Affichage des solutions</span>
<span class="k">if</span> <span class="n">delta</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span> 
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Pas de solution"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">delta</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Une solution : "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Deux solutions : "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">((</span><span class="o">-</span> <span class="n">b</span> <span class="o">-</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">),</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">" et "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">((</span><span class="o">-</span> <span class="n">b</span> <span class="o">+</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
</pre></div>

<h2 id="utilisation-dune-approche-fonctionnelle-def" class="anchored">Utilisation d’une approche fonctionnelle: <code>def</code></h2>
<p>Plutôt que de placer les instructions les unes à la suite des autres sans réelle organisation, nous allons utiliser une <strong>approche fonctionnelle</strong> pour rendre ce programme plus pratique à utiliser et à tester.</p>
<p>La programmation fonctionnelle est un <a href="https://fr.wikipedia.org/wiki/Paradigme_(programmation)">paradigme de programmation</a> très apprécié notamment dans le monde universitaire, et de plus en plus utilisé par l’industrie afin d’avoir des programmes dont le <em>comportement est plus facile à prédire</em> que dans un programmation orientée objet par exemple.</p>
<p>On va placer le code dans une fonction qui prend trois arguments, les coefficients du trinôme et qui affiche les racines à l’écran(<em>il s’agit pour l’instant d’une procédure</em>).</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">racines_du_trinome</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">b</span><span class="p">,</span> <span class="n">c</span><span class="p">):</span>
<span class="kn">    import</span> <span class="nn">math</span>
<span class="c1">    # Calcul du discriminant</span>
<span class="n">    delta</span> <span class="o">=</span> <span class="n">b</span> <span class="o">*</span> <span class="n">b</span> <span class="o">-</span> <span class="mi">4</span> <span class="o">*</span> <span class="n">a</span> <span class="o">*</span> <span class="n">c</span>
<span class="c1">    # Affichage des solutions</span>
<span class="k">    if</span> <span class="n">delta</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span> 
<span class="nb">        print</span><span class="p">(</span><span class="s2">"Pas de solution"</span><span class="p">)</span>
<span class="k">    elif</span> <span class="n">delta</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">"Une solution : "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">        print</span><span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
<span class="k">    else</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">"Deux solutions : "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">        print</span><span class="p">((</span><span class="o">-</span> <span class="n">b</span> <span class="o">-</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">),</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">        print</span><span class="p">(</span><span class="s2">" et "</span><span class="p">,</span><span class="n">end</span><span class="o">=</span><span class="s2">""</span><span class="p">)</span>
<span class="nb">        print</span><span class="p">((</span><span class="o">-</span> <span class="n">b</span> <span class="o">+</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
<span class="n">racines_du_trinome</span><span class="p">(</span><span class="n">a</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">b</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="n">c</span><span class="o">=-</span><span class="mi">1</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Deux solutions : -1.0 et 1.0
</pre></div>

</div>
</div>
<h2 id="renvoi-de-valeurs-return" class="anchored">Renvoi de valeurs: <code>return</code></h2>
<p>Nous allons maintenant remplacer les <code>print</code> par des <code>return</code> pour récupérer les racines en sortie de la fonction.</p>
<p>En effet tout ce qui se passe à l’intérieur d’une fonction reste à l’intérieur de la fonction, mais par contre les <code>print()</code> sont des fonctions globales qui agissent à l’extérieur de la fonction( On parle d’effets de bords).</p>
<p>En utilisant des return, on pourra récupérer le résultat de l’algorithme de notre fonction que lorsqu’on l’appelera, et qu’on assignera éventuellemnt ces valeurs de retour à des variables(globales ou non).</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">racines_du_trinome</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">b</span><span class="p">,</span> <span class="n">c</span><span class="p">):</span>
<span class="kn">    import</span> <span class="nn">math</span>
<span class="c1">    # Calcul du discriminant</span>
<span class="n">    delta</span> <span class="o">=</span> <span class="n">b</span> <span class="o">*</span> <span class="n">b</span> <span class="o">-</span> <span class="mi">4</span> <span class="o">*</span> <span class="n">a</span> <span class="o">*</span> <span class="n">c</span>
<span class="c1">    # Affichage des solutions</span>
<span class="k">    if</span> <span class="n">delta</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span> 
<span class="k">        return</span> <span class="p">()</span>
<span class="k">    elif</span> <span class="n">delta</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
<span class="k">    else</span><span class="p">:</span>
<span class="n">        r1</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">-</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>
<span class="n">        r2</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">+</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>
<span class="k">        return</span> <span class="p">(</span><span class="n">r1</span><span class="p">,</span> <span class="n">r2</span><span class="p">)</span>
<span class="n">racines_du_trinome</span><span class="p">(</span><span class="n">a</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">b</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="n">c</span><span class="o">=-</span><span class="mi">1</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="2">
<div class="highlight"><pre><span></span>(-1.0, 1.0)
</pre></div>

</div>
</div>
<h2 id="prototypage-de-la-fonction" class="anchored">Prototypage de la fonction</h2>
<p>Pour rendre notre code compréhensible et facile à maintenir, on va écrire le prototype de la fonction comme on l’a vu dans le chapitre sur <a href="./6-fonctions">fonctions</a>.</p>
<p>On appelle cela une <a href="https://numpydoc.readthedocs.io/en/latest/format.html"><code>docstring</code></a> qui permet de comprendre comment “fonctionne” la fonction.</p>
<p>On la place sur une chaine de caractères multi-line avec trois guillemets. Elle se présente généralement en trois parties:</p>
<ol type="1">
<li>Une explication</li>
<li>Paramètres</li>
<li>Sortie(Returns en anglais)</li>
</ol>
<p>Même si Python est un lagage non typé, on précise les type des paramètres et sorties de la fonction.</p>
<p>La docstring peut alors être renvoyée en cas de besoin avec la fonction Python <code>help(nom_de_la_fonction)</code></p>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">racines_du_trinome</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">b</span><span class="p">,</span> <span class="n">c</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Renvoie les éventuelles racines d'un trinôme</span>
<span class="sd">    </span>
<span class="sd">    ax**2 + bx + c</span>
<span class="sd">    </span>
<span class="sd">    Parameters</span>
<span class="sd">    ----------</span>
<span class="sd">    a : float</span>
<span class="sd">    b : float</span>
<span class="sd">    c : float</span>
<span class="sd">    </span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    tuple</span>
<span class="sd">        tuple contenant les 0, 1 ou 2 racines du trinôme suivant le cas</span>
<span class="sd">    """</span>
<span class="kn">    import</span> <span class="nn">math</span>
<span class="c1">    # Calcul du discriminant</span>
<span class="n">    delta</span> <span class="o">=</span> <span class="n">b</span> <span class="o">*</span> <span class="n">b</span> <span class="o">-</span> <span class="mi">4</span> <span class="o">*</span> <span class="n">a</span> <span class="o">*</span> <span class="n">c</span>
<span class="c1">    # Affichage des solutions</span>
<span class="k">    if</span> <span class="n">delta</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span> 
<span class="k">        return</span> <span class="p">()</span>
<span class="k">    elif</span> <span class="n">delta</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">))</span>
<span class="k">    else</span><span class="p">:</span>
<span class="n">        r1</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">-</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>
<span class="n">        r2</span> <span class="o">=</span> <span class="p">(</span><span class="o">-</span> <span class="n">b</span> <span class="o">+</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">delta</span><span class="p">))</span> <span class="o">/</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="n">a</span><span class="p">)</span>
<span class="k">        return</span> <span class="p">(</span><span class="n">r1</span><span class="p">,</span> <span class="n">r2</span><span class="p">)</span>
<span class="n">help</span><span class="p">(</span><span class="n">racines_du_trinome</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Help on function racines_du_trinome in module __main__:
<span></span>
racines_du_trinome(a, b, c)
    Renvoie les éventuelles racines d'un trinôme
    
    ax**2 + bx + c
    
    Parameters
    ----------
    a : float
    b : float
    c : float
    
    Returns
    -------
    tuple
        tuple contenant les 0, 1 ou 2 racines du trinôme suivant le cas
</pre></div>

</div>
</div>
<h2 id="les-tests-assert" class="anchored">Les tests: <code>assert</code></h2>
<p>L’informatique consiste la plupart du temps à une <strong>chasse aux bugs</strong>, il convient donc d’essayer de les repérer le plus tôt possible à l’aide de tests.</p>
<p>On va donc pour effectuer des tests sur les valeurs renvoyées par la fonction. Pour cela on utilise des assertions <code>assert</code> qui bloquent l’éxecution du programme lorsqu’une expression renvoie <code>False</code>.</p>
<p>On va placer ces tests dans une fonction appelée <code>run_tests()</code> pour pouvoir en placer plusieurs au fur et à mesure qu’on y pense ou que l’on constate des bugs.</p>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">run_tests</span><span class="p">():</span>
<span class="c1">    # deux racines réelles</span>
<span class="k">    assert</span> <span class="n">racines_du_trinome</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="o">-</span><span class="mf">1.0</span><span class="p">,</span> <span class="mf">1.0</span><span class="p">)</span>
<span class="c1">    # une racine double</span>
<span class="k">    assert</span> <span class="n">racines_du_trinome</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="p">(</span><span class="mf">0.0</span><span class="p">)</span>
<span class="c1">    # pas de racine</span>
<span class="k">    assert</span> <span class="n">racines_du_trinome</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="p">()</span>
<span class="c1">    
    # si une assertion s'avère fausse la fonction va renvoyer une AssertionError</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Tous les tests ont été passé avec succés"</span><span class="p">)</span>
<span class="n">run_tests</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Tous les tests ont été passé avec succés
</pre></div>

</div>
</div>
<h2 id="les-bibliothèques-import" class="anchored">Les bibliothèques: <code>import</code></h2>
<p>Les bibliothéques ou <code>module</code>s permettent de <strong>rassembler et d’organiser les diverses fonctionnalités</strong> d’un programme afin de pouvoir les importer ultérieurement.</p>
<p>Elles constituent un outil important dans la mise au point de programme complexe en permettant de séparer le code en diveres parties, chacune de ces parties ayant un rôle bien spécifique et plus facile à tester.</p>
<p>De nombreuses bibliothéques sont fournies avec Python, comme par exemple les modules <code>math</code> ou <code>random</code>. On les appelle les bibilothèques standards. On en a également utilisé d’autres non fournies avec Python, mais facilement installables comme <code>pandas</code> pour le traitement de données, ou <code>matplotlib</code> pour le tracé de graphiques.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">math</span>
<span></span>
<span class="c1"># racine carré de 4</span>
<span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="mf">2.0</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">random</span>
<span></span>
<span class="c1"># nombre aléatoire entre 0 et 1</span>
<span class="n">random</span><span class="o">.</span><span class="n">random</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="mf">0.49162686623123175</span>
</pre></div>

</div>
</div>
<p>On peut accéder à la documentation directement à partir de python avec la fonction <code>help</code>, mais on préférera tout de même la documentation en ligne lorsqu’on a accès à internet.</p>
<ul>
<li>Doc Python: https://docs.python.org/3/</li>
<li>Doc javascript: https://developer.mozilla.org/fr/docs/Web/JavaScript</li>
</ul>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="n">help</span><span class="p">(</span><span class="n">math</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="n">Help</span><span class="w"> </span><span class="n">on</span><span class="w"> </span><span class="n">module</span><span class="w"> </span><span class="n">math</span><span class="p">:</span>
<span></span>
<span class="n">NAME</span>
<span class="w">    </span><span class="n">math</span>
<span></span>
<span class="n">MODULE</span><span class="w"> </span><span class="n">REFERENCE</span>
<span class="w">    </span><span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">docs</span><span class="o">.</span><span class="n">python</span><span class="o">.</span><span class="n">org</span><span class="o">/</span><span class="mf">3.10</span><span class="o">/</span><span class="n">library</span><span class="o">/</span><span class="n">math</span><span class="o">.</span><span class="n">html</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">The</span><span class="w"> </span><span class="n">following</span><span class="w"> </span><span class="n">documentation</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">automatically</span><span class="w"> </span><span class="n">generated</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">Python</span>
<span class="w">    </span><span class="n">source</span><span class="w"> </span><span class="n">files</span><span class="o">.</span><span class="w">  </span><span class="n">It</span><span class="w"> </span><span class="n">may</span><span class="w"> </span><span class="n">be</span><span class="w"> </span><span class="n">incomplete</span><span class="p">,</span><span class="w"> </span><span class="n">incorrect</span><span class="w"> </span><span class="ow">or</span><span class="w"> </span><span class="n">include</span><span class="w"> </span><span class="n">features</span><span class="w"> </span><span class="n">that</span>
<span class="w">    </span><span class="n">are</span><span class="w"> </span><span class="n">considered</span><span class="w"> </span><span class="n">implementation</span><span class="w"> </span><span class="n">detail</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">may</span><span class="w"> </span><span class="n">vary</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="n">Python</span>
<span class="w">    </span><span class="n">implementations</span><span class="o">.</span><span class="w">  </span><span class="n">When</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">doubt</span><span class="p">,</span><span class="w"> </span><span class="n">consult</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">module</span><span class="w"> </span><span class="n">reference</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">the</span>
<span class="w">    </span><span class="n">location</span><span class="w"> </span><span class="n">listed</span><span class="w"> </span><span class="n">above</span><span class="o">.</span>
<span></span>
<span class="n">DESCRIPTION</span>
<span class="w">    </span><span class="n">This</span><span class="w"> </span><span class="n">module</span><span class="w"> </span><span class="n">provides</span><span class="w"> </span><span class="n">access</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">mathematical</span><span class="w"> </span><span class="n">functions</span>
<span class="w">    </span><span class="n">defined</span><span class="w"> </span><span class="n">by</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">C</span><span class="w"> </span><span class="n">standard</span><span class="o">.</span>
<span></span>
<span class="n">FUNCTIONS</span>
<span class="w">    </span><span class="nb">acos</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arc</span><span class="w"> </span><span class="n">cosine</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">result</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="mi">0</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">pi</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">acosh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">inverse</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">cosine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">asin</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arc</span><span class="w"> </span><span class="n">sine</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">result</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="o">-</span><span class="n">pi</span><span class="o">/</span><span class="mi">2</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">pi</span><span class="o">/</span><span class="mf">2.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">asinh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">inverse</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">sine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">atan</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arc</span><span class="w"> </span><span class="n">tangent</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">result</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="o">-</span><span class="n">pi</span><span class="o">/</span><span class="mi">2</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">pi</span><span class="o">/</span><span class="mf">2.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">atan2</span><span class="p">(</span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arc</span><span class="w"> </span><span class="n">tangent</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">y</span><span class="o">/</span><span class="n">x</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Unlike</span><span class="w"> </span><span class="nb">atan</span><span class="p">(</span><span class="n">y</span><span class="o">/</span><span class="n">x</span><span class="p">),</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">signs</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">both</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">y</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">considered</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">atanh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">inverse</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">tangent</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">ceil</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">ceiling</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="n">an</span><span class="w"> </span><span class="n">Integral</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">This</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">smallest</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="o">&gt;=</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">comb</span><span class="p">(</span><span class="n">n</span><span class="p">,</span><span class="w"> </span><span class="n">k</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Number</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">ways</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">choose</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="n">items</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">n</span><span class="w"> </span><span class="n">items</span><span class="w"> </span><span class="n">without</span><span class="w"> </span><span class="n">repetition</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">without</span><span class="w"> </span><span class="n">order</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Evaluates</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">n</span><span class="o">!</span><span class="w"> </span><span class="o">/</span><span class="w"> </span><span class="p">(</span><span class="n">k</span><span class="o">!</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="p">(</span><span class="n">n</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="n">k</span><span class="p">)</span><span class="o">!</span><span class="p">)</span><span class="w"> </span><span class="n">when</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="n">n</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">evaluates</span>
<span class="w">        </span><span class="n">to</span><span class="w"> </span><span class="n">zero</span><span class="w"> </span><span class="n">when</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="n">n</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Also</span><span class="w"> </span><span class="n">called</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">binomial</span><span class="w"> </span><span class="n">coefficient</span><span class="w"> </span><span class="n">because</span><span class="w"> </span><span class="n">it</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">equivalent</span>
<span class="w">        </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">coefficient</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">k</span><span class="o">-</span><span class="n">th</span><span class="w"> </span><span class="n">term</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">polynomial</span><span class="w"> </span><span class="n">expansion</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span>
<span class="w">        </span><span class="n">expression</span><span class="w"> </span><span class="p">(</span><span class="mi">1</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="n">x</span><span class="p">)</span><span class="o">**</span><span class="n">n</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Raises</span><span class="w"> </span><span class="n">TypeError</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">either</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arguments</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="ow">not</span><span class="w"> </span><span class="n">integers</span><span class="o">.</span>
<span class="w">        </span><span class="n">Raises</span><span class="w"> </span><span class="n">ValueError</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">either</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arguments</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">negative</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">copysign</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="nb nb-Type">float</span><span class="w"> </span><span class="n">with</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">magnitude</span><span class="w"> </span><span class="p">(</span><span class="n">absolute</span><span class="w"> </span><span class="n">value</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">but</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="nb">sign</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">y</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">On</span><span class="w"> </span><span class="n">platforms</span><span class="w"> </span><span class="n">that</span><span class="w"> </span><span class="n">support</span><span class="w"> </span><span class="n">signed</span><span class="w"> </span><span class="n">zeros</span><span class="p">,</span><span class="w"> </span><span class="n">copysign</span><span class="p">(</span><span class="mf">1.0</span><span class="p">,</span><span class="w"> </span><span class="o">-</span><span class="mf">0.0</span><span class="p">)</span>
<span class="w">        </span><span class="n">returns</span><span class="w"> </span><span class="o">-</span><span class="mf">1.0</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">cos</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">cosine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">cosh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">cosine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">degrees</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Convert</span><span class="w"> </span><span class="n">angle</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">radians</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">degrees</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">dist</span><span class="p">(</span><span class="n">p</span><span class="p">,</span><span class="w"> </span><span class="n">q</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">Euclidean</span><span class="w"> </span><span class="n">distance</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="n">two</span><span class="w"> </span><span class="n">points</span><span class="w"> </span><span class="n">p</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">q</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">points</span><span class="w"> </span><span class="n">should</span><span class="w"> </span><span class="n">be</span><span class="w"> </span><span class="n">specified</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="n">sequences</span><span class="w"> </span><span class="p">(</span><span class="ow">or</span><span class="w"> </span><span class="n">iterables</span><span class="p">)</span><span class="w"> </span><span class="n">of</span>
<span class="w">        </span><span class="n">coordinates</span><span class="o">.</span><span class="w">  </span><span class="n">Both</span><span class="w"> </span><span class="n">inputs</span><span class="w"> </span><span class="n">must</span><span class="w"> </span><span class="n">have</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">same</span><span class="w"> </span><span class="n">dimension</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Roughly</span><span class="w"> </span><span class="n">equivalent</span><span class="w"> </span><span class="n">to</span><span class="p">:</span>
<span class="w">            </span><span class="nb">sqrt</span><span class="p">(</span><span class="n">sum</span><span class="p">((</span><span class="n">px</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="n">qx</span><span class="p">)</span><span class="w"> </span><span class="o">**</span><span class="w"> </span><span class="mf">2.0</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">px</span><span class="p">,</span><span class="w"> </span><span class="n">qx</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">zip</span><span class="p">(</span><span class="n">p</span><span class="p">,</span><span class="w"> </span><span class="n">q</span><span class="p">)))</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">erf</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Error</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">erfc</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Complementary</span><span class="w"> </span><span class="n">error</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">exp</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">e</span><span class="w"> </span><span class="n">raised</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">power</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">expm1</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="nb">exp</span><span class="p">(</span><span class="n">x</span><span class="p">)</span><span class="o">-</span><span class="mf">1.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">This</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">avoids</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">loss</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">precision</span><span class="w"> </span><span class="n">involved</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">direct</span><span class="w"> </span><span class="n">evaluation</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="nb">exp</span><span class="p">(</span><span class="n">x</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">small</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">fabs</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">absolute</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="nb nb-Type">float</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">factorial</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Find</span><span class="w"> </span><span class="n">x</span><span class="o">!.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Raise</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">ValueError</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">negative</span><span class="w"> </span><span class="ow">or</span><span class="w"> </span><span class="n">non</span><span class="o">-</span><span class="n">integral</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">floor</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="nb">floor</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="n">an</span><span class="w"> </span><span class="n">Integral</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">This</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">largest</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">fmod</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="nb">fmod</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">),</span><span class="w"> </span><span class="n">according</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">platform</span><span class="w"> </span><span class="n">C</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">x</span><span class="w"> </span><span class="o">%</span><span class="w"> </span><span class="n">y</span><span class="w"> </span><span class="n">may</span><span class="w"> </span><span class="n">differ</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">frexp</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">mantissa</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">exponent</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="k">as</span><span class="w"> </span><span class="n">pair</span><span class="w"> </span><span class="p">(</span><span class="n">m</span><span class="p">,</span><span class="w"> </span><span class="n">e</span><span class="p">)</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">m</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="nb nb-Type">float</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">e</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">an</span><span class="w"> </span><span class="nb nb-Type">int</span><span class="p">,</span><span class="w"> </span><span class="n">such</span><span class="w"> </span><span class="n">that</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="n">m</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="mf">2.</span><span class="o">**</span><span class="n">e</span><span class="o">.</span>
<span class="w">        </span><span class="n">If</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="mi">0</span><span class="p">,</span><span class="w"> </span><span class="n">m</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">e</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">both</span><span class="w"> </span><span class="mf">0.</span><span class="w">  </span><span class="n">Else</span><span class="w"> </span><span class="mf">0.5</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="nb">abs</span><span class="p">(</span><span class="n">m</span><span class="p">)</span><span class="w"> </span><span class="o">&lt;</span><span class="w"> </span><span class="mf">1.0</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">fsum</span><span class="p">(</span><span class="n">seq</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">an</span><span class="w"> </span><span class="n">accurate</span><span class="w"> </span><span class="n">floating</span><span class="w"> </span><span class="n">point</span><span class="w"> </span><span class="n">sum</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">values</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">iterable</span><span class="w"> </span><span class="n">seq</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Assumes</span><span class="w"> </span><span class="n">IEEE</span><span class="o">-</span><span class="mi">754</span><span class="w"> </span><span class="n">floating</span><span class="w"> </span><span class="n">point</span><span class="w"> </span><span class="n">arithmetic</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">gamma</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Gamma</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">gcd</span><span class="p">(</span><span class="o">*</span><span class="n">integers</span><span class="p">)</span>
<span class="w">        </span><span class="n">Greatest</span><span class="w"> </span><span class="n">Common</span><span class="w"> </span><span class="n">Divisor</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">hypot</span><span class="p">(</span><span class="o">...</span><span class="p">)</span>
<span class="w">        </span><span class="n">hypot</span><span class="p">(</span><span class="o">*</span><span class="n">coordinates</span><span class="p">)</span><span class="w"> </span><span class="o">-&gt;</span><span class="w"> </span><span class="n">value</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Multidimensional</span><span class="w"> </span><span class="n">Euclidean</span><span class="w"> </span><span class="n">distance</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">origin</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">point</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Roughly</span><span class="w"> </span><span class="n">equivalent</span><span class="w"> </span><span class="n">to</span><span class="p">:</span>
<span class="w">            </span><span class="nb">sqrt</span><span class="p">(</span><span class="n">sum</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">coordinates</span><span class="p">))</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">For</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">two</span><span class="w"> </span><span class="n">dimensional</span><span class="w"> </span><span class="n">point</span><span class="w"> </span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">),</span><span class="w"> </span><span class="n">gives</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">hypotenuse</span>
<span class="w">        </span><span class="n">using</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">Pythagorean</span><span class="w"> </span><span class="n">theorem</span><span class="p">:</span><span class="w">  </span><span class="nb">sqrt</span><span class="p">(</span><span class="n">x</span><span class="o">*</span><span class="n">x</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="n">y</span><span class="o">*</span><span class="n">y</span><span class="p">)</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">For</span><span class="w"> </span><span class="n">example</span><span class="p">,</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">hypotenuse</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="mi">3</span><span class="o">/</span><span class="mi">4</span><span class="o">/</span><span class="mi">5</span><span class="w"> </span><span class="n">right</span><span class="w"> </span><span class="n">triangle</span><span class="w"> </span><span class="k">is</span><span class="p">:</span>
<span class="w">        </span>
<span class="w">            </span><span class="o">&gt;&gt;&gt;</span><span class="w"> </span><span class="n">hypot</span><span class="p">(</span><span class="mf">3.0</span><span class="p">,</span><span class="w"> </span><span class="mf">4.0</span><span class="p">)</span>
<span class="w">            </span><span class="mf">5.0</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">isclose</span><span class="p">(</span><span class="n">a</span><span class="p">,</span><span class="w"> </span><span class="n">b</span><span class="p">,</span><span class="w"> </span><span class="o">*</span><span class="p">,</span><span class="w"> </span><span class="n">rel_tol</span><span class="o">=</span><span class="mf">1e-09</span><span class="p">,</span><span class="w"> </span><span class="n">abs_tol</span><span class="o">=</span><span class="mf">0.0</span><span class="p">)</span>
<span class="w">        </span><span class="n">Determine</span><span class="w"> </span><span class="n">whether</span><span class="w"> </span><span class="n">two</span><span class="w"> </span><span class="n">floating</span><span class="w"> </span><span class="n">point</span><span class="w"> </span><span class="n">numbers</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">close</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">value</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">          </span><span class="n">rel_tol</span>
<span class="w">            </span><span class="n">maximum</span><span class="w"> </span><span class="n">difference</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">being</span><span class="w"> </span><span class="n">considered</span><span class="w"> </span><span class="s2">"close"</span><span class="p">,</span><span class="w"> </span><span class="n">relative</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span>
<span class="w">            </span><span class="n">magnitude</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">input</span><span class="w"> </span><span class="n">values</span>
<span class="w">          </span><span class="n">abs_tol</span>
<span class="w">            </span><span class="n">maximum</span><span class="w"> </span><span class="n">difference</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">being</span><span class="w"> </span><span class="n">considered</span><span class="w"> </span><span class="s2">"close"</span><span class="p">,</span><span class="w"> </span><span class="n">regardless</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span>
<span class="w">            </span><span class="n">magnitude</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">input</span><span class="w"> </span><span class="n">values</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">True</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">close</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">b</span><span class="p">,</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">False</span><span class="w"> </span><span class="n">otherwise</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">For</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">values</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">be</span><span class="w"> </span><span class="n">considered</span><span class="w"> </span><span class="n">close</span><span class="p">,</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">difference</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="n">them</span>
<span class="w">        </span><span class="n">must</span><span class="w"> </span><span class="n">be</span><span class="w"> </span><span class="n">smaller</span><span class="w"> </span><span class="n">than</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">least</span><span class="w"> </span><span class="n">one</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">tolerances</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="o">-</span><span class="n">inf</span><span class="p">,</span><span class="w"> </span><span class="n">inf</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">NaN</span><span class="w"> </span><span class="n">behave</span><span class="w"> </span><span class="n">similarly</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">IEEE</span><span class="w"> </span><span class="mi">754</span><span class="w"> </span><span class="n">Standard</span><span class="o">.</span><span class="w">  </span><span class="n">That</span>
<span class="w">        </span><span class="k">is</span><span class="p">,</span><span class="w"> </span><span class="n">NaN</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="ow">not</span><span class="w"> </span><span class="n">close</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">anything</span><span class="p">,</span><span class="w"> </span><span class="n">even</span><span class="w"> </span><span class="n">itself</span><span class="o">.</span><span class="w">  </span><span class="n">inf</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="o">-</span><span class="n">inf</span><span class="w"> </span><span class="n">are</span>
<span class="w">        </span><span class="n">only</span><span class="w"> </span><span class="n">close</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">themselves</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">isfinite</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">True</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">neither</span><span class="w"> </span><span class="n">an</span><span class="w"> </span><span class="n">infinity</span><span class="w"> </span><span class="n">nor</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">NaN</span><span class="p">,</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">False</span><span class="w"> </span><span class="n">otherwise</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">isinf</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">True</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">positive</span><span class="w"> </span><span class="ow">or</span><span class="w"> </span><span class="n">negative</span><span class="w"> </span><span class="n">infinity</span><span class="p">,</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">False</span><span class="w"> </span><span class="n">otherwise</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">isnan</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">True</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">NaN</span><span class="w"> </span><span class="p">(</span><span class="ow">not</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">number</span><span class="p">),</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">False</span><span class="w"> </span><span class="n">otherwise</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">isqrt</span><span class="p">(</span><span class="n">n</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="n">part</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">square</span><span class="w"> </span><span class="n">root</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">input</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">lcm</span><span class="p">(</span><span class="o">*</span><span class="n">integers</span><span class="p">)</span>
<span class="w">        </span><span class="n">Least</span><span class="w"> </span><span class="n">Common</span><span class="w"> </span><span class="n">Multiple</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">ldexp</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">i</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="o">*</span><span class="w"> </span><span class="p">(</span><span class="mi">2</span><span class="o">**</span><span class="n">i</span><span class="p">)</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">This</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">essentially</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">inverse</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">frexp</span><span class="p">()</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">lgamma</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Natural</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">absolute</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">Gamma</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">at</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">log</span><span class="p">(</span><span class="o">...</span><span class="p">)</span>
<span class="w">        </span><span class="nb">log</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="p">[</span><span class="n">base</span><span class="o">=</span><span class="n">math</span><span class="o">.</span><span class="n">e</span><span class="p">])</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">given</span><span class="w"> </span><span class="n">base</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">If</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">base</span><span class="w"> </span><span class="ow">not</span><span class="w"> </span><span class="n">specified</span><span class="p">,</span><span class="w"> </span><span class="n">returns</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">natural</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="p">(</span><span class="n">base</span><span class="w"> </span><span class="n">e</span><span class="p">)</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">log10</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">base</span><span class="w"> </span><span class="mi">10</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">log1p</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">natural</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="mi">1</span><span class="o">+</span><span class="n">x</span><span class="w"> </span><span class="p">(</span><span class="n">base</span><span class="w"> </span><span class="n">e</span><span class="p">)</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">result</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">computed</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">a</span><span class="w"> </span><span class="n">way</span><span class="w"> </span><span class="n">which</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">accurate</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">near</span><span class="w"> </span><span class="n">zero</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">log2</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">base</span><span class="w"> </span><span class="mi">2</span><span class="w"> </span><span class="n">logarithm</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">modf</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">fractional</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="n">parts</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Both</span><span class="w"> </span><span class="n">results</span><span class="w"> </span><span class="n">carry</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="nb">sign</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">floats</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">nextafter</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">next</span><span class="w"> </span><span class="n">floating</span><span class="o">-</span><span class="n">point</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">after</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">towards</span><span class="w"> </span><span class="n">y</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">perm</span><span class="p">(</span><span class="n">n</span><span class="p">,</span><span class="w"> </span><span class="n">k</span><span class="o">=</span><span class="n">None</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Number</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">ways</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">choose</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="n">items</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">n</span><span class="w"> </span><span class="n">items</span><span class="w"> </span><span class="n">without</span><span class="w"> </span><span class="n">repetition</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">with</span><span class="w"> </span><span class="n">order</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Evaluates</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">n</span><span class="o">!</span><span class="w"> </span><span class="o">/</span><span class="w"> </span><span class="p">(</span><span class="n">n</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="n">k</span><span class="p">)</span><span class="o">!</span><span class="w"> </span><span class="n">when</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="o">&lt;=</span><span class="w"> </span><span class="n">n</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">evaluates</span>
<span class="w">        </span><span class="n">to</span><span class="w"> </span><span class="n">zero</span><span class="w"> </span><span class="n">when</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="o">&gt;</span><span class="w"> </span><span class="n">n</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">If</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="ow">not</span><span class="w"> </span><span class="n">specified</span><span class="w"> </span><span class="ow">or</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">None</span><span class="p">,</span><span class="w"> </span><span class="n">then</span><span class="w"> </span><span class="n">k</span><span class="w"> </span><span class="n">defaults</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">n</span>
<span class="w">        </span><span class="ow">and</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="n">returns</span><span class="w"> </span><span class="n">n</span><span class="o">!.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Raises</span><span class="w"> </span><span class="n">TypeError</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">either</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arguments</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="ow">not</span><span class="w"> </span><span class="n">integers</span><span class="o">.</span>
<span class="w">        </span><span class="n">Raises</span><span class="w"> </span><span class="n">ValueError</span><span class="w"> </span><span class="k">if</span><span class="w"> </span><span class="n">either</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">arguments</span><span class="w"> </span><span class="n">are</span><span class="w"> </span><span class="n">negative</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">pow</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">x</span><span class="o">**</span><span class="n">y</span><span class="w"> </span><span class="p">(</span><span class="n">x</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">power</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">y</span><span class="p">)</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">prod</span><span class="p">(</span><span class="n">iterable</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">,</span><span class="w"> </span><span class="o">*</span><span class="p">,</span><span class="w"> </span><span class="n">start</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
<span class="w">        </span><span class="n">Calculate</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">product</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">all</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">elements</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">input</span><span class="w"> </span><span class="n">iterable</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">The</span><span class="w"> </span><span class="n">default</span><span class="w"> </span><span class="n">start</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">product</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="mf">1.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">When</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">iterable</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">empty</span><span class="p">,</span><span class="w"> </span><span class="k">return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">start</span><span class="w"> </span><span class="n">value</span><span class="o">.</span><span class="w">  </span><span class="n">This</span><span class="w"> </span><span class="n">function</span><span class="w"> </span><span class="k">is</span>
<span class="w">        </span><span class="n">intended</span><span class="w"> </span><span class="n">specifically</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">use</span><span class="w"> </span><span class="n">with</span><span class="w"> </span><span class="n">numeric</span><span class="w"> </span><span class="n">values</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">may</span><span class="w"> </span><span class="n">reject</span>
<span class="w">        </span><span class="n">non</span><span class="o">-</span><span class="n">numeric</span><span class="w"> </span><span class="n">types</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">radians</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Convert</span><span class="w"> </span><span class="n">angle</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">from</span><span class="w"> </span><span class="n">degrees</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">radians</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">remainder</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Difference</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="ow">and</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">closest</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="n">multiple</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">y</span><span class="o">.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="n">n</span><span class="o">*</span><span class="n">y</span><span class="w"> </span><span class="n">where</span><span class="w"> </span><span class="n">n</span><span class="o">*</span><span class="n">y</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">closest</span><span class="w"> </span><span class="n">integer</span><span class="w"> </span><span class="n">multiple</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">y</span><span class="o">.</span>
<span class="w">        </span><span class="n">In</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">case</span><span class="w"> </span><span class="n">where</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">exactly</span><span class="w"> </span><span class="n">halfway</span><span class="w"> </span><span class="n">between</span><span class="w"> </span><span class="n">two</span><span class="w"> </span><span class="n">multiples</span><span class="w"> </span><span class="n">of</span>
<span class="w">        </span><span class="n">y</span><span class="p">,</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">nearest</span><span class="w"> </span><span class="n">even</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">n</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">used</span><span class="o">.</span><span class="w"> </span><span class="n">The</span><span class="w"> </span><span class="n">result</span><span class="w"> </span><span class="k">is</span><span class="w"> </span><span class="n">always</span><span class="w"> </span><span class="n">exact</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">sin</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">sine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">sinh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">sine</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">sqrt</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">square</span><span class="w"> </span><span class="n">root</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">tan</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">tangent</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="p">(</span><span class="n">measured</span><span class="w"> </span><span class="ow">in</span><span class="w"> </span><span class="n">radians</span><span class="p">)</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="nb">tanh</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">hyperbolic</span><span class="w"> </span><span class="n">tangent</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">trunc</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Truncates</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">Real</span><span class="w"> </span><span class="n">x</span><span class="w"> </span><span class="n">to</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">nearest</span><span class="w"> </span><span class="n">Integral</span><span class="w"> </span><span class="n">toward</span><span class="w"> </span><span class="mf">0.</span>
<span class="w">        </span>
<span class="w">        </span><span class="n">Uses</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">__trunc__</span><span class="w"> </span><span class="n">magic</span><span class="w"> </span><span class="n">method</span><span class="o">.</span>
<span class="w">    </span>
<span class="w">    </span><span class="n">ulp</span><span class="p">(</span><span class="n">x</span><span class="p">,</span><span class="w"> </span><span class="o">/</span><span class="p">)</span>
<span class="w">        </span><span class="n">Return</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">value</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="n">least</span><span class="w"> </span><span class="n">significant</span><span class="w"> </span><span class="n">bit</span><span class="w"> </span><span class="n">of</span><span class="w"> </span><span class="n">the</span><span class="w"> </span><span class="nb nb-Type">float</span><span class="w"> </span><span class="n">x</span><span class="o">.</span>
<span></span>
<span class="n">DATA</span>
<span class="w">    </span><span class="n">e</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">2.718281828459045</span>
<span class="w">    </span><span class="n">inf</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="n">inf</span>
<span class="w">    </span><span class="n">nan</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="n">nan</span>
<span class="w">    </span><span class="n">pi</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">3.141592653589793</span>
<span class="w">    </span><span class="n">tau</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">6.283185307179586</span>
<span></span>
<span class="n">FILE</span>
<span class="w">    </span><span class="o">/</span><span class="n">usr</span><span class="o">/</span><span class="n">lib</span><span class="o">/</span><span class="n">python3</span><span class="o">.</span><span class="mi">10</span><span class="o">/</span><span class="n">lib</span><span class="o">-</span><span class="n">dynload</span><span class="o">/</span><span class="n">math</span><span class="o">.</span><span class="n">cpython</span><span class="o">-</span><span class="mi">310</span><span class="o">-</span><span class="n">x86_64</span><span class="o">-</span><span class="n">linux</span><span class="o">-</span><span class="n">gnu</span><span class="o">.</span><span class="n">so</span>
</pre></div>

</div>
</div>
<h2 id="bibliothèques-tierces" class="anchored">Bibliothèques tierces</h2>
<p>Le succés d’un langage viendra souvent des bibliothèques tiers qui seront développées autour de lui, on télécharge aujourd’hui les bibliotgèques open-source directement sur internet.</p>
<ul>
<li>modules Python: https://pypi.org/</li>
<li>modules javascript: https://www.npmjs.com/</li>
</ul>
<p>En effet nous sommes souvent ammenés à réaliser le même type de tâches pour concevoir notre programme, et il n’est pas nécessaire de repartir de zéro à chaque fois.</p>

