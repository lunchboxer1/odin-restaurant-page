import '../style/pageStyle.css';
import headerImg from "../img/headerImg.jpg";

/*Module Exports*/
export default home;

/*Definitions*/
function home() {
    const divPage = document.createElement('div');
    divPage.classList.add('page');

    const header = document.createElement('h1');
    header.textContent = "LaPaz Fish Tacos";
    divPage.appendChild(header);

    const img = new Image(200, 200);
    img.src = headerImg;
    divPage.appendChild(img);

    const description = document.createElement('p');
    description.textContent = "We serve the best fish tacos for miles around.  Even if we are 50 miles from water!";
    divPage.appendChild(description);

    return divPage;
}

