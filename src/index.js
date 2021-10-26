import './style/style.css';
// import msgComponent from './comps/msg/msg';
// import printMe from './comps/print/print';
import navComponent from './comps/nav/nav';
import homeComponent from './comps/home/home';
import menuComponent from './comps/menu/menu';
import contactComponent from './comps/contact/contact';

const mainPage = () => {
  let divComp;
  const nav = navComponent();
  const home = homeComponent();
  const menu = menuComponent();
  const contact = contactComponent();

  const renderPage = (page) => {
    switch (page) {
      case 'home':
        home.activate();
        menu.deactivate();
        contact.deactivate();
        break;
      case 'menu':
        home.deactivate();
        menu.activate();
        contact.deactivate();
        break;
      case 'contact':
        home.deactivate();
        menu.deactivate();
        contact.activate();
        break;
      default:
        break;
    }
  };

  const navCallback = (target) => {
    renderPage(target);
  };

  const buildPage = () => {
    divComp = document.createElement('div');

    nav.initialize(navCallback, 'home', 'menu', 'contact');

    divComp.appendChild(nav.getComponent());

    divComp.appendChild(home.getComponent());
    divComp.appendChild(menu.getComponent());
    divComp.appendChild(contact.getComponent());

    renderPage('home');
  };

  const getComponent = () => divComp;

  buildPage();

  return { getComponent };
};

const main = mainPage();
document.body.appendChild(main.getComponent());
