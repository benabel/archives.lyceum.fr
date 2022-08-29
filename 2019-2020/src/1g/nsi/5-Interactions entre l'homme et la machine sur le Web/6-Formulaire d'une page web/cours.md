---
tags: ['http', 'formulaire', 'client-serveur']
---

::: programme
+----------------------------+------------------------------------------+-------------------------------------------+
|          Contenus          |           Capacités attendues            |               Commentaires                |
+============================+==========================================+===========================================+
| Formulaire d’une page Web  | Analyser le fonctionnement d’un          | Discuter les deux types de requêtes selon |
|                            | formulaire simple.                       | le type des valeurs à transmettre et/ou   |
|                            |                                          | leur confidentialité.                     |
|                            | Distinguer les transmissions de          |                                           |
|                            | paramètres par les requêtes POST ou GET. |                                           |
+----------------------------+------------------------------------------+-------------------------------------------+
:::

## Création du formulaire avec la balise `<form>`

Les formulaires sont un moyen de récupérer des données à partir du client pour les passer à
l'application serveur.

Dans le fichier `html`, on utilise la balise `<form>` en y ajoutant l'attribut `method` qui permet
d'indiquer quel est le type de requête HTTP.

```html
<form method="get">

    <label for="nom">Entrez votre nom: </label>
    <input type="text" name="nom" required>
  
    <label for="email">Entrez votre email: </label>
    <input type="email" name="email" required>
  
    <input type="submit" value="Enregistrer">
  
</form>
```

### Méthode `HTTP GET`

Cette méthode permet de récupérer des données depuis le serveur. Elle place les paramètres du
formulaire dans l'adresse url après validation.

<http://chemin/fichier.html?nom=James&email=james%40cameron.com>

::: {.appli titre="Création d'un formulaire avec la méthode GET"}

Créer une page `html` valide dans laquelle vous placerez un formulaire, qui la méthode `GET`.

Vérifier comment sont placés les paramètres lors de la soumission du formulaire avec le bouton
`submit`.

Ajouter un paragraphe à votre page qui explique vos observations en ce qui concerne l'encodage des
paramètres du formulaire(percent-encoding) et leur placement dans l'adresse avec des exemples.

:::

### Méthode `HTTP POST`

Cette méthode demande à ce que le serveur accepte les données qui lui sont transmises cette fois-ci
dans le corps de la requête http, sans les encoder dans l'url cette fois-ci.

> Une requête POST est habituellement envoyée via un formulaire HTML et a pour résultat un
> changement sur le serveur. Dans ce cas, le type du contenu est sélectionné en mettant la chaîne
> de caractères adéquate dans l'attribut `enctype` de l'élément `<form>`:
> 
> - `application/x-www-form-urlencoded` : les valeurs sont encodées sous forme de couples
>   clé-valeur séparés par '&', avec un '=' entre la clé et la valeur. Les caractères non
>   alphanumériques sont percent encoded.

*[article POST sur MDN](https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode/POST)*{.cite-source}

::: {.appli titre="Création d'un formulaire avec la méthode POST"}

Sur la page web précédente, ajouter un autre formulaire, qui utilisera cette fois-ci la méthode `POST`.

Vérifier les différences de fonctionnement entre ces deux formulaires en utilisant la console
réseau du navigateur.

Ajouter un paragraphe à votre page qui explique vos observations en ce qui concerne le placement
des paramètres du formulaire dans le cas de la méthode `POST`.

En lien avec le programme officiel ci-dessus, ajouter une dernière partie de conclusion pour:

> Discuter les deux types de requêtes selon le type des valeurs à transmettre et, ou leur
> confidentialité.

:::

## Traitement de la requête par le serveur

La plupart des sites utilisent `php` pour la programmation de l'application serveur, mais nous
allons utiliser `python` car vous le connaissez et qu'il est installé sur vos ordinateurs.

Le dépôt du code est disponible à l'adresse suivante: https://github.com/heoinfo/flask-csv

Grâce au framework `flask` on lance un serveur qui affiche à sa racine une page web qui liste des
utilisateurs lus à partir d'un fichier `csv`.

L'ajout d'un utilisateur se fait grâce à un formulaire situé dans la page `pages/index.html`.

```html
<!-- Formulaire d'ajout d'élève -->
<form action="/" method="post">
<fieldset class="form-group">
    <legend>Ajouter un élève</legend>
    <!-- les attributs name sont récupérés par le serveur
    lors de la soumission du formulaire avec la méthode POST -->
    <input type="text" name="nom" placeholder="Nom" />
    <input type="text" name="prenom" placeholder="Prénom" />
    <input type="text" name="classe" placeholder="Classe" />
    <button type="submit" class="btn btn-info">Enregistrer</button>
</fieldset>
</form>
```

On utilise la méthode HTTP `POST` et on ajoute l'attribut action qui indique quel script côté
serveur va récupérer les valeurs du formulaire, ici la racine du site: `/`.

Du côté serveur le fichier `flask-csv.py` s'occupe de servir les pages html en les générant grâce
au framework `flask`.

Le serveur ne sert qu'une page, grâce à la fonction `index_page` qui est exécutée lorsque l'on
navigue à la racine du site, on lui indique d'accepter les requêtes POST.

```python
flask-csv.py
@app.route('/', methods=['POST'])
def index_page():
    ...
```

Si on détecte une soumission de formulaire par la méthode POST, on récupère les données du
formulaire stockées dans la variable `request.form` puis on les ajoute à la variable globale `data`
qui stocke toutes les données.

```python
def index_page():
    # on utilise la variable global data
    global data
    if request.method == 'POST':
        # on récupère les données du formulaire
        post_data = request.form
        # on les ajoute à la variable global data
        data = data.append(post_data, ignore_index=True)
    
```

Enfin, on stocke les données dans le fichier `csv` puis on affiche la page `index.html` avec les
nouvelles données.

```python
@app.route('/', methods=['POST'])
def index_page():
    ...
    if request.method == 'POST':
        ...
        data.to_csv(CSV_FILE, index=False)
        return render_template("index.html", data=data)
```