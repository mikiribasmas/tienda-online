export default (() => {
    const hamburguerIcons = document.querySelectorAll('.hamburguer-icon');
    const socialIcons = document.querySelectorAll('.menu-items ul li');

    hamburguerIcons.forEach(hamburguerIcon => {
        hamburguerIcon.addEventListener('click', () => {
            console.log('hamburguer clicked');    
        });
    });
    console.log('hola');

})();