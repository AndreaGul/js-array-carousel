'use strict';

const elementItems = document.querySelector('.items');

//  dichiaro una variabile che sarà definita con una array che al suo interno avra i nomi delle immagini

const img = ['01', '02', '03', '04', '05'];

// prima e fuori dal ciclo for dichiaro una variabile active e la definisco con il valore 0.
let elementActive = 0;

// tramite un ciclo for posso far scorrere i valori all'interno del'array immagini cosi facendo ad ogni ciclo nel template literal ci sarà un immagine diversa
// (la quantita di cicli sarà definita dalla lunchezza dell'array immagini)

for (let i = 0; i < img.length; i++) {
  // con un inner html nella classe items inserisco un template literal che conterra un div con classe item che a sua volta avrà un immagine al suo interno

  // Tramite una condizione all'interno del ciclo vado a inserire la classe active in item grazie alla posizione attuale data da i(contatore del ciclo) e elementActive
  if (i === elementActive) {
    elementItems.innerHTML =
      elementItems.innerHTML +
      `
        <div class="item active">
          <img src="./img/${img[i]}.jpg " alt="" />
        </div>
        `;
  } else {
    elementItems.innerHTML =
      elementItems.innerHTML +
      `
        <div class="item ">
          <img src="./img/${img[i]}.jpg " alt="" />
        </div>
        `;
  }
}

//dichiariamo una variabile domItem che sara definita con tutti gli elementi che hanno classe item

const domItem = document.querySelectorAll('.item');

console.log(domItem);

// utilizzando il valore di elementActive noi possiamo spostarci tra i nodi contenuti in domItem
/*Considerazioni
    grazie al loop precedente la classe active e sempre presente sul primo item  grazie al controllo fatto con elementActive
*/

//Grazie ad event listener possiamo scatenare questo evento una volta cliccata la freccia
const next = document.querySelector('.next');

next.addEventListener('click', function () {
  // Dobbiamo tener conto della quantita di elementi contenuti in domItem per fermare lo scorrimento delle immagini una volta arrivati all'ultima

  if (elementActive < domItem.length - 1) {
    //nella posizione attuale data da domItem[elementActive] andiamo a rimuovere la classe active con classList.remove

    domItem[elementActive].classList.remove('active');

    // arrivati a cio incrementiamo il valore di elementActive

    elementActive++;

    //e andiamo a inserire nelle classi di quest'alto elemento domItem[elmentActive] la classe active

    domItem[elementActive].classList.add('active');
  }

  // BONUS 1:
  // Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

  // inseriamo una condizione dove se elementActive è uguale alla lunghezza di domItem
  else if (elementActive === domItem.length - 1) {
    //All'item attuale leviamo la classe active.
    domItem[elementActive].classList.remove('active');

    //Poniamo elementActive uguale a 0.
    elementActive = 0;

    //All'item con la classe active sarà quello in posizione 0 usando elementActive come indice di posizione nell'insieme di nodi.
    domItem[elementActive].classList.add('active');
  }
});

const prev = document.querySelector('.prev');

prev.addEventListener('click', function () {
  // Dobbiamo tener conto della quantita di elementi contenuti in domItem per fermare lo scorrimento delle immagini una volta arrivati alla prima

  if (elementActive > 0) {
    //nella posizione attuale data da domItem[elementActive] andiamo a rimuovere la classe active con classList.remove

    domItem[elementActive].classList.remove('active');

    // arrivati a cio decrementiamo il valore di elementActive

    elementActive--;

    //e andiamo a inserire nelle classi di quest'alto elemento domItem[elmentActive] la classe active

    domItem[elementActive].classList.add('active');
  }

  // BONUS 1:
  // Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

  // inseriamo una condizione dove se elementActive è uguale alla lunghezza di domItem
  else if (elementActive === 0) {
    //All'item attuale leviamo la classe active.
    domItem[elementActive].classList.remove('active');
    //Poniamo elementActive uguale alla lunghezza del domItem
    elementActive = domItem.length - 1;

    //All'item con la classe active sarà quello in posizione (domItem.length) usando elementActive come indice di posizione nell'insieme di nodi
    domItem[elementActive].classList.add('active');
  }
});
