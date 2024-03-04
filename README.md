# Carousel Autoplay

Riprendendo il carousel realizzato in passato  e con le Timeng Function rendere lo scroll automatico ogni 3 secondi.

Attenzione: dopo l’ultima slide deve riapparire la prima e così via

BONUS:
Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse

## Svolgimento
1. Rispetto alla consegna precedente, inserire le istruzioni per attivare/disattivare le immagini all'interno di due funzioni (activateImg e inactivateImg)
2. Con un setInterval di 3000ms, gestire l'attivazione/disattivazione delle immagini
3. Per creare un ciclo continuo, se il contatore delle immagini raggiunge la lunghezza di imagesList, assegnare al contatore valore 0