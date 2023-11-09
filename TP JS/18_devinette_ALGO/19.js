console.log("Bienvue dans notre jeu !");
let random = Math.floor(Math.random() * 100);
let i = 0;
let trueOrFalse = false
while ((i <= 6) && (trueOrFalse == false)) {
    let demande = prompt("Entrez un nombre entre 1 et 100 !");
    let verif = parseInt(demande);
    if(isNaN(verif)) {
        alert("Veuillez entrer un nombre !")
    }else if (demande == random) {
        alert("Bravo vous avez trouvé le nombre : " + random);
        trueOrFalse = true
    } else if(demande < random) {
        alert("Le nombre est supérieur à : "+ demande)
    } else if (random < demande) {
        alert("Le nombre est inférieur à : " + demande)
    }
    i++
}
if (trueOrFalse == false) {
    alert("Vous avez perdu le nombre était : " + random)
}