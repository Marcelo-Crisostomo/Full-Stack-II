//Comentario 1 línea
/*Comentario extenso
fddffdf

*/

//Funciones

function mostrarMensajes(){
    alert("Bienvenido a JavaScript");
    console.log("Este mensajito es oculto shhhhh solo por consola");
}

//Variables y tipos de datos
//var = obsoleta, no recomendada.
//let = opción para variables si recomendada
let nombre = "Marcelo"; //String texto
let edad = 38 // number int
let peso = 80.5 //Decimal
let activo = true; //Boolean
let direccion; // Undefined
let telefono = null //null

let tipos = `
    <strong>Nombre: ${nombre} (${typeof nombre})</strong><br>
    <strong>Edad: ${edad} (${typeof edad})</strong><br>
    <strong>Peso: ${peso} (${typeof peso})</strong><br>
    <strong>Activo: ${activo} (${typeof activo})</strong><br>
    <strong>Dirección: ${direccion} (${typeof direccion})</strong><br>
    <strong>Teléfono: ${telefono} (${typeof telefono})</strong><br>
`;
//DOM
document.getElementById("tiposDatos").innerHTML = tipos;

//Operaciones básicas
let a = 10;
let b = 3;
let suma = a + b;
let resta = a-b;
let multiplicacion = a*b;
let division = a/b;
let modulo = a%b;

let operaciones = `
    <i class="fa-solid fa-plus"></i>Suma: ${suma}<br>
    <i class="fa-solid fa-minus"></i>Resta: ${resta}<br>
    <i class="fa-solid fa-xmark"></i>Multiplicación: ${multiplicacion}<br>
    <i class="fa-solid fa-divide"></i>División: ${division.toFixed(2)}<br>
    <i class="fa-solid fa-percent"></i>módulo: ${modulo}<br>
`;

document.getElementById("operaciones").innerHTML = operaciones;

//Formulario

function enviarFormulario(){
    const nombre = document.getElementById("nombre").value.trim(); //obteniendo y depurando

    const correo = document.getElementById("correo").value.trim(); //obteniendo y depurando

    const mensaje = document.getElementById("mensajeResultado");

    mensaje.className = "alert mt-3"

    //Validar campos vacíos
if(!nombre || !correo){
    mensaje.classList.add("alert-danger", "d-block");
    mensaje.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Por favor completa todos los campos';
    return;
}

if(!correo.includes("@")||!correo.includes(".") ){
    mensaje.classList.add("alert-warning", "d-block");
    mensaje.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Correo no válido';
    return
}

//Si está todo ok
mensaje.classList.add("alert-success", "d-block");
mensaje.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>Gracias por enviar el mensaje <strong>${nombre}</strong><br>
    Te llamamos pronto ${correo}
`;


}



