---
"tags": ["comparaison", "python", "javascript"]
---

::: programme
+------------------------+-------------------------------+-------------------------------+
|        Contenus        |      Capacités attendues      |         Commentaires          |
+========================+===============================+===============================+
| Diversité et unité des | Repérer, dans un nouveau      | Les manières dont un même     |
| langages de            | langage de programmation, les | programme simple s’écrit dans |
| programmation          | traits communs et les traits  | différents langages sont      |
|                        | particuliers à ce langage.    | comparées.                    |
+------------------------+-------------------------------+-------------------------------+
:::

Comme nous l'avons vu précédemment un programme permet d'écrire un algorithme afin qu'il soit
exécuté par un ordinateur.

Il existe de très nombreux langages de programmation aujourd'hui, chacun ayant ses forces et ses
faiblesses et sera donc adapté à un domaine plutôt qu'à un autre.

Cette année nous utiliserons deux langages: [Python](https://www.python.org/) et [Javascript](https://developer.mozilla.org/fr/docs/Web/JavaScript):

- `Python` est très apprécié dans la communauté scientifique
- alors que le `javascript` est le langage implémenté nativement dans tous les navigateurs web.

Nous allons voir sur l'exemple de ces deux langages qu'il est possible d'écrire les mêmes algorithmes avec des synatxes assez proches.

## Commentaires

Les commentaires sont indispensables pour expliquer votre code à ceux qui le lisent(souvent
vous-même quelques jours, semaines ou mois après). En javascript on utilise le double slash pour le
commentaire de ligne `//`.


+---------------------------+----------------------------+
|          python           |         javascript         |
+===========================+============================+
| ```python                 | ```js                      |
| # ceci est un commentaire | // ceci est un commentaire |
| ```                       | ```                        |
+---------------------------+----------------------------+


## Affectation de variable

Dans les deux langages on utilise le simple signe égal `=`, on utilise cependant le mot clé var en `js`.

+-----------+------------+
|  python   | javascript |
+===========+============+
| ```python | ```js      |
| a = 3     | let a = 3  |
| ```       | ```        |
+-----------+------------+

::: {.plus titre="Autres décalarations en js"}
On peut également trouver l'ancien déclarateur `var`(à éviter).
Si vous êtes sur que la variable ne sera pas modifiée après création utilisez le mot-cle `const`. 
:::

## Entrées et sorties

Les entrées permettent de récupérer des données de l'utilisateur pour adapter son fonctionnement aux exigences de ce dernier.

Les sorties permettent d'afficher les résultats à l'utilisateur.

+----------------------------------------+----------------------------------------------+
|                 python                 |                  javascript                  |
+========================================+==============================================+
| ```python                              | ```js                                        |
| # entrée                               | // entrée                                    |
| age = input("Quel age avez-vous?)      | var age = prompt("Quel age avez-vous?")      |
| # sortie                               | // sortie                                    |
| print("Votre âge est " + age + " ans") | console.log("Votre âge est " + age + " ans") |
| ```                                    | ```                                          |
+----------------------------------------+----------------------------------------------+

## Instructions conditionnelles

Dans les deux langages on utilise les mots-clef `if` et `else` cependant le `elif` n'existe pas en
`js`. On utilise `else if`.

D'autres part, le javascript n'utilise pas l'indentation pour définir les blocs de code, il les place entre accolades `{}`


<table class="table table-bordered table-hover"">
  <thead>
  <tr class="table-warning">
    <th>python</th>
    <th>javascript</th>
  </thead>
  </tr>
  <tr>
    <td><pre><code>
if age > 18:
    print("Vous êtes majeur")
elif age >16:
    print("Bientôt majeur")
else:
    print("Soyez patient")
</code></pre</td>
<td><pre><code>
if (age > 18) {
  console.log(`Vous êtes majeur`)
} else if (age > 16) {
console.log(`Bientôt majeur`)
} else {
  console.log(`Soyez patient`)
}
</code></pre></td>
  </tr>
</table>

## Boucles

Les deux langages définissent les boucles `for` et `while`.

### Boucle `for`

<table class="table table-bordered table-hover"">
  <thead>
  <tr class="table-warning">
    <th>python</th>
    <th>javascript</th>
  </thead>
  </tr>
  <tr>
    <td><pre><code>
for i in range(10):
    print(i)
</code></pre</td>
<td><pre><code>
for (var i = 0; i < 10; i++) {
  console.log(i)
}
</code></pre</td>
  </tr>
</table>

### Boucle `while`

<table class="table table-bordered table-hover"">
  <thead>
  <tr class="table-warning">
    <th>python</th>
    <th>javascript</th>
  </thead>
  </tr>
  <tr>
    <td><pre><code>
i = 0 # initialisation
while i<10: # condition d'arrêt
    print(i)
    i = i + 1 # incrémentation de l'indice
</code></pre</td>
<td><pre><code>
var i = 0 // initialisation
while (i < 10) { // condition d'arrêt
  console.log(i)
  i = i + 1 // incrémentation de l'indice
}
</code></pre</td>
  </tr>
</table>

## Fonctions

Les deux langages définissent les boucles `for` et `while`.

### Définition de la fonction

En python le mot clef utilisé est `def` et `function` en javascript, dans les deux cas le retour de
fonction se fait par le mot-clé `return`.

<table class="table table-bordered table-hover"">
  <thead>
  <tr class="table-warning">
    <th>python</th>
    <th>javascript</th>
  </thead>
  </tr>
  <tr>
    <td><pre><code>
def carré(nb):
    return nb**2
</code></pre</td>
<td><pre><code>
function carré (nb) {
  return nb**2
}
</code></pre</td>
  </tr>
</table>

### Appel de la fonction

Même syntaxe, on écrit le nom de la fonction avec le ou les arguments de la fonction entre parenthèse.

<table class="table table-bordered table-hover"">
  <thead>
  <tr class="table-warning">
    <th>python</th>
    <th>javascript</th>
  </thead>
  </tr>
  <tr>
    <td><pre><code>
carré(2)
</code></pre</td>
<td><pre><code>
carré(2)
</code></pre</td>
  </tr>
</table>

::: {.plus titre=" Procédure"}
Une fonction qui n'utilise pas d'argument est parfois qualifiée de procédure. L'appelle des
procédures **nécessite** la présence des parenthèses pour être appelée sinon la fonction est
renvoyée, mais |son code n'est pas exécuté.
:::
