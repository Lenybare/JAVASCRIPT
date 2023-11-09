let vraiOuFaux = true

while (vraiOuFaux == true) {
    let nombre = prompt("Entrez un nombre !");

    if ((nombre => 2) && (nombre <= 9)) {
        vraiOuFaux = false
        let i = 0;
        while (i <= 10) {
            let res = i * nombre;
            document.write(`${nombre} multiplié par ${i} est égal à : ${res} <br>`);
            i++
        }
        
    } else if (nombre < 2) {
        alert("Votre nombre doit être égal ou supérieur à 2 !")
    } else if (nombre > 9) {
        alert("Votre nombre doit être égal ou inférieur à 9 !")
    }
}