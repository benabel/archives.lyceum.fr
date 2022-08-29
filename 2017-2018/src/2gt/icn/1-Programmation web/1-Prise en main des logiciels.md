---
tags: ["html5", "css", "openclassroom", "w3c"]
---

Dans cette première partie, nous allons nous intéresser à la programmation web en utilisant un cours en ligne (MOOC) libre sur le site openclassroom: **[Apprenez à créer votre site web avec HTML5 et CSS3](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published)**

**Commencez par vous [inscrire](https://openclassrooms.com/login)** sur le site afin de bénéficier de toutes les fonctionnalités du cours.

Vous pouvez également utiliser **le livre du cours au format pdf** disponible dans le dossier `Documents\Devoirs\abel\icn`.

## 1ère séance

_Lors de cette première séance nous prenons en main le navigateur et l’éditeur de texte que nous allons utiliser pour développer notre page web._

Il vous est possible de lancer directement notre éditeur de code ([Atom](https://atom.io/)), et le navigateur web([Firefox](https://www.mozilla.org/fr/firefox/new/)) en utilisant le script batch `launch-atom.bat` présent dans le dossier `Documents\Devoirs\abel\icn\seance1`.

Vous suivrez lors de cette première séance la première partie du cours: **Les bases de HTML5**, vous pouvez passer quelques parties du cours sur le choix du navigateur et de l'éditeur de texte,

# [1. Comment fait-on pour créer des sites web ?](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/comment-fait-on-pour-creer-des-sites-web)

Dans cette partie vous verrez d'où vient le web, et grâce à quels langages sont codés les pages internet.

**Passez les parties sur l’éditeur de texte et les navigateurs**.

#### Résumé

> - Le Web a été inventé par Tim Berners-Lee au début des années 1990.

- Pour créer des sites web, on utilise deux langages informatiques :
  - HTML : permet d'écrire et organiser le contenu de la page (paragraphes, titres…) ;
  - CSS : permet de mettre en forme la page (couleur, taille…).
- Il y a eu plusieurs versions des langages HTML et CSS. Les dernières versions sont HTML5 et CSS3.
- Le navigateur web est un programme qui permet d'afficher des sites web. Il lit les langages HTML et CSS pour savoir ce qu'il doit afficher.
- Il existe de nombreux navigateurs web différents : Google Chrome, Mozilla Firefox, Internet Explorer, Safari, Opera… Chacun affiche un site web de manière légèrement différente des autres navigateurs.
- Dans ce cours, nous allons apprendre à utiliser les langages HTML et CSS. Nous travaillerons dans un programme appelé « éditeur de texte » (Sublime Text, Notepad++, jEdit, vim…).

[Source OpenClassrooms.com](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/comment-fait-on-pour-creer-des-sites-web#/id/r-1609291)

# [2. Votre première page web en HTML](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/votre-premiere-page-web-en-html)

Vous allez voir quelle est la syntaxe du `html`.

#### Résumé

> - On utilise l'éditeur de texte (Sublime Text, Notepad++, jEdit, vim…) pour créer un fichier ayant l'extension.html(par exemple :<pre>test.html</pre>). Ce sera notre page web.

- Ce fichier peut être ouvert dans le navigateur web simplement en faisant un double-clic dessus.
- À l'intérieur du fichier, nous écrirons le contenu de notre page, accompagné de _balises HTML_.
- Les **balises** peuvent avoir plusieurs formes :
  - `<balise> </balise>`: elles s'ouvrent et se ferment pour délimiter le contenu (début et fin d'un titre, par exemple).
  - `<balise />`: **balises orphelines** (on ne les insère qu'en un seul exemplaire), elles permettent d'insérer un élément à un endroit précis (par exemple une image).
- Les balises sont parfois accompagnées d'**attributs** pour donner des indications supplémentaires (exemple : `<image nom="photo.jpg" />`).
- Une page web est constituée de _deux sections principales_ : un en-tête (`<head>`) et un corps (`<body>`).
- On peut afficher le code source de n'importe quelle page web en faisant un clic droit puis en sélectionnant <pre>Afficher le code source de la page</pre>.

[Source OpenClassrooms.com](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/votre-premiere-page-web-en-html#/id/r-3198108)

# [3. Organiser son texte](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/organiser-son-texte)

Vous verrez comment coder des titres, des paragraphes, des listes.

#### Résumé

> - Le HTML comporte de nombreuses balises qui nous permettent d'organiser le texte de notre page. Ces balises donnent des indications comme « Ceci est un paragraphe », « Ceci est un titre », etc.

- Les paragraphes sont définis par la balise `<p> </p>` et les sauts de ligne par la balise `<br />`.
- Il existe six niveaux de titre, de `<h1> </h1>` à `<h6> </h6>`, à utiliser selon l'importance du titre.
- On peut mettre en valeur certains mots avec les balises `<strong>`, `<em>` et `<mark>`.
- Pour créer des listes, on doit utiliser la balise `<ul>` (liste à puces, non ordonnée) ou `<ol>` (liste ordonnée). À l'intérieur, on insère les éléments avec une balise `<li>` pour chaque item.

[Source OpenClassrooms.com](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/organiser-son-texte#/id/r-3198205)

### 4. Pratiquez !

Un petit [exercice en ligne](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/pratiquez-1) pour montrer que vous avez tout compris.
