import '../style/compStyle.css';

const navComponent = (linkHome, linkMenu, linkContact) => {
    let divComp;
    
    /*Define the page here*/
    const buildPage = (linkHome, linkMenu, linkContact) => {
        divComp = document.createElement('div');
    
        const ulNav = document.createElement('ul');
    
        const liNavHome = document.createElement('li');
        liNavHome.textContent = 'Home';
        liNavHome.addEventListener('click', linkHome);
    
        const liNavMenu = document.createElement('li');
        liNavMenu.textContent = 'Menu';
        liNavMenu.addEventListener('click', linkMenu);
    
        const liNavContact = document.createElement('li');
        liNavContact.textContent = 'Contact';
        liNavContact.addEventListener('click', linkContact);
    
        ulNav.appendChild(liNavHome);
        ulNav.appendChild(liNavMenu);
        ulNav.appendChild(liNavContact);
    
        divComp.appendChild(ulNav);
    }

    const getComponent = () => {
        return divComp;
    }

    const activate = () => {
        divComp.style.display = "flex";
    }

    const deactivate = () => {
        divComp.style.display = "none";
    }

    /*Initalizer function*/
    buildPage(linkHome, linkMenu, linkContact);

    return {getComponent, activate, deactivate};
}

export default navComponent;