---
tags: ["openclassroom", "javascript", "boucles", "for", "while"]
---

Pour apprendre à coder en `javascript`, nous allons suivre le cours en ligne (MOOC) libre sur le site openclassroom: **[Apprenez à coder avec JavaScript](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript?status=published)**

**N'oubliez pas de vous [connecter](https://openclassrooms.com/login)** sur le site afin de suivre votre avancement sur le cours.

Pour mettre en pratique vos connaissances au fur et à mesure du cours, lancer le script `launch-atom-firefox.bat` présent dans le dossier `Documents\devoirs\abel\icn` qui permet d'ouvrir l'éditeur de texte Atom pour éditer le code `javascript` et le navigateur `firefox` pour observer les sorties de votre programme dans la console de développement.

# [7. Répétez des instructions](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions)

> L'objectif de ce chapitre est d'apprendre comment ajouter à nos programmes des possibilités d'exécution répétitive.

Il existe deux façons de codes des boucles en `javascript`:

- la boucle `for` en français *pour*, répète les instructions **pour** des valeurs données.

- la boucle `while` en français *tant que*, répète les instructions **tant qu'**une condition est vérifiée

# La boucle `for`

```
var compteur;
for (compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
```

**SORTIE**
```
1
2
3
4
5
```

On peut découper cette instruction en [trois phases](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions#/id/r-3074866):

```
for (initialisation; condition; étape) {
    // instruction executées tant que la condition est vérifiée
}
```

>- L'**initialisation** se produit une seule fois, au début de l'exécution.
- La **condition** est évaluée avant chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée.
- L'**étape** ou *incrémentation*  est réalisée après chaque tour de boucle.

# La boucle `while`

On peut obtenir la même sortie que précédemment avec un boucle `while`.

```
var compteur = 1;
while (compteur <= 5) {
    console.log(compteur);
    compteur++;
}
```

On retrouve les trois phases nécessaires au codage de la boucle: l'initialisation, la condition et l'incrémentation.

```
var compteur = 1;             // initialisation
while (compteur <= 5) {       // condition
    console.log(compteur);
    compteur++;               // incrémentation
}
```

*Remarques*

- la variable compteur est souvent notée `i`;
- faire attention à ne pas programmer une boucle infinie qui bloquerait votre navigateur en lui faisant répéter l'instruction une infinité de fois le plus rapidement possible.

# Exercices

Réalisez les exercices de la partie [A vous de jouer !](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/repetez-des-instructions#/id/r-3075177) avant de passer aux [Quiz](https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript/exercises/489) et à l'activité **Mini jeu de devinette**.
