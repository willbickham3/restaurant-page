function display() {
    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tabContainer');
    document.querySelector('#content').appendChild(tabContainer);

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

}

export default display