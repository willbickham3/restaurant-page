import orcCook from '/src/images/Zug-Zug.jpg'
import robbyflay from '/src/images/robby-flay.jpg'

function homePage() {
    const greetingDiv = document.createElement('div');
    greetingDiv.classList.add('sub-header');
    greetingDiv.innerHTML = 'Meet the Cooks!';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const orcImage = document.createElement('img');
    orcImage.classList.add('image-chef');
    orcImage.src = orcCook;

    const humanImage = document.createElement('img');
    humanImage.classList.add('image-chef');
    humanImage.src = robbyflay;

    document.querySelector('#content').appendChild(greetingDiv);
    imageContainer.append(humanImage, orcImage)
    greetingDiv.appendChild(imageContainer);
}

export default homePage