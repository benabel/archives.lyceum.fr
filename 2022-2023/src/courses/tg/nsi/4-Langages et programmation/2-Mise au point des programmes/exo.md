---
tocHTML: '<ul><li><a href="#gestion-des-erreurs" data-localhref="true">Gestion des erreurs</a></li><li><a href="#modules-et-tests" data-localhref="true">Modules et tests</a></li></ul>'
---





<h2 id="gestion-des-erreurs" class="anchored">Gestion des erreurs</h2>
<p>Annoter le code suivant en indiquant le type d’erreur parmi: <code>SyntaxError</code>, <code>IndexError</code>, <code>NameError</code>, <code>IndentationError</code> et <code>TypeError</code>. Proposer dans chaque cas une correction.</p>
<div class="highlight"><pre><span></span><span class="n">réponse</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">"Est-ce qu'il pleut? "</span><span class="p">))</span>
<span></span>
<span class="k">if</span> <span class="n">réponse</span> <span class="o">==</span> <span class="n">oui</span><span class="p">:</span> 
<span></span>
<span class="nb">   print</span><span class="p">(</span><span class="s2">"parapluie"</span><span class="p">[</span><span class="mi">9</span><span class="p">])</span>
<span></span>
<span class="k">elif</span> <span class="n">réponse</span> <span class="o">==</span> <span class="s2">"non"</span><span class="p">:</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"pas de parapluie"</span><span class="p">)</span>
<span></span>
<span class="k">else</span> <span class="n">réponse</span> <span class="o">==</span> <span class="s2">"autre"</span><span class="p">:</span>
<span></span>
<span class="nb">    print</span><span class="p">(</span><span class="s2">"Veuillez répondre par "</span><span class="n">oui</span><span class="s2">" ou "</span><span class="n">non</span><span class="s2">")</span>
</pre></div>

<h2 id="modules-et-tests" class="anchored">Modules et tests</h2>
<p>On veut écrire un module dans un fichier <code>carre_liste.py</code> contenant deux fonctions:</p>
<ul>
<li><code>print_carre</code>: qui prend un paramètre <code>tab</code> de type <code>list</code> et qui affiche dans l’ordre le carré de chacun des éléments de la liste d’entrée.</li>
<li><code>map_carre</code>: qui prend un paramètre <code>tab</code> de type <code>list</code> et qui renvoie une nouvelle liste contenant dans l’ordre le carré de chacun des éléments de la liste d’entrée.</li>
</ul>
<ol>
<li><p>Écrire ce module en documentant à l’aide de <code>doctstring</code>s le module et les deux fonctions.</p></li>
<li><p>Écrire ensuite un module de tests dans le fichier <code>test_carre_liste.py</code> qui importe une des deux fonctions du fichier <code>carre_liste.py</code>, et qui la teste sur quelques entrées particulières.</p></li>
<li><p>Pourquoi ne peut-on facilement tester qu’une des deux fonctions ?</p></li>
</ol>

