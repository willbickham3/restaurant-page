function imageCreater(classList, imgSource) {
    const img = document.createElement('img');
    img.classList.add(classList);
    img.src = imgSource

    return img
}


function containerDiv(element, className, string) {
    const div = document.createElement(element);
    div.classList.add(className);
    div.innerHTML = string;
    return div
}

export { imageCreater, containerDiv }