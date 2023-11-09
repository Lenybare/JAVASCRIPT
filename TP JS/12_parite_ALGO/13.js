let leNBderepet = prompt("Entrez le nombre de nombre à vérifié : ");
let nbInt = parseInt(leNBderepet);
for (let i = nbInt; i < nbInt + 11; i++) {
    let modulo = i % 2
    if(modulo === 0) {
        document.write(`${i} est pair ! <br>`)
    } else {
        document.write(`${i} est impair ! <br>`)

    }
    
}