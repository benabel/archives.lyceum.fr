1. Comment traduire `SQL` en français ?

   - [ ] `Langage de question fort`
   - [x] `Langage de requête structuré`
   - [ ] `Langage de question structuré`

2. Quelle instruction SQL est utilisée pour _lire_ des données d'une base de données?

   - [ ] `GET`
   - [ ] `FIND`
   - [ ] `OPEN`
   - [x] `SELECT`

3. Quelle instruction SQL est utilisée pour _mettre à jour_ les données dans une base de données?

   - [ ] `SAVE`
   - [ ] `APPEND`
   - [ ] `MODIFY`
   - [x] `UPDATE`

4. Quelle instruction SQL est utilisée pour _supprimer_ des données d'une base de données?

   - [ ] `DEL`
   - [ ] `REMOVE`
   - [x] `DELETE`
   - [ ] `POP`

5. Quelle instruction SQL est utilisée pour _insérer_ de nouvelles données dans une base de
   données?

   - [ ] `ADD`
   - [x] `INSERT`
   - [ ] `RECORD`
   - [ ] `APPEND`

6. Avec SQL, comment sélectionner _tous_ les attributs d'une relation nommée `Personnes`?

   - [ ] `SELECT Personnes;`
   - [ ] `SELECT ALL FROM Personnes;`
   - [x] `SELECT * FROM Personnes;`
   - [ ] `SELECT *.Personnes;`

7. Avec SQL, comment sélectionnez-vous tous les enregistrements d'une relation nommée `Personnes`
   où
   la valeur de l'attribut `prenom` est `"Toto"`?

   - [x] `SELECT * FROM Personnes WHERE prenom='Toto';`
   - [ ] `SELECT [all] FROM Personnes WHERE prenom LIKE 'Toto';`
   - [ ] `SELECT [all] FROM Personnes WHERE prenom="Toto";`
   - [ ] `SELECT * Personnes WHERE prenom="Toto";`

8. Quelle instruction SQL est utilisée pour renvoyer uniquement des valeurs différentes?

   - [x] `SELECT DISTINCT`
   - [ ] `SELECT UNIQUE`
   - [ ] `SELECT DIFFERENT`

9. Quel mot-clé SQL est utilisé pour trier l'ensemble de résultats?

   - [ ] `SORT BY`
   - [ ] `SORT`
   - [x] `ORDER BY`
   - [ ] `ORDER`

10. Avec `SQL`, comment insérer un nouvel enregistrement dans la relation `Personnes`?

    - [x] `INSERT INTO Personnes VALUES ('Jimi', 'Hendrix');`
    - [ ] `INSERT VALUES ('Jimi', 'Hendrix') INTO Personnes;`
    - [ ] `INSERT ('Jimi', ‘Hendrix’) INTO Personnes;`

11. Comment pouvez-vous changer "Dujardin" en "Desjardins" dans l'attribut "nom" de la relation
    `Personnes`?

    - [ ] `MODIFY Personnes SET nom='Dujardin' INTO nom='Desjardins';`
    - [ ] `MODIFY Personnes SET nom='Dujardin' WHERE nom='Desjardins';`
    - [x] `UPDATE Personnes SET nom='Desjardins' WHERE nom='Dujardin';`
    - [ ] `UPDATE Personnes SET nom='Desjardins' INTO nom='Dujardin';`

12. Avec SQL, comment pouvez-vous supprimer les enregistrements où le `prenom` est `Donald` dans
    la relation `Personnes`?

    - [ ] `DELETE ROW prenom="Donald" FROM Personnes;`
    - [x] `DELETE FROM Personnes WHERE prenom = 'Donald';`
    - [ ] `DELETE prenom="Donald" FROM Personnes;`

