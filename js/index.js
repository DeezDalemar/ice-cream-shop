"use strict";

const numOfScoops = document.getElementById("numberOfScoopsAns");
const coneRadio = document.getElementById("coneRadio");
const cupRadio = document.getElementById("cupRadio");
const sprinklesCheck = document.getElementById("sprinklesCheck");
const whippedCreamCheck = document.getElementById("whippedCreamCheck");
const hotFudgeCheck = document.getElementById("hotFudgeCheck");
const cherriesCheck = document.getElementById("cherriesCheck");
const sumbitButton = document.getElementById("submitButton");
const answerText1 = document.getElementById("answerText1");
const answerText2 = document.getElementById("answerText2");
const answerText3 = document.getElementById("answerText3");
const toppingsMenu = document.getElementById("toppings");

let currentPrice = 2.25;
let additionalScoopPrice = 1.5;
let taxAmount = 0.15;

function showToppingsMenu() {
   toppingsMenu.style.display = "block";
}

function hideToppingsMenu() {
   toppingsMenu.style.display = "none";
   sprinklesCheck.checked = false;
   whippedCreamCheck.checked = false;
   hotFudgeCheck.checked = false;
   cherriesCheck.checked = false;
}

window.onload = function () {
   hideToppingsMenu();

   coneRadio.onclick = hideToppingsMenu;
   cupRadio.onclick = showToppingsMenu;

   sumbitButton.onclick = priceCalculations;
};

function priceCalculations() {
   currentPrice = 2.25;

   let amountOfScoops = parseFloat(numOfScoops.value);

   if (amountOfScoops > 1) {
      currentPrice = currentPrice + amountOfScoops * additionalScoopPrice;
   }

   if (sprinklesCheck.checked) {
      currentPrice += 0.5;
   }
   if (whippedCreamCheck.checked) {
      currentPrice += 0.25;
   }
   if (hotFudgeCheck.checked) {
      currentPrice += 1.25;
   }
   if (cherriesCheck.checked) {
      currentPrice += 0.25;
   }

   let priceTax = currentPrice * taxAmount;
   let totalAmount = currentPrice + priceTax;

   answerText1.innerText = `Base Price: $${currentPrice}`;
   answerText2.innerText = `Tax: $${priceTax.toFixed(2)}`;
   answerText3.innerText = `Total Due: $${totalAmount.toFixed(2)}`;

   console.log("should be working");
}
