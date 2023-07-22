function imageCreater(classList, imgSource) {
    const img = document.createElement('img');
    img.classList.add(classList);
    img.src = imgSource

    return img
}


function containerDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div
}

export { imageCreater, containerDiv }