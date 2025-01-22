

const nomBoutique = "exemple"
let nomSorcier = "Archibald"
let nbPotions = 5
let prixPotionSoin = 3
let quantitePotionSoin = 10
let ouvertureBoutique = false

let affichageMenu = `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ?\n1. Le nom de la boutique\n2. Le nom du Sorcier\n3. Le prix d'un potion de soin\n4. La quantité d'une potion de soin`
let choix = 0

if (ouvertureBoutique) {
    console.log(`Bienvenue dans la boutique ${nomBoutique} Aventurier !`)
}

else {
    console.log(`La boutique ${nomBoutique} est fermée, revenez plus tard Aventurier !`)
}

function menu() {
    while (choix === 0) {
        console.log(affichageMenu)    
        if (parseInt(choix) === 1) {
            console.log(nomBoutique)
        }
        else if (parseInt(choix) === 2) {
            console.log(nomSorcier)
        }
        else if (parseInt(choix) === 3) {
            console.log(prixPotionSoin)}
        else if (parseInt(choix) === 4) {
            console.log(quantitePotionSoin)
        }
        else {
            console.log(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !`)
            choix = 0
        }
    }
}