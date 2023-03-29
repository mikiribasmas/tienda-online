// export default (() => {
//     const hamburguerIcons = document.querySelectorAll('.hamburguer-icon');
//     const socialIcons = document.querySelectorAll('.menu-items ul li');

//     hamburguerIcons.forEach(hamburguerIcon => {
//         hamburguerIcon.addEventListener('click', () => {
//             console.log('hamburguer clicked');    
//         });
//     });
//     console.log('hola');

// })();


// export default (() => {
//     const hamburguerIcons = document.querySelectorAll('.hamburguer-icon img');
//     const menuItems = document.querySelector('.menu-items ul li');
  
//     hamburguerIcons.forEach(hamburguerIcon => {
//       hamburguerIcon.addEventListener('click', () => {
//         menuItems.classList.toggle('active');
//       });
//     });
//   })();


    

export default (() => {
  const inactiveIcons = document.querySelectorAll('.menu-items');
  const hamburguerIcons = document.querySelectorAll('.hamburguer-icon');
  const menuItems = document.querySelectorAll('.menu-items ul li');
  const hamburgerContainer = document.querySelectorAll('.hamburguer');

  for(let i = 0; i < hamburguerIcons.length; i++) {
    hamburguerIcons[i].addEventListener('click', () => {
      menuItems[i].classList.toggle('active');
      inactiveIcons[i].classList.toggle('active');
      hamburgerContainer[i].classList.toggle('active');
      console.log('Hamburguesa clickeada');
    });
  }

  const icons = document.querySelectorAll('.icon');
  icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open");
    });
  });
})();


  
  
  