"use strict";

const Ques = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const Option = ["A", "B", "C", "D"];
const Ans = [
  "1B",
  "2A",
  "3A",
  "4D",
  "5C",
  "6B",
  "7A",
  "8C",
  "9B",
  "10A",
  "11B",
  "12B",
  "13C",
  "14C",
  "15B",
];
let score = 0;

const disableOptions = function () {
  for (let Q of Ques) {
    for (let O of Option) {
      let opid = "Q" + Q + O;
      document.getElementById(opid).disabled = true;
    }
  }
};

const enableOptions = function () {
  for (let Q of Ques) {
    for (let O of Option) {
      let opid = "Q" + Q + O;
      document.getElementById(opid).disabled = false;
    }
  }
};
let op, correctAns;
const checking = function () {
  //   disableOptions();
  for (let i = 0; i < Ques.length; i++) {
    let elem = document.getElementsByName("Q" + Ques[i]);
    for (op of elem) {
      console.log(op);
      correctAns = "Q" + Ans[i];
      if (op.checked) {
        if (op.id == correctAns) {
          document.querySelector("." + op.id).classList.add("right");
          score += 2;
        } else {
          document.querySelector("." + op.id).classList.add("wrong");
        }
      }
    }
  }
};

const displayScore = function () {
  document.querySelector(".score").classList.toggle("hidden");
  document.querySelector(".score p span").textContent = score;
};

const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  disableOptions();
  checking();
  displayScore();
});
