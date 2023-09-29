---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#vocabulaire" data-localhref="true">Vocabulaire</a></li><li><a href="#arbres-binaires" data-localhref="true">Arbres binaires</a></li><ul><li><a href="#définition" data-localhref="true">Définition</a></li><li><a href="#implémentation-récursive" data-localhref="true">Implémentation récursive</a></li><li><a href="#parcours-dun-arbre-binaire" data-localhref="true">Parcours d’un arbre binaire</a></li></ul><li><a href="#arbres-binaires-de-recherche" data-localhref="true">Arbres binaires de recherche</a></li><ul><li><a href="#définition-1" data-localhref="true">Définition</a></li><li><a href="#implémentation-en-p.o.o." data-localhref="true">Implémentation en P.O.O.</a></li><li><a href="#intérêt-des-arbres-binaires-de-recherche" data-localhref="true">Intérêt des arbres binaires de recherche</a></li></ul></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span>   Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>   Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>          Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Arbres : structures hiérarchiques.</p>
<p>Arbres binaires : nœuds, racines, feuilles, sous-arbres gauches, sous-arbres droits.</p></td>
<td><p>Identifier des situations nécessitant une structure de données arborescente.</p>
<p>Évaluer quelques mesures des arbres binaires (taille, encadrement de la hauteur, etc.).</p></td>
<td>On fait le lien avec la rubrique « algorithmique ».</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro">
<figure class="half right figure">
<a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg#/media/File:DOM-model.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" alt="DOM-model.svg" class="figure-img"></a>
<figcaption class="figure-caption">
By ‍Birger Eriksson - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>
</figcaption>
</figure>
<blockquote class="blockquote">
<p>Dans ce chapitre, on présente une nouvelle structure de donnée: les <em>arbres</em> qui sont particulièrement adaptés à la représentation des données hiérarchiques comme un arbre généalogique ou encore le <a href="https://fr.wikipedia.org/wiki/Document_Object_Model">DOM</a> d’une page <code>html</code>.</p>
</blockquote>
</div>
<h2 id="vocabulaire" class="anchored">Vocabulaire</h2>
<dl>
<dt>
Arbre
</dt>
<dd>
<div>
<p>Un arbre est constitué de <strong>nœuds</strong> reliés par des <strong>arêtes</strong>. Souvent les nœuds ont une valeur: l’<em>étiquette</em>.</p>
</div>
</dd>
<dt>
Racine d’un arbre enraciné
</dt>
<dd>
<div>
<p>Un arbre enraciné (ou arborescence) possède à sa base une <strong>racine</strong> auxquels sont reliés d’autres nœuds qui sont ses <strong>descendants</strong>.</p>
</div>
</dd>
</dl>
<p><wc-wikimage class="half center" title="Tree_(computer_science).svg" caption="Dans cet arbre, la racine est le noeud 2 au sommet coloré en vert."></wc-wikimage></p>
<p>Un nœud situé à l’extrémité de l’arbre qui n’a donc pas de descendants est une <strong>feuille</strong>.</p>
<div class="prop">
<p>Chaque nœud peut avoir un nombre quelconque de nœuds fils, mais il n’a qu’un nœud père (sauf la racine qui n’a pas de nœud père).</p>
</div>
<dl>
<dt>
Profondeur d’un nœud
</dt>
<dd>
<div>
<p>La profondeur d’un nœud est la distance, c’est-à-dire, le nombre d’arêtes de la racine au nœud.</p>
</div>
</dd>
<dt>
Hauteur d’un arbre
</dt>
<dd>
<div>
<p>La hauteur d’un arbre est la plus grande profondeur d’une feuille de l’arbre.</p>
</div>
</dd>
<dt>
Taille d’un arbre
</dt>
<dd>
<div>
<p>La taille d’un arbre est son nombre de nœuds.</p>
</div>
</dd>
</dl>
<details class="appli"><summary>&nbsp;</summary>
<p>Reproduire l’arbre ci-dessus, et l’annoter en légendant:</p>
<ul>
<li>la racine,</li>
<li>des feuilles,</li>
<li>un nœud père et ses fils.</li>
</ul>
<p>Calculer la hauteur et la taille de cet arbre.</p>
</details>

<h2 id="arbres-binaires" class="anchored">Arbres binaires</h2>
<h3 id="définition" class="anchored">Définition</h3>
<dl>
<dt>
Arbre binaire
</dt>
<dd>
<div>
<p>Les arbres binaires sont un type d’arbres particuliers pour lesquels chaque nœud a au plus <strong>deux fils</strong>.</p>
</div>
</dd>
</dl>
<p><wc-wikimage class="half center" title="Binary_tree.svg" caption="Dans un arbre binaire, un noeud ne peut avoir plus de 2 enfants."></wc-wikimage></p>
<h3 id="implémentation-récursive" class="anchored">Implémentation récursive</h3>
<p>Comme chaque nœud d’un arbre binaire a au plus deux enfants, on définit les sous arbres gauche et sous arbre droit d’un nœud.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/pixees-sous-arbres.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">sous arbres d’un nœud</figcaption><p></p>
</figure>
</div>
<p><a href="https://pixees.fr/informatiquelycee/n_site/nsi_term_structDo_arbre.html" class="cite-source">CC-BY-SA David Roche</a></p>
<div class="prop">
<p>Un arbre binaire est une structure de données récursive. Tout nœud d’un arbre binaire est un arbre binaire.</p>
</div>
<p>On peut ainsi définir une <code>class</code>e <code>ArbreBinaire</code> <strong>récursive</strong> comme suit:</p>
<div class="highlight"><pre><span></span><span class="c1"># nécessaire pour pouvoir annoter le type de la classe</span>
<span class="kn">from</span> <span class="nn">__future__</span> <span class="kn">import</span> <span class="n">annotations</span>
<span></span>
<span class="k">
class</span> <span class="nc">ArbreBinaire</span><span class="p">:</span>
<span class="w">    </span><span class="sd">"""Structure de donnée d'arbre binaire"""</span>
<span></span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">étiquette</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">gauche</span><span class="p">:</span> <span class="n">ArbreBinaire</span><span class="p">,</span> <span class="n">droit</span><span class="p">:</span> <span class="n">ArbreBinaire</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">étiquette</span> <span class="o">=</span> <span class="n">étiquette</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">gauche</span> <span class="o">=</span> <span class="n">gauche</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">droit</span> <span class="o">=</span> <span class="n">droit</span>
</pre></div>

<details class="appli"><summary>&nbsp;</summary>
<ol type="1">
<li><p>Écrire la séquence d’instructions permettant de construire l’arbre binaire présenté en exemple ci-dessus.</p></li>
<li><p>Expliquer comment accéder à l’étiquette du nœud 7(en partant de la racine) à partir de cette implémentation.</p></li>
</ol>
</details>

<h3 id="parcours-dun-arbre-binaire" class="anchored">Parcours d’un arbre binaire</h3>
<p>Il existe diverses façons de parcourir les nœuds d’un arbre.</p>
<p>Le parcours en <strong>largeur d’abord</strong>: les nœuds sont parcourus comme si on lisait l’arbre, de haut en bas et de gauche à droite.</p>
<p><wc-wikimage class="half center" title="Animated_BFS.gif" caption="Parcours en largeur"></wc-wikimage></p>
<p>Le parcours en <strong>profondeur d’abord</strong>: on explore complétement le sous-arbre gauche avant de commencer l’exploration du droit. Il existe trois façons de faire:</p>
<ul>
<li>Parcours <strong>préfixe</strong> ou <em>préordre</em> <strong>(NGD)</strong>: on visite d’abord le nœud, puis son sous-arbre gauche, puis son sous-arbre droit.</li>
<li>Parcours <strong>infixe</strong> ou <em>en ordre</em> <strong>(GND)</strong>: on visite d’abord le sous-arbre gauche, puis le nœud, puis le sous-arbre droit.</li>
<li>Parcours <strong>postfixe</strong> ou en <em>postordre</em> <strong>(GDN)</strong>: on visite d’abord le sous-arbre gauche, puis le sous-arbre droit, et enfin le nœud.</li>
</ul>
<div class="example">
<p>Parcours en profondeur d’abord d’un exemple d’arbre:</p>
<ul>
<li>préfixe (rouge): F, B, A, D, C, E, G, I, H;</li>
<li>infixe (jaune): A, B, C, D, E, F, G, H, I;</li>
<li>postfixe (vert): A, C, E, D, B, H, I, G, F.</li>
</ul>
<p><wc-wikimage title="Sorted_binary_tree_ALL.svg" caption="Les trois ordres possibles de parcours en profondeur."></wc-wikimage></p>
</div>
<details class="appli"><summary>&nbsp;</summary>
<p>Donner les quatre ordres de parcours de l’arbre ci-dessous qui représente une expression arithmétique.</p>
<p><wc-wikimage title="AST_binary_tree_arith_variables.svg" caption="L'arbre de l'expression A*(B-C)+(D+E)."></wc-wikimage></p>
<p>Quel parcours représente la notation habituelle de nos calculatrices actuelles?</p>
</details>

<h2 id="arbres-binaires-de-recherche" class="anchored">Arbres binaires de recherche</h2>
<h3 id="définition-1" class="anchored">Définition</h3>
<dl>
<dt>
Arbre binaire de recherche
</dt>
<dd>
<div>
<p>Il s’agit d’un arbre binaire dans lequel toutes les valeurs dans le sous-arbre gauche d’un nœud sont inférieures à la valeur à la racine de l’arbre et toutes les valeurs dans le sous-arbre droit d’un nœud sont supérieures ou égales à la valeur à la racine de l’arbre.</p>
</div>
</dd>
</dl>
<p><wc-wikimage class="half center" title="Binary_search_tree.svg" caption="Un arbre binaire de recherche est l'équivalent d'une liste triée pour les arbres binaire, ils permettent des recherches très efficaces."></wc-wikimage></p>
<details class="appli"><summary>&nbsp;</summary>
<ol type="1">
<li><p>Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 6 dont l’un est complet(tous les étages sont entièrement remplis, sauf le dernier ou les feuilles sont tassées à gauche).</p></li>
<li><p>Proposer deux arbres binaires de recherche avec tous les entiers entre 1 et 15 dont l’un est parfait(tous les étages sont entièrement remplis).</p></li>
</ol>
</details>

<h3 id="implémentation-en-p.o.o." class="anchored">Implémentation en P.O.O.</h3>
<p>Dans un arbre binaire de recherche, les nœuds ne peuvent pas être placés n’importe comment et doivent respecter l’ordre entre les sous arbres et le nœud: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>G</mi><mo>&lt;</mo><mi>N</mi><mo>&lt;</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">G&lt;N&lt;D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">G</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>
.</p>
<p>On peut créer une classe <code>ABR</code> semblable à la classe <code>ArbreBinaire</code>, mais en lui ajoutant une méthode <code>insérer</code> pour ajouter l’élément à sa place dans l’arbre binaire de recherche.</p>
<p>On peut ainsi définir une <code>class</code>e <code>ArbreBinaire</code> <strong>récursive</strong> comme suit:</p>
<div class="highlight"><pre><span></span><span class="c1"># nécessaire pour pouvoir annoter le type de la classe</span>
<span class="kn">from</span> <span class="nn">__future__</span> <span class="kn">import</span> <span class="n">annotations</span>
<span></span>
<span class="k">
class</span> <span class="nc">ABR</span><span class="p">:</span>
<span class="w">    </span><span class="sd">"""Structure de donnée d'arbre binaire de recherche"""</span>
<span></span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">étiquette</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">gauche</span><span class="p">:</span> <span class="n">ABR</span><span class="p">,</span> <span class="n">droit</span><span class="p">:</span> <span class="n">ABR</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">étiquette</span> <span class="o">=</span> <span class="n">étiquette</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">gauche</span> <span class="o">=</span> <span class="n">gauche</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">droit</span> <span class="o">=</span> <span class="n">droit</span>
<span></span>
<span class="k">    def</span> <span class="nf">insérer</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">valeur</span><span class="p">):</span>
<span class="w">        </span><span class="sd">"""Insère une valeur à sa place dans l'arbre"""</span>
<span></span>
<span class="c1">        # si la valeur est inférieure on l'insère à gauche</span>
<span class="k">        if</span> <span class="n">valeur</span> <span class="o">&lt;</span> <span class="bp">self</span><span class="o">.</span><span class="n">étiquette</span><span class="p">:</span>
<span class="c1">            # si il y a pas de noeud à gauche, on l'insère</span>
<span class="k">            if</span> <span class="bp">self</span><span class="o">.</span><span class="n">gauche</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
<span class="bp">                self</span><span class="o">.</span><span class="n">gauche</span> <span class="o">=</span> <span class="n">ABR</span><span class="p">(</span><span class="n">valeur</span><span class="p">,</span> <span class="kc">None</span><span class="p">,</span> <span class="kc">None</span><span class="p">)</span>
<span class="c1">            # sinon on fait un appel récursif sur le sous arbre gauche</span>
<span class="k">            else</span><span class="p">:</span>
<span class="bp">                self</span><span class="o">.</span><span class="n">gauche</span><span class="o">.</span><span class="n">insérer</span><span class="p">(</span><span class="n">valeur</span><span class="p">)</span>
<span class="k">        else</span><span class="p">:</span>
<span class="k">            if</span> <span class="bp">self</span><span class="o">.</span><span class="n">droit</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
<span class="bp">                self</span><span class="o">.</span><span class="n">droit</span> <span class="o">=</span> <span class="n">ABR</span><span class="p">(</span><span class="n">valeur</span><span class="p">,</span> <span class="kc">None</span><span class="p">,</span> <span class="kc">None</span><span class="p">)</span>
<span class="k">            else</span><span class="p">:</span>
<span class="bp">                self</span><span class="o">.</span><span class="n">droit</span><span class="o">.</span><span class="n">insérer</span><span class="p">(</span><span class="n">valeur</span><span class="p">)</span>
</pre></div>

<details class="appli"><summary>&nbsp;</summary>
<ol type="1">
<li><p>À quoi ressemblerait l’arbre créé en insérant successivement tous les entiers entre 1 et 6 comme ceci.</p>
<div class="highlight"><pre><span></span><span class="n">abr</span> <span class="o">=</span> <span class="n">ABR</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="kc">None</span><span class="p">,</span> <span class="kc">None</span><span class="p">)</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">7</span><span class="p">):</span>
<span class="n">    abr</span><span class="o">.</span><span class="n">insérer</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>
</li>
<li><p>Corriger l’ordre d’insertion afin d’obtenir un arbre complet.</p></li>
</ol>
</details>

<h3 id="intérêt-des-arbres-binaires-de-recherche" class="anchored">Intérêt des arbres binaires de recherche</h3>
<p>Le caractère trié d’un arbre binaire de recherche permet des opérations rapides pour rechercher une clé, ce que nous verrons dans la partie <a href="../../5-algorithmique/1-algorithmes-sur-les-arbres-binaires/#arbre-binaire-de-recherche">algorithmique</a>.</p>
<details class="appli"><summary>&nbsp;</summary>
<ol type="1">
<li><p>Comparer le nombre d’opérations nécessaires à la recherche de l’élément 15 dans l’arbre ci-dessus:</p>
<ul>
<li>par une méthode brutale (<em>brute force</em>): on itère sur tous les éléments de l’arbre par exemple avec un parcours en largeur.</li>
<li>par une méthode <strong>dichotomique</strong> utilisant le fait que l’arbre binaire de recherche est « trié ».</li>
</ul></li>
<li><p>Donner la complexité des deux méthodes pour un arbre de taille <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>
.</p></li>
</ol>
</details>

<div class="ref">
<ul>
<li><a href="https://www.vuibert.fr/ouvrage/9782311406832-option-informatique-mpsi-mpmp-2e-edition-actualisee">Option informatique MPSI/MP</a></li>
<li><a href="https://www.editions-hatier.fr/livre/nsi-1re-generale-numerique-et-sciences-informatiques-prepabac-9782401052307">Prépabac NSI aux éditions Hatier</a></li>
<li><a href="https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9">Article Wikipedia sur les arbres</a></li>
<li><a href="https://fr.wikipedia.org/wiki/Arbre_enracin%C3%A9">Article Wikipedia sur les arbres binaires de recherche</a></li>
</ul>
</div>

