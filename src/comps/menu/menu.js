import '../../style/compStyle.css';
import './style.css';

const menuComponent = () => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('div');
    divComp.id = 'menu';
    divComp.classList.add('component');

    // Default to active
    divComp.style.display = 'flex';

    divComp.textContent = 'menu';
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

export default menuComponent;
