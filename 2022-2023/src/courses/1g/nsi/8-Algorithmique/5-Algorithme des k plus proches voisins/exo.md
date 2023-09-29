---
tocHTML: '<ul><li><a href="#classification-des-joueurs-du-top-14" data-localhref="true">Classification des joueurs du top 14</a></li><ul><li><a href="#lecture-des-données" data-localhref="true">Lecture des données</a></li><li><a href="#lister-les-postes" data-localhref="true">Lister les postes</a></li><li><a href="#observation-des-postes-sur-un-graphique" data-localhref="true">Observation des postes sur un graphique</a></li><li><a href="#séparation-des-données-pour-le-test" data-localhref="true">Séparation des données pour le test</a></li><li><a href="#implémentation-de-la-fonction-distance" data-localhref="true">Implémentation de la fonction distance</a></li><li><a href="#algorithme-du-plus-proche-voisin" data-localhref="true">Algorithme du plus proche voisin</a></li><li><a href="#calcul-du-taux-derreur" data-localhref="true">Calcul du taux d’erreur</a></li><li><a href="#algorithme-des-k-plus-proches-voisins" data-localhref="true">Algorithme des k plus proches voisins</a></li><li><a href="#recherche-de-la-meilleure-valeur-de-k" data-localhref="true">Recherche de la meilleure valeur de k</a></li><li><a href="#améliorations-possibles" data-localhref="true">Améliorations possibles</a></li></ul></ul>'
---





<h2 id="classification-des-joueurs-du-top-14" class="anchored">Classification des joueurs du top 14</h2>
<p>Vous allez travailler sur un tableau de données des joueurs de rugby du top-14 de la saison 2019-2020 issues de la page de la ligue nationale de rugby:</p>
<p>https://www.lnr.fr/rugby-top-14/joueurs-rugby-top-14</p>
<p>Votre travail consiste à attribuer un poste sur le terrain à un joueur à partir de son poids et de sa taille en utilisant l’<em>algorithme des k plus proches voisins</em>:</p>
<ul>
<li>Demi mêlée,</li>
<li>Arrière,</li>
<li>1ère ligne,</li>
<li>…</li>
</ul>
<h3 id="lecture-des-données" class="anchored">Lecture des données</h3>
<p>On commence par lire les données du fichier <a href="./joueurs-top14.csv"><code>joueurs-top14.csv</code></a> sous la forme d’un tableau de tableau.</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">csv</span>
<span></span>
<span class="c1">## Lecture du fichier csv</span>
<span class="c1">## et stockage dans une liste de liste</span>
<span class="c1">## taille, le poids et le poste si non vide</span>
<span class="n">joueurs</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">'./joueurs-top14.csv'</span><span class="p">,</span> <span class="n">encoding</span><span class="o">=</span><span class="s2">"utf-8"</span><span class="p">)</span> <span class="k">as</span> <span class="n">csvfile</span><span class="p">:</span>
<span class="n">    reader</span> <span class="o">=</span> <span class="n">csv</span><span class="o">.</span><span class="n">DictReader</span><span class="p">(</span><span class="n">csvfile</span><span class="p">)</span>
<span class="c1">    # Itération sur les lignes</span>
<span class="k">    for</span> <span class="n">ligne</span> <span class="ow">in</span> <span class="n">reader</span><span class="p">:</span>
<span class="n">        taille</span> <span class="o">=</span> <span class="n">ligne</span><span class="p">[</span><span class="s2">"taille(cm)"</span><span class="p">]</span>
<span class="n">        poids</span> <span class="o">=</span> <span class="n">ligne</span><span class="p">[</span><span class="s2">"poids(kg)"</span><span class="p">]</span>
<span class="n">        poste</span> <span class="o">=</span> <span class="n">ligne</span><span class="p">[</span><span class="s2">"poste"</span><span class="p">]</span>
<span class="k">        if</span> <span class="n">taille</span> <span class="ow">and</span> <span class="n">poids</span> <span class="ow">and</span> <span class="n">poste</span><span class="p">:</span>
<span class="n">            joueurs</span><span class="o">.</span><span class="n">append</span><span class="p">([</span><span class="nb">int</span><span class="p">(</span><span class="n">taille</span><span class="p">),</span> <span class="nb">int</span><span class="p">(</span><span class="n">poids</span><span class="p">),</span> <span class="n">poste</span><span class="p">])</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Nbre de joueurs:"</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">joueurs</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Premier joueur:"</span><span class="p">,</span> <span class="n">joueurs</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Quatrième joueur:"</span><span class="p">,</span> <span class="n">joueurs</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Nbre de joueurs: 239
Premier joueur: [176, 85, 'Demi mêlée']
Quatrième joueur: [180, 95, 'Centre']
</pre></div>

</div>
</div>
<h3 id="lister-les-postes" class="anchored">Lister les postes</h3>
<p>Compléter le code suivant pour créer une liste des postes existants.</p>
<div class="highlight"><pre><span></span><span class="n">postes</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">joueur</span> <span class="ow">in</span> <span class="n">joueurs</span><span class="p">:</span>
<span class="n">    poste</span> <span class="o">=</span> <span class="o">...</span>
<span class="k">    if</span> <span class="n">poste</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">postes</span><span class="p">:</span>
<span class="o">        ...</span>
<span class="c1">        
## tests</span>
<span class="k">assert</span> <span class="nb">len</span><span class="p">(</span><span class="n">postes</span><span class="p">)</span> <span class="o">==</span> <span class="mi">10</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Si on choisissait au hasard on aurait une chance sur 10"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Soit 90</span><span class="si">% d</span><span class="s2">'erreurs"</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">postes</span> <span class="o">==</span> <span class="p">[</span><span class="s1">'Demi mêlée'</span><span class="p">,</span>
<span class="s1"> 'Arrière'</span><span class="p">,</span>
<span class="s1"> '1ère ligne'</span><span class="p">,</span>
<span class="s1"> 'Centre'</span><span class="p">,</span>
<span class="s1"> 'Ailier'</span><span class="p">,</span>
<span class="s1"> '3e ligne'</span><span class="p">,</span>
<span class="s1"> 'Trois quart aile'</span><span class="p">,</span>
<span class="s1"> 'Trois quart centre'</span><span class="p">,</span>
<span class="s2"> "Demi d'ouverture"</span><span class="p">,</span>
<span class="s1"> '2e ligne'</span><span class="p">]</span>
</pre></div>

<div class="cell" data-tags="[&quot;correction&quot;]" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="n">postes</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">joueur</span> <span class="ow">in</span> <span class="n">joueurs</span><span class="p">:</span>
<span class="c1">    # le poste est à l'indice 2</span>
<span class="n">    poste</span> <span class="o">=</span> <span class="n">joueur</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span>
<span class="k">    if</span> <span class="n">poste</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">postes</span><span class="p">:</span>
<span class="n">        postes</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">poste</span><span class="p">)</span>
<span></span>
<span class="c1">## tests</span>
<span class="k">assert</span> <span class="nb">len</span><span class="p">(</span><span class="n">postes</span><span class="p">)</span> <span class="o">==</span> <span class="mi">10</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Si on choisissait au hasard on aurait une chance sur 10"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Soit 90</span><span class="si">% d</span><span class="s2">'erreur"</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">postes</span> <span class="o">==</span> <span class="p">[</span><span class="s1">'Demi mêlée'</span><span class="p">,</span>
<span class="s1"> 'Arrière'</span><span class="p">,</span>
<span class="s1"> '1ère ligne'</span><span class="p">,</span>
<span class="s1"> 'Centre'</span><span class="p">,</span>
<span class="s1"> 'Ailier'</span><span class="p">,</span>
<span class="s1"> '3e ligne'</span><span class="p">,</span>
<span class="s1"> 'Trois quart aile'</span><span class="p">,</span>
<span class="s1"> 'Trois quart centre'</span><span class="p">,</span>
<span class="s2"> "Demi d'ouverture"</span><span class="p">,</span>
<span class="s1"> '2e ligne'</span><span class="p">]</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Si on choisissait au hasard on aurait une chance sur 10
Soit 90% d'erreur
</pre></div>

</div>
</div>
<h3 id="observation-des-postes-sur-un-graphique" class="anchored">Observation des postes sur un graphique</h3>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="k">def</span> <span class="nf">tracé_graph</span><span class="p">(</span><span class="n">joueurs</span><span class="p">):</span>
<span class="k">    for</span> <span class="n">poste</span> <span class="ow">in</span> <span class="n">postes</span><span class="p">:</span>
<span class="c1">        # poids des joueurs à ce poste</span>
<span class="n">        poids</span> <span class="o">=</span> <span class="p">[</span><span class="n">joueur</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="k">for</span> <span class="n">joueur</span> <span class="ow">in</span> <span class="n">joueurs</span> <span class="k">if</span> <span class="n">joueur</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">==</span> <span class="n">poste</span><span class="p">]</span>
<span class="c1">        # taille des joueurs à ce poste</span>
<span class="n">        tailles</span> <span class="o">=</span> <span class="p">[</span><span class="n">joueur</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="k">for</span> <span class="n">joueur</span> <span class="ow">in</span> <span class="n">joueurs</span> <span class="k">if</span> <span class="n">joueur</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">==</span><span class="n">poste</span><span class="p">]</span>
<span class="n">        plt</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="n">poids</span><span class="p">,</span> <span class="n">tailles</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="n">poste</span><span class="p">,</span> <span class="n">alpha</span><span class="o">=</span><span class="mf">0.7</span><span class="p">)</span>
<span class="c1">    # Annotations du graphique</span>
<span class="n">    plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">"poids(kg)"</span><span class="p">)</span>
<span class="n">    plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"taille(cm)"</span><span class="p">)</span>
<span class="n">    plt</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
<span class="n">       
tracé_graph</span><span class="p">(</span><span class="n">joueurs</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display">
<p><img src="exo_files/figure-html/cell-4-output-1.png" width="593" height="429"></p>
</div>
</div>
<h3 id="séparation-des-données-pour-le-test" class="anchored">Séparation des données pour le test</h3>
<p>On divise les données en deux parties:</p>
<ul>
<li>entrainement: les 190 premiers joueurs</li>
<li>test: les 49 derniers</li>
</ul>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="n">train</span> <span class="o">=</span> <span class="p">[</span><span class="n">joueurs</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">190</span><span class="p">)]</span>
<span class="n">test</span> <span class="o">=</span> <span class="p">[</span><span class="n">joueurs</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">190</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">joueurs</span><span class="p">))]</span>
<span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">),</span> <span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="4">
<div class="highlight"><pre><span></span>(190, 49)
</pre></div>

</div>
</div>
<h3 id="implémentation-de-la-fonction-distance" class="anchored">Implémentation de la fonction distance</h3>
<p>On mesure la distance Euclidienne entre deux joueurs sur le graphique grâce au théorème de Pythagore dans la fonction <code>def distance(j1, j2)</code>.</p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">distance</span><span class="p">(</span><span class="n">j1</span><span class="p">,</span> <span class="n">j2</span><span class="p">):</span>
<span class="s2">    "calcule la distance euclidienne entre deux joueurs"</span>
<span class="n">    x1</span><span class="p">,</span> <span class="n">y1</span><span class="p">,</span> <span class="n">p1</span> <span class="o">=</span> <span class="n">j1</span>
<span class="n">    x2</span><span class="p">,</span> <span class="n">y2</span><span class="p">,</span> <span class="n">p2</span> <span class="o">=</span> <span class="n">j2</span>
<span class="k">    return</span> <span class="p">((</span><span class="n">x2</span><span class="o">-</span><span class="n">x1</span><span class="p">)</span><span class="o">**</span><span class="mi">2</span><span class="o">+</span><span class="p">(</span><span class="n">y2</span><span class="o">-</span><span class="n">y1</span><span class="p">)</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span><span class="o">**</span><span class="mf">0.5</span>
<span></span>
<span class="c1">## appel entre les deux premiers joueurs des jeux de données</span>
<span class="n">distance</span><span class="p">(</span><span class="n">train</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">test</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="5">
<div class="highlight"><pre><span></span>30.01666203960727
</pre></div>

</div>
</div>
<h3 id="algorithme-du-plus-proche-voisin" class="anchored">Algorithme du plus proche voisin</h3>
<p>On commnce par écrire une fonction qui recherche dans les données d’entrainement(<code>train</code>) le joueur le plus proche du joueur de test d’indice <code>i</code>.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">:</span> <span class="nb">int</span><span class="p">):</span>
<span class="s2">    "Renvoie le poste du plus proche voisin dans train du joueur de test d'indice i"</span>
<span class="n">    joueur_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="c1">    # on initialise l'indice et la distance minimum sur </span>
<span class="c1">    # la première donnée d'entraînement</span>
<span class="n">    j_mini</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">    d_mini</span> <span class="o">=</span> <span class="n">distance</span><span class="p">(</span><span class="n">joueur_test</span><span class="p">,</span> <span class="n">train</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
<span class="c1">    # on recherche le joueur avec la distance minimum</span>
<span class="c1">    # dans les données d'entrainement</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">)):</span>
<span class="n">        d</span> <span class="o">=</span> <span class="n">distance</span><span class="p">(</span><span class="n">joueur_test</span><span class="p">,</span> <span class="n">train</span><span class="p">[</span><span class="n">j</span><span class="p">])</span>
<span class="o">        ...</span>
<span class="k">        
    return</span> <span class="o">...</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 1e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 2e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 3e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">2</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">2</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision fausse pour le 4e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="o">!=</span> <span class="n">test</span><span class="p">[</span><span class="mi">3</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'Ailier'</span> 
</pre></div>

<div class="cell" data-tags="[&quot;correction&quot;]" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">:</span> <span class="nb">int</span><span class="p">):</span>
<span class="s2">    "Renvoie le poste du plus proche voisin dans train du joueur de test d'indice i"</span>
<span class="n">    joueur_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="c1">    # on initialise la distance minimum sur </span>
<span class="c1">    # des données d'entraînement</span>
<span class="n">    j_mini</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">    d_mini</span> <span class="o">=</span> <span class="n">distance</span><span class="p">(</span><span class="n">joueur_test</span><span class="p">,</span> <span class="n">train</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">)):</span>
<span class="c1">        # on calcule la distance du joueur_test</span>
<span class="c1">        # avec le joueur d'indice j</span>
<span class="n">        d</span> <span class="o">=</span> <span class="n">distance</span><span class="p">(</span><span class="n">joueur_test</span><span class="p">,</span> <span class="n">train</span><span class="p">[</span><span class="n">j</span><span class="p">])</span>
<span class="k">        if</span> <span class="n">d</span> <span class="o">&lt;</span> <span class="n">d_mini</span><span class="p">:</span>
<span class="c1">            # c'est le nouveau minimum</span>
<span class="n">            j_mini</span> <span class="o">=</span> <span class="n">j</span>
<span class="n">            d_mini</span> <span class="o">=</span> <span class="n">d</span>
<span class="c1">    # je renvoie le poste(indice 2) du </span>
<span class="c1">    # joueur étant à l'indice i_mini</span>
<span class="k">    return</span> <span class="n">train</span><span class="p">[</span><span class="n">j_mini</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span></span>
<span class="nb">
print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 1e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 2e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision juste pour le 3e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">2</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">==</span> <span class="n">test</span><span class="p">[</span><span class="mi">2</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Prévision fausse pour le 4e joueur"</span><span class="p">,</span> <span class="n">test</span><span class="p">[</span><span class="mi">3</span><span class="p">],</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="o">!=</span> <span class="n">test</span><span class="p">[</span><span class="mi">3</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="k">assert</span> <span class="n">plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'Ailier'</span> 
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Prévision juste pour le 1e joueur [177, 115, '1ère ligne'] 1ère ligne
Prévision juste pour le 2e joueur [182, 110, '1ère ligne'] 1ère ligne
Prévision juste pour le 3e joueur [203, 120, '2e ligne'] 2e ligne
Prévision fausse pour le 4e joueur [181, 100, 'Arrière'] Ailier
</pre></div>

</div>
</div>
<h3 id="calcul-du-taux-derreur" class="anchored">Calcul du taux d’erreur</h3>
<p>Puisque l’algorithme commet des erreurs regardons combien il en fait et quel pourcentage cela représente.</p>
<div class="highlight"><pre><span></span><span class="n">erreur</span> <span class="o">=</span> <span class="mi">0</span>
<span class="c1">## compte le nb de fausses prédictions</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">)):</span>
<span class="n">    poste_predit</span> <span class="o">=</span> <span class="n">plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="n">    poste_reel</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="k">    if</span> <span class="o">...</span><span class="p">:</span>
<span class="o">        ...</span>
<span></span>
<span class="k">assert</span> <span class="n">erreur</span> <span class="o">==</span> <span class="mi">22</span>
<span class="nb">print</span><span class="p">(</span><span class="nb">round</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="n">erreur</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">),</span> <span class="mi">1</span><span class="p">),</span> <span class="s2">"</span><span class="si">% d</span><span class="s2">'erreur"</span><span class="p">)</span>  
</pre></div>

<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="n">erreur</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">)):</span>
<span class="n">    poste_predit</span> <span class="o">=</span> <span class="n">plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="n">    poste_reel</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">][</span><span class="mi">2</span><span class="p">]</span>
<span class="k">    if</span> <span class="n">poste_predit</span> <span class="o">!=</span> <span class="n">poste_reel</span><span class="p">:</span>
<span class="n">        erreur</span> <span class="o">=</span> <span class="n">erreur</span> <span class="o">+</span> <span class="mi">1</span>
<span></span>
<span class="k">assert</span> <span class="n">erreur</span> <span class="o">==</span> <span class="mi">22</span>
<span class="nb">print</span><span class="p">(</span><span class="nb">round</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="n">erreur</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">),</span> <span class="mi">1</span><span class="p">),</span> <span class="s2">"</span><span class="si">% d</span><span class="s2">'erreur"</span><span class="p">)</span>     
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>44.9 % d'erreur
</pre></div>

</div>
</div>
<h3 id="algorithme-des-k-plus-proches-voisins" class="anchored">Algorithme des k plus proches voisins</h3>
<p>Plutôt que de regarder le plus proche voisin, nous allons regarder les k plus proches voisins du joueur de test dans les données d’entrainement.</p>
<p>Pour cela nous allons créer une liste des postes des plus proches voisins, puis grâce à la fonction suivante, nous en déduirons le poste le plus probable d’après ces voisins.</p>
<div class="cell" data-execution_count="8">

<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">occurence_max</span><span class="p">(</span><span class="n">tab</span><span class="p">):</span>
<span class="s2">    "Renvoie la valeur qui a le plus d'occurences dans un tableau"</span>
<span class="n">    dico</span> <span class="o">=</span> <span class="p">{</span><span class="n">k</span><span class="p">:</span> <span class="mi">0</span> <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="n">tab</span><span class="p">}</span>
<span class="k">    for</span> <span class="n">k</span> <span class="ow">in</span> <span class="n">tab</span><span class="p">:</span>
<span class="n">        dico</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">+=</span> <span class="mi">1</span>
<span class="n">    
    maxi</span><span class="p">,</span> <span class="n">k_max</span> <span class="o">=</span> <span class="mi">0</span> <span class="p">,</span> <span class="mi">0</span>
<span class="k">    for</span> <span class="n">k</span><span class="p">,</span> <span class="n">v</span> <span class="ow">in</span> <span class="n">dico</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
<span class="k">        if</span> <span class="n">v</span> <span class="o">&gt;</span> <span class="n">maxi</span><span class="p">:</span>
<span class="n">            maxi</span><span class="p">,</span> <span class="n">k_max</span> <span class="o">=</span> <span class="n">v</span> <span class="p">,</span> <span class="n">k</span>
<span class="k">    return</span> <span class="n">k_max</span>
<span></span>
<span class="k">assert</span> <span class="n">occurence_max</span><span class="p">([</span><span class="s2">"Ailier"</span><span class="p">,</span> <span class="s2">"Ailier"</span><span class="p">,</span> <span class="s2">"Pilier"</span><span class="p">])</span> <span class="o">==</span> <span class="s2">"Ailier"</span>
<span class="k">assert</span> <span class="n">occurence_max</span><span class="p">([</span><span class="s2">"Ailier"</span><span class="p">,</span> <span class="s2">"Pilier"</span><span class="p">,</span> <span class="s2">"Ailier"</span><span class="p">])</span> <span class="o">==</span> <span class="s2">"Ailier"</span>
<span class="k">assert</span> <span class="n">occurence_max</span><span class="p">([</span><span class="s2">"Pilier"</span><span class="p">,</span> <span class="s2">"Ailier"</span><span class="p">,</span>  <span class="s2">"Pilier"</span><span class="p">,])</span> <span class="o">==</span> <span class="s2">"Pilier"</span>
</pre></div>

</div>
<p>Il ne reste plus qu’à créer cette liste de poste des plus proches voisins dans la fonction suivante.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">k_plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">k</span><span class="p">:</span><span class="nb">int</span><span class="p">):</span>
<span class="s2">    "Renvoie le poste d'après les k plus proches voisins du joueur de test d'indice i dans train"</span>
<span class="c1">    # joueur dont on cherche le poste</span>
<span class="n">    joueur_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="c1">    # liste destinée à accueillir les postes des k plus proches voisins</span>
<span class="n">    postes_voisins</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">)):</span>
<span class="o">        ...</span>
<span class="k">    
    return</span> <span class="n">occurence_max</span><span class="p">(</span><span class="n">poste_voisins</span><span class="p">)</span>
<span></span>
<span class="c1">## En fonction de k la prévision n'est pas la même</span>
<span class="k">assert</span> <span class="n">k_plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'Ailier'</span>
<span class="k">assert</span> <span class="n">k_plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'1ère ligne'</span>
</pre></div>

<div class="cell" data-tags="[&quot;correction&quot;]" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">k_plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">k</span><span class="p">:</span><span class="nb">int</span><span class="p">):</span>
<span class="s2">    "Renvoie le poste d'après les k plus proches voisins du joueur de test d'indice i dans train"</span>
<span class="n">    joueur_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="c1">    # on crée un tabelau avec toutes les distances et les indices</span>
<span class="n">    distances</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">)):</span>
<span class="n">        joueur</span> <span class="o">=</span> <span class="n">train</span><span class="p">[</span><span class="n">j</span><span class="p">]</span>
<span class="n">        distances</span><span class="o">.</span><span class="n">append</span><span class="p">((</span><span class="n">distance</span><span class="p">(</span><span class="n">joueur</span><span class="p">,</span> <span class="n">joueur_test</span><span class="p">),</span> <span class="n">j</span><span class="p">))</span>
<span class="c1">    # on tri la liste par distance</span>
<span class="n">    distances</span><span class="o">.</span><span class="n">sort</span><span class="p">()</span>
<span class="c1">    # on ne garde que les k premiers</span>
<span class="n">    poste_voisins</span> <span class="o">=</span> <span class="p">[</span><span class="n">train</span><span class="p">[</span><span class="n">distances</span><span class="p">[</span><span class="n">j</span><span class="p">][</span><span class="mi">1</span><span class="p">]][</span><span class="mi">2</span><span class="p">]</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">k</span><span class="p">)]</span>
<span class="k">    
    return</span> <span class="n">occurence_max</span><span class="p">(</span><span class="n">poste_voisins</span><span class="p">)</span>
<span></span>
<span class="c1">## En fonction de k la prévision n'est pas la même</span>
<span class="k">assert</span> <span class="n">k_plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'Ailier'</span>
<span class="k">assert</span> <span class="n">k_plus_proche</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span> <span class="o">==</span> <span class="s1">'1ère ligne'</span>
</pre></div>

</div>
<h3 id="recherche-de-la-meilleure-valeur-de-k" class="anchored">Recherche de la meilleure valeur de k</h3>
<p>Nous allons tracer le taux d’erreur en fonction du nombre k de voisins choisis pour trouver la meilleure valeur de k possible.</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="n">xs</span> <span class="o">=</span> <span class="p">[]</span>
<span class="n">ys</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">train</span><span class="p">)):</span>
<span class="n">    erreur</span> <span class="o">=</span> <span class="mi">0</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">)):</span>
<span class="n">        joueur_test</span> <span class="o">=</span> <span class="n">test</span><span class="p">[</span><span class="n">i</span><span class="p">]</span>
<span class="k">        if</span> <span class="n">joueur_test</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">!=</span> <span class="n">k_plus_proche</span><span class="p">(</span><span class="n">i</span><span class="p">,</span><span class="n">k</span><span class="p">):</span>
<span class="n">            erreur</span> <span class="o">+=</span><span class="mi">1</span>
<span class="n">    xs</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">k</span><span class="p">)</span>
<span class="n">    ys</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="nb">round</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="n">erreur</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">test</span><span class="p">),</span> <span class="mi">1</span><span class="p">))</span>
<span class="n">    
plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">xs</span><span class="p">,</span> <span class="n">ys</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s1">'k'</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">"</span><span class="si">% d</span><span class="s2">'erreur"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="sa">f</span><span class="s2">"Le meilleur résultat (</span><span class="si">{</span><span class="nb">min</span><span class="p">(</span><span class="n">ys</span><span class="p">)</span><span class="si">}</span><span class="s2">% d'erreur) est obtenu avec </span><span class="si">{</span><span class="n">xs</span><span class="p">[</span><span class="n">ys</span><span class="o">.</span><span class="n">index</span><span class="p">(</span><span class="nb">min</span><span class="p">(</span><span class="n">ys</span><span class="p">))]</span><span class="si">}</span><span class="s2"> voisins"</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display">
<p><img src="exo_files/figure-html/cell-11-output-1.png" width="585" height="449"></p>
</div>
</div>
<h3 id="améliorations-possibles" class="anchored">Améliorations possibles</h3>
<p>Comme les tailles des joueurs sont à peu près deux fois plus grandes que les poids, on accorde une plus grande importance à leur taille. On pourrait:</p>
<ul>
<li>Normaliser les tailles et poids.</li>
<li>Utiliser l’IMC.</li>
<li>Rechercher d’autres informations qui nous informeraient sur leurs qualités physiques telles que leur temps au 100 m …</li>
</ul>

