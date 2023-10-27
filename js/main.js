// Código de JavaScript para Trabajo práctico CaC
// Comisión 23519
// Grupo 22

/*
const mNombre = document.getElementById('NombreCompleto')

console.log(mNombre)
/*
//const EMail = document.getElementById("Email")
const NroTelefono = document.getElementById("NroTelefono")
const Comentarios = document.getElementById("Comentarios")
console.log(Comentarios)
c

*/

/*
let Parque = {
    nombre: "Rivadavia",
    barrio: "Caballito",
    descripcion: "Área verde con un monumento a Simón Bolívar, librerías de segunda mano y venta de vinilos vintage cada semana.",
    coordenadasGEO: "9HJ8+VP Buenos Aires",
    juegosinfantiles: true,
    senderismo: true,
    feria: true
}

*/

// Crear objetos para manipular los elementos del document

const ccform = document.getElementById("cform")
const ccnombre = document.getElementById("cname")
const ccparrafo = document.getElementById("warnings")
const cctelefono = document.getElementById("ctelefono")


// Crear un evento "submit" para programa el click en el botón Enviar Datos
//    se hace en el submit del form (por el tipo de boton)

ccform.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    ccparrafo.innerHTML = warnings
    if(ccnombre.value.length  < 6){
        warnings += `El nombre no es válido <br>`
    }

    if(isNaN(cctelefono.value)){
        warnings += `El número de teléfono no es válido <br>`
    }

    if(warnings.length > 0){
        ccparrafo.innerHTML = warnings
    }else
        {
            alert("Datos enviados!!!!!")
            window.close()
        }
    }
)

