## Gestion des erreurs

Annoter le code suivant en indiquant le type d'erreur parmi: `SyntaxError`,
`IndexError`, `NameError`, `IndentationError` et `TypeError`. Proposer dans
chaque cas une correction.

```python
réponse = int(input("Est-ce qu'il pleut? "))

if réponse == oui: 

   print("parapluie"[9])

elif réponse == "non":

print("pas de parapluie")

else réponse == "autre":

    print("Veuillez répondre par "oui" ou "non")

```

## Modules et tests

On veut écrire un module dans un fichier `carre_liste.py` contenant deux fonctions:

- `print_carre`: qui prend un paramètre `tab` de type `list` et qui affiche
  dans l'ordre le carré de chacun des éléments de la liste d'entrée.
- `map_carre`: qui prend un paramètre `tab` de type `list` et qui renvoie une nouvelle liste
  contenant dans l'ordre le carré de chacun des éléments de la liste d'entrée.

#. Écrire ce module en documentant à l'aide de `doctstring`s le module et les
deux fonctions.

#. Écrire ensuite un module de tests dans le fichier `test_carre_liste.py` qui importe une des
deux fonctions du fichier `carre_liste.py`, et qui la teste sur quelques
entrées particulières.

#. Pourquoi ne peut-on facilement tester qu'une des deux fonctions ?