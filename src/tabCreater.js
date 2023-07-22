function createTabsWithImage(element, text, classList, ImageSrc) {
    const tab = document.createElement(element);
    tab.innerHTML = text;
    tab.classList.add(classList);

    const image = document.createElement('img');
    image.src = ImageSrc;

    tab.appendChild(image);
    return tab
}

export default createTabsWithImage