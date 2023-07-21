import homePage from './home';
import createTabsWithImage from './tabCreater'
import banner from 'images/banner.png'

// createTabsWithImage takes 3 arguments (inner text of button, class of button, and image src)
// page load module

function tabDisplay() {
    const content = document.querySelector('#content');

    let navHeader = document.createElement('header');
    const tabContainer = document.createElement('nav');
    tabContainer.classList.add('tabContainer');

    let bannerBottom = document.createElement('img');
    bannerBottom.src = banner;
    
    document.body.prepend(navHeader)
    document.querySelector('header').appendChild(tabContainer);

    const menuBtn = createTabsWithImage('Menu', 'navButton', banner);
    const homeBtn = createTabsWithImage('Home', 'navButton', banner);
    const contactBtn = createTabsWithImage('Contact Us', 'navButton', banner);

    tabContainer.append(menuBtn, homeBtn, contactBtn);

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content')

    content.appendChild(mainContent);
    homePage();
}

export default tabDisplay