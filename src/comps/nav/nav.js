import '../../style/compStyle.css';
import './style.css';

const navComponent = () => {
  let divComp;

  const buildComponent = (navCallback, ...args) => {
    divComp = document.createElement('div');
    divComp.id = 'nav';
    divComp.classList.add('component');

    args.forEach((element) => {
      const divNavElement = document.createElement('div');
      divNavElement.textContent = element;
      divNavElement.addEventListener('click', (e) => {
        navCallback(e.target.textContent);
      });
      divComp.appendChild(divNavElement);
    });

    // Default to active
    divComp.style.display = 'flex';
  };

  const initialize = (navCallback, ...args) => {
    buildComponent(navCallback, ...args);
  };

  const getComponent = () => divComp;

  const activate = () => {
    divComp.style.display = 'flex';
  };

  const deactivate = () => {
    divComp.style.display = 'none';
  };

  return {
    initialize,
    getComponent,
    activate,
    deactivate,
  };
};

export default navComponent;
