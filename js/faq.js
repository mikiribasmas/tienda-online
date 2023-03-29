
export default (() => {
    const dropdowns = document.querySelectorAll('.faq-content-item-title svg');
    const dropdownDescriptions = document.querySelectorAll('.faq-content-item-description p');
    const items = document.querySelectorAll('.faq-content-item');
  
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener('click', () => {
        dropdowns[i].classList.toggle('active');
        dropdownDescriptions[i].classList.toggle('active');
        items[i].classList.toggle('active');
      });
    }
  })();
  