---
tags: ['html5', 'svg']
---

Comme nous l'avons vu [précédemment](./1-Numerisation-des-images), il existe deux grands types de formats d'images:

- les images matricielles,
- et les images vectorielles.

Ces deux types d'images peuvent être intégrées dans une page web grâce à la balise `<img>`, mais elles peuvent être aussi codées directement dans la page grâce aux balises `<svg>` et `<canvas>`.

Nous nous intéressons dans un premier temps au dessin vectoriel en `svg`.

<a title="W3C [CC-BY-2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ASVG_Logo.svg"><img class="right" width="256" alt="SVG Logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/256px-SVG_Logo.svg.png"/></a>

## Le format `svg`

Le format `svg` est un format d'image vectoriel proposé par le [W3C](https://www.w3.org/).

Dans ce format, les dessins sont décrits par un ensemble formes géométriques simples (arcs de cercle ou d'ellipse, segments de droite, courbes de Bézier...). Il s'agit donc bien d'un format vectoriel puisqu'il code des formes et ne donne pas l'état de chacun des pixels de l'image.

_Bien entendu, lorsque l'image est rendue sur un écran, l'encodage en pixel est réalisé avant l'affichage par le visionneur d'images ou le navigateur._

## Syntaxe

Le fichier svg est un fichier `xml` descriptif qui indique les formes présentes dans l'image(`rect` pour rectangle, `circle` pour cercle,...)

**Exemple:**

Créer un fichier texte appelé `image.svg` avec le contenu suivant.

```svg
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>

```

Lorsque vous ouvrez ce fichier avec une visionneuse d'images, vous devriez obtenir l'image suivante:

<div style='background-color: lightgray;'>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
</div>

Essayez modifier certains des paramètres du fichier svg pour vous familiariser
avec sa syntaxe, vous pourrez parfaire votre connaissance en utilisant cette
page du [Tutoriel sur MDN](https://developer.mozilla.org/fr/docs/Web/SVG/Tutoriel/Formes_de_base)

Vous pouvez déjà remarquer que le système de coordonnée est défini avec **un axe des ordonnées (y) orienté vers le bas**.

![système d'axes d'une image numérique](./images/systeme-de-coordonnees-dune-image-numerique.png)

## Intégration au sein d'une page `html`

Il peut être intégré à des pages web soit:

1. En appelant un fichier `svg` externe grâce à la balise `<img>`

```html
<img src="image.svg" />
```

2. Soit en intégrant directement le code `svg` dans le code `html` de la page grâce à la baise `<svg>`

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Un dessin vectoriel en svg</h1>

    <svg width="200" height="200" style="background-color: lightgray;">
      <circle
        cx="50%"
        cy="50%"
        r="40%"
        stroke="green"
        stroke-width="3%"
        fill="yellow"
      />
    </svg>
  </body>
</html>
```

**RENDU**

<div class="center">
<svg width="200" height="200" style="background-color: lightgray;">
<circle cx="50%" cy="50%" r="40%" stroke="green" stroke-width="3%" fill="yellow" />
</svg>
</div>

## Création d'un `svg` dynamique

Lorsque l'on intégre le svg au sein de la page `html`, il est possible d'accéder
aux éléments du dessin svg comme on accède à n'importe quelle balise d'une page
`html`.

Cet accès peut être fait soit par le `css`, soit par le `js` comme le montre l'exemple suivant.

[Un exemple de svg dynamique](embedded-codesandbox://svg-dynamique)

## Créer une animation du dessin en javascript

Pou animer le dessin, nous allons utiliser la méthode `window.requestAnimationFrame()`, cette
méthode permet d'éxécuter une fonction à chaque affichage de la fenêtre du navigateur(soit environ
60 images/seconde).

On crée ainsi une fonction `anime()` qui s'appelle elle-même à chaque rafraîchissement de l'affichage.

```js
// Création de la fonction
function anime() {
  requestAnimationFrame(anime)
  // Commandes de dessin
}

// Appel de la fonction pour lancer l'animation
anime()
```

Ensuite pour que l'affichage soit différent à chaque rafraîchissement il faut
que les commandes dessin utilisent des variables `javascript`.

Voici un exemple qui va déplacer le cercle horizontalement.

```html
<!DOCTYPE html>
<html>
  <script>
    function anime() {
      requestAnimationFrame(anime)

      // sélectionne la balise circle et la stocke dans la variable cercle
      var cercle = document.querySelector('circle')

      // stocke l'abscisse du cercle dans la variable posX
      var posX = cercle.getAttribute('cx')

      // augmente l'abscisse de 1 si on est pas sortie de l'image
      if (posX < 300) {
        posX = Number(posX) + 1
      }
      // sinon on revient au début de l'image
      else {
        posX = -100
      }

      // déplace le cercle à la position souhaitée
      cercle.setAttribute('cx', posX)
    }

    // Je lance l'animation après chargement de la page
    window.onload = function() {
      anime()
    }
  </script>

  <body>
    <h1>Un dessin vectoriel en svg</h1>

    <svg width="200" height="200" style="background-color: lightgray;">
      <circle
        cx="100"
        cy="100"
        r="10%"
        stroke="green"
        stroke-width="3%"
        fill="yellow"
      />
    </svg>
  </body>
</html>
```

[Une animation svg grâce à javascript](embedded-codesandbox://svg-animation)