---
tags: ["openclassroom", "css"]
---


Nous poursuivons le cours en ligne (MOOC) libre sur le site openclassroom: **[Apprenez à créer votre site web avec HTML5 et CSS3](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3?status=published)**

Nous commencons aujourd'hui la deuxième partie de ce cours: **Partie 2 - Les joies de la mise en forme avec CSS**

**N'oubliez pas de vous [connecter](https://openclassrooms.com/login)** sur le site afin de suivre votre avancement sur le cours.


## 4ème séance

*Lors de cette quatrième séance nous allons voir comment mettre en forme une page web en utilisant le language [CSS](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade), pour cela nous verrons comment inclure des réglès css dans une page html, puis nous nous intéresserons à la syntaxe du css.*


# [1. Mettre en place le css](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/mettre-en-place-le-css)

Dans cette partie vous verrez comment créer une feuille de style `.css` et l'inclure dans la page `html`.

Vous verrez également comment **sélectionner** des balises en css et leur appliquer des **règles de formatage**.

#### [Résumé](https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3/mettre-en-place-le-css#/id/r-3198484)

- CSS est un autre langage qui vient compléter le HTML. Son rôle est de mettre en forme votre page web.
- Il faut être vigilant sur la compatibilité des navigateurs avec certaines fonctionnalités récentes de CSS3. Quand un navigateur ne connaît pas une instruction de mise en forme, il l'ignore simplement.
- On peut écrire le code CSS à plusieurs endroits différents, le plus conseillé étant de créer un fichier séparé portant l'extension `.css` (exemple : `style.css`).
- En CSS, on sélectionne quelles portions de la page HTML on veut modifier et on change leur présentation avec des propriétés CSS :
```
balise1 {
    propriete1: valeur1;
    propriete2: valeur2;
}
```
- Il existe de nombreuses façons de sélectionner la portion de la page que l'on veut mettre en forme. Par exemple, on peut viser :

    - toutes les balises d'un même type, en écrivant simplement leur nom (`h1` par exemple) ;

    - certaines balises spécifiques, auxquelles on a donné des noms à l'aide des attributs `class` ou `id` en html (`.nomclasse` ou `#nomid` en css) ;

    - uniquement les balises qui se trouvent à l'intérieur d'autres balises (h3 em).

    - etc.
