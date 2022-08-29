---
tags: ["html5", "w3c"]
---

<a title="W3C [CC-BY-3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AHTML5_logo_and_wordmark.svg"><img width="256" alt="HTML5 logo and wordmark" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/256px-HTML5_logo_and_wordmark.svg.png"/></a>

> HTML5 (HyperText Markup Language 5) est la dernière révision majeure d'HTML (format de données conçu pour représenter les pages web).

> Dans le langage courant, HTML5 désigne souvent un ensemble de technologies Web (HTML5, CSS3 et JavaScript) permettant notamment le développement d'applications (cf. DHTML). [Source Wikipedia](https://fr.wikipedia.org/wiki/HTML5)

C'est un langage qui utilise des balises entre chevrons(`<balise>`) pour structurer les pages web et leur donner un sens.

Le langage `html` a un rôle *sémantique*, il décrit le contenu de la page et explique le sens de ce contenu afin qu'il puisse être compris par le navigateur web ou les robots des moeturs de recherche.


Vous pouvez afficher le code `html` d'une page web, en cliquant droit sur celle-ci et en choisissant `Afficher le code source de la page`, ou en utilisant sur Mozilla le raccourci: <kbd>CTRL+U</kbd>.

# Structure générale

Une page `html` commence toujours par indiquer le `doctype`. Depuis html5 c'est très simple:


    <!doctype html>


*C'est quand même mieux que son ancêtre en html4:*

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">


Le document est séparé en deux grandes parties:

- le `head`: qui contient des informations utiles au navigateur et aux robots qui consultent votre page.
- le `body`: qui contient les informations qui seront effectivement affichées à l’écran.

## Structure modèle

Voici une structure qui peut vous servir quand vous commencez une nouvelle page web.

```
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un document minuscule</title>
  </head>
  <body>
    <h1>Titre principal de mon document</h1>
    <!-- Ceci est un commentaire -->
    <p>Regarde maman, je suis en train de coder en <abbr title="Hyper Text Markup Language" lang="en">HTML</abbr> !</p>
  </body>
</html>
```

## Exercice

Essayez de copier ce code dans un fichier que vous appellerez `index.html`, et de le visualiser dans le navigateur internet.

Supprimer une à une chacune des lignes de code pour observer ce qui se passe.


# Balises et attributs

Le langage html utilise des balises pour indiquer le sens sémantique des éléments d'une page. Ces balises ou tags permettent de construire une hiérarchie au sein du document appelée DOM(Document Object Model)

Ces balises sont référencées sur le site [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

*Par exemple:*

- les balises de titre (headings) `<h1>...</h1>` jusqu'à  `<h6>...</h6>` permettent d'utiliser jusqu'à six niveaux de titres dans la page.

- la balise de paragraphe `<p>...</p>`.

- les balises `<div>...</div>` permettent d'englober plusieurs autres éléments, ce sont des conteneurs qui permettent de rassembler ensemble divers éléments.

Certaines balises sont *orphelines*, c'est à dire qu'elles ne présentent pas de balises fermantes. Par exemple la balise d'image `<img>`.

```html
<img src="mdn-logo-sm.png" alt="MD Logo" />
```

Les éléments `src` et `alt` sont les *attributs* de notre image.

- `src`: source de l'image, ici un fichier local, mais une adresse web peut-être sépecifiée.
- `alt`: texte à afficher si la source ne peut-être trouvée.

# Règles d'écriture

> Les balises ouvrantes et fermantes doivent toujours être correctement imbriquées, c'est à dire que les balises fermantes doivent êtres écrites dans l'ordre inverse des balises d'ouverture. Une bonne imbrication des balises est une des règles à respecter afin d'avoir un code valide.
[Source MDN](https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Introduction#Les_balises)

Voici un exemple de code valide :

```
<em>Ceci est <strong>très</strong> important</em>.
```

Voici un exemple de code non-valide :

```
<em>Ceci est <strong>très</em> important</strong>.
```

- Le fichier commence par le doctype html `<!doctype html>`
- Les commentaires sont écrits `<!-- Ceci est un commentaire -->`
- On écrit en général les balises en minuscules.
- L'indentation n'est pas obligatoire, mais elle rend le fichier plus lisible.

# Validation de votre page web

Pour vérifier si votre code html est valide, et être informés sur les erreurs et recommandations, on peur utiliser le validateur du w3c disponible à l'adresse suivante:

<http://validator.w3.org/#validate_by_input+with_options>

Vous pouvez même nettoyer votre code et le réindenter avec l'outil <http://jsbeautifier.org/>.
