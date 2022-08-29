---
"tags": ["python", "tableau de données", "format csv"]
---

::: programme
+----------------------+------------------------------------+-----------------------------------+
|       Contenus       |        Capacités attendues         |           Commentaires            |
+======================+====================================+===================================+
| Indexation de tables | Importer une table depuis un       | Est utilisé un tableau doublement |
|                      | fichier texte tabulé ou un fichier | indexé ou un tableau de p-uplets  |
|                      | CSV.                               | qui partagent les mêmes           |
|                      |                                    | descripteurs.                     |
+----------------------+------------------------------------+-----------------------------------+
| Recherche dans une   | Rechercher les lignes d’une        | La recherche de doublons, les     |
| table                | table vérifiant des critères       | tests de cohérence d’une table    |
|                      | exprimés en logique                | sont présentés.                   |
|                      | propositionnelle.                  |                                   |
+----------------------+------------------------------------+-----------------------------------+
:::

Avec l'augmentation des capacités de stockage, on sauvegarde de plus en plus de données en vue de le traiter ultérieurement afin de leur donner une valeur ajoutée.

> On appelle ainsi les données: "Le nouvel or noir" (*[Data, le nouvel or noir ?](https://www.inriality.fr/communication/data/donnees/data-le-nouvel-or/)*{.cite-source}).
    
Vous avez l'habitude d'utiliser un tableur pour traiter des tables de données, cependant, le problème de compatibilité des fichiers entre les divers logiciels de tableur fait que l'informaticien préfère d'autres formats plus interopérables. Notamment le csv `comma separated values`: valeurs séparées par des virgules.
    
Il s'agit d'un simple fichier texte dans lequel chaque ligne correspond à une entrée, et les colonnes sont séparées par des virgules.

Tous les logiciels de tableur et langages de programmation peuvent facilement lire ou écrire ces fichiers.

Voici l'exemple d'un fichier de notes généré par le logiciel Pronote.

```csv
Mentions,1/2j abs,Rang,Moyenne Générale,MATHEMATIQUES,PHYSIQUE-CHIMIE,NSI
Félicitations,3,1,17.4,15.3,15.5,18,18.5
Encouragements,5,1,10.1,8,10,15
```

On utilise parfois la tabulation comme séparateur pour une lecture plus aisée par l'homme, et ne pas être gêné par le fait que nous autres français utilisons la virgule comme séparateur décimal!

```tsv
Mentions	1/2j abs	Rang	Moyenne Générale	MATHEMATIQUES	PHYSIQUE-CHIMIE	NSI
Félicitations	3	1	17.4	15.3	15.5	18	18.5
Encouragements	5	1	10.1	8	10	15
```

## Lecture d'un fichier `csv` en Python

Python propose un module `csv` spécialisé.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
import csv

# Lecture sous forme de liste
with open('./data/notes.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row)
        
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    {'Nom': 'OBUQW', 'Mentions': 'Félicitations', '1/2j abs': '3', 'Rang': '1', 'Moyenne Générale': '17.4', 'MATHEMATIQUES': '18', 'PHYSIQUE-CHIMIE': '18.5', 'NSI': '17.7'}
    {'Nom': 'XYYVQ', 'Mentions': 'Félicitations', '1/2j abs': '5', 'Rang': '1', 'Moyenne Générale': '18.1', 'MATHEMATIQUES': '19.2', 'PHYSIQUE-CHIMIE': '18', 'NSI': '19'}
    {'Nom': 'SJOLY', 'Mentions': 'Félicitations', '1/2j abs': '', 'Rang': '1', 'Moyenne Générale': '18.2', 'MATHEMATIQUES': '19.2', 'PHYSIQUE-CHIMIE': '17', 'NSI': '19.1'}
    {'Nom': 'CAOZY', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '2', 'Moyenne Générale': '17', 'MATHEMATIQUES': '18.5', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '17.9'}
    {'Nom': 'NULRT', 'Mentions': 'Félicitations', '1/2j abs': '2', 'Rang': '2', 'Moyenne Générale': '17.6', 'MATHEMATIQUES': '17.8', 'PHYSIQUE-CHIMIE': '18.5', 'NSI': '17.5'}
    {'Nom': 'SATNL', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '2', 'Moyenne Générale': '17', 'MATHEMATIQUES': '17.5', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '18.6'}
    {'Nom': 'BXARC', 'Mentions': 'Félicitations', '1/2j abs': '15', 'Rang': '2', 'Moyenne Générale': '18.1', 'MATHEMATIQUES': '19.4', 'PHYSIQUE-CHIMIE': '19', 'NSI': '16.6'}
    {'Nom': 'UFXVM', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '3', 'Moyenne Générale': '17.6', 'MATHEMATIQUES': '18.6', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '16.5'}
    {'Nom': 'ASLZS', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '3', 'Moyenne Générale': '17.8', 'MATHEMATIQUES': '19.4', 'PHYSIQUE-CHIMIE': '19', 'NSI': '17.8'}
    {'Nom': 'PIGCD', 'Mentions': 'Félicitations', '1/2j abs': '9', 'Rang': '3', 'Moyenne Générale': '17.8', 'MATHEMATIQUES': '18.9', 'PHYSIQUE-CHIMIE': '20', 'NSI': '17.6'}
    {'Nom': 'NBQVQ', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '4', 'Moyenne Générale': '16.5', 'MATHEMATIQUES': '17.6', 'PHYSIQUE-CHIMIE': '16.5', 'NSI': '17.2'}
    {'Nom': 'IXHGB', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '17.4', 'Moyenne Générale': '17.3', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '17.9', 'NSI': '16'}
    {'Nom': 'HKYCU', 'Mentions': 'Félicitations', '1/2j abs': '2', 'Rang': '5', 'Moyenne Générale': '16.4', 'MATHEMATIQUES': '18.1', 'PHYSIQUE-CHIMIE': '17', 'NSI': '17.9'}
    {'Nom': 'XRZOA', 'Mentions': 'Félicitations', '1/2j abs': '9', 'Rang': '5', 'Moyenne Générale': '16.6', 'MATHEMATIQUES': '18.3', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '14.7'}
    {'Nom': 'SEXRW', 'Mentions': 'Félicitations', '1/2j abs': '16', 'Rang': '5', 'Moyenne Générale': '17.1', 'MATHEMATIQUES': '17.8', 'PHYSIQUE-CHIMIE': '16', 'NSI': '18.8'}
    {'Nom': 'FROXY', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '6', 'Moyenne Générale': '16.3', 'MATHEMATIQUES': '19.3', 'PHYSIQUE-CHIMIE': '17', 'NSI': '15'}
    {'Nom': 'MPBWD', 'Mentions': 'Félicitations', '1/2j abs': '7', 'Rang': '6', 'Moyenne Générale': '16.5', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '17', 'NSI': '16.7'}
    {'Nom': 'PAZCW', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '16.4', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '16.8', 'NSI': '13.5'}
    {'Nom': 'XOWON', 'Mentions': 'Félicitations', '1/2j abs': '3', 'Rang': '7', 'Moyenne Générale': '15.4', 'MATHEMATIQUES': '15.2', 'PHYSIQUE-CHIMIE': '16', 'NSI': '16.4'}
    {'Nom': 'XSXJX', 'Mentions': 'Félicitations', '1/2j abs': '8', 'Rang': '7', 'Moyenne Générale': '15.4', 'MATHEMATIQUES': '16.2', 'PHYSIQUE-CHIMIE': '12.5', 'NSI': '16.6'}
    {'Nom': 'RRWVF', 'Mentions': 'Félicitations', '1/2j abs': '12', 'Rang': '7', 'Moyenne Générale': '15.5', 'MATHEMATIQUES': '14.4', 'PHYSIQUE-CHIMIE': '15', 'NSI': '16.4'}
    {'Nom': 'VFQIV', 'Mentions': 'Félicitations', '1/2j abs': '11', 'Rang': '8', 'Moyenne Générale': '14.5', 'MATHEMATIQUES': '14.4', 'PHYSIQUE-CHIMIE': '13', 'NSI': '10.3'}
    {'Nom': 'WGLOT', 'Mentions': 'Compliments', '1/2j abs': '8', 'Rang': '14', 'Moyenne Générale': '12', 'MATHEMATIQUES': '16', 'PHYSIQUE-CHIMIE': '11.8', 'NSI': '13.5'}
    {'Nom': 'YPSAM', 'Mentions': 'Félicitations', '1/2j abs': '8', 'Rang': '14.6', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '14.5', 'PHYSIQUE-CHIMIE': '14.5', 'NSI': '19'}
    {'Nom': 'AYFHQ', 'Mentions': 'Compliments', '1/2j abs': '2', 'Rang': '9', 'Moyenne Générale': '13.9', 'MATHEMATIQUES': '13.5', 'PHYSIQUE-CHIMIE': '13.5', 'NSI': '14.2'}
    {'Nom': 'QCTQB', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '9', 'Moyenne Générale': '14.4', 'MATHEMATIQUES': '14.1', 'PHYSIQUE-CHIMIE': '11', 'NSI': '11.1'}
    {'Nom': 'MXVIJ', 'Mentions': 'Compliments', '1/2j abs': '8', 'Rang': '9', 'Moyenne Générale': '13.7', 'MATHEMATIQUES': '13', 'PHYSIQUE-CHIMIE': '12', 'NSI': '11.2'}
    {'Nom': 'UQAYM', 'Mentions': 'Compliments', '1/2j abs': '2', 'Rang': '10', 'Moyenne Générale': '13.9', 'MATHEMATIQUES': '14', 'PHYSIQUE-CHIMIE': '11', 'NSI': '14.8'}
    {'Nom': 'TFIAB', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '10', 'Moyenne Générale': '13.6', 'MATHEMATIQUES': '14.2', 'PHYSIQUE-CHIMIE': '13', 'NSI': '13.3'}
    {'Nom': 'NHLZR', 'Mentions': 'Compliments', '1/2j abs': '14', 'Rang': '10', 'Moyenne Générale': '13.9', 'MATHEMATIQUES': '13.7', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '15.4'}
    {'Nom': 'XPVXR', 'Mentions': 'Compliments', '1/2j abs': '10', 'Rang': '13.9', 'Moyenne Générale': '11', 'MATHEMATIQUES': '14', 'PHYSIQUE-CHIMIE': '14.2', 'NSI': '19.5'}
    {'Nom': 'OLQBO', 'Mentions': 'Félicitations', '1/2j abs': '14', 'Rang': '11', 'Moyenne Générale': '13.5', 'MATHEMATIQUES': '12.8', 'PHYSIQUE-CHIMIE': '13', 'NSI': '11.2'}
    {'Nom': 'CUTBU', 'Mentions': 'Compliments', '1/2j abs': '11', 'Rang': '13.6', 'Moyenne Générale': '12.3', 'MATHEMATIQUES': '11.5', 'PHYSIQUE-CHIMIE': '13.6', 'NSI': '14.5'}
    {'Nom': 'SQVNH', 'Mentions': 'Pas de mention', '1/2j abs': '2', 'Rang': '12', 'Moyenne Générale': '13.8', 'MATHEMATIQUES': '15', 'PHYSIQUE-CHIMIE': '16', 'NSI': '12.4'}
    {'Nom': 'TVMRA', 'Mentions': 'Pas de mention', '1/2j abs': '65', 'Rang': '12', 'Moyenne Générale': '13.5', 'MATHEMATIQUES': '8', 'PHYSIQUE-CHIMIE': '', 'NSI': '18'}
    {'Nom': 'KTBYW', 'Mentions': 'Compliments', '1/2j abs': '12', 'Rang': '13.5', 'Moyenne Générale': '12.7', 'MATHEMATIQUES': '12.5', 'PHYSIQUE-CHIMIE': '13.9', 'NSI': '14'}
    {'Nom': 'VGANB', 'Mentions': 'Compliments', '1/2j abs': '2', 'Rang': '13', 'Moyenne Générale': '13.5', 'MATHEMATIQUES': '13.3', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '15.7'}
    {'Nom': 'MXRPG', 'Mentions': 'Pas de mention', '1/2j abs': '7', 'Rang': '13', 'Moyenne Générale': '13.4', 'MATHEMATIQUES': '15.8', 'PHYSIQUE-CHIMIE': '15', 'NSI': '11.1'}
    {'Nom': 'CPIZF', 'Mentions': 'Compliments', '1/2j abs': '13', 'Rang': '13.4', 'Moyenne Générale': '15', 'MATHEMATIQUES': '12.5', 'PHYSIQUE-CHIMIE': '12.6', 'NSI': '14.5'}
    {'Nom': 'ZWSPZ', 'Mentions': 'Compliments', '1/2j abs': '3', 'Rang': '14', 'Moyenne Générale': '13.5', 'MATHEMATIQUES': '11.3', 'PHYSIQUE-CHIMIE': '9', 'NSI': '17'}
    {'Nom': 'UVLPZ', 'Mentions': 'Compliments', '1/2j abs': '', 'Rang': '14', 'Moyenne Générale': '12.9', 'MATHEMATIQUES': '12.4', 'PHYSIQUE-CHIMIE': '8', 'NSI': '10.1'}
    {'Nom': 'VZWHE', 'Mentions': 'Compliments', '1/2j abs': '14', 'Rang': '13.1', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '12', 'PHYSIQUE-CHIMIE': '12.6', 'NSI': '20'}
    {'Nom': 'FVEWG', 'Mentions': 'Compliments', '1/2j abs': '1', 'Rang': '15', 'Moyenne Générale': '13', 'MATHEMATIQUES': '14.2', 'PHYSIQUE-CHIMIE': '12.5', 'NSI': '11.1'}
    {'Nom': 'OYQHD', 'Mentions': 'Compliments', '1/2j abs': '4', 'Rang': '15', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '12.7', 'PHYSIQUE-CHIMIE': '13.5', 'NSI': '10'}
    {'Nom': 'HAUAK', 'Mentions': 'Pas de mention', '1/2j abs': '', 'Rang': '15', 'Moyenne Générale': '12.8', 'MATHEMATIQUES': '16', 'PHYSIQUE-CHIMIE': '15', 'NSI': '7.1'}
    {'Nom': 'LYHYD', 'Mentions': 'Compliments', '1/2j abs': '2', 'Rang': '16', 'Moyenne Générale': '13.2', 'MATHEMATIQUES': '13.3', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '13.1'}
    {'Nom': 'QAKEG', 'Mentions': 'Compliments', '1/2j abs': '5', 'Rang': '16', 'Moyenne Générale': '12.9', 'MATHEMATIQUES': '11.1', 'PHYSIQUE-CHIMIE': '11', 'NSI': '13.3'}
    {'Nom': 'FFHOD', 'Mentions': "Mise en garde pour l'assiduité", '1/2j abs': '25', 'Rang': '16', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '10.5', 'PHYSIQUE-CHIMIE': '13', 'NSI': '13.9'}
    {'Nom': 'KBYPL', 'Mentions': 'Pas de mention', '1/2j abs': '3', 'Rang': '17', 'Moyenne Générale': '12.8', 'MATHEMATIQUES': '12.9', 'PHYSIQUE-CHIMIE': '14', 'NSI': '14.3'}
    {'Nom': 'VBNMW', 'Mentions': 'Compliments', '1/2j abs': '4', 'Rang': '17', 'Moyenne Générale': '13', 'MATHEMATIQUES': '12.6', 'PHYSIQUE-CHIMIE': '11', 'NSI': '13.7'}
    {'Nom': 'BQDCH', 'Mentions': 'Compliments', '1/2j abs': '17', 'Rang': '17', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '10.7', 'PHYSIQUE-CHIMIE': '8', 'NSI': '13.2'}
    {'Nom': 'IPKWS', 'Mentions': 'Compliments', '1/2j abs': '17', 'Rang': '18', 'Moyenne Générale': '12.5', 'MATHEMATIQUES': '11.4', 'PHYSIQUE-CHIMIE': '12', 'NSI': '10.5'}
    {'Nom': 'PKXYT', 'Mentions': 'Pas de mention', '1/2j abs': '33', 'Rang': '18', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '7.7', 'PHYSIQUE-CHIMIE': '12', 'NSI': '14.3'}
    {'Nom': 'PCEPU', 'Mentions': 'Pas de mention', '1/2j abs': '46', 'Rang': '18', 'Moyenne Générale': '12.9', 'MATHEMATIQUES': '8.2', 'PHYSIQUE-CHIMIE': '', 'NSI': '14.2'}
    {'Nom': 'OFUTJ', 'Mentions': 'Compliments', '1/2j abs': '6', 'Rang': '19', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '10.8', 'PHYSIQUE-CHIMIE': '10.5', 'NSI': '12.5'}
    {'Nom': 'MFPNQ', 'Mentions': 'Encouragements', '1/2j abs': '7', 'Rang': '19', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '12', 'PHYSIQUE-CHIMIE': '12.5', 'NSI': '11.2'}
    {'Nom': 'YLDOS', 'Mentions': 'Encouragements', '1/2j abs': '21', 'Rang': '19', 'Moyenne Générale': '12.2', 'MATHEMATIQUES': '14', 'PHYSIQUE-CHIMIE': '14', 'NSI': '9.5'}
    {'Nom': 'REAJE', 'Mentions': 'Encouragements', '1/2j abs': '4', 'Rang': '20', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '14.2', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '13.7'}
    {'Nom': 'DRHQA', 'Mentions': 'Encouragements', '1/2j abs': '4', 'Rang': '20', 'Moyenne Générale': '12.5', 'MATHEMATIQUES': '10.6', 'PHYSIQUE-CHIMIE': '10', 'NSI': '12.3'}
    {'Nom': 'UOZMK', 'Mentions': 'Encouragements', '1/2j abs': '16', 'Rang': '20', 'Moyenne Générale': '12.1', 'MATHEMATIQUES': '12.4', 'PHYSIQUE-CHIMIE': '9', 'NSI': '11'}
    {'Nom': 'YEXND', 'Mentions': 'Encouragements', '1/2j abs': '3', 'Rang': '21', 'Moyenne Générale': '12.6', 'MATHEMATIQUES': '13.2', 'PHYSIQUE-CHIMIE': '14.5', 'NSI': '13'}
    {'Nom': 'XVEXG', 'Mentions': 'Encouragements', '1/2j abs': '6', 'Rang': '21', 'Moyenne Générale': '12.2', 'MATHEMATIQUES': '11.1', 'PHYSIQUE-CHIMIE': '10', 'NSI': '14.4'}
    {'Nom': 'IXVPT', 'Mentions': 'Pas de mention', '1/2j abs': '9', 'Rang': '21', 'Moyenne Générale': '11.6', 'MATHEMATIQUES': '13.1', 'PHYSIQUE-CHIMIE': '8', 'NSI': '10'}
    {'Nom': 'MNSTZ', 'Mentions': 'Pas de mention', '1/2j abs': '18', 'Rang': '22', 'Moyenne Générale': '11.8', 'MATHEMATIQUES': '12.8', 'PHYSIQUE-CHIMIE': '10.5', 'NSI': '12.8'}
    {'Nom': 'MGZUB', 'Mentions': 'Pas de mention', '1/2j abs': '32', 'Rang': '22', 'Moyenne Générale': '11.3', 'MATHEMATIQUES': '12.2', 'PHYSIQUE-CHIMIE': '10', 'NSI': '11'}
    {'Nom': 'FIECN', 'Mentions': 'Encouragements', '1/2j abs': '5', 'Rang': '23', 'Moyenne Générale': '12.4', 'MATHEMATIQUES': '11.8', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '10.7'}
    {'Nom': 'WQNGX', 'Mentions': 'Pas de mention', '1/2j abs': '9', 'Rang': '23', 'Moyenne Générale': '11.4', 'MATHEMATIQUES': '11.4', 'PHYSIQUE-CHIMIE': '12', 'NSI': '9.6'}
    {'Nom': 'RYILJ', 'Mentions': 'Pas de mention', '1/2j abs': '37', 'Rang': '23', 'Moyenne Générale': '11.3', 'MATHEMATIQUES': '16.9', 'PHYSIQUE-CHIMIE': '10', 'NSI': '6.4'}
    {'Nom': 'HIURK', 'Mentions': 'Encouragements', '1/2j abs': '2', 'Rang': '24', 'Moyenne Générale': '12.3', 'MATHEMATIQUES': '12.4', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '12'}
    {'Nom': 'MDTVZ', 'Mentions': 'Encouragements', '1/2j abs': '7', 'Rang': '24', 'Moyenne Générale': '11', 'MATHEMATIQUES': '10.8', 'PHYSIQUE-CHIMIE': '11', 'NSI': '11.7'}
    {'Nom': 'ORETO', 'Mentions': 'Pas de mention', '1/2j abs': '9', 'Rang': '24', 'Moyenne Générale': '11.3', 'MATHEMATIQUES': '9.2', 'PHYSIQUE-CHIMIE': '9.5', 'NSI': '12.6'}
    {'Nom': 'BZQWB', 'Mentions': 'Pas de mention', '1/2j abs': '1', 'Rang': '25', 'Moyenne Générale': '10.7', 'MATHEMATIQUES': '9.5', 'PHYSIQUE-CHIMIE': '11.5', 'NSI': '13.1'}
    {'Nom': 'WCSQK', 'Mentions': 'Encouragements', '1/2j abs': '2', 'Rang': '25', 'Moyenne Générale': '11.5', 'MATHEMATIQUES': '11', 'PHYSIQUE-CHIMIE': '11', 'NSI': '12.9'}
    {'Nom': 'JAHMU', 'Mentions': 'Encouragements', '1/2j abs': '6', 'Rang': '25', 'Moyenne Générale': '10.9', 'MATHEMATIQUES': '11.6', 'PHYSIQUE-CHIMIE': '10', 'NSI': '8.8'}
    {'Nom': 'OEVTI', 'Mentions': 'Pas de mention', '1/2j abs': '9', 'Rang': '26', 'Moyenne Générale': '11.2', 'MATHEMATIQUES': '13.8', 'PHYSIQUE-CHIMIE': '12', 'NSI': '8.9'}
    {'Nom': 'LZGJO', 'Mentions': 'Encouragements', '1/2j abs': '13', 'Rang': '26', 'Moyenne Générale': '10.6', 'MATHEMATIQUES': '9.2', 'PHYSIQUE-CHIMIE': '8', 'NSI': '11'}
    {'Nom': 'IASDL', 'Mentions': 'Encouragements', '1/2j abs': '23', 'Rang': '26', 'Moyenne Générale': '10.5', 'MATHEMATIQUES': '11.6', 'PHYSIQUE-CHIMIE': '10', 'NSI': '12.6'}
    {'Nom': 'DAQYJ', 'Mentions': 'Encouragements', '1/2j abs': '2', 'Rang': '27', 'Moyenne Générale': '10.4', 'MATHEMATIQUES': '9.8', 'PHYSIQUE-CHIMIE': '8', 'NSI': '12.6'}
    {'Nom': 'IJNTU', 'Mentions': 'Pas de mention', '1/2j abs': '14', 'Rang': '27', 'Moyenne Générale': '10.5', 'MATHEMATIQUES': '10.7', 'PHYSIQUE-CHIMIE': '9', 'NSI': '11.6'}
    {'Nom': 'SRXZR', 'Mentions': 'Encouragements', '1/2j abs': '27', 'Rang': '11', 'Moyenne Générale': '9.7', 'MATHEMATIQUES': '10.5', 'PHYSIQUE-CHIMIE': '9.2', 'NSI': '12.5'}
    {'Nom': 'NGKWD', 'Mentions': 'Encouragements', '1/2j abs': '11', 'Rang': '28', 'Moyenne Générale': '9.9', 'MATHEMATIQUES': '10.2', 'PHYSIQUE-CHIMIE': '4', 'NSI': '9'}
    {'Nom': 'NCEFS', 'Mentions': 'Pas de mention', '1/2j abs': '17', 'Rang': '28', 'Moyenne Générale': '10.6', 'MATHEMATIQUES': '11.8', 'PHYSIQUE-CHIMIE': '8', 'NSI': '13.3'}
    {'Nom': 'WWOLI', 'Mentions': 'Encouragements', '1/2j abs': '21', 'Rang': '28', 'Moyenne Générale': '10.4', 'MATHEMATIQUES': '7', 'PHYSIQUE-CHIMIE': '6.5', 'NSI': '12.7'}
    {'Nom': 'DUIOL', 'Mentions': 'Pas de mention', '1/2j abs': '28', 'Rang': '28', 'Moyenne Générale': '9.9', 'MATHEMATIQUES': '11.3', 'PHYSIQUE-CHIMIE': '5', 'NSI': '8.5'}
    {'Nom': 'TKYOU', 'Mentions': 'Encouragements', '1/2j abs': '3', 'Rang': '29', 'Moyenne Générale': '10.5', 'MATHEMATIQUES': '7.9', 'PHYSIQUE-CHIMIE': '8.5', 'NSI': '10.4'}
    {'Nom': 'MIRZQ', 'Mentions': 'Encouragements', '1/2j abs': '3', 'Rang': '29', 'Moyenne Générale': '10.2', 'MATHEMATIQUES': '9.4', 'PHYSIQUE-CHIMIE': '7', 'NSI': '10'}
    {'Nom': 'UABBU', 'Mentions': 'Pas de mention', '1/2j abs': '24', 'Rang': '29', 'Moyenne Générale': '10.2', 'MATHEMATIQUES': '9.2', 'PHYSIQUE-CHIMIE': '6', 'NSI': '10.9'}
    {'Nom': 'HHXEY', 'Mentions': 'Pas de mention', '1/2j abs': '25', 'Rang': '30', 'Moyenne Générale': '10', 'MATHEMATIQUES': '5.2', 'PHYSIQUE-CHIMIE': '10', 'NSI': '11.6'}
    {'Nom': 'BZNHD', 'Mentions': 'Pas de mention', '1/2j abs': '28', 'Rang': '30', 'Moyenne Générale': '9.4', 'MATHEMATIQUES': '11', 'PHYSIQUE-CHIMIE': '11', 'NSI': '9.4'}
    {'Nom': 'VQQKZ', 'Mentions': 'Encouragements', '1/2j abs': '2', 'Rang': '31', 'Moyenne Générale': '10.1', 'MATHEMATIQUES': '9.2', 'PHYSIQUE-CHIMIE': '10', 'NSI': '10.2'}
    {'Nom': 'WEDTR', 'Mentions': 'Pas de mention', '1/2j abs': '4', 'Rang': '31', 'Moyenne Générale': '9.5', 'MATHEMATIQUES': '8.7', 'PHYSIQUE-CHIMIE': '13.5', 'NSI': '8.1'}
    {'Nom': 'UCVFC', 'Mentions': 'Encouragements', '1/2j abs': '12', 'Rang': '31', 'Moyenne Générale': '9', 'MATHEMATIQUES': '8.2', 'PHYSIQUE-CHIMIE': '8', 'NSI': '8.7'}
    {'Nom': 'BFQTB', 'Mentions': 'Pas de mention', '1/2j abs': '14', 'Rang': '32', 'Moyenne Générale': '9.4', 'MATHEMATIQUES': '11.8', 'PHYSIQUE-CHIMIE': '10', 'NSI': '5.7'}
    {'Nom': 'JICPK', 'Mentions': 'Pas de mention', '1/2j abs': '49', 'Rang': '32', 'Moyenne Générale': '7.7', 'MATHEMATIQUES': '11.6', 'PHYSIQUE-CHIMIE': '9', 'NSI': '1.5'}
    {'Nom': 'MCGET', 'Mentions': 'Pas de mention', '1/2j abs': '32', 'Rang': '9', 'Moyenne Générale': '12.3', 'MATHEMATIQUES': '7.5', 'PHYSIQUE-CHIMIE': '10.3', 'NSI': '11'}
    {'Nom': 'CQSFR', 'Mentions': 'Pas de mention', '1/2j abs': '33', 'Rang': '9', 'Moyenne Générale': '11.7', 'MATHEMATIQUES': '8', 'PHYSIQUE-CHIMIE': '8.8', 'NSI': '14.5'}


</div>

-----

## Recherche de lignes

Recherchons les élèves qui ont les félicitations.

------

<div class="card text-white bg-gradient-dark">
<div class="card-header"><small class="text-muted">Entrée</small></div>

```python
# Lecture sous forme de liste
with open('./data/notes.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        if row["Mentions"] == 'Félicitations':
            print(row)
```

</div>

<div class="card text-white bg-gradient-light stream-output">
<div class="card-header"><small class="text-muted">Sortie</small></div>

    {'Nom': 'OBUQW', 'Mentions': 'Félicitations', '1/2j abs': '3', 'Rang': '1', 'Moyenne Générale': '17.4', 'MATHEMATIQUES': '18', 'PHYSIQUE-CHIMIE': '18.5', 'NSI': '17.7'}
    {'Nom': 'XYYVQ', 'Mentions': 'Félicitations', '1/2j abs': '5', 'Rang': '1', 'Moyenne Générale': '18.1', 'MATHEMATIQUES': '19.2', 'PHYSIQUE-CHIMIE': '18', 'NSI': '19'}
    {'Nom': 'SJOLY', 'Mentions': 'Félicitations', '1/2j abs': '', 'Rang': '1', 'Moyenne Générale': '18.2', 'MATHEMATIQUES': '19.2', 'PHYSIQUE-CHIMIE': '17', 'NSI': '19.1'}
    {'Nom': 'CAOZY', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '2', 'Moyenne Générale': '17', 'MATHEMATIQUES': '18.5', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '17.9'}
    {'Nom': 'NULRT', 'Mentions': 'Félicitations', '1/2j abs': '2', 'Rang': '2', 'Moyenne Générale': '17.6', 'MATHEMATIQUES': '17.8', 'PHYSIQUE-CHIMIE': '18.5', 'NSI': '17.5'}
    {'Nom': 'SATNL', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '2', 'Moyenne Générale': '17', 'MATHEMATIQUES': '17.5', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '18.6'}
    {'Nom': 'BXARC', 'Mentions': 'Félicitations', '1/2j abs': '15', 'Rang': '2', 'Moyenne Générale': '18.1', 'MATHEMATIQUES': '19.4', 'PHYSIQUE-CHIMIE': '19', 'NSI': '16.6'}
    {'Nom': 'UFXVM', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '3', 'Moyenne Générale': '17.6', 'MATHEMATIQUES': '18.6', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '16.5'}
    {'Nom': 'ASLZS', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '3', 'Moyenne Générale': '17.8', 'MATHEMATIQUES': '19.4', 'PHYSIQUE-CHIMIE': '19', 'NSI': '17.8'}
    {'Nom': 'PIGCD', 'Mentions': 'Félicitations', '1/2j abs': '9', 'Rang': '3', 'Moyenne Générale': '17.8', 'MATHEMATIQUES': '18.9', 'PHYSIQUE-CHIMIE': '20', 'NSI': '17.6'}
    {'Nom': 'NBQVQ', 'Mentions': 'Félicitations', '1/2j abs': '1', 'Rang': '4', 'Moyenne Générale': '16.5', 'MATHEMATIQUES': '17.6', 'PHYSIQUE-CHIMIE': '16.5', 'NSI': '17.2'}
    {'Nom': 'IXHGB', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '17.4', 'Moyenne Générale': '17.3', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '17.9', 'NSI': '16'}
    {'Nom': 'HKYCU', 'Mentions': 'Félicitations', '1/2j abs': '2', 'Rang': '5', 'Moyenne Générale': '16.4', 'MATHEMATIQUES': '18.1', 'PHYSIQUE-CHIMIE': '17', 'NSI': '17.9'}
    {'Nom': 'XRZOA', 'Mentions': 'Félicitations', '1/2j abs': '9', 'Rang': '5', 'Moyenne Générale': '16.6', 'MATHEMATIQUES': '18.3', 'PHYSIQUE-CHIMIE': '17.5', 'NSI': '14.7'}
    {'Nom': 'SEXRW', 'Mentions': 'Félicitations', '1/2j abs': '16', 'Rang': '5', 'Moyenne Générale': '17.1', 'MATHEMATIQUES': '17.8', 'PHYSIQUE-CHIMIE': '16', 'NSI': '18.8'}
    {'Nom': 'FROXY', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '6', 'Moyenne Générale': '16.3', 'MATHEMATIQUES': '19.3', 'PHYSIQUE-CHIMIE': '17', 'NSI': '15'}
    {'Nom': 'MPBWD', 'Mentions': 'Félicitations', '1/2j abs': '7', 'Rang': '6', 'Moyenne Générale': '16.5', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '17', 'NSI': '16.7'}
    {'Nom': 'PAZCW', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '16.4', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '17', 'PHYSIQUE-CHIMIE': '16.8', 'NSI': '13.5'}
    {'Nom': 'XOWON', 'Mentions': 'Félicitations', '1/2j abs': '3', 'Rang': '7', 'Moyenne Générale': '15.4', 'MATHEMATIQUES': '15.2', 'PHYSIQUE-CHIMIE': '16', 'NSI': '16.4'}
    {'Nom': 'XSXJX', 'Mentions': 'Félicitations', '1/2j abs': '8', 'Rang': '7', 'Moyenne Générale': '15.4', 'MATHEMATIQUES': '16.2', 'PHYSIQUE-CHIMIE': '12.5', 'NSI': '16.6'}
    {'Nom': 'RRWVF', 'Mentions': 'Félicitations', '1/2j abs': '12', 'Rang': '7', 'Moyenne Générale': '15.5', 'MATHEMATIQUES': '14.4', 'PHYSIQUE-CHIMIE': '15', 'NSI': '16.4'}
    {'Nom': 'VFQIV', 'Mentions': 'Félicitations', '1/2j abs': '11', 'Rang': '8', 'Moyenne Générale': '14.5', 'MATHEMATIQUES': '14.4', 'PHYSIQUE-CHIMIE': '13', 'NSI': '10.3'}
    {'Nom': 'YPSAM', 'Mentions': 'Félicitations', '1/2j abs': '8', 'Rang': '14.6', 'Moyenne Générale': '13.3', 'MATHEMATIQUES': '14.5', 'PHYSIQUE-CHIMIE': '14.5', 'NSI': '19'}
    {'Nom': 'QCTQB', 'Mentions': 'Félicitations', '1/2j abs': '6', 'Rang': '9', 'Moyenne Générale': '14.4', 'MATHEMATIQUES': '14.1', 'PHYSIQUE-CHIMIE': '11', 'NSI': '11.1'}
    {'Nom': 'TFIAB', 'Mentions': 'Félicitations', '1/2j abs': '4', 'Rang': '10', 'Moyenne Générale': '13.6', 'MATHEMATIQUES': '14.2', 'PHYSIQUE-CHIMIE': '13', 'NSI': '13.3'}
    {'Nom': 'OLQBO', 'Mentions': 'Félicitations', '1/2j abs': '14', 'Rang': '11', 'Moyenne Générale': '13.5', 'MATHEMATIQUES': '12.8', 'PHYSIQUE-CHIMIE': '13', 'NSI': '11.2'}


</div>

-----

<!--
## Recherche de doublons

TODO

## Test de cohérence d'une table

TODO
-->
