const btnArrowUp = document.querySelector(".arrow-up");
const btnArrowDown = document.querySelector(".arrow-down");

const imagesList = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];

let counterImg = 0;

//Inserimento dinamico delle immagini e delle thumbnails
for (i = 0; i < imagesList.length; i++) {
  let image = imagesList[i];
  document.querySelector(".img-wrapper").innerHTML += `
  <img class="img hide" src="${image}">
  `;
  document.querySelector(".thumbnails-wrapper").innerHTML += `
  <img class="img-thumbnail opacity" src="${image}">
  `;
}

//Inserimento di tutti gli elementi immagine creati in una collection e rimozione classe hide al primo elemento
const imageCollection = document.querySelectorAll(".img");
imageCollection[counterImg].classList.remove("hide");

//Inserimento di tutti gli elementi immagine-thumbnails creati in una collection, rimozione classe opacity e aggiunta classe border al primo elemento
const imageThumbnailCollection = document.querySelectorAll(".img-thumbnail");
imageThumbnailCollection[counterImg].classList.remove("opacity");
imageThumbnailCollection[counterImg].classList.add("border");

//Inserimento logica cambio immagini al click
btnArrowDown.addEventListener("click", function () {
  activateImg(counterImg);

  if (counterImg === imagesList.length - 1) {
    counterImg = 0;
  } else {
    counterImg++;
  }

  inactivateImg(counterImg);
});

btnArrowUp.addEventListener("click", function () {
  activateImg(counterImg);

  if (counterImg === 0) {
    counterImg = imagesList.length - 1;
  } else {
    counterImg--;
  }

  inactivateImg(counterImg);
});

//Inserimento logica cambio immagini con autoplay
const autoplay = setInterval(()=>{
  activateImg(counterImg);

  if (counterImg === imagesList.length - 1) {
    counterImg = 0;
  } else {
    counterImg++;
  }

  inactivateImg(counterImg);
}, 3000)

// FUNCTIONS
function activateImg(counter) {
  imageCollection[counter].classList.add("hide");
  imageThumbnailCollection[counter].classList.add("opacity");
  imageThumbnailCollection[counter].classList.remove("border");
}

function inactivateImg(counter) {
  imageCollection[counter].classList.remove("hide");
  imageThumbnailCollection[counter].classList.remove("opacity");
  imageThumbnailCollection[counter].classList.add("border");
}
