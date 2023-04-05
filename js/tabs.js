export default (() => {
    const buttons = document.querySelectorAll('.modal-info-list ul li button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.target;
        const targetElement = document.querySelector(target);
        const activeText = document.querySelector('.modal-text.active');
        if (button.classList.contains('active')) {
          return; // El botón ya está activo, no hagas nada
        }
        targetElement.classList.add('active');
        activeText.classList.remove('active');
      });
    });
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () => {
        const activeButton = document.querySelector('.modal-info-list button.active');
        if (activeButton != buttons[i]) {
          activeButton.classList.remove('active');
          buttons[i].classList.add('active');
        }
      });
    };

  })();
  