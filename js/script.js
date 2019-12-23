var RandomNum;
var NumeroUscito;
var Puntata;
var VincitaPotenziale;
var Colore;
var TipoGiocata;
var ColoreUtente;
var PariDispari;
var FirstOrSecondHalf;
var Terzine;

// scelta colore
document.getElementById('primo-12').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul "1 to 12"?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'Terzine';
    Terzine = '1 to 12';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "1 to 12"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.');
  }
});
document.getElementById('secondo-12').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul "13 to 24"?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'Terzine';
    Terzine = '13 to 24';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "13 to 24"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.');
  }
});
document.getElementById('terzo-12').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul "25 to 36"?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'Terzine';
    Terzine = '25 to 36';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "25 to 36"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.');
  }
});

document.getElementById('dispari').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul dispari?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'PariDispari';
    PariDispari = 'Dispari';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul dispari';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});
document.getElementById('rosso').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul rosso?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'Colore';
    ColoreUtente = 'Rosso';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul rosso';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});

document.getElementById('nero').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul nero?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'Colore';
    ColoreUtente = 'Nero';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul nero';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});
document.getElementById('oneto18').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul "1 to 18"?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'FirstOrSecondHalf';
    FirstOrSecondHalf = 'FirstHalf';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "1 to 18"';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});
document.getElementById('nineteento36').addEventListener('click',
function () {
  Puntata = prompt('Quanto vuoi giocare sul "19 to 36"?');
  if (!isNaN(Puntata) && Puntata > 0) {
    TipoGiocata = 'FirstOrSecondHalf';
    FirstOrSecondHalf = 'SecondHalf';
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "19 to 36"';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});

// click su gioca
document.getElementById('gioca').addEventListener('click',
function () {
  RandomNum = Math.floor(Math.random() * 37);
  document.getElementById('random-num').innerHTML = RandomNum;
  document.getElementById('pallina').classList.add('animation');


  if (RandomNum == 0) {
    NumeroUscito = 0;
    document.getElementById('inner-roulette').classList.add('rotate0');
  } else if (RandomNum == 1) {
    NumeroUscito = 32;
    document.getElementById('inner-roulette').classList.add('rotate1');
    Colore = 'Rosso';
  } else if (RandomNum == 2) {
    NumeroUscito = 15;
    document.getElementById('inner-roulette').classList.add('rotate2');
    Colore = 'Nero';
  }  else if (RandomNum == 3) {
    NumeroUscito = 19;
    document.getElementById('inner-roulette').classList.add('rotate3');
    Colore = 'Rosso';
  } else if (RandomNum == 4) {
    NumeroUscito = 4;
    document.getElementById('inner-roulette').classList.add('rotate4');
      Colore = 'Nero';
  } else if (RandomNum == 5) {
    NumeroUscito = 21;
    document.getElementById('inner-roulette').classList.add('rotate5');
    Colore = 'Rosso';
  } else if (RandomNum == 6) {
    NumeroUscito = 2;
    document.getElementById('inner-roulette').classList.add('rotate6');
      Colore = 'Nero';
  } else if (RandomNum == 7) {
    NumeroUscito = 25;
    document.getElementById('inner-roulette').classList.add('rotate7');
    Colore = 'Rosso';
  } else if (RandomNum == 8) {
    NumeroUscito = 17;
    document.getElementById('inner-roulette').classList.add('rotate8');
    Colore = 'Nero';
  } else if (RandomNum == 9) {
    NumeroUscito = 34;
    document.getElementById('inner-roulette').classList.add('rotate9');
    Colore = 'Rosso';
  } else if (RandomNum == 10) {
    NumeroUscito = 6;
    document.getElementById('inner-roulette').classList.add('rotate10');
    Colore = 'Nero';
  } else if (RandomNum == 11) {
    NumeroUscito = 27;
    document.getElementById('inner-roulette').classList.add('rotate11');
    Colore = 'Rosso';
  } else if (RandomNum == 12) {
    NumeroUscito = 13;
    document.getElementById('inner-roulette').classList.add('rotate12');
    Colore = 'Nero';
  } else if (RandomNum == 13) {
    NumeroUscito = 36;
    document.getElementById('inner-roulette').classList.add('rotate13');
    Colore = 'Rosso';
  } else if (RandomNum == 14) {
    NumeroUscito = 11;
    document.getElementById('inner-roulette').classList.add('rotate14');
    Colore = 'Nero';
  } else if (RandomNum == 15) {
    NumeroUscito = 30;
    document.getElementById('inner-roulette').classList.add('rotate15');
    Colore = 'Rosso';
  } else if (RandomNum == 16) {
    NumeroUscito = 8;
    document.getElementById('inner-roulette').classList.add('rotate16');
    Colore = 'Nero';
  } else if (RandomNum == 17) {
    NumeroUscito = 23;
    document.getElementById('inner-roulette').classList.add('rotate17');
    Colore = 'Rosso';
  } else if (RandomNum == 18) {
    NumeroUscito = 10;
    document.getElementById('inner-roulette').classList.add('rotate18');
    Colore = 'Nero';
  } else if (RandomNum == 19) {
    NumeroUscito = 5;
    document.getElementById('inner-roulette').classList.add('rotate19');
    Colore = 'Rosso';
  } else if (RandomNum == 20) {
    NumeroUscito = 24;
    document.getElementById('inner-roulette').classList.add('rotate20');
    Colore = 'Nero';
  } else if (RandomNum == 21) {
    NumeroUscito = 16;
    document.getElementById('inner-roulette').classList.add('rotate21');
    Colore = 'Rosso';
  } else if (RandomNum == 22) {
    NumeroUscito = 33;
    document.getElementById('inner-roulette').classList.add('rotate22');
    Colore = 'Nero';
  } else if (RandomNum == 23) {
    NumeroUscito = 1;
    document.getElementById('inner-roulette').classList.add('rotate23');
    Colore = 'Rosso';
  } else if (RandomNum == 24) {
    NumeroUscito = 20;
    document.getElementById('inner-roulette').classList.add('rotate24');
    Colore = 'Nero';
  } else if (RandomNum == 25) {
    NumeroUscito = 14;
    document.getElementById('inner-roulette').classList.add('rotate25');
    Colore = 'Rosso';
  } else if (RandomNum == 26) {
    NumeroUscito = 31;
    document.getElementById('inner-roulette').classList.add('rotate26');
    Colore = 'Nero';
  } else if (RandomNum == 27) {
    NumeroUscito = 9;
    document.getElementById('inner-roulette').classList.add('rotate27');
    Colore = 'Rosso';
  } else if (RandomNum == 28) {
    NumeroUscito = 22;
    document.getElementById('inner-roulette').classList.add('rotate28');
    Colore = 'Nero';
  } else if (RandomNum == 29) {
    NumeroUscito = 18;
    document.getElementById('inner-roulette').classList.add('rotate29');
    Colore = 'Rosso';
  } else if (RandomNum == 30) {
    NumeroUscito = 29;
    document.getElementById('inner-roulette').classList.add('rotate30');
    Colore = 'Nero';
  } else if (RandomNum == 31) {
    NumeroUscito = 7;
    document.getElementById('inner-roulette').classList.add('rotate31');
    Colore = 'Rosso';
  } else if (RandomNum == 32) {
    NumeroUscito = 28;
    document.getElementById('inner-roulette').classList.add('rotate32');
    Colore = 'Nero';
  } else if (RandomNum == 33) {
    NumeroUscito = 12;
    document.getElementById('inner-roulette').classList.add('rotate33');
    Colore = 'Rosso';
  } else if (RandomNum == 34) {
    NumeroUscito = 35;
    document.getElementById('inner-roulette').classList.add('rotate34');
    Colore = 'Nero';
  } else if (RandomNum == 35) {
    NumeroUscito = 3;
    document.getElementById('inner-roulette').classList.add('rotate35');
    Colore = 'Rosso';
  } else if (RandomNum == 36) {
    NumeroUscito = 26;
    document.getElementById('inner-roulette').classList.add('rotate36');
    Colore = 'Nero';
  }
  setTimeout(function(){document.getElementById('num-uscito').innerHTML = NumeroUscito + Colore}, 8500); console.log(TipoGiocata);
  if (TipoGiocata == 'Terzine') {
    if ((Terzine == '1 to 12' && NumeroUscito < 13 && NumeroUscito > 0) || (Terzine == '13 to 24' &&  NumeroUscito < 25 && NumeroUscito >= 13) || (Terzine == '25 to 36' &&  NumeroUscito <= 36 && NumeroUscito >= 25)) {
      setTimeout(function(){ alert('hai vinto ' + VincitaPotenziale + ' €	!!' )}, 8500);
    } else {
      setTimeout(function(){ alert('hai perso!!')}, 8500);
    }
  }
  if (TipoGiocata == 'PariDispari') {
    if (PariDispari == 'Pari' && NumeroUscito % 2 && NumeroUscito > 0 || PariDispari == 'Dispari' && NumeroUscito % 2 == 1) {
      setTimeout(function(){ alert('hai vinto ' + VincitaPotenziale + ' €	!!' )}, 8500);
    } else {
      setTimeout(function(){ alert('hai perso!!')}, 8500);
    }
  }
  if (TipoGiocata == 'Colore') {
    if (ColoreUtente == Colore) {
      setTimeout(function(){ alert('hai vinto ' + VincitaPotenziale + ' €	!!' )}, 8500);
    } else {
      setTimeout(function(){ alert('hai perso!!')}, 8500);
    }
  }
  if (TipoGiocata == 'FirstOrSecondHalf') {
    if (FirstOrSecondHalf == 'FirstHalf' &&  NumeroUscito < 19 && NumeroUscito > 0 || FirstOrSecondHalf == 'SecondHalf' && NumeroUscito >= 19) {
      setTimeout(function(){ alert('hai vinto ' + VincitaPotenziale + ' €	!!' )}, 8500);
    } else {
      setTimeout(function(){ alert('hai perso!!')}, 8500);
    }
  }

});


document.getElementById('reset').addEventListener('click',
function () {
  document.getElementById('inner-roulette').className = 'transform5050';
  document.getElementById('pallina').classList.remove('animation');

});
