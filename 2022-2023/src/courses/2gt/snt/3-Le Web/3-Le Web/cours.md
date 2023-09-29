---
tags: ["snt", "web", "http", "lien hypertexte", "url"]
tocHTML: '<ul><li><a href="#lhypertexte" data-localhref="true">L’hypertexte</a></li><li><a href="#le-langage-html" data-localhref="true">Le langage <code>html</code></a></li><li><a href="#les-adresses-url-uniforme-resource-locator" data-localhref="true">Les adresses URL <em>(Uniforme Resource Locator)</em></a></li><li><a href="#le-protocole-http" data-localhref="true">Le protocole <code>HTTP</code></a></li><li><a href="#comment-fonctionne-un-moteur-de-recherche" data-localhref="true">Comment fonctionne un moteur de recherche?</a></li><li><a href="#les-cookies" data-localhref="true">Les cookies</a></li><li><a href="#les-droits-sur-internet" data-localhref="true">Les droits sur internet</a></li></ul>'
---





<details class="programme"><summary>Programme Officiel</summary>
<table class="table table-bordered table-hover">
<thead class="table-warning">
<tr class="header">
<th>Contenus</th>
<th>Capacités attendues</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Repères historiques</td>
<td>Connaître les étapes du développement du <em>Web</em>.</td>
</tr>
<tr class="even">
<td>Hypertexte</td>
<td>Maîtriser les renvois d’un texte à différents contenus.</td>
</tr>
<tr class="odd">
<td>Requête HTTP</td>
<td>Décomposer le contenu d’une requête HTTP et identifier les paramètres passés.</td>
</tr>
<tr class="even">
<td>URL</td>
<td>Décomposer l’URL d’une page. Reconnaître les pages sécurisées.</td>
</tr>
<tr class="odd">
<td>Modèle client/serveur</td>
<td>Inspecter le code d’une page hébergée par un serveur et distinguer ce qui est exécuté par le client et par le serveur.</td>
</tr>
<tr class="even">
<td>Langages HTML et CSS</td>
<td>Distinguer ce qui relève du contenu d’une page et de son style de présentation. Étudier et modifier une page HTML simple.</td>
</tr>
<tr class="odd">
<td>Moteurs de recherche : principes et usages</td>
<td>Mener une analyse critique des résultats fournis par un moteur de recherche. Comprendre les enjeux de la publication d’informations.</td>
</tr>
<tr class="even">
<td>Paramètres de sécurité d’un navigateur</td>
<td>Maîtriser les réglages les plus importants concernant la gestion des cookies, la sécurité et la confidentialité d’un navigateur. Sécuriser sa navigation en ligne et analyser les pages et fichiers.</td>
</tr>
<tr class="odd">
<td>Notions juridiques</td>
<td></td>
</tr>
</tbody>
</table>
<a class="lien-programme" href="../programme/">Lien vers le programme complet</a></details>

<div class="intro quarto-layout-panel">
<div class="quarto-layout-row quarto-layout-valign-top">
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p>Le <em>Web</em> (toile d’araignée) désigne un système donnant accès à un ensemble de données (page, image, son, vidéo) reliées par des liens hypertextes et accessibles sur le réseau internet.</p>
</div>
<div class="quarto-layout-cell" style="flex-basis: 50.0%;justify-content: center;">
<p><wc-wikimage title="WWW-LetShare.svg" caption="Logo original du World Wide Web créé en 1989 et ouvert au public en 1991."></wc-wikimage></p>
</div>
</div>
</div>

<!-- 

Ne confondons pas internet et le web. Le web, l'ensemble des documents électroniques accessibles
sur le réseau internet compte aujourd'hui près de _2 milliards de pages_ et est devenu omniprésent
dans notre vie grâce à l'utilisation d'_applications web dynamiques_. L'ensemble des documents
électroniques du web doivent pouvoir être consulté à partir de machines variées, ordinateurs,
tablettes, objets connectés. C'est pour cela que des _normes_ ont été mis au point pour garantir un
accès universel à tous.


Le web est un lieu «magique» où une grande quantité d'informations et de services sont à votre
portée, mais l'accès libre à une information ou à un service signifie-t-il qu'il est gratuit?
Dans ce chapitre, nous verrons comment rechercher des informations sur le web, sécuriser sa
navigation et respecter le droit d'auteur sur le Web. -->
<!-- 
Commençons par une vidéo présentant l'histoire du web.
lienmini.fr/3389-303 

[![Lien vers la vidéo](../../images/screenshot-delagrave-histoire-web.png)](http://lienmini.fr/3389-303)
-->
<details class="appli"><summary>QCU diagnostique</summary>
<p>On commence par tester ses connaissances en utilisant le QCU P56-57 du <a href="https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve">manuel de Delagrave</a></p>
<p>Lien vers la version en ligne: <a href="https://lienmini.fr/3389-302" class="uri">https://lienmini.fr/3389-302</a></p>
</details>

<p></p><div class="yt-embend"><div><iframe width="560" height="315" src="https://invidious.projectsegfau.lt/embed/bD6oideRbg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><p><a href="https://www.youtube.com/watch?v=bD6oideRbg8">Vidéo</a> servie sans cookie via <a href="https://projectsegfau.lt/">Project Segfault</a></p></div></div><p></p>
<h2 id="lhypertexte" class="anchored">L’hypertexte</h2>
<details class="appli"><summary>&nbsp;</summary>
<p>En utilisant les documents PP 58-59 du <a href="https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve">manuel de Delagrave</a>, répondre aux questions suivantes :</p>
<ol type="1">
<li>Expliquer ce qu’est un lien hypertexte, et quand il est apparu.</li>
<li>Quelles relations existent entre l’hypertexte, les pages Web et les navigateurs.</li>
<li>Quelle est la différence entre une page web statique et dynamique ?</li>
</ol>
</details>

<p>Les documents <em>hypertextes</em> ont été imaginés en 1965 par Ted Nelson puis mis en pratique dans le Web inventé en 1989 par Tim Berners-Lee.</p>
<dl>
<dt>
Lien hypertexte
</dt>
<dd>
<div>
<p>Un lien hypertexte ou <em>hyperlien</em> permet de passer automatiquement d’un document consulté à un document lié.</p>
</div>
</dd>
</dl>
<h2 id="le-langage-html" class="anchored">Le langage <code>html</code></h2>
<p>Les documents du web sont écrits en <code>html</code>(<em>HypertText Markup Langage</em>), le navigateur web traduit le code <code>html</code> et l’affiche à l’utilisateur.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/cern-www-source-vs-rendu.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Code HTML et rendu d’une page par le navigateur web.</figcaption><p></p>
</figure>
</div>
<div class="prop">
<p>Le langage <code>html</code> est un langage qui utilise des balises ouvrantes <code>&lt;balise&gt;</code> et fermantes <code>&lt;/balise&gt;</code>.</p>
</div>
<div class="examples">
<ul>
<li>Un titre de niveau 1: <code>&lt;h1&gt;Mon titre&lt;/h1&gt;</code></li>
<li>Un lien hypertexte dans un paragraphe: <code>&lt;p&gt;Le &lt;a href="https://www.w3.org/"&gt;w3c&lt;/a&gt; gère les normes du web.&lt;/p&gt;</code></li>
</ul>
</div>
<details class="appli"><summary>&nbsp;</summary>
<p>Faire l’<a href="./exo">exercice 1</a>.</p>
</details>

<details class="plus"><summary>Les normes du html</summary>
<p>Bien entendu, les premiers navigateurs n’étaient pas aussi évolués qu’aujourd’hui, vous pouvez d’ailleurs avoir une idée du rendu de cette page à l’époque de sa création à cette adresse: http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html</p>
<p>Le langage <code>html</code> ne cesse d’évoluer pour répondre à tous les nouveaux usages d’internet, utilisation d’écrans tactiles, lectures de vidéos, paiements…</p>
<p>On peut trouver sa spécification <a href="https://html.spec.whatwg.org/">ici</a></p>
</details>

<h2 id="les-adresses-url-uniforme-resource-locator" class="anchored">Les adresses URL <em>(Uniforme Resource Locator)</em></h2>
<p>Sur le web, chaque page web possède une adresse unique qui permet de l’identifier.</p>
<dl>
<dt>
URL
</dt>
<dd>
<div>
<p>Une URL ou <em>adresse universelle</em> est l’adresse d’une ressource donnée(document, image, vidéo…), unique sur le Web.</p>
</div>
</dd>
</dl>
<div class="examples">
<ul>
<li>boîte aux lettres électronique : <code>mailto:gaston.lagaffe@mail.com</code> ;</li>
<li>numéro de téléphone: <code>tel:+33 1 234 567 890</code>.</li>
<li>page web: https://fr.wikipedia.org/wiki/Grace_Hopper#Anecdote</li>
</ul>
</div>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/mdn-url-all.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Description complète d’une URL issue du site MDN sous licence CC-BY-SA 3.0</figcaption><p></p>
</figure>
</div>
<p><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL" class="cite-source">Article URL sur MDN</a></p>
<div class="prop">
<p>Une URL se décompose en plusieurs parties :</p>
<ul>
<li>Le protocole <strong>(Obligatoire)</strong>: <code>http</code>, <code>https</code>, <code>mailto</code>, <code>tel</code>…</li>
<li>Le domaine précédé éventuellement du sous-domaine <strong>(Obligatoire)</strong>: <code>fr.wikipedia.org</code></li>
<li>Le chemin vers la ressource sur le serveur: <code>/blog/index.html</code></li>
<li>L’ancre sur une partie de la page: <code>#exo2</code></li>
<li>Les paramètres d’URL: <code>?q=CSS&amp;locale=ja</code></li>
</ul>
</div>
<div class="examples">
<ul>
<li><code>http://www.lyceum.fr/2gt/snt/3-le-web/#les-adresses-url</code></li>
<li><code>https://developer.mozilla.org/fr/search?q=CSS&amp;locale=ja</code></li>
</ul>
</div>
<details class="plus"><summary>Caractères spéciaux dans les URL</summary>
<p><strong>Attention</strong> de nombreux caractères sont interdits dans les URL. Vous rencontrerez parfois le <code>%20</code>, c’est tout simplement un espace, ou encore <code>%C3%A9</code> pour <code>é</code>.</p>
<p>Pour connaitre les codes ouvrez votre console navigateur et tapez: <code>encodeURI("é")</code>.</p>
</details>

<h2 id="le-protocole-http" class="anchored">Le protocole <code>HTTP</code></h2>
<p>Le protocole <code>HTTP</code> (<em>HyperText Transfer Protocol</em>) gère l’échange de données entre le client et le serveur sur le Web.</p>
<div class="prop">
<p>HTTPS est la version sécurisée du protocole HTTP dans laquelle les données échangées entre le client et le serveur sont <em>cryptées</em>.</p>
</div>
<ul>
<li>Le <strong>client</strong> effectue des demandes au serveur comme: - <code>GET</code>: Demande d’une page. - <code>POST</code>: Envoi de données. Pour un formulaire par exemple. - <code>DELETE</code>: Suppression d’une ressource du serveur. - …</li>
</ul>
<p>Les informations nécessaires à la requête sont placées dans des en-têtes un peu comme si les messages étaient placés dans une enveloppe.</p>
<div class="example">
<p>Voici la requête <code>HTTP</code><em>(un extrait)</em> envoyée pour demander la page la page https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol en cliquant sur le lien du moteur de recherche www.qwant.com.</p>
<p>La première ligne indique le type de requête(GET, POST…), l’adresse de la ressource et la version du protocole.</p>
<div class="highlight"><pre><span></span><span class="nf">GET</span> <span class="nn">/wiki/Hypertext_Transfer_Protocol</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">2</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">fr.wikipedia.org</span>
<span class="na">User-Agent</span><span class="o">:</span> <span class="l">Mozilla/5.0 (X11; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0</span>
<span class="na">Accept-Language</span><span class="o">:</span> <span class="l">fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3</span>
<span class="na">Referer</span><span class="o">:</span> <span class="l">https://www.qwant.com/</span>
<span class="na">Cookie</span><span class="o">:</span> <span class="l">WMF-Last-Access=14-Sep-2020; WMF-Last-Access-Global=14-Sep-2020; GeoIP=FR:PAC:Nice:43.71:7.26:v4;</span>
<span class="err">...</span>
</pre></div>

</div>
<ul>
<li><p>Le <strong>serveur</strong> répond au client en commençant par lui envoyer un <a href="https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP">code d’état</a>:</p>
<div class="highlight"><pre><span></span> - `200`: succès de la requête
 - ...
 - `301` ou `302`: redirection vers une autre page;
 - `404`: page non trouvée
 - ...
 - `500`: erreur du serveur
 - ...
</pre></div>
</li>
</ul>
<div class="example">
<p>Et voici l’en-tête <em>(un extrait)</em> de la réponse du serveur:</p>
<div class="highlight"><pre><span></span><span class="nt">HTTP</span><span class="o">/</span><span class="nt">2</span><span class="w"> </span><span class="nt">200</span><span class="w"> </span><span class="nt">OK</span>
<span class="nt">date</span><span class="o">:</span><span class="w"> </span><span class="nt">Sun</span><span class="o">,</span><span class="w"> </span><span class="nt">13</span><span class="w"> </span><span class="nt">Sep</span><span class="w"> </span><span class="nt">2020</span><span class="w"> </span><span class="nt">09</span><span class="p">:</span><span class="nd">14</span><span class="p">:</span><span class="nd">27</span><span class="w"> </span><span class="nt">GMT</span>
<span class="nt">content-language</span><span class="o">:</span><span class="w"> </span><span class="nt">fr</span>
<span class="nt">last-modified</span><span class="o">:</span><span class="w"> </span><span class="nt">Sun</span><span class="o">,</span><span class="w"> </span><span class="nt">06</span><span class="w"> </span><span class="nt">Sep</span><span class="w"> </span><span class="nt">2020</span><span class="w"> </span><span class="nt">18</span><span class="p">:</span><span class="nd">23</span><span class="p">:</span><span class="nd">06</span><span class="w"> </span><span class="nt">GMT</span>
<span class="nt">content-type</span><span class="o">:</span><span class="w"> </span><span class="nt">text</span><span class="o">/</span><span class="nt">html</span><span class="o">;</span><span class="w"> </span><span class="nt">charset</span><span class="o">=</span><span class="nt">UTF-8</span>
<span class="nt">content-length</span><span class="o">:</span><span class="w"> </span><span class="nt">33988</span>
<span class="o">...</span>
</pre></div>

<p>La réponse renvoyée (après l’en-tête) étant la page <code>html</code> demandée dont nous parlerons juste après :</p>
<div class="highlight"><pre><span></span><span class="cp">&lt;!DOCTYPE html&gt;</span>
<span class="p">&lt;</span><span class="nt">html</span> <span class="na">lang</span><span class="o">=</span><span class="s">"fr"</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">head</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">meta</span> <span class="na">charset</span><span class="o">=</span><span class="s">"UTF-8"</span><span class="p">/&gt;</span>
<span class="p">&lt;</span><span class="nt">title</span><span class="p">&gt;</span>Hypertext Transfer Protocol — Wikipédia<span class="p">&lt;/</span><span class="nt">title</span><span class="p">&gt;</span>
...
<span class="p">&lt;/</span><span class="nt">html</span><span class="p">&gt;</span>
</pre></div>

</div>
<details class="appli"><summary>&nbsp;</summary>
<p>En analysant les en-têtes de la requête et de la réponse, expliquez quelles sont les informations:</p>
<ul>
<li>Envoyées par le client,</li>
<li>et celles renvoyées par le serveur.</li>
</ul>
</details>

<h2 id="comment-fonctionne-un-moteur-de-recherche" class="anchored">Comment fonctionne un moteur de recherche?</h2>
<!-- lienmini.fr/1046-307 -->
<p></p><div class="yt-embend"><div><iframe width="560" height="315" src="https://invidious.projectsegfau.lt/embed/iKMm6SXO0wA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><p><a href="https://www.youtube.com/watch?v=iKMm6SXO0wA">Vidéo</a> servie sans cookie via <a href="https://projectsegfau.lt/">Project Segfault</a></p></div></div><p></p>
<details class="appli"><summary>&nbsp;</summary>
<p>Répondre aux questions de l’activité PP 64-65 du <a href="https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve">manuel de Delagrave</a>, puis <strong>conclure en expliquant quels sont les principaux critères de classement des résultats sur un moteur de recherche</strong>.</p>
</details>

<ol type="1">
<li>Des robots logiciels explorent toutes les pages web: l’<strong>exploration</strong>.</li>
<li>Les pages sont ensuite classées: l’<strong>indexation</strong>.</li>
<li>Lorsque l’utilisateur fait une recherche l’<em>algorithme</em> du moteur de recherche affiche une liste de pages en les classant dans un ordre qui lui est propre: le <strong>classement</strong>.</li>
</ol>
<details class="plus"><summary>Impact écologique</summary>
<p>Selon l’étude de l’ADEME, aller directement à l’adresse d’un site, soit en tapant son adresse dans son navigateur, soit en l’ayant enregistré comme « favori » (plutôt que de rechercher ce site via un moteur de recherche) divise par 4 les émissions de gaz à effet de serre.</p>
</details>

<h2 id="les-cookies" class="anchored">Les cookies</h2>
<details class="appli"><summary>&nbsp;</summary>
<p>Répondre aux questions suivantes en utilisant les documents de l’activité PP 66-67 du <a href="https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve">manuel de Delagrave</a>.</p>
<ol type="1">
<li>Comment paramétrer son navigateur pour améliorer sa confidentialité?</li>
<li>Que sont les cookies? Et les cookies tiers?</li>
<li>Ai-je le droit de copier-coller n’importe quelles informations sur les sites web?</li>
</ol>
</details>

<dl>
<dt>
cookie
</dt>
<dd>
<div>
<p>Les <strong>cookies</strong> sont de petits fichiers stockés sur votre navigateur par le serveur pour maintenir votre connexion ou stocker votre panier par exemple.</p>
</div>
</dd>
</dl>
<p>Les cookies <em>tiers</em> sont des cookies déposés par des serveurs autres que ceux du site que vous visitez. Ces cookies sont souvent utilisés pour vous suivre lors de votre navigation afin d’établir un profil publicitaire ou autre.</p>
<div class="quarto-figure quarto-figure-center">
<figure class="figure">
<p><img src="../../images/parametres-cookies.png" class="img-fluid figure-img"></p>
<p></p><figcaption class="figure-caption">Paramétrage des cookies sur chromium</figcaption><p></p>
</figure>
</div>
<h2 id="les-droits-sur-internet" class="anchored">Les droits sur internet</h2>
<p>Le droit d’auteur s’applique sur internet comme ailleurs. Tous les textes, photos, vidéos sont la propriété de leur auteur ou ayant-droits(maison de disques, descendants…) et ce jusqu’à leur entrée dans le <strong>domaine public</strong> 70 ans après la mort de leur auteur.</p>
<p>Certains sites comme Wikipédia tentent de promouvoir un nouveau type de licence <a href="https://creativecommons.org/licenses/">Creative Commons</a> afin que les œuvres puissent être copiées, distribuées, modifiées et adaptées.</p>
<p><wc-wikimage title="Creative_commons_license_spectrum_fr.svg" caption="La licence libre Creative Commons existe sous diverses variations plus ou moins ouvertes."></wc-wikimage></p>

