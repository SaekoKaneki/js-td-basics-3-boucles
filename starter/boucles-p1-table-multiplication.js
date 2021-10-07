/*
BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
	"Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
	"Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
	"Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
	1°) avec une boucle FOR
	2°) avec une boucle WHILE
*/

// avec FOR
// let itable = parseInt(prompt('Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par'));
// let ivaleur = parseInt(prompt('Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par'));
// console.log(`Voici les ${ivaleur}  premières valeurs de la table de multiplication par ${itable}`);
//
// for (let i=0; i<ivaleur; i++){
//     console.log(itable*(i+1));
// }

// avec WHILE
let itable = parseInt(prompt('Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par'));
let ivaleur = parseInt(prompt('Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par'));
console.log(`Voici les ${ivaleur}  premières valeurs de la table de multiplication par ${itable}`);
let i=0
while (i<ivaleur){
    console.log(itable*(i+1));
    i++
}
