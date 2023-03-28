export default (() => {
    const dropdowns = document.querySelectorAll('.faq-content-item-title svg');
    const dropdownDescription = document.querySelector('.faq-content-item-description p');
    const itemsHeight = document.querySelectorAll('.faq-content-item');
    dropdowns.forEach(dropdown=> {
        dropdown.addEventListener('click', () => {
        dropdownDescription.classList.toggle('active');
        itemsHeight.classList.toggle('active');

        console.log(dropdownDescription);    
        });
    
    })
   
  })();