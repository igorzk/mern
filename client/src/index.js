function component() {
    const element = document.createElement("div");

    element.innerHTML = "MERN example";

    return element;
}

document.body.appendChild(component());
