---
tocHTML: '<ul><li><a href="#tri-par-sélection" data-localhref="true">Tri par sélection</a></li><li><a href="#tri-par-insertion" data-localhref="true">Tri par insertion</a></li><li><a href="#épreuve-pratique-sujet-n28-session-2021" data-localhref="true">Épreuve pratique: sujet n°28 session 2021</a></li><li><a href="#réécriture-de-la-fonction-de-tri-par-sélection" data-localhref="true">Réécriture de la fonction de tri par sélection</a></li><li><a href="#épreuve-pratique-sujet-n11-session-2023" data-localhref="true">Épreuve pratique: sujet n°11 session 2023</a></li><li><a href="#un-autre-algorithme-de-tri-le-tri-à-bulles" data-localhref="true">Un autre algorithme de tri: le tri à bulles</a></li></ul>'
---





<h2 id="tri-par-sélection" class="anchored">Tri par sélection</h2>
<ol type="1">
<li><p>Rappeler sans code le principe du tri par sélection.</p></li>
<li><p>Effectuer à la main un tri par sélection des listes suivantes en précisant l’état de la liste à chaque tour de boucle externe:</p>
<ul>
<li><code>[28, 2, 34, 12, 16]</code></li>
<li><code>[1, 3, 7, 9, 16]</code></li>
<li><code>[51, 12, 6, 5, 3]</code></li>
</ul></li>
<li><p>Combien de tours de boucles a-t-il fallu au total (boucle interne et externe) dans chaque cas?</p></li>
</ol>
<h2 id="tri-par-insertion" class="anchored">Tri par insertion</h2>
<ol type="1">
<li><p>Rappeler sans code le principe du tri par insertion.</p></li>
<li><p>Effectuer à la main un tri par insertion des listes suivantes en précisant l’état de la liste à chaque tour de boucle:</p>
<ul>
<li><code>[28, 2, 34, 12, 16]</code></li>
<li><code>[1, 3, 7, 9, 16]</code></li>
<li><code>[51, 12, 6, 5, 3]</code></li>
</ul></li>
<li><p>Combien de tours de boucles a-t-il fallu au total(boucle interne et externe) dans les deuxième et troisième cas?</p></li>
</ol>
<h2 id="épreuve-pratique-sujet-n28-session-2021" class="anchored">Épreuve pratique: sujet n°28 session 2021</h2>
<p>On considère l’algorithme de tri de tableau suivant : à chaque étape, on parcourt depuis le début du tableau tous les éléments non rangés et on place en dernière position le plus grand élément.</p>
<p>Exemple avec le tableau : <code>t = [41, 55, 21, 18, 12, 6, 25]</code></p>
<ul>
<li>Étape 1 : on parcourt tous les éléments du tableau, on permute le plus grand élément avec le dernier.</li>
</ul>
<p>Le tableau devient <code>t = [41, 25, 21, 18, 12, 6, 55]</code></p>
<ul>
<li>Étape 2 : on parcourt tous les éléments <strong>sauf le dernier</strong>, on permute le plus grand élément trouvé avec l’avant-dernier.</li>
</ul>
<p>Le tableau devient : <code>t = [6, 25, 21, 18, 12, 41, 55]</code></p>
<p>Et ainsi de suite. Le code de la fonction <code>tri_iteratif</code> qui implémente cet algorithme est donné ci- dessous.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_iteratif</span><span class="p">(</span><span class="n">tab</span><span class="p">):</span>
<span class="k">    for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="o">...</span><span class="p">,</span> <span class="mi">0</span> <span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="n">        imax</span> <span class="o">=</span> <span class="o">...</span>
<span class="k">        for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="o">...</span><span class="p">):</span>
<span class="k">            if</span> <span class="n">tab</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">&gt;</span> <span class="o">...</span> <span class="p">:</span>
<span class="n">                imax</span> <span class="o">=</span> <span class="n">i</span>
<span class="k">        if</span> <span class="n">tab</span><span class="p">[</span><span class="nb">max</span><span class="p">]</span> <span class="o">&gt;</span> <span class="o">...</span> <span class="p">:</span>
<span class="o">            ...</span><span class="p">,</span> <span class="n">tab</span><span class="p">[</span><span class="n">imax</span><span class="p">]</span> <span class="o">=</span> <span class="n">tab</span><span class="p">[</span><span class="n">imax</span><span class="p">],</span> <span class="o">...</span>
<span class="k">    return</span> <span class="n">tab</span>
</pre></div>

<p>Compléter le code qui doit donner :</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">tri_iteratif</span><span class="p">([</span><span class="mi">41</span><span class="p">,</span> <span class="mi">55</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">25</span><span class="p">])</span>
<span class="p">[</span><span class="mi">6</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">25</span><span class="p">,</span> <span class="mi">41</span><span class="p">,</span> <span class="mi">55</span><span class="p">]</span>
</pre></div>

<p>On rappelle que l’instruction <code>a, b = b, a</code> échange les contenus de <code>a</code> et <code>b</code>.</p>
<h2 id="réécriture-de-la-fonction-de-tri-par-sélection" class="anchored">Réécriture de la fonction de tri par sélection</h2>
<ol type="1">
<li><p>Écrire une fonction <code>indice_min(tab, i)</code> qui renvoie l’indice du minimum du tableau compris entre l’indice <code>i</code> et la fin du tableau <code>tab</code>.</p>
<p>Par exemple l’appel <code>indice_min([3,15,45,12,7,9], 2)</code> renvoie <code>4</code>.</p></li>
<li><p>Utiliser cette fonction <code>indice_min</code> pour réécrire la fonction <code>tri_par_selection(tab)</code> qui trie le tableau <code>tab</code> selon l’algorithme de tri par sélection.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_par_selection</span><span class="p">(</span><span class="n">tab</span><span class="p">):</span>
<span class="k">   for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">tab</span><span class="p">)):</span>
<span class="c1">      # appel de la fonction indice_min</span>
<span class="o">      ...</span>
<span class="c1">      # permutation des valeurs pour placer </span>
<span class="c1">      # le ième plus petit élément à l'indice i</span>
<span class="o">      ...</span>
</pre></div>
</li>
<li><p>Vérifier que la modification de <code>tab</code> s’effectue en place et donc que le tableau <code>tab</code> initial est écrasé par l’application de la fonction.</p>
<div class="highlight"><pre><span></span><span class="n">tab</span> <span class="o">=</span> <span class="p">[</span><span class="mi">12</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span><span class="p">]</span>
<span class="n">tri_par_selection</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">tab</span> <span class="o">==</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">12</span><span class="p">]</span>
</pre></div>
</li>
<li><p>Modifier le code pour renvoyer un nouveau tableau trié sans modifier le tableau initial <code>tab</code>.</p>
<div class="highlight"><pre><span></span><span class="n">tab</span> <span class="o">=</span> <span class="p">[</span><span class="mi">12</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span><span class="p">]</span>
<span class="n">trié</span> <span class="o">=</span> <span class="n">tri_par_selection</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">tab</span> <span class="o">==</span> <span class="p">[</span><span class="mi">12</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span><span class="p">]</span>
<span class="k">assert</span> <span class="n">trié</span> <span class="o">==</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">12</span><span class="p">]</span>
</pre></div>
</li>
</ol>
<h2 id="épreuve-pratique-sujet-n11-session-2023" class="anchored">Épreuve pratique: sujet n°11 session 2023</h2>
<p>La fonction <code>tri_insertion</code> suivante prend en argument une liste <code>tab</code> et trie cette liste en utilisant la méthode du tri par insertion. Compléter cette fonction pour qu’elle réponde à la spécification demandée.</p>
<p>On rappelle le principe du tri par insertion : on considère les éléments à trier un par un, le premier élément constituant, à lui tout seul, une liste triée de longueur 1. On range ensuite le second élément pour constituer une liste triée de longueur 2, puis on range le troisième élément pour avoir une liste triée de longueur 3 et ainsi de suite… A chaque étape, le premier élément de la sous-liste non triée est placé dans la sous-liste des éléments déjà triés de sorte que cette sous-liste demeure triée.</p>
<p>Le principe du tri par insertion est donc d’insérer à la n-ième itération, le n-ième élément à la bonne place.</p>

<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_insertion</span><span class="p">(</span><span class="n">tab</span><span class="p">):</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">tab</span><span class="p">)</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">n</span><span class="p">):</span>
<span class="n">        valeur_insertion</span> <span class="o">=</span> <span class="n">tab</span><span class="p">[</span><span class="o">...</span><span class="p">]</span>
<span class="c1">        # la variable j sert à déterminer où placer la valeur à ranger</span>
<span class="n">        j</span> <span class="o">=</span> <span class="o">...</span>
<span class="c1">        # tant qu'on a pas trouvé la place de l'élément à insérer</span>
<span class="c1">        # on décale les valeurs du tableau vers la droite</span>
<span class="k">        while</span> <span class="n">j</span> <span class="o">&gt;</span> <span class="o">...</span> <span class="ow">and</span> <span class="n">valeur_insertion</span> <span class="o">&lt;</span> <span class="n">tab</span><span class="p">[</span><span class="o">...</span><span class="p">]:</span>
<span class="n">            tab</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="n">tab</span><span class="p">[</span><span class="n">j</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>
<span class="n">            j</span> <span class="o">=</span> <span class="o">...</span>
<span class="n">        tab</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="o">...</span>
</pre></div>

<p>Exemples :</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">liste</span> <span class="o">=</span> <span class="p">[</span><span class="mi">9</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">6</span><span class="p">]</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">tri_insertion</span><span class="p">(</span><span class="n">liste</span><span class="p">)</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">liste</span>
<span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">10</span><span class="p">]</span>
</pre></div>

<h2 id="un-autre-algorithme-de-tri-le-tri-à-bulles" class="anchored">Un autre algorithme de tri: le tri à bulles</h2>
<blockquote class="blockquote">
<p>Sujet 43 de l’épreuve pratique 2023.</p>
</blockquote>
<p>La fonction <code>tri_bulles</code> prend en paramètre une liste <code>T</code> d’entiers non triés et renvoie la liste triée par ordre croissant.</p>
<p>Le tri à bulles est un tri en place qui commence par placer le plus grand élément en dernière position en parcourant la liste de gauche à droite et en échangeant au passage les éléments voisins mal ordonnés (si la valeur de l’élément d’indice <code>i</code> a une valeur strictement supérieure à celle de l’indice <code>i + 1</code>, ils sont échangés). Le tri place ensuite en avant-dernière position le plus grand élément de la liste privée de son dernier élément en procédant encore à des échanges d’éléments voisins. Ce principe est répété jusqu’à placer le minimum en première position.</p>
<p>Exemple : pour trier la liste <code>[7, 9, 4, 3]</code> :</p>
<ul>
<li>première étape : 7 et 9 ne sont pas échangés, puis 9 et 4 sont échangés, puis 9 et 3 sont échangés, la liste est alors <code>[7, 4, 3, 9]</code></li>
<li>deuxième étape : 7 et 4 sont échangés, puis 7 et 3 sont échangés, la liste est alors <code>[4, 3, 7, 9]</code></li>
<li>troisième étape : 4 et 3 sont échangés, la liste est alors <code>[3, 4, 7, 9]</code></li>
</ul>
<p>Compléter le code Python ci-dessous qui implémente la fonction tri_bulles.</p>

<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">tri_bulles</span><span class="p">(</span><span class="n">T</span><span class="p">):</span>
<span class="w">    </span><span class="sd">'''</span>
<span class="sd">    Renvoie le tableau T trié par ordre croissant</span>
<span class="sd">    '''</span>
<span class="n">    n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">T</span><span class="p">)</span>
<span class="k">    for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="o">...</span><span class="p">,</span><span class="o">...</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="k">        for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i</span><span class="p">):</span>
<span class="k">            if</span> <span class="n">T</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">&gt;</span> <span class="n">T</span><span class="p">[</span><span class="o">...</span><span class="p">]:</span>
<span class="o">                ...</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="n">j</span><span class="p">]</span>
<span class="n">                T</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="o">...</span><span class="p">]</span>
<span class="n">                T</span><span class="p">[</span><span class="n">j</span><span class="o">+</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="n">temp</span>
<span class="k">    return</span> <span class="n">T</span>
</pre></div>

<p>Exemples :</p>
<div class="highlight"><pre><span></span><span class="o">&gt;&gt;&gt;</span> <span class="n">tri_bulles</span><span class="p">([])</span>
<span class="p">[]</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">tri_bulles</span><span class="p">([</span><span class="mi">7</span><span class="p">])</span>
<span class="p">[</span><span class="mi">7</span><span class="p">]</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">tri_bulles</span><span class="p">([</span><span class="mi">9</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">6</span><span class="p">])</span>
<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">]</span>
<span class="o">&gt;&gt;&gt;</span> <span class="n">tri_bulles</span><span class="p">([</span><span class="mi">9</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">3</span><span class="p">])</span>
<span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">9</span><span class="p">]</span>
</pre></div>

