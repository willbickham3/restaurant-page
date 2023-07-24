import createTabsWithImage from './createrFunctions/tabCreater'
import banner from '/src/images/banner2.png'
import { containerDiv, imageCreater } from './createrFunctions/imageCreater';
import createMenu from './pageBuilders/menu';
import homePage from './pageBuilders/home';
import contactUs from './pageBuilders/contact';
import removeChildEle from './createrFunctions/removeChild';

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

    tabContainer.append(menuBtn, homeBtn, contactBtn);

function menuLoad() {const menuBtn = document.querySelector('#menuBtn');
    menuBtn.addEventListener('click', function () {
        removeChildEle(content);
        createMenu()
        menuBtn.disabled = true;
        homeBtn.disabled = false;
        contactBtn.disabled = false;
})}

function homeLoad() {
    const homeBtn = document.querySelector('#homeBtn');
        homeBtn.addEventListener('click', function () {
            removeChildEle(content);
        homePage();
        homeBtn.disabled = true;
        menuBtn.disabled = false;
        contactBtn.disabled = false
})}

function contactLoad() {
    const contactBtn = document.querySelector('#contactBtn');
        contactBtn.addEventListener('click', function () {
            removeChildEle(content);
        contactUs();
        homeBtn.disabled = false;
        menuBtn.disabled = false;
        contactBtn.disabled = true
})}

    menuLoad();
    homeLoad();
    contactLoad();
}

export default tabDisplay