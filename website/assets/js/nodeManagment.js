function createElement(elem){
    return document.createElement(elem);
}

function setAttribute(elem,name,value){
    elem.setAttribute(name,value);
}
function makeTextNode(elem,text) {
    let textNode = document.createTextNode(text);
    elem.appendChild(textNode);
}