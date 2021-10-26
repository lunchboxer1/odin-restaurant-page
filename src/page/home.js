import '../style/pageStyle.css';
import headerImg from "../img/headerImg.jpg";

const homePage = () => {
    let divPage;
    
    //Page definition
    const buildPage = () => {
        divPage = document.createElement('div');
        divPage.classList.add('page');

        divPage.appendChild(Object.assign(
            document.createElement('h1'),
            {textContent: "LaPaz Fish Tacos"}));

        const img = new Image(200, 200);
        img.src = headerImg;
        divPage.appendChild(img);
    
        divPage.appendChild(Object.assign(
            document.createElement('p'),
            {textContent: "We serve the best fish tacos for miles around.  Even if we are 50 miles from water!"}));
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

export default homePage;