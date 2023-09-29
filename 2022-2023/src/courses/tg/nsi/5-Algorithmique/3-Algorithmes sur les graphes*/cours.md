---
tags:
  ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#présentation-du-module-networkx" data-localhref="true">Présentation du module <code>networkx</code></a></li><li><a href="#parcourir-un-graphe" data-localhref="true">Parcourir un graphe</a></li><ul><li><a href="#parcours-en-profondeur" data-localhref="true">Parcours en profondeur</a></li><li><a href="#implémentation-en-python" data-localhref="true">Implémentation en Python</a></li><li><a href="#vérification-avec-networkx" data-localhref="true">Vérification avec <code>networkx</code></a></li><li><a href="#parcours-en-largeur" data-localhref="true">Parcours en largeur</a></li><li><a href="#implémentation-en-python-1" data-localhref="true">Implémentation en Python</a></li><li><a href="#vérification-avec-networkx-1" data-localhref="true">Vérification avec <code>networkx</code></a></li></ul><li><a href="#repérer-la-présence-dun-cycle" data-localhref="true">Repérer la présence d’un cycle</a></li><ul><li><a href="#principe" data-localhref="true">Principe</a></li><li><a href="#implémentation" data-localhref="true">Implémentation</a></li></ul><li><a href="#chercher-un-chemin-dans-un-graphe" data-localhref="true">Chercher un chemin dans un graphe</a></li><ul><li><a href="#plus-court-chemin-dans-un-graphe-non-pondéré" data-localhref="true">Plus court chemin dans un graphe non pondéré</a></li><li><a href="#plus-court-chemin-dans-un-graphe-pondéré" data-localhref="true">Plus court chemin dans un graphe pondéré</a></li></ul></ul>'
---

<p><strong>Ce chapitre ne pourra pas faire l’objet d’une évaluation lors de l’épreuve terminale écrite et pratique de l’enseignement de spécialité.</strong> <a href="https://www.education.gouv.fr/bo/21/Hebdo30/MENE2121274N.htm" class="cite-source">BO MENE2121274N</a></p>
<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th><div class="highlight"><pre><span></span> Contenus
</pre></div>
</th>
<th><div class="highlight"><pre><span></span> Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>        Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Algorithmes sur les graphes.</td>
<td><p>Parcourir un graphe en profondeur d’abord, en largeur d’abord.</p>
<p>Repérer la présence d’un cycle dans un graphe.</p>
<p>Chercher un chemin dans un graphe.</p></td>
<td><p>Le parcours d’un labyrinthe et le routage dans Internet sont des exemples d’algorithme sur les graphes.</p>
<p>L’exemple des graphes permet d’illustrer l’utilisation des classes en programmation.</p></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro">
<p>
<a href="https://commons.wikimedia.org/wiki/File:Journal.pone.0082873.g001.png#/media/File:Journal.pone.0082873.g001.png"><img class="half right" src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Journal.pone.0082873.g001.png" alt="Journal.pone.0082873.g001.png"></a><br>By Bumhee Park, Dae-Shik Kim, Hae-Jeong Park - <a rel="nofollow" class="external free" href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0082873">http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0082873</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=59853041">Link</a>
</p>
<blockquote class="blockquote">
<p>Dans ce chapitre, nous allons voir quelques algorithmes classiques sur les <a href="../../1-structures-de-donnees/5-graphes">graphe</a>s. Pour mémoire, un graphe est un ensemble de sommets reliés entre eux par des arêtes sans aucune contrainte sur la façon dont sont reliés les sommets par opposition aux arbres qui présente une racine, et une relation de descendance.</p>
</blockquote>
</div>
<h2 id="présentation-du-module-networkx" class="anchored">Présentation du module <code>networkx</code></h2>
<p>Pour travailler sur ce chapitre, nous allons utiliser la librairie <a href="https://networkx.github.io/documentation/stable/index.html"><code>networkx</code></a> qui permet de facilement créer, manipuler et représenter les graphes en Python.</p>
<p>Nous n’entrerons pas dans les détails de tout ce que l’on peut faire avec cette librairie, mais nous utiliserons la classe <code>Graph</code> que nous instancierons sous la variable <code>G</code>.</p>
<p>La librairie étant écrite en anglais, il faut connaitre les traductions suivantes:</p>
<ul>
<li><strong>Sommet/Noeud</strong>: <em>node</em></li>
<li><strong>Arête/lien</strong>: <em>edge</em></li>
<li><strong>Graphe</strong>: <em>graph</em></li>
<li><strong>Voisins</strong>: <em>neighbors</em></li>
</ul>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>  <span class="c1"># pour les représentations graphiques</span>
<span class="kn">import</span> <span class="nn">networkx</span> <span class="k">as</span> <span class="nn">nx</span>
<span></span>
<span class="k">def</span> <span class="nf">create_graph</span><span class="p">():</span>
<span class="n">    G</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">Graph</span><span class="p">()</span>
<span></span>
<span class="c1">    # Ajout des noeuds nommés dans l'ordre alphabétique</span>
<span class="k">    for</span> <span class="n">ville</span> <span class="ow">in</span> <span class="p">[</span>
<span class="s2">        "Lyon"</span><span class="p">,</span>
<span class="s2">        "Marseille"</span><span class="p">,</span>
<span class="s2">        "Montpellier"</span><span class="p">,</span>
<span class="s2">        "Nancy"</span><span class="p">,</span>
<span class="s2">        "Nice"</span><span class="p">,</span>
<span class="s2">        "Paris"</span><span class="p">,</span>
<span class="s2">        "Rennes"</span><span class="p">,</span>
<span class="s2">        "Toulouse"</span><span class="p">,</span>
<span class="p">    ]:</span>
<span class="n">        G</span><span class="o">.</span><span class="n">add_node</span><span class="p">(</span><span class="n">ville</span><span class="p">)</span>
<span></span>
<span class="c1">    # Ajout des arêtes dans l'ordre alphabétique</span>
<span class="k">    for</span> <span class="n">voisin</span> <span class="ow">in</span> <span class="p">[</span><span class="s2">"Marseille"</span><span class="p">,</span> <span class="s2">"Nancy"</span><span class="p">,</span> <span class="s2">"Nice"</span><span class="p">,</span> <span class="s2">"Paris"</span><span class="p">]:</span>
<span class="n">        G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Lyon"</span><span class="p">,</span> <span class="n">voisin</span><span class="p">)</span>
<span class="c1">    # Ajout des arêtes dans l'ordre alphabétique</span>
<span class="k">    for</span> <span class="n">voisin</span> <span class="ow">in</span> <span class="p">[</span>
<span class="s2">        "Montpellier"</span><span class="p">,</span>
<span class="s2">        "Nice"</span><span class="p">,</span>
<span class="p">    ]:</span>
<span class="n">        G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Marseille"</span><span class="p">,</span> <span class="n">voisin</span><span class="p">)</span>
<span></span>
<span class="n">    G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Montpellier"</span><span class="p">,</span> <span class="s2">"Toulouse"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Nancy"</span><span class="p">,</span> <span class="s2">"Paris"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Paris"</span><span class="p">,</span> <span class="s2">"Rennes"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Paris"</span><span class="p">,</span> <span class="s2">"Toulouse"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">add_edge</span><span class="p">(</span><span class="s2">"Rennes"</span><span class="p">,</span> <span class="s2">"Toulouse"</span><span class="p">)</span>
<span></span>
<span class="k">    return</span> <span class="n">G</span>
<span></span>
<span class="c1">
# création du graph</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="c1"># Représentation graphique</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>  <span class="c1"># Il s'agit du graphe et non d'une carte!</span>
</pre></div>

<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-2-output-1.png" width="691" height="499"></p>
</div>
</div>
<p>On peut obtenir la <strong>matrice d’adjacence</strong> représentant le graphe.</p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="n">nx</span><span class="o">.</span><span class="n">to_numpy_array</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="2">
<div class="highlight"><pre><span></span>array([[0., 1., 0., 1., 1., 1., 0., 0.],
       [1., 0., 1., 0., 1., 0., 0., 0.],
       [0., 1., 0., 0., 0., 0., 0., 1.],
       [1., 0., 0., 0., 0., 1., 0., 0.],
       [1., 1., 0., 0., 0., 0., 0., 0.],
       [1., 0., 0., 1., 0., 0., 1., 1.],
       [0., 0., 0., 0., 0., 1., 0., 1.],
       [0., 0., 1., 0., 0., 1., 1., 0.]])
</pre></div>

</div>
</div>
<p>Mais également sous la forme d’une liste d’adjacence comme nous l’avions vu dans le chapitre sur la structure de données <a href="/tg/nsi/1-structures-de-donnees/4-graphes">graphe</a> (ou bien d’autres formes voir <a href="https://networkx.org/documentation/stable/reference/convert.html">doc</a>).</p>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="c1"># tous nos noeuds sont classés dans l'ordre lexicographique</span>
<span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="3">
<div class="highlight"><pre><span></span>{'Lyon': ['Marseille', 'Nancy', 'Nice', 'Paris'],
 'Marseille': ['Lyon', 'Montpellier', 'Nice'],
 'Montpellier': ['Marseille', 'Toulouse'],
 'Nancy': ['Lyon', 'Paris'],
 'Nice': ['Lyon', 'Marseille'],
 'Paris': ['Lyon', 'Nancy', 'Rennes', 'Toulouse'],
 'Rennes': ['Paris', 'Toulouse'],
 'Toulouse': ['Montpellier', 'Paris', 'Rennes']}
</pre></div>

</div>
</div>
<h2 id="parcourir-un-graphe" class="anchored">Parcourir un graphe</h2>
<p>Tous comme pour les arbres, il est possible de réaliser deux types de parcours d’un arbre:</p>
<ul>
<li>le parcours en profondeur(<em>Depth-First Search</em>)</li>
<li>le parcours en largeur(<em>Breadth First Search</em>)</li>
</ul>
<p>Cependant, contrairement aux arbres</p>
<ul>
<li>il n’y a pas de racine, donc on doit choisir à partir de quel noeud on part: le noeud source.</li>
<li>il peut y avoir un nombre quelconque d’arêtes, et il faut donc <em>marquer</em> les chemins déjà empruntés lors du parcours.</li>
</ul>
<h3 id="parcours-en-profondeur" class="anchored">Parcours en profondeur</h3>
<blockquote class="blockquote">
<p>L’exploration d’un parcours en profondeur depuis un sommet S fonctionne comme suit. Il poursuit alors un chemin dans le graphe jusqu’à un cul-de-sac ou alors jusqu’à atteindre un sommet déjà visité. Il revient alors sur le dernier sommet où on pouvait suivre un autre chemin puis explore un autre chemin (voir vidéo ci-contre). L’exploration s’arrête quand tous les sommets depuis S ont été visités. Bref, l’exploration progresse à partir d’un sommet S en s’appelant récursivement pour chaque sommet voisin de S.</p>
</blockquote>
<p><em><a href="https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_profondeur">Article Wikipédia sur l’Algorithme de parcours en profondeur</a></em>{.cite-source}</p>
<p>Nous allons utiliser l’algorithme proposé sur l’article Wikipedia anglais:</p>
<div class="highlight"><pre><span></span>parcours_en_profondeur(G graph, s sommet)
    marquer v comme visté
    POUR TOUS les sommets voisins v de s FAIRE
        SI v n'est pas marqué comme visité ALORS
            APPELER RECURSIVEMENT parcours_en_prfondeur(G, v)
</pre></div>

<h3 id="implémentation-en-python" class="anchored">Implémentation en Python</h3>
<p>Il parait préférable d’utiliser une liste d’adjacence ici puisque l’on a besoin d’accéder aux voisins fréquemment.</p>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="n">G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Liste d'adjacence"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"-----------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">dg</span><span class="p">)</span>
<span></span>
<span class="k">
def</span> <span class="nf">parcours_profondeur</span><span class="p">(</span><span class="n">g</span><span class="p">:</span> <span class="nb">dict</span><span class="p">,</span> <span class="n">départ</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">visités</span><span class="o">=</span><span class="kc">None</span><span class="p">)</span><span class="o">-&gt;</span><span class="nb">list</span><span class="p">:</span>
<span class="c1">    # pour le premier appel avec la liste vide</span>
<span class="k">    if</span> <span class="n">visités</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
<span class="n">        visités</span> <span class="o">=</span> <span class="p">[</span><span class="n">départ</span><span class="p">]</span>
<span class="k">    else</span><span class="p">:</span>
<span class="c1">        # marquer s comme visté</span>
<span class="n">        visités</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">départ</span><span class="p">)</span>
<span class="k">    
    for</span> <span class="n">voisin</span> <span class="ow">in</span> <span class="n">g</span><span class="p">[</span><span class="n">départ</span><span class="p">]:</span>
<span class="k">        if</span> <span class="n">voisin</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">visités</span><span class="p">:</span>
<span class="n">            parcours_profondeur</span><span class="p">(</span><span class="n">g</span><span class="p">,</span> <span class="n">voisin</span><span class="p">,</span> <span class="n">visités</span><span class="p">)</span>
<span class="k">    return</span> <span class="n">visités</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Liste des noeuds visités par notre algorithme"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"---------------------------------------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">parcours_profondeur</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="s2">"Nice"</span><span class="p">))</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Pour rappel: Forme du graphe"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"------------------------------"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Liste d'adjacence</span>
<span class="gh">-----------------</span>
{'Lyon': ['Marseille', 'Nancy', 'Nice', 'Paris'], 'Marseille': ['Lyon', 'Montpellier', 'Nice'], 'Montpellier': ['Marseille', 'Toulouse'], 'Nancy': ['Lyon', 'Paris'], 'Nice': ['Lyon', 'Marseille'], 'Paris': ['Lyon', 'Nancy', 'Rennes', 'Toulouse'], 'Rennes': ['Paris', 'Toulouse'], 'Toulouse': ['Montpellier', 'Paris', 'Rennes']}
<span></span>
<span class="gh">Liste des noeuds visités par notre algorithme</span>
<span class="gh">---------------------------------------------</span>
['Nice', 'Lyon', 'Marseille', 'Montpellier', 'Toulouse', 'Paris', 'Nancy', 'Rennes']
<span></span>
<span class="gh">Pour rappel: Forme du graphe</span>
<span class="gh">------------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-5-output-2.png" width="691" height="499"></p>
</div>
</div>
<h3 id="vérification-avec-networkx" class="anchored">Vérification avec <code>networkx</code></h3>
<p>La librairie <code>networkx</code> implémente cette traversée avec la méthode <code>dfs_preorder_nodes</code>, nous allons examiner sa sortie à partir du sommet <code>Nice</code> pour comparer les sorties.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">"Liste des chemins suivis"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"------------------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="nb">list</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">dfs_preorder_nodes</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="s2">"Nice"</span><span class="p">)))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Liste des chemins suivis</span>
<span class="gh">------------------------</span>
['Nice', 'Lyon', 'Marseille', 'Montpellier', 'Toulouse', 'Paris', 'Nancy', 'Rennes']
</pre></div>

</div>
</div>
<details class="appli"><summary>&nbsp;</summary>
<ul>
<li>Reproduire le graphe est l’annoter avec des flèches numérotées pour indiquer l’ordre de viste.</li>
<li>Faire apparaitre les demi-tours(<em>backtrack en anglais</em>).</li>
<li>Proposer un autre parcours en profondeur au départ de Nice.</li>
</ul>
</details>

<h3 id="parcours-en-largeur" class="anchored">Parcours en largeur</h3>
<blockquote class="blockquote">
<p>L’algorithme de parcours en largeur (ou BFS, pour Breadth First Search en anglais) permet le parcours d’un graphe ou d’un arbre de la manière suivante : on commence par explorer un nœud source, puis ses successeurs, puis les successeurs non explorés des successeurs, etc. L’algorithme de parcours en largeur permet de calculer les distances de tous les nœuds depuis un nœud source dans un graphe non pondéré (orienté ou non orienté).</p>
</blockquote>
<p><em><a href="https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_largeur">Article Wikipédia sur l’Algorithme de parcours en largeur</a></em>{.cite-source}</p>
<p>Nous allons implémenter cet algorithme à l’aide d’une file:</p>
<div class="highlight"><pre><span></span>ParcoursLargeur(Graphe G, Sommet s):
       f = CreerFile();
       f.enfiler(s);
       marquer(s);
       tant que la file est non vide
                s = f.defiler();
                afficher(s);
                pour tout voisin t de s dans G
                         si t non marqué
                                 f.enfiler(t);
                                 marquer(t);
</pre></div>

<h3 id="implémentation-en-python-1" class="anchored">Implémentation en Python</h3>
<p>Nous allons implémenter la fonction <code>parcours_en_largeur</code> proposée précedemment.</p>
<p>Encore une fois je vais utiliser une liste d’adjacence pour facilement accéder aux voisins. On utilise une liste locale <code>visités</code> pour stocker les noeuds visités.</p>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="c1"># On importe deque pour la file</span>
<span class="kn">from</span> <span class="nn">collections</span> <span class="kn">import</span> <span class="n">deque</span> <span class="k">as</span> <span class="n">file</span>
<span></span>
<span class="c1"># On repart d'un graphe tout neuf</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Liste d'adjacence"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"-----------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">dg</span><span class="p">)</span>
<span></span>
<span class="c1"># parcours_largeur(Graphe G, Sommet s):</span>
<span class="k">def</span> <span class="nf">parcours_largeur</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">s</span><span class="p">):</span>
<span class="c1">    # f = CreerFile();</span>
<span class="n">    f</span> <span class="o">=</span> <span class="n">file</span><span class="p">()</span>
<span class="c1">    # f.enfiler(s);</span>
<span class="n">    f</span><span class="o">.</span><span class="n">appendleft</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>
<span class="c1">    # marquer(s);</span>
<span class="n">    visités</span> <span class="o">=</span> <span class="p">[</span><span class="n">s</span><span class="p">]</span>
<span class="c1">    # TANT QUE la file est non vide</span>
<span class="k">    while</span> <span class="n">f</span><span class="p">:</span>
<span class="c1">        # s = f.defiler();</span>
<span class="n">        s</span> <span class="o">=</span> <span class="n">f</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="c1">        # afficher(s);</span>
<span class="c1">        # print(s)</span>
<span class="c1">        # POUR TOUT voisin t de s dans G</span>
<span class="k">        for</span> <span class="n">t</span> <span class="ow">in</span> <span class="n">G</span><span class="p">[</span><span class="n">s</span><span class="p">]:</span>
<span class="c1">            # SI t non marqué</span>
<span class="k">            if</span> <span class="n">t</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">visités</span><span class="p">:</span>
<span class="c1">                # f.enfiler(t);</span>
<span class="n">                f</span><span class="o">.</span><span class="n">appendleft</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="c1">                # marquer(t);</span>
<span class="c1">                # marquer le sommet s</span>
<span class="n">                visités</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="c1">                # node["visited"] =  True</span>
<span class="k">    return</span> <span class="n">visités</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"Liste des noeuds visités par notre algorithme"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"---------------------------------------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">parcours_largeur</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="s2">"Nice"</span><span class="p">))</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Pour rappel: Forme du graphe"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"------------------------------"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Liste d'adjacence</span>
<span class="gh">-----------------</span>
{'Lyon': ['Marseille', 'Nancy', 'Nice', 'Paris'], 'Marseille': ['Lyon', 'Montpellier', 'Nice'], 'Montpellier': ['Marseille', 'Toulouse'], 'Nancy': ['Lyon', 'Paris'], 'Nice': ['Lyon', 'Marseille'], 'Paris': ['Lyon', 'Nancy', 'Rennes', 'Toulouse'], 'Rennes': ['Paris', 'Toulouse'], 'Toulouse': ['Montpellier', 'Paris', 'Rennes']}
<span class="gh">Liste des noeuds visités par notre algorithme</span>
<span class="gh">---------------------------------------------</span>
['Nice', 'Lyon', 'Marseille', 'Nancy', 'Paris', 'Montpellier', 'Rennes', 'Toulouse']
<span></span>
<span class="gh">Pour rappel: Forme du graphe</span>
<span class="gh">------------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-7-output-2.png" width="691" height="499"></p>
</div>
</div>
<h3 id="vérification-avec-networkx-1" class="anchored">Vérification avec <code>networkx</code></h3>
<p>La librairie <code>networkx</code> implémente cette traversée avec la méthode <code>bfs_edges</code>, nous allons examiner sa sortie à partir du sommet <code>Nice</code> pour comparer les sorties.</p>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">"Liste des chemins suivis"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"------------------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="nb">list</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">bfs_edges</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="s2">"Nice"</span><span class="p">)))</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Représentation sous forme d'arbre"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"---------------------------------"</span><span class="p">)</span>
<span class="n">tree</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">bfs_tree</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="s2">"Nice"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">tree</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Liste des chemins suivis</span>
<span class="gh">------------------------</span>
[('Nice', 'Lyon'), ('Nice', 'Marseille'), ('Lyon', 'Nancy'), ('Lyon', 'Paris'), ('Marseille', 'Montpellier'), ('Paris', 'Rennes'), ('Paris', 'Toulouse')]
<span></span>
<span class="gh">Représentation sous forme d'arbre</span>
<span class="gh">---------------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-8-output-2.png" width="691" height="499"></p>
</div>
</div>
<p>L’ordre de parcours des chemins dépend de l’ordre dans lequel les voisins sont visités par la méthode <code>neighbors</code>. Cependant on observe bien que l’algorithme explore toujours tous les voisins d’un sommet avant d’avancer d’une profondeur supplémentaire.</p>
<details class="appli"><summary>&nbsp;</summary>
<ul>
<li>Reproduire le graphe est l’annoter avec des flèches numérotées pour indiquer l’ordre de viste.</li>
<li>Proposer un autre parcours en largeur au départ de Nice.</li>
</ul>
</details>

<h2 id="repérer-la-présence-dun-cycle" class="anchored">Repérer la présence d’un cycle</h2>
<dl>
<dt>
cycle}
</dt>
<dd>
<div>
<p>Un cycle est une suite d’arêtes consécutives (chaine simple) dont les deux sommets extrémités sont identiques.</p>
</div>
</dd>
</dl>
<div class="example">
<p>Dans notre graphique Nice - Marseille - Lyon forme un cycle</p>
</div>
<details class="plus"><summary>&nbsp;</summary>
<p>La détection de cycle peut-être interressante par exemple en programmation concurrente dans les systèmes d’exploitation pour détecter un interblocage(<em>deadlock</em>) qui se produit lorsque des processus concurrents s’attendent mutuellement.</p>
<p>Les processus bloqués dans cet état le sont définitivement, il s’agit donc d’une situation catastrophique.</p>
</details>

<h3 id="principe" class="anchored">Principe</h3>
<p>Pour détecter un cycle, nous allons simplement parcourir le graphe en profondeur et vérifier qu’aucune arête pointe vers un sommet déjà visité(présence d’un <em>backedge</em>).</p>
<div class="highlight"><pre><span></span>FONCTION recherche_cycle(G graph, s sommet)
    marquer v comme visté
    POUR TOUS les sommets voisins v de s FAIRE
        SI v n'est pas marqué comme visité ALORS
            APPELER RECURSIVEMENT recherche_cycle(G, v)
        SINON
            # On a découvert un cycle
            renvoyer VRAI
    # Aucun cycle découvert après parcours complet
    renvoyer FAUX
</pre></div>

<h3 id="implémentation" class="anchored">Implémentation</h3>
<p>Voici le code proposé.</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="c1"># On repart d'un graphe tout neuf</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="c1"># Transformation en liste d'adjacence</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span></span>
<span class="k">
def</span> <span class="nf">recherche_cycle</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">s</span><span class="p">,</span> <span class="n">vus</span><span class="o">=</span><span class="kc">None</span><span class="p">):</span>
<span class="c1">    # ATTENTION: Liste vide par défaut</span>
<span class="c1">    # voir: https://www.lyceum.fr/blog/2021-04-02-comment-passer-une-liste-vide-par-defaut-a-une-fonction-en-python/</span>
<span class="k">    if</span> <span class="n">vus</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
<span class="n">        vus</span> <span class="o">=</span> <span class="p">[]</span>
<span class="c1">    # on récupère la liste des voisins</span>
<span class="n">    voisins</span> <span class="o">=</span> <span class="n">G</span><span class="p">[</span><span class="n">s</span><span class="p">]</span>
<span class="c1">    # marquer le sommet s</span>
<span class="n">    vus</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>
<span class="c1">    # POUR TOUT sommet t voisin du sommet s</span>
<span class="k">    for</span> <span class="n">t</span> <span class="ow">in</span> <span class="n">voisins</span><span class="p">:</span>
<span class="k">        if</span> <span class="n">t</span> <span class="ow">in</span> <span class="n">vus</span><span class="p">:</span>
<span class="k">            return</span> <span class="kc">True</span>
<span class="c1">        # SI t n'est pas marqué ALORS</span>
<span class="k">        else</span><span class="p">:</span>
<span class="n">            recherche_cycle</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">t</span><span class="p">,</span> <span class="n">vus</span><span class="p">)</span>
<span class="k">    return</span> <span class="kc">False</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"Présence d'un cycle"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"-------------------"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">recherche_cycle</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="s2">"Nice"</span><span class="p">))</span>
<span></span>
<span class="c1"># Test de la fonction à partir de tous les noeuds de départ</span>
<span class="k">for</span> <span class="n">node</span> <span class="ow">in</span> <span class="n">G</span><span class="o">.</span><span class="n">nodes</span><span class="p">:</span>
<span class="c1">    # networkx est capable de trouver des cycles</span>
<span class="k">    assert</span> <span class="n">nx</span><span class="o">.</span><span class="n">find_cycle</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="n">node</span><span class="p">)</span>
<span class="c1">    # on teste notre fonction maintenant</span>
<span class="k">    assert</span> <span class="n">node</span><span class="p">,</span> <span class="n">recherche_cycle</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">node</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Pour rappel: Forme du graphe"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"----------------------------"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Présence d'un cycle</span>
<span class="gh">-------------------</span>
True
<span></span>
<span class="gh">Pour rappel: Forme du graphe</span>
<span class="gh">----------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-9-output-2.png" width="691" height="499"></p>
</div>
</div>
<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="c1"># Nous supprimons quelques arêtes pour</span>
<span class="c1"># retirer les cycles et tester la fonction</span>
<span class="k">def</span> <span class="nf">create_acyclic_graph</span><span class="p">():</span>
<span class="n">    G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="n">    G</span><span class="o">.</span><span class="n">remove_edge</span><span class="p">(</span><span class="s2">"Nice"</span><span class="p">,</span> <span class="s2">"Lyon"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">remove_edge</span><span class="p">(</span><span class="s2">"Nancy"</span><span class="p">,</span> <span class="s2">"Lyon"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">remove_edge</span><span class="p">(</span><span class="s2">"Paris"</span><span class="p">,</span> <span class="s2">"Rennes"</span><span class="p">)</span>
<span class="n">    G</span><span class="o">.</span><span class="n">remove_edge</span><span class="p">(</span><span class="s2">"Toulouse"</span><span class="p">,</span> <span class="s2">"Montpellier"</span><span class="p">)</span>
<span class="k">    return</span> <span class="n">G</span>
<span></span>
<span class="n">
G</span> <span class="o">=</span> <span class="n">create_acyclic_graph</span><span class="p">()</span>
<span class="c1"># Transformation en liste d'adjacence</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Présence d'un cycle"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"-------------------"</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">recherche_cycle</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="s2">"Paris"</span><span class="p">))</span>
<span></span>
<span class="c1"># Test de la fonction à partir de tous les noeuds de départ</span>
<span class="k">for</span> <span class="n">node</span> <span class="ow">in</span> <span class="n">G</span><span class="o">.</span><span class="n">nodes</span><span class="p">:</span>
<span class="k">    try</span><span class="p">:</span>
<span class="n">        nx</span><span class="o">.</span><span class="n">find_cycle</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">source</span><span class="o">=</span><span class="n">node</span><span class="p">)</span>
<span class="k">        assert</span> <span class="kc">False</span>
<span class="k">    except</span> <span class="n">nx</span><span class="o">.</span><span class="n">NetworkXNoCycle</span><span class="p">:</span>
<span class="k">        pass</span>
<span class="n">    G</span> <span class="o">=</span> <span class="n">create_acyclic_graph</span><span class="p">()</span>
<span class="k">    assert</span> <span class="ow">not</span> <span class="n">recherche_cycle</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">node</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Pour rappel: Forme du graphe"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"----------------------------"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">Présence d'un cycle</span>
<span class="gh">-------------------</span>
False
<span></span>
<span class="gh">Pour rappel: Forme du graphe</span>
<span class="gh">----------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-10-output-2.png" width="691" height="499"></p>
</div>
</div>
<details class="plus"><summary>Recherche d'un cycle dans un graphe orienté</summary>
<p>La recherche d’un cycle dans un graphe orienté et plus délicate, on utilise classiquement un système de trois couleurs NOIR GRIS BLANC lors du parcours du graphe.</p>
<ul>
<li>BLANC: le sommet n’est pas encore traité. Au départ, tous les sommets sont BLANC.</li>
<li>GRIS: le sommet est en cours de traitement (le parcours en profondeur pour ce sommet a commencé, mais pas terminé, ce qui signifie que tous les descendants (dans l’arborescence du parcours) de ce sommet ne sont pas encore traités.</li>
<li>NOIR: le sommet et tous ses descendants sont traités. Si une arête est rencontrée entre le sommet actuel et un sommet GRIS, alors cette arête est l’arête arrière et il y a donc un cycle.</li>
</ul>
<p><a href="https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/" class="cite-source">Article geek for geeks en anglais</a></p>
</details>

<h2 id="chercher-un-chemin-dans-un-graphe" class="anchored">Chercher un chemin dans un graphe</h2>
<p>La recherche de chemin(<em>pathfinding</em>), et un domaine important de recherche dans le développement de l’intelligence artificielle et de la robotique.</p>
<h3 id="plus-court-chemin-dans-un-graphe-non-pondéré" class="anchored">Plus court chemin dans un graphe non pondéré</h3>
<p>Le plus court chemin à travers un graphe non pondéré est utilisé dans le protocole réseau <a href="/tg/nsi/3-architectures-materielles-systemes-dexploitation-et-reseaux/3-protocoles-de-routage">RIP</a>.</p>
<p>Il se base simplement sur un <em>parcours en largeur</em> pour s’assurer que le nombre d’arêtes traversées est minimum.</p>
<p>Si le sommet est rencontré, on renverra le chemin suivi.</p>
<p>Pour cela on ajoute à notre algorithme un dictionnaire qui stocke la liste des prédecesseurs lors du parcours.</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="c1"># On repart d'un graphe tout neuf</span>
<span class="n">G</span> <span class="o">=</span> <span class="n">create_graph</span><span class="p">()</span>
<span class="c1"># On crée la liste d'adjacence</span>
<span class="n">dg</span> <span class="o">=</span> <span class="n">nx</span><span class="o">.</span><span class="n">to_dict_of_lists</span><span class="p">(</span><span class="n">G</span><span class="p">)</span>
<span></span>
<span class="c1"># FONCTION plus court chemin(Graphe G, Sommet s, Destination d):</span>
<span class="k">def</span> <span class="nf">plus_court_chemin</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">s</span><span class="p">,</span> <span class="n">d</span><span class="p">):</span>
<span class="c1">    # dictionnaire des prédecesseurs</span>
<span class="n">    prédecesseurs</span> <span class="o">=</span> <span class="p">{</span><span class="n">s</span><span class="p">:</span> <span class="kc">None</span><span class="p">}</span>
<span class="c1">    # f = CreerFile();</span>
<span class="n">    f</span> <span class="o">=</span> <span class="n">file</span><span class="p">()</span>
<span class="c1">    # f.enfiler(s);</span>
<span class="n">    f</span><span class="o">.</span><span class="n">appendleft</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>
<span class="c1">    # marquer(s);</span>
<span class="n">    visités</span> <span class="o">=</span> <span class="p">[</span><span class="n">s</span><span class="p">]</span>
<span class="c1">    # TANT QUE la file est non vide</span>
<span class="k">    while</span> <span class="n">f</span><span class="p">:</span>
<span class="c1">        # On récupère le noeud</span>
<span class="n">        s</span> <span class="o">=</span> <span class="n">f</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="c1">        # POUR TOUT voisin t de s dans G</span>
<span class="k">        for</span> <span class="n">t</span> <span class="ow">in</span> <span class="n">G</span><span class="p">[</span><span class="n">s</span><span class="p">]:</span>
<span class="k">            if</span> <span class="n">t</span> <span class="o">==</span> <span class="n">d</span><span class="p">:</span>
<span class="c1">                # Destination trouvée, on remonte le chemin</span>
<span class="n">                ville</span> <span class="o">=</span> <span class="n">s</span>
<span class="n">                chemin</span> <span class="o">=</span> <span class="p">[</span><span class="n">d</span><span class="p">]</span>
<span class="k">                while</span> <span class="n">ville</span><span class="p">:</span>
<span class="n">                    chemin</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">ville</span><span class="p">)</span>
<span class="n">                    ville</span> <span class="o">=</span> <span class="n">prédecesseurs</span><span class="p">[</span><span class="n">ville</span><span class="p">]</span>
<span class="c1">                # On remet dans l'ordre</span>
<span class="n">                chemin</span><span class="o">.</span><span class="n">reverse</span><span class="p">()</span>
<span class="k">                return</span> <span class="n">chemin</span>
<span class="c1">            # SI t non marqué</span>
<span class="k">            elif</span> <span class="n">t</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">visités</span><span class="p">:</span>
<span class="c1">                # f.enfiler(t);</span>
<span class="n">                f</span><span class="o">.</span><span class="n">appendleft</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="c1">                # marquer(t);</span>
<span class="n">                visités</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">t</span><span class="p">)</span>
<span class="c1">                # màJ du dictionnaire de prédecesseurs</span>
<span class="n">                prédecesseurs</span><span class="p">[</span><span class="n">t</span><span class="p">]</span> <span class="o">=</span> <span class="n">s</span>
<span class="c1">    # Destination non trouvée</span>
<span class="k">    return</span> <span class="p">[]</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"On teste sur tous les trajets possibles"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"---------------------------------------"</span><span class="p">)</span>
<span class="n">villes</span> <span class="o">=</span> <span class="n">G</span><span class="o">.</span><span class="n">nodes</span>
<span class="kn">from</span> <span class="nn">itertools</span> <span class="kn">import</span> <span class="n">combinations</span>
<span></span>
<span class="k">for</span> <span class="n">source</span><span class="p">,</span> <span class="n">dest</span> <span class="ow">in</span> <span class="n">combinations</span><span class="p">(</span><span class="n">villes</span><span class="p">,</span> <span class="mi">2</span><span class="p">):</span>
<span class="n">    chemin</span> <span class="o">=</span> <span class="n">plus_court_chemin</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">source</span><span class="p">,</span> <span class="n">dest</span><span class="p">)</span>
<span class="nb">    print</span><span class="p">(</span><span class="sa">f</span><span class="s2">"</span><span class="si">{</span><span class="n">source</span><span class="si">}</span><span class="s2"> -&gt; </span><span class="si">{</span><span class="n">dest</span><span class="si">}</span><span class="s2">: </span><span class="si">{</span><span class="n">chemin</span><span class="si">}</span><span class="s2">"</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Si la destination n'est pas trouvée"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"-----------------------------------"</span><span class="p">)</span>
<span class="n">source</span><span class="p">,</span> <span class="n">dest</span> <span class="o">=</span> <span class="s2">"Nice"</span><span class="p">,</span> <span class="s2">"Tokyo"</span>
<span class="n">chemin</span> <span class="o">=</span> <span class="n">plus_court_chemin</span><span class="p">(</span><span class="n">dg</span><span class="p">,</span> <span class="n">source</span><span class="p">,</span> <span class="n">dest</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">"</span><span class="si">{</span><span class="n">source</span><span class="si">}</span><span class="s2"> -&gt; </span><span class="si">{</span><span class="n">dest</span><span class="si">}</span><span class="s2">: </span><span class="si">{</span><span class="n">chemin</span><span class="si">}</span><span class="s2">"</span><span class="p">)</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"</span><span class="se">\n</span><span class="s2">Pour vérification: Forme du graphe"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"------------------------------------"</span><span class="p">)</span>
<span class="n">nx</span><span class="o">.</span><span class="n">draw</span><span class="p">(</span><span class="n">G</span><span class="p">,</span> <span class="n">with_labels</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">pos</span><span class="o">=</span><span class="n">nx</span><span class="o">.</span><span class="n">spring_layout</span><span class="p">(</span><span class="n">G</span><span class="p">))</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span><span class="gh">On teste sur tous les trajets possibles</span>
<span class="gh">---------------------------------------</span>
Lyon -&gt; Marseille: ['Lyon', 'Marseille']
Lyon -&gt; Montpellier: ['Lyon', 'Marseille', 'Montpellier']
Lyon -&gt; Nancy: ['Lyon', 'Nancy']
Lyon -&gt; Nice: ['Lyon', 'Nice']
Lyon -&gt; Paris: ['Lyon', 'Paris']
Lyon -&gt; Rennes: ['Lyon', 'Paris', 'Rennes']
Lyon -&gt; Toulouse: ['Lyon', 'Paris', 'Toulouse']
Marseille -&gt; Montpellier: ['Marseille', 'Montpellier']
Marseille -&gt; Nancy: ['Marseille', 'Lyon', 'Nancy']
Marseille -&gt; Nice: ['Marseille', 'Nice']
Marseille -&gt; Paris: ['Marseille', 'Lyon', 'Paris']
Marseille -&gt; Rennes: ['Marseille', 'Lyon', 'Paris', 'Rennes']
Marseille -&gt; Toulouse: ['Marseille', 'Montpellier', 'Toulouse']
Montpellier -&gt; Nancy: ['Montpellier', 'Marseille', 'Lyon', 'Nancy']
Montpellier -&gt; Nice: ['Montpellier', 'Marseille', 'Nice']
Montpellier -&gt; Paris: ['Montpellier', 'Toulouse', 'Paris']
Montpellier -&gt; Rennes: ['Montpellier', 'Toulouse', 'Rennes']
Montpellier -&gt; Toulouse: ['Montpellier', 'Toulouse']
Nancy -&gt; Nice: ['Nancy', 'Lyon', 'Nice']
Nancy -&gt; Paris: ['Nancy', 'Paris']
Nancy -&gt; Rennes: ['Nancy', 'Paris', 'Rennes']
Nancy -&gt; Toulouse: ['Nancy', 'Paris', 'Toulouse']
Nice -&gt; Paris: ['Nice', 'Lyon', 'Paris']
Nice -&gt; Rennes: ['Nice', 'Lyon', 'Paris', 'Rennes']
Nice -&gt; Toulouse: ['Nice', 'Lyon', 'Paris', 'Toulouse']
Paris -&gt; Rennes: ['Paris', 'Rennes']
Paris -&gt; Toulouse: ['Paris', 'Toulouse']
Rennes -&gt; Toulouse: ['Rennes', 'Toulouse']
<span></span>
<span class="gh">Si la destination n'est pas trouvée</span>
<span class="gh">-----------------------------------</span>
Nice -&gt; Tokyo: []
<span></span>
<span class="gh">Pour vérification: Forme du graphe</span>
<span class="gh">------------------------------------</span>
</pre></div>

</div>
<div class="cell-output cell-output-display">
<p><img src="cours_files/figure-html/cell-11-output-2.png" width="691" height="499"></p>
</div>
</div>
<h3 id="plus-court-chemin-dans-un-graphe-pondéré" class="anchored">Plus court chemin dans un graphe pondéré</h3>
<p>Souvent, on s’intéressera plus précisément à la recherche du plus court chemin sur des graphes pondérés, c’est-à-dire sur lesquelles on ajoute un poids à l’arête, dans notre exemple, on pourrait ajouter les temps ou distance des routes entre chaque ville.</p>
<p>On peut également citer le protocole réseau <a href="/tg/nsi/3-architectures-materielles-systemes-dexploitation-et-reseaux/3-protocoles-de-routage">OSPF</a> qui vise à optimiser les vitesses de transmission à travers les réseaux.</p>
<p>Il existe deux principaux algorithmes de plus court chemin, cette vidéo, vous présente l’algorithme de Dijkstra.</p>
<details class="plus"><summary>&nbsp;</summary>
<p></p><div class="yt-embend"><div><iframe width="560" height="315" src="https://invidious.projectsegfau.lt/embed/JPeCmKFrKio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><p><a href="https://www.youtube.com/watch?v=JPeCmKFrKio">Vidéo</a> servie sans cookie via <a href="https://projectsegfau.lt/">Project Segfault</a></p></div></div><p></p>
</details>

<!--
Le programme ne demandant que le recherche d'un chemin dans un graphe, je vous présente un algorithme de recherche de chemin qui indique simplement le chemin s'il existe sans s'assurer qu'il s'agit du plus court chemin.

Utilisons un parcours en largeur pour faire cette recherche qui permettra de minimiser le nombre d'arêtes traversées par rapport à une recherche en profondeur.

-->
<p>Un article très détaillé et illustré est disponible à cette adresse: https://perso.liris.cnrs.fr/vincent.nivoliers/lifap6/Supports/Cours/graph_traversal.html</p>
<!--
# On repart d'un graphe non annoté
G = create_graph()

# FONCTION parcours_largeur(Graphe G, Sommet s):

def recherche_chemin(G, départ=None, arrivée=None):
"""Recherche de chemin

    On se contente d'indiquer si le chemin existe

    Returns
    -------
    bool
    """
    profondeur = 0
    #f = CreerFile();
    #f.enfiler(s);
    f = [départ]
    #marquer(s);
    node = G.nodes[départ]
    node["visited"] =  True
    #TANT QUE la file est non vide
    while f:
        #s = f.defiler();
        s = f.pop()
        #POUR TOUT voisin t de s dans G
        for t in G.neighbors(s):
            node = G.nodes[t]
            if t == arrivée:
                return True
            #SI t non marqué
            elif not(node.get("visited")):
                #f.enfiler(t);
                f.insert(0, t)
                #marquer(t);
                # marquer le sommet s
                node["visited"] =  True
    return False


print("Liste des noeuds visités par notre algorithme")
print("---------------------------------------------")
print(recherche_chemin(create_graph(), "Nice", "Paris"))
print(recherche_chemin(create_graph(), "Nice", "Rennes"))
print(recherche_chemin(create_graph(), "Nice", "Massilia"))

# je ne sais pas d'ou vient ce dernier None!

print("\nPour rappel: Forme du graphe")
print("------------------------------")
nx.draw(G, with_labels=True, pos=nx.spring_layout(G))

-->

<div class="ref">
<ul>
<li><a href="https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_profondeur">Article Wikipédia sur l’Algorithme de parcours en profondeur</a></li>
<li><a href="https://fr.wikipedia.org/wiki/Algorithme_de_parcours_en_profondeur">Article Wikipédia sur l’Algorithme de parcours en largeur</a></li>
</ul>
</div>
