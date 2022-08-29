---
"tags": ["python","algorithme","programme"]
---
<!-- converted from notebook
{% notebook 2016-2017/1-2-connaissances.ipynb %} -->

Voici par exemple, la syntaxe utilisée pour les opérations de base en Python:

- addition: `+`
- soustraction: `-`
- multiplication: `*`
- division: `/`
- division entière: `//`
- modulo: `%`
- puissance: `**`

Ces opérations sont implémentées directement dans Python, par contre la racine carrée ne l'est pas, si vous souhaitez calculer une racine carrée, il faut utiliser la puissance un demi:


```python
16**0.5
```




    4.0



ou importer le module `math` et utiliser la fonction `sqrt` de ce module:


```python
import math
math.sqrt(16)
```




    4.0



Le module `math` contient de nombreuses autres fonctions utiles:

- le cosinus: `math.cos()`
- le logarithme: `math.log()`
- ...


```python
# On peut lister ces fonctions en utiisant la fonction dir de python
dir(math)
```




    ['__doc__',
     '__file__',
     '__loader__',
     '__name__',
     '__package__',
     '__spec__',
     'acos',
     'acosh',
     'asin',
     'asinh',
     'atan',
     'atan2',
     'atanh',
     'ceil',
     'copysign',
     'cos',
     'cosh',
     'degrees',
     'e',
     'erf',
     'erfc',
     'exp',
     'expm1',
     'fabs',
     'factorial',
     'floor',
     'fmod',
     'frexp',
     'fsum',
     'gamma',
     'gcd',
     'hypot',
     'inf',
     'isclose',
     'isfinite',
     'isinf',
     'isnan',
     'ldexp',
     'lgamma',
     'log',
     'log10',
     'log1p',
     'log2',
     'modf',
     'nan',
     'pi',
     'pow',
     'radians',
     'sin',
     'sinh',
     'sqrt',
     'tan',
     'tanh',
     'trunc']



# Quelques petits exercices pratiques avec jupyter notebook

## Utiliser un notebook comme une calculatrice

### Priorité des opérateurs.

Réaliser les calculs suivants:

- `6+4*10`
- `(6+4)*10 `
- `2**8`
- `2**8+1`
- `11 / 5`
- `11 // 5`
- `11 % 2`
- `11 % 5`

Expérimenter divers calculs pour donner l'ordre de priorité des opérations de base en python.

### Racine d'un trinôme

calculer la racine positive de l'équation: `34*x^2 + 68*x - 510`

Rappel: pour le trinôme $a*x^2 + b*x + c$, la racine positive est $x_2 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}$

### Formule trigonométrique

- `math.cos(3.4)**2 + math.sin(3.4)**2`

## Mettre en forme du texte

Mais c'est pas tout, le notebook [jupyter](http://jupyter.org/) permettent de créer du texte enrichi en utilisant la syntaxe [markdown](https://fr.wikipedia.org/wiki/Markdown).

Pour cela, il suffit de remplacer le type de cellule `Code` par `Markdown`, et vous pouvez alors mettre en forme votre texte simplement.

	**quelques mots en gras**
	*ici c'est en italique*
	Ceci est du `code` informatique
	...

Voir le lien vers Wikipedia pour plus d'informations.

Vous pouvez même écrire des formules mathématiques avec la syntaxe Latex:

	$\frac{1}{2}mv^{2}$

Donnera: $\frac{1}{2}mv^{2}$

Voir le [wikilivre](https://fr.wikibooks.org/wiki/LaTeX/Math%C3%A9matiques#Les_fonctions_math.C3.A9matiques) sur Latex pour plus d'informations.

Essayer d'écrire la formule de la longueur d'onde en fonction de la fréquence avec la syntaxe Latex.



<!--

# Correction des exercices pratiques avec jupyter notebook

Le but de ces exercices était de s'approprier l'environnement de travail des notebook [jupyter](http://jupyter.org/) en apprenant:

1. à effectuer des calculs numériques en python
2. à utiliser la syntaxe `markdown` pour mettre en forme ses réponses et rédiger du texte.

## Régles de priorités des opérations


```python
6+4*10
```




    46




```python
(6+4)*10
```




    100



On remarque que les règles de priorité des calculs sont les mes qu'en mathématique, la multiplication est prioritaire sur l'addition.

*Règles PEMDAS*

> Sous Python, les règles de priorité sont les mêmes que celles qui vous ont été enseignées au cours de mathématiques. Vous pouvez les mémoriser aisément à l'aide d'un « truc » mnémotechnique, l'acronyme **PEMDAS** :

>    P pour parenthèses.
>    E pour exposants.
>    M et D pour multiplication et division, qui ont la même priorité. Elles sont évaluées avant l'addition A et la soustraction S, lesquelles sont donc effectuées en dernier lieu.
> [Source developpez.com](http://python.developpez.com/cours/TutoSwinnen/?page=Chapitre2#L2.9)



```python
23.0**5
```




    6436343.0



## Calcul de la racine carrée du trinôme

Calculer la racine positive de l'équation: $34*x^2 + 68*x - 510$

Rappel: pour $ax^2 + bx + c$, la racine positive est:
$$
x_2 = \frac{-b +\sqrt{b^2 - 4ac}}{2a}
$$

ici:

a=34
b=68
c=-510


```python
# On importe le module math pour calculer la racine carrée
import math
(-68+math.sqrt(68**2-4*34*-510))/(2*34)
```




    3.0



## Formule trigonomètrique

Nous allons vérifier que: $\cos^2 x +\sin^2 x = 1$


```python
# le module math a déjà été importé plus haut il n'est pas nécessaire de le réimporter
math.cos(3.4)**2 + math.sin(3.4)**2
```




    1.0

## Formule de la longueur d'onde

```tex
$$\lambda=\frac{v}{f}$$
```

$$
\lambda=\frac{v}{f}
$$
-->
