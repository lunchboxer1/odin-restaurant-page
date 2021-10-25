import '../style/pageStyle.css';
import headerImg from "../img/headerImg.jpg";

/*Module Exports*/
export default menu;

/*Definitions*/
function menu() {
    const divPage = document.createElement('div');
    divPage.classList.add('page');

    const header = document.createElement('h1');
    header.textContent = "Menu Items";
    divPage.appendChild(header);

    const description = document.createElement('p');
    description.textContent = "Item 1";
    divPage.appendChild(description);

    return divPage;
}

