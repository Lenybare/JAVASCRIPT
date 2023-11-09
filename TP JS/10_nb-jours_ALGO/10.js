let moisPrompt = prompt("Entrez le numéro du mois : ");
let mois = moisPrompt - 1;
let moisEnLettre = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", 'Septembre', "Octobre", "Novembre", "Decembre"];
let moisEnChiffre = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
alert(`Le ${moisPrompt}ème mois est ${moisEnLettre[mois]} et il compte ${moisEnChiffre[mois]} jours !`)