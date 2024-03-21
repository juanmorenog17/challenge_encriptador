let globals = {};

// Asignación de variables globales al inicio
globals.texto = document.getElementById("mensaje");
globals.tituloMensaje = document.getElementById("titulo-mensaje");
globals.parrafo = document.getElementById("parrafo");
globals.imagen = document.getElementById("imagen");




// Función para encriptar
function encriptar() {

    let texto = globals.texto.value;
    let tituloMensaje = globals.tituloMensaje;
    let parrafo = globals.parrafo;
    let imagen = globals.imagen;

    // Reemplazar texto
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    // Validar si la longitud de caracteres es diferente de 0
    if (texto.length != 0) {
        // Asignar texto cifrado al campo de texto
        globals.texto.value = textoCifrado;
        // Mostrar mensaje de éxito
        tituloMensaje.textContent = "Texto encriptado con éxito";
        // Quitar mensaje y dejarlo vacío
        parrafo.textContent = "";
        // Cambiar imagen
        imagen.src = "./img/encriptado.jpg";
    } else {
        // Mostrar imagen de vacío en caso contrario
        imagen.src = "./img/vacio.png";
        // Mostrar mensajes
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto, no lo dejes vacío!";


        //swal para mostrar alert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algún texto',
        });

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algún texto',
        });
    }
}

// Función para desencriptar
function desencriptar() {


    let texto = globals.texto.value;
    let tituloMensaje = globals.tituloMensaje;
    let parrafo = globals.parrafo;
    let imagen = globals.imagen;

    // Reemplazar texto
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    // Validar si la longitud de caracteres es diferente de 0
    if (texto.length != 0) {
        // Asignar texto cifrado al campo de texto
        globals.texto.value = textoCifrado;
        // Mostrar mensaje de éxito
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        // Quitar mensaje y dejarlo vacío
        parrafo.textContent = "";
        // Cambiar imagen
        imagen.src = "./img/desencriptado.png";
    } else {
        // Mostrar imagen de vacío en caso contrario
        imagen.src = "./img/vacio.png";
        // Mostrar mensajes
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto, no lo dejes vacío!";


        //swal para mostrar alert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algún texto',
        });

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algún texto',
        });
    }
}
