---
tocHTML: '<ul><li><a href="#codage-binaire-dun-message" data-localhref="true">Codage binaire d’un message</a></li></ul>'
---





<h2 id="codage-binaire-dun-message" class="anchored">Codage binaire d’un message</h2>
<p>Comme nous l’avons vu dans le cours, dans un ordinateur toute information est codée sous forme <em>binaire</em>.</p>
<p>Pour mieux comprendre comment cela fonctionne, nous allons étudier l’envoi <em>simplifié</em> d’un message textuel à travers internet.</p>
<p>Le message est coupé en mots.</p>
<p>Chaque mot est constitué de <em>deux parties</em>:</p>
<ul>
<li><p><strong>Le premier octet</strong> donne l’ordre du mot dans le message, car les mots peuvent être reçus dans un ordre différent de celui de l’émission. Il s’agit d’une <em>métadonnée</em>.</p>
<ul>
<li>le premier mot aura le numéro: <code>00000000</code></li>
<li>le deuxième <code>00000001</code></li>
<li>le troisième <code>00000010</code></li>
<li>le quatrième <code>00000011</code></li>
<li>le cinquième <code>00000100</code></li>
<li>...</li>
</ul></li>
<li><p><strong>Les octets suivants</strong> représentent les lettres du mot codé selon la norme ASCII, dont la table est donnée ci-dessous.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/ascii-bin.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Table ASCII</figcaption><p></p>
</figure>
</div>
<p>On lit dans cette table que la représentation binaire du caractère <strong>a</strong> est <code>0110 0001</code> (7e ligne, 2e colonne).</p>
<p>Par exemple le mot <code>OK</code> est codé: <code>01001111 01001011</code></p></li>
</ul>
<div class="example">
<p>Supposons que nous souhaitions envoyer un message de deux mots: <code>OK Computer</code>, il y aura deux envois numérotés <code>00000000</code> et <code>00000001</code> avec le contenu des mots:</p>
<div class="highlight"><pre><span></span>       n°0      O        K
    00000000 01001111 01001011 
<span></span>
       n°1      C        o         m       p        u        t         e       r
    00000001 01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 
</pre></div>

<p>Ainsi ces deux messages peuvent être reçus dans n’importe quel ordre, ils seront correctement réordonnés grâce à la métadonnée.</p>
</div>
<ol type="1">
<li><p>Décoder le message suivant <em>(en anglais)</em>:</p>
<!-- CODAGE DE: Be yourself; everyone else is already taken. --Oscar Wilde -->
<div class="highlight"><pre><span></span><span class="mf">00000100</span><span class="w"> </span><span class="mf">01101001</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span>
<span></span>
<span class="mf">00000110</span><span class="w"> </span><span class="mf">01110100</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01101011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01101110</span><span class="w"> </span><span class="mf">00101110</span><span class="w"> </span>
<span></span>
<span class="mf">00000011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00000000</span><span class="w"> </span><span class="mf">01000010</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00001000</span><span class="w"> </span><span class="mf">01010111</span><span class="w"> </span><span class="mf">01101001</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01100100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00000111</span><span class="w"> </span><span class="mf">00101101</span><span class="w"> </span><span class="mf">00101101</span><span class="w"> </span><span class="mf">01001111</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01100011</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span>
<span></span>
<span class="mf">00000101</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01100100</span><span class="w"> </span><span class="mf">01111001</span><span class="w"> </span>
<span></span>
<span class="mf">00000010</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110110</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">01111001</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01101110</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00000001</span><span class="w"> </span><span class="mf">01111001</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01100110</span><span class="w"> </span><span class="mf">00111011</span><span class="w"> </span>
</pre></div>
</li>
<li><p>Le problème de la table ASCII est qu’elle ne permet de coder que les caractères américains, il n’y a pas d’accents. Décoder le message suivant <em>(en français)</em>:</p>
<!-- CODAGE DE: Les portes de l'avenir sont ouvertes à ceux qui savent les pousser. --Coluche -->
<div class="highlight"><pre><span></span><span class="mf">00000001</span><span class="w"> </span><span class="mf">01110000</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">01110100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span>
<span></span>
<span class="mf">00000101</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01110110</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">01110100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span>
<span></span>
<span class="mf">00000010</span><span class="w"> </span><span class="mf">01100100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00000011</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">00100111</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01110110</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01101110</span><span class="w"> </span><span class="mf">01101001</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span>
<span></span>
<span class="mf">00000000</span><span class="w"> </span><span class="mf">01001100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span>
<span></span>
<span class="mf">00000111</span><span class="w"> </span><span class="mf">01100011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01111000</span><span class="w"> </span>
<span></span>
<span class="mf">00001000</span><span class="w"> </span><span class="mf">01110001</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01101001</span><span class="w"> </span>
<span></span>
<span class="mf">00001100</span><span class="w"> </span><span class="mf">00101101</span><span class="w"> </span><span class="mf">00101101</span><span class="w"> </span><span class="mf">01000011</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01100011</span><span class="w"> </span><span class="mf">01101000</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span>
<span></span>
<span class="mf">00000110</span><span class="w"> </span><span class="mf">00111111</span><span class="w"> </span>
<span></span>
<span class="mf">00001001</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01100001</span><span class="w"> </span><span class="mf">01110110</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01101110</span><span class="w"> </span><span class="mf">01110100</span><span class="w"> </span>
<span></span>
<span class="mf">00000100</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01101110</span><span class="w"> </span><span class="mf">01110100</span><span class="w"> </span>
<span></span>
<span class="mf">00001010</span><span class="w"> </span><span class="mf">01101100</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span>
<span></span>
<span class="mf">00001011</span><span class="w"> </span><span class="mf">01110000</span><span class="w"> </span><span class="mf">01101111</span><span class="w"> </span><span class="mf">01110101</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01110011</span><span class="w"> </span><span class="mf">01100101</span><span class="w"> </span><span class="mf">01110010</span><span class="w"> </span><span class="mf">00101110</span><span class="w"> </span>
</pre></div>
</li>
</ol>

