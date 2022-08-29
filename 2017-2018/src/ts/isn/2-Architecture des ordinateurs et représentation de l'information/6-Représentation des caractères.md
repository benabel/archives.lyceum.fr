---
tags: ["codage ASCII", "caractères", "encodage", "utf-8"]
---


Pour représenter un texte, il est nécessaire d'afficher les caractères qui le composent. Le choix du codage des caractères dépend fortement des langues, ainsi la langue française comporte de nombreuses lettres accentuées non utilisées en anglais par exemple:

<kbd>é</kbd>, <kbd>è</kbd>, <kbd>ê</kbd>, <kbd>ç</kbd>, <kbd>à</kbd>...

Le premier codage à avoir été utilisé est le codage ascii(American Standard Code for Information Interchange), qui ne prévoit pas l'utilisation de lettres accentuées et qui peut vous ammener parfois à lire des textes à la limite du compréhensible sur vos écrans.


En voici un [exemple](./data/ascii-example.html)

# Le codage ascii

> Le codage ASCII est une norme de codage de caractères en informatique ancienne et connue pour son influence incontournable sur les codages de caractères qui lui ont succédé. Elle était la plus largement compatible pour ce qui est des caractères latins non accentués. **ASCII contient les caractères nécessaires pour écrire en anglais.**

> L'ASCII définit seulement **128 caractères** numérotés de 0 à 127 et codés en binaire de 0000000 à 1111111. Sept bits suffisent donc pour représenter un caractère codé en ASCII. Toutefois, les ordinateurs travaillant presque tous sur un multiple de huit bits (multiple d'un octet) depuis les années 1970, chaque caractère d'un texte en ASCII est souvent stocké dans un octet dont le 8e bit est 0. [Source Wikipedia](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)

## Table ascii

![Table ascii](../../../assets/ascii-table.png)

Certains des caractères présents ne peuvent pas être affichés(repérés par un fond bleu), ce sont des caractères de contrôle. Vous pouvez trouver leur signification sur cette [page](http://isn.fil.univ-lille1.fr/activite3/doc/ascii.txt).

Pour lire le tableau, on associe au carctère le code binaire suivant: `n°deligne_n°decolonne`. Par exemple, le caractère <kbd>a</kbd>  est situé dans la case correspondant à la 7e ligne, 2e colonne. Sa représentation binaire est:`110_0001` soit sous la forme d'un octet: `01100001`. Ce qui correspond au caractère 97 en décimal.

Pour faciliter la lecture des codes ascii par un huamin, il est plus commode de coder les numéros de ligne et de colonne en hexadécimal, et la lettre 'a' aura alors pour code `61` en hexadécimal.

# L'encodage ascii étendu

> La nécessité de représenter des textes comportant des caractères non présents dans la table ASCII tels ceux de l'alphabet latin utilisés en français comme le 'à', le 'é' ou le 'ç' impose l'utilisation d'un autre codage que l'ASCII.

Plusieurs propositions de codage coexistent.

Afin de faciliter les choses, ces propositions sont des extensions du codage ASCII :

- le codage des caractères présents dans la table ASCII est conservé ;
- le principe du codage de chacun des caractères sur un octet est conservé.

Mais les 8 bits de l'octet vont être utilisés. Cela permet de coder $2^8$ = 256 caractères, soit **128 caractères supplémentaires**.

> L'ISO, organisation internationale de normalisation, propose de son côté plusieurs variantes de codages adaptées aux différentes langues. La plus utilisée concerne les langues européennes occidentales. Il s'agit de l'ISO-8859-1, aussi nommé ISO-Latin1.[Source université de Lille](http://isn.fil.univ-lille1.fr/activite3/codcar.html)

Mais il existe d'autres variantes adaptées à d'autres langues:

- `ISO-8859-2` pour les pays d'Europe de l'est,
- `ISO-8859-3` pour les pays du sud est de l'Europe...

##Table ISO-latin-1[Source Wikipedia]()
<table>
<tbody><tr>
<th colspan="17" style="background-color:#FFCCBB">ISO/CEI 8859-1</th>
</tr>
<tr>
<th>&nbsp;</th>
<th style="width:2.5em">x0</th>
<th style="width:2.5em">x1</th>
<th style="width:2.5em">x2</th>
<th style="width:2.5em">x3</th>
<th style="width:2.5em">x4</th>
<th style="width:2.5em">x5</th>
<th style="width:2.5em">x6</th>
<th style="width:2.5em">x7</th>
<th style="width:2.5em">x8</th>
<th style="width:2.5em">x9</th>
<th style="width:2.5em">xA</th>
<th style="width:2.5em">xB</th>
<th style="width:2.5em">xC</th>
<th style="width:2.5em">xD</th>
<th style="width:2.5em">xE</th>
<th style="width:2.5em">xF</th>
</tr>
<tr>
<th>0x</th>
<td rowspan="2" colspan="16" style="background:#DDDDDD"><i>positions inutilisées</i></td>
</tr>
<tr>
<th>1x</th>
</tr>
<tr>
<th>2x</th>
<td><small style="border:1px dotted;padding:0 0.3em;color:#AAAAAA;font-size:87%">SP</small></td>
<td>&nbsp;!</td>
<td>"</td>
<td>#</td>
<td>$</td>
<td>&nbsp;%</td>
<td>&amp;</td>
<td>'</td>
<td>(</td>
<td>)</td>
<td>*</td>
<td>+</td>
<td>,</td>
<td>-</td>
<td>.</td>
<td>/</td>
</tr>
<tr>
<th>3x</th>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>&nbsp;:</td>
<td>&nbsp;;</td>
<td>&lt;</td>
<td>=</td>
<td>&gt;</td>
<td>&nbsp;?</td>
</tr>
<tr>
<th>4x</th>
<td>@</td>
<td>A</td>
<td>B</td>
<td>C</td>
<td>D</td>
<td>E</td>
<td>F</td>
<td>G</td>
<td>H</td>
<td>I</td>
<td>J</td>
<td>K</td>
<td>L</td>
<td>M</td>
<td>N</td>
<td>O</td>
</tr>
<tr>
<th>5x</th>
<td>P</td>
<td>Q</td>
<td>R</td>
<td>S</td>
<td>T</td>
<td>U</td>
<td>V</td>
<td>W</td>
<td>X</td>
<td>Y</td>
<td>Z</td>
<td>[</td>
<td>\</td>
<td>]</td>
<td>^</td>
<td>_</td>
</tr>
<tr>
<th>6x</th>
<td>`</td>
<td>a</td>
<td>b</td>
<td>c</td>
<td>d</td>
<td>e</td>
<td>f</td>
<td>g</td>
<td>h</td>
<td>i</td>
<td>j</td>
<td>k</td>
<td>l</td>
<td>m</td>
<td>n</td>
<td>o</td>
</tr>
<tr>
<th>7x</th>
<td>p</td>
<td>q</td>
<td>r</td>
<td>s</td>
<td>t</td>
<td>u</td>
<td>v</td>
<td>w</td>
<td>x</td>
<td>y</td>
<td>z</td>
<td>{</td>
<td>|</td>
<td>}</td>
<td>~</td>
<td style="border-bottom:none;background:#DDDDDD"></td>
</tr>
<tr>
<th>8x</th>
<td rowspan="2" colspan="16" style="background:#DDDDDD;text-align:center"><i>positions inutilisées</i></td>
</tr>
<tr>
<th>9x</th>
</tr>
<tr>
<th>Ax</th>
<td><span style="border:1px dotted;padding:0 0.3em;color:#AAAAAA;font-size:87%">NBSP</span></td>
<td>¡</td>
<td>¢</td>
<td>£</td>
<td>¤</td>
<td>¥</td>
<td>¦</td>
<td>§</td>
<td>¨</td>
<td>©</td>
<td>ª</td>
<td>«&nbsp;</td>
<td>¬</td>
<td><span style="border:1px dotted;padding:0 0.3em;color:#AAAAAA">-</span></td>
<td>®</td>
<td>¯</td>
</tr>
<tr>
<th>Bx</th>
<td>°</td>
<td>±</td>
<td>²</td>
<td>³</td>
<td>´</td>
<td>µ</td>
<td>¶</td>
<td>·</td>
<td>¸</td>
<td>¹</td>
<td>º</td>
<td>&nbsp;»</td>
<td>¼</td>
<td>½</td>
<td>¾</td>
<td>¿</td>
</tr>
<tr>
<th>Cx</th>
<td>À</td>
<td>Á</td>
<td>Â</td>
<td>Ã</td>
<td>Ä</td>
<td>Å</td>
<td>Æ</td>
<td>Ç</td>
<td>È</td>
<td>É</td>
<td>Ê</td>
<td>Ë</td>
<td>Ì</td>
<td>Í</td>
<td>Î</td>
<td>Ï</td>
</tr>
<tr>
<th>Dx</th>
<td>Ð</td>
<td>Ñ</td>
<td>Ò</td>
<td>Ó</td>
<td>Ô</td>
<td>Õ</td>
<td>Ö</td>
<td>×</td>
<td>Ø</td>
<td>Ù</td>
<td>Ú</td>
<td>Û</td>
<td>Ü</td>
<td>Ý</td>
<td>Þ</td>
<td>ß</td>
</tr>
<tr>
<th>Ex</th>
<td>à</td>
<td>á</td>
<td>â</td>
<td>ã</td>
<td>ä</td>
<td>å</td>
<td>æ</td>
<td>ç</td>
<td>è</td>
<td>é</td>
<td>ê</td>
<td>ë</td>
<td>ì</td>
<td>í</td>
<td>î</td>
<td>ï</td>
</tr>
<tr>
<th>Fx</th>
<td>ð</td>
<td>ñ</td>
<td>ò</td>
<td>ó</td>
<td>ô</td>
<td>õ</td>
<td>ö</td>
<td>÷</td>
<td>ø</td>
<td>ù</td>
<td>ú</td>
<td>û</td>
<td>ü</td>
<td>ý</td>
<td>þ</td>
<td>ÿ</td>
</tr>
</tbody>
</table>


On peut constater que cette table ne prend pas en charge le caractère <kbd>€</kbd>, ainsi une nouvelle norme mieux adaptée au français a été introduite l'`ISO 8859-15` pour prendre en charge de l'**e dans l'o**, noté noté <kbd>œ</kbd> en minuscule et <kbd>Œ</kbd> en capitale.

Cette norme est cependant peu utilisée et on lui préfère maintenant le standard `Unicode` afin de dépasser les limites de l'encodage `latin-1`.

# L'encodage unicode utf-8

L'encodage utf-8 est un encodage en élaboration qui permet d'encoder tous les caractères de toutes les langues, il est actuellement en train de s'imposer face aux antres encodages en raison de son universalité.

<p><a href="https://commons.wikimedia.org/wiki/File:UnicodeGrow2b.png#mediaviewer/File:UnicodeGrow2b.png"><img alt="UnicodeGrow2b.png" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/UnicodeGrow2b.png" height="492" width="734"></a><br>"<a href="https://commons.wikimedia.org/wiki/File:UnicodeGrow2b.png#mediaviewer/File:UnicodeGrow2b.png">UnicodeGrow2b</a>" by <a href="//commons.wikimedia.org/wiki/User:Krauss" title="User:Krauss">Krauss</a> - <span class="int-own-work">Own work</span>. Licensed under <a title="Creative Commons Attribution-Share Alike 4.0" href="http://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>

>À l'évidence, 256 caractères ne suffisant pas pour représenter les lettres de tous les alphabets utilisés (pensons au russe, à l'hébreu, etc.), un nouveau standard a été introduit : Unicode. La table Unicode comporte la définition de près de cent cinquante mille caractères.

> Le codage de cette table est multiple. Le codage le plus couramment utilisé se nomme UTF-8. Son principe est le suivant : une première série de caractères sont codés sur un octet. D'autres caractères sont codés sur deux octets, le premier octet débute par '110' pour l'indiquer, l'octet suivant débute par '10'. De même des codages sur 3 ou 4 octets sont utilisés pour d'autres caractères. (Cette rapide introduction à UTF-8 est volontairement simplifiée.)

> Les 128 premiers caractères de la table UTF-8 sont compatibles avec le codage ASCII. Ainsi le codage UTF-8 d'un texte ne comportant que des caractères présents dans la table ASCII sera le même que le codage ASCII de ce texte.

>Ce ne sera pas vrai pour un texte ISO-Latin-1.

>Il importe donc, quand on veut décoder un texte, de savoir quel est le codage utilisé sous peine de décoder improprement les caractères.
[Source Univesrité de Lille](http://isn.fil.univ-lille1.fr/activite3/codcar.html)


La table complète des caractères unicode peut être consultée sur le site [unicode-table.com](http://unicode-table.com/fr/)


Par exemple si on cherche dans cette table la lettre <kbd>é</kbd>, on trouve le code:**`U+00E9`** appelé point code, en binaire cela correspond au nombre décimal 233, et au nombre binaire `11101001`. Ce nombre binaire sera représenté en utf-8 sur deux octets sous la forme: `110x-xxxx_10xx-xxxx`.  Les chiffres binaires du point de code sont rangés de droite à gauche aux positions 'x' de ce schéma.

On obtient donc `1100_0011 1010_1001` pour le caractère <kbd>é</kbd>.

Ce qui représente en hexadécimal:`C3A9`

# L'encodage des caractères en python

En **`python 3`**, tous les fichiers doivent être codés en utf-8, et les chaines de caractères string sont encodées en utf-8, contrairement aux bytes qui ne doivent contenir que des caractères ascii.

# L'encodage des caractères en html

Pour obtenir un affichage correct des caractères spéciaux en html, il est conseillé de déclarer l'encodage utf-8 dans le fichier d'en-tête(`<head>`) de la page html en utilisant la balise `<meta>`.

Voici la structure type d'un fichier `html5`.

```html
<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <title>Titre du document</title>
    </head>

    <body>
        Contenu du document, avec d'éventuels accents!!!
        et caractères étranges , de toutes les langues...
        ...ظɶ
        ...ऴ,ඛ
        ...ტ,ላ,Ꮹ,ᜨ...
    </body>

</html>
```

Il est également possible d'afficher des caractères par leur code html, ces codes sont également présents sur la page [unicode-table.com](http://unicode-table.com/fr/).

Par exemple le caractère <kbd>À</kbd> `U+00C0` peut être codé en html par `&#192;`, ou encore en notation hexadécimale: `&#xc0;`
