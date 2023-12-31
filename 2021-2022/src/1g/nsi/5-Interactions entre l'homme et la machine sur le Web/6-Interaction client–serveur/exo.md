---
'tags': ['nsi', 'exercices']
---

## TP sur l'application web serveur en python

Vous allez créer une application web, avec un serveur écrit en python, telle que décrite dans le
cours.

Le code est disponible dans ce dépôt [framagit](https://framagit.org/lyceum/flask-csv) au format
[zip](https://framagit.org/lyceum/flask-csv/-/archive/master/flask-csv-master.zip). Téléchargez-le, puis dézippez-le.

Ouvrir le **dossier** dans Visual Studio Code.

Lancer l'application en tapant dans le terminal de vscode: `python flask-csv.py`

Vous pourrez alors ouvrir votre navigateur pour observer son fonctionnement à l’adresse locale :
http://localhost:5000

![copie d'écran de développement](./images/screenshot-vscode-firefox-flask-app.png)


L'application présente trois pages accessibles au adresse:

- `/` page racine: affiche la liste des élèves
- `/ajout` ajout d'élève avec un formulaire GET.
- `/ajout_post` ajout d'élève avec un formulaire POST.

Vous pourrez parcourir le code, et le modifier:

- côté **serveur** : fichier `flask-csv.py` (langage serveur : `python`)

  Ce fichier contient le code permettant de traiter les trois pages côté serveur.

  Par exemple la page racine:

  ```python
  @app.route('/')
  def index_page():
      "Page d'accueil qui liste les élèves."

      return render_template("index.html", data=g.data)
  ```

  La première ligne indique le chemin(_route_) vers la page, ici `/` comme on est à la racine.

  la dernière indique que l'on renvoie la page `index.html` dans laquelle on a fait passer les
  données `data` du fichier `csv`.

- côté **client** : 

  Toutes les pages html se trouvent dans le dossier `pages`. fichier `pages/index.html` (langage client `html`)

**Travail proposé**

1. Traiter les données avec le formulaire dans la fonction `post_form_page` du fichier
   `flask_csv.py`.
2. Ajouter **coté client** des entrées au formulaire pour stocker d’autres informations, par
   exemple l’âge. Modifier le code côté serveur pour stocker correctement ces nouvelles entrées
   dans le fichier `csv`.
3. Ajouter une validation du champ âge **côté client** pour vérifier que l’age est bien supérieur à 14 ans.
4. Travailler **à la fois du côté du client et du serveur** pour proposer à l’utilisateur de
   supprimer une entrée.
