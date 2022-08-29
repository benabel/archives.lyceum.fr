---
'tags': ['nsi', 'exercices']
---

## Carré magique

> En mathématiques, un carré magique d’ordre $n$ est composé de $n^2$ entiers strictement positifs, écrits sous la forme d’un tableau carré. Ces nombres sont disposés de sorte que leurs sommes sur chaque rangée, sur chaque colonne et sur chaque diagonale principale soient égales. On nomme alors constante magique (et parfois densité) la valeur de ces sommes. 

[Article Wikipédia sur le carré magique](https://fr.wikipedia.org/wiki/Carr%C3%A9_magique_(math%C3%A9matiques)){.cite-source}

En voici un exemple:

<p><a href="https://commons.wikimedia.org/wiki/File:Magicsquareexample.svg#/media/File:Magicsquareexample.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Magicsquareexample.svg/1200px-Magicsquareexample.svg.png" alt="Magicsquareexample.svg"></a><br>By <a href="//commons.wikimedia.org/wiki/User:Phidauex" title="User:Phidauex">User:Phidauex</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=1019701">Link</a></p>

Nous allons stocker les valeurs de ce carré magique sous la forme d'un tableau de tableau.

```python
carré = [[2, 7, 6],
         [9, 5, 1],
         [4, 3, 8]]
```

1. Que renvoie `len(carré)` ?
2. Quelle est la valeur de `carré[1]`?
3. Quelle est la valeur de `carré[2][0]`?
4. Définir une fonction qui `somme_ligne(c, n)` qui prend 2 paramètres:

   - `c`: un carré magique représenté sous forme de liste de liste.
   - `n`: l'index de la ligne considéré.

   Qui renvoie la somme des éléments de la ligne `n` du carré.

   Par exemple l'appel `somme_ligne(carré, 0)` renvoie `15`.

   Vous pourrez partir de cette base de code à compléter:

   ```python
   def somme_ligne(c,n):
       somme = 0
       ligne = c[n]
       for val in ligne:
           ...
       return ...
   ```

5. Proposer une fonction `vérifie_lignes(c)`, qui utilise la fonction `somme_ligne`, qui prend un
   carré magique en paramètre et renvoie `True`, si toutes ses lignes sont égales et `False` sinon.

   _Essayer d'être général afin que votre fonction puisse utiliser des carrés de taille quelconque,
   et pas seulement de 3 sur 3._

**En plus**: Créer des fonctions:

- `somme_colonne(c, n)`, `vérifie_colonnes(c)` semblables aux fonctions précédentes, mais qui
  travaillent sur les colonnes du carré.
- `somme_diagonale1(c)`, `somme_diagonale2(c)` qui calculent les sommes de chacune des diagonales
  du carré.
- Vous êtes maintenant capable de créer la fonction `vérifie_carré_magique(c)` qui renvoie `True`
  si le carré `c` donné en argument est magique et `False` sinon.
