---
tags:
  [
    "histoire de l'informatique",
    'machine de Turing',
    'architecture de von Neumann',
  ]
---

Le développement de l'informatique a nécessité de nombreuses avancées dans des domaines variés tant
*technologiques que théoriques*.


## Aspects technologiques

### Calculateurs mécaniques

En 1642, _Blaise Pascale_ est le premier à avoir conçu une machine à calculer **mécanique**,
capable d'effectuer les quatre opérations élémentaires sur les entiers: addition, soustraction,
multiplication, division.

<wc-wikimage title="Arts_et_Metiers_Pascaline_dsc03869.jpg" caption="La pascaline créée par Blaise Pascal en 1652.">
</wc-wikimage>

### Calculateurs électromécaniques

Au début du XX^e^ siècle, on commence à utiliser l'**électricité** pour réaliser des calculateurs.

D'abord des machines **électromécaniques** comme le **Z3** allemand achevé en 1941. On le dit
électromécanique, car il utilisait des relais électromécaniques fonctionnant à une fréquence de 5 à
10 Hz.(Source [Wikipedia](https://fr.wikipedia.org/wiki/Zuse_3))

<wc-wikimage title="Z3_Deutsches_Museum.JPG"></wc-wikimage>

On remplace rapidement les relais électromécaniques par des tubes à vides comme dans
l'[ENIAC](https://fr.wikipedia.org/wiki/ENIAC).

<wc-wikimage title="ENIAC-changing_a_tube.jpg"></wc-wikimage>

### Le transistor et l'avènement de l'électronique

<wc-wikimage class="half right" title="Transistorer_(cropped).jpg" caption="Le transistor est un composant à trois bornes."></wc-wikimage>
C'est avec l'invention du transistor en 1947 que l'ère de l'électronique et de
l'informatique va prendre son envol. Cette découverte vaudra à ses inventeurs américains William
Shockley et Walter Brattain le prix Nobel de physique en 1956.


> Le transistor est considéré comme un énorme progrès face au tube électronique : beaucoup plus
> petit, plus léger et plus robuste, fonctionnant avec des tensions faibles, autorisant une
> alimentation par piles, il fonctionne presque instantanément une fois mis sous tension,
> contrairement aux tubes électroniques qui demandaient une dizaine de secondes de chauffage,
> généraient une consommation importante et nécessitaient une source de tension élevée (plusieurs
> centaines de volts).
> [Wikipedia](https://fr.wikipedia.org/wiki/Transistor#Historique){.cite-source}


## Aspects théorique

### La machine de Turing

Au fur et à mesure que les machines évoluaient, on est venu à se poser beaucoup plus théorique: "Une machine peut-elle tout calculer?", "Existe-t-il une machine capable de décider si une proposition mathématique est vraie ou fausse?".

Pour répondre à ces questions, Alan Turing propose en 1937 un modèle de machine appelé aujourd'hui _machine de Turing_. Cette machine a les caractéristiques suivantes:

Elle possède un ruban infini que lequel on dispose des données. La machine peut lire les données, les traiter et en écrire d'autres. Au bout d'un certain temps, il se peut qu'elle s'arrête, et on peut alors lire le résultat.

Turing démontre grâce à cette machine _théorique_ qu'il existe certains problèmes que la machine n'est pas capable de résoudre.

On considère aujourd'hui l'ordinateur comme une réalisation concrète d'une machine de Turing universelle, c’est-à-dire une machine traitant des informations et capable de prendre comme donnée n'importe quel algorithme et de l’exécuter.

### L'architecture de von Neumann

Le premier ordinateur électronique conçu pour être une machine de Turing est l'EINAC réalisé en 1943. Son architecture fut décrite par John von Neumann et sert de base, à quelques améliorations près, à l'architecture de tous les ordinateurs depuis.

![Architecture de Von Neumann](./images/archi-von-neumann.png){.center}

[Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/){.cite-source}

Cette architecture est centrée autour de deux composants principaux:

- le **processeur**,
- et la **mémoire**.


::: ref

- [Informatique et sciences du numérique Spécialité ISN en terminale S - Avec des exercices corrigés et des idées de projets par Gilles Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)
- [Informatique pour tous en classes préparatoires aux grandes écoles de Benjamin Wack](http://www.editions-eyrolles.com/Livre/9782212137002/informatique-pour-tous-en-classes-preparatoires-aux-grandes-ecoles)

:::
