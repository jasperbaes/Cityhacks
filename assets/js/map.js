"use strict";

document.addEventListener("DOMContentLoaded", init);


function init() {
    document.querySelector('#btn').addEventListener('click', e => { window.location.href = "./index.html"})
    let x = 51.208515;
    let y = 3.224755;

    let map = initMap(x,y);
    let belfort = [51.2079682626,3.2250209989];
    let cords = [belfort];
    cords.forEach(function (cord) {
        let layer = makeLayer(cord[0],cord[1]);
        map.addLayer(layer);
    });

    let overlay = makeOverlay();
    map.addOverlay(overlay);
    addFunction(overlay,map)

}

function initMap(x,y){
    let attribution = new ol.control.Attribution({
        collapsible: false
    });

    let map = new ol.Map({
        controls: ol.control.defaults({attribution: false}).extend([attribution]),  
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                    attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                    maxZoom: 50
                })
            })
        ],
        target: 'map',
        view: new ol.View({
            center: ol.proj.fromLonLat([y, x]),
            maxZoom: 29,
            zoom: 18
        })
    });
    return map;
}

function makeLayer(x,y) {

    let layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([y, x]))
                })
            ]
        })
    });
    return layer

}

function makeOverlay() {
    let container = document.getElementById('popup');


    let overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    return overlay;
}


function addFunction(overlay, map){
    let content = document.getElementById('popup-content');
    let closer = document.getElementById('popup-closer');

    closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };

    map.on('singleclick', function (event) {
        if (map.hasFeatureAtPixel(event.pixel) === true) {
            let coordinate = event.coordinate;
            console.log(event);
           // content.innerHTML = `<b>Belfort en halle</b><br /><button value=''>view more</button>`;
            getBuildingByCord(coordinate,content);
            overlay.setPosition(coordinate);
        } else {
            overlay.setPosition(undefined);
            closer.blur();
        }
    });
}

function seeDetails(e,response) {
    e.preventDefault();
    localStorage.setItem("text",response.teksten[0].tekst);
    window.location.href = "stories.html";
}

function makePopUp(response,coordinate,content) {
    console.log(response);
    let coordinates = response.locatie.contour.coordinates;

    console.log(coordinates.includes(coordinate));
    coordinates.forEach(function (cord) {
        if (response.naam.includes("Belfort")){
            console.log("includes");
            content.innerHTML = `<b>${response.naam}</b><br/><button value='${response.id}'>view more</button>`;
            
            document.querySelector("#popup button").addEventListener("click",function (e){
                seeDetails(e,response)
            });

        }
    });


}

function getBuildingByCord(coordinate,content) {
    let data = getDataFromStorage();
    console.log(data);

    data.forEach(function (building) {
        let test = getErfgoedById(building.uri);
        test.then(response => makePopUp(response,coordinate,content));
    })
}

function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("data"));
}
