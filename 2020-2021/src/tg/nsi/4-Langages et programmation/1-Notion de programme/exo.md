## Vocabulaire

1. Donner deux exemples qui montrent pourquoi un programme est aussi une donnée.
2. Quelle est la différence entre la calculabilité et la décidabilité d'un problème ?
3. Donner des exemples de problèmes décidables.
4. Donner un exemple de problème indécidable.

## Exemple de fonction calculable: la racine carrée

On définit ci-dessous une fonction `racine_carrée`.

```python
def racine_carrée(n, precision=1E-2):
    """Recherche d'une racine carrée par une méthode dichotomique
    
    Paramètres
    ----------
    n: float
        le nombre dont on recherche la racine
    precision: float 0.01 par défaut
        precision du calcul du carré
    
    Returns
    -------
    float
        la racine carrée de n
    """
    gauche, droite, milieu = 0, n, n
    while abs(milieu ** 2 - n) > precision :
        milieu = (gauche + droite) / 2
        if milieu ** 2 - n > 0:
            droite = milieu - precision
        else:
            gauche = milieu + precision
    return milieu
```

1. Expliquer pourquoi il est nécessaire d'utiliser une précision dans ce calcul ?
2. Expliquer la ligne: `while abs(milieu ** 2 - n) > precision :`
3. Pourquoi peut-on qualifier cet algorithme de dichotomique ?

## Problèmes de décision sur les entiers

1. Implémenter en Python deux fonctions :

   - `est_pair(n)`: Renvoie `True` si le nombre entier $n$ est pair, `False` sinon.
   - `est_premier(n)`: Renvoie `True` si le nombre entier $n$ est premier, `False` sinon.

2. Tester ces fonctions avec des petites entrées, puis avec des grandes pour voir si ces
   algorithmes seraient utilisables en pratique.

## Non-décidabilité de l'arrêt

1. Pourquoi dit-on que le problème de l'arrêt est indécidable ?

Supposons qu'il existe une fonction calculable `termine(fonction, données)` qui prend 2 arguments :

- une fonction,
- et des données d'entrée pour cette fonction

et qui renverra `True` si le programme termine et `False` s'il entre dans une boucle infinie.

On définit les deux fonctions suivantes :

```python
def fonction1(n):
    if n % 3 != 0:
        return True
    else:
        return False

def fonction2(n):
    while n % 3 != 0:
        print("True")
    print("False")
```
2. Que renverront les appels suivants ?

   ```python
   termine(function1, 7)
   termine(function1, 9)
   termine(function2, 7)
   termine(function2, 9)
   ```
   Justifier vos réponses.

3. On définit une fonction `test_sur_soi`.

   ```python
   def test_sur_soi(programme):
       if termine(programme, programme):
           while True: pass # boucle infinie
   ```
   Que se passe-t-il si on appelle `test_sur_soi` sur elle-même: `test_sur_soi(test_sur_soi)` ?