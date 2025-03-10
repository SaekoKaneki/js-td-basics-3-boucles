/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 6.5. Boucles imbriquées
  On peut très bien imbriquer une boucle dans une boucle.
  Syntaxe :
    for(let i = …; i … ; i …){
      for(let j = …; j …; j …){
        // instuctions qui font intervenir les deux compteurs i et j
      }
    }
  Principe de fonctionnement :
  C'est
    - d'abord la boucle interne qui boucle (c'est celle qui boucle le plus vite)
    - et puis la boucle externe (c'est celle qui boucle le plus lentement)
*/




/* 
  - Faire la table d'évolution des variables !!
  - Ecrire l'expression à afficher dans le console.log autrement,
    en utilisant le concept de template littéral
*/
for (let i=1; i <= 3 ; i++) {
    for (let j=1; j <= 4 ; j++) {
        console.log(i,j);
    }
}
/*
N.B. TABLE D'ÉVOLUTION DES VARIABLES :
  nbre      nbre < =10           console.log(nbre)        nbre++
nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
...
nbre = 10,  10 <= 10 true,        affiche 2,          nbre passe à 10+1 = 11
nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
*/