---
tags: ["openclassroom", "javascript", "dom", "application web"]
---

Maintenant que nous possédons les bases de la programmation javascript, nous allons voir comment ce langage peut être utilisé pour intéragir avec une page `html`, et pouvoir ainsi la rendre interactive. Nous allons ainsi pouvoir transformer nos simples pages internet *statiques* en véritables applications web *dynamiques.

Pour apprendre à créer des applications web grâce au `javascript`, nous allons suivre le cours en ligne (MOOC) libre sur le site openclassroom: **[Créez des pages web interactives avec JavaScript](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript)**

**N'oubliez pas de vous [connecter](https://openclassrooms.com/login)** sur le site afin de suivre votre avancement sur le cours.

Pour mettre en pratique vos connaissances au fur et à mesure du cours, lancer le script `launch-atom-firefox.bat` présent dans le dossier `Documents\devoirs\abel\icn` qui permet d'ouvrir l'éditeur de texte Atom pour éditer le code `javascript` et le navigateur `firefox` pour observer les sorties de votre programme dans la console de développement.

# [Partie 1 - Dominez le DOM](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom)

> L'objectif de cette partie est d'apprendre à accéder au contenu de la page html(son DOM) afin de lire son contenu, le modifier, ou enfin modifier dynamiquement les styles de la page.

# [1. Découvrez le DOM](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom)

## [Résumé](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom#/id/r-3558497)

>- Une page web est un document structuré contenant à la fois du texte et des balises HTML. Grâce à JavaScript, on peut accéder à la structure d'une page affichée dans un navigateur, et même la modifier.
- Le DOM, ou Document Object Model, définit de manière standardisée la structure d'une page web et le moyen d'interagir avec elle via JavaScript. Le DOM représente une page web comme une hiérarchie d'objets reflétant sa structure. Chaque objet du DOM correspond à un nœud dans l'arborescence de la page web.
- La variable JavaScript `document` permet d'accéder à la racine de l'arborescence du DOM et correspond à l'élément `<html>` de la page.
- Les objets du DOM disposent de propriétés et de méthodes utilisables avec JavaScript. Parmi ces propriétés, `nodeType` renvoie le type de nœud,`childNodes` contient une collection de nœuds enfants et `parentNode` renvoie le nœud parent.

>*Il existe d'autres propriétés que nous n'aborderons pas ici pour naviguer entre les objets du DOM :  `firstChild`, `lastChild` ou encore `nextSibling`... Vous en trouverez la liste complète sur le [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/Web/API/Node).*

## [Exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom#/id/r-3558496)

Réalisez les [exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/decouvrez-le-dom#/id/r-3558496) du chapitre avant de passer à la suite.

# [2. Parcourez le DOM](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/parcourez-le-dom)

## [Résumé](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/parcourez-le-dom#/id/r-3575202)

> Ce chapitre nous a permis de découvrir comment parcourir la structure DOM d'une page web. Voici les informations à retenir.

>- Plutôt que de parcourir le DOM nœud par nœud, on peut accéder rapidement à un ou plusieurs éléments en utilisant des méthodes de sélection.
- Les méthodes `getElementsByTagName`, `getElementsByClassName` et `getElementById` permettent respectivement de rechercher des éléments par nom de balise, par classe et par identifiant. Les deux premières méthodes renvoient une liste, la dernière renvoie un seul élément.
- Les méthodes `querySelectorAll` et `querySelector` permettent de rechercher des éléments en utilisant un sélecteur CSS. La première méthode renvoie tous les éléments correspondants, la seconde renvoie uniquement le premier.
- La propriété `innerHTML` renvoie le contenu HTML d'un élément. La propriété `textContent` renvoie son contenu textuel, sans le balisage HTML.
- Les méthodes `getAttribute` et `hasAttribute` permettent d'accéder aux attributs d'un élément.
- La propriété `classList` et sa méthode `contains` permettent d'accéder aux classes d'un élément.

> *Nous n'avons étudié qu'une partie de l'API du DOM. Consultez le [Mozilla Developer Network](https://developer.mozilla.org/fr/docs/Web/API/Node) pour obtenir des informations complémentaires.*

## [Exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/parcourez-le-dom#/id/r-3575021)

Réalisez les [exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/parcourez-le-dom#/id/r-3575021) du chapitre avant de passer à la suite.

# [3. Modifiez la structure de la page](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/modifiez-la-page-web)

## [Résumé](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/modifiez-la-page-web#/id/r-3614348)

> Ce chapitre nous a permis de découvrir comment modifier la structure d'une page web. Voici ce que vous devez en retenir.

>- Les propriétés `innerHTML`, `textContent` et `classList` ainsi que la méthode `setAttribute` permettent de modifier les informations d'un élément du DOM.
- La création d'un nouveau noeud s'effectue avec les méthodes `createTextNode` pour un noeud textuel et `createElement` pour un élément.
- La méthode `appendChild` permet d'insérer un nouveau noeud comme dernier enfant d'un élément du DOM.
- Les méthodes `insertBefore` et `insertAdjacentHTML` offrent des possibilités alternatives pour ajouter  du contenu.
- On peut remplacer un noeud existant avec la méthode `replaceChild` ou le supprimer avec `removeChild`.

> La manipulation du DOM en JavaScript doit se faire de manière *raisonnée* afin de ne pas dégrader les performances.

## [Exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/modifiez-la-page-web#/id/r-3612221)

Réalisez les [exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/modifiez-la-page-web#/id/r-3612221) du chapitre avant de passer à la suite.

# [4. Donnez du style à vos éléments](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/reagissez-a-des-evenements)

## [Résumé](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/reagissez-a-des-evenements#/id/r-3636866)

>Voici ce qu'il faut retenir de ce chapitre consacré à la gestion des styles.﻿﻿

>- La propriété JavaScript `style` représente l'attribut style d'un élément du DOM. Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS.
- Les propriétés CSS composées s'écrivent avec la norme [camelCase](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/jouez-avec-les-variables#/id/r-3039825) en JavaScript. Par exemple, *font-family* devient *fontFamily* .
- La propriété JavaScript style est insuffisante pour accéder au style d'un élément. Pour cela, on utilise la fonction `getComputedStyle`.

## [Exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/reagissez-a-des-evenements#/id/r-3636881)

Réalisez les [exercices](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/reagissez-a-des-evenements#/id/r-3636881) du chapitre avant de passer au quizz et à l'activité proposée.

# Applications

Réalisez le [Quiz](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/exercises/736), puis l'[activité : Créez un site de partage de liens](https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/exercises/792).
