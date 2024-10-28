/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


"use strict";

console.clear();
//km da percorrere
const km = parseFloat(prompt("quanti km vuoi percorrere?"));



//prezzo per km
const priceKm = 0.21;

//sconto under
const discountUnder = 20;

//sconto over
const discountOver = 40;

//costo del biglietto
let finalPrice = (priceKm * km);



//validazione inserimento numero e non altri caratteri
if (isNaN(km)){
    alert("hai inserito un carattere non numerico");
}

else{
    //età passeggero
const age = parseInt(prompt("quanti anni hai?"));

//costo under 18
    if(age < 18){
    
    let discount = (finalPrice / 100) * discountUnder;
    finalPrice -= discount;
    console.log(finalPrice.toFixed(2));
    alert("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }

    //costo over 65
    else if(age > 65){
        
        let discount = (finalPrice / 100) * discountOver;
        finalPrice -= discount
        console.log(finalPrice.toFixed(2));
        alert("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }

    //costo base
    else{
        
        console.log(finalPrice.toFixed(2));
        alert("il prezzo del biglietto è " + finalPrice.toFixed(2) + "€");
    }

}




