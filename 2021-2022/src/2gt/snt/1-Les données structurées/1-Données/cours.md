---
tags: ["cours", "seconde", "lycée", "snt", "données",
       "métadonnées"]
---

::: programme

+-----------------------+------------------------------------------------------------+
|     **Contenus**      |                  **Capacités attendues**                   |
+=======================+============================================================+
| Données               | Définir une donnée personnelle.                            |
|                       | Identifier les principaux formats et représentations de    |
|                       | données.                                                   |
+-----------------------+------------------------------------------------------------+
| Métadonnées           | Retrouver les métadonnées d’un fichier personnel.          |
+-----------------------+------------------------------------------------------------+
| Données dans le nuage | Utiliser un support de stockage dans le nuage.             |
| (_cloud_)             |                                                            |
|                       | Partager des fichiers, paramétrer des modes de             |
|                       | synchronisation.                                           |
|                       |                                                            |
|                       | Identifier les principales causes de la consommation       |
|                       | énergétique des centres de données ainsi que leur ordre de |
|                       | grandeur.                                                  |
+-----------------------+------------------------------------------------------------+

:::

::: intro

![Image d'un formulaire de collecte de données](../../images/formulaire.png){.half .right}

> Les données personnelles sont un grand enjeu actuel du web, c'est pour cela
> que l'Europe s'est dotée de lois pour faire respecter des règles sur la
> collecte et le traitement des données personnelles par les entreprises du web.

:::

::: {.plus titre="Formulaire html"}

Dans une page web, les formulaires sont représentés à l'aide de balises `<form>` et `<input>`.

```html
<form name="formA" action="/cgi-bin/test" method="post">
 <p>Appuyez sur "Info" pour les détails du formulaire, ou "Définir" pour modifier ces détails.</p>
 <p>
  <button type="button" onclick="getFormInfo();">Info</button>
  <button type="button" onclick="setFormInfo(this.form);">Set</button>
  <button type="reset">Reset</button>
 </p>

 <textarea id="form-info" rows="15" cols="20"></textarea>
</form>
```

Voir cette page sur [MDN](https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement) pour plus
d'informations.

:::

## Les formats de données

En informatique les données sont codées sous forme binaire(des 0 et des 1).

La façon de coder l'information dépend du type de fichier:

- image: _________
- vidéo: _________
- texte: _________
- ...

La plupart des formats ajoutent des données pour décrire le fichier. **Ce sont les métadonnées.**

::: appli

Observer les données et métadonnées d'une photo sur cette page:

<https://eduinfo.frama.io/photo-metadata/>

1. Que représentent les données de cette photo?
2. Donner cinq métadonnées ajoutées à cette photo.

:::

::: {.plus titre="Comment compter en binaire"}

En binaire $11 = 3$ ! **Étrange**, pas tant que ça si on compte sur nos _deux_ doigts.


0. `0`
1. `1`
2. `10`
3. `11`
4. `100`
...

On a l'habitude de préciser la base de numération en indice $3_{10}= 11_{2}$.

:::

::: appli

1. Compter jusqu'à 16 en binaire.
2. Quelle est la valeur de `1111 1111`, la plus grande valeur stockée sur un octet?
3. Écrire 64 en binaire.

:::

::: {.plus titre="L'enjeu des métadonnées"}

Lire cette vidéo du journal Le Monde.

https://www.lemonde.fr/pixels/video/2015/06/15/comment-les-metadonnees-permettent-de-vous-surveiller-explique-en-patates_4654461_4408996.html

:::



## Qu'est-ce qu'une donnée personnelle ?

> Une donnée personnelle correspond à toute information qui permet d'identifier directement ou
> indirectement une personne physique.

[CNIL](https://www.cnil.fr/fr/definition/donnee-personnelle){.cite-source}

::: examples

- Nom,
- Prénom
- photographie du visage
- date et lieu de naissance
- adresse, adresse électronique, adresse IP
- numéro de téléphone
- numéro de sécurité sociale
- numéro de carte bancaire

:::

::: plus

En droit français, les personnes morales(non physiques) sont les personnes
agissant au sein d'une entreprise ou d'une association par exemple.

:::

## Informatique en nuage: le cloud

<wc-wikimage title="Nuage33.png" caption=""></wc-wikimage>

Informatique en nuage

:   Réseau d'ordinateurs permettant à leurs utilisateurs de partager et utiliser à distance diverses ressources informatiques comme des fichiers, des logiciels, des capacités de calcul et de la mémoire. [Wiktionnaire](https://fr.wiktionary.org/wiki/informatique_en_nuage){.cite-source}

::: examples

- atrium: le cloud des lycées de la région sud.
- __________: _________________________________
- __________: _________________________________

:::

::: {.appli titre="Partager des documents sur atrium"}

À l'aide des tutoriels d'atrium, réaliser les actions suivantes:

1. [Déposer un document sur atrium](https://www.atrium-sud.fr/web/assistance/deposer-un-document)
2. [Partager un document](https://www.atrium-sud.fr/web/assistance/partager-un-document) en réglant les paramètres de partage.

:::

::: {.appli titre="Paramètres de synchronisation"}

En utilisant le document 2 P 22 du [manuel de
Delagrave](https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve):

- Vérifier vos paramètres de synchronisation des données de votre téléphone.
- Où sont enregistrées ces données?
- À quoi peuvent-elles servir?

:::

::: {.appli titre="La consommation de données des data-centers"}

En utilisant le document 4 P 23 du [manuel de
Delagrave](https://www.editions-delagrave.fr/livre/9782206103389-sciences-numeriques-et-technologie-snt-2de-2019-manuel-eleve):

Rédiger un court paragraphe expliquant quels sont les enjeux de la consommation énergétique des centres de données utilisés dans le cloud.

:::

&nbsp;

<!-- ## Les données ouvertes

À l'inverse des données collectées par certaines entreprises privées pour mieux connaitre leurs
utilisateurs ou éventuellement faire un commerce de ces données, les données ouvertes sont
librement accessibles grâce à une licence ouverte garantissant leur libre accès et leur
réutilisation par tous, sans restriction technique, juridique ou financière.

Données ouvertes

:    Les **données ouvertes** ou _open data_ sont des données numériques dont
l'accès et l'usage sont laissés libres aux usagers.


::: examples

- Plateforme ouverte des données publiques françaises: https://www.data.gouv.fr/fr/
- Données de la ville de Nice Côte d'azur: http://opendata.nicecotedazur.org/data/dataset
- Données d'électricité en France: https://data.enedis.fr/
- ...

:::

 -->
