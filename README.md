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

9 possiamo inserire una condizione dove se elementActive è uguale alla lunghezza di domItem,

all'item attuale leviamo la classe active,
poniamo elementActive uguale a 0 e all'item con la classe active sarà quello in posizione 0 usando elementActive come indice di posizione nell'insieme di nodi

10 viceversa se elementActive è uguale a 0

all'item attuale leviamo la classe active,
poniamo elementActive uguale alla lunghezza del domItem e all'item con la classe active sarà quello in posizione (domItem.length) usando elementActive come indice di posizione nell'insieme di nodi

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva.

creo un box che la stessa altezza del suo contenitore ma ha una larghezza definita

il box ha position abosule ed è posizionato nel top=0 right=0 rispetto al contenitore items

le frecce saranno inserite in questo box

creaaom un'altro box che conttera l'immagine e il no-focus
questo box avra una altezza e larghezza definita

le immagini hanno la larghezza del box piccolo caso strabordino useremmo object fit : cover

Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.

per rendere le immmagini scure creremo un elemento che avra una classe no-focus che avrà le dimensioni del box piccolo, sarà position absolute rispetto al box piccolo sarà posizionato in alto a destra e avra un colore nero con opacita a 0.5

nel caso dell'immagine on-focus aggiungeremo un bordo al box piccolo

Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

nelle condizioni in cui cambio la posizione della classe active, possiamo rimuovere la classe no-focus e inserire la classe on-focus delle miniature a destra.
ci creiammo anche qui una variabile domMiniature con tutte le miniature dentro e la usiamo come domItem

BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;
