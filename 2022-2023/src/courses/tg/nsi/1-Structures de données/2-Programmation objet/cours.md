---
tags: ["cours", "terminale", "lycée", "numérique et sciences informatiques", "nsi", "poo", "attributs", "méthodes"]
tocHTML: '<ul><li><a href="#attributs-et-méthodes" data-localhref="true">Attributs et méthodes</a></li><ul><li><a href="#les-attributs-données" data-localhref="true">Les attributs: données</a></li><li><a href="#les-méthodes-fonctions" data-localhref="true">Les méthodes: fonctions</a></li></ul><li><a href="#création-dune-classe-et-instanciation" data-localhref="true">Création d’une classe et instanciation</a></li><li><a href="#les-méthodes-et-la-variable-self" data-localhref="true">Les méthodes et la variable <code>self</code></a></li><li><a href="#méthodes-particulières" data-localhref="true">Méthodes particulières</a></li><ul><li><a href="#initialisation-avec-le-constructeur-__init__" data-localhref="true">Initialisation avec le constructeur <code>__init__()</code></a></li><li><a href="#la-méthode-__str__" data-localhref="true">La méthode <code>__str__()</code></a></li><li><a href="#les-accesseursgetters-et-mutateurs-setters" data-localhref="true">Les accesseurs(<em>getters</em>) et mutateurs (<em>setters</em>)</a></li></ul><li><a href="#en-plus-héritage" data-localhref="true">En plus: Héritage</a></li></ul>'
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
<td>Vocabulaire de la programmation objet : classes, attributs, méthodes, objets.</td>
<td><p>Écrire la définition d’une classe.</p>
<p>Accéder aux attributs et méthodes d’une classe.</p></td>
<td>On n’aborde pas ici tous les aspects de la programmation objet comme le polymorphisme et l’héritage.</td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro">
<p><wc-wikimage title="OOP.svg" class="half right"></wc-wikimage></p>
<p>La <em>programmation orientée objet&nbsp;(P.O.O.)</em> est un <a href="/tg/nsi/4-langages-et-programmation/4-paradigmes-de-programmation/">paradigme de programmation</a> permettant au développeur de dépasser les objets proposés par le langage de programmation afin d’en créer de nouveaux adaptés au problème qu’il tente de résoudre: des utilisateurs, des messages, des jouets…</p>
</div>
<h2 id="attributs-et-méthodes" class="anchored">Attributs et méthodes</h2>
<p>En POO, les objets sont décrits dans des <code>class</code>es contenant:</p>
<ul>
<li>des <em>attributs</em> qui sont les <em>données</em> associées à l’objet;</li>
<li>des <em>méthodes</em> qui sont les <em>fonctions</em> s’appliquant sur cet objet.</li>
</ul>
<p>En Python, on accède aux attributs et aux méthodes grâce à la <strong>notation pointée</strong>, vous l’avez déjà utilisée car Python est un langage fortement orienté objet.</p>
<p>Prenons l’exemple des objets de types <a href=""><code>date</code></a> du module <code>datetime</code>.</p>
<p>On commence par créer une date de ce type, ce que l’on appelle une instance de l’objet.</p>
<div class="cell" data-execution_count="1">
<div class="highlight"><pre><span></span><span class="kn">from</span> <span class="nn">datetime</span> <span class="kn">import</span> <span class="n">date</span>
<span></span>
<span class="n">prise_bastille</span> <span class="o">=</span> <span class="n">date</span><span class="o">.</span><span class="n">fromisoformat</span><span class="p">(</span><span class="s2">"1789-07-14"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"type:"</span><span class="p">,</span> <span class="nb">type</span><span class="p">(</span><span class="n">prise_bastille</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"objet: "</span><span class="p">,</span> <span class="n">prise_bastille</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>type: &lt;class 'datetime.date'&gt;
objet:  1789-07-14
</pre></div>

</div>
</div>
<h3 id="les-attributs-données" class="anchored">Les attributs: données</h3>
<p>Cet objet possède des **attributs*: les <em>données</em> relatives à cet objet.</p>
<p>On y accède grâce à la notation pointée: <code>objet.attribut</code></p>
<div class="cell" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="n">prise_bastille</span><span class="o">.</span><span class="n">day</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="2">
<div class="highlight"><pre><span></span><span class="mf">14</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="n">prise_bastille</span><span class="o">.</span><span class="n">month</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="3">
<div class="highlight"><pre><span></span><span class="mf">7</span>
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="n">prise_bastille</span><span class="o">.</span><span class="n">year</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="4">
<div class="highlight"><pre><span></span><span class="mf">1789</span>
</pre></div>

</div>
</div>
<h3 id="les-méthodes-fonctions" class="anchored">Les méthodes: fonctions</h3>
<p>Cet objet possède des **méthodes*: les <em>fonctions</em> s’appliquant sur cet objet.</p>
<p>On y accède grâce à la notation pointée: <code>objet.méthode(...)</code></p>
<div class="cell" data-execution_count="5">
<div class="highlight"><pre><span></span><span class="c1"># Appel de la méthode sans argument</span>
<span class="n">prise_bastille</span><span class="o">.</span><span class="n">ctime</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="5">
<div class="highlight"><pre><span></span>'Tue Jul 14 00:00:00 1789'
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="6">
<div class="highlight"><pre><span></span><span class="c1"># Appel de la méthode avec un argument de type str</span>
<span class="n">prise_bastille</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">"%A </span><span class="si">%d</span><span class="s2"> %B %Y"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="6">
<div class="highlight"><pre><span></span>'Tuesday 14 July 1789'
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="7">
<div class="highlight"><pre><span></span><span class="c1"># Même appel mais en utilisant une version française</span>
<span class="kn">import</span> <span class="nn">locale</span>
<span></span>
<span class="n">locale</span><span class="o">.</span><span class="n">setlocale</span><span class="p">(</span><span class="n">locale</span><span class="o">.</span><span class="n">LC_ALL</span><span class="p">,</span> <span class="s2">"fr_FR.UTF-8"</span><span class="p">)</span>
<span></span>
<span class="n">prise_bastille</span><span class="o">.</span><span class="n">strftime</span><span class="p">(</span><span class="s2">"%A </span><span class="si">%d</span><span class="s2"> %B %Y"</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="7">
<div class="highlight"><pre><span></span>'mardi 14 juillet 1789'
</pre></div>

</div>
</div>
<h2 id="création-dune-classe-et-instanciation" class="anchored">Création d’une classe et instanciation</h2>
<p>En Python, on créé une classe avec la mot clé <code>class</code> qu’on nomme par habitude avec un nom en <a href="https://fr.wikipedia.org/wiki/Camel_case"><em>UpperCamelCase</em></a>.</p>
<div class="cell" data-execution_count="8">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="n">    nom</span> <span class="o">=</span> <span class="s2">"Terminale"</span>
<span class="n">    numero</span> <span class="o">=</span> <span class="mi">1</span>
<span class="c1">    # liste des élèves</span>
<span class="n">    eleves</span> <span class="o">=</span> <span class="p">[]</span>
</pre></div>

</div>
<p>L’objet <code>ClasseDeLycee</code> est une sorte de «patron» à partir duquel on va pouvoir créer des objets à la demande en créant ce que l’on appelle des instances par appel de la classe.</p>
<div class="cell" data-execution_count="9">
<div class="highlight"><pre><span></span><span class="c1">## On crée deux instances de l'objet ClasseDeLycee</span>
<span class="n">term1</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
<span class="n">term2</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
</pre></div>

</div>
<p>On peut accéder aux attributs de nos objets à l’aide de la notation pointée: <code>nom_instance.attribut</code>.</p>
<div class="cell" data-execution_count="10">
<div class="highlight"><pre><span></span><span class="c1"># nos deux instances contiennent les mêmes attributs nom et numero</span>
<span class="n">term1</span><span class="o">.</span><span class="n">nom</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="10">
<div class="highlight"><pre><span></span>'Terminale'
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="11">
<div class="highlight"><pre><span></span><span class="n">term2</span><span class="o">.</span><span class="n">nom</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="11">
<div class="highlight"><pre><span></span>'Terminale'
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="12">
<div class="highlight"><pre><span></span><span class="n">term1</span><span class="o">.</span><span class="n">numero</span><span class="p">,</span> <span class="n">term2</span><span class="o">.</span><span class="n">numero</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="12">
<div class="highlight"><pre><span></span>(1, 1)
</pre></div>

</div>
</div>
<p>On peut modifier les attributs d’un objet après son instanciation bien que l’on préfère utiliser un constructeur pour personnliser les objets à leur instanciation comme on le verra plus loin.</p>
<div class="cell" data-execution_count="13">
<div class="highlight"><pre><span></span><span class="c1"># méthode déconseillée</span>
<span class="c1"># on utilise plutôt des getters et setters pour ça (voir plus bas)</span>
<span class="n">term2</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="mi">2</span>
<span class="c1"># les attributs ont bien été modifiés pour l'instance term2</span>
<span class="n">term2</span><span class="o">.</span><span class="n">nom</span><span class="p">,</span> <span class="n">term2</span><span class="o">.</span><span class="n">numero</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="13">
<div class="highlight"><pre><span></span>('Terminale', 2)
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="14">
<div class="highlight"><pre><span></span><span class="c1"># par contre les attributs de l'instance term1 sont inchangés</span>
<span class="n">term1</span><span class="o">.</span><span class="n">nom</span><span class="p">,</span> <span class="n">term1</span><span class="o">.</span><span class="n">numero</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="14">
<div class="highlight"><pre><span></span>('Terminale', 1)
</pre></div>

</div>
</div>
<details class="plus"><summary>Attributs de classe et d'instance</summary>
<p>Dans cette partie nous avons utilisé des attributs de classe sans le <code>self</code> pour plus de simplicité dans cette introduction.</p>
<p>Par la suite, on utilisera des attributs d’instance(<code>self.attribut</code>), il y a de légères différences qui sortent du cadre de ce cours.</p>
</details>

<h2 id="les-méthodes-et-la-variable-self" class="anchored">Les méthodes et la variable <code>self</code></h2>
<p>Les méthodes sont des fonctions définies au sein de la classe qui s’appliquent aux objets créés grâce à cette classe.</p>
<p>Une méthode prend toujours en premier paramètre l’objet lui-même par l’intermédiare du paramètre qu’on appelle par convention <code>self</code>.</p>
<p>De façon générale, le mot clé <code>self</code> désignera l’instance de l’objet au sein du code de la classe.</p>
<div class="cell" data-execution_count="15">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="n">    nom</span> <span class="o">=</span> <span class="s2">"Terminale"</span>
<span class="n">    numero</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">    eleves</span> <span class="o">=</span> <span class="p">[]</span>
<span></span>
<span class="k">    def</span> <span class="nf">ajoute_eleve</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">élève</span><span class="p">):</span>
<span class="w">        </span><span class="sd">"""Cette méthode ajoute un élève dans la classe"""</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">élève</span><span class="p">)</span>
</pre></div>

</div>
<p>Lorsqu’on appelle une méthode sur une instance de la classe, on utilisera encore la notation pointée: <code>nom_instance.methode(...)</code>.</p>
<div class="cell" data-execution_count="16">
<div class="highlight"><pre><span></span><span class="n">term1</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
<span class="n">term1</span><span class="o">.</span><span class="n">ajoute_eleve</span><span class="p">(</span><span class="s2">"Alan Turing"</span><span class="p">)</span>
</pre></div>

</div>
<div class="cell" data-execution_count="17">
<div class="highlight"><pre><span></span><span class="c1"># l'attribut eleves a bien été modifié</span>
<span class="n">term1</span><span class="o">.</span><span class="n">eleves</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="17">
<div class="highlight"><pre><span></span>['Alan Turing']
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="18">
<div class="highlight"><pre><span></span><span class="c1"># mais pas pour l'instance term2</span>
<span class="n">term2</span><span class="o">.</span><span class="n">eleves</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="18">
<div class="highlight"><pre><span></span>[]
</pre></div>

</div>
</div>
<h2 id="méthodes-particulières" class="anchored">Méthodes particulières</h2>
<h3 id="initialisation-avec-le-constructeur-__init__" class="anchored">Initialisation avec le constructeur <code>__init__()</code></h3>
<p>Il est souvent interressant de créer des objets différents à partir d’un même classe , il est donc possible d’ajouter des arguments qui seront pris en charge lors de l’instanciation de l’objet en utilisant la méthode prédéfinie: <code>__init__()</code>.</p>
<p>Voici comment nous pourrions permettre de personnnaliser notre classe dès sa création.</p>
<div class="cell" data-execution_count="19">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="p">,</span> <span class="n">numero</span><span class="p">,</span> <span class="n">eleves</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="n">numero</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span> <span class="o">=</span> <span class="n">eleves</span>
<span></span>
<span class="n">
prem7</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">(</span><span class="s2">"Première"</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="p">[</span><span class="s2">"Ada Lovelace"</span><span class="p">])</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">prem7</span><span class="o">.</span><span class="n">nom</span><span class="p">,</span> <span class="n">prem7</span><span class="o">.</span><span class="n">numero</span><span class="p">,</span> <span class="n">prem7</span><span class="o">.</span><span class="n">eleves</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Première 7 ['Ada Lovelace']
</pre></div>

</div>
</div>
<p>On peut donner des valeurs par défaut aux paramètres dans la signature de la méthode <code>__init__</code>.</p>
<div class="cell" data-execution_count="20">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="o">=</span><span class="s2">"Terminale"</span><span class="p">,</span> <span class="n">numero</span><span class="o">=</span><span class="mi">3</span><span class="p">,</span> <span class="n">eleves</span><span class="o">=</span><span class="p">[]):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="n">numero</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span> <span class="o">=</span> <span class="n">eleves</span>
<span></span>
<span class="n">
term3</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">term3</span><span class="o">.</span><span class="n">nom</span><span class="p">,</span> <span class="n">term3</span><span class="o">.</span><span class="n">numero</span><span class="p">,</span> <span class="n">term3</span><span class="o">.</span><span class="n">eleves</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Terminale 3 []
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="21">
<div class="highlight"><pre><span></span><span class="c1"># on peut personnaliser les attributs souhaités de l'instance</span>
<span class="c1"># en gardant les valeurs par défaut pour les autres</span>
<span></span>
<span class="n">term4</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">(</span><span class="n">numero</span><span class="o">=</span><span class="mi">4</span><span class="p">)</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">term4</span><span class="o">.</span><span class="n">nom</span><span class="p">,</span> <span class="n">term4</span><span class="o">.</span><span class="n">numero</span><span class="p">,</span> <span class="n">term4</span><span class="o">.</span><span class="n">eleves</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Terminale 4 []
</pre></div>

</div>
</div>
<h3 id="la-méthode-__str__" class="anchored">La méthode <code>__str__()</code></h3>
<p>Cette méthode est utilisée pour donner une représentation des objets sous forme lisible lors d’un appel de la fonction <code>print</code>.</p>
<p>Pour l’instant si on affiche notre instance, on a:</p>
<div class="cell" data-execution_count="22">
<div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">term4</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>&lt;__main__.ClasseDeLycee object at 0x7f71b825a590&gt;
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="23">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="o">=</span><span class="s2">"Terminale"</span><span class="p">,</span> <span class="n">numero</span><span class="o">=</span><span class="mi">3</span><span class="p">,</span> <span class="n">eleves</span><span class="o">=</span><span class="p">[]):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="n">numero</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span> <span class="o">=</span> <span class="n">eleves</span>
<span></span>
<span class="k">    def</span> <span class="fm">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="sa">f</span><span class="s2">"&lt;Classe de Lycée </span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">nom</span><span class="si">}{</span><span class="bp">self</span><span class="o">.</span><span class="n">numero</span><span class="si">}</span><span class="s2">&gt;"</span>
<span></span>
<span class="n">
term3</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="n">term3</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>&lt;Classe de Lycée Terminale3&gt;
</pre></div>

</div>
</div>
<details class="plus"><summary>&nbsp;</summary>
<p>On peut également utiliser la méthode <code>__repr__()</code> qui est plus générale et qui sera également utilisée lors d’un appel de la fonction <code>print</code> si <code>__str__</code> n’est pas définie.</p>
</details>

<h3 id="les-accesseursgetters-et-mutateurs-setters" class="anchored">Les accesseurs(<em>getters</em>) et mutateurs (<em>setters</em>)</h3>
<p>Il est fortement <em>déconseillé</em> de récupérer <em>(get)</em> ou modifier <em>(set)</em> des attributs de l’objet directement par l’utilisation de la notation pointée vue précédemment.</p>
<p>Pour chaque attribut, il est conseillé de définir deux méthodes:</p>
<ul>
<li><code>get_nom_attribut</code>: pour le récupérer.</li>
<li><code>set_nom_attribut</code>: pour le modifier.</li>
</ul>
<p><em>C’est long oui, mais c’est la pratique couramment recommandée.</em></p>
<p>Voici ce que cela donnerait dans notre cas, on a trois attributs, il faut donc ajouter six méthodes.</p>
<div class="cell" data-execution_count="24">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">ClasseDeLycee</span><span class="p">:</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="o">=</span><span class="s2">"Terminale"</span><span class="p">,</span> <span class="n">numero</span><span class="o">=</span><span class="mi">3</span><span class="p">,</span> <span class="n">eleves</span><span class="o">=</span><span class="p">[]):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="n">numero</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span> <span class="o">=</span> <span class="n">eleves</span>
<span></span>
<span class="k">    def</span> <span class="nf">get_nom</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="bp">self</span><span class="o">.</span><span class="n">nom</span>
<span></span>
<span class="k">    def</span> <span class="nf">set_nom</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span></span>
<span class="k">    def</span> <span class="nf">get_numero</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="bp">self</span><span class="o">.</span><span class="n">numero</span>
<span></span>
<span class="k">    def</span> <span class="nf">set_numero</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">numero</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">numero</span> <span class="o">=</span> <span class="n">numero</span>
<span></span>
<span class="k">    def</span> <span class="nf">get_eleves</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="bp">self</span><span class="o">.</span><span class="n">eleves</span>
<span></span>
<span class="k">    def</span> <span class="nf">set_eleves</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">eleves</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">eleves</span> <span class="o">=</span> <span class="n">eleves</span>
<span></span>
<span class="k">    def</span> <span class="fm">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="sa">f</span><span class="s2">"&lt;Classe de Lycée </span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">nom</span><span class="si">}{</span><span class="bp">self</span><span class="o">.</span><span class="n">numero</span><span class="si">}</span><span class="s2">&gt;"</span>
<span></span>
<span class="n">
c</span> <span class="o">=</span> <span class="n">ClasseDeLycee</span><span class="p">()</span>
<span></span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Au début"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">c</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>Au début
&lt;Classe de Lycée Terminale3&gt;
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="25">
<div class="highlight"><pre><span></span><span class="c1"># Modification des attributs avec les setters</span>
<span class="n">c</span><span class="o">.</span><span class="n">set_nom</span><span class="p">(</span><span class="s2">"Seconde"</span><span class="p">)</span>
<span class="n">c</span><span class="o">.</span><span class="n">set_numero</span><span class="p">(</span><span class="mi">15</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">c</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>&lt;Classe de Lycée Seconde15&gt;
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="26">
<div class="highlight"><pre><span></span><span class="c1"># Récupération des attributs avec les getters</span>
<span class="n">c</span><span class="o">.</span><span class="n">get_nom</span><span class="p">(),</span> <span class="n">c</span><span class="o">.</span><span class="n">get_eleves</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="26">
<div class="highlight"><pre><span></span>('Seconde', [])
</pre></div>

</div>
</div>
<h2 id="en-plus-héritage" class="anchored">En plus: Héritage</h2>
<p>Un des aspects intéressants <em>(mais hors-programme)</em> est la possibilité de créer des sous classes qui héritent des attributs et méthode de la classe parente.</p>
<p>L’héritage q’il est bien réalisé permet d’éviter des répétitions de code <em>(Principe DRY: Don’t Repeat Yourself)</em>, et permet d’aboutir à une grande structuration des données.</p>
<div class="cell" data-execution_count="27">
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">Terminale</span><span class="p">(</span><span class="n">ClasseDeLycee</span><span class="p">):</span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">numero</span><span class="p">,</span> <span class="n">eleves</span><span class="o">=</span><span class="p">[]):</span>
<span class="c1">        # super appelle le constructeur du parent</span>
<span class="nb">        super</span><span class="p">()</span><span class="o">.</span><span class="fm">__init__</span><span class="p">(</span><span class="s2">"terminale"</span><span class="p">,</span> <span class="n">numero</span><span class="p">,</span> <span class="n">eleves</span><span class="p">)</span>
<span></span>
<span class="c1">    # On ne met à jour que les méthodes qui sont changées</span>
<span class="c1">    # Toutes les autres méthodes sont héritées</span>
<span class="k">    def</span> <span class="fm">__str__</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
<span class="k">        return</span> <span class="sa">f</span><span class="s2">"&lt;Classe de Terminale</span><span class="si">{</span><span class="bp">self</span><span class="o">.</span><span class="n">numero</span><span class="si">}</span><span class="s2">&gt;"</span>
<span></span>
<span class="n">
term7</span> <span class="o">=</span> <span class="n">Terminale</span><span class="p">(</span><span class="mi">7</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">term7</span><span class="p">)</span>
</pre></div>

<div class="cell-output cell-output-stdout">
<div class="highlight"><pre><span></span>&lt;Classe de Terminale7&gt;
</pre></div>

</div>
</div>
<div class="cell" data-execution_count="28">
<div class="highlight"><pre><span></span><span class="n">term7</span><span class="o">.</span><span class="n">get_eleves</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="28">
<div class="highlight"><pre><span></span>[]
</pre></div>

</div>
</div>
<p>Toutes les méthodes du parent non modifiées sont <em>héritées</em>.</p>
<div class="cell" data-execution_count="29">
<div class="highlight"><pre><span></span><span class="n">term7</span><span class="o">.</span><span class="n">set_eleves</span><span class="p">([</span><span class="s2">"Albert Einstein"</span><span class="p">,</span> <span class="s2">"Paul MacCartney"</span><span class="p">])</span>
<span class="n">term7</span><span class="o">.</span><span class="n">get_eleves</span><span class="p">()</span>
</pre></div>

<div class="cell-output cell-output-display" data-execution_count="29">
<div class="highlight"><pre><span></span>['Albert Einstein', 'Paul MacCartney']
</pre></div>

</div>
</div>
<p>Il reste cependant à définir les méthodes et attributs propres à cette classe: <code>voeux_parcoursup</code>, <code>mention_bac</code>…</p>

