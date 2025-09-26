
const formations = [
{ nom: "HTML & CSS", code: "C1" },
  { nom: "JavaScript", code: "C2" },
  { nom: "Bases de données", code: "C3" },
  { nom: "Développement backend", code: "C4" },
  { nom: "Framework Frontend", code: "C5" },
  { nom: "Outils de versioning", code: "C6" },
  { nom: "Tests et qualité", code: "C7" },
  { nom: "Déploiement", code: "C8" }
];


let question = formations[1]
let reponse ="C1"
if(reponse === question.code){


console.log(" true ");
}else{
  console.log(" Faux la bonne réponse est "+ question.code );
}



 let saerchename ="HTML & CSS" ;

for (let i = 0; i < formations.length; i++) {
  if (formations[i].nom .toLowerCase()=== saerchename.toLowerCase()) {
    console.log("Le code saisi est " + reponse + ", c'est le code du formation " + formations[i].nom );
    break; 
  }
}