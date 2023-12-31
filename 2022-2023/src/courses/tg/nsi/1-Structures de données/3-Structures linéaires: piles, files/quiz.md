1. Une pile est qualifiée de:

   - [x] _last in, first out_ ou _LIFO_ en anglais.
   - [ ] _first in, first out_ ou _FIFO_ en anglais.

2. Une file est qualifiée de:

   - [ ] _last in, first out_ ou _LIFO_ en anglais.
   - [x] _first in, first out_ ou _FIFO_ en anglais.

3. L'opération `enfiler` d'une **file** ajoute l'élément:

   - [ ] en tête de file.
   - [ ] en milieu de file.
   - [x] en queue de file.

4. L'opération `défiler` d'une **file** supprime et renvoie l'élément:

   - [x] en tête de file.
   - [ ] en milieu de file.
   - [ ] en queue de file.

5. L'opération `empiler` d'une **pile** ajoute l'élément:

   - [x] en sommet de pile,
   - [ ] en milieu de pile.
   - [ ] en bas de pile.

6. L'opération `dépiler` d'une **pile** retire et renvoie l'élément:

   - [x] en sommet de pile.
   - [ ] en milieu de pile.
   - [ ] en bas de pile.

7. Dans quel ordre faut-il empiler les éléments pour obtenir la pile suivante?

    ```
    | E | <- Sommet
    | D |
    | C |
    | B |
    | A | 
    ‾‾‾‾‾
    PILE 
    ```

    - [x] A, B, C, D, E
    - [ ] E, D, C, B, A
    - [ ] autre

8.  Dans quel ordre faut-il enfiler les éléments pour obtenir la file suivante?

    ```
             _____________________        
    Queue -> | E | D | C | B | A | -> Tête
             ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾        
                     FILE                 
    ```

    - [x] A, B, C, D, E
    - [ ] E, D, C, B, A
    - [ ] autre

9.  Quelle file obtient-on si on dépile entièrement la pile suivante dans une file vide?

    ```
    | E | <- Sommet
    | D |
    | C |
    | B |
    | A | 
    ‾‾‾‾‾
    PILE 
    ```

    - [ ] `Queue -> | E | D | C | B | A | -> Tête`
    - [x] `Queue -> | A | B | C | D | E | -> Tête`
    - [ ] autre

