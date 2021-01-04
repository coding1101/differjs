function createElement(element, innerHTML) {
    var element = document.createElement(element);
    element.innerHTML = `${innerHTML}`;
    document.body.appendChild(element); 
}

module.exports = createElement;