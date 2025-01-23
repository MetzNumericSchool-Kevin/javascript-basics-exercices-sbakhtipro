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

let potionObjet1 = {
    "nom":"potion_5",
    "prix":2.5,
    "stock":50
}

console.log(potionObjet1)

console.log(potionObjet1.nom)
console.log(potionObjet1["prix"])

let inventaire = []
inventaire.push(potionObjet1)

let potionObjet2 = {
    "nom":"potion_6",
    "prix":2.5,
    "stock":80
}

let potionObjet3 = {
    "nom":"potion_7",
    "prix":2.5,
    "stock":60
}

inventaire.push(potionObjet2,potionObjet3)
console.log(inventaire)

inventaire.forEach(element => {
    console.log(element.nom)
    console.log(element.prix)
    console.log(element.stock)
});

inventaire.forEach(objet => {
    for (const key in objet) {
        console.log(`${key}:${objet[key]}`)
    }
});

// --------------------------------------------------------------------------------------------------------------

let bourseAventurier = 100
let inventaireAventurier = []

let bourseSorcier = 0
let inventaireBoutique = [
    {
        "nom":"potion_soin",
        "prix":40,
        "stock":1
    },
    {
        "nom":"potion_endurance",
        "prix":20,
        "stock":1
    },
    {
        "nom":"potion_mana",
        "prix":20,
        "stock":2
    }
]

// Le programme doit faire les choses suivantes :

// - Les actions possibles de l'Aventurier
//      - Avec ces informations:
//        - Si la quantité demandée est supérieure au stock, prévient l'Aventurier que ce n'est pas possible
//        - Sinon
//          - déduit sa bourse du total et ajoute cela à la tienne
//          - déduit le stock de la potion achetée
//          - ajoute la/les potion(s) achetée(s) dans l'inventaire de l'Aventurier

function achat(inventaire) {
    inventaire.forEach(element => {
        if (element.stock>0) {
            console.log(element.nom)
        }
    });
    prompt("Quelle potion souhaitez-vous acheter?")
}

achat(inventaireBoutique)

//   2. Vendre une potion
//      - Il peut essayer de vendre une des potions qu'il a dans l'inventaire (au même prix)
//        - Pour cela, tu dois lui faire deviner un chiffre entre 1 et 5 (voir `Math.random`) 🎲
//      - S'il a juste, tu lui rachete tout le stock de la potion en question (avec les mêmes règles de gestion que l'achat)
//      - S'il a faux, tu peux lui dire de re-tenter sa chance 😈
//   3. Quitter
//      - Il ne peut pas hehe 😈
// - Ce que l'aventurier ne sait pas, c'est que tu lui as jeté un sort qui l'oblige à répêter une de ces actions tant que sa bourse n'est pas vide avec `do ... while` 🪄
// - Affiche ton gain, fini les soupes de 🍄 !
// - 🚀 Si tu veux éviter la répétition de code tu peux utiliser des fonctions