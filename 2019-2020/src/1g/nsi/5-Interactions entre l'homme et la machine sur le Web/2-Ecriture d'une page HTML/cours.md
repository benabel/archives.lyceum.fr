---
tags: ["html", "balises", "attributs"]
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

<a title="W3C [CC-BY-3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AHTML5_logo_and_wordmark.svg"><img class="right" width="256" alt="HTML5 logo and wordmark" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/256px-HTML5_logo_and_wordmark.svg.png"/></a>

C'est un langage qui utilise des balises entre chevrons(`<balise>`) pour structurer les pages web
et leur donner un sens.

Une page `html` commence toujours par indiquer le `doctype`. Depuis html5 c'est très simple:

```html
<!doctype html>
```

_C'est quand même mieux que son ancêtre en html4:_

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

Le document est séparé en deux grandes parties:

- le `head`: qui contient des informations utiles au navigateur et aux robots qui consultent votre
  page.
- le `body`: qui contient les informations qui seront effectivement affichées à l’écran.

## Structure modèle

Voici une structure qui peut vous servir quand vous commencez une nouvelle page web.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un document minuscule</title>
  </head>
  <body>
    <h1>Titre principal de mon document</h1>
    <!-- Ceci est un commentaire -->
    <p>
      Regarde maman, je suis en train de coder en
      <abbr title="Hyper Text Markup Language" lang="en">HTML</abbr> !
    </p>
  </body>
</html>
```

## Les principales balises

Le langage `html` utilise des balises pour indiquer le sens sémantique des éléments d'une page. Ces
balises ou tags permettent de construire une hiérarchie au sein du document appelée DOM(Document
Object Model).

Toutes les balises sont référencées sur le site
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), en voici quelques-unes.


+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
|          balise           |                   rôle                    |                                exemple                                 |
+===========================+===========================================+========================================================================+
| `<h1>`, `<h2>`, ...`<h6>` | Titres et sous-titres                     | `<h1>Titre principal de mon document</h1>`                             |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<p>`                     | Paragraphe                                | `<p>Comme je descendais des Fleuves impassibles.</p>`                  |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<strong>`                | texte important(en gras par défaut)       | `<p>Comme je <strong>descendais</strong> des Fleuves impassibles.</p>` |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<em>`                    | texte en emphase(en italiques par défaut) | `<p>Comme je <em>descendais</em> des Fleuves impassibles.</p>`         |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<a href="dest">`         | Lien vers la page d'URL dest              | `<a href="wikipedia.fr">Se rendre sur Wikipedia</a>`                   |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<img src="image.png">`   | Affichage de l'image d'URL image.png      | `<img src="photo.jpg" alt="Photo de mon chat"/>`                       |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+
| `<ul>`                    | liste à puce                              | ```html                                                                |
|                           |                                           | <ul>                                                                   |
|                           |                                           | <li>1er élément de la liste</li>                                       |
|                           |                                           | <li>2e élément de la liste</li>                                        |
|                           |                                           | <li>...</li>                                                           |
| `<li>`                    | élément d'une liste                       | </ul>                                                                  |
|                           |                                           | ```                                                                    |
+---------------------------+-------------------------------------------+------------------------------------------------------------------------+


::: {.plus titre=" balises orphelines"}
Certaines balises sont _orphelines_, c'est à dire qu'elles ne présentent pas de balises fermantes.
Par exemple la balise d'image `<img />`.
```
<img src="logo.png" alt="Logo du site" />
```
:::

::: {.plus titre=" attributs d'une balise"}
Les éléments `src` et `alt` d'une balise image ou encore `href` d'un lien sont les _attributs_ de balises.
Ils ne s'affichent pas mais apportent des informations supplémentaires au navigateur.
:::

::: prop
Seul le texte écrit entre les balises ouvrante et fermantes s'affiche à l'écran.
:::

## Règles d'écriture

> Les balises ouvrantes et fermantes doivent toujours être correctement imbriquées, c'est à dire
> que les balises fermantes doivent êtres écrites dans l'ordre inverse des balises d'ouverture. Une
> bonne imbrication des balises est une des règles à respecter afin d'avoir un code valide. [Source
> MDN](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Introduction#Les_balises)

Voici un exemple de code valide :

```html
<em>Ceci est <strong>très</strong> important</em>.
```

Voici un exemple de code non-valide :

```html
<em>Ceci est <strong>très</em> important</strong>.
```

## Quelques petits plus

- Les commentaires sont écrits `<!-- Ceci est un commentaire -->`
- On écrit en général les balises en minuscules.
- L'indentation n'est pas obligatoire, mais elle rend le fichier plus lisible.
- Les balises `<div>`, `<header>`, `<article>`, `<footer>` ont été créé dans la version 5 de `html
  afin de créer des blocs spéifiques dans la page.
