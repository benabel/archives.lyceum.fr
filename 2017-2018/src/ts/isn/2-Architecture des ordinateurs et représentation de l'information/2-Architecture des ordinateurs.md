---
tags: ["histoire de l'informatique", "machine de Turing", "von Neumann"]
---


# Un peu d'histoire: la machine de Turing

En 1642, *Blaise Pascale* est le premier à avoir conçu une machine à calculer mécanique, capable d'effectuer les quatre opérations élémentaires sur les entiers: addition, soustraction, multiplication, division.

<p><a href="https://commons.wikimedia.org/wiki/File:Arts_et_Metiers_Pascaline_dsc03869.jpg#/media/File:Arts_et_Metiers_Pascaline_dsc03869.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Arts_et_Metiers_Pascaline_dsc03869.jpg" alt="Arts et Metiers Pascaline dsc03869.jpg" width="640" height="351"></a><br>Par © 2005 <a href="//commons.wikimedia.org/wiki/User:David.Monniaux" title="User:David.Monniaux">David Monniaux</a>&nbsp;/&nbsp;, <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=186079">Lien</a></p>


Les machines ont ensuite évolué, afin d'être capable de réaliser d'autres calculs, et s'est ensuite poser la question: "Une machine peut-elle tout calculer?", "Existe-t-il une machine capable de décider si une proposition mathématique est vraie ou fausse?".

Pour répondre à cette question, Alan Turing propose en 1937 un modèle de machine appelé aujourd'hui *machine de Turing*. Cette machine a les caractéristiques suivantes:

Elle possède un ruban infini que lequel on dispose des données. La machine peut lire les données, les traiter et en écrire d'autres. Au bout d'un certain temps, il se peut qu'elle s'arrête, et on peut alors lire le résultat.

Turing démontre grâce à cette machine *théorique* qu'il existe certains problèmes que la machine n'est pas capable de résoudre.

On considère aujourd'hui l'ordinateur comme une réalisation concrète d'une machine de Turing universelle, c'est à dire une machine traitant des informations et capable de prendre comme donnée n'importe quel algorithme et de l’exécuter.

# L'architecture de von Neumann

Le premier ordinateur électronique conçu pour être une machine de Turing est l'EINAC réalisé en 1943. Son architecture fut décrite par John von Neumann et sert de base, à quelques améliorations près, à l'architecture de tous les ordinateurs depuis.

![Architecture de Von Neumann](./archi-von-neumann.png)

**Source:** [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)



Cette architecture est centrée autour de deux composants principaux:

- le **processeur**,
- et la  **mémoire**.

Ces deux circuits sont reliés par des fils appelés *bus de communication*.
D'autres part, le processeur dispose de *bus d'entrée et de sortie* qui le relient à d'autres parties de l'ordinateur appelées les *périphériques* comme par exemple le disque dur, l'écran, le clavier...

Le processeur joue le rôle du *chef d'orchestre*, il donne des ordres aux périphériques et à la mémoire et est responsable de l'exécution du programme de l'ordinateur.

Au sein du processeur le traitement des tâches a été séparé en deux:

- l'**unité de contrôle** lit les instructions du programme en mémoire une à une, et commande à
- l'**unité de calcul** de réaliser ces opérations lorsque l'opération est terminée, l'unité de contrôle passe à l'instruction suivante du programme.

Le processeur possède également un très petit nombre de cases mémoires très rapides appelées des *registres* dont la capacité dépasse rarement quelques dizaines d'octet pour des raisons de coût et de place. [Source Wikipedia](https://fr.wikipedia.org/wiki/Registre_de_processeur)

# Quelques variations à l'architecture de von Neumann

La mémoire vive de l'ordinateur a besoin d'être alimentée en permanence pour garder les données, ainsi à chaque extinction de l'ordinateur, elle est perdue, on la qualifie de mémoire volatile.

Pour résoudre ce problème on recourt à deux types de mémoires non volatiles:

- **la mémoire morte** est une mémoire qui ne peut être que lue(ROM Read Only Memory), elle contient en général le *firmware* de l'ordinateur (BIOS ou UEFI) qui est le programme qui se charge à chaque allumage de l'ordinateur.

- **la mémoire de masse**: Pour stocker les donnée et les programmes, on ajoute un périphérique appelé mémoire de masse: le disque dur de vos ordinateurs, ou une mémoire flash dans le cas des tablettes et smartphones. Cette mémoire est capable de stocker une grande quantité de données, mais à l'inconvénient d'être beaucoup moins rapides que la mémoire vive(RAM Random Access Memory), c'est pour cela que lors du lancement d'un programme les données nécessaire à son exécution sont généralement transférées vers la RAM pour une exécution plus rapide.

De plus, on délégué de plus en plus souvent les calculs onéreux d'affichage à la carte graphique pour soulager le processeur.



# Exercices

1. Classer les diverses mémoires présentes dans un ordinateur par "rapidité", et expliquer leurs rôles respectifs.

2. En utilisant l'[animation du CEA](http://www.cea.fr/multimedia/Pages/animations/technologies/fonctionnement-ordinateur.aspx) ci-dessous, réaliser en *grand format*, une *vue schématique d'un ordinateur* en indiquant le nom des diverses parties, leurs connexions, et leurs rôles.

<div width='100%' height='100%'>
<center><object id="MultimediaPlayer_g_ad98e991_ffb7_44a0_82bc_53d3952d20c3" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="700px" height="404px" class="flash"><param name="movie" value="http://www.cea.fr/multimedia/Mediatheque/animation/technologies/fonctionnement-ordinateur.swf"/><param name="wmode" value="opaque"><!--[if !IE]>--><object type="application/x-shockwave-flash" data="http://www.cea.fr/multimedia/Mediatheque/animation/technologies/fonctionnement-ordinateur.swf" width="700px" height="404px"><param name="wmode" value="opaque"><!--<![endif]--><a href="http://www.adobe.com/go/getflash">Activer Flash</a><!--[if !IE]>--></object><!--<![endif]--></object></center><p style='margin-top: 0.2em; color: #999999;'>
Voir l'animation <a href='http://www.cea.fr/multimedia/Pages/animations/technologies/fonctionnement-ordinateur.aspx' style='color: #666666' target='_blank'>Le fonctionnement d'un ordinateur</a> sur <a href='http://www.cea.fr/multimedia/Pages/animations/technologies/fonctionnement-ordinateur.aspx' style='color: #999999' target='_blank'>http://www.cea.fr/multimedia/Pages/animations/technologies/fonctionnement-ordinateur.aspx</a></p>
</div>

*Nouveau: si votre appareil ne supporte pas flash, vous pouvez consulter la version [vidéo](http://www.cea.fr/multimedia/Pages/videos/culture-scientifique/technologies/fonctionnement-ordinateur.aspx).*


# Références

- [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)
- [Informatique pour tous en classes préparatoires aux grandes écoles de Benjamin Wack](http://www.editions-eyrolles.com/Livre/9782212137002/informatique-pour-tous-en-classes-preparatoires-aux-grandes-ecoles)
