let jourDeLaSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
function meilleurInvestissement(arr) {
    let i = 0,
        b = 0
    let sup = arr[0];
    let supBis = arr[0];
    while (i < arr.length) {
        i++;
        let temps = arr[i - 1];
        if (temps > sup) {
            sup = temps
        }
        console.log(sup)
    }
    while (b < arr.length) {
        b++;
        let temps = arr[b - 1];
        if (temps < supBis) {
            supBis = temps
        }
        console.log(supBis)
    }
    let lejourAchat = arr.indexOf(supBis);
    let lejourVente = arr.indexOf(sup);

    alert(`Le meilleur coup à faire cette semaine était d'investir le ${jourDeLaSemaine[lejourAchat]} et de revendre le ${jourDeLaSemaine[lejourVente]} pour un bénéfice de ${sup - supBis}.`)
}

console.log(meilleurInvestissement([50, 10, 20, 2, 80, 60, 20]));


// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montant du bénéfice.

// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();
