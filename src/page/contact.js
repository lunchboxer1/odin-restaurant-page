import '../style/pageStyle.css';
import headerImg from "../img/headerImg.jpg";

const contactPage = () => {
    let divPage;
    
    //Page definition
    const buildPage = () => {
        //Build the base element and add styling
        divPage = document.createElement('div');
        divPage.classList.add('page');

        divPage.appendChild(Object.assign(
                document.createElement('h3'),
                {textContent: "Contact Information"}));
        
        divPage.appendChild(Object.assign(
            document.createElement('p'),
            {textContent: "Name: E. Parks"}));

        divPage.appendChild(Object.assign(
            document.createElement('p'),
            {textContent: "Phone Num: (555) 555-555"}));
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

export default contactPage;