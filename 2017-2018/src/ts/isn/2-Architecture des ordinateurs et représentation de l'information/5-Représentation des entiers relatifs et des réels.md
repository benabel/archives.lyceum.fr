---
tags: ["base 2", "encodage", "entiers relatifs", "nombres à virgule"]
---

Dans la première partie du cours, nous avons appris à représenter des entiers naturels en représentation binaire ou hexadécimale.

Ainsi en utilisant des mots de n bits, on peut coder $2^{n}$ nombres entiers.

Cependant dans de nombreux programmes, il est nécessaire d'utiliser d'autres types de nombres comme les **entiers relatifs** ou les **réels**.

# Représentation des entiers relatifs

La façon la plus simple de proceder serait de réserver le bit de poids fort pour le signe(0 pour positif et 1 pour négatif), et de garder le rester pour la représentation de la valeur absolue du nombre.

Avec un codage utilisant des mots de n bits, on pourrait représenter des nombres entre $-2^{n-1}-1$ et $2^{n-1}-1$.

Par exemple, avec un codage sur 3 bits, des nombres entre -3 et 3:


<table>
<colgroup>
<col />
<col />
</colgroup>
<thead>
<tr class="header">
<th>Représentation binaire</th>
<th>Valeur décimale</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>0</strong>00</p></td>
<td><p>+0</p></td>
</tr>
<tr class="even">
<td><p><strong>0</strong>01</p></td>
<td><p>+1</p></td>
</tr>
<tr class="odd">
<td><p><strong>0</strong>10</p></td>
<td><p>+2</p></td>
</tr>
<tr class="even">
<td><p><strong>0</strong>11</p></td>
<td><p>+3</p></td>
</tr>
<tr class="odd">
<td><p><strong>1</strong>00</p></td>
<td><p>-0</p></td>
</tr>
<tr class="even">
<td><p><strong>1</strong>01</p></td>
<td><p>-1</p></td>
</tr>
<tr class="odd">
<td><p><strong>1</strong>10</p></td>
<td><p>-2</p></td>
</tr>
<tr class="even">
<td><p><strong>1</strong>11</p></td>
<td><p>-3</p></td>
</tr>
</tbody>
</table>


>Malheureusement cette représentation possède deux inconvénients. Le premier (mineur) est que le nombre zéro (0) possède deux représentations. L'autre inconvénient (majeur) est que cette représentation impose de modifier l'algorithme d'addition ; si un des nombres est négatif, l'addition binaire usuelle donne un résultat incorrect. [Voir l'article de Wikipedia pour plus de détails](http://fr.wikipedia.org/wiki/Compl%C3%A9ment_%C3%A0_deux#Explication)

## Notation en complément à deux

Cette méthode permet de remédier aux problèmes évoqués ci-dessus. Les entiers positifs sont représentés comme précédemment, par contre les entiers négatifs sont comptés **à l'envers**.

L'entier négatif x est codé comme s'il s'agissait de l'entier $x + 2^{n}$ ou n est la taille du mot.

Par exemple, pour des mots de 3 bits:

- Le nombre -1 a la représentation binaire la plus grande:

$$
(-1 = 2^3 -1 = 7)_{10} = 111_2
$$

- Le nombre le plus petit que l'on peut coder est:

$$
(-4 = 2^3 - 2^2 = 4)_{10} = 100_2
$$

Avec un codage utilisant des mots de n bits, on pourrait représenter des nombres entre $-2^{n-1}$ et $2^{n-1}-1$.

Par exemple, avec un codage sur 3 bits, des nombres entre -4 et 3:

<table>
<colgroup>
<col />
<col />
</colgroup>
<thead>
<tr class="header">
<th>Représentation binaire</th>
<th>Valeur décimale</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>0</strong>00</p></td>
<td><p>+0</p></td>
</tr>
<tr class="even">
<td><p><strong>0</strong>01</p></td>
<td><p>+1</p></td>
</tr>
<tr class="odd">
<td><p><strong>0</strong>10</p></td>
<td><p>+2</p></td>
</tr>
<tr class="even">
<td><p><strong>0</strong>11</p></td>
<td><p>+3</p></td>
</tr>
<tr class="odd">
<td><p><strong>1</strong>00</p></td>
<td><p>-4</p></td>
</tr>
<tr class="even">
<td><p><strong>1</strong>01</p></td>
<td><p>-3</p></td>
</tr>
<tr class="odd">
<td><p><strong>1</strong>10</p></td>
<td><p>-2</p></td>
</tr>
<tr class="even">
<td><p><strong>1</strong>11</p></td>
<td><p>-1</p></td>
</tr>
</tbody>
</table>

On peut alors vérifier avec cette notation que l'algorithme d'addition utilisé pour les entiers naturels donne des résultats corrects avec cette réprésentation.

# Représentation des réels

En fait plutôt que parler d'encodage des réels, on préfère parler de nombres à virgules, car il existe une infinité de rééls infiniment proches les uns des autres, or en informatique, nous serons forcément limité dans l'étendue et la proximité des nombres à virgule. Ainsi un calcul avec des nombres à virgule ne peut-être qu'approximatif. Cependant plus on augmente la taille du registre du processeur et plus nous pourrons représenter de valeurs, et plus nos calculs gagneront en précision.


## La norme IEEE 754

Dans cette norme, qui est la plus utilisée à l'heure actuelle, un nombre à virgule est représenté sous la forme:

$$
s\ m \cdot 2^n
$$

<p><a href="http://commons.wikimedia.org/wiki/File:IEEE754_Format_General.png#mediaviewer/File:IEEE754_Format_General.png"><img alt="IEEE754 Format General.png" src="http://upload.wikimedia.org/wikipedia/commons/2/29/IEEE754_Format_General.png"></a><br>« <a href="http://commons.wikimedia.org/wiki/File:IEEE754_Format_General.png#mediaviewer/File:IEEE754_Format_General.png">IEEE754 Format General</a> » par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page inexistante)">GMjeanmatt</a> — <span class="int-own-work">Travail personnel</span>. Sous licence <a title="Creative Commons Attribution-Share Alike 3.0-2.5-2.0-1.0" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>


- $s$ est le signe représenté par le bit de poids fort:
    - $s=0$: signe $+$
    - $s=1$: signe $-$

- $n$ est l'exposant représenté par un *entier relatif décalé* et non en complément à deux, afin de faciliter la comparaison des exposants. Ce décalage est de $2^{e-1} - 1$ (e représente le nombre de bits de l'exposant)

Par exemple, un exposant ayant pour valeur `101` codé sur 3 bits doit être décalé de $2^{2} - 1 = 3$. Ainsi, puisque $101_2 = 5_{10}$, l'exposant `101` correspond à un exposant de 5-3=**2**.

- $m$ est la mantisse qui est un nombre binaire à virgule compris entre 1 inclus et 2 exclus. Le seul chiffre avant la virgule étant toujours 1, il n'est pas représenté(on le dit *implicite*), et le codage binaire de la mantisse représente donc uniquement les chiffres après la virgule qui sont en base 2 des demis, des quarts, des huitièmes...

Par exemple, si la mantisse est notée: `1011`, elle représentera le nombre:

$$
m = 1 + \frac{1}{2} + \frac{0}{2^2} + \frac{1}{2^3}+ \frac{1}{2^4} =  1,6875
$$

Supposons le nombre suivant codé sur un octet utilisant 1 bit de signe, 3 bits pour l'exposant et 4 bits pour la mantisse: `1 101 1011`

Ce codage représente un nombre négatif puisque le bit de signe est 1, soit le nombre:

$$
- 1,6875 \cdot 2^{2}= -6,75
$$



>L’IEEE 754 est une norme pour la représentation des nombres à virgule flottante en binaire. Elle est la norme la plus employée actuellement pour le calcul des nombres à virgule flottante dans le domaine informatique. [Source Wikipedia](http://fr.wikipedia.org/wiki/IEEE_754)


Cette norme définit notamment 2 formats pour représenter des nombres à virgule flottante :

- *simple précision* (32 bits : 1 bit de signe, 8 bits d'exposant (-126 à 127), 23 bits de mantisse, avec bit 1 implicite),
- *double précision* (64 bits : 1 bit de signe, 11 bits d'exposant (-1022 à 1023), 52 bits de mantisse, avec bit 1 implicite).

Elle définit enfin des notations pour les valeurs exceptionnelles $+\infty$,$-\infty$, et $NaN$(**N**ot **A** **N**umber):

<table>
<tbody><tr>
<th>Type</th>
<th>Signe</th>
<th>Exposant décalé</th>
<th>Mantisse</th>
</tr>
<tr>
<td>Zéros</td>
<td>0/1</td>
<td>000...000</td>
<td>000...000</td>
</tr>
<tr>
<td>Infinis</td>
<td>0/1</td>
<td>111...111</td>
<td>000...000</td>
</tr>
<tr>
<td>NaN</td>
<td>0/1</td>
<td>111...111</td>
<td>différente de 0</td>
</tr>
</tbody></table>


**Exemple:** réaliser la conversion en base 2 de la valeur approchée de pi: 3.14159265359:

- en simple précision: [ici](http://www.binaryconvert.com/result_float.html?decimal=051046049052049053057050054053051053057)

- en double précision: [ici](http://www.binaryconvert.com/result_double.html?decimal=051046049052049053057050054053051053057)

Comparer la précision obtenue dans les deux cas.
