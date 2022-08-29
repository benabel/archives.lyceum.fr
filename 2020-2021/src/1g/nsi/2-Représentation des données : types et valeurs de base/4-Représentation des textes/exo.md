## Codages ASCII, Latin-1 et UTF-8

1. Donner la représentation binaire en ASCII du texte « Ne désire que ce que tu as. »
2. Trouver le texte représenté en ASCII binaire par la suite de bits
   `0100001100100111011001010111001101110100001000000110011001100001011000110110`
3. Traduire une phrase en ASCII binaire, puis la passer à son voisin pour qu'il la décode. Si vous
   n'avez pas de voisin utilisez: « Parler ne fait pas cuire le riz. »
4. Traduire une phrase en ASCII hexadécimal, puis la passer à son voisin qui la décode. . Si vous
   n'avez pas de voisin utilisez: « Lever la voix ne donne pas raison. » 
5. Recommencer en utilisant une phrase avec des accents que vous coderez en hexadécimal avec
   l'encodage `latin-1`(`ISO 8859-1`). Si vous n'avez pas de voisin utilisez: « Les excès tuent
   plus sûrement que les épées. »
6. Rédiger un paragraphe expliquant l’intérêt du codage `UTF-8`, ses avantages et ses
   inconvénients par rapport l‘`ASCII` ou au codage `ISO 8859-1`.

_Source_: [Informatique et sciences du numérique Spécialité ISN en terminale S -
Avec des exercices corrigés et des idées de projets par Gilles
Dowek](http://www.editions-eyrolles.com/Livre/9782212135435/)

## Encodage et décodage en Python

### Encodage

Tenter d'encoder la première phrase du texte avec python.

```python
phrase = "Grace Murray Hopper, née le 9 décembre 1906 à New York et morte le 1er janvier"
phrase.encode("utf-8")
```

1. Recommencer avec les encodages iso-8859-1 et iso-8859-11. Noter vos observations.
2. Montrer que le caractère € peut être encodé en utf-8, iso-8859-15, mais pas iso-8859-1.

### Décodage

Tenter de décoder quelques caractères de leur forme binaire _(héxadécimale)_ vers leur
représentation réelle.

```python
b'\xc3\xa9'.decode('utf-8')
```

1. Rechercher d'autres codes hexadécimaux de caractères utf-8 à décoder sur le site
   [unicode-table.com](https://unicode-table.com).
2. Rechercher des codes de caractères hexadécimaux `iso-8859-1` à décoder.

## Lecture et écriture de fichiers en python

### Lecture de fichier

Pour lire un fichier texte depuis Python, la syntaxe est la suivante:

```python
with open('file-utf-8.md') as f:
    read_data = f.read()
    print(read_data)
```

Dans ce cas, on lit le fichier sous forme de texte encodé (par défaut utf-8)

Mais si on a besoin, on peut aussi lire le texte sous forme de bits, en ajoutant un deuxième
argument à la fonction open (ici `"rb"` pour read bytes):

```python
with open('file-utf-8.md', 'rb') as f:
    read_data = f.read()
    print(read_data)
```

### Écriture de fichiers

Dans ce cas le deuxième argument est `"w"` pour _write_ ou `"wb"` pour _write bytes_.

```python
with open('file-from-python-utf-8.md', 'w') as f:
    f.write("À l'origine, ce fichier texte a été écrit depuis python")

# Vérification
with open('file-from-python-utf-8.md') as f:
    read_data = f.read()
    print(read_data)
```

1. En utilisant les fonctions vues, écrire un fichier texte depuis Python que vous encoderez d'abord
  en `utf-8`, puis en `iso-8859-15`.
2. Comparer les codes binaires des deux fichiers.
