// Código de JavaScript para Trabajo práctico CaC
// Comisión 23519
// Grupo 22

let Parque = {
    nombre: "Rivadavia",
    barrio: "Caballito",
    descripcion: "Área verde con un monumento a Simón Bolívar, librerías de segunda mano y venta de vinilos vintage cada semana.",
    coordenadasGEO: "9HJ8+VP Buenos Aires",
    juegosinfantiles: true,
    senderismo: true,
    feria: true
}


const Nombre = document.getElementById("NombreCompleto")
const EMail = document.getElementById("Email")
const NroTelefono = document.getElementById("NroTelefono")
const Comentarios = document.getElementById("Comentarios")
const Form = document.getElementById("form")

Form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    if(Nombre.ariaValueMax.length < 3){
        warnings += `El nombre no es válido <br>`}
})



