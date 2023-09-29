---
tocHTML: '<ul><li><a href="#implémentation-de-la-classe-pile" data-localhref="true">Implémentation de la classe <code>Pile</code></a></li><li><a href="#implémentation-de-la-classe-file" data-localhref="true">Implémentation de la classe <code>File</code></a></li><li><a href="#exercice-type-bac" data-localhref="true">Exercice type BAC</a></li></ul>'
---





<h2 id="implémentation-de-la-classe-pile" class="anchored">Implémentation de la classe <code>Pile</code></h2>
<p>Créer une classe <code>Pile</code> qui implémente le type abstrait pile en stockant les données de la pile dans un attribut privé <code>_data</code> de type <code>list</code>.</p>
<ul>
<li>L’initialisation s’effectue sans argument et affecte une liste vide à l’attribut <code>_data</code>.</li>
<li>La méthode <code>empiler(élément)</code> ajoute l’élément à la fin de l’attribut <code>_data</code>.</li>
<li>La méthode <code>dépiler()</code> retire l’élément à la fin de l’attribut <code>_data</code> et le renvoie.</li>
<li>La méthode <code>est_vide()</code> renvoie <code>True</code> si la pile est vide et <code>False</code> sinon.</li>
<li>La méthode <code>sommet()</code> renvoie l’élément présent au sommet de la pile, et <code>None</code> si la pile est vide.</li>
</ul>
<p>Voici une série de tests à passer.</p>
<div class="highlight"><pre><span></span><span class="n">pile</span> <span class="o">=</span> <span class="n">Pile</span><span class="p">()</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">True</span>
<span></span>
<span class="n">pile</span><span class="o">.</span><span class="n">empiler</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">sommet</span><span class="p">()</span> <span class="o">==</span> <span class="mi">1</span>
<span></span>
<span class="n">pile</span><span class="o">.</span><span class="n">empiler</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">sommet</span><span class="p">()</span> <span class="o">==</span> <span class="mi">2</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span></span>
<span class="n">pile</span><span class="o">.</span><span class="n">empiler</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">sommet</span><span class="p">()</span> <span class="o">==</span> <span class="mi">3</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">dépiler</span><span class="p">()</span> <span class="o">==</span> <span class="mi">3</span>
<span></span>
<span class="k">while</span> <span class="ow">not</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">():</span>
<span class="n">    pile</span><span class="o">.</span><span class="n">dépiler</span><span class="p">()</span>
<span></span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">True</span>
<span class="k">assert</span> <span class="n">pile</span><span class="o">.</span><span class="n">sommet</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">None</span>
</pre></div>

<p><strong>Pour aller plus loin</strong>, modifier la classe <code>Pile</code> afin que <code>sommet()</code> ne soit plus une méthode, mais un attribut <code>sommet</code>. La série de tests précédents devra être modifié en supprimant les parenthèses des appels des méthodes <code>pile.sommet()</code> en <code>pile.sommet</code>.</p>
<h2 id="implémentation-de-la-classe-file" class="anchored">Implémentation de la classe <code>File</code></h2>
<p>Créer une classe <code>File</code> qui implémente le type abstrait file en stockant les données de la file dans un attribut privé <code>_data</code> de type <code>collections.deque</code> présentée dans le cours et dont vous pouvez consulter la documentation grâce à la fonction <code>help()</code>.</p>
<ul>
<li>L’initialisation s’effectue sans argument et affecte une liste chaînée double vide à l’attribut <code>_data</code>.</li>
<li>La méthode <code>enfiler(élément)</code> ajoute l’élément à la tête de l’attribut <code>_data</code>.</li>
<li>La méthode <code>défiler()</code> retire l’élément de la queue de l’attribut <code>_data</code> et le renvoie.</li>
<li>La méthode <code>est_vide()</code> renvoie <code>True</code> si la file est vide et <code>False</code> sinon.</li>
<li>La méthode <code>tête()</code> renvoie l’élément présent à la tête de la file, et <code>None</code> si la file est vide.</li>
</ul>
<p>Voici une série de tests à passer.</p>
<div class="highlight"><pre><span></span><span class="n">file</span> <span class="o">=</span> <span class="n">File</span><span class="p">()</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">True</span>
<span></span>
<span class="n">file</span><span class="o">.</span><span class="n">enfiler</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">tête</span><span class="p">()</span> <span class="o">==</span> <span class="mi">1</span>
<span></span>
<span class="n">file</span><span class="o">.</span><span class="n">enfiler</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">tête</span><span class="p">()</span> <span class="o">==</span> <span class="mi">1</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span></span>
<span class="n">file</span><span class="o">.</span><span class="n">enfiler</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">tête</span><span class="p">()</span> <span class="o">==</span> <span class="mi">1</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">False</span>
<span></span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">défiler</span><span class="p">()</span> <span class="o">==</span> <span class="mi">1</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">défiler</span><span class="p">()</span> <span class="o">==</span> <span class="mi">2</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">défiler</span><span class="p">()</span> <span class="o">==</span> <span class="mi">3</span>
<span></span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">True</span>
<span class="k">assert</span> <span class="n">file</span><span class="o">.</span><span class="n">tête</span><span class="p">()</span> <span class="ow">is</span> <span class="kc">None</span>
</pre></div>

<p><strong>Pour aller plus loin</strong>, modifier la classe <code>File</code> afin que <code>tête()</code> ne soit plus une méthode, mais un attribut <code>tête</code>. La série de tests précédents devra être modifié en supprimant les parenthèses des appels des méthodes <code>file.tête()</code> en <code>file.tête</code>.</p>
<h2 id="exercice-type-bac" class="anchored">Exercice type BAC</h2>
<blockquote class="blockquote">
<p>Cet exercice porte sur la notion de pile, de file et sur la programmation de base en Python.</p>
</blockquote>
<blockquote class="blockquote">
<p>Il est extrait du BAC 2021 Amérique du Nord sujet 1 Exercice 5.</p>
</blockquote>
<p>Les interfaces des structures de données abstraites <code>Pile</code> et <code>File</code> sont proposées ci-dessous. On utilisera uniquement les fonctions ci-dessous :</p>
<hr>
<p><strong>Structure de données abstraite: Pile</strong></p>
<p>Utilise: Élément, Booléen</p>
<p>Opérations:</p>
<ul>
<li><p><code>creer_pile_vide:∅ → Pile</code></p>
<p><code>creer_pile_vide()</code> renvoie une pile vide</p></li>
<li><p><code>est_vide:Pile → Booléen</code></p>
<p><code>est_vide(pile)</code> renvoie <code>True</code> si <code>pile</code> est vide, <code>False</code> sinon</p></li>
<li><p><code>empiler: Pile,Élément → ∅</code></p>
<p><code>empiler(pile,element)</code> ajoute <code>element</code> à la pile pile</p></li>
<li><p><code>depiler: Pile → Élément</code></p>
<p><code>depiler(pile)</code> renvoie l’élément au sommet de la pile en le retirant de la <code>pile</code></p></li>
</ul>
<hr>
<p><strong>Structure de données abstraite: File</strong></p>
<p>Utilise: Élément, Booléen</p>
<p>Opérations:</p>
<ul>
<li><p><code>creer_file_vide: ∅ → File</code></p>
<p><code>creer_file_vide()</code> renvoie une file vide</p></li>
<li><p><code>est_vide:File → Booléen</code></p>
<p><code>est_vide(file)</code> renvoie <code>True</code> si file est vide, <code>False</code> sinon</p></li>
<li><p><code>enfiler: File, Élément → ∅</code></p>
<p><code>enfiler(file,element)</code> ajoute element dans la file <code>file</code></p></li>
<li><p><code>defiler: File → Élément</code></p>
<p><code>defiler(file)</code> renvoie l’élément au sommet de la file <code>file</code> en le retirant de la file <code>file</code>.</p></li>
</ul>
<hr>
<ol type="1">
<li><p>On considère la file <code>F</code> suivante :</p>
<div class="highlight"><pre><span></span><span class="c">             </span><span class="nb">--------------------------------------</span><span class="c">   </span>
<span class="c">enfilement → "rouge" "vert" "jaune" "rouge" "jaune" → défilement</span><span class="nt">.</span>
<span class="c">             </span><span class="nb">--------------------------------------</span>
</pre></div>

<p>Quel sera le contenu de la pile <code>P</code> et de la file <code>F</code> après l’exécution du programme Python suivant?</p>
<div class="highlight"><pre><span></span><span class="n">P</span> <span class="o">=</span> <span class="n">creer_pile_vide</span><span class="p">()</span>
<span class="k">while</span> <span class="ow">not</span><span class="p">(</span><span class="n">est_vide</span><span class="p">(</span><span class="n">F</span><span class="p">)):</span>
<span class="n">    empiler</span><span class="p">(</span><span class="n">P</span><span class="p">,</span> <span class="n">defiler</span><span class="p">(</span><span class="n">F</span><span class="p">))</span>
</pre></div>
</li>
<li><p>Créer une fonction <code>taille_file</code> qui prend en paramètre une file <code>F</code> et qui renvoie le nombre d’éléments qu’elle contient. Après appel de cette fonction la file <code>F</code> doit avoir retrouvé son état d’origine.</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">taille_file</span><span class="p">(</span><span class="n">F</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""File -&gt; Int"""</span>
</pre></div>
</li>
<li><p>Écrire une fonction <code>former_pile</code> qui prend en paramètre une file <code>F</code> et qui renvoie une pile <code>P</code> contenant les mêmes éléments que la file.</p>
<p>Le premier élément sorti de la file devra se trouver au sommet de la pile; le deuxième élément sorti de la file devra se trouver juste en-dessous du sommet, etc.</p>
<p>Exemple: si</p>
<div class="highlight"><pre><span></span><span class="c">    </span><span class="nb">--------------------------------------</span>
<span class="c">F = "rouge" "vert" "jaune" "rouge" "jaune"</span>
<span class="c">    </span><span class="nb">--------------------------------------</span>
</pre></div>

<p>alors l’appel <code>former_pile(F)</code> va renvoyer la pile <code>P</code> ci-dessous :</p>
<div class="highlight"><pre><span></span><span class="w">     </span><span class="o">|</span><span class="w"> </span><span class="s">"jaune"</span><span class="w"> </span><span class="o">|</span><span class="w"> </span><span class="o">-&gt;</span><span class="w"> </span><span class="n">sommet</span>
<span class="w">     </span><span class="o">|</span><span class="w"> </span><span class="s">"rouge"</span><span class="w"> </span><span class="o">|</span>
<span class="n">P</span><span class="w"> </span><span class="o">=</span><span class="w">  </span><span class="o">|</span><span class="w"> </span><span class="s">"jaune"</span><span class="w"> </span><span class="o">|</span>
<span class="w">     </span><span class="o">|</span><span class="w"> </span><span class="s">"vert"</span><span class="w">  </span><span class="o">|</span>
<span class="w">     </span><span class="o">|</span><span class="w"> </span><span class="s">"rouge"</span><span class="w"> </span><span class="o">|</span>
<span class="w">     </span><span class="o">-----------</span>
</pre></div>
</li>
<li><p>Écrire une fonction <code>nb_elements</code> qui prend en paramètres une file <code>F</code> et un élément <code>elt</code> et qui renvoie le nombre de fois où <code>elt</code> est présent dans la file <code>F</code>. Après appel de cette fonction la file <code>F</code> doit avoir retrouvé son état d’origine.</p></li>
<li><p>Écrire une fonction <code>verifier_contenu</code> qui prend en paramètres une file <code>F</code> et trois entiers: <code>nb_rouge</code>, <code>nb_vert</code> et <code>nb_jaune</code>. Cette fonction renvoie le booléen <code>True</code> si “rouge” apparaît au plus <code>nb_rouge</code>fois dans la file <code>F</code>, “vert” apparaît au plus <code>nb_vert</code>fois dans la file <code>F</code> et “jaune” apparaît au plus <code>nb_jaune</code> fois dans la file <code>F</code>. Elle renvoie <code>False</code> sinon. On pourra utiliser les fonctions précédentes.</p></li>
</ol>

