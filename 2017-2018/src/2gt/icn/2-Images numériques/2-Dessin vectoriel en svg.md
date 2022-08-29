---
tags: ["image vectorielle", "svg"]
---


Comme nous l'avons vu [précédemment](./1-Presentation), il existe deux grands types de formats d'images:

- les images matricielles,
- et les images vectorielles.

Ces deux types d'images peuvent être intégrées dans une page web grâce à la balise `<img>`, mais elles peuvent être aussi codées directement dans la page grâce aux balises `<svg>` et `<canvas>`.


Nous nous intéressons en seconde uniquement au dessin vectoriel en `svg`.

# Le format `svg`

<a title="W3C [CC-BY-2.5 (http://creativecommons.org/licenses/by/2.5)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ASVG_Logo.svg"><img width="256" alt="SVG Logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/256px-SVG_Logo.svg.png"/></a>

Le format svg est un format d'image vectoriel proposé par le [W3C](https://www.w3.org/).

Dans ce format, les dessins sont décrits par un ensemble formes géométriques simples (arcs de cercle ou d'ellipse, segments de droite, courbes de Bézier...). Il s'agit donc bien d'un format vectoriel puisqu'il code des formes et ne donne pas l'état de chacun des pixels de l'image.

*Bien entendu, lorsque l'image est rendue sur un écran, l'encodage en pixel est réalisé avant l'affichage par le visionneur d'images ou le navigateur.*

# Syntaxe

Le fichier svg est un fichier `xml` descriptif qui indique les formes présentes dans l'image(`rect` pour rectangle, `circle` pour cercle,...)

**Exemple:**

Créer un fichier texte appelé `dessin.svg` avec le contenu suivant.

```
<?xml version="1.0" standalone="no"?>
<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <!-- Un beau smiley pour commencer -->
  <circle cx="250" cy="250" r="200" stroke="green" stroke-width="7" fill="yellow"/>
  <circle cx="150" cy="200" r="20" fill="black"/>
  <circle cx="350" cy="200" r="20" fill="black"/>
  <!-- Pour la bouche c'est plus compliqué-->
  <ellipse cx="250" cy="350" rx="100" ry="25"/>
</svg>
```

Lorsque vous ouvrez ce fichier avec une visionneuse d'images ou le navigateur, vous devriez obtenir l'image suivante:

<svg width="500" height="500" style='background-color: lightgray;' version="1.1" xmlns="http://www.w3.org/2000/svg">
  <!-- Un beau smiley pour commencer -->
  <circle cx="250" cy="250" r="200" stroke="green" stroke-width="7" fill="yellow"/>
  <circle cx="150" cy="200" r="20" fill="black"/>
  <circle cx="350" cy="200" r="20" fill="black"/>
  <!-- Pour la bouche c'est plus compliqué-->
  <ellipse cx="250" cy="350" rx="100" ry="25"/>
</svg>

Essayez modifier certains des paramètres du fichier svg pour vous familiariser
avec sa syntaxe, vous pourrez parfaire votre connaissance en utilisant cette
page du [Tutoriel sur MDN](https://developer.mozilla.org/fr/docs/Web/SVG/Tutoriel/Formes_de_base)


# Intégration au sein d'une page `html`

Il peut être intégré à des pages web soit:

- En appelant un fichier `svg` externe grâce à la balise `<img>`

```
<img src="dessin.svg">
```



- Ou en intégrant directement le code `svg` dans le code `html` de la page grâce à la baise `<svg>`

```
<!doctype html>
<html>

  <body>

    <h1>Un dessin vectoriel en svg</h1>

    <svg width="200" height="200" style="background-color: lightgray;">
      <circle cx="50%" cy="50%" r="40%" stroke="green" stroke-width="3%" fill="yellow" />
    </svg>

  </body>

</html>

```

**RENDU:**

<svg width="200" height="200" style="background-color: lightgray;">
<circle cx="50%" cy="50%" r="40%" stroke="green" stroke-width="3%" fill="yellow" />
</svg>

# Quelques exemples de formes

Cet exemple est extrait du tutoriel sur le svg sur [MDN](https://developer.mozilla.org/fr/docs/Web/SVG/Tutoriel).

```
<?xml version="1.0" standalone="no"?>
<svg width="110" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

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

**RENDU**

<svg width="110" height="250" style="background-color: lightgray;" class="center">
<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
<line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145" stroke="orange" fill="transparent" stroke-width="5"/>
<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="green" fill="transparent" stroke-width="5"/>
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>


# Où trouver des sources ?

Le svg est trè largement traité depuis qu'il est supporté par tous les navigateurs modernes, je vous conseille deux sources:

- un cours sur [openclassrooms](https://openclassrooms.com/courses/le-svg?status=published)
- le tutoriel sur le svg sur [MDN](https://developer.mozilla.org/fr/docs/Web/SVG/Tutoriel)
