---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi"]
tocHTML: '<ul><li><a href="#les-trois-grands-types-de-programmation" data-localhref="true">Les trois grands types de programmation</a></li><li><a href="#exemples-dapproches-en-python" data-localhref="true">Exemples d’approches en Python</a></li><ul><li><a href="#programmation-impérative-le-comment" data-localhref="true">Programmation impérative : <em>le comment</em></a></li><li><a href="#programmation-fonctionnelle-le-quoi" data-localhref="true">Programmation fonctionnelle : <em>le quoi</em></a></li><li><a href="#programmation-objet-poo" data-localhref="true">Programmation objet: <em>POO</em></a></li></ul><li><a href="#comment-choisir-le-paradigme-à-utiliser" data-localhref="true">Comment choisir le paradigme à utiliser?</a></li></ul>'
---





<p><strong>Ce chapitre ne pourra pas faire l’objet d’une évaluation lors de l’épreuve terminale écrite et pratique de l’enseignement de spécialité.</strong> <a href="https://www.education.gouv.fr/bo/21/Hebdo30/MENE2121274N.htm" class="cite-source">BO MENE2121274N</a></p>
<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>Contenus</th>
<th><div class="highlight"><pre><span></span>  Capacités attendues
</pre></div>
</th>
<th><div class="highlight"><pre><span></span>       Commentaires
</pre></div>
</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Paradigmes de programmation.</td>
<td>Distinguer sur des exemples les paradigmes impératif, fonctionnel et objet.</td>
<td>Choisir le paradigme de programmation selon le champ d’application d’un programme. Avec un même langage de programmation, on peut utiliser des paradigmes différents. Dans un même programme, on peut utiliser des paradigmes différents.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<blockquote class="blockquote">
<p>La création du premier programme informatique par Ada Lovelace sur la machine de Babbage en 1842 a permis de formaliser les <a href="/1g/nsi/7-langages-et-programmation/1-les-ingredients-dun-algorithme">ingrédients des algorithmes</a> tels que nous les connaissons: affectations, boucles, conditions Cependant, maintenant que l’informatique est présente dans très nombreux domaines, il s’est avéré nécessaire d’adapter la programmation aux problèmes à traiter. Ces approches appelées <em>paradigmes de programmation</em> fournissent au développeur une vue différente de la façon dont s’éxecute le programme, la <a href="/tg/nsi/1-structures-de-donnees/2-programmation-objet">programmation orientée objet</a> en est un exemple bien connu.</p>
</blockquote>
<h2 id="les-trois-grands-types-de-programmation" class="anchored">Les trois grands types de programmation</h2>
<p>Il existe trois grands types de programmation :</p>
<ul>
<li>La programmation <strong>impérative</strong>: le paradigme originel est le plus courant.</li>
<li>La programmation <strong>orientée objet</strong>(POO) consistant en la définition et l’assemblage de briques logicielles appelées objets.</li>
<li>La programmation <em>déclarative</em> consistant à déclarer les données du problème, puis à demander au programme de le résoudre. La programmation <strong>fonctionnelle</strong> en est un exemple représentatif dans lequel le résultat souhaité est déclaré comme la valeur d’une série d’applications de fonctions.</li>
</ul>
<p>Même si certains langages forcent à utiliser un paradigme de programmation (ex: Smalltalk: POO, Haskell: fonctionnnelle), de nombreux langages modernes comme Python (ou Javascript) sont multiparadigmes et permettent la programmation impérative structurée, fonctionnelle et orientée objet; laissant ainsi le choix au programmeur du paradigme à utiliser en fonction du problème posé.</p>
<h2 id="exemples-dapproches-en-python" class="anchored">Exemples d’approches en Python</h2>
<p>Pour illustrer les différences entre ces paradigmes, nous allons utiliser un exemple très simple issu de <a href="https://opensource.com/article/19/10/python-programming-paradigms">opensource.com</a>.</p>
<p>On a une liste de caractères que nous souhaitons concaténer en une chaine de caractères.</p>
<div class="highlight"><pre><span></span><span class="n">ENTREE</span><span class="o">:</span><span class="w"> </span><span class="n">entrée</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="o">[</span><span class="s1">'p'</span><span class="o">,</span><span class="s1">'y'</span><span class="o">,</span><span class="s1">'t'</span><span class="o">,</span><span class="s1">'h'</span><span class="o">,</span><span class="s1">'o'</span><span class="o">,</span><span class="s1">'n'</span><span class="o">]</span>
<span class="n">SORTIE</span><span class="o">:</span><span class="w"> </span><span class="n">sortie</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="s1">'python'</span>
</pre></div>

<h3 id="programmation-impérative-le-comment" class="anchored">Programmation impérative : <em>le comment</em></h3>
<p>La programmation impérative est un paradigme de programmation qui décrit les opérations en séquences d’instructions exécutées par l’ordinateur pour modifier l’état du programme.</p>
<p>La programmation impérative se concentre sur la description du fonctionnement d’un programme : <strong>le comment</strong>.</p>
<p>La plupart des langages de haut niveau comporte cinq types d’instructions principales :</p>
<ul>
<li>la séquence d’instructions</li>
<li>l’assignation ou affectation</li>
<li>l’instruction conditionnelle(<code>if</code>, <code>else</code>)</li>
<li>la boucle(<code>for</code>, <code>while</code>)</li>
<li>les branchements(<code>GOTO</code> p.ex)</li>
</ul>
<div class="highlight"><pre><span></span><span class="n">entrée</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'p'</span><span class="p">,</span><span class="s1">'y'</span><span class="p">,</span><span class="s1">'t'</span><span class="p">,</span><span class="s1">'h'</span><span class="p">,</span><span class="s1">'o'</span><span class="p">,</span><span class="s1">'n'</span><span class="p">]</span>
<span class="c1"># on initialise une chaine vide pour la sortie</span>
<span class="n">sortie</span> <span class="o">=</span> <span class="s2">""</span>
<span class="c1"># On concatène à l'aide d'une boucle</span>
<span class="k">for</span> <span class="n">c</span> <span class="ow">in</span> <span class="n">entrée</span><span class="p">:</span>
<span class="n">     sortie</span> <span class="o">=</span> <span class="n">sortie</span> <span class="o">+</span> <span class="n">c</span>
<span class="nb"> 
print</span><span class="p">(</span><span class="n">sortie</span><span class="p">)</span>
<span class="n">python</span>
</pre></div>

<p>Ce type de programmation est le plus ancien et utilisé, il est facile à comprendre, souvent efficace car proche des instructions réalisés par les processeurs. Par contre, il est assez difficile à tester car l’état du programme ne cesse de changer et il est difficile de tester une petite partie du programme au milieu de son exécution par exemple car elle ne nécessite que toutes les instructions précédentes aient déjà été appliquées correctement.</p>
<h3 id="programmation-fonctionnelle-le-quoi" class="anchored">Programmation fonctionnelle : <em>le quoi</em></h3>
<p>En programmation fonctionnelle <strong>on décrit les résultats que l’on veut obtenir à partir des données</strong> plutôt que la séquence d’instructions qui permettent d’obtenir les résultats <em>(c’est un paradigme déclaratif)</em>.</p>
<p>L’approche fonctionnelle considère le calcul en tant qu’évaluation de <strong>fonctions</strong> mathématiques. Vous donnez vos données en entrée aux fonctions, qui vous renvoient les valeurs calculées en sortie.</p>
<p>L’utilisation massive de fonctions a amené à la création d’une syntaxe raccourcie pour la définition de fonctions anonymes, les fonctions <code>lambda</code>s :</p>
<div class="highlight"><pre><span></span><span class="k">lambda</span> <span class="n">param1</span><span class="p">,</span> <span class="o">...</span> <span class="p">,</span> <span class="n">paramN</span><span class="p">:</span> <span class="n">valeur_retournée</span>
</pre></div>

<p>Au lieu de:</p>
<div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">ma_fonction</span><span class="p">(</span><span class="n">param1</span><span class="p">,</span> <span class="o">...</span> <span class="p">,</span> <span class="n">paramN</span><span class="p">):</span>
<span class="o">    ...</span>
<span class="k">    return</span> <span class="n">valeur_retournée</span>
</pre></div>

<p>En programmation fonctionnelle, <strong>il n’y a pas d’état</strong>, l’<em>opération d’affectation est interdite</em>, ce qui permet de s’affranchir des effets secondaires (ou effets de bord).</p>
<p>Ceci rend les programmes parfaitement prédictibles, faciles à tester et à paralléliser, par contre il est souvent compliqué de se débarrasser complétement de l’état du programme.</p>
<p>Comme vu dans le chapitre précédent, en programmation fonctionnelle, on remplace souvent les boucles par des <a href="../4-recursivite">fonctions récursives</a>. Une approche fonctionnelle par la récursion de notre problème pourrait être :</p>
<div class="highlight"><pre><span></span><span class="n">entrée</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'p'</span><span class="p">,</span><span class="s1">'y'</span><span class="p">,</span><span class="s1">'t'</span><span class="p">,</span><span class="s1">'h'</span><span class="p">,</span><span class="s1">'o'</span><span class="p">,</span><span class="s1">'n'</span><span class="p">]</span>
<span></span>
<span class="k">def</span> <span class="nf">list_to_string</span><span class="p">(</span><span class="n">ma_liste</span><span class="p">,</span> <span class="n">ma_chaine</span><span class="o">=</span><span class="s2">""</span><span class="p">):</span>
<span class="w">    </span><span class="sd">"""Fonction récursive pour concaténer les éléments d'une liste"""</span>
<span class="k">    if</span> <span class="n">ma_liste</span><span class="p">:</span>
<span class="c1">        # on enlève le premier élement de la liste</span>
<span class="c1">        # qu'on ajoute à la chaine de caractères</span>
<span class="n">        ma_chaine</span> <span class="o">+=</span> <span class="n">ma_liste</span><span class="o">.</span><span class="n">pop</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="c1">        # application récursive</span>
<span class="k">        return</span> <span class="n">list_to_string</span><span class="p">(</span><span class="n">ma_liste</span><span class="p">,</span> <span class="n">ma_chaine</span><span class="p">)</span>
<span class="k">    else</span><span class="p">:</span>
<span class="c1">        # cas de base</span>
<span class="k">        return</span> <span class="n">ma_chaine</span>
<span class="n">    
    
list_to_string</span><span class="p">(</span><span class="n">entrée</span><span class="p">)</span>
</pre></div>

<details class="plus"><summary>filter, map, reduce</summary>
<p>Parmi les fonctions les plus représentatives de la programmation fonctionnelle, on trouve: <code>filter</code>, <code>map</code> et <code>reduce</code> (voir <a href="http://sametmax.com/map-filter-et-reduce/">ici</a> pour plus de détails).</p>
<div class="highlight"><pre><span></span><span class="c1"># on importe le module functools qui comporte </span>
<span class="c1"># les utilitaires de programmation fonctionnelle</span>
<span class="kn">import</span> <span class="nn">functools</span>
<span class="n">entrée</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'p'</span><span class="p">,</span><span class="s1">'y'</span><span class="p">,</span><span class="s1">'t'</span><span class="p">,</span><span class="s1">'h'</span><span class="p">,</span><span class="s1">'o'</span><span class="p">,</span><span class="s1">'n'</span><span class="p">]</span>
<span></span>
<span class="c1"># on concatène avec la méthode reduce</span>
<span class="n">sortie</span> <span class="o">=</span> <span class="n">functools</span><span class="o">.</span><span class="n">reduce</span><span class="p">(</span><span class="k">lambda</span> <span class="n">s</span><span class="p">,</span> <span class="n">c</span><span class="p">:</span> <span class="n">s</span> <span class="o">+</span> <span class="n">c</span><span class="p">,</span> <span class="n">entrée</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">sortie</span><span class="p">)</span>
<span class="n">python</span>
</pre></div>

<p>On utilise ici <code>reduce</code> une <a href="https://fr.wikipedia.org/wiki/Fonction_d%27ordre_sup%C3%A9rieur">fonction d’ordre supérieur</a> très utilisée en programmation fonctionnelle. Cette fonction applique une fonction de deux arguments de manière cumulative aux éléments en séquence, de gauche à droite, pour réduire la séquence à une seule valeur. Par exemple:</p>
<div class="highlight"><pre><span></span><span class="n">sample_list</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">5</span><span class="p">]</span>
<span class="kn">import</span> <span class="nn">functools</span>
<span class="n">somme</span> <span class="o">=</span> <span class="n">functools</span><span class="o">.</span><span class="n">reduce</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">:</span> <span class="n">x</span> <span class="o">+</span> <span class="n">y</span><span class="p">,</span> <span class="n">sample_list</span><span class="p">)</span>
<span class="n">somme</span>
<span class="mi">15</span>
<span class="p">((((</span><span class="mi">1</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span><span class="mi">3</span><span class="p">)</span> <span class="o">+</span><span class="mi">4</span><span class="p">)</span> <span class="o">+</span><span class="mi">5</span><span class="p">)</span>
<span class="mi">15</span>
</pre></div>

<p>Pour plus de méthodes fonctionnelles, consulter la documentation du module <a href="https://docs.python.org/3/library/functools.html"><code>functools</code></a> qui est utilisé pour des fonctions de haut niveau : des fonctions qui agissent sur ou revoient d’autres fonctions.</p>
<p>Une implémentation et des exemples d’utilisation des fonctions <code>filter</code>, <code>map</code>, <code>reduce</code> est proposée en <a href="./exo">exercice</a>.</p>
</details>

<h3 id="programmation-objet-poo" class="anchored">Programmation objet: <em>POO</em></h3>
<p>La POO consiste en la définition et l’interaction de <strong>briques logicielles appelées objets</strong>; un objet représente un concept, une idée ou toute entité du monde physique, comme une voiture, une personne ou encore une page d’un livre.</p>
<p>Un objet possède:</p>
<ul>
<li>des données: ses <strong>attributs</strong> et</li>
<li>des fonctions: ses <strong>méthodes</strong></li>
</ul>
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ListeLettres</span><span class="p">:</span>
<span class="s2">    "Classe permettant de lier une chaîne de caractères à une liste de caractères"</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">lettres</span><span class="o">=</span><span class="p">[]):</span>
<span class="w">        </span><span class="sd">"""Intialisation de l'objet</span>
<span></span>
<span class="sd">        Paramètres</span>
<span class="sd">        ----------</span>
<span class="sd">        lettres: list</span>
<span class="sd">            liste des caractères vide par défaut</span>
<span class="sd">        """</span>    
<span class="c1">        # initialisation des attributs de l'objet</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">lettres</span> <span class="o">=</span> <span class="n">lettres</span>
<span class="c1">        # Conversion en chaine de caractères</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">string</span> <span class="o">=</span> <span class="s1">''</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="n">lettres</span><span class="p">)</span>
<span></span>
<span class="c1">    # définition d'une méthode</span>
<span class="k">    def</span> <span class="nf">get_string</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="bp">self</span><span class="o">.</span><span class="n">string</span>
<span class="n"> 
entrée</span> <span class="o">=</span> <span class="p">[</span><span class="s1">'p'</span><span class="p">,</span><span class="s1">'y'</span><span class="p">,</span><span class="s1">'t'</span><span class="p">,</span><span class="s1">'h'</span><span class="p">,</span><span class="s1">'o'</span><span class="p">,</span><span class="s1">'n'</span><span class="p">]</span>
<span></span>
<span class="c1"># instanciation de l'objet avec les données de la liste</span>
<span class="n">objet_py</span> <span class="o">=</span> <span class="n">ListeLettres</span><span class="p">(</span><span class="n">entrée</span><span class="p">)</span>
<span></span>
<span class="c1"># récupération de l'attribut string de l'objet</span>
<span class="n">objet_py</span><span class="o">.</span><span class="n">string</span> <span class="c1"># renvoie 'python'</span>
<span></span>
<span class="c1"># récupération de l'attribut string grâce à la méthode get_string (préféré)</span>
<span class="n">objet_py</span><span class="o">.</span><span class="n">get_string</span><span class="p">()</span> <span class="c1"># renvoie 'python'</span>
</pre></div>

<p>Les différents principes de la conception orientée objet aident à la réutilisation du code, au masquage des données, etc., mais c’est une bête complexe, et comprendre toute la logique des objets et de leurs interactions est délicat et souvent difficile à tester en raison de ces interdépendances.</p>
<p>Nous aborderons plus en détail la <a href="/tg/nsi/1-structures-de-donnees/2-programmation-objet">programmation orientée objet</a> au prochain chapitre.</p>
<h2 id="comment-choisir-le-paradigme-à-utiliser" class="anchored">Comment choisir le paradigme à utiliser?</h2>
<blockquote class="blockquote">
<p>Pour simplifier, si votre problème implique une série de manipulations séquentielles simples, suivre le paradigme de <strong>programmation impérative</strong> de la vieille école serait le moins cher en termes de temps et d’efforts et vous donnerait potentiellement les meilleures performances.</p>
</blockquote>
<blockquote class="blockquote">
<p>Dans le cas de problèmes nécessitant des transformations mathématiques des valeurs, le filtrage des informations, le mappage( transformer une liste en une autre) et les réductions( transformer une liste en une valeur), la <strong>programmation fonctionnelle</strong> pourrait être adaptée.</p>
</blockquote>
<blockquote class="blockquote">
<p>Si le problème est structuré comme un tas d’objets interdépendants avec certains attributs qui peuvent changer avec le temps, en fonction de certaines conditions, la <strong>programmation orientée objet</strong> sera certainement la plus naturelle.</p>
</blockquote>
<blockquote class="blockquote">
<p>Bien sûr, il n’y a pas de règle simple, car le choix du paradigme de programmation dépend également fortement du type de données à traiter, des connaissances des programmeurs et de diverses autres choses comme l’évolutivité.</p>
</blockquote>
<p><a href="https://opensource.com/article/19/10/python-programming-paradigms">Perceiving Python programming paradigms</a>{.cite-source}</p>
<div class="ref">
<ul>
<li><a href="https://fr.wikipedia.org/wiki/Paradigme_(programmation)">Article Wikipedia sur les paradigmes de programmation</a></li>
<li><a href="https://opensource.com/article/19/10/python-programming-paradigms">Perceiving Python programming paradigms</a></li>
</ul>
</div>

