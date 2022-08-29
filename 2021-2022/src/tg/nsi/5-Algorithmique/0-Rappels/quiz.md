## Complexités

1. Quelle est la complexité asymptotique de l'algorithme suivant:

   ```python
   def est_positif(liste):
       for e in L:
            if e < 0:
                return False
       return True
    ```

   - [ ] O(1)
   - [ ] O(log N)
   - [x] O(N)
   - [ ] O(N^2)

2. Quelle est la complexité asymptotique de l'algorithme suivant:

   ```python
   def ajoute_élément(liste, élément):
       liste.append(élément)
    ```

   - [x] O(1)
   - [ ] O(log N)
   - [ ] O(N)
   - [ ] O(N^2)

3. Quelle est la complexité asymptotique de l'algorithme suivant:

   ```python
   def mystère(liste):
        N = len(t)
        for i in range(N-1):
            i_min = i
            for j in range(i+1, N):
                if t[j] < t[i_min]:
                    i_min = j
            if i_min != i:
                t[i], t[i_min] = t[i_min], t[i]
        return t
    ```

   - [ ] O(1)
   - [ ] O(log N)
   - [ ] O(N)
   - [x] O(N^2)

3. Quelle est la complexité asymptotique de l'algorithme suivant:

   ```python
   def mystère(liste, élément):
       début = 0
       fin = len(liste)    
       while début <= fin:
           milieu = (début + fin) // 2 
           if liste[milieu] == élément:
               return True
           elif liste[milieu] < élément:
               début = milieu + 1
           else:
               fin = milieu - 1
       return False
    ```

   - [ ] O(1)
   - [x] O(log N)
   - [ ] O(N)
   - [ ] O(N^2) 