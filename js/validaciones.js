export function validar(input) {
    const tipoInput = input.dataset.tipo; //Coleccion de los datas llamados tipo
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input), //Recibe input y manda a llamar a validarNacimiento
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return (diferenciaFechas <= fechaActual);
}