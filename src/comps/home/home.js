import '../../style/compStyle.css';
import './style.css';

const homeComponent = () => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('div');
    divComp.id = 'home';
    divComp.classList.add('component');

    // Default to active
    divComp.style.display = 'flex';

    divComp.textContent = 'home';
  };

  const getComponent = () => divComp;

  const activate = () => {
    divComp.style.display = 'flex';
  };

  const deactivate = () => {
    divComp.style.display = 'none';
  };

  buildComponent();

  return {
    getComponent,
    activate,
    deactivate,
  };
};

export default homeComponent;
