---
tags: ["algorithme", "programmation par bloc"]
---

Dans cette partie, nous allons étudier un langage de programmation moderne le `javascript` qui permet notamment de créer des pages web dynamiques, qui deviennent alors de véritables applications web.

Mais avant d'en arriver là, il a fallu vaincre de grandes difficultés tant théoriques que technologiques.

# La machine analytique(1821)

Cette machine imaginée par Charles Babbage (1791-1871) assisté notamment de Ada Lovelace (1815-1852) avait pour but «d'effectuer automatiquement des opérations abstraites pour nous faire gagner du temps de travail, et nous permettre de refaire sans étourderie des opérations que nous aurions bien définies ».

<p><a href="https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg#/media/File:Ada_Lovelace_portrait.jpg"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" alt="Ada Lovelace portrait.jpg" width="334" height="480"></a><br>By <a href="https://en.wikipedia.org/wiki/en:Alfred_Edward_Chalon" class="extiw" title="w:en:Alfred Edward Chalon">Alfred Edward Chalon</a> - <a rel="nofollow" class="external text" href="http://www.scienceandsociety.co.uk/results.asp?image=10312035">Science &amp; Society Picture Library</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=28131684">Link</a></p>

> Cette machine a presque marché, à quelques roues dentées près ! Trop difficile à réaliser uniquement avec de la mécanique, il a faudra attendre un siècle que la technologie électronique se développe pour que ce « principe » devienne réalisable. [Source DocSciences](//www.reseau-canope.fr/docsciences/Travail-et-pensee-d-Ada-Lovelace)

> Pour faire marcher cette future machine, Ada crée des « diagrammes » qui ont pour but d'expliquer comment doit procéder la machine pour arriver au résultat recherché... et ceci indépendamment de la façon dont sont réalisées ces opérations. Ce sont des « algorithmes ». Ce mot vient du nom du grand mathématicien perse Al-Khwarizmi (vers l'an 820) qui introduit en Occident la numération décimale (rapportée d'Inde) et enseigne les règles élémentaires des calculs s'y rapportant. [Source Algorithmes, mode d'emploi sur le site Interstices](https://interstices.info/jcms/c_42224/algorithmes-mode-d-emploi)

# Les ingrédients des Algorithmes

> Un algorithme, très simplement, est une méthode, une façon systématique de procéder pour faire quelque chose : trier des objets, situer des villes sur une carte, multiplier deux nombres, extraire une racine carrée, chercher un mot dans le dictionnaire...[Source Algorithmes, mode d'emploi sur le site Interstices](https://interstices.info/jcms/c_42224/algorithmes-mode-d-emploi)

Un algorithme utilise cinq ingrédients de base:

[Source Les ingrédients des algorithmes sur le site Interstices](https://interstices.info/jcms/c_43821/les-ingredients-des-algorithmes)

- Un algorithme est un chemin à parcourir pas à pas, une **séquence d'instructions**.
- Cependant il ne faut pas forcément effectuer toutes les instructions en fonctions de conditions: le **instructions conditionnelles**.
- Nous avons aussi besoin d'une autre construction, la **boucle d'instructions** qui permet de faire durer ou répéter une opération autant de fois que nécessaire.
- Nous introduison la **notion de variable** ou de paramètre qui permettra de modifier le programme en fonction de ces paramètres.
- La dernière construction, qui consiste à **regrouper un bloc d'instructions dans une fonction**, va nous permettre de réutiliser différentes fonctionnalités, comme les briques d'un jeu de Lego, pour réaliser une construction logicielle.

# Des algorithmes aux langages de programmation

Au XXe siècle, les premiers ordinateurs électroniques apparaissaient et permettaient de faire réaliser nos algorithmes par des machines comme par exemple l'UNIVAC.

<p><a href="https://commons.wikimedia.org/wiki/File:Grace_Hopper_and_UNIVAC.jpg#/media/File:Grace_Hopper_and_UNIVAC.jpg"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg" alt="Grace Hopper and UNIVAC.jpg" width="513" height="450"></a><br>By Unknown (Smithsonian Institution) - <a href="//commons.wikimedia.org/wiki/Flickr" class="mw-redirect" title="Flickr">Flickr</a>: <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/8212496@N06/493885707">Grace Hopper and UNIVAC</a>, <a href="http://creativecommons.org/licenses/by/2.0" title="Creative Commons Attribution 2.0">CC BY 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=19763543">Link</a></p>

Cependant à cette époque, le programme devait être écrit dans un langage proche du [langage machine](https://fr.wikipedia.org/wiki/Langage_machine) comme l'[assembleur](https://fr.wikipedia.org/wiki/Assembleur).

<p><a href="https://commons.wikimedia.org/wiki/File:WikipediaBinary.svg#/media/File:WikipediaBinary.svg"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/WikipediaBinary.svg" alt="WikipediaBinary.svg" width="88" height="106"></a><br>By <a href="https://en.wikipedia.org/wiki/User:Dreftymac" class="extiw" title="wikipedia:User:Dreftymac">Dreftymac</a> at <a href="https://en.wikipedia.org/wiki/" class="extiw" title="wikipedia:">English Wikipedia</a>, <a href="http://creativecommons.org/licenses/by/2.5" title="Creative Commons Attribution 2.5">CC BY 2.5</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=6948707">Link</a></p>

La création du premier langage de programmation est le fruit du travail d'une informaticienne américaine: [Grace Hopper](https://fr.wikipedia.org/wiki/Grace_Hopper)

> À partir de 1957, elle travaille pour IBM, où elle défend l'idée qu'un programme devrait pouvoir être écrit dans un langage proche de l'anglais plutôt que d'être calqué sur le langage machine, comme l'assembleur. De cette idée naît le langage COBOL en 1959\. [Source Wikipedia](https://fr.wikipedia.org/wiki/Grace_Hopper)

# Exercices

Pour vous habituer avec les ingrédients des programmes, réalisez les exercices suivant en **programmation par bloc**:

<https://blockly-games.appspot.com/?lang=fr>
