"use strict"
/*
    1 - genero 5 numeri causali e li inserisco un un array
    2 - mostro i 5 numeri generati in un alert
    3 - dopo aver tolto l'alert parte un timer di 30 secondi
    4 - allo scadere dei 30 secondi uscirà un prompt dove inserire i numeri mostrati nell'alert
    5 - confronto i numeri inseriri con il prompt con quelli generati inizialmente e conteggio quanti sono presenti 

*/

const arrayRandomNumb = []
let timer = ""

// 1 - genero 5 numeri e li pusho nell'array

for (let i = 0; i < 5; i++) {
    const randomNumb = Math.ceil(Math.random() * 100 );
    arrayRandomNumb.push(randomNumb)
}
console.log(arrayRandomNumb);
// 2 - mostro i 5 numeri dell'array in un alert

alert(arrayRandomNumb)

// 3 - timer di 30 secondi

timer = setTimeout(() => {
    let numberPrompt = []
    let numberTrue = []
    for (let i = 0; i < 5; i++) {
        const promptValue = parseInt(prompt("inserisci uno dei numeri visti in precedenza"))
        numberPrompt.push(promptValue)
    }
    console.log(numberPrompt);
    
    for (let i = 0; i < numberPrompt.length; i++) {
        if(arrayRandomNumb.includes(numberPrompt[i])){
            numberTrue.push(numberPrompt[i])
        }
    }


    console.log(`complimenti, hai indovinitato ${numberTrue.length}. I numeri ${numberTrue} sono corretti`)
    console.log(numberTrue);
}, 3000);