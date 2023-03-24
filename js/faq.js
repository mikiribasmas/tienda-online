export default (() => {
    const dropdowns = document.querySelectorAll('.faq-content-item-title svg')
    dropdowns.forEach(dropdown=> {
        dropdown.addEventListener('click', () => {
            console.log('droppp');    
        });
    
    })
   
  })();