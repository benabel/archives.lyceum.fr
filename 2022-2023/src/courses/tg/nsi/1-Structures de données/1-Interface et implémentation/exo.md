---
tocHTML: '<ul><li><a href="#choisir-une-structure-de-donnée" data-localhref="true">Choisir une structure de donnée</a></li><li><a href="#implémentation-de-la-classe-tableau" data-localhref="true">Implémentation de la classe <code>Tableau</code></a></li></ul>'
---





<h2 id="choisir-une-structure-de-donnée" class="anchored">Choisir une structure de donnée</h2>
<p>Dans chaque cas, indiquer quelle structure de données vous semble la plus adaptée, et donner une exemple de création et d’interaction avec la structure de données.</p>
<ol type="1">
<li>Une personne avec son nom, prénom, adresse email.</li>
<li>Les notes de nsi d’un élève au cours d’un trimestre.</li>
<li>Les notes de nsi de tous les élèves d’une classe au cours d’un trimestre.</li>
<li>Une grille de sudoku <wc-wikimage title="Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg" class="half"></wc-wikimage></li>
</ol>
<h2 id="implémentation-de-la-classe-tableau" class="anchored">Implémentation de la classe <code>Tableau</code></h2>
<ol type="1">
<li><p>Créer une classe <code>Tableau</code> qui implémente les quatre méthodes ci-dessous en stockant les données du tableau dans un attribut appelé <code>data</code> de type <code>list</code>e.</p>
<ul>
<li>« Insérer » : ajoute un élément dans le tableau à l’index souhaité. <code>tableau.ajout(index, élément)</code> ;</li>
<li>« Retirer » : retire un élément de le tableau à l’index souhaité. <code>tableau.suppr(index)</code> ;</li>
<li>« Le tableau est-il vide ? » : renvoie « vrai » si le tableau est vide, « faux » sinon. <code>tableau.est_vide()</code></li>
<li>« Nombre d’éléments dans le tableau » : renvoie le nombre d’éléments dans le tableau. <code>tableau.longueur()</code></li>
</ul>
<p>On donne ci-dessous une séquence d’instructions d’initialisation et d’utilisation d’un <code>tableau</code>.</p>

<div class="highlight"><pre><span></span><span class="c1"># instanciation</span>
<span class="n">tab</span> <span class="o">=</span> <span class="n">Tableau</span><span class="p">()</span>
<span></span>
<span class="c1"># utilisation</span>
<span class="n">tab</span><span class="o">.</span><span class="n">longueur</span><span class="p">()</span> <span class="c1"># renvoie 0</span>
<span class="n">tab</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="c1"># renvoie True</span>
<span class="n">tab</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="s2">"pomme"</span><span class="p">)</span>
<span class="n">tab</span><span class="o">.</span><span class="n">data</span> <span class="c1"># renvoie ['pomme']</span>
<span class="n">tab</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="s2">"poire"</span><span class="p">)</span>
<span class="n">tab</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="s2">"pêche"</span><span class="p">)</span>
<span class="n">tab</span><span class="o">.</span><span class="n">data</span> <span class="c1"># ['pêche', 'pomme', 'poire']</span>
<span class="n">tab</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="c1"># renvoie False</span>
<span class="n">tab</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="n">tab</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="n">tab</span><span class="o">.</span><span class="n">data</span> <span class="c1"># renvoie ['pomme']</span>
</pre></div>
</li>
<li><p>Ajoutez ensuite la possibilité d’initialiser (méthode <code>__init__()</code>)les données du tableau en fournissant un paramètre de type <code>list</code>e lors de l’instanciation. Et ajoutez également une méthode d’affichage du tableau (méthode <code>__repr__()</code>) pour afficher les tableaux sous la forme: <code>"Tableau([e1, e2, ..., en])"</code>.</p>
<p>On donne ci-dessous une séquence d’instructions d’initialisation et d’utilisation d’un <code>tableau</code>.</p>

<div class="highlight"><pre><span></span><span class="c1"># instanciation</span>
<span class="n">tab1</span> <span class="o">=</span> <span class="n">Tableau</span><span class="p">([</span><span class="mi">2</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">5</span><span class="p">])</span>
<span></span>
<span class="c1"># utilisation</span>
<span class="n">tab1</span><span class="o">.</span><span class="n">longueur</span><span class="p">()</span> <span class="c1"># renvoie 3</span>
<span class="n">tab1</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="c1"># renvoie False</span>
<span class="n">tab1</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">12</span><span class="p">)</span>
<span class="n">tab1</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">tab1</span><span class="p">)</span> <span class="c1"># renvoie "Tableau([12, 2, 5])"</span>
</pre></div>
</li>
<li><p><strong>Pour aller plus loin:</strong> <em>Cacher</em> la structure de liste de l’attribut <code>data</code> en autorisant l’initialisation sans les crochets: <code>tab2 = Tableau(2, 6, 5)</code>, et en modifiant la méthode d’affichage pour que: <code>print(tab2)</code> renvoie: <code>"Tableau(2, 6, 5)"</code>.</p>
<p>Pour cela on utilisera le paramètre spécial <code>*args</code>, et la méthode <code>join</code> des <code>str</code> en Python.</p></li>
<li><p><strong>Pour aller encore plus loin:</strong> Rendre l’utilisation des tableaux plus aisée en permettant le chaînage des méthodes <code>tableau.méthode1().méthode2().méthode1()...</code></p>
<p>On donne ci-dessous une séquence d’instructions d’initialisation et d’utilisation d’un <code>tableau</code>.</p>

<div class="highlight"><pre><span></span><span class="c1"># instanciation</span>
<span class="n">tab3</span> <span class="o">=</span> <span class="n">Tableau</span><span class="p">()</span>
<span></span>
<span class="c1"># utilisation</span>
<span class="n">tab3</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">12</span><span class="p">)</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">13</span><span class="p">)</span><span class="o">.</span><span class="n">ajout</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">9</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">tab3</span><span class="p">)</span> <span class="c1"># renvoie "Tableau(9, 12, 13)"</span>
<span class="n">tab3</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">tab3</span><span class="p">)</span> <span class="c1"># renvoie "Tableau(12)"</span>
<span class="n">tab3</span><span class="o">.</span><span class="n">suppr</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">.</span><span class="n">est_vide</span><span class="p">()</span> <span class="c1"># renvoie True</span>
</pre></div>
</li>
</ol>

