---
tocHTML: '<ul><li><a href="#utilisation-du-module-math" data-localhref="true">Utilisation du module <code>math</code></a></li><li><a href="#création-dun-projet-sur-les-nombres-premiers" data-localhref="true">Création d’un projet sur les nombres premiers</a></li></ul>'
---





<h2 id="utilisation-du-module-math" class="anchored">Utilisation du module <code>math</code></h2>
<p>Donner deux façons d’importer la fonction <code>sqrt()</code> du module <code>math</code> et de calculer ensuite la racine carrée de 2.</p>
<h2 id="création-dun-projet-sur-les-nombres-premiers" class="anchored">Création d’un projet sur les nombres premiers</h2>
<p><strong>Cahier des charges:</strong></p>
<p>Votre projet doit contenir 4 modules:</p>
<ul>
<li><p><code>premier.py</code>: module contenant quatre fonctions qui permettent de savoir si un nombre est premier telles que décrites <a href="https://fr.wikipedia.org/wiki/Test_de_primalit%C3%A9#M%C3%A9thode_na%C3%AFve">ici</a>.</p></li>
<li><p><code>eratosthene.py</code>: module permettant la génération de nombres premiers par le <a href="https://fr.wikipedia.org/wiki/Crible_d%27%C3%89ratosth%C3%A8ne#Pseudo-code">crible d’Eratosthène</a>. Ce module devra être importé dans le module <code>premier.py</code> pour implémenter le 4e algorithme proposé dans l’article Wikipédia.</p></li>
<li><p><code>test_premier.py</code>: module qui importe les fonctions définies dans <code>premier.py</code> et qui vérifie que toutes les fonctions de test de primalité définies dans le module <code>premier.py</code> ont des résultats justes. On pourra utiliser cet <a href="https://fr.wikipedia.org/wiki/Liste_de_nombres_premiers">article Wikipédia</a> ainsi que ces références pour trouver des nombres premiers à tester.</p>
<p><strong>Ne pas oublier de tester des nombres non premiers</strong></p>
<p><em>Facultatif, vous pouvez également chronométrer le temps d’exécution des tests grâce au module <code>time</code> de python et afficher les résultats en cas de succès.</em></p></li>
<li><p><code>main.py</code>: le module principal destiné à l’utilisateur. Ce programme demande à l’utilisateur de choisir un nombre entier et un algorithme, et lui indique si ce nombre est premier ou pas.</p>
<p><strong>Attention: Le programme devra recommencer <em>tant que</em> l’utilisateur le souhaite sans être relancé à chaque fois.</strong></p></li>
</ul>
<p>Le projet doit être documenté:</p>
<ul>
<li>Toutes les fonctions ont une <code>Docstring</code>.</li>
<li>Tous les modules ont une <code>Docstring</code>.</li>
</ul>
<p>Ajouter un fichier <code>README</code> qui explique la nature du projet et les détails pratiques comme:</p>
<ul>
<li>comment lancer le programme principal,</li>
<li>comment lancer les tests,</li>
<li>les limites de votre programme…_</li>
</ul>

