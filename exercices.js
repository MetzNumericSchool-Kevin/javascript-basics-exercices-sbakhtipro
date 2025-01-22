const nomBoutique = "exemple";
let nomSorcier = "Archibald";
let nbPotions = 5;
let prixPotionSoin = 3;
let ouvertureBoutique = false;

let affichageMenu = `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ?\n1. Le nom de la boutique\n2. Le nom du Sorcier\n3. Le prix d'un potion de soin\n4. La quantité d'une potion de soin`
let choix = 0

if (ouvertureBoutique) {
    console.log(`Bienvenue dans la boutique ${nomBoutique} Aventurier !`);
}

else {
    console.log(`La boutique ${nomBoutique} est fermée, revenez plus tard Aventurier !`);
}

function menu() {
    console.log(affichageMenu) 
    switch (parseInt(choix = prompt("Quel est votre choix?"))) {
        case 1 :
            choix = nomBoutique
            break;
        case 2 :
            choix = nomSorcier
            break;
        case 3 :
            choix = prixPotionSoin
            break;
        case 4 :
            choix = quantitePotionSoin
            break;
        default :
            console.log(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !`);
    }
    return choix
}

let choixMenu = menu()

console.log(choixMenu)

let quantitePotionSoin = prompt("Quantité potion soin : ")
console.log(`Le prix pour ${quantitePotionSoin} potion soin est ${quantitePotionSoin * prixPotionSoin}`)





