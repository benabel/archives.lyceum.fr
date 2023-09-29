1. Quelle est la complexité du tri par sélection? 

   - [ ] inconnue 
   - [ ] linéaire 
   - [x] quadratique 
   - [ ] exponentielle 

1. Quel est l’ordre de grandeur du coût du tri par insertion (dans le pire des cas)?

   - [ ] l'ordre de grandeur du coût dépend de l'ordinateur utilisé 
   - [ ] linéaire en la taille du tableau à trier 
   - [x] quadratique en la taille du tableau à trier 
   - [ ] indépendant de la taille du tableau à trier 

2. Soit $T$ le temps nécessaire pour trier, à l'aide de l'algorithme du tri par insertion, une liste de 1000 nombres 
   entiers. Quel est l'ordre de grandeur du temps nécessaire, avec le même algorithme, pour trier une liste de 
   10 000 entiers, c'est-à-dire une liste dix fois plus grande? 

   - [ ] à peu près le même temps $T$
   - [ ] environ $10 \times T$ 
   - [x] environ $100 \times T$ 
   - [ ] environ $T^2$ 

3. Quel est le coût d'un algorithme de tri par insertion (dans le meilleur des cas)? 

   - [ ] constant 
   - [ ] logarithmique 
   - [x] linéaire 
   - [ ] quadratique 

1. On considère la fonction suivante : 

   ```python
   def f(x,L): 
       i = 0 
       j = len(L)
       while i < j: 
          k = (i+j)//2 
          if x <= L[k]: 
             j = k 
          else: 
             i = k + 1 
       return i 
   ```

   Cette fonction implémente : 

   - [ ] le tri par insertion 
   - [ ] le tri par sélection 
   - [x] la recherche dichotomique 
   - [ ] la recherche du plus proche voisin 

1. Un algorithme de tri d’une liste d’entiers est implémenté de la façon suivante :

   ```python
   def trier(L) : 
      for i in range(len(L)): 
         indice_min = i 
         for j in range(i+1, len(L)): 
            if L[j] < L[indice_min] : 
               indice_min = j 
         L[i], L[indice_min] = L[indice_min], L[i] 
      return L 
   ```

   Quelle est l'affirmation exacte? 

   - [ ] cet algorithme est celui du tri par sélection et il a un coût linéaire en la taille de la liste à trier 
   - [ ] cet algorithme est celui du tri par insertion et il a un coût linéaire en la taille de la liste à trier 
   - [x] cet algorithme est celui du tri par sélection et il a un coût quadratique en la taille de la liste à trier 
   - [ ] cet algorithme est celui du tri par insertion et il a un coût quadratique en la taille de la liste à trier 



1. Un algorithme de tri d’une liste d’entiers est implémenté de la façon suivante : 

   ```python
   def trier(L) : 
      for i in range(len(L)): 
         indice_min = i 
         for j in range(i+1, len(L)): 
            if L[j] < L[indice_min] : 
               indice_min = j 
         L[i], L[indice_min] = L[indice_min], L[i] 
         # assertion vraie à cet endroit 
      return L
   ```

   Parmi les assertions suivantes laquelle reste vraie à chaque itération de la boucle, à l'endroit indiqué ci-dessus? 

   - [ ] la sous-liste L[0:i+1] contient les i plus grandes valeurs de L triées par ordre décroissant 
   - [ ] la sous-liste L[0:i+1] contient les i plus grandes valeurs de L triées par ordre croissant 
   - [ ] la sous-liste L[0:i+1] contient les i plus petites valeurs de L triées par ordre décroissant 
   - [x] la sous-liste L[0:i+1] contient les i plus petites valeurs de L triées par ordre croissant 



1. Combien d’échanges effectue la fonction Python suivante pour trier un tableau de 10 éléments au pire des cas?
   
   ```python
   def tri (tab):
       for i in range (len(tab)-1): 
           for j in range (len(tab)-2, i-1, -1):
               if tab[j] > tab[j+1]: 
                   tab[j] , tab[j+1] = tab[j+1] , tab[j]
   ```

   - [ ] 10 
   - [ ] 44 
   - [x] 54 
   - [ ] 100
