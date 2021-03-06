import '../style/pageStyle.css';
import headerImg from "../img/headerImg.jpg";

const menuPage = () => {
    let divPage;
    

    /*Define the page here*/
    const buildPage = () => {
        divPage = document.createElement('div');
        divPage.classList.add('page');

        divPage.appendChild(Object.assign(
            document.createElement('h1'),
            {textContent: "Menu Items"}));
    
        divPage.appendChild(Object.assign(
            document.createElement('p'),
            {textContent: "Item 1: Fish Tacos"}));

        divPage.appendChild(Object.assign(
            document.createElement('p'),
            {textContent: "Item 2: Shrimp Tacos"}));
    }


    const getPage = () => {
        return divPage;
    }

    const activate = () => {
        divPage.style.display = "flex";
    }

    const deactivate = () => {
        divPage.style.display = "none";
    }


    /*Initalizer function*/
    buildPage();

    return {getPage, activate, deactivate};
}

export default menuPage;