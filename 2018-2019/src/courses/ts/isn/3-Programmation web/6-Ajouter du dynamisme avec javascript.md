---
tags: ['html5', 'javascript', 'page dynamique']
---

<a title="Par Chris Williams [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AUnofficial_JavaScript_logo_2.svg"><img class="right" width="256" alt="Unofficial JavaScript logo 2" src="//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/256px-Unofficial_JavaScript_logo_2.svg.png"/></a>

> JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. >Le langage a été créé en 1995 par Brendan Eich (Brendan Eich étant membre du conseil d'administration de la fondation Mozilla à cette époque) pour le compte de Netscape Communications Corporation. [Source Wikipedia](http://fr.wikipedia.org/wiki/JavaScript)

**Attention** à ne pas confondre le `javascript` et le `java`, ce sont des langages différents.

## Intégration de code javascript dans une page `html`

Le code javascript peut être intégré à un document `html` grâce à la balise `<script>`. Suivant la
longueur du code à écrire, on peut:

1. L'écrire directement dans l'en-tête du document(`<head>`),
2. soit on l'écrit dans un fichier séparé avec l'extension `.js` que l'on importe.

### Directement dans l'entête de la page `html`

Lorsqu'on travaille sur une seule page, on peut intégrer le code javascript entre les balises
`<head>` du document tout comme on le fait avec le code `css.` Par contre la balise employée est
`script` et non `style` cette fois-ci.

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
      Regarde maman, je suis en train d'ajouter du code javascript à ma page.
    </p>
  </body>
</html>
```

### Dans un fichier `script.js` séparé

C'est utile si on souhaite partager notre code javascript entre plusieurs pages html, ou si le code est très long.

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
      Regarde maman, je suis en train d'ajouter du code javascript à ma page.
    </p>
  </body>
</html>
```

_Remarque:_ il est très fréquent de voir le javascript placé juste avant la balise fermante
`<body>`. Ceci permet d'être sûr que l'ensemble de la page web ait été _parsée_(analysée) par le
navigateur va,t de la modifier avec le code `javascript`.

## Debogage du javascript

Pour déboguer du code javascript, on utilise le plus souvent **la console du navigateur**(
<kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>C</kbd>). Puis on y affiche des valeurs de variables
depuis le programme javascript avec la fonction `console.log()`.

![Copie d'écran de la console du navigateur web firefox](./images/debogage-js-console.png)

## Syntaxe du javascript

Il s'agit d'un langage très complet, qui ne peut pas être expliqué en quelques lignes, si vous voulez en maîtrisez toutes les bases je vous conseille le cours d'OpenClassroom [Apprenez à coder avec JavaScript](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript).

- Les **commentaires** sont notés précédés de deux barres obliques: `//`.
- Les variables doivent être déclarées grâce au mot clé `var`.
- tout comme en python, les **chaînes de caractères** sont entourées de **guillemets**.
- Les instructions simples sont terminées par un **point-virgule**: `;`(il n'est cependant pas
  toujours indispensable comme en `css`).
- Les **blocs d'instructions** sont entourés d'**accolades**.
- L'_indentation_ des blocs d'instruction n'est pas obligatoire comme en Python, mais souhaitable.

_Voici par exemple un exemple de structure conditionnelle_

```js
if (expression1) {
  //instructions réalisées si expression1 est vraie;
} else {
  //instructions réalisées dans les autres cas;
}
```

### Variables javascript

Tout comme en Python, les variables n'ont pas de type défini, on parle de _typage dynamique_.

Il est possible de modifier le type de donnée contenue dans une variable.

Coller ce petit bout de code dans la console du navigateur pour étudier le typage dynamique.

```js
var myString = '123.456'
// on afficher la valeur dans la console web grâce à la fonction console.log
console.log(myString)
// et le type
console.log(typeof myString) // value:string

// Mieux, on concantène une chaîne de caractères lisible pour garder des traces de l'exécution
// du programme
console.log(
  'myString a pour valeur ' +
    myString +
    ' et est actuellement du type:' +
    typeof myString
)

// Illustration du typage dynamique
var myString = Number(myString)
console.log(
  'myString a pour valeur ' +
    myString +
    ' et est actuellement du type:' +
    typeof myString
)
```

Il est vivement conseillé de déclarer ses variables avec l'instruction `var` pour des questions de
portée de variable.

[[plus| `const` et `let`]]
|Depuis 2015, le javascript définit aussi des **constantes** avec l'instruction `const` qui comme
|son nom l'indique ne peut pas changer de valeur grâce à une assignation ou être re-déclarée au
|cours du programme contrairement à une variable.
|Si la variable peut-être amenée à changer on utilisera alors le mot clef `let`.

### Structures conditionnelles

En javascript, l'instruction `elif` n'existe pas, il faut imbriquer des conditions pour exprimer
un `elif` de Python.

```js
var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {

    console.log(nombre + " est positif");

} else { // nombre <= 0

    if (nombre < 0) {

        console.log(nombre + " est négatif");

    } else { // nombre === 0

        console.log(nombre + " est nul");

    }
```

_[OpenClassroom](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions#/id/r-3060566)_{.cite-source}

_Remarque: vous pouvez également créer des conditions composées avec les opérateurs logiques ET(`&&`) et OU(`||`) voir le cours d'[Openclassroom](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/ajoutez-des-conditions#/id/r-3069918)_

### Répéter des instructions avec les boucles `while` et `for`

#### [La boucle `while`(tant que)](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions#/id/r-3074597)

> La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.

```js
console.log('Début du programme')

var nombre = 1

while (nombre <= 5) {
  console.log(nombre)

  nombre++
}

console.log('Fin du programme')
```

#### [La boucle `for`(pour)](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions#/id/r-3074777)

> La boucle `for` permet de répéter des instructions pour un intervalle de valeurs données.

```js
for (var compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur)
}
```

[[appli|Contrôle de saisie]]
|Ecrivez un programme qui fait saisir un nombre à l'utilisateur jusqu'à ce que ce nombre soit inférieur ou égal à 100.
|
|Ensuite, améliorez votre programme pour que le nombre saisi soit compris entre 50 et 100.
|
|_[Openclassroom](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions#/id/r-3075483)_

### Fonctions javascript

Une fonction est **déclarée** grâce au mot-clé `function`:

```js
function nomDeMaFonction (argument1, argument2, ...) {
  instructions
  return valeur_renvoyée_par_ma fonction
}
```

_Remarque:_ Toutes les fonctions ne retournent pas de valeurs, le `return` n'est pas obligatoire.

Pour **exécuter** la fonction, il suffit de taper son nom suivi de arguments entre parenthèses.

```js
nomDeMaFonction(arg1, arg2)
```

**Example:** la fonction carré

```js
// Déclaration de la fonction
function carré(nombre) {
  return nombre * nombre
}

// Appel de la fonction

carré(2) // retourne 4!
```

**Attention**: Lorsqu'on déclare une variable dans une fonction, celle-ci a une portée locale et
ne peut pas être utilisée en dehors de la fonction.

```js
// n ici une variable locale dans la fonction
function quatreFois(nombre) {
  var n = 4
  return n * nombre
}

// Elle n'existe pas en dehors de la fonction
quatreFois(2) // retourne 8!
n * 2 // Exception: n is not defined
```

_Remarque:_ en javascript, on a l'habitude d'écrire des fonctions sans tirets, on utilise la norme
`camelCase`, ou on met en majuscule la lettre qui aurait du suivre un espace. Par exemple: la
fonction `rajouteUn`

## Quelques exemples _simples_ pour commencer

### Comment récupérer une entrée utilisateur?

Il est très fréquent d'avoir besoin que l'utilisateur vous entre des données, pour cela il existe plusieurs méthodes.

#### L'ancienne méthode, la fonction `prompt()`:

```js
//On demande à l'utilisateur une valeur et on la stocke dans la variable reponse
var reponse = prompt('Quelle est la couleur du cheval blanc de Henri IV?')

//On affiche la réponse rentrée
alert('Votre réponse est: ' + reponse)
```

#### Plus moderne, la balise `html` `<input>`:

C'est ainsi que sont créés les formulaires web.

Dans le code `html` vous créez des balises `<input>` dans un formulaire `<form>`.

```js
<!-- Utilisation simple d'un élément input dans un formulaire-->
<form>
    <!-- Zone d'entrée du texte par l'utilisateur-->
    <input type="text" name="maVariableAStocker" value="valeur par défaut">
    <!-- Bouton de validation du formulaire  qui execute la fonction recupereInput lorsqu'il est clické-->
    <input type="button" onclick="recupereInput();" value="Enregistrer"/>
</form>
```

Dans le code `js` vous définissez la fonction `recupereInput` pour récupérer la valeur entrée par l'utilisateur.

```js
function recupereInput() {
  console.log('Bouton enregistrer clické')
  var reponse = document.querySelector('[name="maVariableAStocker"]').value
  console.log('Votre réponse est maintenat: ' + reponse)
}
```

### Comment modifier le rendu de la page?

#### Exécution différée

Avant de modifier la page, il convient d'attendre que la page `html` soit chargée avant d'exécuter
le code javascript. De nombreux développeurs placent le code javascript à la fin du corps du
document avant la balise fermante `</body>`.

Cependant il est aussi possible et recommandé de lancer le code javascript qu'après le chargement
de la fenêtre en plaçant le code dans une fonction qui s'exécute après le chargement de la page:

```js
window.onload = function() {
  // code javascript à éxecuter
  // après le chargement de la page
  console.log('La page est chargée, je peux maintenant la modifier')
}
```

#### Accéder à un élément `html`

Pour accéder à un élément `html` à partir du javascript, on utilise les fonctions suivantes:

- `document.getElementById()` permet de sélectionner un élément `html` à partir de son `id`.
- `document.querySelector()` un sélecteur plus générique qui sélectionne les éléments à la manière
  des sélecteurs css.

**Exemple:**

Vous avez un document `html` qui contient les éléments suivants:

```html
<h1 class="grand-titre">Titre principal de mon document</h1>
<p id="premier-paragraphe">
  Regarde maman, je suis en train d'ajouter du code javascript à ma page.
</p>
<h2 class="grand-titre">Sous-titre de mon document</h2>
```

On peut alors en javascript modifier leurs contenus grâce à la propriété `innerHTML`,

```js
document.getElementById('premier-paragraphe').innerHTML =
  "J'aimais pas l'ancien texte, je l'ai changé."
```

**Attention:** ne pas oublier de placer ce code dans la fonction `window.onload = function() { }`.

ou encore modifier les styles grâce à la propriété `style`.

```js
document.querySelector('h1.grand-titre').style.color = '#FFAA85'
document.querySelector('h2.grand-titre').style.color = '#AA00AA'
```

## Gestion des événements

Jusque là, tout cela n'a pas grand intérêt puisqu'on aurait pu écrire directement le bon code
`html` et css pour effectuer ces actions. Ça devient intéressant, quand on fait réagir la page à
des événements. On demande alors à javascript de suivre certains événements en utilisant la
fonction `addEventListener()`

Par exemple, ce code modifie la couleur si on survole l'élément `h1` avec la classe `grand-titre`.

```js
// on sélectionne l'élément
titre1 = document.querySelector('h1.grand-titre')

// on ajoute une action au survol de la souris
titre1.addEventListener('mouseover', function(event) {
  titre1.style.color = 'red'
})

// on ajoute une action lorsque la souris quitte le titre
titre1.addEventListener('mouseout', function(event) {
  titre1.style.color = ''
})
```

Vous pouvez trouver la liste complète des événements sur [MDN](https://developer.mozilla.org/fr/docs/Web/Events).

### Autre méthode en utilisant des attributs `on...` dans le code `html`

On exécute du javascript lorsqu'on **presse un bouton** avec l'attribut `onclick`

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="id1">Mon titre de niveau 1</h1>

    <button
      type="button"
      onclick="document.getElementById('id1').style.color = 'red'"
    >
      Attention! Que va-t-il se passer?
    </button>
  </body>
</html>
```

Ou encore lorsque la souris survole un élément avec l'attribut `onmouseover`, et lorsqu'elle le quitte avec l'attribut `onmouseout`.

```html
<!DOCTYPE html>
<html>
  <body>
    <div
      onmouseover="mOver(this)"
      onmouseout="mOut(this)"
      style="background-color:#D5AA12;font-size: 13rem;width:19rem;padding:40px;"
    >
      Sol
    </div>

    <script>
      function mOver(obj) {
        obj.innerHTML = 'Fa'
        obj.style.background = '#FF5546'
      }

      function mOut(obj) {
        obj.innerHTML = 'Sol'
        obj.style.background = '#D5AA12'
      }
    </script>
  </body>
</html>
```

## Exemples plus évolués

### Afficher l'heure à laquelle vous avez ouvert la page

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un peu de javascript</title>
    <script type="text/javascript" charset="utf-8">
      window.onload = function() {
        // Stocke l'heure dans la vaariable d
        var d = new Date()
        // Ajoute cette heure dans l'élément html ayant pour id heure
        document.getElementById('heure').innerHTML = d.toLocaleTimeString()
      }
    </script>
  </head>

  <body>
    <h1>Javascript en action</h1>
    <p>Page ouverte à: <span id="heure"></span></p>
  </body>
</html>
```

### Encore mieux afficher l'heure actuelle en exécutant l'affichage toutes les mille millisecondes

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un peu de javascript</title>

    <script type="text/javascript" charset="utf-8">
      // au chargement de la page j'appelle la fonction monHorloge() définie plus bas
      window.onload = function() {
        monHorloge()
      }

      // définition de la fonction horloge
      // fonction d'affichage de l'horloge récursive,
      // c'est à dire qui s'appelle elle-même
      function monHorloge() {
        var d = new Date()
        document.getElementById('heure').innerHTML = d.toLocaleTimeString()

        // partie récursive
        // chaque fois que l'affichage se rafraichit,
        // la fonction monHorloge est appelée
        window.requestAnimationFrame(monHorloge)
      }
    </script>
  </head>

  <body>
    <h1>Javascript en action</h1>
    <p>Il est: <span id="heure"></span></p>
  </body>
</html>
```

## Exercices

### Quiz

Si ce n'est pas déjà fait, **connectez-vous** sur le site d'OpenClassroom pour réaliser le quizz
sur le javascript disponible à l'adresse suivante: <https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/exercises/489>

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

Le javascript étant un langage très à la mode, les tutoriels, cours et vidéos ne manquent pas. N'hésitez pas à consulter:

- le cours d'OpenClassroom [Apprenez à coder avec JavaScript](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript)
- [codeacademy](https://www.codecademy.com/fr/learn/learn-javascript)

, ou encore les sites de référence comme:

- [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [w3schools](http://www.w3schools.com/js/)
