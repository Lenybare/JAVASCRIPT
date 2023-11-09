let nbTour = prompt("Nombre de tour à faire : ");
if (nbTour == "") {
    alert("Incorrect vous devez entré un nombre !")
}
let nbFinal = parseInt(nbTour)
let i = 0;
while (i < nbTour) {
    i++
    document.write("C'est le tour numéro : " + i + "<br>")
}