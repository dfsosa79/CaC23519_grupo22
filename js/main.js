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

const ccform = document.getElementById("cform")
const ccnombre = document.getElementById("cname")


ccform.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "Hola"
    if(ccnombre.value.length  < 6){
        alert("Nombre corto")
    }
})
