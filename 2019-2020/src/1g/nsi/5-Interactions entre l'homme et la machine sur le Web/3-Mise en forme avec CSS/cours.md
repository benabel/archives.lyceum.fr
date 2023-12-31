---
tags: ["css", "sélecteurs css", "règles css"]
---

::: programme
+----------------------------+------------------------------------------+-------------------------------------------+
|          Contenus          |           Capacités attendues            |               Commentaires                |
+============================+==========================================+===========================================+
| Modalités de l'interaction | Identifier les différents                | Il s’agit d’examiner le code HTML         |
| entre l'homme et la        | composants graphiques                    | d’une page comprenant des                 |
| machine                    | permettant d'interagir avec une          | composants graphiques et de               |
|                            | application Web                          | distinguer ce qui relève de la            |
|                            |                                          | description des composants                |
|                            |                                          | graphiques en HTML de leur                |
|                            |                                          | comportement (réaction aux                |
|                            |                                          | événements) programmé par                 |
|                            |                                          | exemple en JavaScript.                    |
| Événements                 | Identifier les événements que            |                                           |
|                            | les fonctions associées aux              |                                           |
|                            | différents composants                    |                                           |
|                            | graphiques sont capables de              |                                           |
|                            | traiter                                  |                                           |
+----------------------------+------------------------------------------+-------------------------------------------+
:::
Le W3C a défini deux langages afin de bien séparer *le fond et la forme*.

Le `html` décrit le contenu du document: le *fond*, et le `css` décrit sa *forme*.

<a title="Par W3C (http://www.w3.org/html/logo/) [CC-BY-3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AClass-header-css3.jpg"><img class="right" width="256" alt="Class-header-css3" src="//upload.wikimedia.org/wikipedia/commons/5/52/Class-header-css3.jpg"/></a>

Le  `css` permet de mettre en forme notre page web pour personnaliser son aspect.

Nous allons d'abord voir comment lier une feuille de styles à notre page `html`.

## Intégration de code `css` dans une page `html`

Il existe **diverses façons** d'appliquer du code `css` à une page, la méthode recommandée est
d'écrire le code css dans un fichier avec l'extension `.css`, par exemple `style.css` et le lier
dans l'en-tête du document(le `<head>`).

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

*C'est la méthode préférée lorsque l'on a un ensemble de pages qui contiennent des styles
identiques, cela permet d'alléger l'écriture du code et les requêtes vers le serveur de documents.*

::: {.plus titre=" autres méthodes"}
1. Utilisation d'une feuille de style interne

On intègre le code `css` au sein de balises `<style>` dans l'entête du document(le `<head>`).

```html
<head>
    <style>
        body {
              background-color: linen;
             }
        h1 {
            color: maroon;
            margin-left: 40px;
            }
    </style>
</head>
```

*Méthode pratique lorsque l'on a des documents `html` d'une seule page ou avec des styles spécifiques.*

2. Insertion directe dans les balises `html`

On utilise alors l'attribut style au sein de la balise ouvrante de l'élément à styler.

```html
<p style="color: red; font-weight: bold;">
    Maintenant mon texte est écrit en rouge et en gras.
</p>
```

**RENDU**
<p style="color: red; font-weight: bold;">
    Maintenant mon texte est écrit en rouge et en gras.
</p>
:::

## Syntaxe

Une règle `css` est constituée d'un sélecteur suivi d'un bloc de déclaration entre accolades. Chaque déclaration se termine par un point-virgule.

```css
selecteur de balises {
    attribut-css: valeur;
    attribut-css2: valeur2;
    ...
}
```
**Remarque:** *Les points-virgules sont obligatoires, mais pas l'indentation. Cette dernière est
cependant conseillée pour rendre le code plus lisible.*

::: example
Un code css qui permet d'écrire tous les éléments `<strong>` en rouge et soulignés. 
```css
strong {
  color: red;
  text-decoration: underline;
}```
:::


## Les sélecteurs

+---------------------+-------------------------------------------------------------------------------+
|      sélecteur      |                                Éléments visés                                 |
+=====================+===============================================================================+
| `p {...}`           | Tous les éléments avec la balise `<b>`                                        |
+---------------------+-------------------------------------------------------------------------------+
| `p, li{...}`        | Tous les éléments `<p>` **et** les éléments `<p>`                             |
+---------------------+-------------------------------------------------------------------------------+
| `div p{...}`        | Tous les éléments `<p>` **contenus dans**(*descendants d'*)une balise `<div>` |
+---------------------+-------------------------------------------------------------------------------+
| `.centre {...}`     | *Tous* les éléments ayant un attribut `class="centre"`                        |
+---------------------+-------------------------------------------------------------------------------+
| `#formulaire {...}` | *L'élément* ayant un attribut `id="formulaire"`                               |
+---------------------+-------------------------------------------------------------------------------+
| `p.centre {...}`    | *Tous* les éléments `<p>` ayant un attribut `class="centre"`                  |
+---------------------+-------------------------------------------------------------------------------+


## Les propriétés

+--------------------------+---------------------------------------------------------+
|        propriété         |                      Mise en forme                      |
+==========================+=========================================================+
| `color: ...;`            | Couleur de l'élément.                                   |
+--------------------------+---------------------------------------------------------+
| `background-color: ...;` | Couleur de l'arrière-plan de l'élément.                 |
+--------------------------+---------------------------------------------------------+
| `font-size: ...;`        | Taille de la police                                     |
+--------------------------+---------------------------------------------------------+
| `font-weight: ...;`      | Graisse de la police(plus ou moins gras)                |
+--------------------------+---------------------------------------------------------+
| `margin: ...;`           | Espacement par rapport aux voisins                      |
+--------------------------+---------------------------------------------------------+
| `padding: ...;`          | Espacement par rapport aux bords de sa boite englobante |
+--------------------------+---------------------------------------------------------+


L'ensemble des propriétés en `css` est listé sur l'excellent site
[MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference).

## Positionnement en `css`

### `display: inline;` et `display:block;`

Il existe deux propriétés principales de positionnement en `css`:

- `display: block`: les éléments se placent les uns au dessus des autres et occupent toute la
  largeur disponible. C'est la propriété par défaut appliquée sur les balises `<heading>` ou `<p>`.

::: example
```html
<h1 style="background-color:yellow;">Titre de niveau 1</h1>
<p style="background-color:lime;"> Un paragraphe avec un fond vert clair pour voir l'espace qu'il occupe à l'écran.</p>
```

**RENDU**
<h1 style="background-color:yellow;">Titre de niveau 1</h1>
<p style="background-color:lime;"> Un paragraphe avec un fond vert clair pour voir l'espace qu'il occupe à l'écran.</p>
:::

- `display: inline`: les éléments se placent les uns à côté des autres, et occupent exactement la
  place dont ils ont besoin. C'est la propriété appliquée par défaut sur les balises `<strong>` ou
  `<span>`.

::: example
```html
<p style="background-color:lime;"> Un paragraphe avec un fond vert clair et des éléments inline <strong>strong</strong> et  <span style="background-color=ligthblue;">span</span> pour voir le positionnement à l'écran.</p>
```

**RENDU**
<p style="background-color:lime;"> Un paragraphe avec un fond vert clair et des éléments inline <strong>strong</strong> et  <span style="background-color:lightblue;">span</span> pour voir leurs positionnement à l'écran.</p>
:::

### Des positionnements plus évolués

Lorsqu'on laisse les éléments se placer naturellement à l'écran *(de haut en bas, ou de droite à
gauche)*, on dit que les éléments sont **positionnés dans le flux**. Si l'on souhaite les
positionner ailleurs, c'est-à-dire les sortir du flux, on utilise principalement les propriétés
`css`:

- [`display`](https://developer.mozilla.org/fr/docs/Web/CSS/display): avec notamment les valeurs
  [`flex`](http://fr.learnlayout.com/flexbox.html) pour le positionnement 1D et `grid` pour le
  positionnement 2D.
- [`position`](https://developer.mozilla.org/fr/docs/Web/CSS/position): avec les valeurs
  `relative`, `absolute` ou `fixed`.
- [`float`](https://developer.mozilla.org/fr/docs/Web/CSS/float) avec les valeurs `left` ou
  `right`.


## En plus

- Les commentaires utilisent la syntaxe suivante: `/* Un commentaire */`
- Les attributs `id` et les `class` sont souvent ajoutés au `html` pour pouvoir les sélectionner
  aisément en `css`. Attention cependant, plusieurs éléments peuvent avoir la même `class`e, mais
  un `id` est unique.
- Inspecteur de styles du navigateur: pour inspecter un élément il suffit de le sélectionner et de
  faire un clic droit de la souris puis de sélectionner `Inspecter l'élément`.
