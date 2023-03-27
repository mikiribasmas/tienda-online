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
    const hamburguerIcons = document.querySelectorAll('.hamburguer-icon img');
    const menuItems = document.querySelector('.menu-items ul li');

    hamburguerIcons.forEach(hamburguerIcon => {
      hamburguerIcon.addEventListener('click', () => {
        menuItems.classList.toggle('active');
        console.log('Hamburguesa clickeada');
        
      });
    });
  })();

  
  
  