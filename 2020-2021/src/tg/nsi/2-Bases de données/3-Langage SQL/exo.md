## QCU

1. Comment traduire `SQL` en français ?

   - [ ] `Langage de question fort`
   - [ ] `Langage de requête structuré`
   - [ ] `Langage de question structuré`

2. Quelle instruction SQL est utilisée pour _lire_ des données d'une base de données?

   - [ ] `GET`
   - [ ] `FIND`
   - [ ] `OPEN`
   - [ ] `SELECT`

3. Quelle instruction SQL est utilisée pour _mettre à jour_ les données dans une base de données?

   - [ ] `SAVE`
   - [ ] `APPEND`
   - [ ] `MODIFY`
   - [ ] `UPDATE`

4. Quelle instruction SQL est utilisée pour _supprimer_ des données d'une base de données?

   - [ ] `DEL`
   - [ ] `REMOVE`
   - [ ] `DELETE`
   - [ ] `POP`

5. Quelle instruction SQL est utilisée pour _insérer_ de nouvelles données dans une base de
   données?

   - [ ] `ADD`
   - [ ] `INSERT`
   - [ ] `RECORD`
   - [ ] `APPEND`

6. Avec SQL, comment sélectionner _tous_ les attributs d'une relation nommée `Personnes`?

   - [ ] `SELECT Personnes;`
   - [ ] `SELECT ALL FROM Persones;`
   - [ ] `SELECT * FROM Persones;`
   - [ ] `SELECT *.Personnes;`

7. Avec SQL, comment sélectionnez-vous tous les enregistrements d'une relation nommée `Personnes`
   où
   la valeur de l'attribut `prenom` est `"Toto"`?

   - [ ] `SELECT * FROM Personnes WHERE prenom='Toto';`
   - [ ] `SELECT [all] FROM Personnes WHERE prenom LIKE 'Toto';`
   - [ ] `SELECT [all] FROM Personnes WHERE prenom="Toto";`
   - [ ] `SELECT * Personnes WHERE prenom="Toto";`

8. Quelle instruction SQL est utilisée pour renvoyer uniquement des valeurs différentes?

   - [ ] `SELECT DISTINCT`
   - [ ] `SELECT UNIQUE`
   - [ ] `SELECT DIFFERENT`

9. Quel mot-clé SQL est utilisé pour trier l'ensemble de résultats?

   - [ ] `SORT BY`
   - [ ] `SORT`
   - [ ] `ORDER BY`
   - [ ] `ORDER`

10. Avec `SQL`, comment insérer un nouvel enregistrement dans la relation `Personnes`?

    - [ ] `INSERT INTO Personnes VALUES ('Jimi', 'Hendrix');`
    - [ ] `INSERT VALUES ('Jimi', 'Hendrix') INTO Personnes;`
    - [ ] `INSERT ('Jimi', ‘Hendrix’) INTO Personnes;`

11. Comment pouvez-vous changer "Dujardin" en "Desjardins" dans l'attribut "nom" de la relation
    `Personnes`?

    - [ ] `MODIFY Personnes SET nom='Dujardin' INTO nom='Desjardins';`
    - [ ] `MODIFY Personnes SET nom='Dujardin' WHERE nom='Desjardins';`
    - [ ] `UPDATE Personnes SET nom='Desjardins' WHERE nom='Dujardin';`
    - [ ] `UPDATE Personnes SET nom='Desjardins' INTO nom='Dujardin';`

12. Avec SQL, comment pouvez-vous supprimer les enregistrements où le `prenom` est `Donald` dans
    la relation `personnes`?

    - [ ] `DELETE ROW prenom="Donald" FROM Personnes;`
    - [ ] `DELETE FROM Personnes WHERE prenom = 'Donald';`
    - [ ] `DELETE prenom="Donald" FROM Personnes;`

## Enquête en ligne (et en anglais)

Résolvez l'enquête du meurtre de SQL City. Pour accéder à cette enquête, il existe diverses
possibilités:

- Version interactive en html: <http://mystery.knightlab.com>
- Fichiers dont la base de données sqlite sur github: <https://github.com/NUKnightLab/sql-mysteries>
- Version interactive sur repl.it: <https://repl.it/@ToniScullion1/Silver-TASK-2-SQL-Murder-Mystery#actvity.md>

## TP du Cnam sur les requêtes

Un TP en ligne avec correction est proposé par le CNAM et vous permet de vous entraîner sur 4 jeux
de données: <http://deptfod.cnam.fr/bd/tp>

## Mini-projet: application web avec base de données sqlite

Le dépôt git suivant contient une mini-application web utilisant python pour accéder aux données
d'une base de données `sqlite`.

<https://framagit.org/lyceum/flask-sqlite>

Par **groupe de 2 ou 3**, développez l'ébauche d'application proposée pour qu'elle utilise des
_données intéressantes_ de votre choix mais non personnelles.

Outre le changement de données, vous pourrez:

- utiliser plusieurs relations dans votre base de données, et les joindre dans vos requêtes.
- proposer plusieurs pages `html` pour la visualisation de données différentes, leur édition...
