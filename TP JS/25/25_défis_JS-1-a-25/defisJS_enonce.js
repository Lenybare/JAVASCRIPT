// -- 1 -- afficher une suite de nombres de 1 à 10
(function () {

    for (let i = 1; i < 11; i++) {
        console.log(i)
    }

})();
// -- 2 -- afficher une suite de nombres de 10 à 1
(function () {
    // Je test
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }

})();
// -- 3 -- afficher les nombres pairs inférieurs à 100
(function () {

    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }

})();
// -- 4 -- afficher la table de multiplication de 7
(function () {

    for (let i = 0; i < 50; i++) {
        console.log(i * 7)
    }

})();
// -- 5 -- afficher toutes les tables de multiplication de 1 à 10
(function () {
    // j
    for (let i = 0; i < 11; i++) {
        for (let b = 0; b < 11; b++) {
            console.log(b * i)
        }
    }

    // -- 6 -- calculer la somme des nombres de 13 à 33
    let somme = 0;
    for (let i = 13; i < 34; i++) {
        somme += i
    }
    console.log(somme)
})();
// -- 7 -- calculer le factoriel de 10 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800)
(function () {

    let jahel = 10;
    let factoriel = 10;
    while (jahel > 1) {
        jahel--;
        factoriel = factoriel * jahel;
    }
    console.log(factoriel)
    // -- 8 -- calculer la somme des nombres impairs entre 10 et 30
    let hugo = 0;
    for (let i = 10; i < 31; i++) {
        if (i % 2 !== 0) {
            hugo += i
        }
    }
    console.log(i)
})();
// -- 9 -- écrire une fonction pour convertir des minutes en heures et minutes
// /!\ si les minutes sont inférieures à 60, on affiche uniquement les minutes
// /!\ si les minutes sont inférieures à 10, on affiche les minutes avec 2 chiffres '03' et non '3'
(function () {

    let number = prompt("Entre un nombre de minutes : ")
    let numbers = parseInt(number);
    if (numbers < 10) {
        if (number.length === 1) {
            numbers = "0" + numbers
            console.log("Votre nombres de minutes est : " + numbers)
        } else {
            console.log("Votre nombres de minutes est : " + numbers)
        }
    } else if (numbers < 60) {
        console.log("Votre nombres de minutes est : " + numbers)
    } else {
        let verif = false;
        let jsp = 0;
        while (verif === false) {
            numbers = numbers - 60;
            jsp += 60;
            if (numbers < 60) {
                verif = true;
                jsp = jsp / 60;
            }
        }
        console.log("Votre nombre d'heure est : " + jsp + " et votre nombre de minutes et : " + numbers)
    }

})();
// -- 10 -- écrire une fonction pour calculer la somme des chiffres d'un nombre
// /!\ on ne peut pas utiliser de chaîne de caractères
// /!\ on ne peut pas utiliser de tableau
// /!\ le nombre doit être un entier positif
// /!\ le nombre peut avoir plusieurs chiffres (exemples : 1234 666 123456789)

(function () {

    let theo = prompt("");
    theo = theo.toString()
    theo = theo.split("");
    console.log(theo);
    let numberss = 0;
    for (let i = 0; i < theo.length; i++) {
        let temp = parseInt(theo[i]);
        numberss += temp
    }
    console.log(numberss)
})();

// -- 10-bis -- même exercuce que le 10 (calculer la somme des chiffres d'un nombre) mais cette fois il faut gérer les nombres négatifs et les nombres à virgule

(function () {
    let theo = prompt("");
    theo = theo.toString()
    theo = theo.split("");
    console.log(theo);
    let numberss = 0;
    for (let i = 0; i < theo.length; i++) {
        let temp = parseInt(theo[i]);
        if (!isNaN(temp)) {
            numberss += temp
        }
    }
    console.log(numberss)
})();


// -- 11 -- écrire une fonction pour calculer la somme des nombres d'un tableau

(function () {
    let theo = [0, 1, 3, 2, 1, 5, 55, 66, 88];
    let numberss = 0;
    for (let i = 0; i < theo.length; i++) {
        let temp = parseInt(theo[i]);
        if (!isNaN(temp)) {
            numberss += temp
        }
    }
    console.log(numberss)
})();

// -- 11-bis -- écrire une fonction pour calculer la somme des nombres d'un tableau
// /!\ on ne peut pas utiliser de boucle FOR
// /!\ on ne peut pas utiliser de boucle WHILE

(function () {
    let theo = [0, 1, 3, 2, 1, 5, 55, 66, 88];
    let numberss = 0;
    theo.forEach(i => {
        let temp = parseInt(i);
        if (!isNaN(temp)) {
            numberss += temp
        }
    });
    console.log(numberss)
})();

// -- 12 -- écrire une fonction pour calculer la moyenne des nombres d'un tableau

(function () {
    let theo = [0, 1, 3, 2, 1, 5, 55, 66, 88];
    let numberss = 0;
    for (let i = 0; i < theo.length; i++) {
        let temp = parseInt(theo[i]);
        if (!isNaN(temp)) {
            numberss += temp
        }
    }
    numberss = numberss / theo.length
    console.log(numberss)
})();


// -- 13 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau contenant uniquement les nombres pairs

(function () {
    let theo = [0, 1, 3, 2, 1, 5, 55, 66, 88];
    let numberss = [];
    for (let i = 0; i < theo.length; i++) {
        let temp = parseInt(theo[i]);
        if (!isNaN(temp)) {
            if (temp % 2 === 0) {
                numberss.push(temp);
            }
        }
    }
    console.log(numberss)
})();


// -- 14 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau sans les doublons sans utiliser includes

(function () {
    let theo = [2, 3, 3, 2, 5, 6];
    let final = [];
    for (let i = 0; i < theo.length; i++) {
        let same = 0;
        final.push(theo[i])
        for (let b = 0; b < theo.length; b++) {
            if (theo[i] === theo[b]) same++
        }
        if (same !== 1) {
            theo.splice(theo.indexOf(theo[i]), 1)
        }
    }
    console.log(theo)
})();

// /!\ utiliser la méthode includes

(function () {
    let theo = [2, 3, 3, 2, 5, 6];
    let final = [];
    for (let i = 0; i < theo.length; i++) {
        if (!(final.includes(theo[i]))) {
            final.push(theo[i]);
        }

        console.log(final)
    }
})();

// -- 14-bis -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau sans les doublons en utilisant la méthode filter()

(function (array) {
    return array.filter((nb, i) => array.indexOf(nb) == i)
})([1, 1, 1, 2, 3, 5, 4, 7, 8, 9, 2, 4, 5, 6, 2, 2, 3]);

// -- 14-bis -- écrire une fonction qui prend un tableau de nombres et renvoie le plus petit chiffre pair sans utiliser la méthode filter() ni d'autre méthode prédéfinie

(function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array.splice(array.indexOf(array[i]), 1);
        }
    }
    let leFirst = array[0];
    for (let a = 0; a < array.length; a++) {
        let temp = array[a]
        if (leFirst > temp) {
            leFirst = temp
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 5, 6, 7, 5, 2, 1, 2, 3, 6, 5, 4, 8, 9]);

// -- 15 -- écrire une fonction qui affiche si le nombre passé en paramètre est premier

(function (number) {
    let jsp = false,
        numbers = 2;

    if (number === 2) {
        jsp = true;
        console.log(number + " est premier il est divisible que par : 1 et " + number);
    }

    while (jsp === false) {
        if (number % numbers === 0) {
            jsp = true;
            console.log(number + " n'est pas premier il est divisible par : " + numbers)
        }

        numbers++

        if (numbers === number) {
            jsp = true;
            console.log(number + " est premier il est divisible que par : 1 et " + number);
        }
    }
})(787545454542);

// -- 16 -- écrire une fonction qui affiche la liste des 100 premiers nombres premiers

(function () {
    let number = 2;
    while (number < 100) {
        let jsp = false;
        let numbers = 2;
        while (jsp === false) {
            if (number === 2) {
                jsp = true;
                console.log(number + " est premier il est divisible que par : 1 et " + number);
            }
            if (number % numbers === 0) {
                jsp = true;
                // console.log(number + " n'est pas premier il est divisible par : " + numbers)
            }

            numbers++

            if (numbers === number) {
                jsp = true;
                console.log(number + " est premier il est divisible que par : 1 et " + number);
            }
        }
        number++
    }
})();

// -- 17 -- écrire une fonction pour appliquer à une liste de prix un code promo s'il est fournit. La fonction prend 2 paramètres : un tableau de prix et un taux de réduction qui lui est optionnel. Si le taux de réduction n'est pas fourni, il est de 0% par défaut.

(function (prix, reduc = 0) {
    if (reduc === 0) {
        prix.forEach(i => {
            console.log(i)
        });
    } else {
        prix.forEach(i => {
            console.log(i * reduc)
        })
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9], 0.2);

// -- 18 -- écrire une fonction qui prend un tableau de données (liste de prénoms) et renvoie un tableau des prénoms triés par ordre alphabétique

(function (prenoms) {
    return prenoms.sort()
})(["Houdy", "Hugo", "Thomas", "Mila", "Theo", "Matteo", "Augustin", "Gustave", "Jules", "Basptiste", "Houdychou", "Rodolphe", "Nathan", "Jahel", "Warren", "Raphael", "Maxime", "Thibault", "Alexis", "Thelio"]);

// -- 19 -- écrire une fonction qui prend un tableau de données et permute le premier et le dernier élément

(function (array) {
    let first = array.shift()
    let second = array.pop()
    array.unsift(second)
    array.push(first)
    return array;
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// -- 20 -- écrire une fonction qui fusionne 2 tableaux de chiffres en un seul en les classant dans l'ordre croissant

(function (array1, arrayBis) {
    let array = array1.concat(arrayBis);
    let final = [];
    let len = array.length
    for (let i = 0; i < len; i++) {
        let temp = array[0]
        for (let b = 0; b < array.length; b++) {
            if (temp > array[b]) {
                temp = array[b]
            }
        }
        final.push(temp)
        array.splice(array.indexOf(temp), 1);
    }
    return final;
})([1, 2, 3, 4, 5, 8, 9], [5, 2, 1, 4, 7, 5, 3]);


// -- 20bis -- améliorer la fonction précédente pour qu'elle ne renvoie pas de doublons

(function (array1, arrayBis) {
    let array = array1.concat(arrayBis);
    let final = [];
    let len = array.length
    for (let i = 0; i < len; i++) {
        let temp = array[0]
        for (let b = 0; b < array.length; b++) {
            if (temp > array[b]) {
                temp = array[b]
            }
        }
        final.push(temp)
        array.splice(array.indexOf(temp), 1);
    }
    let finals = [];
    for (let i = 0; i < final.length; i++) {
        if (!(finals.includes(final[i]))) {
            finals.push(final[i]);
        }
    }
    return finals
})([1, 2, 3, 4, 5, 8, 9], [5, 2, 1, 4, 7, 5, 3]);

// -- 21 -- écrire une fonction qui prend deux tableaux de nombres et renvoie un tableau avec les nombres du tableau 1 qui ne sont pas dans le tableau 2
let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [-1, 4, 5, 6, 14];
// résultat attendu => [1, 2, 3, 10, 3]

(function (first, second) {
    let unique = []
    for (let i = 0; i < first.length; i++) {
        if (!second.includes(first[i])) {
            unique.push(first[i])
        }
    }
    return unique
})([1, 2, 3, 10, 5, 3, 14], [-1, 4, 5, 6, 14])

// -- 22 -- écrire une fonction qui prend un tableau de nombres et renvoie un tableau avec les nombres qui sont présents 2 fois ou plus dans le tableau
let ar = [1, 2, 3, 10, 5, 3, 14];
// résultat attendu => [3]

(function (arr) {
    return arr.filter((nb, i) => arr.indexOf(nb) != i)

})([1, 2, 3, 10, 5, 3, 14]);

// -- 23 -- écrire une fonction qui dit bonjour à une personne dont le prénom est passé en argument à son appel
// le paramètre est optionnel, si aucun prénom n'est fourni, la fonction dit bonjour à "inconnu"
// le paramètre peut être passé sous forme de chaîne de caractères ou sous forme d'array

(function (prenom = "inconnu") {
    if (typeof prenom === "string") {
        return "Bonjour à " + prenom
    } else if (typeof prenom === "object") {
        prenom.forEach(i => {
            console.log("Bonjour à " + i)
        })
    } else {
        return "Veuillez entré soit : un string, un object ou rien"
    }
})(["Clovis", "Mila", "Theo"]);

// -- 24 -- écrire une fonction qui renvoie :
// la somme
// la moyenne
// et la muliplication
// de 2 chiffre passés en arguments à son appel

(function (nb1, nb2) {
    return ("Voici la somme des deux nombres : " + (nb1 + nb2) + "\n Voici la moyenne des deux nombres : " + ((nb1 + nb2) / 2) + "\n Voici le produit des deux nombres : " + (nb1 * nb2))
})(2, 5);
// --25-- températures du mois de janvier
/* Vous avez le tableau de relevé des températures du mois de janvier suivant :
let jan = [2, 4, 3, 6, 17, 2, 1, 8, 19, 4, 7, 3, 18.7, 1.3, 5, 4.1, 9.1, 8.7, 4, 6, 1.9, 8, 3.7, 16, 7.8, 8.2, 7.6, 8.7, 9.7, 11.5, 13.7];
Affichez le relevé des températures jour par jour pour le mois dans un tableau HTML (cf. image).
Les températures inférieures à 6°C sont sur fond bleu, celles supérieures à 15°C en rouge.
*/
(function (temp) {
    document.write("<table style='border-collapse: collapse; color: #000000; border: 2px solid'><caption>Janvier</caption>");
    let jour = 0,
        jsp = 0;
    for (let i = 0; i < 4; i++) {
        // for (let b = 0; b < 2; b++) {
        document.write("<tr>")
        for (let hugo = 0; hugo < 8; hugo++) {
            jour++
            if(jour === 32) break;
            document.write("<td style='border: 2px solid rgb(0, 0, 0); width: 40px; height: 40px; text-align: center; background-color: #0000ff; color: #ffffff'>J"+jour+"</td>")
        }
        document.write("</tr><tr>")
        for (let theo = 0; theo < 8; theo++) {
            if(jsp === 31) break;
            let background;
            if(temp[jsp] < 6) {
                background = "00d9ff"
            } else if(temp[jsp] > 15) {
                background = "ff0000"
            } else {
                background = "ffffff"
            }
            document.write("<td style='border: 2px solid rgb(0, 0, 0); width: 40px; height: 40px; text-align: center; background-color: #" + background + "'>" + temp[jsp] + "</td>")
            jsp++     
        }
        document.write("</tr>")
        // }
    }
    document.write("</table>")
})([2, 4, 3, 6, 17, 2, 1, 8, 19, 4, 7, 3, 18.7, 1.3, 5, 4.1, 9.1, 8.7, 4, 6, 1.9, 8, 3.7, 16, 7.8, 8.2, 7.6, 8.7, 9.7, 11.5, 13.7])
