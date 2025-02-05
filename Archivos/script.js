    var sujeto = ['Mi abuelo', 'Mi padre', 'Mi vecino', 'Un extraterrestre'];
    var accion = ['se comió', 'rompió', 'tiró', 'quemó'];
    var objeto = ['mi tarea', 'mi celular', 'mi computadora', 'mi tarea'];
    var lugar = ['en la casa', 'en la escuela', 'en el trabajo', 'en la calle'];

function GeneradorExcusas() {
    return `${sujeto[Math.floor(Math.random() * sujeto.length)]} ${accion[Math.floor(Math.random() * accion.length)]} ${objeto[Math.floor(Math.random() * objeto.length)]} ${lugar[Math.floor(Math.random() * lugar.length)]}`;
}

function añadirSujeto(fraseSujeto) {
    sujeto.push(fraseSujeto);
}
function añadirAccion(fraseAccion) {
    accion.push(fraseAccion);
}
function añadirObjeto(fraseObjeto) {
    objeto.push(fraseObjeto);
}
function añadirLugar(fraseLugar) {
    lugar.push(fraseLugar);
}

function insertarExcusa() {
    var parrafo = document.querySelector('.excusagenerada');
    parrafo.innerText = GeneradorExcusas();
}

document.addEventListener('DOMContentLoaded', function() {
    insertarExcusa();
});

var boton = document.getElementById('botonexcusa');
boton.addEventListener('click', function() {
    insertarExcusa();
});
// Añadimos boton e inner para introducir nuevas frases.

var botonAñadirFrase = document.getElementById('botonAñadirFrase');
botonAñadirFrase.addEventListener('click', function() {
    var nuevaFrase= document.getElementById('nuevaFrase').value;
    var selectorDeFrases = document.getElementById('selectorFrases');
    if (nuevaFrase){
        if (selectorDeFrases.value === 'sujeto'){
            añadirSujeto(nuevaFrase);
        }
        else if (selectorDeFrases.value === 'accion'){
            añadirAccion(nuevaFrase);
        }
        else if (selectorDeFrases.value === 'objeto'){
            añadirObjeto(nuevaFrase);
        }
        else if (selectorDeFrases.value === 'lugar'){
            añadirLugar(nuevaFrase);
        }
        }
        document.getElementById('nuevaFrase').value = '';
    });
