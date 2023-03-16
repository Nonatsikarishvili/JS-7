"use strict";

let burgerDiv = document.querySelector(".burgerDiv");
let ultag = document.querySelector(".ulTag");

burgerDiv.addEventListener("click", function () {
  burgerDiv.classList.toggle("activeburger");
  ultag.classList.toggle("noUl");
});

// task 2

let headerColor = document.querySelector(".header");
window.onscroll = () => {
  if (window.scrollY > 100) {
    headerColor.classList.add("headeractive");
  } else {
    headerColor.classList.remove("headeractive");
  }
};
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   if (document.documentElement.scrollTop > 50) {
//     document.getElementById("header").className = "headeractive";
//   } else {
//     document.getElementById("header").className = " ";
//   }
// }

// scroll to top
let scrollBtn = document.querySelector(".scroll");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// accordion
let accordionDiv = document.querySelectorAll(".acc-div");
for (let item of accordionDiv) {
  item.addEventListener("click", function () {
    this.classList.toggle("activAcc-div");
  });
}

let iTag = document.createElement("i");
iTag.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
iTag.style.color = "black";
iTag.style.marginLeft = "600px";
iTag.classList.add("iUp");

let iDown = document.createElement("i");
iDown.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
iDown.style.marginLeft = "600px";
iDown.style.color = "black";
iDown.classList.add("iDown");

let accordionTittle = document.querySelectorAll(".accordionTittle");
for (const iterator of accordionTittle) {
  iterator.appendChild(iTag);
  iterator.appendChild(iDown);
}
