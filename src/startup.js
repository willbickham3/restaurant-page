function tabDisplay() {
    const content = document.querySelector('#content');

    let navHeader = document.createElement('header');
    const tabContainer = document.createElement('nav');
    tabContainer.classList.add('tabContainer');
    
    document.body.prepend(navHeader)
    document.querySelector('header').appendChild(tabContainer);

    const menuBtn = document.createElement('Button');
    menuBtn.innerHTML = 'Menu';
    menuBtn.classList.add('navButton');

    const homeBtn = document.createElement('Button');
    homeBtn.innerHTML = 'Home';
    homeBtn.classList.add('navButton');

    const contactBtn = document.createElement('Button');
    contactBtn.innerHTML = 'Contact Us';
    contactBtn.classList.add('navButton');

    tabContainer.append(menuBtn, homeBtn, contactBtn);


    let mainContent = document.createElement('div');

    content.appendChild(mainContent);
    
}

export default tabDisplay