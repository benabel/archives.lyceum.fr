---
tags: ["ascii art", "encodage", "ASCII", "taille des images"]
---


Nous avons vu la [semaine dernière](./4-Pixel-art) comment étaient faites les images dans les premiers jeux vidéo lorsque les mémoires ne permettaient de stocker que de petites images avec une faible résolution et un nombre de couleurs limitées.

Aujourd'hui nous allons encore remonter dans le temps avec des images encore plus rudimentaires lorsque les ordinateurs ne permettaient d'afficher que des textes.

# Qu'est ce que l'art ASCII?

>L'art ASCII consiste à réaliser des images uniquement à l'aide des lettres et caractères spéciaux contenus dans le code ASCII.
[Source Wikipedia](https://fr.wikipedia.org/wiki/Art_ASCII)

*Exemples issus de l'article de [Wikipedia](https://fr.wikipedia.org/wiki/Art_ASCII):*

```
         (_) |                   | (_)
__      ___| | ___ _ __   ___  __| |_  __ _       
\ \ /\ / / | |/ / | '_ \ / _ \/ _` | |/ _` |
 \ V  V /| |   <| | |_) |  __/ (_| | | (_| |
  \_/\_/ |_|_|\_\_| .__/ \___|\__,_|_|\__,_|
                  | |                       
                  |_|

                  \\\||||||////
                   \\  ~ ~  //
                    (  @ @  )
           ______ oOOo-(_)-oOOo___________
           .......
           .......
           .......
           _____________Oooo._____________
              .oooO     (   )
               (   )     ) /
                \ (     (_/
                 \_)

```

Ou encore plus évolué ce logo de Wikipédia en art ASCII (composé de 7857 caractères):

<p><a href="https://commons.wikimedia.org/wiki/File:WP_logo_ASCII_art_7857_chars.png#/media/File:WP_logo_ASCII_art_7857_chars.png"><img class="center" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/WP_logo_ASCII_art_7857_chars.png" alt="WP logo ASCII art 7857 chars.png"></a><br>Par see below, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=8853122">Lien</a></p>

# Qu'est ce que l'encodage ASCII?

Dans un ordinateur, toutes les informations sont stockées sous forme binaire, que ce soit des images ou des caractères, l'encodage ASCII est le premier encodage des caractères qui a été mis au point. Il utilisait seulement 7 bits(0 ou 1), et permettait ainsi de représenter $2^7 = 128$ caractères.

> L'ASCII définit seulement **128 caractères** numérotés de 0 à 127 et codés en binaire de `0000000` à `1111111`. Sept bits suffisent donc pour représenter un caractère codé en ASCII. Toutefois, les ordinateurs travaillant presque tous sur un multiple de huit bits (multiple d'un octet) depuis les années 1970, chaque caractère d'un texte en ASCII est souvent stocké dans un octet dont le 8e bit est 0. [Source Wikipedia](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)

## Table ascii

![Table ascii](../../../assets/ascii-table.png)

Certains des caractères présents ne peuvent pas être affichés(repérés par un fond bleu), ce sont des caractères de contrôle. Vous pouvez trouver leur signification sur cette [page](http://isn.fil.univ-lille1.fr/activite3/doc/ascii.txt).

Pour lire le tableau, on associe au caractère le code binaire suivant: `n°deligne_n°decolonne`.

*Par exemple*, le caractère <kbd>a</kbd>  est situé dans la case correspondant à la 7e ligne, 2e colonne. Sa représentation binaire est:`110_0001` soit sous la forme d'un octet: `01100001`. Ce qui correspond au caractère 97 en décimal.

# Taille des images

La taille des images est la taille en octets de l'image. Elle est très réduite sur ces images d'ASCII art, ainsi l'image du logo de Wikipedia qui est composé de 7857 caractères occupe seulement *7857 octets* en mémoire, ce qui est bien inférieur à la version `png` ci-dessous, qui occupe *203 360 octets*, et qui pourtant a été [compressée](https://fr.wikipedia.org/wiki/Compression_de_donn%C3%A9es).

<a title="By User:Nohat (de:Image:Wikide.png (oder so)) [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File%3AWikipedia_logo_silver.png"><img width="512" class="center" alt="Wikipedia logo silver" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wikipedia_logo_silver.png/512px-Wikipedia_logo_silver.png"/></a>

## Préfixes binaires

Lorsque la taille des fichiers dépasse le millier d'octets, on utilise des préfixes binaires(en base 2) qui ne sont pas les préfixes du système international(en base 10) utilisés en sciences.

Concernant les multiples de l'octet, cela donne :

- 1 kibioctet (kio) 	= 2^10^ octets 	= 1 024 octets
- 1 mébioctet (Mio) 	= 2^20^ octets 	= 1 024 kio 	= 1 048 576 octets
- 1 gibioctet (Gio) 	= 2^30^ octets 	= 1 024 Mio 	= 1 073 741 824 octets
- 1 tébioctet (Tio) 	= 2^40^ octets 	= 1 024 Gio 	= 1 099 511 627 776 octets

Ces préfixes ont des valeurs supérieures à leur équivalent du système international.

*Par exemple: 1kio = 1024 o > 1ko = 1000 o.*

Ceci crée une ambiguïté pour les consommateurs qui achètent de la mémoire, et qui ne savent pas toujours si le fabriquant leur vend un disque dur de 1To = 1000000000 octets ou 1Tio = 1 099 511 627 776 octets soit presque *10% d'écart*.
