"use strict";


document.addEventListener("DOMContentLoaded", init);

function init() {

    setEventListeners();
    displayData();
}

function search(e) {
    e.preventDefault();
    let searchTerm = document.querySelector("#name").value;
}

function setEventListeners() {
    document.querySelector("form").addEventListener("submit",search);
}

function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("data"));
}

function displayData() {
    let data = getDataFromStorage();
    console.log(data);

    data.forEach(function (building) {
        let test = getErfgoedById(building.uri);
        test.then(response => makeOverview(response));
    })

}

function makeOverview(building){
    console.log(building);
    let section = document.querySelector("#dataDisplay");

    let name = building.naam;
    let tekst = building.teksten;
    let picture =`https://beeldbank.onroerenderfgoed.be/images/${building.id}/content/large`;

    let img = createElement("img");
    setAttribute(img,"class","imgOverview");
    setAttribute(img,"src",picture);
    let h1 = createElement("h1");
    makeTextNode(h1,name);
    let article = createElement("article");
    article.appendChild(h1);
    article.appendChild(img);
    section.appendChild(article);
}
