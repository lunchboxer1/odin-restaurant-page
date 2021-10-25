/*Houses and controls the logic and assigns the style of the whole site*/

import './style/style.css';

import home from "./page/home"
import menu from './page/menu';
import navComponent from './components/nav';

//Main entry point
console.log("hello World");
initSite();

/*Function Definitions*/
function selectContent() {
    //Select the content div to put the content into
    const content = document.querySelector('#content');

    //Add global styling
    content.classList.add('content');

    return content;
}

function initSite() {
    
    const content = selectContent();

    content.appendChild(navComponent(navHome, navMenu, navContact));

    //Build all the divs here.  THen toggle each to off (display: none, then when neccesary just turn on the appropriate div (dipslay: flex))
    content.appendChild(home());
}

function renderPage(page) {

    const content = selectContent();
    
    if (page === undefined) page = 'home';

    console.log(page);
    switch(page) {
        case 'home':
            //Logic to switch between the pages
            content.appendChild(navComponent(navHome, navMenu, navContact));
            content.appendChild(home());
            break;
        case 'menu':
            //Logic to switch between the pages
            content.appendChild(navComponent(navHome, navMenu, navContact));
            content.appendChild(menu());
            break;
    }
}

function navHome() {
    console.log('home');
    renderPage('home');
}

function navMenu() {
    console.log('Menu');
    renderPage('menu');
    //content.appendChild(menu());
}

function navContact() {
    console.log('Contact');
    renderPage();
}

