export default (() => {
    const buyNowButtons = document.querySelectorAll('.modal-button');
    const modalContainer = document.querySelector('.modal-content');
    const closeButtons = document.querySelectorAll('.close-button');
    const carousel = document.querySelectorAll('.modal-image-slide');
    const modalCheckouts = document.querySelectorAll('.modal-checkout');
    const modalForms = document.querySelectorAll('.modal-description');
    const description = document.getElementById('description');
    const detail = document.getElementById('details');
    const infos = document.getElementById('info');
    const infotext = document.querySelector('.modal-info-text p');


    buyNowButtons.forEach(buyNowButton => buyNowButton.addEventListener('click', () => {
        modalContainer.style.display = 'flex';
    }));

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            modalContainer.style.display = 'none';
        });
    })


    carousel.forEach(carousel => {
        carousel.addEventListener('click', () => {
            carousel.classList.toggle('slide-active');
        });

    })

    modalCheckouts.forEach(modalCheckout => {
        modalCheckout.addEventListener('click', () => {
            modalForms.forEach(modalForm => {
                modalForm.classList.toggle('activeForm');

            });
        });

    })

    description.addEventListener("click", () => {
        infotext.classList.toggle('active');

    })



})();



