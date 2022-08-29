---
tags: ['application client', 'javascript', 'événements']
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

<a title="Par Chris Williams [Public domain], via Wikimedia Commons"
href="http://commons.wikimedia.org/wiki/File%3AUnofficial_JavaScript_logo_2.svg"><img class="right"
width="256" alt="Unofficial `javascript` logo 2"
src="//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/256px-Unofficial_JavaScript_logo_2.svg.png"/></a>

Le `javascript` a été créé en 1995 par Brendan Eich, il est utilisé pour programmer le navigateur
côté **client**.

**Attention** à ne pas confondre le `javascript` et le `java`, ce sont des langages différents.

## Intégration de code `javascript` dans une page `html`

Le code `javascript` peut être intégré à un document `html` grâce à la balise `<script>`.

Les fichiers `javascript` utilisent l'extension `.js` que l'on importe en précisant son URL grâce
à l'attribut `src`.


```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un document minuscule</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Titre principal de mon document</h1>
    <p>
      Hey Man, je suis en train d'ajouter du code `javascript` à ma page.
    </p>
    <p>
      Il peut se passer plein de trucs <strong>cools</strong> auxquels tu ne t'attends pas.
    </p>
  </body>
</html>
```
_Remarque:_ il est très fréquent de voir le `javascript` placé juste avant la balise fermante
`<body>`. Ceci permet d'être sûr que l'ensemble de la page web ait été _parsée_(analysée) par le
navigateur avant de la modifier avec le code `javascript`.


::: {.plus titre="Intégrer le `javascript` directement dans la page `html`"}
```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un peu de javascript</title>
    <script type="text/javascript" charset="utf-8">
      // Je suis un commentaire javascript!
      // Alert crée une fenêtre d'affichage sur l'écran pour l'utilisateur
      alert('Hello world !') // L'affichage alert est un peu vieillot

      // console.log() écrit dans la console du navigateur pour le développeur
      console.log('Script Hello world exécuté.')
    </script>
  </head>
  <body>
    <h1>Titre principal de mon document</h1>
    <p>
      Regarde maman, je suis en train d'ajouter du code `javascript` à ma page.
    </p>
  </body>
</html>
```
:::

## Débogage du `javascript` 

Pour déboguer du code `javascript`,  on utilise le plus souvent **la console du navigateur**(
<kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>I</kbd>). Puis on y affiche des valeurs de variables
depuis le programme `javascript` avec la fonction `console.log()`.

![Copie d'écran de la console du navigateur web firefox](./images/debogage-js-console.png)

## Syntaxe du `javascript` 

Voici quelques bases de sa syntaxe, vous pouvez trouver un comparatif avec Python dans la page
[Comparaison des langages](../../7-langages-et-programmation/7-comparaisons-de-langages/)

- Les variables doivent être déclarées grâce au mot clé `var`.
- Tout comme en python, les **chaînes de caractères** sont entourées de **guillemets**.
- Les instructions simples sont terminées par un **point-virgule**: `;`(il n'est cependant pas
  toujours indispensable comme en `css`).
- Les **blocs d'instructions** sont entourés d'**accolades**.
- Les **commentaires** sont notés précédés de deux barres obliques: `//`.
- Les variables et fonctions sont écrites en `camelCase`(L'espace est remplacé par une majuscule).
- L'indentation des blocs d'instruction n'est pas obligatoire comme en Python, mais souhaitable.

La référence la plus complète et à jour est le site Mozilla Developper Network
[MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide).

## Interaction au sein d'une page web: les événements

Pour que la page réagisse aux actions de l'utilisateur, on ajoute des `EventHandler`*(gestionnaires
d'événements)* aux balises html qui doivent exécuter du code `javascript` en réponse aux événements.

Par exemple, pour exécuter la function `javascript` `initFunction` lorsque la balise `<body>` a fini
de se charger.

```html
<body onload="initFunction();">
```

+----------------+----------------------------------------+
| `EventHandler` |         Type d'événement géré          |
+================+========================================+
| `onclick`      | clic de la souris sur l'élément        |
+----------------+----------------------------------------+
| `ondblclick`   | double-clic de la souris sur l'élément |
+----------------+----------------------------------------+
| `onkeypress`   | appuie sur une touche du clavier       |
+----------------+----------------------------------------+
| `onkeypress`   | touche de clavier relâchée             |
+----------------+----------------------------------------+
| `onselect`     | élément sélectionné                    |
+----------------+----------------------------------------+

La liste complète des `GlobalEventHandlers` sur [MDN](https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers)

## `HTML → JS`: Comment récupérer une entrée utilisateur?

La balise html `<input>` permet de récupérer les entrées utilisateur, il en existe de divers types:

- `<input type="text" ...`: Par défaut: entrée de texte.
- `<input type="button" ...`: Un bouton.
- `<input type="checkbox" ...`: Case à cocher.
- `<input type="radio" ...`: un bouton radio qui permet de sélectionner une seule valeur parmi un
  groupe de différentes valeurs.

Voici un exemple complet qui affiche la valeur tapée par l'utilisateur lorsqu'on clique sur un bouton.

[Événements en javascript](embedded-codesandbox://evenements-javascript)


## `JS → HTML`: Comment afficher du texte directement sur la page?

### Exécution différée

Avant de modifier la page, il convient d'attendre que la page `html` soit chargée avant d'exécuter
le code javascript. De nombreux développeurs placent le code `javascript` à la fin du corps du
document avant la balise fermante `</body>`.

Cependant il est aussi possible et recommandé de lancer le code `javascript` qu'après le chargement
de la fenêtre en plaçant le code dans une fonction qui s'exécute après le chargement de la page:

```js
window.onload = function() {
  // code javascript à exécuter
  // après le chargement de la page
  console.log('La page est chargée, je peux maintenant la modifier')
}
```

### Accéder à un élément `html`

Pour accéder à un élément `html` à partir du `javascript`,  on utilise les fonctions suivantes:

- `document.getElementById()` permet de sélectionner un élément `html` à partir de son `id`.
- `document.querySelector()` un sélecteur plus générique qui sélectionne les éléments à la manière
  des sélecteurs css.

**Exemple:**

Vous avez un document `html` qui contient les éléments suivants:

```html
<h1 class="grand-titre">Titre principal de mon document</h1>
<p id="premier-paragraphe">
  Regarde maman, je suis en train d'ajouter du code `javascript` à ma page.
</p>
<h2 id="sous-titre">Sous-titre de mon document</h2>
```

On peut alors en `javascript` modifier leurs contenus grâce à la propriété `innerHTML`,

```js
document.querySelector('#premier-paragraphe').innerHTML = "J'aimais pas l'ancien texte, je l'ai changé."
```

**Attention:** ne pas oublier de placer ce code dans la fonction `window.onload = function() { }`.

### Modifier les styles

Vous pouvez en fait modifier toutes les propriétés des éléments à partir de javascript. Voici par
exemple comment modifier les styles grâce à la propriété `style`.

```js
document.querySelector('h1.grand-titre').style.color = '#FFAA85'
document.querySelector('#grand-titre').style.color = '#AA00AA'
```

## Un exemple complet

Voici un exemple complet qui commence par récupérer une entrée utilisateur(`HTML → JS`), puis qui
modifie la page en focntion de sa réponse(`JS → HTML`).

[Exemple complet de gestion des événements en javascript](embedded-codesandbox://evenements-javascript-complet)


## Exercices

### Quiz

Si ce n'est pas déjà fait, **connectez-vous** sur le site d'OpenClassroom pour réaliser le quiz
sur le `javascript` disponible à l'adresse suivante: <https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/exercises/489>

<!-- 
### Activité : Créez un mini-jeu de devinette

[Consignes](http://exercices.openclassrooms.com/assessment/357?courseIdentifier=apprenez-a-coder-avec-javascript)

> Je vous propose de mobiliser vos nouvelles connaissances pour réaliser un mini-jeu de devinette.
> L’objectif de cette activité est d’écrire un programme `javascript` qui fait deviner un nombre
> entre 1 et 100.</br>
> Pour simplifier les choses, le programme initial qui vous est fourni permet de générer
> aléatoirement un nombre entre 1 et 100. Vous devez compléter ce programme pour que le joueur
> devine ce nombre en faisant des propositions successives. On considère que la saisie du joueur
> est toujours un nombre valide. À chaque tentative du joueur, le programme lui dit si le nombre
> qu’il a saisi est trop petit ou trop grand, jusqu’à ce que la solution soit devinée.</br>
> Pour obtenir le maximum de points possibles, limitez le nombre de tentatives du joueur. Au-delà
> de 6 essais infructueux, la partie est perdue !</br>
> Testez bien votre programme dans tous les cas possibles. Pensez au nommage des variables et à
> l’indentation de votre programme : ils font partie des critères d’évaluation.

## Pour aller plus loin

Le `javascript` étant un langage très à la mode, les tutoriels, cours et vidéos ne manquent pas. N'hésitez pas à consulter:

- le cours d'OpenClassroom [Apprenez à coder avec JavaScript](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript)
- [codeacademy](https://www.codecademy.com/fr/learn/learn-javascript)

, ou encore les sites de référence comme:

- [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [w3schools](http://www.w3schools.com/js/) -->
