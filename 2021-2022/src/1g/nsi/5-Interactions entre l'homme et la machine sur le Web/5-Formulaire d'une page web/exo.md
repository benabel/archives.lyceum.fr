## Formulaire en HTML

Recopier le code suivant dans un fichier que vous nommerez `index.html`.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Un document minuscule</title>
  </head>
  <body>
    <h1>Les formulaires en html</h1>
    <!-- Le formulaire ci-dessous -->
    <form method="GET">
    <input type="text" name="nom" placeholder="Entrer votre nom">
    <button type="submit">Envoyer les données</button>
  </body>
</html>
```

Enregistrer ce fichier puis l'ouvrir dans le navigateur.

1. Entrer une valeur dans le formulaire et appuyer sur le bouton pour le soumettre et observer la
   barre d'adresse du navigateur.

2. Ajouter d'autres types d'entrées avec la balise `<input>`.

   - `<input type="text" ...`: Par défaut: entrée de texte.
   - `<input type="button" ...`: Un bouton(on préfèrera cependant la balise
     [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) cependant).
   - `<input type="checkbox" ...`: Case à cocher.
   - `<input type="radio" ...`: un bouton radio qui permet de sélectionner une seule valeur parmi un
     groupe de différentes valeurs.

   Assurez-vous que toutes les balises `input` ont bien un attribut `name` pour pouvoir être
   traités.

3. Modifier la méthode du formulaire en `POST"` eu lieu de `GET` et observer les changements dans
   la console de développement dans l'onglet réseau.
