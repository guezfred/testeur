var lettres , motEtoiles="", mot ,cpt = 0;


var mots = ["Apocalypse",
            "Attraction",
            "Aventurier",
            "Bouillotte",
            "Citrouille",
            "Controverse",
            "Coquelicot",
            "Tomahawk",
            "Toujours",
            "Gangster",
            "Gothique",
            "Qualification",
            "Protozoaire",
            "Hochet",
            "Hormis",
            "Humour",
            "Billard",
            "Bretzel",
            "Iceberg",
            "Javelot"
        ];

function choisirMot()
{
    var i = Math.floor(Math.random() * Math.floor(20));
    return mots[i];
}
function afficheEtoiles(mot)
{
    var i;
    for(i=0; i<mot.length; i++){
        motEtoiles = motEtoiles + "*";
    }
    return motEtoiles;
}


function testerLettreDansMot(lettre, chaine){
    if(chaine.includes(lettre)||chaine.includes(lettre.toUpperCase())) return true;
    else return false;
    
     // return chaine.includes(lettre) || chaine.includes(lettre.toUpperCase());
 }

function remplacerLettres(mot, lettres)
{
    var val = document.getElementById("motEt").value;
    alert("---"+val);
    lettres = document.getElementById("tentatives").value;
    var lettre = recupererNouvelleLettre(lettres);
    lettres = document.getElementById("tentatives").value + lettre;
    document.getElementById("tentatives").innerHTML = lettres;
    alert(lettres);
    mot = mot.toLowerCase();
    var nb = mot.length; //compte le nombre de lettres de mot
    var motEtoiles = document.getElementById("motEt").value;
    var i, j;
    for(i=0; i<mot.length; i++){
        for(j=0; j<lettres.length; j++){
            if(lettres.charAt(j) == mot.charAt(i)){
               motEtoiles = motEtoiles.substr(0,i)+lettres.charAt(j)+motEtoiles.substr(i+1);
               break;
            }             
        }                   
    }   
    if(lettres.length==8) document.getElementById("lettre").disabled = true;
    //alert("------------"+lettres.length)
    
    document.getElementById("tentatives").value = lettres;
    document.getElementById("motEt").value = motEtoiles;
    return motEtoiles;                    
}


function recupererNouvelleLettre(anciennes){
    var lettre = document.getElementById("lettre").value;
    //alert(lettre);
    if(testerLettreDansMot(lettre, anciennes)){
        lettre = prompt("Vous avez déjà proposé le : " + lettre+"\nVeuillez saisir une autre lettre SVP :");
    }else {
        //document.getElementById("essais").value = nbErreurs;
        //document.getElementById("motEtoiles").value = 
        return lettre;
    }
}

function afficheMotEtoiles(){
    return motEtoiles;
}

function dessinerPendu(nbErreurs){
    return ++nbErreurs;
}

function jeu()
{
    remplacerLettres(mot, lettres);

}
