import '../style/navStyle.css';
//import headerImg from "../img/headerImg.jpg";
//import image2 from "../img/biteMe.jpg"

/*Module Exports*/
export default navComponent;

/*Definitions*/
function navComponent(home, menu, contact) {
    const component = document.createElement('div');
    
    const ulNav = document.createElement('ul');

    const liNavHome = document.createElement('li');
    liNavHome.textContent = 'Home';
    liNavHome.addEventListener('click', home);

    const liNavMenu = document.createElement('li');
    liNavMenu.textContent = 'Menu';
    liNavMenu.addEventListener('click', menu);

    const liNavContact = document.createElement('li');
    liNavContact.textContent = 'Contact';
    liNavContact.addEventListener('click', contact);

    ulNav.appendChild(liNavHome);
    ulNav.appendChild(liNavMenu);
    ulNav.appendChild(liNavContact);

    component.appendChild(ulNav);

    //Pad
    


    return component;
}

function navCallback() {
    console.log("UIORW");
}

