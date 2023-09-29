---
tags: ["bug", "débogage"]
tocHTML: '<ul><li><a href="#spécification-et-tests" data-localhref="true">Spécification et tests</a></li><li><a href="#gestion-des-bugs" data-localhref="true">Gestion des bugs</a></li><ul><li><a href="#erreurs-les-plus-courantes-en-python" data-localhref="true">Erreurs les plus courantes en Python</a></li><li><a href="#gestion-des-exceptions-avec-try-...-except..." data-localhref="true">Gestion des exceptions avec <code>try: ... except...</code></a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>Contenus
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
<td><p>Mise au point des programmes.</p>
<p>Gestion des bugs.</p></td>
<td>Dans la pratique de la programmation, savoir répondre aux causes typiques de bugs : problèmes liés au typage, effets de bord non désirés, débordements dans les tableaux, instruction conditionnelle non exhaustive, choix des inégalités, comparaisons et calculs entre flottants, mauvais nommage des variables, etc.</td>
<td><p>On prolonge le travail entrepris en classe de première sur l’utilisation de la spécification, des assertions, de la documentation des programmes et de la construction de jeux de tests.</p>
<p>Les élèves apprennent progressivement à anticiper leurs erreurs.</p></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<blockquote class="blockquote">
<p>La mise au point du programme doit permettre au programme de répondre à une spécification, durant cette phase, le programmeur se doit de savoir répondre aux causes typiques de bugs.</p>
</blockquote>
<h2 id="spécification-et-tests" class="anchored">Spécification et tests</h2>
<p>Durant la phase de conception d’un programme, on commence par écrire la spécification du programme et écrire des jeux de tests pour valider le fonctionnement du programme.</p>
<p>La spécification décrit les entrées et sorties du programme, ainsi que leurs types, ce que l’on appelle en anglais l’API_(Application Programming Interface)_ ou interface de programmation applicative en français(peu courant).</p>
<p>Les tests vérifient que les sorties du programme sont conformes à ce que l’on attend.</p>
<div class="example">
<p>Voici une fonction avec sa spécification.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">est_pair</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Indique si un nombre est pair ou non</span>
<span></span>
<span class="sd">    Paramètres</span>
<span class="sd">    ----------</span>
<span class="sd">    n: int</span>
<span></span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    bool</span>
<span class="sd">        True si n est pair, False sinon</span>
<span class="sd">    """</span>
<span class="k">    if</span> <span class="n">n</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">True</span>
<span class="k">    else</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">False</span>
</pre></div>

<p>Ou plus succinctement avec les annotations de type:</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">est_pair</span><span class="p">(</span><span class="n">n</span><span class="p">:</span> <span class="nb">int</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span>
<span class="s2">    "Indique si un nombre est pair ou non"</span>
<span class="k">    if</span> <span class="n">n</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">True</span>
<span class="k">    else</span><span class="p">:</span>
<span class="k">        return</span> <span class="kc">False</span>
</pre></div>

<p>Maintenant un ensemble de tests:</p>
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">True</span>
<span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">1381635162</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">True</span>
<span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="o">-</span><span class="mi">3565454165461</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="c1"># le is True est redondant</span>
<span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
<span class="c1"># le is False peut être écrit</span>
<span class="k">assert</span> <span class="ow">not</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>
</pre></div>

<p>On peut également ajouter un message en cas d’erreur sur un test en le séparant par une virgule.</p>
<div class="highlight"><pre><span></span><span class="k">assert</span> <span class="n">est_pair</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">True</span><span class="p">,</span> <span class="s2">"Le nombre deux n'a pas été reconnu comme pair"</span>
</pre></div>

<p>Ainsi si la fonction présentait un jour une erreur, le programme s’arrêterait en levant l’exception avec le message d’explication.</p>
<div class="highlight"><pre><span></span>Traceback (most recent call last):
  File "&lt;stdin&gt;", line 1, in &lt;module&gt;
AssertionError: Le nombre deux n'a pas été reconnu comme pair
</pre></div>

</div>
<h2 id="gestion-des-bugs" class="anchored">Gestion des bugs</h2>
<p>Lors de l’écriture de code Python, vous ferez fréquemment des erreurs, qui vous serons «gentiment» rappelées par l’interpréteur Python à l’exécution du code.</p>
<h3 id="erreurs-les-plus-courantes-en-python" class="anchored">Erreurs les plus courantes en Python</h3>
<p>En fonction des erreurs rencontrées, Python affiche des erreurs spécifiques qui vous aident à comprendre quel est le problème dans votre programme.</p>
<p>Voici quelques erreurs courantes que vous devez apprendre à reconnaitre parmi les <a href="https://docs.python.org/fr/3/library/exceptions.html#exception-hierarchy">nombreuses exceptions</a> de Python.</p>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>Type d'erreur
</pre></div>
</th>
<th>Objet Python</th>
<th><div class="highlight"><pre><span></span>                           Erreurs courantes
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>            Exemple
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Erreur de syntaxe</td>
<td><code>SyntaxError</code></td>
<td>Erreur de parenthèse, <code>:</code> manquant avant un bloc d’instruction….</td>
<td><code>len([1,2,3))</code></td>
</tr>
<tr class="even">
<td>Erreurs d’indexation</td>
<td><code>IndexError</code></td>
<td>Accès à un index non présent dans une liste. Accès à un index non présent dans une liste, ou un tuple, str…</td>
<td><code>[12,15,14][4]</code></td>
</tr>
<tr class="odd">
<td>Erreurs de nom</td>
<td><code>NameError</code></td>
<td>Nom de fonction ou de variable mal orthographié.</td>
<td><code>print(Bonjour)</code> ou <code>prout("Bonjour")</code></td>
</tr>
<tr class="even">
<td>Erreurs d’indentation</td>
<td><code>IndentationError</code></td>
<td>Indentation oubliée, ou trop grande, les blocs sont alors mal délimités.</td>
<td></td>
</tr>
<tr class="odd">
<td>Erreurs de type</td>
<td><code>TypeError</code></td>
<td>Opération impossible entre deux types(str - int). Conversion de type impossible.</td>
<td><code>"3" * "5"</code></td>
</tr>
</tbody>
</table>
<p>Parfois ces erreurs nécessitent de modifier le code pour corriger le «bug».</p>
<p>D’autres fois ces erreurs nécessitent d’être gérées sans arrêter complétement le programme.</p>
<h3 id="gestion-des-exceptions-avec-try-...-except..." class="anchored">Gestion des exceptions avec <code>try: ... except...</code></h3>
<p>Prenons l’exemple de la gestion d’une entrée utilisateur. Vous demandez l’âge d’une personne et vous attendez un entier pour vérifier son accès.</p>
<p>Il faut lui reposer la question jusqu’à ce qu’il rentre une valeur conforme à nos attentes.</p>
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous? "</span><span class="p">))</span>
<span class="k">if</span> <span class="n">age</span> <span class="o">&gt;=</span> <span class="mi">13</span><span class="p">:</span>
<span class="nb">  print</span><span class="p">(</span><span class="s2">"Vous pouvez vous inscrire"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">  print</span><span class="p">(</span><span class="s2">"Les réseaux sociaux sont interdits aux moins de 13 ans."</span><span class="p">)</span>  
</pre></div>

<p>Si l’utilisateur répond <code>"seize ans"</code>, vous obtenez le message d’erreur suivant:</p>
<div class="highlight"><pre><span></span><span class="n">ValueError</span><span class="o">:</span><span class="w"> </span><span class="n">invalid</span><span class="w"> </span><span class="n">literal</span><span class="w"> </span><span class="k">for</span><span class="w"> </span><span class="n">int</span><span class="o">()</span><span class="w"> </span><span class="k">with</span><span class="w"> </span><span class="n">base</span><span class="w"> </span><span class="mi">10</span><span class="o">:</span><span class="w"> </span><span class="s1">'seize ans'</span>
</pre></div>

<p>On va gérer cette erreur avec un <code>try</code>.</p>
<div class="highlight"><pre><span></span><span class="k">try</span><span class="p">:</span>
<span class="n">  age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous? "</span><span class="p">))</span>
<span class="k">except</span> <span class="ne">ValueError</span><span class="p">:</span>
<span class="nb">  print</span><span class="p">(</span><span class="s2">"Veuillez entrer votre âge sous forme de chiffres"</span><span class="p">)</span>
</pre></div>

<p>Le programme ne renvoie plus d’erreurs et ne s’arrête pas. On peut continuer à demander l’âge sans relancer le programme.</p>
<div class="highlight"><pre><span></span>Quel âge avez-vous? treize ans
Veuillez entrer votre âge sous forme de chiffres
</pre></div>

<p>Un <code>while</code> peut permettre de reposer la question en cas de besoin.</p>
<div class="highlight"><pre><span></span><span class="n">age</span> <span class="o">=</span> <span class="kc">None</span>
<span class="k">while</span> <span class="ow">not</span> <span class="n">age</span><span class="p">:</span> 
<span class="k">    try</span><span class="p">:</span>
<span class="n">      age</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Quel âge avez-vous? "</span><span class="p">))</span>
<span class="k">    except</span> <span class="ne">ValueError</span><span class="p">:</span>
<span class="nb">      print</span><span class="p">(</span><span class="s2">"Veuillez entrer votre âge sous forme de chiffres"</span><span class="p">)</span>
<span></span>
<span class="c1"># on est sures d'avoir un age entier ici</span>
<span class="k">if</span> <span class="n">age</span> <span class="o">&gt;=</span> <span class="mi">13</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Vous pouvez vous inscrire"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Les réseaux sociaux sont interdits aux moins de 13 ans."</span><span class="p">)</span>
</pre></div>

<p>Voici un exemple d’interaction avec ce programme.</p>
<div class="highlight"><pre><span></span>Quel âge avez-vous?  treize ans
Veuillez entrer votre âge sous forme de chiffres
Quel âge avez-vous?  13.5
Veuillez entrer votre âge sous forme de chiffres
Quel âge avez-vous?  13
Vous pouvez vous inscrire
</pre></div>

<details class="plus"><summary>&nbsp;</summary>
<p>Attention à gérer les exceptions avec précaution ou vous risquez d’introduire des bugs qui n’arrêteront pas le programme et resteront donc «invisibles».</p>
</details>

