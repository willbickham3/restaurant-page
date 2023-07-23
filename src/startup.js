import createTabsWithImage from './tabCreater'
import banner from '/src/images/banner2.png'
import { containerDiv, imageCreater } from './imageCreater';
import createMenu from './menu';
import homePage from './home';

// createTabsWithImage takes 3 arguments (inner text of button, class of button, and image src)
// page load module

function tabDisplay() {
    const content = document.querySelector('#content');

    let navHeader = document.createElement('header');
    const tabContainer = containerDiv('nav', 'tabContainer');
    
    document.body.prepend(navHeader)
    document.querySelector('header').appendChild(tabContainer);

    const menuBtn = createTabsWithImage('button', 'Menu', 'navButton', 'menuBtn', banner);
    const homeBtn = createTabsWithImage('button', 'Home', 'navButton', 'homeBtn', banner);
    const contactBtn = createTabsWithImage('button', 'Contact Us', 'navButton', 'contactBtn', banner);

    function menuLoad() {const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', function () {
    document.querySelector('.sub-header').remove();
    createMenu()
    menuBtn.disabled = true;
    homeBtn.disabled = false;
})}

function homeLoad() {const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', function () {
    homeBtn.disabled = true;
    menuBtn.disabled = false;
    document.querySelector('.menu').remove();
    homePage();
})}

    tabContainer.append(menuBtn, homeBtn, contactBtn);
    menuLoad();
    homeLoad();
}

export default tabDisplay