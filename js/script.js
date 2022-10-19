/*Esercizio di oggi:
nome repo: **js-paliedispari**
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
**Consigli del giorno**
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */ 










/* PARI E DISPARI */

const genera = document.querySelector('.pari-dispari button');

genera.addEventListener('click', function(){
  const sceltaUtente = document.getElementById('scegli').value;
  const numeroUtente = parseInt(document.getElementById('numero-utente').value);
  console.log(numeroUtente);
  const numeroComputer = numeroRandom(5, 1);
  const somma = numeroUtente + numeroComputer;
  const risultato = pariDispari(somma);
  const outputSceltaUtente = document.getElementById('scelta');
  const outputNumeroComputer = document.getElementById('numero-computer');
  const outputSomma = document.getElementById('somma');
  const outputRisultato = document.getElementById('risultato');
  let isCheck = checkNumero(numeroUtente);


  if (isCheck){
    outputSceltaUtente.innerText = `La tua scelta è ${sceltaUtente}`;
    outputNumeroComputer.innerText = `Il numero generato casualmente dal computer è ${numeroComputer}`;
    outputSomma.innerText = `La somma dei due numeri è ${somma}`;
    outputRisultato.innerText = `Vince ${risultato}`;

  }else {
    alert('Inserisci il numero corretto!!!!!')
  }

})










// FUNZIONI
function numeroRandom(max, min) {
  const numeroGenerato = Math.floor(Math.random() * (max - min + 1)) + min;

  return numeroGenerato;
}

function pariDispari(numero){
  if(!(numero % 2)){
    return 'Pari';
  }else {
    return 'Dispari';
  }
}

function checkNumero(nUtente){
  if(nUtente >= 1 && nUtente <= 5){
    return true;
  } else {
    return false;
  }
}