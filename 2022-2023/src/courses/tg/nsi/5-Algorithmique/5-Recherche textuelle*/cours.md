---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#algorithme-naïf" data-localhref="true">Algorithme naïf</a></li><li><a href="#lalgorithme-de-boyer-moore-version-simplifiée-de-horspool" data-localhref="true">L’algorithme de Boyer-Moore : version simplifiée de Horspool</a></li><ul><li><a href="#déroulement-de-lalgorithme" data-localhref="true">Déroulement de l’algorithme</a></li><li><a href="#implémentation-en-python" data-localhref="true">Implémentation en Python</a></li></ul></ul>'
---





<p><strong>Ce chapitre ne pourra pas faire l’objet d’une évaluation lors de l’épreuve terminale écrite et pratique de l’enseignement de spécialité.</strong> <a href="https://www.education.gouv.fr/bo/21/Hebdo30/MENE2121274N.htm" class="cite-source">BO MENE2121274N</a></p>
<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>  Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span> Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>       Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Recherche textuelle.</td>
<td>Étudier l’algorithme de Boyer- Moore pour la recherche d’un motif dans un texte.</td>
<td><p>L’intérêt du prétraitement du motif est mis en avant.</p>
<p>L’étude du coût, difficile, ne peut être exigée.</p></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<blockquote class="blockquote">
<p>La recherche d’une sous-chaine a des applications importantes en informatiques, par exemple dans les moteurs de recherche. Nous commencerons par une application naïve puis nous verrons qu’il est bien plus efficace de faire la recherche en sens inverse en partant du dernier caractère du mot pour ne pas tester toutes les positions.</p>
</blockquote>
<h2 id="algorithme-naïf" class="anchored">Algorithme naïf</h2>
<p>Nous allons appliquer une méthode itérative brute pour rechercher une sous-chaine dans une chaine de caractères.</p>
<p>Nous allons avancer dans le texte caractère par caractère, puis si le caractère considéré correspond au premier caractère du mot, nous comparerons les caractères suivants à ceux du mot. si la recherche s’avère fructueuse on renvoie <code>True</code>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">recherche_mot</span><span class="p">(</span><span class="n">texte</span><span class="p">,</span> <span class="n">mot</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Recherche un mot dans un texte</span>
<span></span>
<span class="sd">    Arguments</span>
<span class="sd">    ---------</span>
<span class="sd">    texte: str</span>
<span class="sd">        le texte dans lequel on effectue la recherche</span>
<span class="sd">    mot: str</span>
<span class="sd">        le mot recherché</span>
<span></span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    bool</span>
<span class="sd">        renvoie True si le mot est trouvé</span>
<span class="sd">    """</span>
<span class="n">    N</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">texte</span><span class="p">)</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">mot</span><span class="p">)</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">N</span><span class="o">-</span><span class="n">n</span><span class="o">+</span><span class="mi">1</span><span class="p">):</span>
<span class="n">        trouvé</span> <span class="o">=</span> <span class="kc">True</span>
<span class="k">        while</span> <span class="n">recherche</span> <span class="ow">and</span> <span class="n">k</span> <span class="o">&lt;</span> <span class="n">n</span><span class="p">:</span>
<span class="k">            if</span> <span class="n">mot</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">!=</span> <span class="n">texte</span><span class="p">[</span><span class="n">i</span><span class="o">+</span><span class="n">k</span><span class="p">]</span>
<span class="n">                recherche</span> <span class="o">=</span> <span class="kc">False</span>
<span class="n">            k</span> <span class="o">+=</span> <span class="mi">1</span>
<span class="k">        if</span> <span class="n">recherche</span><span class="p">:</span>
<span class="k">            return</span> <span class="kc">True</span>
<span class="k">    return</span> <span class="kc">False</span>
</pre></div>

<p>L’exécution est relativement lente, la fonction doit tester <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">N-n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
positions dans <code>texte</code> et pour chacune effectuer jusqu’à <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">N-n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
comparaisons, soit jusqu’à <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy="false">)</mo><mo>×</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">(N-n)\times n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
.</p>
<p>La complexité de cet algorithme est dans le pire des cas <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy="false">)</mo><mo>×</mo><mi>n</mi><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">O\left( (N-n) \times n \right )</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;">(</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">n</span><span class="mclose delimcenter" style="top:0em;">)</span></span></span></span></span>
, c’est une complexité quadratique <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mrow><mo fence="true">(</mo><msup><mi>N</mi><mn>2</mn></msup><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">O\left( N^2 \right )</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2em;vertical-align:-0.35em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size1">(</span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size1">)</span></span></span></span></span></span>
car souvent <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>&gt;</mo><mo>&gt;</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">N &gt;&gt; n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
.</p>
<p>Nous allons voir qu’il est beaucoup plus efficace de faire la recherche à l’envers à partir de la fin du mot.</p>
<h2 id="lalgorithme-de-boyer-moore-version-simplifiée-de-horspool" class="anchored">L’algorithme de Boyer-Moore : version simplifiée de Horspool</h2>
<p>Nous allons étudier une version simplifiée du meilleur algorithme connu : l’algorithme de Boyer-Moore qui a été proposé par Nigel Horspool.</p>
<p>Cet algorithme repose sur deux idées :</p>
<ol type="1">
<li>On compare le mot de droite à gauche à partir de sa dernière lettre.</li>
<li>On n’avance pas dans le texte caractère par caractère, mais on utilise un décalage dépendant de la dernière comparaison effectuée.</li>
</ol>
<h3 id="déroulement-de-lalgorithme" class="anchored">Déroulement de l’algorithme</h3>
<p>Nous considérons ici la recherche du motif <code>mot = 'dab'</code> dans le texte <code>texte = 'abracadabra'</code>.</p>
<p>On commence la recherche à l’index 2 :</p>
<div class="highlight"><pre><span></span>abracadabra
dab
</pre></div>

<p>Il n’y a pas de correspondance&nbsp;à la fin du mot : <code>'r' != 'b'</code>, donc on avance, mais de combien de caractères avance-t-on. Pour le décider, on utilise le fait que le caractère <code>'r'</code> n’apparait pas dans le mot cherché, donc on peut avancer de <code>n = len(mot) = 3</code> caractères sans crainte de rater le mot.</p>
<p>On recherche donc à l’indice 2 + 3 = 5 :</p>
<div class="highlight"><pre><span></span>abracadabra
   dab
</pre></div>

<p>Il n’y a pas de correspondance&nbsp;à la fin du mot : <code>'a' != 'b'</code>, donc on avance, cependant, cette fois, comme le caractère <code>'a'</code> apparait pas dans le mot cherché en avant-dernière position, on ne peut avancer que de une case pour faire une comparaison en alignant les <code>'a'</code>.</p>
<p>On recherche donc à l’indice 5 + 1 = 6 :</p>
<div class="highlight"><pre><span></span>abracadabra
    dab
</pre></div>

<p>Il n’y a pas de correspondance&nbsp;à la fin du mot : <code>'d' != 'b'</code>, donc on avance, cependant, cette fois, comme le caractère <code>'d'</code> apparait dans le mot cherché en avant-avant-dernière position(<em>première position, mais on doit lire à l’envers !</em>), on avance de deux cases pour faire une comparaison en alignant les <code>'d'</code>.</p>
<p>On recherche donc à l’indice 6 + 2 = 8 :</p>
<div class="highlight"><pre><span></span>abracadabra
      dab
</pre></div>

<p>Maintenant lorsqu’on effectue les comparaisons à l’envers : les <code>'b'</code>, puis les <code>'a'</code>, puis les <code>'d'</code> correspondent. On a trouvé le mot on renvoie <code>VRAI</code>.</p>
<h3 id="implémentation-en-python" class="anchored">Implémentation en Python</h3>
<p>Pour implémenter efficacement cet algorithme, on va passer par un pré-traitement du nom pour facilement accéder au décalage à effectuer. On utilise un dictionnaire pour cela.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">pre_traitement</span><span class="p">(</span><span class="n">mot</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Renvoie un dictionnaire avec pour clé la lettre et pour valeur le décalage</span>
<span></span>
<span class="sd">    Arguments</span>
<span class="sd">    ---------</span>
<span class="sd">    mot: str</span>
<span class="sd">    </span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    dict</span>
<span class="sd">    """</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">mot</span><span class="p">)</span>
<span class="n">    décalages</span> <span class="o">=</span> <span class="p">{}</span>
<span class="c1">    # Il n'est pas nécéssaire d'inclure la dernière lettre</span>
<span class="k">    for</span> <span class="n">i</span><span class="p">,</span> <span class="n">letter</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">(</span><span class="n">mot</span><span class="p">[:</span><span class="o">-</span><span class="mi">1</span><span class="p">]):</span>
<span class="n">        décalages</span><span class="p">[</span><span class="n">letter</span><span class="p">]</span> <span class="o">=</span> <span class="n">n</span> <span class="o">-</span> <span class="n">i</span> <span class="o">-</span><span class="mi">1</span>
<span class="k">    return</span> <span class="n">décalages</span>
<span></span>
<span class="c1"># tests</span>
<span class="k">assert</span> <span class="n">pre_traitement</span><span class="p">(</span><span class="s2">"dab"</span><span class="p">)</span> <span class="o">==</span> <span class="p">{</span><span class="s1">'d'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'a'</span><span class="p">:</span> <span class="mi">1</span><span class="p">}</span>
<span class="k">assert</span> <span class="n">pre_traitement</span><span class="p">(</span><span class="s2">"maman"</span><span class="p">)</span> <span class="o">==</span> <span class="p">{</span><span class="s1">'m'</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span> <span class="s1">'a'</span><span class="p">:</span> <span class="mi">1</span><span class="p">}</span>
</pre></div>

<p>Maintenant la fonction de recherche :</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">recherche_mot_boyer</span><span class="p">(</span><span class="n">texte</span><span class="p">,</span> <span class="n">mot</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Recherche un mot dans un texte avec l'algo de boyer-moore</span>
<span></span>
<span class="sd">    Arguments</span>
<span class="sd">    ---------</span>
<span class="sd">    texte: str</span>
<span class="sd">        le texte dans lequel on effectue la recherche</span>
<span class="sd">    mot: str</span>
<span class="sd">        le mot recherché</span>
<span></span>
<span class="sd">    Returns</span>
<span class="sd">    -------</span>
<span class="sd">    bool</span>
<span class="sd">        renvoie True si le mot est trouvé</span>
<span class="sd">    """</span>
<span class="n">    N</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">texte</span><span class="p">)</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">mot</span><span class="p">)</span>
<span class="c1">    
    # création de notre dictionnaire de décalages</span>
<span class="n">    décalages</span> <span class="o">=</span> <span class="n">pre_traitement</span><span class="p">(</span><span class="n">mot</span><span class="p">)</span>
<span class="c1">    
    # on commence à la fin du mot</span>
<span class="n">    i</span> <span class="o">=</span> <span class="n">n</span> <span class="o">-</span> <span class="mi">1</span>
<span class="k">    while</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">N</span><span class="p">:</span>
<span class="n">        lettre</span> <span class="o">=</span> <span class="n">texte</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="k">        if</span> <span class="n">lettre</span> <span class="o">==</span> <span class="n">mot</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]:</span>
<span class="c1">            # On vérifie que le mot est là avec un slice sur texte</span>
<span class="c1">            # On pourrait faire un while</span>
<span class="k">            if</span> <span class="n">texte</span><span class="p">[</span><span class="n">i</span><span class="o">-</span><span class="n">n</span><span class="o">+</span><span class="mi">1</span><span class="p">:</span><span class="n">i</span><span class="o">+</span><span class="mi">1</span><span class="p">]</span> <span class="o">==</span> <span class="n">mot</span><span class="p">:</span>
<span class="k">                return</span> <span class="kc">True</span>
<span class="c1">        # on décale</span>
<span class="k">        if</span> <span class="n">lettre</span> <span class="ow">in</span> <span class="n">décalages</span><span class="o">.</span><span class="n">keys</span><span class="p">():</span>
<span class="n">            i</span> <span class="o">+=</span> <span class="n">décalages</span><span class="p">[</span><span class="n">lettre</span><span class="p">]</span>
<span class="k">        else</span><span class="p">:</span>
<span class="n">            i</span> <span class="o">+=</span> <span class="n">n</span>
<span class="k">        
    return</span> <span class="kc">False</span>
<span></span>
<span class="c1"># Quelques tests</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'abracadabra'</span><span class="p">,</span> <span class="s1">'dab'</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'abracadabra'</span><span class="p">,</span> <span class="s1">'abra'</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'abracadabra'</span><span class="p">,</span> <span class="s1">'obra'</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'abracadabra'</span><span class="p">,</span> <span class="s1">'bara'</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'maman est là'</span><span class="p">,</span> <span class="s1">'maman'</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'bonjour maman'</span><span class="p">,</span> <span class="s1">'maman'</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">recherche_mot_boyer</span><span class="p">(</span><span class="s1">'bonjour maman'</span><span class="p">,</span> <span class="s1">'papa'</span><span class="p">)</span> <span class="ow">is</span> <span class="kc">False</span>
</pre></div>

<details class="appli"><summary>&nbsp;</summary>
<p>Copier et tester ce code dans votre environnement, puis :</p>
<ol type="1">
<li>Ajouter des tests avec des cas limites.</li>
<li>Remplacer <code>if texte[i-n+1:i+1] == mot:return True</code> par une boucle <code>while</code>, qui lit les caractères de droite à gauche et retourne <code>True</code> si tous les caractères de <code>texte</code> et de <code>mot</code> correspondent à la position <code>i</code> considéré.</li>
</ol>
</details>

<div class="ref">
<ul>
<li><a href="https://editions.lavoisier.fr/etudes-superieures/informatique-mp-pc-pt-psi/preaux/tec-et-doc/le-tout-en-un/livre/9782743022976">Informatique MP-PC-PT-PSI</a></li>
<li><a href="https://eduscol.education.fr/cid144156/nsi-bac-2021.html">Ressources pour la NSI sur eduscol</a></li>
</ul>
</div>

