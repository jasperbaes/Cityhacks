"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
   console.log(data)
   addTopIndicators()
   addImages()
}

function addTopIndicators() {
    let html = ''
    data.forEach((e, index) => {
        html += (index == 0) ? `<li data-target="#myCarousel" data-slide-to="${index}" class="active"></li>`
        : `<li data-target="#myCarousel" data-slide-to="${index}" class=""></li>`
    })
    document.querySelector('.carousel-indicators').innerHTML = html
}

function addImages() {
    let html = ''
    data.forEach((e, index) => {
        if (index==0) html += `<div class="carousel-item active">`
        else html += `<div class="carousel-item">`
        html += 
        `
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
            <div class="container">
                <div class="carousel-caption text-left" style="top:100px;">
                    <h1>${e.date}</h1>
                    <p>${e.title}</p>
                </div>
            </div>
      </div>`
    })
    document.querySelector('.carousel-inner').innerHTML = html
}





















let data = [
    {
      "date":"1240",
      "title":"De eerste steen"
    },
    {
      "date":"1389",
      "title":"Storm tijsterd het belfort"
    },
    {
      "date":"1449-1450",
      "title":"Het werd tijd..."
    },
    {
      "date":"1524-1567",
      "title":"De basis is gelegd"
    },
    {
      "date":"1690",
      "title":"We zijn er bijna..."
    },
    {
      "date":"1741",
      "title":"... maar toch niet helemaal"
    },
    {
      "date":"1826",
      "title":"Volledige restauratie"
    },
    {
      "date":"1917",
      "title":"Bezet door het Duitse leger"
    },
    {
      "date":"1964-1975",
      "title":"Behouden oude bouwmaterialen"
    },
    {
      "date":"1979-1984",
      "title":"Finishing touch"
    }
  ]