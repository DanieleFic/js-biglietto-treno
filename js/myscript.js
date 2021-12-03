/* 
Il programma dovrà chiedere all’utente
il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) .

va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65. 
*/

let datiKMpercorsi = prompt ("Quanti KM vuoi percorrere?");
let datiAnniUtente = prompt ("Quanti anni hai?");

if(datiAnniUtente < 18){
    discount = 20;

}else if(datiAnniUtente >= 65){
    discount = 40;
}else{
    discount = 0;
}

const userPrezzobiglietto = (0.21  * datiKMpercorsi );
let Sconto = (userPrezzobiglietto / 100) * discount; 
let prezzoScontato = (userPrezzobiglietto - Sconto );

document.getElementById("costo").innerHTML = (prezzoScontato) + "€"
let n = prezzoScontato.toFixed(2);