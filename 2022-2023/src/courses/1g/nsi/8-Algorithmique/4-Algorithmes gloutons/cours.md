---
tags: ["algorithmes gloutons", 'problème du sac à dos', 'problème du rendu de monnaie']
tocHTML: '<ul><li><a href="#le-problème-du-sac-à-dos" data-localhref="true">Le problème du sac à dos</a></li><li><a href="#exploration-systématiqueforce-brute" data-localhref="true">Exploration systématique(force brute)</a></li><li><a href="#méthode-approximative-lalgorithme-glouton" data-localhref="true">Méthode approximative: l’algorithme glouton</a></li><li><a href="#le-problème-du-rendu-de-monnaie" data-localhref="true">Le problème du rendu de monnaie</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>Contenus</th>
<th>Capacités attendues</th>
<th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Algorithmes gloutons</td>
<td>Résoudre un problème grâce à un algorithme glouton.</td>
<td><p>Exemples : problèmes du sac à dos ou du rendu de monnaie.</p>
<p>Les algorithmes gloutons constituent une méthode algorithmique parmi d’autres qui seront vues en terminale.</p></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="gauche quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Nous allons voir dans ce chapitre comment résoudre des problèmes d’optimisation à l’aide d’algorithmes.</p>
<p>Un problème d’optimisation consiste à minimiser ou maximiser une fonction sur un ensemble.</p>
<p>La particularité des algorithmes gloutons est qu’ils donnent généralement une solution assez satisfaisante relativement rapidement, mais ce n’est pas forcément la meilleure.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="Greedy_algorithm_36_cents.svg" caption="Comment rendre 36 centimes avec le minimum de pièces? Etudier tous les rendus possibles et trop long, on applique un rendu de monnaie qui est optimal si le jeu de pièces est bien fait(C'est le cas heureusement)."></wc-wikimage></p>
</div>
</div>
</div>
<h2 id="le-problème-du-sac-à-dos" class="anchored">Le problème du sac à dos</h2>
<p>Il s’agit d’un problème classique d’introduction aux algorithmes gloutons.</p>
<blockquote class="blockquote">
<p>En algorithmique, le problème du sac à dos, noté également KP (en anglais, Knapsack problem) est un problème d’optimisation combinatoire. Il modélise une situation analogue au remplissage d’un sac à dos, ne pouvant supporter plus d’un certain poids, avec tout ou partie d’un ensemble donné d’objets ayant chacun un poids et une valeur. Les objets mis dans le sac à dos doivent maximiser la valeur totale, sans dépasser le poids maximum.</p>
</blockquote>
<p><a href="" class="cite-source">Article Wikipedia</a></p>
<p><wc-wikimage title="Knapsack.svg" caption="Illustration du problème du sac à dos"></wc-wikimage></p>
<h2 id="exploration-systématiqueforce-brute" class="anchored">Exploration systématique(force brute)</h2>
<p>L’exploration de toutes les possibilités consiste à construire un arbre d’exploration binaire.</p>
<p><img src="./images/arbre-exemple.gif" class="center img-fluid" alt="arbre binaire"> <a href="https://interstices.info/le-probleme-du-sac-a-dos/" class="cite-source">interstices CC-BY-SA-NC</a></p>
<p>À chaque fois qu’un objet est ajouté à la liste des objets possibles, la taille de l’arbre est multipliée par 2.</p>
<p>Il s’agit d’une <em>complexité exponentielle</em> ce qui rend cette méthode de résolution inutilisable dans la pratique(Pensez au nombre de routes entre votre maison et le lycée!).</p>
<h2 id="méthode-approximative-lalgorithme-glouton" class="anchored">Méthode approximative: l’algorithme glouton</h2>
<p>L’algorithme le plus simple est un algorithme glouton. L’idée est d’ajouter en priorité les objets les plus efficaces, jusqu’à saturation du sac :</p>
<div class="highlight"><pre><span></span>trier les objets par ordre décroissant d'efficacité
w_conso := 0
<span></span>
placer les objets dans le sac par ordre décroissant d'efficacité
pour i de 1 à n
  si w[i] + w_conso ≤ W alors
    x[i] := 1
    w_conso := w_conso + w[i]
  sinon
    x[i] := 0
  fin si
fin pour
</pre></div>

<p><wc-wikimage title="Knapsack_greedy.svg" caption="Les deux étapes de cet algorithme: A trier les objets par ordre décroissant d'efficacité puis B placer les objets dans le sac dans cet ordre si possible"></wc-wikimage></p>
<p>On obtient ici une solution de 11$ pour 11 kg alors que la solution optimale est de 12$ et 14 kg.</p>
<h2 id="le-problème-du-rendu-de-monnaie" class="anchored">Le problème du rendu de monnaie</h2>
<p>Examinons un autre problème d’optimisation : le problème du rendu de monnaie</p>
<p>Nous sommes des commerçants, nous avons à notre disposition un nombre illimité de pièces de:</p>
<ul>
<li>1 centime</li>
<li>2 centimes</li>
<li>5 centimes</li>
<li>10 centimes</li>
<li>20 centimes</li>
<li>50 centimes</li>
<li>1 €</li>
<li>2 €</li>
</ul>
<p>Nous devons rendre la monnaie à un client à l’aide de ces pièces. La contrainte est d’utiliser le moins de pièces possible.</p>
<details class="appli"><summary>&nbsp;</summary>
<ol type="1">
<li>Trouvez une méthode gloutonne permettant d’effectuer un rendu de monnaie (en utilisant le moins possible de pièces).</li>
<li>Vous devez rendre la somme de 2,63 €, appliquez la méthode que vous venez de mettre au point.</li>
<li>Combien de pièces avez-vous utilisées ?</li>
</ol>
</details>

<div class="ref">
<ul>
<li><a href="https://fr.wikipedia.org/wiki/Problème_du_sac_à_dos">Article Wikipedia</a></li>
<li><a href="https://interstices.info/le-probleme-du-sac-a-dos/">Site interstices</a></li>
<li><a href="https://pixees.fr/informatiquelycee/n_site/nsi_prem_glouton_algo.html">cours de NSI</a> sur pixees.fr</li>
</ul>
</div>

