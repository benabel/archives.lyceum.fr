---
tags: ["html", "css", "w3c"]
---

Dans cette partie, nous allons voir comment  créer des pages web en utilisant les trois langages du web:

- `html`: HyperText Markup Language
- `css`: Cascading StyleSheet
- `js`: JavaScript

Chacun de ces langages a un rôle particulier dans la conception de la page web. Leurs syntaxes et leur possibilités ne cessent d'augmenter au fur et à mesure que nos usages d'internet évoluent.

La fondation [W3C](https://www.w3.org/) a pour rôle de définir toutes les règles de ces langages(et d'autres) afin de maintenir le web acceessible à tous et ouvert.

# Histoire du Web

>Le berceau du Web se situe au CERN (Organisation Européenne pour la Recherche Nucléaire). C'est au sein de cette organisation que le Web fut inventé en 19892 par une équipe de chercheurs notamment sous l'impulsion de Tim Berners-Lee et son collaborateur Robert Cailliau, ainsi que d'autres chercheurs3 ayant à leur manière collaboré au projet initialement baptisé World Wide Web. À l'origine le projet World Wide Web fut conçu et développé "en combinant trois technologies qui sont les éléments de base du Web, c-a-d, l'adressage web par URL qui indique la localisation de la ressource sur l'internet, le protocole de transfert HTTP qui indique la méthode d'accès, et le Hypertexte Markup langage HTML qui permet de structurer des ressources" afin que les personnes travaillant dans les universités et les instituts du monde entier puissent librement échanger des documents et partager les informations utiles à leurs activités, tissant ainsi la première toile (en anglais : Web) sur le Net.
>Source [Wikipedia: Conception de site web](https://fr.wikipedia.org/wiki/Conception_de_site_web#Histoire)

## Une vidéo issue du cours [Class´Code](https://classcode.fr)

<div class="center">
  <iframe src="https://player.vimeo.com/video/207612470" title="L’histoire de Tim Berners-Lee ou presque… Par isabelle Christment 6’24" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="550" height="309" frameborder="0"></iframe>
</div>

Lien vers la page du [cours](https://openclassrooms.com/courses/connecter-le-reseau/assistez-a-la-naissance-du-web).

*Note: les vidéos des cours d’OpenClassrooms comme toutes les ressources de Class´Code sont librement accessibles, sous licence Creative-Commons.*


# Rôle des langages du web

Le langage `HTML` a été inventé en premier en 1991. Il contient le texte de la page et décrit ce texte afin qu'il puisse être compris par des programmes informatiques(navigateur web ou robots des moteurs de recherche).

Le langage `CSS` permet de mettre en forme la page web en modifiant les couleurs, polices...

Le langage `JS` permet de rendre les pages web interactives, pour par exemple récupérer les données d'un utilisateur entrées dans un formulaire,

# Rôle du navigateur

Le navigateur permet de traduire toutes les informations contenues dans les fichiers `html`, `css` et `js`, en un rendu qui s'affiche à l'écran avec lequel l'utilisateur peut interagir. Pour afficher le code source d'une page, il suffit d'utiliser la combinaison <kbd>CTRL</kbd>+<kbd>U</kbd>.

![Rendu du html par le navigateur](rendu-html-navigateur.png)

# Le développement d'un site Web

Avant de publier le site sur internet, on commence par le développer localement sur son ordinateur avec 2 logiciels:

## Un éditeur de texte

Un simple éditeur de texte qui permet d'écrire le code `html`, `css` et `js`.

Bien qu'un simple éditeur de etxtes suffise, on utilise plutôt des éditeurs de code qui sont dédiés à cet usage et qui pemettent de colorer le code, l'indenter, le vérifier...

**Exemples:**

- [Notepad ++](https://notepad-plus-plus.org/fr/)
- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Brackets](http://brackets.io/)

## Un navigateur web

Un navigateur qui permet de visualiser le rendu du code, ce navigateur doitêtre récent pour pouvoir développer ce site en utilisant les dernières mises à jours des langages.

**Exemples:**

- [Mozilla Firefox](https://www.mozilla.org/fr/firefox/new/)
- [Google Chrome](https://www.google.fr/chrome/browser/desktop/index.html)
- [Microsoft Edge](https://www.microsoft.com/fr-fr/windows/microsoft-edge)

## Comment appliquer des changements rapidement?

Quand vous avez modifié le code source dans l'éditeur, et que vous voulez vérifier que ça fonctionne:

1. enregistrez le fichier dans l'éditeur: <kbd>CTRL</kbd>+<kbd>S</kbd>
2. rafraîchissez l'affichage du navigateur. <kbd>CTRL</kbd>+<kbd>R</kbd>

Vous pouvez placer les deux écrans côte à côte si vous avez un écran large, ou passer d'une fenêtre à une autre avec le raccourci: <kbd>ALT</kbd>+<kbd>TAB</kbd>.

## Comment déboguer votre page web ?

Tous les navigateurs disposent d'outils puissants de débogage, à commencer par le simple afficheur de code source(<kbd>ALT</kbd>+<kbd>TAB</kbd>), ou pour des outils plus puissants vous pouvez ouvrir les `Outils de développent`: <kbd>CTRL</kbd>+<kbd>MAJ</kbd>+<kbd>I</kbd>
