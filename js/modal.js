export default (() => {
    const buyNowButton = document.querySelector('#buy-now-button');
    const modalContainer = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
  

  
    buyNowButton.addEventListener('click', () => {
      modalContainer.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
      });
         

  })();
  