---
tags: ["html5", "css", "css3"]
---

<a title="Par W3C (http://www.w3.org/html/logo/) [CC-BY-3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AClass-header-css3.jpg"><img class="right" width="256" alt="Class-header-css3" src="//upload.wikimedia.org/wikipedia/commons/5/52/Class-header-css3.jpg"/></a>

> Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000.
> *[Wikipedia](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade)*{.cite-source}

Lors de la dernière séance, nous avons vu le langage de de base à la création des pages web, le `html`. Maintenant nous allons voir comment mettre en forme notre page web avec le `css`, pour qu'elle soit moins austère qu'avec les styles par défaut utilisés par les navigateurs.

L'utilisation de ces deux langages répond à un principe de *séparation du fond et de la forme* qui est utilisé depuis longtemps dans le monde de l'édition. D'abord on écrit du contenu(le fond), ensuite, on met en forme le contenu.

Le document `html` décrit le contenu du document: le *fond*, et le document `css` décrit sa *forme*.

Nous allons d'abord voir comment lier une feuille de styles à notre page `html`.

## Intégration de code css dans une page html

Il existe **trois façons** d'ajouter des règles `css` à une page.

### 1^ère^ méthode(recommandée): Utilisation d'une feuille de style externe

On écrit le code css dans un fichier avec l'extension `.css`, par exemple `style.css` et on la lie dans l'en-tête du document(le `<head>`).

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

*C'est la méthode préférée lorsque l'on a un ensemble de pages qui contiennent des styles identiques, cela permet d'alléger l'écriture du code et les requêtes vers le serveur de documents.*

### 2^e^ méthode: Utilisation d'une feuille de style interne

On intègre le code `css` au sein de balises `<style>` dans l'entête du document(le <head>).

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

*Méthode pratique lorsque l'on a des documents html d'une seule page ou avec des styles spécifiques.*

### 3^e^ méthode(à éviter): Insertion directe dans les balises html

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


*Cette méthode est peu recommandée car on mélange le fond et la forme, et aussi parce que cela rend le code `html` plus illisible qu'il ne l'est!*


## Syntaxe

Une règle `css` est constituée d'un sélecteur suivi d'un bloc de déclaration entre accolades. Chaque déclaration se termine par un point-virgule.

```css
selecteur de balises {
    attribut-css: valeur;
    attribut-css2: valeur2;
    ...
}
```
**Remarque:** *Les points-virgules sont obligatoires, mais pas l'indentation, elle est cependant conseillée pour rendre le code plus lisible.*

### Les sélecteurs

Pour pouvoir savoir, quelles balises doivent être mises en forme dans le document html, on utilise des **sélecteurs**, p.ex:

- `p` sélectionnera toutes les balises paragraphe `p`;
- `h1, h3` sélectionnera toutes les balises `h1` et `h3`;
- `section p` sélectionnera tous les paragrahes contenus dans des balises `section`.

### Le bloc de déclaration

Il s'agit des règles de style à appliquer sur les élements sélectionnés, p.ex:

```css
p {
    color: red;
    text-align: center;
}
```

Cette règle permet de colorier en rouge et de centrer tous les paragraphes du document `html`.

L'ensemble des mots-clés en `css` est listé sur l'excellent site  [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference).

### Commentaires

Les commentaires utilisent la syntaxe suivante: `/* Un commentaire */`


### Ordre d'application des règles

Ce n'est pas pour rien qu'on parle de feuilles de styles en cascade, car en fait la difficulté en css est souvent que l'on définit des règles différentes pour des tags identiques, et qu'il faut savoir qu'elle règle va s'appliquer sur notre élément.

Par ordre de priorité croissante:

- Règles par défaut du navigateur
- Feuille de style externe
- Feuille de style interne
- Style au sein d'un élément html.

## Sélecteurs plus élaborés

- Il est possible de sélectionner **plusieurs balises** à la fois pour leur appliquer une règle commune, ces balises doivent alors être séparées par des *virgules*.

```css
h1, h2, h3 {
    color: lime;
}
```

- La virgule est très importante, car si on sépare les sélecteurs par des *espaces* il s'agit d'une **sélection par descendence**, le code css suivant par exemple ne sélectionne que les paragraphes contenus dans une balise `div`([voir mdn pour plus de détails](https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_descendant)).

```css
div p {
    background-color: red;
}
```

- Pour appliquer **un même style à plusieurs éléments** on peut leur ajouter un attribut `html` `class="ma-classe"`, qui pourra être sélectionné en `css` avec le sélecteur `.ma-classe`.

- Pour appliquer **un style specifique à un unique élément** on lui ajoute un attribut `html` `id="mon-id"`, qui pourra être sélectionné en `css` avec le sélecteur `#mon-id`.

[[appli|Premiers pas en css sur le site du W3C]]
|Mettre en forme la page `html` proposée dans le tutoriel `css` du w3c disponible à l'adresse suivante:
|
|<https://www.w3.org/Style/Examples/011/firstcss.fr.html>

## Des styles plus élaborés
### Références des propriétés `css`
Cette référence CSS sur [MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference) liste toutes les propriétés standards CSS.

### Tutoriels et exemples en ligne
Le site [w3cschools](http://www.w3schools.com/css/css_examples.asp) présente des exemples éditables et dynamiques de situations courantes lors du stylage d'une page web, voir notamment les pages suivantes:

- [CSS Backgrounds](http://www.w3schools.com/css/css_background.asp) et [CSS3 Backgrounds](http://www.w3schools.com/css/css3_backgrounds.asp) pour les **arrières plans**
- [CSS Text](http://www.w3schools.com/css/css_text.asp), [CSS Fonts](http://www.w3schools.com/css/css_font.asp) et [CSS3 Fonts](http://www.w3schools.com/css/css3_fonts.asp) pour la **mise en forme du texte**
- [CSS Lists](http://www.w3schools.com/css/css_list.asp) pour les **listes** numérotées on non.
- [CSS Box Model](http://www.w3schools.com/css/css_boxmodel.asp) et [CSS3 Borders](http://www.w3schools.com/css/css3_borders.asp) pour les modèles de **boîtes**
- [CSS3 Transitions](http://www.w3schools.com/css/css3_transitions.asp) et [CSS3 Animations](http://www.w3schools.com/css/css3_animations.asp) pour des effets **dynamiques** sur vos pages.

## Déboguer son code css
### Inspecteur de styles du navigateur
Pour savoir qu'elle règle a été utilisée par le navigateur, la console web du navigateur est d'un grand secours. On peut par exemple inspecter un élément et savoir qu'elles règles `css` s'appliquent et qu'elles règles `css` ont été supplantés(elles apparaissent barrées dans l'inspecteur de styles).

Pour accéder à la console web, taper <kbd>CTRL+MAJ+K</kbd> sur firefox, pour inspecter un élément il suffit de le sélectionner et de faire un clic droit de la souris puis de taper <kbd>x</kbd>.

### Validation du code `css`

Le site du W3C propose comme pour le language html un [validateur](http://jigsaw.w3.org/css-validator/#validate_by_input+with_options) de fichier `css`.

Des analyseurs de code `css` sont disponibles sur la plupart des éditeurs de code. Par example l'extension [sytlelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) pour Visual Studio Code.
