---
tocHTML: '<ul><li><a href="#tournez-manège" data-localhref="true">Tournez manège</a></li><li><a href="#parité" data-localhref="true">Parité</a></li><li><a href="#contrôle-de-saisie" data-localhref="true">Contrôle de saisie</a></li><li><a href="#table-de-multiplication" data-localhref="true">Table de multiplication</a></li><li><a href="#ni-oui-ni-non" data-localhref="true">Ni oui ni non</a></li><li><a href="#fizzbuzz" data-localhref="true">FizzBuzz</a></li><li><a href="#boucles-for" data-localhref="true">Boucles <code>for</code></a></li><li><a href="#boucles-while" data-localhref="true">Boucles <code>while</code></a></li><li><a href="#maitriser-les-boucles-en-python" data-localhref="true">Maitriser les boucles en Python</a></li><ul><li><a href="#prévoir-la-sortie-des-instructions-suivantes" data-localhref="true">Prévoir la sortie des instructions suivantes</a></li><li><a href="#dessiner-des-formes-avec-des-chaînes-de-caractères" data-localhref="true">Dessiner des formes avec des chaînes de caractères</a></li></ul></ul>'
---





<p>Ces exercices sont adaptés du cours sur la javascript de <a href="https://openclassrooms.com/en/courses/2984401-apprenez-a-coder-avec-javascript/3074396-repetez-des-instructions#/id/r-3075177">openclassrooms</a></p>
<p>Je vous conseille de réaliser chaque exercice avec le <code>for</code>, et avec le <code>while</code>. Cela vous entraînera et vous permettra de mieux juger par la suite du meilleur type de boucle à utiliser.</p>
<h2 id="tournez-manège" class="anchored">Tournez manège</h2>
<p>Écrivez un programme qui fait faire 10 tours de manège en affichant un message à chaque tour: <code>"C'est le tour n°..."</code>.</p>
<!--
### Une solution possible

for i in range(1,11):
    print("C'est le tour n°", i) -->
<h2 id="parité" class="anchored">Parité</h2>
<p>Écrivez un programme qui affiche tous les nombres entre 1 et 10, et indique pour chacun si celui-ci est pair ou impair:</p>
<div class="highlight"><pre><span></span><span class="s2">"1 est impair"</span>
<span class="s2">"2 est pair"</span>
<span class="o">...</span>
<span class="s2">"10 est pair"</span>
</pre></div>

<!-- ### Une solution possible¶

for i in range(1,11):
    if i %2 ==0:
        print(i, "est pair")
    else:
        print(i, "est impair") -->
<h2 id="contrôle-de-saisie" class="anchored">Contrôle de saisie</h2>
<p>Écrivez un programme qui fait saisir un nombre à l’utilisateur jusqu’à ce que ce nombre soit inférieur ou égal à 100.</p>
<p>Ensuite, améliorez votre programme pour que le nombre saisi soit compris entre 50 et 100.</p>
<p><strong>Attention</strong> Réfléchissez bien à la condition de votre boucle : quel est l’inverse de “compris entre 50 et 100” ?</p>
<!-- ### Une solution possible¶

REPEAT = True
while REPEAT:
    n = int(input("Entrez un nombre compris entre 50 et 100: "))
    if (n > 49) and (n < 100):
        print("Merci pour votre réponse:)")
        REPEAT = False -->
<h2 id="table-de-multiplication" class="anchored">Table de multiplication</h2>
<p>Écrivez un programme qui fait saisir un chiffre à l’utilisateur puis affiche la table de multiplication de ce chiffre.</p>

<div class="highlight"><pre><span></span><span class="n">Voici</span> <span class="n">la</span> <span class="n">table</span> <span class="n">de</span> <span class="n">multiplication</span> <span class="n">de</span> <span class="mi">7</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">1</span> <span class="o">=</span> <span class="mi">7</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">2</span> <span class="o">=</span> <span class="mi">14</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">3</span> <span class="o">=</span> <span class="mi">21</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">4</span> <span class="o">=</span> <span class="mi">28</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">5</span> <span class="o">=</span> <span class="mi">35</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">6</span> <span class="o">=</span> <span class="mi">42</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">7</span> <span class="o">=</span> <span class="mi">49</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">8</span> <span class="o">=</span> <span class="mi">56</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">9</span> <span class="o">=</span> <span class="mi">63</span>
<span class="mi">7</span> <span class="n">x</span> <span class="mi">10</span> <span class="o">=</span> <span class="mi">70</span>
</pre></div>

<p>Ensuite, améliorez votre programme pour vérifier que le nombre saisi soit compris entre 1 et 9, en vous inspirant de l’exercice précédent.</p>

<!-- ### Une solution possible

n = int(input("Vous souhaitez afficher la table de: "))
for i in range(1,11):
    print(n, "x", i, "=", n*i) -->
<h2 id="ni-oui-ni-non" class="anchored">Ni oui ni non</h2>
<p>Écrivez un programme qui fait jouer l’utilisateur au ni oui, ni non : il rentre un texte jusqu’à saisir “oui” ou “non”, ce qui déclenche la fin du jeu.</p>
<!-- ### Une solution possible¶

print("""
Bienvenue dans le jeu du ni oui ni non
""")
# On initialise la variable reponse
reponse = ""
while (reponse != "oui") and (reponse != "non"):
    reponse = input("Que dites-vous? ")
    # On convertit la réponse en minuscules pour la comparaison
    reponse = reponse.lower()

print("PERDU! Vous avez dit", reponse) -->
<h2 id="fizzbuzz" class="anchored">FizzBuzz</h2>
<p>Écrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :</p>
<ul>
<li>Il affiche “Fizz” à la place du nombre si celui-ci est divisible par 3.</li>
<li>Il affiche “Buzz” à la place du nombre si celui-ci est divisible par 5 et non par 3.</li>
</ul>
<div class="highlight"><pre><span></span><span class="mi">1</span>
<span class="mi">2</span>
<span class="n">Fizz</span>
<span class="mi">4</span>
<span class="n">Buzz</span>
<span class="n">Fizz</span>
<span class="mi">7</span>
<span class="mi">8</span>
<span class="n">Fizz</span>
<span class="n">Buzz</span>
<span class="mi">11</span>
</pre></div>

<p>Ensuite, améliorez votre programme pour qu’il affiche “FizzBuzz” à la place des nombres divisibles à la fois par 3 et par 5.</p>
<p><strong>Attention:</strong> Cet exercice a de nombreuses solutions possibles et constitue un test d’entretien d’embauche classique qui élimine un nombre significatif de candidats. Accrochez-vous pour le réussir !</p>
<div class="highlight"><pre><span></span><span class="mi">13</span>
<span class="mi">14</span>
<span class="n">FizzBuzz</span>
<span class="mi">16</span>
<span class="mi">17</span>
<span class="n">Fizz</span>
<span class="mi">19</span>
<span class="n">Buzz</span>
</pre></div>

<!--
### Une solution possible

J'attends toujours vos propositions! -->
<p>Les deux exercices qui suivent ont été traduits à partir du cours d’<a href="https://www.edx.org/course/introduction-to-computer-science-and-programming-7">initiation à la programmation</a> du MIT.</p>
<!-- Lien vers les solutions: https://github.com/anarayanan86/MITx-6.00.1x -->
<h2 id="boucles-for" class="anchored">Boucles <code>for</code></h2>
<ol type="1">
<li>écrire le code Python permettant d’afficher cette sortie avec une boucle <code>for</code>:</li>
</ol>
<div class="highlight"><pre><span></span><span class="mf">2</span>
<span class="mf">4</span>
<span class="mf">6</span>
<span class="mf">8</span>
<span class="mf">10</span>
<span class="kr">Go</span><span class="n">odbye</span><span class="err">!</span>
</pre></div>

<!-- 
for i in range(2, 11, 2):
    print(i)
print('Goodbye!')
 -->
<ol start="2" type="1">
<li>Écrire le code Python permettant d’afficher cette sortie avec une boucle <code>for</code>:</li>
</ol>
<div class="highlight"><pre><span></span>Hello!
10
8
6
4
2
</pre></div>

<!-- 
print('Hello!')
for i in range(10, 0, -2):
    print(i)
 -->
<ol start="3" type="1">
<li>Écrivez une boucle <code>for</code> qui additionne les valeurs de <code>1</code> à <code>end</code>, inclus. <code>end</code> est une variable dont la valeur est entrée par l’utilisateur avant la boucle <code>for</code>. Ainsi, par exemple, si <code>end</code> à pour valeur <code>6</code>, votre code doit afficher le résultat: <code>21</code> car <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>21</mn></mrow><annotation encoding="application/x-tex">1 + 2 + 3 + 4 + 5 + 6 = 21</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">5</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">21</span></span></span></span>
.</li>
</ol>
<!-- 
total = 0
for i in range(end+1):
    total += i

print(total)
 -->
<h2 id="boucles-while" class="anchored">Boucles <code>while</code></h2>
<p>Reprendre les 3 questions de l’exercice précédent en utilisant cette fois-ci une boucle <code>while</code>.</p>
<h2 id="maitriser-les-boucles-en-python" class="anchored">Maitriser les boucles en Python</h2>
<p>Si besoin consulter la page de cours de première sur les <a href="/1g/nsi/7-langages-et-programmation/5-boucles">boucles</a>.</p>
<h3 id="prévoir-la-sortie-des-instructions-suivantes" class="anchored">Prévoir la sortie des instructions suivantes</h3>
<div class="highlight"><pre><span></span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span></span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span></span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">):</span>
<span class="nb">    print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span></span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">):</span>
<span class="k">    for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">i</span><span class="p">):</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">j</span><span class="p">)</span>
<span></span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">):</span>
<span class="n">    j</span> <span class="o">=</span> <span class="n">i</span>
<span class="k">    while</span> <span class="n">j</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="nb">        print</span><span class="p">(</span><span class="n">j</span><span class="p">)</span>
<span class="n">        j</span> <span class="o">=</span> <span class="n">j</span> <span class="o">-</span><span class="mi">1</span>
</pre></div>

<h3 id="dessiner-des-formes-avec-des-chaînes-de-caractères" class="anchored">Dessiner des formes avec des chaînes de caractères</h3>
<p>Écrire le code permettant d’obtenir les sorties suivantes avec des boucles.</p>
<div class="highlight"><pre><span></span>O
OO
OOO
OOOO
OOOOO
OOOOOO
OOOOOOO
OOOOOOOO
OOOOOOOOO
</pre></div>

<p>&nbsp;</p>
<div class="highlight"><pre><span></span><span class="mf">0000000000</span>
<span class="mf">111111111</span>
<span class="mf">22222222</span>
<span class="mf">3333333</span>
<span class="mf">444444</span>
<span class="mf">55555</span>
<span class="mf">6666</span>
<span class="mf">777</span>
<span class="mf">88</span>
<span class="mf">9</span>
</pre></div>

<p>&nbsp;</p>
<div class="highlight"><pre><span></span>  | |
-------
  | |
-------
  | |
</pre></div>

