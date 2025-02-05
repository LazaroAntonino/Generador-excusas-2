function GeneradorExcusas() {
    const sujeto = ['Mi abuelo', 'Mi padre', 'Mi vecino', 'Un extraterrestre'];
    const accion = ['se comió', 'rompió', 'tiró', 'quemó'];
    const objeto = ['mi tarea', 'mi celular', 'mi computadora', 'mi tarea'];
    const lugar = ['en la casa', 'en la escuela', 'en el trabajo', 'en la calle'];
    
    return `${sujeto[Math.floor(Math.random() * sujeto.length)]} ${accion[Math.floor(Math.random() * accion.length)]} ${objeto[Math.floor(Math.random() * objeto.length)]} ${lugar[Math.floor(Math.random() * lugar.length)]}`;
}

function insertarExcusa() {
    var parrafo = document.querySelector('.excusagenerada');
    parrafo.innerText = GeneradorExcusas();
}

// Evento que se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    insertarExcusa();
});

// Evento que se ejecuta cuando se hace clic en el botón
var boton = document.getElementById('botonexcusa');
boton.addEventListener('click', function() {
    insertarExcusa();
});
