let x = 51.208115 
let y = 3.224755

let base = `https://geo.onroerenderfgoed.be/zoekdiensten/afbakeningen`
let url = '?categorie=erfgoedobjecten'
let coor =  `&geometrie={"type": "Point", "coordinates": [${y},${x}]}`
let buffer = `&buffer=10`


fetch(base + url + coor + buffer)
  .then(response => response.json())
  .then(e => console.log(e));