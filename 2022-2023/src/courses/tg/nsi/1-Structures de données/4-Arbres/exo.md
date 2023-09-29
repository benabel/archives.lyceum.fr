---
tocHTML: '<ul><li><a href="#questions-de-cours" data-localhref="true">Questions de cours</a></li><li><a href="#utilisation-de-la-classe-arbrebinaire" data-localhref="true">Utilisation de la classe <code>ArbreBinaire</code></a></li><li><a href="#arbre-binaire" data-localhref="true">Arbre binaire</a></li><li><a href="#implémentation-dun-arbre-binaire-avec-des-tuples" data-localhref="true">Implémentation d’un arbre binaire avec des tuples</a></li><li><a href="#parcours-en-largeur" data-localhref="true">Parcours en largeur</a></li></ul>'
---





<h2 id="questions-de-cours" class="anchored">Questions de cours</h2>
<ol type="1">
<li><p>Trouver une situation où la représentation sous forme d’arbre est adaptée, et donner un exemple d’arbre dans cette situation avec la signification des nœuds et des arêtes utilisées.</p></li>
<li><p>La racine d’un arbre en informatique est-elle en haut ou en bas d’un arbre? Combien de racines un arbre peut-il avoir?</p></li>
<li><p>Un arbre binaire <em>parfait</em> est un arbre qui est plein à chaque niveau de l’arbre, ce qui signifie que toutes les feuilles ont la même profondeur égale à la hauteur de l’arbre.</p>
<!-- digraph {
 node [color=lightgray fillcolor=lightgray fontcolor=black shape=record style="filled, rounded"]
 140364689978608 [label="<l>|<v> 8|<r>"]
 140364689978608:l -> 140364689973520:v
 140364689978608:r -> 140364689966272:v
 140364689973520 [label="<l>|<v> 10|<r>"]
 140364689973520:l -> 140364686130480:v
 140364689973520:r -> 140364686123424:v
 140364689966272 [label="<l>|<v> 9|<r>"]
 140364689966272:l -> 140364686123376:v
 140364689966272:r -> 140364686124240:v
 140364686130480 [label="<l>|<v> 12|<r>"]
 140364686130480:l -> 140364686130144:v
 140364686130480:r -> 140364686114976:v
 140364686123424 [label="<l>|<v> 14|<r>"]
 140364686123424:l -> 140364686123952:v
 140364686123424:r -> 140364686989856:v
 140364686123376 [label="<l>|<v> 2|<r>"]
 140364686123376:l -> 140364686998160:v
 140364686123376:r -> 140364686995376:v
 140364686124240 [label="<l>|<v> 11|<r>"]
 140364686124240:l -> 140364686994704:v
 140364686124240:r -> 140364686989136:v
 140364686130144 [label="<l>|<v> 5|<r>"]
 140364686114976 [label="<l>|<v> 13|<r>"]
 140364686123952 [label="<l>|<v> 7|<r>"]
 140364686989856 [label="<l>|<v> 1|<r>"]
 140364686998160 [label="<l>|<v> 0|<r>"]
 140364686995376 [label="<l>|<v> 4|<r>"]
 140364686994704 [label="<l>|<v> 6|<r>"]
 140364686989136 [label="<l>|<v> 3|<r>"]
} -->
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/arbre-parfait.svg" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Arbre parfait de hauteur 4</figcaption><p></p>
</figure>
</div>
<p>Combien de nœuds y a-t-il dans un arbre binaire <em>parfait</em> de hauteur 2 ? de hauteur 3 ? de hauteur <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi></mrow><annotation encoding="application/x-tex">h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span></span></span></span>
?</p></li>
<li><p>Dans un arbre binaire <em>complet</em>, tous les étages sont remplis à l’exception du dernier où les nœuds sont rassemblés à gauche.</p>
<!-- 
digraph {
 node [color=lightgray fillcolor=lightgray fontcolor=black shape=record style="filled, rounded"]
 140364686235520 [label="<l>|<v> 7|<r>"]
 140364686235520:l -> 140364686121408:v
 140364686235520:r -> 140364686385088:v
 140364686121408 [label="<l>|<v> 13|<r>"]
 140364686121408:l -> 140364686919712:v
 140364686121408:r -> 140364686927200:v
 140364686385088 [label="<l>|<v> 8|<r>"]
 140364686385088:l -> 140364686927440:v
 140364686385088:r -> 140364686921344:v
 140364686919712 [label="<l>|<v> 9|<r>"]
 140364686919712:l -> 140364686918512:v
 140364686919712:r -> 140364686927392:v
 140364686927200 [label="<l>|<v> 6|<r>"]
 140364686927200:l -> 140364686918704:v
 140364686927440 [label="<l>|<v> 10|<r>"]
 140364686921344 [label="<l>|<v> 12|<r>"]
 140364686918512 [label="<l>|<v> 11|<r>"]
 140364686927392 [label="<l>|<v> 1|<r>"]
 140364686918704 [label="<l>|<v> 4|<r>"]} -->
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/arbre-complet.svg" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Arbre complet de hauteur 4</figcaption><p></p>
</figure>
</div>
<p>Donner un encadrement de la taille d’un arbre complet en fonction de sa hauteur <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi></mrow><annotation encoding="application/x-tex">h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span></span></span></span>
?</p></li>
<li><p>Quelle est la hauteur minimale d’un arbre de taille 7 ? de taille 77 ? de taille 777 ?</p></li>
<li><p>Les calculs écrits sur une calculatrice sont transformés en arbres binaires avec des nœuds de deux types: des nœuds d’opérations (+, -, * , /), et des nœuds de nombres (0, 1, …,9). Proposer l’écriture d’un arbre pour l’opération suivante: <code>5 * 4 + 3 * 2</code>. Écrire les notations préfixe et postfixe de cet arbre.</p></li>
</ol>
<h2 id="utilisation-de-la-classe-arbrebinaire" class="anchored">Utilisation de la classe <code>ArbreBinaire</code></h2>
<p>En utilisant la classe <code>ArbreBinaire</code> définie dans le cours, construire l’arbre binaire suivant:</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sorted_binary_tree_ALL.svg/562px-Sorted_binary_tree_ALL.svg.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">arbre binaire de wikimedia</figcaption><p></p>
</figure>
</div>
<p>Expliquer comment afficher l’étiquette du nœud F en partant de la racine?</p>
<h2 id="arbre-binaire" class="anchored">Arbre binaire</h2>
<p>En utilisant la classe <code>ArbreBinaire</code> définie dans le cours, écrire de façon <strong>récursive</strong> les fonctions suivantes qui prennent un seul paramètre de type <code>ArbreBinaire</code>:</p>
<ul>
<li><code>taille(arbre)</code> renvoie la taille de l’arbre.</li>
<li><code>prefixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre préfixe.</li>
<li><code>infixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre infixe.</li>
<li><code>postfixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre postfixe.</li>
</ul>
<p><strong>En plus:</strong> Écrivez un algorithme non récursif pour effectuer une traversée dans l’ordre infixe d’un arbre. (AIDE: Votre algorithme aura besoin d’une pile pour que cela fonctionne.)</p>
<h2 id="implémentation-dun-arbre-binaire-avec-des-tuples" class="anchored">Implémentation d’un arbre binaire avec des tuples</h2>
<p>Il est possible d’implémenter les arbres binaires avec des <em>tuples (ou listes) imbriqués de longueur 3</em>.</p>
<p>Un <strong>arbre vide</strong> sera représenté par un tuple vide: <code>()</code>.</p>
<p>Un <strong>nœud non vide</strong> sera représenté ainsi:</p>
<ul>
<li>l’index <code>0</code> sera l’étiquette,</li>
<li>l’index <code>1</code> sera le sous-arbre gauche: un tuple éventuellement vide,</li>
<li>l’index <code>2</code> sera le sous-arbre droit: un tuple éventuellement vide.</li>
</ul>
<p><strong>Questions</strong></p>
<ol type="1">
<li><p>Construire l’arbre suivant avec cette représentation:</p>
<p>
</p><p><a href="https://commons.wikimedia.org/wiki/File:Binary_search_tree.svg#/media/Fichier:Binary_search_tree.svg"><img width="256px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png" alt="Binary search tree.svg"></a>Domaine public, <a href="https://commons.wikimedia.org/w/index.php?curid=488330">Lien</a></p>
<p></p>
<p>Expliquer comment accéder à l’étiquette du nœud 7(en partant de la racine) à partir de cette implémentation.</p></li>
<li><p>Implémenter les fonctions suivantes qui prennent en paramètre un arbre binaire représenté sous forme de tuples imbriqués:</p>
<ul>
<li><code>taille(arbre)</code> renvoie la taille de l’arbre.</li>
<li><code>est_vide(arbre)</code> renvoie <code>True</code> si l’arbre est vide <code>False</code> sinon.</li>
<li><code>prefixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre préfixe.</li>
<li><code>infixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre infixe.</li>
<li><code>postfixe(arbre)</code> affiche les éléments lors du parcours de l’arbre en profondeur dans l’ordre postfixe.</li>
</ul></li>
</ol>
<h2 id="parcours-en-largeur" class="anchored">Parcours en largeur</h2>
<p><em>On utilise dans cet exercice la classe <code>ArbreBinaire</code> vue en cours pour représenter les arbres.</em></p>
<p>Écrire une procédure itérative de <code>parcours_largeur(arbre)</code> qui affiche les éléments d’un arbre donné en argument de haut en bas et de gauche à droite(<a href="/tg/nsi/1-structures-de-donnees/4-arbres/#parcours-dun-arbre-binaire">parcours en largeur</a>).</p>
<p>On donne ci-dessous le pseudo-code issu de l’article Wikipédia anglais sur le parcours d’arbres <a href="https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first_search"><em>Breadth First Search</em></a> en anglais.</p>
<div class="highlight"><pre><span></span><span class="nv">levelorder</span><span class="ss">(</span><span class="nv">root</span><span class="ss">)</span>
<span class="w">    </span><span class="nv">q</span><span class="w"> </span>←<span class="w"> </span><span class="nv">empty</span><span class="w"> </span><span class="nv">queue</span>
<span class="w">    </span><span class="nv">q</span>.<span class="nv">enqueue</span><span class="ss">(</span><span class="nv">root</span><span class="ss">)</span>
<span class="w">    </span><span class="k">while</span><span class="w"> </span><span class="nv">not</span><span class="w"> </span><span class="nv">q</span>.<span class="nv">isEmpty</span><span class="ss">()</span><span class="w"> </span><span class="k">do</span>
<span class="w">        </span><span class="nv">node</span><span class="w"> </span>←<span class="w"> </span><span class="nv">q</span>.<span class="nv">dequeue</span><span class="ss">()</span>
<span class="w">        </span><span class="nv">visit</span><span class="ss">(</span><span class="nv">node</span><span class="ss">)</span>
<span class="w">        </span><span class="k">if</span><span class="w"> </span><span class="nv">node</span>.<span class="nv">left</span><span class="w"> </span>≠<span class="w"> </span><span class="nv">null</span><span class="w"> </span><span class="k">then</span>
<span class="w">            </span><span class="nv">q</span>.<span class="nv">enqueue</span><span class="ss">(</span><span class="nv">node</span>.<span class="nv">left</span><span class="ss">)</span>
<span class="w">        </span><span class="k">if</span><span class="w"> </span><span class="nv">node</span>.<span class="nv">right</span><span class="w"> </span>≠<span class="w"> </span><span class="nv">null</span><span class="w"> </span><span class="k">then</span>
<span class="w">            </span><span class="nv">q</span>.<span class="nv">enqueue</span><span class="ss">(</span><span class="nv">node</span>.<span class="nv">right</span><span class="ss">)</span>
</pre></div>

