let choix =  prompt("Choisissez entre : Ciseau, Pierre ou Feuille");
let choixFinal = choix.toLowerCase()
let pierreFeuilleCiseaux = ["pierre", "feuille", "ciseau"];
let choixRandom = Math.floor(Math.random() * pierreFeuilleCiseaux.length);
let chifoumi = pierreFeuilleCiseaux[choixRandom];

if(choixFinal == chifoumi) {
    alert("Egalité vous avez tout les deux saisi : " + choix);
} else if (choixFinal == "pierre") {
    switch (chifoumi) {
        case "feuille":
            alert("Vous avez perdu : " + choix + " contre : " + chifoumi)
            break;
        case "ciseau":
            alert("Bravoo vous avez gagné : " + choix + " contre : " + chifoumi)
            break;
        default:
            break;
    }
} else if(choixFinal == "feuille") {
    switch (chifoumi) {
        case "ciseau":
            alert("Désolé vous avez perdu : " + choix + " contre : " + chifoumi)
            break;
        case "pierre":
            alert("Bravo vous avez gagné : " + choix + " contre : " + chifoumi)
            break;
        default:
            break;
    }
} else if (choixFinal == "ciseau") {
    switch (chifoumi) {
        case "pierre":
            alert("Désolé vous avez perdu : " + choix + " contre : " + chifoumi)
            break;
            case "feuille":
            alert("Bravo vous avez gagné : " + choix + " contre : " + chifoumi)
            break;
        default:
            alert("Choix inconnu veuillez rééssayé !")
            break;
    }
}