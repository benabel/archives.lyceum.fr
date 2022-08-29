---
tags: ["histoire de l'informatique", 'timeline.js', 'frise chronologique']
---
<!--
BO Architecture des ordinateurs

SAVOIRS
Jeu d'instructions Instructions simples (chargement, stockage, opérations arithmétiques et logiques, saut conditionnel). Les circuits combinatoires réalisent des fonctions booléennes.

CAPACITÉS
Savoir dérouler l'exécution d'une séquence d'instructions simples de type langage machine.

OBSERVATIONS
On propose des activités sous forme d'exercices sur papier sans utiliser d'ordinateur.

-->

## Comment en est-on arrivé là?

Nous sommes aujourd'hui entouré d'ordinateurs, de serveurs, de tablettes, et nous interagissons avec ces machines *quasi-*quotidiennement, mais comment cela a-t-il été possible?

Comme l'explique l'article [Informatique](https://fr.wikipedia.org/wiki/Informatique) de Wikipedia, cela a été possible grâce à des avancées de nature **théorique**, mais aussi **technologiques**.

> Ces champs d'application[de l'informatique] peuvent être séparés en deux branches:
>
> - l'une, de **nature théorique**, qui concerne la définition de concepts et modèles,
> - et l'autre, de **nature pratique**, qui s'intéresse aux techniques concrètes de mise en œuvre.

## Sources

Les _domaines de l'informatique_ sont nombreux: algorithmique, langages de programmation...
Et l'informatique fait intervenir de nombreux _domaines connexes_: électronique, optique, ondes pour le stockage de données, leur échange sur des réseaux...

Voici quelques liens pour y voir plus clair:

- [Une histoire de l'informatique sur le site hypotheses.org](http://archinfo01.hypotheses.org/770)
- [Histoire de l'informatique de Francois Guillier](http://www.histoire-informatique.org/)
- [Histoire de l'informatique sur Wikipedia](https://fr.wikipedia.org/wiki/Histoire_de_l%27informatique)
- [Histoire des ordinateurs](https://fr.wikipedia.org/wiki/Histoire_des_ordinateurs)
- [Chronologie de l'informatique](https://fr.wikipedia.org/wiki/Chronologie_de_l%27informatique)

## Créez votre propre frise

A vous d'écrire _votre histoire de l'informatique_ en utilisant les liens ci-dessus, et en réalisant une frise chronologique grâce à la librairie `javascript` [TimelineJS](https://timeline.knightlab.com/)

Pour cela vous allez devoir dans un premier temps concevoir sur le papier votre frise en sélectionnant les éléments les plus signifiants, en les ordonnant. N'oubliez pas de noter également vos sources de texte et d'images(libres de droit).

Vous intégrerez ensuite vos éléments au sein d'un fichier de données `csv`(comma separated values, soit valeurs séparées par des virgules) que vous éditerez avec un tableur([LibreOffice](https://fr.libreoffice.org/) de préférence).

Voici un exemple de rendu d'une frise avec `timeline.js`: <https://benjaminabel.github.io/timelinejs-local/>, vous pouvez visualiser ici le fichier de données [timeline-data.csv](https://github.com/benjaminabel/timelinejs-local/blob/gh-pages/timeline-data.csv) qui a permis de créer cette frise.

La particularité de la librairie [TimelineJS](https://timeline.knightlab.com/), est qu'elle permet d'ajouter eu plus du simple texte, des médias issus de diverses sources: Wikipedia, Youtube, SoundCloud, Instangram, Tweeter... [(liste complète)](https://timeline.knightlab.com/docs/media-types.html)

Voici la signification des entrées de ce tableau de données:

- `date`: année de la découverte ou de l'invention(**obligatoire** sauf pour la vignette de titre).
- `type`: laisser vide pour un événement normal et indiquer titre pour la vignette de titre de la frise.
- `titre`: titre de la vignette.
- `texte`: texte à inclure dans la vignette.
- `mediaUrl`: adresse de l'élément media(exemple: <https://fr.wikipedia.org/wiki/Pascaline>, ou localement: `img/mon-image.jpg`)
- `mediaCredit`: auteur et licence du média intégré
- `mediaLegend`: légende à ajouter au media
- `mediaThumbnail`: vignette à utiliser pour afficher la vignette sur la frise, si vide, une vignette par défaut est ajouté en fonction du média(exemple: logo Youtube pour les média youtube)
- `backgroundUrl`: adresse url d'une image à utiliser pour le fond de la vignette.
- `backgroundColor`: couleur du fond de la vignette, vous pouvez utiliser une couleur héxadécimale `#RRGGBB` ou avec transparence `#RRGGBBaa`, ou simplement un nom de couleur `css` comme `white`, `lime`, ... [liste complète sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Type_color#Les_mots-cl%C3%A9s)

Pour créer votre frise, téléchargez le dossier compressé du code de la frise d'exemple à l'adresse suivante: <https://github.com/benjaminabel/timelinejs-local/archive/gh-pages.zip>, puis éditez le fichier `timeline-data.csv` avec le tableur.

Observez le rendu dans le navigateur en ouvrant le fichier `index.html` et en rafraîchissant la page à chaque changement.

_A vos claviers!_

## Exemples de réalisations des élèves

Des exemples de travaux des élèves peuvent être consultés à l'adresse suivante: <http://heoinfo.github.io/isn/2016-2017/#frises>
