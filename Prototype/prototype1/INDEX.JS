//Tableau du codes
let codes = [ "C1","C4","C8","C1","C6","C4","C3","C3"];
//code à recherche 
let coderecherche = "C1";
let compteur = 0 ;
//boucle for pour aparrir touts les éléments du tableau
for (i =0 ; i < codes.length; i++){

if ( coderecherche === codes[i]){
    compteur++; 

 }
 
 }
 
console.log ( " code " + coderecherche + " apparait " + compteur + "fois"  ) ;