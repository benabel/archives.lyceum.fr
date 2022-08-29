## Construire des tables de vérité

1. Produisez les tables de vérité pour les opérations suivantes:

   - **NAND** : $P \text{ NAND } Q = !(P \& Q)$
   - **NOR** : $P \text{ NOR } Q = !(P \lVert Q)$
   - **XOR** : $P XOR Q = (P \& !Q) \lVert (!P \& Q)$

2. Produire des tables de vérité pour :

   - $P \& !Q$

   - $!P \&  !Q$

   - $!P \lVert !Q$

   - $P \& Q \& R$

   - $!P \&  !Q \&  !R$

   - $P \& Q \& R \lVert P \&  !Q \& R$

## Expressions équivalentes

**Savoir-faire:** Utiliser une table de vérité pour montrer que deux expressions logiques sont
équivalentes

- Montrer que:

$$
P \lVert ( !P \& Q)=P \lVert Q
$$


- Utiliser une table de vérité pour démontrer la propriété d’absorption de l’algèbre de Boole:

$$
P \lVert P \& Q = P
$$

- Montrer que:

$$
P \lVert Q \& R = (P \lVert Q) \& (P \lVert R)
$$

## Simplifications d'expressions booléennes

Utilisez les lois de l'algèbre de Boole _(ne les apprenez pas!)_ pour simplifier ces expressions.

1. Simplifier l'expression:

   $$
   (P \lVert Q)\&(P \lVert  !Q)
   $$
   
   Vérifier votre résultat avec une table de vérité.

2. Démontrer l'expression de `XOR` utilisée dans l'exercice 1: $P XOR Q = (P \& !Q)\lVert(!P \&Q)$: 
   
   Pour cela commencer par remarquer que:
 
   $$
   \begin{aligned}
      0\ \text{XOR}\ Q\ &=\ Q \\
      1\ \text{XOR}\ Q\ &=\  !Q
   \end{aligned}
   $$
   
   Vérifier votre résultat avec une table de vérité.


## Recherche d'expressions équivalentes _(Plus dur)_

Exprimer sous forme simplifiée les expressions suivantes:

- $P \& Q \& (R \lVert S)$

- $(P \lVert Q) \& (R \lVert S \lVert T)$

- $(!P \lVert Q) \& (P \lVert Q \lVert S) \&  !S$

- $P \&  !Q \&  !R \lVert P \&  !Q \& R \lVert P \& Q \& R$

- $!P \& R \& !( !P \& Q \& S) \lVert !P \& Q \&  !R \&  !S \lVert P \&  !Q \& R$

Vous pouvez vérifier vos résultats en Python en utilisant la bibiothèque `sympy` qui propose la
fonction `simplify_logic`(Attention la syntaxe utilisée est: ET: `&`, OU: `| et NON: `~`).

```python
from sympy import symbols
from sympy.logic import simplify_logic

P, Q, R, S, T = symbols('P Q R S T')

simplify_logic((~P|Q)&(P|Q|S)&~S) # renvoie Q & ~S
```

La fonction propose deux modes de simplifications:

- Produit(ET) de sommes(OU): `simplify_logic(expr, 'cnf')`
- Somme(OU) de produit(ET): `simplify_logic(expr, 'dnf')`

```python
expr = "P&~Q&~R|P&~Q&R|P&Q&R"
simplify_logic(expr, 'cnf')   # renvoie P & (R | ~Q)
simplify_logic(expr, 'dnf')   # renvoie (P & R) | (P & ~Q)
```