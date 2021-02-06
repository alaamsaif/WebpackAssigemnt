import './text.css'
function component() {
    const element = document.createElement("div");
    element.innerHTML = "Webpack Assigemnt";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());