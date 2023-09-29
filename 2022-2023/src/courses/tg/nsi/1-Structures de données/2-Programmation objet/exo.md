---
tocHTML: '<ul><li><a href="#création-instanciation-et-représentation-dune-classe" data-localhref="true">Création, instanciation et représentation d’une classe</a></li><li><a href="#des-classes-cinématographiques" data-localhref="true">Des classes cinématographiques</a></li></ul>'
---





<h2 id="création-instanciation-et-représentation-dune-classe" class="anchored">Création, instanciation et représentation d’une classe</h2>
<p>Créez une classe <code>Voiture</code> avec deux attributs d’instance:</p>
<ul>
<li><code>couleur</code>, qui stocke la couleur de la voiture sous forme de chaîne de caractères</li>
<li><code>kilometrage</code>, qui stocke le nombre de kilomètres sur la voiture sous forme d’entier.</li>
</ul>
<p>Ensuite, instanciez deux objets <code>Voiture</code> - une voiture bleue de 20 000 kilomètres et une voiture rouge de 30 000 kilomètres. Affichez ensuite leurs couleurs et leur kilométrage. Votre sortie devrait ressembler à ceci:</p>
<div class="highlight"><pre><span></span>La voiture bleue a 20 000 kilomètres.
La voiture rouge a 30 000 kilomètres.
</pre></div>

<h2 id="des-classes-cinématographiques" class="anchored">Des classes cinématographiques</h2>
<p>On considère les définitions de classe suivantes:</p>
<div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">Personne</span><span class="p">:</span>
<span class="w">    </span><span class="sd">"""Objet représentant une personne"""</span>
<span></span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">nom</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">année_naissance</span><span class="p">:</span> <span class="nb">int</span><span class="p">,</span> <span class="n">lieu_naissance</span><span class="p">:</span> <span class="nb">str</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">nom</span> <span class="o">=</span> <span class="n">nom</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">année_naissance</span> <span class="o">=</span> <span class="n">année_naissance</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">lieu_naissance</span> <span class="o">=</span> <span class="n">lieu_naissance</span>
<span></span>
<span class="k">
class</span> <span class="nc">Film</span><span class="p">:</span>
<span class="w">    </span><span class="sd">"""Objet représentant un film"""</span>
<span></span>
<span class="k">    def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">titre</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">réalisateur</span><span class="p">:</span> <span class="n">Personne</span><span class="p">):</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">titre</span> <span class="o">=</span> <span class="n">titre</span>
<span class="bp">        self</span><span class="o">.</span><span class="n">réalisateur</span> <span class="o">=</span> <span class="n">réalisateur</span>
</pre></div>

<ol type="1">
<li><p>Comment créer une instance de la classe <code>Personne</code> appelée <code>lautner</code> pour le réalisateur Georges Lautner né en 1926 à Nice?</p></li>
<li><p>Proposer la définition d’une méthode <code>__str__</code> dans la classe <code>Personne</code> qui afficherait <code>"Georges Lautner est une personne née à Nice en 1926"</code> lors de l’appel <code>print(lautner)</code>.</p></li>
<li><p>On crée une instance de la classe <code>Film</code> avec l’instruction suivante: <code>tonton = Film("Les tontons flingueurs", lautner)</code>.</p>
<ol type="a">
<li><p>Qu’affiche l’instruction: <code>print(tonton.titre)</code> ?</p></li>
<li><p>Qu’affiche l’instruction: <code>print(tonton.réalisateur.nom)</code> ?</p></li>
<li><p>Proposer la définition d’une méthode <code>__str__</code> dans la classe <code>Film</code> qui afficherait <code>"Les tontons flingeurs est un film réalisé par Georges Lautner originaire de Nice"</code> lors de l’appel <code>print(tonton)</code>.</p></li>
</ol></li>
</ol>

