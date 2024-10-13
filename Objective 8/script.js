"use strict";

const body = document.querySelector("body");
let n = 0;
let result = 0;

const changebgBody = function () {
  body.style.backgroundImage = `url(img/Slideshow-img-${n}.jpg)`;
  n = (n + 1) % 9;
};

changebgBody();
setInterval(changebgBody, 2000);

let value1 = document.querySelector(".value1").value;
let value2 = document.querySelector(".value2").value;

document.querySelector("button").addEventListener("click", function () {
  value1 = document.querySelector(".value1").value;
  value2 = document.querySelector(".value2").value;
  console.log(value1);
  console.log(value2);
  scoreEl.textContent = result;
});
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