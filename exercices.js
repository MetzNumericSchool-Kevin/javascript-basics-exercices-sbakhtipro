const nomBoutique = "exemple";
let nomSorcier = "Archibald";
let prixPotionSoin = 3;
let ouvertureBoutique = false;
let stockBoutique = {
    "potions_soin":50,
    "potions_2":0,
    "potions_3":0
}

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
            choix = stockBoutique.potions_soin
            break;
        default :
            console.log(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !`);
    }
    return choix
}

let choixMenu = menu()

console.log(choixMenu)

quantitePotionSoin = parseInt(prompt("Quantité potion soin : "))
let coutTotal = quantitePotionSoin * prixPotionSoin
console.log(`Le prix pour ${quantitePotionSoin} potion soin est ${coutTotal}`)

let argentAventurier = 100;
let stockAventurier = {
    "potions_soin":0,
    "potions_2":0,
    "potions_3":0
};

if (argentAventurier >= coutTotal && stockBoutique.potions_soin >= quantitePotionSoin) {
    argentAventurier-=coutTotal
    stockBoutique.potions_soin-=quantitePotionSoin
    stockAventurier.potions_soin+=quantitePotionSoin
}
else {
    console.log("Pas assez d'argent")
}

console.log(stockAventurier)
console.log(stockBoutique)

choixMenu = menu()

// - Créé un tableau qui contient les noms de trois potions que tu vends dans ta boutique.
// - Affiche le tableau directement dans la console.

