const buttonPalindroma = document.querySelector('button');

buttonPalindroma.addEventListener('click', function(){
  const parolaUtente = document.getElementById('parola-utente').value;
  const outputParola = document.getElementById('output-parola');
  checkParola(parolaUtente, outputParola);

})


/* PARI E DISPARI */

const genera = document.querySelector('.pari-dispari button');

genera.addEventListener('click', function(){
  const sceltaUtente = document.getElementById('scegli').value;
  const numeroUtente = document.getElementById('numero-utente');
  const valoreNumeroUtente = parseInt(numeroUtente.value);
  const numeroComputer = numeroRandom(5, 1);
  const somma = valoreNumeroUtente + numeroComputer;
  const risultato = pariDispari(somma);
  const outputSceltaUtente = document.getElementById('scelta');
  const outputNumeroComputer = document.getElementById('numero-computer');
  const outputSomma = document.getElementById('somma');
  const outputRisultato = document.getElementById('risultato');
  let isCheck = checkNumero(valoreNumeroUtente);


  if (isCheck){
    outputSceltaUtente.innerText = `La tua scelta è ${sceltaUtente}`;
    outputNumeroComputer.innerText = `Il numero generato casualmente dal computer è ${numeroComputer}`;
    outputSomma.innerText = `La somma dei due numeri è ${somma}`;
    outputRisultato.innerText = `Vince ${risultato}`;

  }else {
    alert('Inserisci il numero corretto!!!!!')
  }

  numeroUtente.value = '';
})










// FUNZIONI

// PALINDROMA
function checkParola(parola, output){
  const parolaInserita = [];
  const parolaInvertita = [];
  let stringaParolaInserita;
  let stringaParolaInvertita;

  for(let i = 0; i < parola.length; i++){
    parolaInserita.push(parola[i])
  }

  stringaParolaInserita = parolaInserita.toString();  
  parolaInvertita.push(parolaInserita.reverse())
  stringaParolaInvertita = parolaInvertita.toString()


  if(stringaParolaInserita === stringaParolaInvertita){
    output.innerText = 'La parola inserita è Palindroma'
  }else {
    output.innerText = 'La parola inserita non è Palindroma'
  }
}


// PARI E DISPARI
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