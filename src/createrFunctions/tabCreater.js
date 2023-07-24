function createTabsWithImage(element, text, classList, idName, ImageSrc) {
    const tab = document.createElement(element);
    tab.innerHTML = text;
    tab.classList.add(classList);
    tab.setAttribute('id', idName);

    const image = document.createElement('img');
    image.src = ImageSrc;

    tab.appendChild(image);
    return tab
}

export default createTabsWithImage