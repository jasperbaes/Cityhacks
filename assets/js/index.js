"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {

    let elem = document.querySelector("#interest");
    populateInterests(elem);
    getInitialData();
}

function getInitialData() {
    let id = 29458;
    getErfgoedById(id);

    let x = 51.208115;
    let y = 3.224755;
    getErfgoedAround(x,y);
}

function populateInterests(element) {

    let interests = ["not interested","musea","gebouwen","eten","alcohol","drugs"]
    interests.forEach(function (interest) {
        let button = createElement("button");
        setAttribute(button,"type","button");
        setAttribute(button,"value",interest);
        makeTextNode(button,interest);
        element.appendChild(button);
    });
    setEventListeners();
}

function goToNextPage(e) {
    localStorage.setItem("interest",this.value);
    window.location.href = "map.html";
}

function setEventListeners() {
  let buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
      button.addEventListener("click",goToNextPage)
  })
}