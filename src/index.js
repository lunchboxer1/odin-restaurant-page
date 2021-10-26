/*Houses and controls the logic and assigns the style of the whole site*/

import './style/style.css';

import homePage from './page/home';
import menuPage from './page/menu';
import contactPage from './page/contact';

import navComponent from './components/nav';

const index = (() => {
    //Select the content div to put the content into
    const content = document.querySelector('#content');

    //Add global styling
    content.classList.add('content');

    //Start building the page
    const nav = navComponent(navHome, navMenu, navContact);
    nav.activate();
    content.appendChild(nav.getComponent());

    const home = homePage();
    home.activate();
    content.appendChild(home.getPage());

    const menu = menuPage();
    menu.deactivate();
    content.appendChild(menu.getPage());

    const contact = contactPage();
    contact.deactivate();
    content.appendChild(contact.getPage());


    //Menu Call back functions
    function navHome() {
        home.activate();
        menu.deactivate();
        contact.deactivate();
    }
    
    function navMenu() {
        home.deactivate();
        menu.activate();
        contact.deactivate();
    }
    
    function navContact() {
        home.deactivate();
        menu.deactivate();
        contact.activate();
    }
    
})();