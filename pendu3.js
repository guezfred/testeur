var mots = ["Apocalypse","Attraction","Aventurier","Bouillotte",
            "Citrouille","Controverse","Coquelicot","Tomahawk",
            "Toujours","Gangster","Gothique","Qualification",
            "Protozoaire","Hochet","Hormis","Humour","Billard",
            "Bretzel","Iceberg","Javelot"
            ];
var anciennes = ""
function choisirMot()
{
    var i = Math.floor(Math.random() * Math.floor(20))
    return mots[i];
}

function testerLettreDansMot(lettre, chaine){
    if(chaine.length == 0 || lettre=="") return false;
    if(chaine.indexOf(lettre)!=-1)  return true;
    else return false;
 }

 function remplacerLettres(mot, lettres){
     var i,j;
     var motEtoiles="";
     for(i=0;i<mot.length; i++)
     {
        motEtoiles = motEtoiles + "*";
     }

     for(i=0;i<mot.length; i++){
         for(j=0; j<lettres.length;j++){
            if(mot.charAt(i) == lettres.charAt(j)){
                motEtoiles = motEtoiles.substr(0,i) + mot.charAt(i) + motEtoiles.substr(i+1);
            }
         }
     }
     return motEtoiles;
 }

function recupererNouvelleLettre(anciennes){
    var lettre = document.getElementById("lettre").value;
    while(testerLettreDansMot(lettre, anciennes)){
        lettre = prompt("Lettre déjà proposée, veuillez en choisir une autre !!");
    }
    
    anciennes = anciennes + lettre;
    
    return lettre;
}