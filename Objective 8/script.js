"use strict";

{
  const imagePaths = [
    "img/Slideshow-img-0.jpg",
    "img/Slideshow-img-1.jpg",
    "img/Slideshow-img-2.jpg",
    "img/Slideshow-img-3.jpg",
    "img/Slideshow-img-4.jpg",
    "img/Slideshow-img-5.jpg",
    "img/Slideshow-img-6.jpg",
    "img/Slideshow-img-7.jpg",
    "img/Slideshow-img-8.jpg",
  ];
  const preloadImages = (paths) => {
    paths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  };
  preloadImages(imagePaths);
}

const body = document.querySelector("body");
let n = 0;
let result = 0;

const changebgBody = function () {
  body.style.backgroundImage = `url(img/Slideshow-img-${n}.jpg)`;
  n = (n + 1) % 9;
};

changebgBody();
setInterval(changebgBody, 2000);

let value1 = 0;
let value2 = 0;

const scoreEl = document.querySelector(".score span");

document.querySelector(".add").addEventListener("click", function () {
  value1 = Number(document.querySelector(".value1").value);
  value2 = Number(document.querySelector(".value2").value);
  scoreEl.textContent = value1 + value2;
});
document.querySelector(".sub").addEventListener("click", function () {
  value1 = Number(document.querySelector(".value1").value);
  value2 = Number(document.querySelector(".value2").value);
  scoreEl.textContent = value1 - value2;
});
document.querySelector(".mul").addEventListener("click", function () {
  value1 = Number(document.querySelector(".value1").value);
  value2 = Number(document.querySelector(".value2").value);
  scoreEl.textContent = value1 * value2;
});
document.querySelector(".div").addEventListener("click", function () {
  value1 = Number(document.querySelector(".value1").value);
  value2 = Number(document.querySelector(".value2").value);
  scoreEl.textContent = value1 / value2;
});
