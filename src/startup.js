import createTabsWithImage from './tabCreater'
import banner from '/src/images/banner2.png'
import { containerDiv, imageCreater } from './imageCreater';

// createTabsWithImage takes 3 arguments (inner text of button, class of button, and image src)
// page load module

function tabDisplay() {
    const content = document.querySelector('#content');

    let navHeader = document.createElement('header');
    const tabContainer = containerDiv('nav', 'tabContainer');
    
    document.body.prepend(navHeader)
    document.querySelector('header').appendChild(tabContainer);

    const menuBtn = createTabsWithImage('button', 'Menu', 'navButton', banner);
    const homeBtn = createTabsWithImage('button', 'Home', 'navButton', banner);
    const contactBtn = createTabsWithImage('button', 'Contact Us', 'navButton', banner);

    tabContainer.append(menuBtn, homeBtn, contactBtn);
}

export default tabDisplay