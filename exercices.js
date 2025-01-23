const nomBoutique = "exemple";
let nomSorcier = "Archibald";
let prixPotionSoin = 3;
let ouvertureBoutique = false;
let typesPotions = ["potions_soin", "potions_2", "potions_3"]

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

console.log(typesPotions[0])
console.log(typesPotions[typesPotions.length-1])
for (i=0;i<=typesPotions.length;i+=1) {
    console.log(typesPotions[i])
}

typesPotions.push("potions_4")
console.log(typesPotions)

typesPotions.pop("potions_4")
console.log(typesPotions)

let potionObjet = {
    "nom":"potion_5",
    "prix":2.5,
    "stock":50
}

console.log(potionObjet)

console.log(potionObjet.nom)
console.log(potionObjet["prix"])

let inventaire = []
inventaire.push(potionObjet)
console.log(inventaire)