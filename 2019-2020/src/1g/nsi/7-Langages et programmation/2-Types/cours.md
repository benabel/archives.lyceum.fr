---
tags: ['python', 'variable', 'type']
---

::: programme
+------------------------+---------------------------------+-----------------------------------+
|        Contenus        |       Capacités attendues       |           Commentaires            |
+========================+=================================+===================================+
| Constructions          | Mettre en évidence un corpus    | Séquences, affectation,           |
| élémentaires           | de constructions élémentaires.  | conditionnelles, boucles bornées, |
|                        | boucles non bornées, appels de  |                                   |
|                        | fonction.                       |                                   |
+------------------------+---------------------------------+-----------------------------------+
:::

Dans un programme informatique, on manipule des données sur lesquelles on effectue des calculs.

Lorsqu'un langage traite des données, celles-ci sont codées sous forme binaire, et le langage doit
savoir à quel type de valeur correspond ce codage binaire.

Par exemple, le code binaire `0100 0001` sur un octet peut désigner:

- le nombre **65** s'il s'agit d'un entier non signé(entier positif).
- la lettre **A** s'il s'agit d'un caractère(en codage ASCII).

En fonction du type d'objet (ou de donnée), on peut appliquer certaines opérations et d'autres non.

## Quelques types d'objets simples

Voici quelques types d'objets simples:

- `int`: _integer_ en anglais représentent les **entiers**. ex: `3`
- `float`: _floating point_ en anglais représentent les **réels**. ex: `3.14`
- `str`: _string_ en anglais représentent les **chaînes de caractères**. ex: `"Bonjour!"`
- `bool`: _booleans_ en anglais représentent les **booléens**. Il ne peuvent avoir que deux valeurs: `True` ou `False` (Vrai ou faux)

::: {.plus titre="`NoneType`"}
Il peut être parfois de vider une case mémoire de son contenu, on utilise
alors la valeur `None` qui a pour type  `NoneType` _sans type_ en anglais.
:::

## Comment connaître le type d'un objet ?

Pour connaître le type d'un objet on peut utiliser la fonction `type()` de Python:

```python
>>> type(3)
<class 'int'>
>>> type(3.14)
<class 'float'>
>>> type("Toto")
<class 'str'>
```

## Changer le type d'un objet

Il est possible de modifier le type d'un objet en utilisant des fonctions Python, en anglais on
appelle ça le _casting_.

### Convertir en chaîne de caractère `str()`

```python
>>> str(5)
'5'
```

Comme vous le voyez la présence de guillemets indique qu'il s'agit d'une
chaîne de caractères.

En Python, on peut utiliser indifféremment les simples `'` et doubles
guillemets `"`.

### Convertir un entier en réel: `float()`

```python
>>> float(5)
5.0
```

### Convertir un réel en entier: `int()` et `round()`

```python
>>> int(3.95)
3
```

Comme vous le voyez on a conservé que la partie entière du nombre, mais on a pas effectué un arrondi, si on souhaite faire un arrondi il faut utiliser la fonction `round`.

```python
>>> round(3.49)
3
>>> round(3.5)
4
```

::: {.plus titre=" Typage dynamique"}
Les langages étudiés cette année sont dynamiques, c'est à dire que l'on
peut changer le type des valeurs et variables. Il n'est de plus pas nécessaire de déclarer le type
de variable avant leur utilisation ce qui rend le programme plus court et simple.
:::

## Combiner des objets avec des opérations

Lorsque l'on combine des objets avec des opérations on crée ce que l'on appelle une **expression**, si la syntaxe de votre expression est correcte, **elle retourne une valeur** qui a comme tout objet un type.

La syntaxe est de la forme:

```python
<objet> <opérateur> <objet>
```

Par exemple:

```python
>>> 3 + 2
5
>>> 3.0 + 2
5.0
```
Comme vous le voyez l'**expression retourne une valeur dont le type dépend du type de données**.

C'est encore plus étonnant avec les chaînes de caractères:

```python
>>> "TO" + "TO"
"TOTO"
>>> "TO" * 2
"TOTO"
```

Voici les opérations à connaître:

- addition: `+`
- soustraction: `-`
- multiplication: `*`
- division: `/`
- division entière: `//`
- modulo: `%`
- puissance: `**`

::: prop
**Ordre de priorité des opérateurs**( dite règle PEMDAS):

Parenthèses > Exposants > Multiplication > Division > Addition > Soustraction
:::

