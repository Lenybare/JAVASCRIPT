let vraiOuFaux = true

while (vraiOuFaux == true) {
    let nombre = prompt("Entrez un nombre !")
    if ((nombre > 50) && (nombre < 100)) {
        alert("Bravo votre nombre est supérieur à 50 et inférieur à 100, il est : " + nombre + " !");
        vraiOuFaux = false
    } else if (nombre < 50) {
        alert("Votre nombre doit être supérieur à 50 !")
    } else if (nombre > 100) {
        alert("Votre nombre doit être inférieur à 100 !")
    }
}