//Para que un modulo se pueda cargar externamente debemos escribir la palabra reservada "export" y luego el nombre de nuestro modulo

export default (() => {

    const flipButtons = document.querySelectorAll('.flip-button');

    flipButtons.forEach(flipButton => {
        flipButton.addEventListener('click', () => {
            flipButton.closest('.flip-card').classList.toggle('active');
        });
    });
})();


