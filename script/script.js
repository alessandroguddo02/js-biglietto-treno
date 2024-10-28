/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


//km da percorrere
const km = parseFloat(prompt("quanti km vuoi percorrere?"));

//età passeggero
const age = parseInt(prompt("quanti anni hai?"));

//prezzo per km
const priceKm = 0.21;

//sconto under
const discountUnder = 20;

//sconto over
const discountOver = 40;

//costo del biglietto
let finalPrice;

