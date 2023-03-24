export default (() => {
    const buyNowButtons = document.querySelectorAll('.modal-button');
    const modalContainer = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
  

   
    buyNowButtons.forEach(buyNowButton => buyNowButton.addEventListener('click', () => {
         modalContainer.style.display = 'block';
    }));

    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
      });
         

  })();
  