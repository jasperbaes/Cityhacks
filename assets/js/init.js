

function getErfgoedAround(x,y){
  let base = `https://geo.onroerenderfgoed.be/zoekdiensten/afbakeningen`;
  let url = '?categorie=erfgoedobjecten';
  let coor =  `&geometrie={"type": "Point", "coordinates": [${y},${x}]}`;
  let buffer = `&buffer=10`;


  fetch(base + url + coor + buffer)
      .then(response => response.json())
      .then(e =>   localStorage.setItem("data",JSON.stringify(e)));
}



async function getErfgoedById(uri) {
  let data = await fetch(uri, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: "get",
  })
      .then(response => response.json())
      .then(e => {return e});
  return data
}