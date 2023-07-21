function createTabsWithImage(text, classList, ImageSrc) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.classList.add(classList);

    const image = document.createElement('img');
    image.src = ImageSrc;

    button.appendChild(image);
    return button
}

export default createTabsWithImage