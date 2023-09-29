---
'tags': ['nsi', 'exercices']
tocHTML: '<ul><li><a href="#recherche-dans-un-annuaire" data-localhref="true">Recherche dans un annuaire</a></li><li><a href="#recherche-dans-un-dictionnaire" data-localhref="true">Recherche dans un dictionnaire</a></li><li><a href="#le-jeu-du-plus-petit-plus-grand" data-localhref="true">Le jeu du “plus petit, plus grand”</a></li></ul>'
---





<h2 id="recherche-dans-un-annuaire" class="anchored">Recherche dans un annuaire</h2>
<p>On suppose que l’on a un annuaire qui contient les huit milliards d’êtres humains dans l’ordre alphabétique de leurs noms, prénom, lieu de naissance et date de naissance.</p>
<p>Combien de comparaisons sont nécessaires pour retrouver une personne dans cet annuaire ?</p>
<h2 id="recherche-dans-un-dictionnaire" class="anchored">Recherche dans un dictionnaire</h2>
<p>La page suivante contient une liste de 336531 mots du français.</p>
<p>https://chrplr.github.io/openlexicon/datasets-info/Liste-de-mots-francais-Gutenberg/liste.de.mots.francais.frgut.txt</p>
<p><a href="https://chrplr.github.io/openlexicon/datasets-info/Liste-de-mots-francais-Gutenberg/README-liste-francais-Gutenberg.html" class="cite-source">openlexicon</a></p>
<p>Après avoir téléchargé le fichier, vous pouvez importer les mots dans une liste avec le code python suivant.</p>
<div class="highlight"><pre><span></span><span class="c1"># initialisation de la liste de mots vide</span>
<span class="n">mots</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="s1">'liste.de.mots.francais.frgut.txt'</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span>
<span class="n">    mots</span> <span class="o">=</span> <span class="p">[</span><span class="n">line</span><span class="o">.</span><span class="n">rstrip</span><span class="p">()</span> <span class="k">for</span> <span class="n">line</span> <span class="ow">in</span> <span class="n">f</span><span class="p">]</span>
<span></span>
<span class="c1"># affichage du nombre de mots</span>
<span class="nb">len</span><span class="p">(</span><span class="n">mots</span><span class="p">)</span> <span class="c1"># renvoie 336531</span>
</pre></div>

<p>En python, le logarithme en base 2 est implémenté dans le module <code>math</code>.</p>
<div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">math</span>
<span class="n">math</span><span class="o">.</span><span class="n">log2</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">mots</span><span class="p">))</span> <span class="c1"># renvoie 18.3603798811634</span>
</pre></div>

<ol type="1">
<li>Implémenter l’algorithme de recherche dichotomique sur la liste <code>mots</code>, et vérifier que dans le pire des cas le résultat de la recherche sera donnée en 19 tours de boucle.</li>
<li>Quel est le cas le plus favorable? le moins favorable?</li>
</ol>
<h2 id="le-jeu-du-plus-petit-plus-grand" class="anchored">Le jeu du “plus petit, plus grand”</h2>
<ol type="1">
<li>Écrire un programme qui joue au jeu du “plus petit-plus grand”:</li>
</ol>
<ul>
<li>Le programme choisit un nombre au hasard entre 1 et 100,</li>
<li>l’utilisateur choisit un nombre au hasard,</li>
<li>l’ordinateur indique si le nombre est plus petit, plus-grand ou deviné, jusqu’à ce que l’utilisateur l’ait trouvé.</li>
</ul>
<ol start="2" type="1">
<li>En combien d’étapes au plus peut-on deviner le nombre:</li>
</ol>
<ul>
<li>Si on procède au hasard?</li>
<li>Si on applique la méthode de la dichotomie?</li>
</ul>
<ol start="3" type="1">
<li>Écrire un autre programme qui cherche à deviner le nombre par la méthode de dichotomie et qui affiche le nombre de tours utilisés.</li>
</ol>
<p><a href="http://www.editions-eyrolles.com/Livre/9782212135435/" class="cite-source">Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek</a></p>

