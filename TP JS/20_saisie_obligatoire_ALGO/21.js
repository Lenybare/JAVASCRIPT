let nombre = prompt("Entrez un nombre : ");
let nombreV2 = parseFloat(nombre);
if (!isNaN(nombreV2)) {
    document.write(`<h1>Vous avez saisi le nombre : ${nombreV2}</h1>`)
} else {
    alert("Veuillez entrer un nombre correct !")
}