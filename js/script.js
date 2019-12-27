var RandomNum;
var NumeroUscito;
var Puntata = 0;
var TentativoPuntata;
var VincitaPotenziale;
var Colore;
var TipoGiocata;
var ColoreUtente;
var PariDispari;
var FirstOrSecondHalf;
var Terzine;
var NumeroSingolo;
var Colonna;
var Balance = 100;
var Deposito;
var Prelievo;
document.getElementById('deposita').addEventListener('click',
function() {
Deposito = prompt('Quanto vuoi depositare?') * 1;
if (isNaN(Deposito) || Deposito < 10) {
  alert('Puoi depositare minimo 10 euro.');
} else {
  Balance += Deposito;
  document.getElementById('balance').innerHTML = Balance;
  alert('Hai depositato ' + Deposito + ' €');
}
});
document.getElementById('preleva').addEventListener('click',
function () {
  Prelievo = prompt('Quanto vuoi prelevare?') * 1;
  if (isNaN(Prelievo) || Prelievo < 10) {
    alert("Il minimo prelevabile é 10 euro.");
  } else if (Balance < Prelievo) {
    alert("Non puoi prelevare una cifra superiore al tuo balance");
  } else {
    Balance -= Prelievo;
    document.getElementById('balance').innerHTML = Balance;
    alert('Hai prelevato ' + Prelievo + ' €');
  }
});
// scelta Numero Singolo
document.getElementById('zero').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sullo 0 ?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 0;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sullo 0';
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('uno').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sull'1 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 1;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sull'1";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('due').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 2 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 2;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 2";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('tre').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 3 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 3;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 3";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('quattro').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 4 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 4;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 4";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('cinque').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 5 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 5;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 5";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('sei').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 6 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 6;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');

    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 6";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('sette').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 7 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 7;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 7";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('otto').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sull' 8 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 8;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 8";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('nove').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 9 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 9;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 9";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('dieci').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 10 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 10;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 10";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('undici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 11 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 11;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 11";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('dodici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 12 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 12;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 12";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('tredici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 13 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 13;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 13";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('quattordici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 14 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 14;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 14";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('quindici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 15 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 15;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 15";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('sedici').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 16 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 16;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 16";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('diciasette').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 17 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 17;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 17";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('diciotto').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 18 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 18;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 18";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('diciannove').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 19 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 19;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 19";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('venti').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 20 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 20;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 20";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventuno').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 21 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 21;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 21";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventidue').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 22 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 22;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 22";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventitre').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 23 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 23;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 23";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventiquattro').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 24 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 24;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 24";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('venticinque').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 25 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 25;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 25";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventisei').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 26 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 26;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 26";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventisette').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 27 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 27;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 27";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventotto').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 28 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 28;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 28";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('ventinove').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 29 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 29;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 29";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trenta').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 30 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 30;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 30";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentuno').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 31 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 31;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 31";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentadue').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 32 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 32;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 32";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentatre').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 33 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 33;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 33";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentaquattro').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 34 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 34;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 34";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentacinque').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 35 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 35;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 35";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('trentasei').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sul 36 ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'NumeroSingolo';
    NumeroSingolo = 36;
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sul 36";
    VincitaPotenziale = Puntata * 36;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});

// Scelta Colonne
document.getElementById('primacolonna').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sulla prima colonna ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Colonna';
    Colonna = 'prima';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sulla prima colonna";
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('secondacolonna').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sulla seconda colonna ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Colonna';
    Colonna = 'seconda';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sulla seconda colonna";
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('terzacolonna').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt("Quanto vuoi giocare sulla terza colonna ?"));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Colonna';
    Colonna = 'terza';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = "sulla terza colonna";
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});

// scelta Terzine
document.getElementById('primo-12').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul "1 to 12"?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Terzine';
    Terzine = '1 to 12';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "1 to 12"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('secondo-12').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul "13 to 24"?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Terzine';
    Terzine = '13 to 24';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "13 to 24"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});
document.getElementById('terzo-12').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul "25 to 36"?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Terzine';
    Terzine = '25 to 36';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul "25 to 36"';
    VincitaPotenziale = Puntata * 3;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero e non maggiore del balance.');
  }
});

// Scelta Pari o Dispari
document.getElementById('pari').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul pari?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'PariDispari';
    PariDispari = 'Pari';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul pari';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});

document.getElementById('dispari').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul dispari?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'PariDispari';
    PariDispari = 'Dispari';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
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

// Scelta Rosso o Nero
document.getElementById('Rosso').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul Rosso?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Colore';
    ColoreUtente = 'Rosso';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul Rosso';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});

document.getElementById('Nero').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul Nero?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'Colore';
    ColoreUtente = 'Nero';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
    document.getElementById('gioca').className = 'visible';
    document.getElementById('puntata').className = 'visible';
    document.getElementById('importo-puntata').innerHTML = Puntata;
    document.getElementById('tipo-giocata').innerHTML = 'sul Nero';
    VincitaPotenziale = Puntata * 2;
    document.getElementById('importo-vincita-pot').innerHTML = VincitaPotenziale;
    document.getElementById('vincita-potenziale').className = 'visible';
  } else {
    alert('Inserisci un numero intero maggiore di zero.')
  }
});

// Scelta prima o seconda metà
document.getElementById('oneto18').addEventListener('click',
function () {
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul "1 to 18"?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'FirstOrSecondHalf';
    FirstOrSecondHalf = 'FirstHalf';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
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
  TentativoPuntata = parseInt(prompt('Quanto vuoi giocare sul "19 to 36"?'));
  if (!isNaN(TentativoPuntata) && TentativoPuntata > 0 && TentativoPuntata <= Balance + Puntata) {
    TipoGiocata = 'FirstOrSecondHalf';
    FirstOrSecondHalf = 'SecondHalf';
    Balance = Balance + Puntata - TentativoPuntata;
    Puntata = TentativoPuntata;
    document.getElementById('balance').innerHTML = Balance;
    document.getElementById('titolo').className = 'hidden';
    document.getElementById('inner-roulette').className = 'transform5050';
    document.getElementById('pallina').classList.remove('animation');
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
  document.getElementById('gioca').className = "hidden";
  document.getElementById('pallina').classList.add('animation');
  document.getElementById('overlay-container').className = "";
  document.getElementById('overlay').classList.add("hidden");
  if (RandomNum == 0) {
    NumeroUscito = 0;
    document.getElementById('inner-roulette').classList.add('rotate0');
    Colore = "";
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
  document.getElementById('giocata').innerHTML = "Hai puntato: " + Puntata + " € " + document.getElementById('tipo-giocata').innerHTML;
  document.getElementById('risultato').innerHTML = "E' uscito: " + NumeroUscito + " " + Colore;
  setTimeout(function(){document.getElementById('overlay').classList.remove("hidden")}, 8500);

  // Verifica Esito Giocata
  if (TipoGiocata == 'NumeroSingolo') {
    if (NumeroSingolo == NumeroUscito) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;
    } else  {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  } else if (TipoGiocata == 'Colonna') {
    if (Colonna == 'prima' && NumeroUscito % 3 == 1 || Colonna == 'seconda' && NumeroUscito % 3 == 2 || Colonna == 'terza' && NumeroUscito % 3 == 0) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;
    } else  {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  } else if (TipoGiocata == 'Terzine') {
    if ((Terzine == '1 to 12' && NumeroUscito < 13 && NumeroUscito > 0) || (Terzine == '13 to 24' &&  NumeroUscito < 25 && NumeroUscito >= 13) || (Terzine == '25 to 36' &&  NumeroUscito <= 36 && NumeroUscito >= 25)) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;
    } else {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  } else if (TipoGiocata == 'PariDispari') {
    if (PariDispari == 'Pari' && NumeroUscito % 2 == 0 && NumeroUscito > 0 || PariDispari == 'Dispari' && NumeroUscito % 2 == 1) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;
    } else {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  } else if (TipoGiocata == 'Colore') {
    if (ColoreUtente == Colore) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;

    } else {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  } else if (TipoGiocata == 'FirstOrSecondHalf') {
    if (FirstOrSecondHalf == 'FirstHalf' &&  NumeroUscito < 19 && NumeroUscito > 0 || FirstOrSecondHalf == 'SecondHalf' && NumeroUscito >= 19) {
      document.getElementById('esito').innerHTML = 'Hai vinto ' + VincitaPotenziale + ' €';
      Balance += VincitaPotenziale;

    } else {
      document.getElementById('esito').innerHTML = 'Hai perso ' + Puntata + ' €';
    }
  }
  setTimeout(function(){document.getElementById('balance').innerHTML = Balance}, 9500);
  setTimeout(function(){document.getElementById('balance-container').className = 'balance-update'}, 8500);
  setTimeout(function(){document.getElementById('balance-container').className = ''}, 10500);
  setTimeout(function(){document.getElementById('puntata').className = "hidden"}, 8500);
  setTimeout(function(){document.getElementById('vincita-potenziale').className = "hidden"}, 8500);
});

document.getElementById('ok').addEventListener('click',
function() {
  document.getElementById('overlay-container').className = "hidden";
  document.getElementById('titolo').className = "";
  Puntata = 0;
});
