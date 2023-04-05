export default (() => {

const botonSumar = document.querySelector(".boton-sumar");
const botonRestar = document.querySelector(".boton-restar");
const cantidad = document.querySelector(".cantidad");
let fixedPrice = 29.99;

let contador = 0 ;

botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);

function sumar() {
    contador++;
    actualizarCantidad();

}

function restar() {
    if (contador > 0) {
        contador--;
        actualizarCantidad();
    }
}

function actualizarCantidad() {
    cantidad.textContent = contador;
    prices();
}

let precioElemento = document.getElementById("offer-price").textContent.replace("€" , "");







})();