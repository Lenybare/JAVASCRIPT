let jour = prompt("Entrez le jour de la semaine !");
let jourFinal = jour.toLowerCase()
switch (jourFinal) {
    case "":
        alert("Vous n'avez rien entrer !")
        break;
    case "lundi":
        alert("Le jour de la semaine suivant est : Mardi !")
        break;
    case "mardi":
        alert("Le jour de la semaine suivant est : Mercredi !")
        break;
    case "mercredi":
        alert("Le jour de la semaine suivant est : Jeudi !")
        break;
    case "jeudi":
        alert("Le jour de la semaine suivant est : Vendredi !")
        break;
    case "vendredi":
        alert("Le jour de la semaine suivant est : Samedi !")
        break;
    case "samedi":
        alert("Le jour de la semaine suivant est : Dimanche !")
        break;
    case "dimanche":
        alert("Le jour de la semaine suivant est : Lundi !")
        break;

    default:
        alert("Vérifiez que vous n'avez pas fait de fautes d'ortographe !")
        break;
}