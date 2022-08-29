---
tags: ["base 2", "encodage", "entiers relatifs", "nombres à virgule"]
---

Dans la première partie du cours, nous avons appris à représenter des entiers naturels en
représentation binaire ou hexadécimale.

Ainsi en utilisant des *mots binaires* de n bits, on peut coder $2^{n}$ nombres entiers.

Par exemple sur un octet, soit 8 bits, on peut coder $2^{n}$ valeurs soit dans le cas des entiers
naturels des nombres de *0 à 255*.

Cependant dans de nombreux programmes, il est nécessaire d'utiliser d'autres types de nombres
comme les **entiers relatifs** ou les **réels**.

## Représentation des entiers relatifs

La façon la plus simple de procéder serait de réserver le bit de poids fort pour le signe(0 pour
positif et 1 pour négatif), et de garder le rester pour la représentation de la valeur absolue du
nombre.

Avec un codage utilisant des mots de n bits, on pourrait représenter des nombres entre
$-2^{n-1}-1$ et $2^{n-1}-1$.

Par exemple, avec un codage sur 3 bits, des nombres entre -3 et 3:


| Représentation binaire | Valeur décimale |
| ---------------------- | --------------- |
| 000                    |  +0             |
| 001                    |  +1             |
| 010                    |  +2             |
| 011                    |  +3             |
| 100                    |  -0             |
| 101                    |  -1             |
| 110                    |  -2             |
| 111                    |  -3             |


> Malheureusement cette représentation possède deux inconvénients. Le premier (mineur) est que le
> nombre zéro (0) possède deux représentations. L'autre inconvénient (majeur) est que cette
> représentation impose de modifier l'algorithme d'addition ; si un des nombres est négatif,
> l'addition binaire usuelle donne un résultat incorrect.
> [Voir l'article de Wikipedia pour plus de détails](http://fr.wikipedia.org/wiki/Compl%C3%A9ment_%C3%A0_deux#Explication)

### Notation en complément à deux

Cette méthode permet de remédier aux problèmes évoqués ci-dessus.

On utilise toujours un bit de signe tout à gauche, les entiers positifs sont codés normalement,
 cependant les entiers négatifs sont comptés **à l'envers**.

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

| Représentation binaire | Valeur décimale |
| ---------------------- | --------------- |
| 000                    |  +0             |
| 001                    |  +1             |
| 010                    |  +2             |
| 011                    |  +3             |
| 100                    |  -4             |
| 101                    |  -3             |
| 110                    |  -2             |
| 111                    |  -1             |

On peut alors vérifier avec cette notation que l'algorithme d'addition utilisé pour les entiers
naturels donne des résultats corrects avec cette représentation.

## Représentation des réels

En fait plutôt que parler d'encodage des réels, on préfère parler de nombres à virgules*(floating
point en anglais)*, car il existe une infinité de réels infiniment proches les uns des autres, or
en informatique, nous serons forcément limité dans l'étendue et la proximité des nombres à virgule.

Ainsi **un calcul avec des nombres à virgule ne peut-être qu'approximatif**. Cependant plus on
augmente la taille du registre du processeur et plus nous pourrons représenter de valeurs, et plus
nos calculs gagneront en précision.

### Principe du codage

On représente un nombre à virgule  sous la forme:

$$
s\ m \cdot 2^n
$$

<p><a href="http://commons.wikimedia.org/wiki/File:IEEE754_Format_General.png#mediaviewer/File:IEEE754_Format_General.png"><img width="100%" alt="IEEE754 Format General.png" src="http://upload.wikimedia.org/wikipedia/commons/2/29/IEEE754_Format_General.png"></a><br>« <a href="http://commons.wikimedia.org/wiki/File:IEEE754_Format_General.png#mediaviewer/File:IEEE754_Format_General.png">IEEE754 Format General</a> » par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page inexistante)">GMjeanmatt</a> — <span class="int-own-work">Travail personnel</span>. Sous licence <a title="Creative Commons Attribution-Share Alike 3.0-2.5-2.0-1.0" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.</p>

Supposons un nombre flottant codé sur un octet utilisant 1 bit de signe, 3 bits pour l'exposant et
4 bits pour la mantisse: `1 101 1011`

- $s$ est le signe représenté par le bit de poids fort:
    - $s=0$: signe $+$
    - $s=1$: signe $-$

Notre codage représente donc un nombre négatif.

- $n$ est l'exposant représenté par un *entier relatif décalé* et non en complément à deux, afin
  de faciliter la comparaison des exposants. Ce décalage est de $2^{e-1} - 1$ (e représente le
  nombre de bits de l'exposant)

L'exposant a pour valeur `101` codé sur 3 bits, il doit être décalé de $2^{2} - 1 = 3$. Ainsi,
puisque $101_2 = 5_{10}$, l'exposant `101` correspond à un exposant de 5-3=**2**.

- $m$ est la mantisse qui est un nombre binaire à virgule compris entre 1 inclus et 2 exclus. Le seul chiffre avant la virgule étant toujours 1, il n'est pas représenté(on le dit *implicite*), et le codage binaire de la mantisse représente donc uniquement les chiffres après la virgule qui sont en base 2 des demis, des quarts, des huitièmes...

dans notre exemple, la mantisse est: `1011`, elle représentera le nombre:

$$
m = 1 + \frac{1}{2} + \frac{0}{2^2} + \frac{1}{2^3}+ \frac{1}{2^4} =  1,6875
$$

Le code `1 101 1011` sur un octet utilisant 1 bit de signe, 3 bits pour l'exposant et 4 bits pour
la mantisse représente donc:

$$
- 1,6875 \cdot 2^{2}= -6,75
$$

### La norme IEEE 754

> L’IEEE 754 est une norme pour la représentation des nombres à virgule flottante en binaire. Elle
> est la norme la plus employée actuellement pour le calcul des nombres à virgule flottante dans
> le domaine informatique. [Source Wikipedia](http://fr.wikipedia.org/wiki/IEEE_754)

Cette norme définit notamment 2 formats pour représenter des nombres à virgule flottante:

- *simple précision* (32 bits : 1 bit de signe, 8 bits d'exposant (-126 à 127), 23 bits de mantisse, avec bit 1 implicite),

<p><a href="https://commons.wikimedia.org/wiki/File:IEEE754_simple_precision.png#/media/File:IEEE754_simple_precision.png"><img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/0/08/IEEE754_simple_precision.png" alt="Représentation simple précision flottants IEEE 754"></a><br>Par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page does not exist)">GMjeanmatt</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7318385">Lien</a></p>

- *double précision* (64 bits : 1 bit de signe, 11 bits d'exposant (-1022 à 1023), 52 bits de mantisse, avec bit 1 implicite).

<p><a href="https://commons.wikimedia.org/wiki/File:IEEE754_double_precision.png#/media/File:IEEE754_double_precision.png"><img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/5/5b/IEEE754_double_precision.png" alt="IEEE754 double precision.png"></a><br>Par <a href="//commons.wikimedia.org/w/index.php?title=User:GMjeanmatt&amp;action=edit&amp;redlink=1" class="new" title="User:GMjeanmatt (page does not exist)">GMjeanmatt</a> — <span class="int-own-work" lang="fr">Travail personnel</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=7318466">Lien</a></p>

[[appli|Réaliser la conversion en base 2 de la valeur approchée de pi: 3.14159265359]]
|- en simple précision: [ici](http://www.binaryconvert.com/result_float.html?decimal=051046049052049053057050054053051053057)
|- en double précision: [ici](http://www.binaryconvert.com/result_double.html?decimal=051046049052049053057050054053051053057)
|
|Comparer la précision obtenue dans les deux cas.