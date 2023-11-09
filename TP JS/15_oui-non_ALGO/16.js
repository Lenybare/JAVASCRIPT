let vraiOuFaux = true

while (vraiOuFaux == true) {
    let phrase = prompt("Entrez une phrase !");

    if ((phrase.includes("oui")) || (phrase.includes("non"))) {
        vraiOuFaux = false
        alert("Vous avez perdu !")
    }
}