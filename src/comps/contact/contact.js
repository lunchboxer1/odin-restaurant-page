import '../../style/compStyle.css';
import './style.css';

const contactComponent = () => {
  let divComp;

  const buildComponent = () => {
    divComp = document.createElement('div');
    divComp.id = 'contact';
    divComp.classList.add('component');

    // Default to active
    divComp.style.display = 'flex';

    divComp.textContent = 'contact';
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

export default contactComponent;
