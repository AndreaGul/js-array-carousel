# Carosello immagini

## Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

1 dichiaro una variiiabile che sarà definita con una array che al suo interno avra i nomi delle immagini

2 tramite un inner html nella classe items inserisco un template literal che conterra un div con classe item che a sua volta avrà un immagine al suo interno

3 tramite un ciclo for posso far scorrere i valori all'interno del'array immagini cosi facendo ad ogni ciclo nel template literal ci sarà un immagine diversa
(la quantita di cicli saà definita dalla lunchezza dell'array immagini)

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

4 prima e fuori dal ciclo for dichiaro una variabile active e la definisco con il valore 0.
Tramite una condizione all'interno del ciclo vado a inserire la classe active in item con classList.add grazie alla posizione attuale data da i(contatore del ciclo) e elementActive

MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

5 dichiariamo una variabile domItem che sara definita con tutti gli elementi che hanno classe item(grazie a querySelectAll)
utilizzando il valore di elementActive noi possiamo spostarci tra i nodi contenuti in domItem
e cosi facendo

Considerazioni
grazie al loop precedente la classe active e sempre presente sul primo item grazie al controllo fatto con elementActive

6 nella posizione attuale data da domItem[elementActive] andiamo a rimuovere la classe active con classList.remove
arrivati a cio incrementiamo il valore di elementActive e andiamo a inserire nelle classi di quest'alto elemento domItem[elmentActive] la classe active

7 Grazie ad event listener possiamo scatenare questo evento una volta cliccata la freccia

8 Dobbiamo tener conto della quantita di elementi contenuti in domItem per fermare lo scorrimento delle immagini una volta arrivati all'ultima imponendo una condizione che fino alla lunghezza di domItem - 1 è minore di elementActive il click fa attivare l'evento.
viceversa per poter scorrere a ritroso se elementActive è maggiore di 0 il click fa attivare l'evento

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;
