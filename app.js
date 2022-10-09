const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
});



/* DOCUMENTACION

Obtenemos el elemento con el ID 'contenedorQR' y lo almacenamos en una constante para acceder a ella mas adelante.

Creamos otra constante que sera igual a una nueva instancia (new) de la clase QRCode(), la cual viene en la libreria importada


*/