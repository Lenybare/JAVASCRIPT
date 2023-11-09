/**
 * 
// prompt

// on itère le nombre d'étages du sapin en fonction du prompt
for(...) {
    // 1. A chaque étage, nous avons 2 lignes de plus que le nombre de l'étage
    for(...) {
        // 2. A chaque ligne, nous avons ((etage+ligne)*2)-1 étoiles
        for(...) {
            ...
        }
        ...
    } // fin lignes
} // fin étage

// On affiche le pied
for(...) {
    ...
}
 */
let cbDeFois = prompt("Choisis le nombre d'étages du sapin");
let lenb = parseInt(cbDeFois);
let i = 0;
let b = 0;
let etoilePremier = "*";
let etoileWhile = "***";
let repetition = 1;
let nbLigne = 4
for (let i = 0; i < lenb; i++) {
    for (let b = 0; b < repetition; b++) {
        for (let a = 0; a < nbLigne; a++) {
            document.write("<center>" + etoilePremier + "</center>");
            etoilePremier += "**";
        }
        etoilePremier = etoileWhile;
        etoileWhile += "**";
        nbLigne++
    }
    
}
for (let t = 0; t < lenb; t++) {
    document.write(`<center>|</center>`)
}