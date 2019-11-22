"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {


    setEventListeners();
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
        let option = createElement("option");
        setAttribute(option,"value",interest);
        makeTextNode(option,interest);
        element.appendChild(option);
    })
}
function processForm(e) {
    e.preventDefault();
    window.location.href = "overview.html";

}

function setEventListeners() {
    document.querySelector("form").addEventListener("submit",processForm);
}