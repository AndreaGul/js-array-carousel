'use strict';

const elementItems = document.getElementById('items');

console.log(elementItems);

//  dichiaro una variabile che sarà definita con una array che al suo interno avra i nomi delle immagini

const img = ['01', '02', '03', '04', '05'];

// prima e fuori dal ciclo for dichiaro una variabile active e la definisco con il valore 0.
let elementActive = 0;

// tramite un ciclo for posso far scorrere i valori all'interno del'array immagini cosi facendo ad ogni ciclo nel template literal ci sarà un immagine diversa
// (la quantita di cicli sarà definita dalla lunchezza dell'array immagini)

for (let i = 0; i < img.length; i++) {
  // tramite un inner html nella classe items inserisco un template literal che conterra un div con classe item che a sua volta avrà un immagine al suo interno

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
